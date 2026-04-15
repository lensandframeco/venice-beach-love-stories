import http from "http";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "..", "dist");
const SITE_ORIGIN = "https://www.venicebeachlovestories.com";

const MIME = {
  ".js": "application/javascript", ".mjs": "application/javascript",
  ".css": "text/css", ".html": "text/html; charset=utf-8",
  ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg", ".ico": "image/x-icon", ".webp": "image/webp",
  ".json": "application/json", ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8", ".woff2": "font/woff2", ".woff": "font/woff",
};

async function findPort(min, max) {
  for (let port = min; port <= max; port++) {
    const ok = await new Promise((resolve) => {
      const s = http.createServer();
      s.listen(port, "127.0.0.1", () => s.close(() => resolve(true)));
      s.on("error", () => resolve(false));
    });
    if (ok) return port;
  }
  throw new Error("no free port");
}

async function getRoutes() {
  try {
    const sitemap = await fs.readFile(path.join(distDir, "sitemap.xml"), "utf-8");
    const paths = [];
    for (const m of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
      try { paths.push(new URL(m[1]).pathname || "/"); } catch {}
    }
    if (paths.length > 0) return [...new Set(paths)];
  } catch {}
  return ["/"];
}

async function main() {
  const routes = await getRoutes();
  console.log(`[prerender] ${routes.length} routes`);

  const port = await findPort(3100, 3199);
  const server = http.createServer(async (req, res) => {
    const urlPath = (req.url ?? "/").split("?")[0];
    const tryPaths = urlPath === "/"
      ? ["index.html"]
      : [urlPath, urlPath + "/index.html", urlPath.replace(/^\//, "")];
    for (const p of tryPaths) {
      const full = path.join(distDir, p);
      if (!full.startsWith(distDir)) continue;
      try {
        const data = await fs.readFile(full);
        res.writeHead(200, { "Content-Type": MIME[path.extname(full).toLowerCase()] ?? "application/octet-stream" });
        return res.end(data);
      } catch {}
    }
    // SPA fallback
    try {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(await fs.readFile(path.join(distDir, "index.html")));
    } catch {
      res.writeHead(404); res.end("Not found");
    }
  });
  await new Promise((r) => server.listen(port, "127.0.0.1", r));

  const { default: puppeteer } = await import("puppeteer");
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage", "--disable-gpu"],
  });

  const CONCURRENCY = 3;
  const queue = [...routes];
  let done = 0, failed = 0;

  const workers = Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length > 0) {
      const route = queue.shift();
      const url = `http://127.0.0.1:${port}${route === "/" ? "" : route}`;
      const page = await browser.newPage();
      try {
        await page.goto(url, { waitUntil: "networkidle0", timeout: 25_000 });
        await page.waitForSelector("#root > *", { timeout: 8_000 }).catch(() => {});
        let html = await page.content();

        if (SITE_ORIGIN) {
          html = html.replaceAll(`http://127.0.0.1:${port}`, SITE_ORIGIN);
        }

        const outPath = route === "/"
          ? path.join(distDir, "index.html")
          : path.join(distDir, route.replace(/^\//, ""), "index.html");
        await fs.mkdir(path.dirname(outPath), { recursive: true });
        await fs.writeFile(outPath, html);
        done++;
      } catch (err) {
        failed++;
        console.warn(`[prerender] ${route} failed: ${err.message}`);
      } finally {
        await page.close().catch(() => {});
      }
    }
  });

  try {
    await Promise.all(workers);
  } finally {
    await browser.close();
    await new Promise((r) => server.close(() => r()));
  }
  console.log(`[prerender] done: ${done}, failed: ${failed}`);
  // Non-fatal: even if some routes fail, build continues as SPA fallback.
}

main().catch((err) => {
  console.error("[prerender] fatal:", err);
  // Don't fail the build — fall back to SPA.
  process.exit(0);
});
