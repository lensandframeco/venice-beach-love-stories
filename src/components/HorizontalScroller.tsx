import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HorizontalScrollerProps {
  children: ReactNode;
  className?: string;
  itemWidth?: string;
}

export const HorizontalScroller = ({
  children,
  className = "",
  itemWidth = "80vw",
}: HorizontalScrollerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={containerRef} className={`horizontal-scroll-container ${className}`}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-8"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

interface HorizontalItemProps {
  children: ReactNode;
  className?: string;
}

export const HorizontalItem = ({ children, className = "" }: HorizontalItemProps) => {
  return (
    <div className={`horizontal-scroll-item flex-shrink-0 ${className}`}>
      {children}
    </div>
  );
};

export default HorizontalScroller;
