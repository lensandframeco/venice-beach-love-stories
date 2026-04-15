import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { NewsletterForm } from "@/components/NewsletterForm";
import { ScrollProgress } from "@/components/ScrollProgress";
import { stories } from "@/data/stories";
const heroImage = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/80a9dba4-b9b4-4ffb-a429-3802fcfb6390.png";
const heroImageMobile = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/ac5b623e-456b-464d-87c1-e1a3f981f11e.jpg";
const kerryWide = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/9abe69bf-06f9-4623-b0f5-4697e36bcdbf.jpg";
const heroSunsetBlur = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/304588ed-23cb-42b0-80d9-6be0b5f7ca33.jpg";
import { useIsMobile } from "@/hooks/use-mobile";
const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const horizontalTrackRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [isStoriesActive, setIsStoriesActive] = useState(false);
  const [isDraggingStories, setIsDraggingStories] = useState(false);
  const dragStartXRef = useRef<number | null>(null);
  const dragStartPosRef = useRef<number>(0);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  // Touch devices (mobile + tablets) often have a smaller scroll delta per gesture.
  // Treat any coarse-pointer device as “touch” for tuning.
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(pointer: coarse)");
    const update = () => setIsCoarsePointer(mql.matches);
    update();
    // Safari < 14 fallback
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const add = (mql as any).addEventListener ? "addEventListener" : "addListener";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const remove = (mql as any).removeEventListener ? "removeEventListener" : "removeListener";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (mql as any)[add]("change", update);
    return () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (mql as any)[remove]("change", update);
    };
  }, []);
  const { scrollYProgress: horizontalProgress } = useScroll({
    // The page scrolls inside .snap-container (not window), so we must bind to it.
    container: containerRef,
    target: horizontalRef,
    // On touch devices, using "end start" makes progress reach 1 sooner (less vertical travel
    // required), which makes the horizontal movement feel responsive.
    offset: ["start start", isCoarsePointer ? "end start" : "end end"],
  });
  // Pixel-based horizontal transform (prevents % rounding / overshoot that can feel like “skipping”)
  const [maxTranslateX, setMaxTranslateX] = useState(0);

  const calcMaxTranslate = useMemo(
    () => () => {
      const viewportW = horizontalRef.current?.clientWidth ?? 0;
      const trackW = horizontalTrackRef.current?.scrollWidth ?? 0;
      setMaxTranslateX(Math.max(0, trackW - viewportW));
    },
    []
  );

  useEffect(() => {
    calcMaxTranslate();

    const ro = new ResizeObserver(() => calcMaxTranslate());
    if (horizontalRef.current) ro.observe(horizontalRef.current);
    if (horizontalTrackRef.current) ro.observe(horizontalTrackRef.current);

    window.addEventListener("resize", calcMaxTranslate);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", calcMaxTranslate);
    };
  }, [calcMaxTranslate]);

  // Safety net for mobile/trackpads: while Stories is active, disable vertical snap so we
  // don't "jump" to the next section before the horizontal scroll completes.
  useEffect(() => {
    const el = horizontalRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        // Consider Stories active when a meaningful portion is in view.
        setIsStoriesActive(entry.isIntersecting && entry.intersectionRatio > 0.25);
      },
      {
        root: containerRef.current ?? null,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const scrollSpeed = isCoarsePointer ? 1.75 : 1;
  const x = useTransform(horizontalProgress, (p) => {
    const tuned = Math.min(1, Math.max(0, p * scrollSpeed));
    return -tuned * maxTranslateX;
  });

  // On touch devices, allow direct swipe/drag on the horizontal track.
  // Once the user has touched the track, we use their manual position instead of scroll-driven.
  const [dragX, setDragX] = useState(0);
  const [hasTouchedStories, setHasTouchedStories] = useState(false);
  // Use touch-driven position once user has interacted; otherwise fall back to scroll-driven.
  const effectiveX = isCoarsePointer && hasTouchedStories ? dragX : x;

  // iOS Safari can interpret horizontal swipes as browser back/forward navigation.
  // React's synthetic touch events are often passive, so preventDefault won't work reliably.
  // We attach non-passive listeners directly to the track and (when the gesture is horizontal)
  // prevent default scrolling/navigation and drive the transform ourselves.
  useEffect(() => {
    const el = horizontalTrackRef.current;
    if (!el || !isCoarsePointer) return;

    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      touchStartRef.current = { x: t.clientX, y: t.clientY };
      // If first touch, initialize from scroll-driven position; otherwise keep current manual position.
      const startPos = hasTouchedStories ? dragX : x.get();
      dragStartPosRef.current = startPos;
      setDragX(startPos);
      setHasTouchedStories(true);
      setIsDraggingStories(false);
    };

    const onTouchMove = (e: TouchEvent) => {
      const start = touchStartRef.current;
      const t = e.touches[0];
      if (!start || !t) return;

      const dx = t.clientX - start.x;
      const dy = t.clientY - start.y;
      const absX = Math.abs(dx);
      const absY = Math.abs(dy);

      // Only take over when the user is clearly swiping horizontally.
      if (absX > 6 && absX > absY) {
        // Block native scroll + iOS back/forward gesture.
        e.preventDefault();
        e.stopPropagation();
        setIsDraggingStories(true);

        const next = dragStartPosRef.current + dx;
        setDragX(Math.min(0, Math.max(-maxTranslateX, next)));
      }
    };

    const onTouchEnd = () => {
      touchStartRef.current = null;
      // Small delay helps prevent the synthetic click from firing navigation right after a swipe.
      window.setTimeout(() => setIsDraggingStories(false), 0);
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    el.addEventListener("touchcancel", onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
      el.removeEventListener("touchcancel", onTouchEnd);
    };
  }, [isCoarsePointer, maxTranslateX, x, hasTouchedStories, dragX]);

  const storySnapSteps = isCoarsePointer ? 4 : 6;
  return <div ref={containerRef} className={`snap-container ${isStoriesActive ? "snap-container--no-snap" : ""}`}>
      <ScrollProgress />
      <Navigation />

      {/* Section 1: Opening Credits */}
      <section className="snap-section relative film-grain">
        <div className="absolute inset-0">
          <motion.div initial={{
          scale: 1.1
        }} animate={{
          scale: 1
        }} transition={{
          duration: 2,
          ease: "easeOut"
        }} className="w-full h-full">
            <img 
              src={isMobile ? heroImageMobile : heroImage} 
              alt="Venice Beach Love Stories" 
              className="w-full h-full object-cover" 
              style={{ objectPosition: isMobile ? 'center' : 'center 20%' }}
            />
          </motion.div>
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="absolute inset-x-0 bottom-20 z-10 flex flex-col items-center text-center px-6 md:bottom-24 lg:bottom-32">
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 1.5,
          delay: 0.5
        }}>
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 1,
            delay: 1
          }} className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-overlay-light/90 italic mb-3 sm:mb-4 md:mb-8 text-shadow-cinematic max-w-4xl">Many love stories. One contested paradise.</motion.p>
            <motion.p initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 1,
            delay: 1.5
          }} className="text-overlay-light/60 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-16 max-w-2xl mx-auto">
              A documentary series by Kerry Candaele about art, memory, and lived experience in Venice Beach
            </motion.p>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 2,
            duration: 0.8
          }}>
              <Link to="/stories" className="inline-block px-10 sm:px-12 py-5 sm:py-6 border border-overlay-light/40 text-overlay-light 
                           text-xs sm:text-sm uppercase tracking-[0.3em] hover:bg-overlay-light hover:text-overlay-dark 
                           transition-all duration-500">
                Enter
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 2.5,
        duration: 1
      }} className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <motion.div animate={{
          y: [0, 10, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }} className="w-px h-16 bg-gradient-to-b from-overlay-light/50 to-transparent" />
        </motion.div>
      </section>

      {/* Section 2: The Premise */}
      <section className="snap-section relative bg-overlay-dark flex items-center justify-center">
        <div className="container-cinematic text-center">
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 1
        }}>
            <span className="block text-xs uppercase tracking-[0.4em] text-accent mb-8">
              Venice Beach Love Stories
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-overlay-light leading-tight mb-12 max-w-5xl mx-auto">These are stories about love—love of place, of community, of art, and a way of life under threat.</h2>
            <p className="text-overlay-light/50 text-xl max-w-2xl mx-auto">
              Love that holds on even as the ground shifts beneath it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 3: A Documentary Series - Static intro before horizontal scroll */}
      <section className="snap-section bg-background flex items-center">
        <div className="container-cinematic">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} 
                      viewport={{ once: true }} transition={{ duration: 1 }}>
            <span className="text-xs uppercase tracking-[0.3em] text-accent mb-6 block">
              A Documentary Series
            </span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-8">
              The Stories
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl">
              Five people. Five ways of holding on. A neighborhood where belonging 
              must constantly be re-asserted.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Stories - Horizontal Scroll */}
      <div ref={horizontalRef} className="horizontal-scroll-container bg-background scroll-snap-align-start">
        {/* Sticky horizontal track */}
        <div className="sticky top-0 h-screen flex items-center overflow-hidden pointer-events-none z-10">
          <motion.div
            ref={horizontalTrackRef}
            style={{ x: effectiveX }}
            className="flex gap-8 pl-[10vw] pointer-events-auto overscroll-x-contain touch-pan-y"
            drag={isCoarsePointer ? "x" : false}
            dragConstraints={{ left: -maxTranslateX, right: 0 }}
            dragElastic={0.08}
            dragMomentum={true}
            onDragStart={(e) => {
              setIsDraggingStories(true);
              // If the user has already interacted, continue from the current manual position.
              // Using x.get() here can snap back to the scroll-driven position (often 0) on mobile.
              const startPos = hasTouchedStories ? dragX : x.get();
              dragStartPosRef.current = startPos;
              setDragX(startPos);
              setHasTouchedStories(true);
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const clientX = (e as any)?.touches?.[0]?.clientX ?? (e as any)?.clientX;
              dragStartXRef.current = typeof clientX === "number" ? clientX : null;
            }}
            onDrag={(e, info) => {
              // Framer's drag offset is px from drag start; add to the start position.
              const next = dragStartPosRef.current + info.offset.x;
              setDragX(Math.min(0, Math.max(-maxTranslateX, next)));
            }}
            onDragEnd={() => {
              setIsDraggingStories(false);
              dragStartXRef.current = null;
            }}
          >
            {/* Story Cards */}
            {stories.map((story, index) => (
              <Link
                key={story.slug}
                to={`/stories/${story.slug}`}
                className="horizontal-scroll-item flex-shrink-0 w-[70vw] md:w-[50vw] lg:w-[40vw] group"
                onPointerDown={(e) => {
                  if (!isCoarsePointer) return;
                  dragStartXRef.current = e.clientX;
                }}
                onClick={(e) => {
                  // If the user swiped/dragged, don't navigate.
                  if (!isCoarsePointer) return;
                  const startX = dragStartXRef.current;
                  const delta = typeof startX === "number" ? Math.abs(e.clientX - startX) : 0;
                  if (isDraggingStories || delta > 8) {
                    e.preventDefault();
                    e.stopPropagation();
                  }
                }}
              >
                <div className="relative h-full rounded-sm overflow-hidden">
                  {story.image ? <img src={story.image} alt={story.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" /> : <div className="w-full h-full bg-muted flex items-center justify-center">
                      <span className="text-muted-foreground">Coming Soon</span>
                    </div>}
                  <div className="absolute inset-0 bg-gradient-to-t from-overlay-dark/90 via-overlay-dark/30 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <span className="block text-xs uppercase tracking-[0.3em] text-accent mb-3">
                      {story.title}
                    </span>
                    <h3 className="font-serif text-3xl md:text-4xl text-overlay-light mb-3">
                      {story.name}
                    </h3>
                    <p className="text-overlay-light/70 italic">
                      "{story.tagline}"
                    </p>
                  </div>

                  {/* Chapter number */}
                  <div className="absolute top-8 right-8 font-serif text-7xl text-overlay-light/10">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              </Link>
            ))}

            {/* View All Card */}
            <div className="horizontal-scroll-item flex-shrink-0 w-[30vw] flex flex-col justify-center items-center">
              <Link to="/stories" className="text-sm uppercase tracking-[0.3em] text-foreground hover:text-accent transition-colors">
                View All Stories →
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Snap sentinel blocks - provide snap points within the Stories region */}
        {Array.from({ length: storySnapSteps }).map((_, i) => (
          <div key={i} className="horizontal-scroll-snap-step" aria-hidden="true" />
        ))}
      </div>

      {/* Section 4: About Teaser */}
      <section className="snap-section relative">
        <div className="absolute inset-0">
          <img src={heroSunsetBlur} alt="Venice Beach atmosphere" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-overlay-dark/70" />
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="container-cinematic">
            <motion.div initial={{
            opacity: 0,
            y: 40
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 1
          }} className="max-w-4xl mx-auto text-center">
              <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-overlay-light italic leading-relaxed mb-12">"Venice is a place of beauty and rupture, creativity and exile.  Belonging isn't assumed here--it is fought for. Art keeps the record" </blockquote>
              <Link to="/mission" className="inline-block px-10 py-5 border border-overlay-light/40 text-overlay-light 
                           text-sm uppercase tracking-[0.2em] hover:bg-overlay-light hover:text-overlay-dark 
                           transition-all duration-500">
                Our Mission
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: The Filmmaker */}
      <section className="snap-section bg-background flex items-center">
        <div className="container-cinematic">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 1
          }}>
              <div className="aspect-[3/4] max-w-lg mx-auto lg:mx-0 overflow-hidden">
                <img src={kerryWide} alt="Kerry Candaele" className="w-full h-full object-cover object-top" />
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 1,
            delay: 0.2
          }}>
              <span className="block text-xs uppercase tracking-[0.3em] text-accent mb-6">
                The Filmmaker
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8">
                Kerry Candaele
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Kerry Candaele has lived and worked in Venice Beach for over 25 years. 
                As filmmaker, writer, and educator, his work explores the intersections 
                of art, history, and human struggle.
              </p>
              <Link to="/filmmaker" className="inline-block text-sm uppercase tracking-[0.2em] text-foreground 
                           hover:text-accent transition-colors link-underline">
                Meet Kerry
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 6: Newsletter */}
      <section className="snap-section bg-dusk flex items-center justify-center">
        <div className="container-cinematic text-center">
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 1
        }} className="max-w-xl mx-auto">
            <span className="block text-xs uppercase tracking-[0.3em] text-accent mb-6">
              Stay Connected
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-overlay-light mb-8">
              Follow the Journey
            </h2>
            <p className="text-overlay-light/60 text-lg mb-12">
              Sign up for updates on screenings, releases, and the stories behind the stories.
            </p>
            <NewsletterForm />
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <div className="snap-section-content">
        <Footer />
      </div>
    </div>;
};
export default Index;