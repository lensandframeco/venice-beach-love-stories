import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { NewsletterForm } from "@/components/NewsletterForm";
import { ScrollProgress } from "@/components/ScrollProgress";
import heroFoggy from "@/assets/hero-foggy-beach.jpeg";

import image14 from "@/assets/gallery/image14.jpeg";
import image20 from "@/assets/gallery/image20.jpeg";
import image24 from "@/assets/gallery/image24.jpeg";

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
];

const Connect = () => {
  return (
    <div className="snap-container">
      <ScrollProgress />
      <Navigation />

      {/* Hero */}
      <section className="snap-section relative film-grain">
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src={heroFoggy}
            alt="Foggy Venice Beach"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-end container-cinematic pb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-overlay-light text-shadow-cinematic">
              Connect
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="snap-section bg-background flex items-center justify-center">
        <div className="container-cinematic">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="block text-xs uppercase tracking-[0.3em] text-accent mb-6">
                Stay Connected
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8">
                Follow the Journey
              </h2>
              <p className="text-muted-foreground text-lg mb-12">
                Sign up for news about screenings, releases, and the stories behind the stories.
              </p>
              <NewsletterForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <section className="snap-section bg-overlay-dark flex items-center">
        <div className="w-full grid grid-cols-3 h-[60vh]">
          {[image14, image20, image24].map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative overflow-hidden"
            >
              <img src={img} alt={`Venice ${index + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-overlay-dark/30" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social & Contact */}
      <section className="snap-section bg-secondary flex items-center">
        <div className="container-cinematic">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              {/* Social */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="block text-xs uppercase tracking-[0.3em] text-accent mb-6">
                  Follow the Project
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-10">
                  Social Media
                </h2>
                <div className="flex gap-6">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        className="w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center 
                                   text-foreground hover:text-accent hover:border-accent transition-colors duration-300"
                        aria-label={social.name}
                      >
                        <Icon className="w-7 h-7" />
                      </a>
                    );
                  })}
                </div>
              </motion.div>

              {/* Contact */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <span className="block text-xs uppercase tracking-[0.3em] text-accent mb-6">
                  Get In Touch
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
                  Contact
                </h2>
                <p className="text-muted-foreground mb-6">
                  For press inquiries, screening requests, or collaboration opportunities:
                </p>
                <a
                  href="mailto:contact@venicebeachlovestories.com"
                  className="inline-block text-lg text-foreground hover:text-accent transition-colors link-underline"
                >
                  contact@venicebeachlovestories.com
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="snap-section bg-overlay-dark flex items-center justify-center">
        <div className="container-cinematic text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <span className="block text-xs uppercase tracking-[0.3em] text-accent mb-6">
              Help Tell These Stories
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-overlay-light mb-10">
              Support the Project
            </h2>
            <p className="text-overlay-light/70 text-lg mb-8">
              <em>Venice Beach Love Stories</em> is an independent production. If you believe in the 
              power of these stories, consider supporting the project.
            </p>
            <p className="text-overlay-light/50">
              Details on how to support coming soon.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="snap-section-content">
        <Footer />
      </div>
    </div>
  );
};

export default Connect;
