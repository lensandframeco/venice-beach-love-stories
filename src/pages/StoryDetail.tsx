import { useParams, Link, Navigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ImageLightbox } from "@/components/ImageLightbox";
import { ResponsiveHeroImage } from "@/components/ResponsiveHeroImage";
import type { GalleryImage } from "@/components/ImageGallery";
import { getStoryBySlug, getAdjacentStories } from "@/data/stories";
// Import gallery images for each subject
import ivoImg1 from "@/assets/gallery/image1.jpeg";
import ivoImg2 from "@/assets/gallery/image2.jpeg";
import ivoImg3 from "@/assets/gallery/image3.jpg";
import ivoImg8 from "@/assets/gallery/image8.jpeg";
import ivoImg12 from "@/assets/gallery/image12.jpeg";
import ivoImg17 from "@/assets/gallery/image17.jpeg";
import ivoImg19 from "@/assets/gallery/image19.jpeg";
import ivoImg28 from "@/assets/gallery/image28.jpeg";
import ivoImg33 from "@/assets/gallery/image33.jpeg";
import ivoImg36 from "@/assets/gallery/image36.jpeg";
import ivoImg41 from "@/assets/gallery/image41.jpeg";
import ivoImg42 from "@/assets/gallery/image42.jpeg";
import ivoImg46 from "@/assets/gallery/image46.jpeg";
import ivoImg58 from "@/assets/gallery/image58.jpeg";
import ivoImg83 from "@/assets/gallery/image83.jpeg";
import ivoImg90 from "@/assets/gallery/image90.jpeg";
import ivoImg101 from "@/assets/gallery/image101.jpeg";
import ivoImg103 from "@/assets/gallery/image103.jpeg";
import ivoImg110 from "@/assets/gallery/image110.jpeg";
import ivoImg112 from "@/assets/gallery/image112.jpeg";
import ivoImg116 from "@/assets/gallery/image116.jpeg";
import ivoImg126 from "@/assets/gallery/image126.jpeg";
import ivoImg143 from "@/assets/gallery/image143.jpg";
import ivoImg147 from "@/assets/gallery/image147.jpeg";
import ivoImg149 from "@/assets/gallery/image149.jpeg";
import ivoImg150 from "@/assets/gallery/image150.jpeg";
import ivoImg152 from "@/assets/gallery/image152.jpeg";
import ivoImg155 from "@/assets/gallery/image155.jpeg";
import ivoImg159 from "@/assets/gallery/image159.jpeg";
import ivoImg164 from "@/assets/gallery/image164.jpeg";

import jataunImg29 from "@/assets/gallery/image29.jpg";
import jataunImg82 from "@/assets/gallery/image82.jpeg";
import jataunImg160 from "@/assets/gallery/image160.jpeg";

import titoImg22 from "@/assets/gallery/image22.jpeg";
import titoImg24 from "@/assets/gallery/image24.jpeg";
import titoImg88 from "@/assets/gallery/image88.jpeg";

import lanceImg26 from "@/assets/gallery/image26.jpeg";
import lanceImg57 from "@/assets/gallery/image57.jpeg";
import lanceImg78 from "@/assets/gallery/image78.jpeg";
import lanceImg79 from "@/assets/gallery/image79.jpeg";
import lanceImg98 from "@/assets/gallery/image98.jpeg";
import lanceImg102 from "@/assets/gallery/image102.jpeg";
import lanceImg111 from "@/assets/gallery/image111.jpeg";
import lanceImg122 from "@/assets/gallery/image122.jpeg";
import lanceImg131 from "@/assets/gallery/image131.jpg";
import lanceImg146 from "@/assets/gallery/image146.jpeg";
import lanceImg151 from "@/assets/gallery/image151.jpeg";
import lanceImg153 from "@/assets/gallery/image153.jpeg";
import lanceImg161 from "@/assets/gallery/image161.jpeg";
import lanceImg163 from "@/assets/gallery/image163.jpeg";

// Using GalleryImage type from ImageGallery

const storyGalleries: Record<string, GalleryImage[]> = {
  'the-muralist': [
    { src: ivoImg1, alt: 'Ivo Vergara', caption: 'Ivo Vergara, muralist from Chile' },
    { src: ivoImg2, alt: 'Ivo at work', caption: 'Ivo at work' },
    { src: ivoImg3, alt: 'Ivo at work', caption: 'Ivo Vergara Chilean muralist at work' },
    { src: ivoImg8, alt: 'Venice Mural', caption: "Ivo's mural with members of the community" },
    { src: ivoImg12, alt: 'Ivo painting', caption: "Ivo at work on mural" },
    { src: ivoImg17, alt: 'Ivo and Tito', caption: 'Ivo at work. Tito Casillas in Zoot Suit' },
    { src: ivoImg19, alt: 'Ivo with photos', caption: 'Ivo showing photos of family' },
    { src: ivoImg28, alt: 'Ivo on mural', caption: 'Ivo at work on mural' },
    { src: ivoImg33, alt: 'Night painting', caption: 'Ivo at work at night' },
    { src: ivoImg36, alt: 'Paint supplies', caption: "Ivo's paint" },
    { src: ivoImg41, alt: 'Paint and mate', caption: "Ivo's paint and mate" },
    { src: ivoImg42, alt: 'Ivo working', caption: 'Ivo at work' },
  ],
  'the-matriarch': [
    { src: jataunImg29, alt: 'Jataun Valentine', caption: "Jataun Valentine, community leader and activist" },
    { src: jataunImg82, alt: 'Jataun on mural', caption: 'Jataun Valentine on Mural' },
    { src: jataunImg160, alt: 'Jataun with friends', caption: 'Jataun and friends on street' },
  ],
  'the-zoot-suiter': [
    { src: titoImg22, alt: 'Tito in Zoot Suit', caption: 'Tito in Purple Zoot Suit' },
    { src: titoImg24, alt: 'Tito on mural', caption: 'Tito on mural' },
    { src: titoImg88, alt: 'Tito posing', caption: 'Tito striking a pose' },
  ],
  'the-bicycle-whisperer': [
    { src: lanceImg26, alt: 'Lance', caption: 'Lance, Bicycle Whisperer' },
    { src: lanceImg57, alt: 'Lance and friends', caption: 'Lance and Danny and friend' },
    { src: lanceImg78, alt: 'Danny', caption: 'Danny at bicycle whisperer' },
    { src: lanceImg79, alt: 'Truck', caption: 'Bicycle whisperer truck' },
    { src: lanceImg98, alt: 'Lance portrait', caption: 'Lance the bicycle whisperer' },
    { src: lanceImg102, alt: 'Lance filming', caption: 'Lance and camera' },
    { src: lanceImg111, alt: 'Van', caption: 'Bicycle whisperer van' },
    { src: lanceImg122, alt: 'Bikes', caption: 'Bicycle whisperer bikes' },
    { src: lanceImg131, alt: 'Lance smiling', caption: 'Lance big smile' },
    { src: lanceImg146, alt: 'Inside van', caption: 'Inside van' },
  ],
  'the-skateboarder': [],
  'the-artist': [],
};

const StoryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const story = slug ? getStoryBySlug(slug) : undefined;
  const adjacent = slug ? getAdjacentStories(slug) : { prev: null, next: null };
  const galleryImages = slug ? storyGalleries[slug] || [] : [];

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const horizontalRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: galleryProgress } = useScroll({
    target: horizontalRef,
    offset: ["start start", "end end"],
  });
  const galleryX = useTransform(galleryProgress, [0, 1], ["0%", `-${Math.max(0, (galleryImages.length - 2)) * 50}%`]);

  if (!story) {
    return <Navigate to="/stories" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navigation />

      {/* Immersive Hero */}
      <section ref={heroRef} className="h-screen relative overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{ scale: heroScale }}
        >
          {story.image ? (
            <ResponsiveHeroImage
              desktopImage={story.image}
              tabletImage={story.tabletImage}
              mobileImage={story.mobileImage}
              alt={story.name}
              objectPosition={story.imagePosition}
            />
          ) : (
            <div className="w-full h-full bg-muted" />
          )}
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-overlay-dark via-overlay-dark/50 to-transparent" />

        <motion.div 
          className="relative z-10 h-full flex flex-col justify-end container-cinematic pb-24"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="block text-sm uppercase tracking-[0.4em] text-accent mb-6">
              {story.title}
            </span>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-overlay-light text-shadow-cinematic mb-6">
              {story.name}
            </h1>
            <p className="font-serif text-2xl md:text-3xl text-overlay-light/80 italic max-w-2xl">
              "{story.tagline}"
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Story Content - Breathing Layout */}
      <section className="py-32 md:py-48 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          {story.fullStory.map((paragraph, index) => {
            const isQuote = paragraph.startsWith('"');
            
            if (isQuote) {
              return (
                <motion.blockquote
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="my-20 md:my-32 pl-8 border-l-2 border-accent"
                >
                  <p className="font-serif text-2xl md:text-3xl text-foreground italic leading-relaxed">
                    {paragraph}
                  </p>
                </motion.blockquote>
              );
            }

            return (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="text-lg md:text-xl text-foreground/85 leading-relaxed mb-8"
              >
                {paragraph}
              </motion.p>
            );
          })}
        </div>
      </section>

      {/* Video Section - Full Bleed */}
      {story.videoUrl && (
        <section className="py-20 bg-overlay-dark">
          <div className="container-cinematic">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-accent">
                Watch
              </span>
            </motion.div>
            <div className="aspect-video max-w-5xl mx-auto rounded-sm overflow-hidden">
              <iframe
                src={story.videoUrl}
                title={story.videoTitle || `${story.name} - Video`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      )}

      {/* Horizontal Gallery - Film Strip Style */}
      {galleryImages.length > 0 && (
        <div ref={horizontalRef} className="h-[300vh] relative">
          <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden bg-background">
            <div className="container-cinematic mb-8">
              <span className="text-xs uppercase tracking-[0.3em] text-accent">
                Gallery
              </span>
            </div>
            
            <motion.div
              style={{ x: galleryX }}
              className="flex gap-6 pl-6 md:pl-12"
            >
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  onClick={() => openLightbox(index)}
                  className="flex-shrink-0 w-[70vw] md:w-[50vw] lg:w-[40vw] h-[60vh] cursor-pointer group"
                >
                  <div className="relative h-full rounded-sm overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-overlay-dark/0 group-hover:bg-overlay-dark/20 transition-colors duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-overlay-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-overlay-light text-sm">{image.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      )}

      {/* Story Navigation - Full Width */}
      <section className="py-20 bg-secondary">
        <div className="container-cinematic">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {adjacent.prev ? (
              <Link
                to={`/stories/${adjacent.prev.slug}`}
                className="group flex items-center gap-6 p-6 hover:bg-background/50 rounded-sm transition-colors"
              >
                <ArrowLeft className="w-6 h-6 transition-transform group-hover:-translate-x-2" />
                <div>
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Previous
                  </span>
                  <span className="font-serif text-xl text-foreground group-hover:text-accent transition-colors">
                    {adjacent.prev.name}
                  </span>
                </div>
              </Link>
            ) : (
              <div />
            )}

            <Link
              to="/stories"
              className="text-center text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              All Stories
            </Link>

            {adjacent.next ? (
              <Link
                to={`/stories/${adjacent.next.slug}`}
                className="group flex items-center justify-end gap-6 p-6 hover:bg-background/50 rounded-sm transition-colors text-right"
              >
                <div>
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Next
                  </span>
                  <span className="font-serif text-xl text-foreground group-hover:text-accent transition-colors">
                    {adjacent.next.name}
                  </span>
                </div>
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      <Footer />

      {/* Lightbox */}
      <ImageLightbox
        images={galleryImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  );
};

export default StoryDetail;
