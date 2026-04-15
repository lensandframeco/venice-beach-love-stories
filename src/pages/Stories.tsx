import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { stories } from "@/data/stories";
const heroSilhouettes = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/ece97169-fa7f-42ee-b7ce-e4a5c444a21e.jpg";
const Stories = () => {
  return <div className="snap-container">
      <ScrollProgress />
      <Navigation />

      {/* Opening Hero */}
      <section className="snap-section relative film-grain">
        <div className="absolute inset-0">
          <motion.div initial={{
          scale: 1.1
        }} animate={{
          scale: 1
        }} transition={{
          duration: 2,
          ease: "easeOut"
        }} className="w-full h-full">
            <img src={heroSilhouettes} alt="Silhouettes at Venice Beach sunset" className="w-full h-full object-cover" />
          </motion.div>
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 flex flex-col items-start justify-end h-full container-cinematic pb-24">
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 1,
          delay: 0.3
        }}>
            <span className="block text-sm uppercase tracking-[0.3em] text-accent mb-6">
              A Documentary Series
            </span>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-overlay-light text-shadow-cinematic">
              The Stories
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro Quote Section */}
      <section className="snap-section bg-overlay-dark flex items-center justify-center">
        <div className="container-cinematic text-center">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 1
        }} className="max-w-4xl mx-auto">
            <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl text-overlay-light italic leading-tight mb-10">"These are not just stories about Venice. They are stories about complex love. And these stories have a moral responsibility, to the dead as well as the living."</blockquote>
            <p className="text-overlay-light/50 text-xl">
              Many Venice people. Many ways of holding on.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Chapters - Each story gets its own snap section */}
      {stories.map((story, index) => <section key={story.slug} className="snap-section relative">
          {/* Background Image */}
          <div className="absolute inset-0">
            {story.image ? <img src={story.image} alt={story.name} className="w-full h-full object-cover" /> : <div className="w-full h-full bg-muted" />}
            <div className="absolute inset-0 bg-gradient-to-r from-overlay-dark/95 via-overlay-dark/70 to-overlay-dark/30" />
          </div>

          {/* Chapter Number */}
          <div className="absolute top-1/2 right-8 md:right-16 -translate-y-1/2 font-serif text-[12rem] md:text-[16rem] text-overlay-light/5 select-none pointer-events-none">
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-end pb-0">
            <div className="container-cinematic mb-[-2rem]">
              <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }} className="max-w-2xl">
                <span className="block text-xs uppercase tracking-[0.4em] text-accent mb-6">
                  Chapter {String(index + 1).padStart(2, "0")} — {story.title}
                </span>
                <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-overlay-light mb-6">
                  {story.name}
                </h2>
                <p className="font-serif text-2xl text-overlay-light/80 italic mb-8">
                  "{story.tagline}"
                </p>
                <p className="text-overlay-light/60 text-lg leading-relaxed mb-12 max-w-xl">
                  {story.preview}
                </p>
                <Link to={`/stories/${story.slug}`} className="inline-block px-10 py-5 border border-overlay-light/40 text-overlay-light 
                             text-sm uppercase tracking-[0.2em] hover:bg-overlay-light hover:text-overlay-dark 
                             transition-all duration-500">
                  Enter Story
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Progress indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {stories.map((_, i) => <div key={i} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === index ? "bg-accent w-8" : "bg-overlay-light/30"}`} />)}
          </div>
        </section>)}

      {/* Closing Section */}
      <section className="snap-section bg-background flex items-center justify-center">
        <div className="container-cinematic text-center">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 1
        }}>
            <p className="text-muted-foreground text-xl mb-12">
              In a neighborhood where belonging must constantly be re-asserted,<br />
              these are portraits of persistence.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {stories.map(story => <Link key={story.slug} to={`/stories/${story.slug}`} className="group">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-transparent group-hover:border-accent transition-colors">
                    {story.image ? <img src={story.image} alt={story.name} className="w-full h-full object-cover" /> : <div className="w-full h-full bg-muted" />}
                  </div>
                </Link>)}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="snap-section-content">
        <Footer />
      </div>
    </div>;
};
export default Stories;