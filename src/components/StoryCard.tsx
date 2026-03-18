import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface StoryCardProps {
  slug: string;
  name: string;
  title: string;
  tagline: string;
  image: string;
  index?: number;
}

export function StoryCard({ slug, name, title, tagline, image, index = 0 }: StoryCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link
        to={`/stories/${slug}`}
        className="group block story-card aspect-[3/4] relative rounded-sm overflow-hidden"
      >
        {image ? (
          <img
            src={image}
            alt={`${name} - ${title}`}
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 w-full h-full bg-muted flex items-center justify-center">
            <span className="text-muted-foreground text-sm uppercase tracking-widest">Photo Coming Soon</span>
          </div>
        )}
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-overlay-dark/90 via-overlay-dark/30 to-transparent" />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <span className="text-xs uppercase tracking-widest text-accent font-medium mb-2 block">
            {title}
          </span>
          <h3 className="font-serif text-xl md:text-2xl text-overlay-light mb-2 text-shadow-cinematic">
            {name}
          </h3>
          <p className="text-sm text-overlay-light/80 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {tagline}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
