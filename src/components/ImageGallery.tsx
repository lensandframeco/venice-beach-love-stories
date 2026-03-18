import { useState } from "react";
import { motion } from "framer-motion";
import { ImageLightbox } from "./ImageLightbox";

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  layout?: 'grid' | 'masonry';
  columns?: 2 | 3 | 4;
  className?: string;
}

export function ImageGallery({ 
  images, 
  layout = 'grid', 
  columns = 3,
  className = '' 
}: ImageGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const gridColsClass = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  };

  if (layout === 'masonry') {
    return (
      <>
        <div className={`columns-1 sm:columns-2 lg:columns-3 gap-4 ${className}`}>
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="mb-4 break-inside-avoid"
            >
              <button
                onClick={() => openLightbox(index)}
                className="group relative w-full overflow-hidden rounded-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-overlay-dark/0 group-hover:bg-overlay-dark/40 transition-colors duration-300" />
                {image.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-overlay-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm text-overlay-light">{image.caption}</p>
                  </div>
                )}
              </button>
            </motion.div>
          ))}
        </div>

        <ImageLightbox
          images={images}
          currentIndex={currentIndex}
          isOpen={lightboxOpen}
          onClose={closeLightbox}
          onNext={goToNext}
          onPrev={goToPrev}
        />
      </>
    );
  }

  return (
    <>
      <div className={`grid ${gridColsClass[columns]} gap-4 ${className}`}>
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <button
              onClick={() => openLightbox(index)}
              className="group relative w-full aspect-[4/3] overflow-hidden rounded-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-overlay-dark/0 group-hover:bg-overlay-dark/40 transition-colors duration-300" />
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-overlay-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm text-overlay-light">{image.caption}</p>
                </div>
              )}
            </button>
          </motion.div>
        ))}
      </div>

      <ImageLightbox
        images={images}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={goToNext}
        onPrev={goToPrev}
      />
    </>
  );
}
