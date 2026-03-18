import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "The Stories", path: "/stories" },
  { name: "Gallery", path: "/gallery" },
  { name: "About", path: "/about" },
  { name: "The Filmmaker", path: "/filmmaker" },
  { name: "Connect", path: "/connect" },
];

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-dusk text-overlay-light">
      <div className="container-cinematic py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl mb-4">Venice Beach Love Stories</h3>
            <p className="text-overlay-light/70 text-sm leading-relaxed mb-6">
              A documentary series exploring five love stories 
              from one contested paradise.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-overlay-light/10 flex items-center justify-center 
                               text-overlay-light/70 hover:text-accent hover:bg-overlay-light/20 transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-sm font-medium uppercase tracking-wider mb-4 text-overlay-light/60">
              Navigate
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-overlay-light/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-sm font-medium uppercase tracking-wider mb-4 text-overlay-light/60">
              Connect
            </h4>
            <p className="text-sm text-overlay-light/80 mb-4">
              For press inquiries, screening requests, or collaboration opportunities.
            </p>
            <Link
              to="/connect"
              className="inline-block text-sm text-accent hover:text-sunset transition-colors"
            >
              Get in touch →
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-overlay-light/20 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-overlay-light/50">
            © {new Date().getFullYear()} Venice Beach Love Stories. All rights reserved.
          </p>
          <p className="text-sm text-overlay-light/70 font-serif italic">
            A film by Kerry Candaele
          </p>
        </div>
      </div>
    </footer>
  );
}
