import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface CinematicSectionProps {
  children: ReactNode;
  className?: string;
  backgroundImage?: string;
  mobileBackgroundImage?: string;
  parallaxSpeed?: number;
  overlay?: boolean;
  id?: string;
}

export const CinematicSection = ({
  children,
  className = "",
  backgroundImage,
  mobileBackgroundImage,
  parallaxSpeed = 0.5,
  overlay = true,
  id,
}: CinematicSectionProps) => {
  const ref = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${parallaxSpeed * 30}%`]);
  
  // Use mobile image if provided and on mobile, otherwise use desktop
  const imageSrc = isMobile && mobileBackgroundImage ? mobileBackgroundImage : backgroundImage;

  return (
    <section
      ref={ref}
      id={id}
      className={`snap-section relative overflow-hidden ${className}`}
    >
      {imageSrc && (
        <motion.div className="absolute inset-0" style={{ y }}>
          <img
            src={imageSrc}
            alt=""
            className="w-full h-full object-cover scale-110"
          />
          {overlay && <div className="hero-overlay absolute inset-0" />}
        </motion.div>
      )}
      <div className="relative z-10 h-full">{children}</div>
    </section>
  );
};

export default CinematicSection;
