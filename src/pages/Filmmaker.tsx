import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
const kerryWide = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/9abe69bf-06f9-4623-b0f5-4697e36bcdbf.jpg";
const image16 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/d7ab3c50-4d62-418d-b847-27dfc2839961.jpg";
const image18 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/76d54f9f-85aa-4c80-ac1c-594731c7828c.jpg";
const image31 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/91fff89d-ea77-4243-a21f-4cc2f7bf0681.jpg";
const image32 = "https://images.makeitglow.co/projects/cmmu4z6bh0002t3t21i7j9pyt/0e8f6a74-12df-4475-8d74-317a55126c12.jpg";
const films = [{
  title: "Following the Ninth",
  subtitle: "In the Footsteps of Beethoven's Final Symphony",
  description: "A global journey exploring how Beethoven's Ninth Symphony has inspired movements for freedom, from Tiananmen Square to the fall of the Berlin Wall."
}, {
  title: "Love & Justice",
  subtitle: "In the Footsteps of Beethoven's Rebel Opera",
  description: "An exploration of Fidelio, Beethoven's only opera, and its enduring message about political prisoners and the power of love to overcome tyranny."
}, {
  title: "Beethoven's Last Will & Testament",
  subtitle: "The Late String Quartets",
  description: "A meditation on Beethoven's final works—music of transcendence composed in deafness and isolation."
}];
const books = ["Bound for Glory — Part of the Milestones of Black American History series", "Journeys with Beethoven: Following the Ninth and Beyond — Co-authored with Pulitzer Prize–winning critic Tim Page", "A History of the United States: American Voices, Controversial Issues"];
const Filmmaker = () => {
  return <div className="snap-container">
      <ScrollProgress />
      <Navigation />

      {/* Hero - Opening */}
      <section className="snap-section relative film-grain">
        <div className="absolute inset-0">
          <motion.img initial={{
          opacity: 0,
          scale: 1.1
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 2,
          ease: "easeOut"
        }} src={kerryWide} alt="Kerry Candaele" className="w-full h-full object-cover object-center" />
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-end container-cinematic pb-24">
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 1,
          delay: 0.5
        }}>
            <span className="block text-sm uppercase tracking-[0.4em] text-accent mb-6">
              The Filmmaker
            </span>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-overlay-light text-shadow-cinematic mb-6">
              Kerry Candaele
            </h1>
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 1.2,
            duration: 0.8
          }} className="flex gap-4 text-xl md:text-2xl text-overlay-light/70 font-serif italic">
              <span>Filmmaker</span>
              <span className="text-accent">·</span>
              <span>Writer</span>
              <span className="text-accent">·</span>
              <span>Educator</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="snap-section bg-background flex items-center">
        <div className="container-cinematic">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }}>
              <div className="space-y-8 text-lg md:text-xl text-foreground/85 leading-relaxed">
                <p>
                  Kerry Candaele has lived and worked in Venice Beach for over 25 years. As a filmmaker, 
                  writer, and educator, his work explores the intersections of art, history, and human struggle.
                </p>
                <p>
                  <em>Venice Beach Love Stories</em> grows from that long residence—not as an outsider's 
                  documentary, but as a meditation by someone who has lived inside the contradictions, 
                  the vitality, and the contested beauty of this place.
                </p>
                <p>
                  His previous work demonstrates a commitment to finding the human within the historical, 
                  the personal within the political.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Venice Atmosphere - Full Bleed Strip */}
      <section className="snap-section bg-overlay-dark flex items-center">
        <div className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 h-[70vh]">
            {[image16, image18, image31, image32].map((img, index) => <motion.div key={index} initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8,
            delay: index * 0.15
          }} className="relative overflow-hidden">
                <img src={img} alt={`Venice atmosphere ${index + 1}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-overlay-dark/20" />
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Filmography */}
      <section className="snap-section bg-secondary flex items-center">
        <div className="container-cinematic">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="text-center mb-16">
            <span className="block text-xs uppercase tracking-[0.3em] text-accent mb-4">
              Filmography
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
              The Beethoven Trilogy
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {films.map((film, index) => <motion.div key={film.title} initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} className="bg-card p-8 md:p-10 rounded-sm border-l-2 border-accent">
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                  {film.title}
                </h3>
                <p className="text-accent italic mb-4">
                  {film.subtitle}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {film.description}
                </p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Books */}
      <section className="snap-section bg-background flex items-center">
        <div className="container-cinematic">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }}>
              <span className="block text-xs uppercase tracking-[0.3em] text-accent mb-4">
                Publications
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-12">
                Books
              </h2>

              <ul className="space-y-8">
                {books.map((book, index) => <motion.li key={index} initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.4,
                delay: index * 0.1
              }} className="flex items-start gap-6 text-lg text-foreground/85">
                    <span className="w-3 h-3 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>{book}</span>
                  </motion.li>)}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Teaching - Quote Section */}
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
          duration: 0.8
        }} className="max-w-4xl mx-auto">
            <span className="block text-xs uppercase tracking-[0.3em] text-accent mb-8">
              Teaching
            </span>
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-overlay-light italic leading-relaxed">"His classrooms become spaces where history comes alive, where students learn to see the world through the eyes of those who made it, from top to bottom."</blockquote>
          </motion.div>
        </div>
      </section>

      <div className="snap-section-content">
        <Footer />
      </div>
    </div>;
};
export default Filmmaker;