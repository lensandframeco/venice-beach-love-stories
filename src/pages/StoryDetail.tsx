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
const ivoImg1 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/2e54e904-594d-467c-b7c7-b88ce06afbad.jpg";
const ivoImg2 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/f26aa6be-9ac8-47e5-a9e4-af1dbda88ae7.jpg";
const ivoImg3 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/024670f8-7af0-4e2e-9ab1-dc5bc409706d.jpg";
const ivoImg8 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/7ffdf1ce-140c-4722-bbb5-771e6bc4e0b7.jpg";
const ivoImg12 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/8ac6cd95-5517-4969-adf6-5304d9b26210.jpg";
const ivoImg17 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/98050ac3-0624-4f8d-9e05-fc3a58683f3a.jpg";
const ivoImg19 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/19f39761-6de7-46b0-a243-ce3d839e9d58.jpg";
const ivoImg28 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/c0ac4c90-0fd4-4d4a-a22c-e50a3f1c9f89.jpg";
const ivoImg33 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/5bd62e15-ba96-412a-bb55-c20e127b3cab.jpg";
const ivoImg36 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/c89dcdcf-2844-4309-aef8-e346dcf11d57.jpg";
const ivoImg41 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/864e77af-8aba-4bb1-9522-26cf676fccaf.jpg";
const ivoImg42 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/a3b86d6a-3e79-49f3-b71f-1623d0675c6b.jpg";
const ivoImg46 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/839d4b77-5bd1-4467-a8b9-7c5492c3a785.jpg";
const ivoImg58 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/4c7227cc-ecd8-4ded-8ef6-ca99eb8454ee.jpg";
const ivoImg83 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/ec2f74a1-2c20-43f0-9502-09e273e25d7c.jpg";
const ivoImg90 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/e65dbe33-8f96-4f65-98aa-d1e068edb592.jpg";
const ivoImg101 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/6961ed8f-4105-4ecb-baef-3a03882b43d6.jpg";
const ivoImg103 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/cade4f28-2b11-48ae-a9d9-2a59b5d02202.jpg";
const ivoImg110 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/66c3beac-5dfa-4af3-9557-b6ea907789f8.jpg";
const ivoImg112 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/e1c184be-b3c1-40ae-bfc5-bb4b8b0eae96.jpg";
const ivoImg116 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/60a18f75-acdf-4562-9bc6-6f4cd6bb8795.jpg";
const ivoImg126 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/41792f25-9cb3-48db-90b8-744d2d1f95e5.jpg";
const ivoImg143 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/f14f67e5-32e5-4817-9d0b-f9d31869eed5.jpg";
const ivoImg147 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/b8f07256-aab4-461a-82e2-6fe29d84d1da.jpg";
const ivoImg149 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/c3393a3c-165e-48a9-9e55-c02bccd64c4b.jpg";
const ivoImg150 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/8880befa-bdd8-4707-995a-bff352e3e020.jpg";
const ivoImg152 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/9a5179b6-8b08-499c-ac3f-30987234ffa3.jpg";
const ivoImg155 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/38a63396-11a8-474a-9f26-58a80cd66fc1.jpg";
const ivoImg159 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/76700295-6862-44ec-b295-649ae283e5e5.jpg";
const ivoImg164 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/3a6d2782-0134-4439-921d-b71cd8e8af10.jpg";

const jataunImg29 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/cb14fc08-ef1d-4480-b4aa-9483f60ef304.jpg";
const jataunImg82 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/796e3b1e-4b78-4d2a-8ffc-9b6ac879011a.jpg";
const jataunImg160 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/f968b44c-8ebb-4f22-a674-f9d1ff642717.jpg";

const titoImg22 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/22188a48-3689-4c05-ab5d-4e57a5f1a631.jpg";
const titoImg24 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/f60c6144-a99d-4ed0-b627-c4653ba45030.jpg";
const titoImg88 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/dd4fdd52-da7d-4834-bc0f-8466249c128a.jpg";

const lanceImg26 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/561e2528-4138-4d14-bfd0-4f688b125fe6.jpg";
const lanceImg57 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/ef149bc5-000a-40c5-9ef2-811978e3d645.jpg";
const lanceImg78 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/263bb10e-682d-44f4-9d00-a78824768875.jpg";
const lanceImg79 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/1afaae62-c711-4c69-9ca7-a03ac1364832.jpg";
const lanceImg98 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/e2108ef8-1ade-4c63-bdc5-6224802af6a1.jpg";
const lanceImg102 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/9dd2211d-ca00-40a0-ab59-082f211319f6.jpg";
const lanceImg111 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/81f529bb-00d7-4f1a-879f-9d3390b1a1d1.jpg";
const lanceImg122 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/f8fe3439-b6bb-478f-a526-3a7385c78b24.jpg";
const lanceImg131 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/299ca8f6-0c91-439e-9a56-fa934265f0d9.jpg";
const lanceImg146 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/cdb22094-50aa-42ce-bb0f-c0b809022999.jpg";
const lanceImg151 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/c39f7ae1-42ec-416b-8898-003edd7c1d92.jpg";
const lanceImg153 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/63e3b42a-909e-42bc-a502-4304e2a6b8e7.jpg";
const lanceImg161 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/f5e1a197-43e6-4b7d-8de6-463ed1b7319c.jpg";
const lanceImg163 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/ec9c02a8-7c99-4e24-a951-8a41cf81b821.jpg";

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
