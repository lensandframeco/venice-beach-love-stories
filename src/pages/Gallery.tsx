import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ImageGallery, type GalleryImage } from "@/components/ImageGallery";
import heroSilhouettes from "@/assets/hero-silhouettes-sunset.jpeg";

// Import all gallery images organized by category from imageAssets catalog

// Documentary Subjects - Ivo (30 images)
import image1 from "@/assets/gallery/image1.jpeg";
import image2 from "@/assets/gallery/image2.jpeg";
import image3 from "@/assets/gallery/image3.jpg";
import image8 from "@/assets/gallery/image8.jpeg";
import image12 from "@/assets/gallery/image12.jpeg";
import image17 from "@/assets/gallery/image17.jpeg";
import image19 from "@/assets/gallery/image19.jpeg";
import image28 from "@/assets/gallery/image28.jpeg";
import image33 from "@/assets/gallery/image33.jpeg";
import image36 from "@/assets/gallery/image36.jpeg";
import image41 from "@/assets/gallery/image41.jpeg";
import image42 from "@/assets/gallery/image42.jpeg";
import image46 from "@/assets/gallery/image46.jpeg";
import image58 from "@/assets/gallery/image58.jpeg";
import image83 from "@/assets/gallery/image83.jpeg";
import image90 from "@/assets/gallery/image90.jpeg";
import image101 from "@/assets/gallery/image101.jpeg";
import image103 from "@/assets/gallery/image103.jpeg";
import image110 from "@/assets/gallery/image110.jpeg";
import image112 from "@/assets/gallery/image112.jpeg";
import image116 from "@/assets/gallery/image116.jpeg";
import image126 from "@/assets/gallery/image126.jpeg";
import image143 from "@/assets/gallery/image143.jpg";
import image147 from "@/assets/gallery/image147.jpeg";
import image149 from "@/assets/gallery/image149.jpeg";
import image150 from "@/assets/gallery/image150.jpeg";
import image152 from "@/assets/gallery/image152.jpeg";
import image155 from "@/assets/gallery/image155.jpeg";
import image159 from "@/assets/gallery/image159.jpeg";
import image164 from "@/assets/gallery/image164.jpeg";

// Documentary Subjects - Jataun (3 images)
import image29 from "@/assets/gallery/image29.jpg";
import image82 from "@/assets/gallery/image82.jpeg";
import image160 from "@/assets/gallery/image160.jpeg";

// Documentary Subjects - Tito (3 images)
import image22 from "@/assets/gallery/image22.jpeg";
import image24 from "@/assets/gallery/image24.jpeg";
import image88 from "@/assets/gallery/image88.jpeg";

// Documentary Subjects - Lance (14 images)
import image26 from "@/assets/gallery/image26.jpeg";
import image57 from "@/assets/gallery/image57.jpeg";
import image78 from "@/assets/gallery/image78.jpeg";
import image79 from "@/assets/gallery/image79.jpeg";
import image98 from "@/assets/gallery/image98.jpeg";
import image102 from "@/assets/gallery/image102.jpeg";
import image111 from "@/assets/gallery/image111.jpeg";
import image122 from "@/assets/gallery/image122.jpeg";
import image131 from "@/assets/gallery/image131.jpg";
import image146 from "@/assets/gallery/image146.jpeg";
import image151 from "@/assets/gallery/image151.jpeg";
import image153 from "@/assets/gallery/image153.jpeg";
import image161 from "@/assets/gallery/image161.jpeg";
import image163 from "@/assets/gallery/image163.jpeg";

// Beach & Ocean (20 images)
import image16 from "@/assets/gallery/image16.jpeg";
import image18 from "@/assets/gallery/image18.jpeg";
import image23 from "@/assets/gallery/image23.jpeg";
import image31 from "@/assets/gallery/image31.jpeg";
import image32 from "@/assets/gallery/image32.jpeg";
import image40 from "@/assets/gallery/image40.jpeg";
import image45 from "@/assets/gallery/image45.jpeg";
import image47 from "@/assets/gallery/image47.jpeg";
import image49 from "@/assets/gallery/image49.jpeg";
import image52 from "@/assets/gallery/image52.jpeg";
import image53 from "@/assets/gallery/image53.jpeg";
import image59 from "@/assets/gallery/image59.jpeg";
import image75 from "@/assets/gallery/image75.jpeg";
import image84 from "@/assets/gallery/image84.jpeg";
import image96 from "@/assets/gallery/image96.jpg";
import image108 from "@/assets/gallery/image108.jpeg";
import image119 from "@/assets/gallery/image119.jpeg";
import image120 from "@/assets/gallery/image120.jpeg";
import image123 from "@/assets/gallery/image123.jpeg";
import image124 from "@/assets/gallery/image124.jpeg";

// Architecture (18 images)
import image5 from "@/assets/gallery/image5.jpg";
import image25 from "@/assets/gallery/image25.jpeg";
import image34 from "@/assets/gallery/image34.jpeg";
import image48 from "@/assets/gallery/image48.jpeg";
import image51 from "@/assets/gallery/image51.jpeg";
import image60 from "@/assets/gallery/image60.jpeg";
import image64 from "@/assets/gallery/image64.jpeg";
import image65 from "@/assets/gallery/image65.jpeg";
import image67 from "@/assets/gallery/image67.jpeg";
import image68 from "@/assets/gallery/image68.jpeg";
import image69 from "@/assets/gallery/image69.jpeg";
import image71 from "@/assets/gallery/image71.jpeg";
import image80 from "@/assets/gallery/image80.jpeg";
import image81 from "@/assets/gallery/image81.jpeg";
import image85 from "@/assets/gallery/image85.jpeg";
import image86 from "@/assets/gallery/image86.jpeg";
import image99 from "@/assets/gallery/image99.jpeg";
import image104 from "@/assets/gallery/image104.jpeg";

// Murals & Street Art (16 images)
import image7 from "@/assets/gallery/image7.jpg";
import image13 from "@/assets/gallery/image13.jpeg";
import image15 from "@/assets/gallery/image15.jpeg";
import image21 from "@/assets/gallery/image21.jpeg";
import image30 from "@/assets/gallery/image30.jpeg";
import image44 from "@/assets/gallery/image44.jpeg";
import image54 from "@/assets/gallery/image54.jpeg";
import image56 from "@/assets/gallery/image56.jpeg";
import image72 from "@/assets/gallery/image72.jpeg";
import image77 from "@/assets/gallery/image77.jpeg";
import image87 from "@/assets/gallery/image87.jpeg";
import image114 from "@/assets/gallery/image114.jpeg";
import image115 from "@/assets/gallery/image115.jpeg";
import image121 from "@/assets/gallery/image121.jpg";
import image125 from "@/assets/gallery/image125.jpeg";
import image134 from "@/assets/gallery/image134.jpeg";

// Homelessness & Social Issues (9 images)
import image6 from "@/assets/gallery/image6.jpeg";
import image10 from "@/assets/gallery/image10.jpeg";
import image11 from "@/assets/gallery/image11.jpeg";
import image37 from "@/assets/gallery/image37.jpeg";
import image38 from "@/assets/gallery/image38.jpeg";
// Note: image39 not available
import image100 from "@/assets/gallery/image100.jpeg";
// Note: image107 not available
import image141 from "@/assets/gallery/image141.jpeg";

// Gentrification (8 images)
import image9 from "@/assets/gallery/image9.jpeg";
import image70 from "@/assets/gallery/image70.jpeg";
import image73 from "@/assets/gallery/image73.jpeg";
// Note: image127, image128 not available
import image135 from "@/assets/gallery/image135.jpeg";
import image142 from "@/assets/gallery/image142.jpeg";
import image145 from "@/assets/gallery/image145.jpeg";

// Venice Life (23+ images)
import image4 from "@/assets/gallery/image4.jpg";
import image14 from "@/assets/gallery/image14.jpeg";
import image20 from "@/assets/gallery/image20.jpeg";
import image27 from "@/assets/gallery/image27.jpeg";
import image35 from "@/assets/gallery/image35.jpeg";
import image43 from "@/assets/gallery/image43.jpeg";
import image55 from "@/assets/gallery/image55.jpeg";
import image61 from "@/assets/gallery/image61.jpeg";
import image62 from "@/assets/gallery/image62.jpeg";
import image63 from "@/assets/gallery/image63.jpeg";
import image74 from "@/assets/gallery/image74.jpeg";
import image76 from "@/assets/gallery/image76.jpeg";
import image89 from "@/assets/gallery/image89.jpeg";
import image91 from "@/assets/gallery/image91.jpeg";
import image92 from "@/assets/gallery/image92.jpeg";
import image95 from "@/assets/gallery/image95.jpeg";
import image97 from "@/assets/gallery/image97.jpeg";
import image105 from "@/assets/gallery/image105.jpeg";
import image109 from "@/assets/gallery/image109.jpeg";

// Branding
import image148 from "@/assets/gallery/image148.jpeg";

type MediaTab = 'photos' | 'video';
type CategoryFilter = 'all' | 'subjects' | 'beach' | 'architecture' | 'murals' | 'homelessness' | 'gentrification' | 'venice-life';

const categories: { id: CategoryFilter; label: string }[] = [
  { id: 'all', label: 'All Photos' },
  { id: 'subjects', label: 'Documentary Subjects' },
  { id: 'beach', label: 'Beach & Ocean' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'murals', label: 'Street Art & Murals' },
  { id: 'homelessness', label: 'Social Issues' },
  { id: 'gentrification', label: 'Gentrification' },
  { id: 'venice-life', label: 'Venice Life' },
];

// Gallery images organized by category with captions from the photo catalog
const galleryImages: Record<CategoryFilter, GalleryImage[]> = {
  subjects: [
    // Ivo - The Muralist (30 images)
    { src: image1, alt: 'Ivo Vergara - The Muralist', caption: 'Ivo Vergara, muralist from Chile who lives in Venice' },
    { src: image2, alt: 'Ivo at work', caption: 'Ivo at work' },
    { src: image3, alt: 'Ivo Vergara at work', caption: 'Ivo Vergara Chilean muralist at work' },
    { src: image8, alt: "Ivo's mural with community", caption: "Ivo's with members of the community depicted" },
    { src: image12, alt: 'Ivo at work on mural', caption: "Ivo at work on mural of Venice people's faces" },
    { src: image17, alt: 'Ivo and Tito', caption: 'Ivo at work. Tito Casillas in Zoot Suit' },
    { src: image19, alt: 'Ivo showing photos', caption: 'Ivo showing photos of family' },
    { src: image28, alt: 'Ivo painting mural', caption: 'Ivo at work on mural' },
    { src: image33, alt: 'Ivo at night', caption: 'Ivo at work at night on mural' },
    { src: image36, alt: "Ivo's paint", caption: "Ivo's paint" },
    { src: image41, alt: "Ivo's paint and mate", caption: "Ivo's paint and mate" },
    { src: image42, alt: 'Ivo working', caption: 'Ivo at work' },
    { src: image46, alt: "Ivo's mural art", caption: "Ivo's mural art" },
    { src: image58, alt: 'Ivo painting Jataun', caption: "Ivo painting Jataun's face on mural" },
    { src: image83, alt: 'Ivo being filmed', caption: 'Ivo being filmed in my office' },
    { src: image90, alt: 'Ivo working on Jataun', caption: 'Ivo working on Jataun at night' },
    { src: image101, alt: 'Ivo at outside mural', caption: 'Ivo at outside mural' },
    { src: image103, alt: "Ivo's mandala mural", caption: "Ivo's mandala mural" },
    { src: image110, alt: 'Mandala mural location', caption: 'Place where Ivo worked on mandala mural' },
    { src: image112, alt: 'Ivo working on mandala', caption: 'Ivo working on mandala mural' },
    { src: image116, alt: 'Ivo mural with subjects', caption: 'Ivo mural with Tito and Jataun' },
    { src: image126, alt: "Ivo's paints", caption: "Ivo's paints" },
    { src: image143, alt: 'Ivo on camera', caption: 'Ivo on camera in my office' },
    { src: image147, alt: 'Ivo being filmed', caption: 'Ivo being filmed by Chris mandala' },
    { src: image149, alt: 'Jataun blueprint', caption: 'Jataun blueprint for mural Ivo' },
    { src: image150, alt: 'Ivo mural covered', caption: 'Ivo mural covered up on Lincoln' },
    { src: image152, alt: 'Ivo with friend', caption: 'Ivo with friend' },
    { src: image155, alt: 'Ivo painting', caption: 'Ivo painting stuff' },
    { src: image159, alt: 'Ivo low angle', caption: 'Ivo painting low angle' },
    { src: image164, alt: 'Ivo Lincoln mural', caption: 'Ivo Lincoln mural on paper' },
    
    // Jataun - The Matriarch (3 images)
    { src: image29, alt: 'Jataun Valentine - The Matriarch', caption: "Jataun Valentine, community leader and activist" },
    { src: image82, alt: 'Jataun on mural', caption: 'Jataun Valentine on Mural' },
    { src: image160, alt: 'Jataun and friends', caption: 'Jataun and friends on street' },
    
    // Tito - The Zoot Suiter (3 images)
    { src: image22, alt: 'Tito Casillas - The Zoot Suiter', caption: 'Tito in Purple Zoot Suit' },
    { src: image24, alt: 'Tito on mural', caption: 'Tito on mural' },
    { src: image88, alt: 'Tito posing', caption: 'Tito striking a pose' },
    
    // Lance - The Bicycle Whisperer (14 images)
    { src: image26, alt: 'Lance - The Bicycle Whisperer', caption: 'Lance, Bicycle Whisperer' },
    { src: image57, alt: 'Lance and friends', caption: 'Lance and Danny and friend, bicycle whisperer' },
    { src: image78, alt: 'Danny at bicycle whisperer', caption: 'Danny at bicycle whisperer' },
    { src: image79, alt: 'Bicycle whisperer truck', caption: 'Bicycle whisperer truck' },
    { src: image98, alt: 'Lance portrait', caption: 'Lance the bicycle whisperer' },
    { src: image102, alt: 'Lance and camera', caption: 'Lance bicycle whisperer and camera' },
    { src: image111, alt: 'Bicycle whisperer van', caption: 'Bicycle whisperer van' },
    { src: image122, alt: 'Bicycle whisperer bikes', caption: 'Bicycle whisperer bikes' },
    { src: image131, alt: 'Lance smiling', caption: 'Lance bicycle whisperer big smile' },
    { src: image146, alt: 'Inside the van', caption: 'Bicycle whisperer inside van' },
    { src: image151, alt: 'Lance with friend', caption: 'Lance with friend' },
    { src: image153, alt: 'Bicycle whisperer van', caption: 'Bicycle whisperer van' },
    { src: image161, alt: 'Danny helper', caption: 'Danny, helper at bicycle whisperer' },
    { src: image163, alt: 'Lance on street', caption: 'Lance on street' },
  ],
  
  beach: [
    { src: image16, alt: 'Storm over Venice Beach', caption: 'Storm coming Venice Beach' },
    { src: image18, alt: 'Venice Beach path', caption: 'Path along Venice Beach' },
    { src: image23, alt: 'Near Tower 26', caption: 'Near Tower 26' },
    { src: image31, alt: 'Venice Beach at night', caption: 'Venice Beach at night' },
    { src: image32, alt: 'Venice Beach sunset', caption: 'Venice Beach sunset' },
    { src: image40, alt: 'People at dusk', caption: 'People at dusk at beach' },
    { src: image45, alt: 'Tracks in sand', caption: 'Tracks in sand at night Beach' },
    { src: image47, alt: 'Stationary bike riders', caption: 'Stationary Bike Riders at Beach' },
    { src: image49, alt: 'Bench at beach', caption: 'Bench at beach' },
    { src: image52, alt: 'Cement block at beach', caption: 'Cement block at beach' },
    { src: image53, alt: 'People walk at night', caption: 'People walk at beach night' },
    { src: image59, alt: 'Tower 26', caption: 'Tower 26' },
    { src: image75, alt: 'Silhouettes at beach', caption: 'Silhouette of people at beach' },
    { src: image84, alt: 'SM Pier', caption: 'SM Pier' },
    { src: image96, alt: 'Wave crash', caption: 'Wave crash at cement block at beach' },
    { src: image108, alt: 'Lonely beach', caption: 'Lonely beach' },
    { src: image119, alt: 'Blueish beach', caption: 'Blueish beach Venice' },
    { src: image120, alt: 'Man fishing', caption: 'Man fishing Venice' },
    { src: image123, alt: 'Fisherman baiting', caption: 'Fisherman at cement blocks baiting up' },
    { src: image124, alt: 'Venice in fog', caption: 'Cool photo of Venice Beach in fog' },
  ],
  
  architecture: [
    { src: image5, alt: 'Old time Venice Beach', caption: 'Old time Venice Beach' },
    { src: image25, alt: 'Venice Beach bungalows', caption: 'Venice Beach bungalows' },
    { src: image34, alt: 'Old car Venice', caption: 'Old car Venice Beach' },
    { src: image48, alt: 'Pink apartment', caption: 'Apartment pink at beach' },
    { src: image51, alt: 'Big modern house', caption: 'Big modern house in Venice' },
    { src: image60, alt: 'Modern home Venice', caption: 'Ghastly modern home Venice' },
    { src: image64, alt: 'Lights and palm trees', caption: 'Cool lights and palm trees at night' },
    { src: image65, alt: 'Bicycle and palms', caption: 'Bicycle and palm trees at night' },
    { src: image67, alt: 'Night skyline', caption: 'At night shot cool light skyline of apartments' },
    { src: image68, alt: 'Distant beach at night', caption: 'At night shot of distant beach' },
    { src: image69, alt: 'Apartment and sky', caption: 'Apartment and beautiful sky at night' },
    { src: image71, alt: 'Venice hotel', caption: 'Venice hotel on Rose and Lincoln' },
    { src: image80, alt: 'Small house at sunset', caption: 'Cool small house Venice at sunset' },
    { src: image81, alt: 'Old black car', caption: 'Old black car Venice' },
    { src: image85, alt: 'Venice plant store', caption: 'Venice plant store at night' },
    { src: image86, alt: 'Santa surfing yard', caption: 'Venice yard Santa surfing' },
    { src: image99, alt: 'Old car', caption: 'Old car Venice' },
    { src: image104, alt: 'New home Venice', caption: 'Hideous new home Venice' },
  ],
  
  murals: [
    { src: image7, alt: 'Venice mural', caption: 'Venice mural, not named' },
    { src: image13, alt: 'Painter unknown', caption: 'Painter unknown' },
    { src: image15, alt: 'Venice pole art', caption: 'Venice pole art' },
    { src: image21, alt: 'Mural', caption: 'Mural' },
    { src: image30, alt: 'Pole art', caption: 'Poll art' },
    { src: image44, alt: 'Pole art', caption: 'Pole art' },
    { src: image54, alt: 'Jim Morrison mural', caption: 'Jim Morrison mural Venice' },
    { src: image56, alt: 'Pole art', caption: 'Pole art' },
    { src: image72, alt: 'Ballet dancer mural', caption: 'Venice Freaky ballet dancing male on building' },
    { src: image77, alt: 'Touch of Evil mural', caption: 'Touch of Evil mural' },
    { src: image87, alt: 'Never fight a man sign', caption: 'Never fight a man with a perm sign' },
    { src: image114, alt: 'Lincoln street mural', caption: 'Lincoln street mural' },
    { src: image115, alt: 'Running with umbrella mural', caption: 'Running with umbrella mural Lincoln' },
    { src: image121, alt: 'Pole art', caption: 'Pole art' },
    { src: image125, alt: 'Angel statue', caption: 'Angel statue on lawn' },
    { src: image134, alt: 'Pole art', caption: 'Pole art' },
  ],
  
  homelessness: [
    { src: image6, alt: 'Lincoln trash', caption: 'Lincoln trash' },
    { src: image10, alt: 'Homeless camp', caption: 'Homeless camp Venice' },
    { src: image11, alt: 'Homeless encampment', caption: 'Homeless encampment Venice' },
    { src: image37, alt: 'Homeless tents', caption: 'Homeless tents Venice' },
    { src: image38, alt: 'Homeless camp', caption: 'Homeless camp Venice' },
    { src: image100, alt: 'Venice homeless camp', caption: 'Venice homeless camp' },
    { src: image141, alt: 'Venice homeless', caption: 'Venice homeless' },
  ],
  
  gentrification: [
    { src: image9, alt: 'Destruction for new house', caption: 'Destruction for 5M house Venice' },
    { src: image70, alt: 'New construction', caption: 'Venice new construction' },
    { src: image73, alt: 'New apartments', caption: 'Venice new apartments' },
    { src: image135, alt: 'Go home yuppies', caption: 'Go home yuppies graffiti' },
    { src: image142, alt: 'Strange dog sign', caption: 'Strange dog sign Venice' },
    { src: image145, alt: 'Resistance sign', caption: 'Resistance is your duty sign over highway' },
  ],
  
  'venice-life': [
    { src: image4, alt: 'Venice boardwalk scene', caption: 'Venice Beach boardwalk scene' },
    { src: image14, alt: 'Venice Beach life', caption: 'Venice Beach life' },
    { src: image20, alt: 'Venice Beach characters', caption: 'Venice Beach characters' },
    { src: image27, alt: 'Venice street scene', caption: 'Venice street scene' },
    { src: image35, alt: 'Venice neighborhood', caption: 'Venice neighborhood' },
    { src: image43, alt: 'Venice sunset life', caption: 'Venice Beach sunset life' },
    { src: image55, alt: 'Venice boardwalk', caption: 'Venice boardwalk' },
    { src: image61, alt: 'Venice community', caption: 'Venice community' },
    { src: image62, alt: 'Venice Beach scene', caption: 'Venice Beach scene' },
    { src: image63, alt: 'Venice Beach life', caption: 'Venice Beach life' },
    { src: image74, alt: 'Venice Beach scene', caption: 'Venice Beach scene' },
    { src: image76, alt: 'Venice street life', caption: 'Venice street life' },
    { src: image89, alt: 'Venice neighborhood life', caption: 'Venice neighborhood life' },
    { src: image91, alt: 'Venice community scene', caption: 'Venice community scene' },
    { src: image92, alt: 'Venice Beach characters', caption: 'Venice Beach characters' },
    { src: image95, alt: 'Venice Beach life', caption: 'Venice Beach life' },
    { src: image97, alt: 'Venice community', caption: 'Venice community' },
    { src: image105, alt: 'Venice scene', caption: 'Venice scene' },
    { src: image109, alt: 'Venice life', caption: 'Venice life' },
    { src: image148, alt: 'Venice Beach Love Stories sign', caption: 'Venice Beach Love Stories sign' },
  ],
  
  all: [], // Will be populated below
};

// Combine all images for 'all' category
galleryImages.all = [
  ...galleryImages.subjects,
  ...galleryImages.beach,
  ...galleryImages.architecture,
  ...galleryImages.murals,
  ...galleryImages.homelessness,
  ...galleryImages.gentrification,
  ...galleryImages['venice-life'],
];

// Placeholder video data - will be replaced with actual embeds
const videoPlaceholders = [
  { id: 1, title: 'The Muralist - Trailer', duration: '2:30' },
  { id: 2, title: 'The Matriarch - Interview', duration: '5:45' },
  { id: 3, title: 'The Skateboarder - In Action', duration: '3:15' },
  { id: 4, title: 'The Zoot Suiter - Portrait', duration: '4:00' },
  { id: 5, title: 'The Artist - Studio Visit', duration: '6:20' },
  { id: 6, title: 'Venice Beach - Atmosphere', duration: '2:00' },
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState<MediaTab>('photos');
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');

  const currentImages = galleryImages[activeCategory];

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navigation />

      {/* Hero - Tall */}
      <section className="relative hero-tall flex items-end film-grain">
        <div className="absolute inset-0">
          <img
            src={heroSilhouettes}
            alt="Venice Beach gallery"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="relative container-cinematic pb-20 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block text-sm uppercase tracking-widest text-accent mb-6">
              Visual Archive
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-overlay-light text-shadow-cinematic">
              Gallery
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Media Tabs */}
      <section className="py-12 md:py-16 bg-secondary border-b border-border">
        <div className="container-cinematic">
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-8 py-3 text-sm uppercase tracking-widest transition-all duration-300 border ${
                activeTab === 'photos'
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-transparent text-foreground border-border hover:border-primary'
              }`}
            >
              Photos
            </button>
            <button
              onClick={() => setActiveTab('video')}
              className={`px-8 py-3 text-sm uppercase tracking-widest transition-all duration-300 border ${
                activeTab === 'video'
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-transparent text-foreground border-border hover:border-primary'
              }`}
            >
              Video
            </button>
          </div>

          {/* Category Filters (only for photos) */}
          {activeTab === 'photos' && (
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => {
                const count = galleryImages[category.id]?.length ?? 0;
                return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 text-sm uppercase tracking-widest transition-all duration-300 rounded-sm ${
                    activeCategory === category.id
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-background text-foreground hover:bg-muted'
                  }`}
                >
                  {category.label}
                  <span className="ml-2 text-xs opacity-75">
                    ({count})
                  </span>
                </button>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="page-section bg-background">
        <div className="container-cinematic">
          {activeTab === 'photos' ? (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-center text-muted-foreground mb-8">
                {currentImages.length} {currentImages.length === 1 ? 'photo' : 'photos'}
              </p>
              <ImageGallery 
                images={currentImages} 
                layout="masonry" 
                columns={3}
              />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-12">
                <p className="text-muted-foreground">
                  Video content coming soon. Check back for trailers, interviews, and behind-the-scenes footage.
                </p>
              </div>
              
              {/* Video Placeholder Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videoPlaceholders.map((video) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="group cursor-pointer"
                  >
                    <div className="aspect-video bg-muted rounded-sm overflow-hidden relative">
                      <div className="absolute inset-0 flex items-center justify-center bg-foreground/5 group-hover:bg-foreground/10 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:bg-primary transition-colors">
                          <Play className="w-6 h-6 text-primary-foreground ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-3 right-3 px-2 py-1 bg-foreground/80 text-background text-xs rounded">
                        {video.duration}
                      </div>
                    </div>
                    <h3 className="mt-3 font-medium text-foreground group-hover:text-accent transition-colors">
                      {video.title}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;