import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface PageHeroProps {
  image: string;
  mobileImage?: string;
  title: string;
  subtitle?: string;
  size?: "full" | "medium" | "small";
}

export function PageHero({ image, mobileImage, title, subtitle, size = "medium" }: PageHeroProps) {
  const isMobile = useIsMobile();
  
  // Use mobile image if provided and on mobile, otherwise use desktop
  const imageSrc = isMobile && mobileImage ? mobileImage : image;
  const heights = {
    full: "min-h-screen",
    medium: "min-h-[70vh]",
    small: "min-h-[50vh]",
  };

  return (
    <section className={`relative ${heights[size]} flex items-end film-grain`}>
      {/* Background Image or Placeholder */}
      <div className="absolute inset-0">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <span className="text-muted-foreground text-sm uppercase tracking-widest">Photo Coming Soon</span>
          </div>
        )}
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative container-cinematic pb-16 md:pb-24 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subtitle && (
            <span className="block text-sm uppercase tracking-widest text-accent mb-4">
              {subtitle}
            </span>
          )}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-overlay-light text-shadow-cinematic">
            {title}
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
