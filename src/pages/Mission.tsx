import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import heroStorm from "@/assets/hero-storm-beach.jpeg";
import image9 from "@/assets/gallery/image9.jpeg";
import image70 from "@/assets/gallery/image70.jpeg";
import image73 from "@/assets/gallery/image73.jpeg";
import image25 from "@/assets/gallery/image25.jpeg";
import image51 from "@/assets/gallery/image51.jpeg";
import image7 from "@/assets/gallery/image7.jpg";
import image21 from "@/assets/gallery/image21.jpeg";
import image30 from "@/assets/gallery/image30.jpeg";
import image4 from "@/assets/gallery/image4.jpg";
import image27 from "@/assets/gallery/image27.jpeg";
const Mission = () => {
  return <div className="snap-container">
      <ScrollProgress />
      <Navigation />

      {/* Hero */}
      <section className="snap-section relative film-grain">
        <div className="absolute inset-0">
          <motion.img initial={{
          scale: 1.1
        }} animate={{
          scale: 1
        }} transition={{
          duration: 2,
          ease: "easeOut"
        }} src={heroStorm} alt="Storm clouds over Venice Beach" className="w-full h-full object-cover" />
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
          delay: 0.3
        }}>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-overlay-light text-shadow-cinematic">
              Our Mission
            </h1>
          </motion.div>
        </div>
      </section>

      {/* The Project */}
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
              <span className="block text-xs uppercase tracking-[0.3em] text-accent mb-6">
                Our Mission
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-10">
                Venice Beach Love Stories
              </h2>
              <div className="space-y-6 text-lg md:text-xl text-foreground/85 leading-relaxed">
                <p><em>Venice Beach Love Stories</em> is a documentary series that enters into the complexity of Los Angeles's most mythologized neighborhood—not through statistics, but through the lives of five people whose stories carry the truth of this place.</p>
                <p>For starters, we find a Chilean muralist who turns walls into testimony. A community elder and activist preserving Oakwood's history. A young skateboarder carrying forward Dogtown's legacy. A zoot-suit-wearing Latino whose daily dress is an act of cultural resilience, and an African-American local who keeps Venice moving with his Bicycle Whisperer moving repair shop. </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Photo Strip */}
      <section className="snap-section bg-overlay-dark flex items-center">
        <div className="w-full grid grid-cols-2 md:grid-cols-4 h-[70vh]">
          {[image7, image21, image4, image27].map((img, index) => <motion.div key={index} initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: index * 0.15
        }} className="relative overflow-hidden">
              <img src={img} alt={`Venice ${index + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-overlay-dark/20" />
            </motion.div>)}
        </div>
      </section>

      {/* Venice Context */}
      <section className="snap-section bg-secondary flex items-center">
        <div className="container-cinematic">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -40
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }}>
              <span className="block text-xs uppercase tracking-[0.3em] text-accent mb-6">
                Context
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8">
                A Neighborhood of Collisions
              </h2>
              <div className="space-y-6 text-foreground/85 leading-relaxed">
                <p>
                  Venice Beach has always been a vision built on shifting sand. Founded in 1905 by tobacco 
                  magnate Abbot Kinney, it was imagined as a "Venice of America."
                </p>
                <p>
                  Today, gentrification is the tide reshaping everything. Multi-million-dollar homes rise 
                  beside modest cottages. Families who anchored the community for generations are pushed out.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 40
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }}>
              <div className="aspect-video rounded-sm overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/gT75g2IqT1g"
                  title="A Neighborhood of Collisions"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Architecture Strip */}
      <section className="snap-section bg-background flex items-center">
        <div className="container-cinematic">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[image25, image51, image30].map((img, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} className="aspect-[3/2] rounded-sm overflow-hidden">
                <img src={img} alt={`Venice architecture ${index + 1}`} className="w-full h-full object-cover" />
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Art Resists Forgetting - Quote Section */}
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
              Purpose
            </span>
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-overlay-light italic leading-relaxed mb-12">
              "Venice is a place of beauty and rupture, creativity and exile. It is where belonging 
              must constantly be re-asserted, where art resists forgetting."
            </blockquote>
            <p className="text-overlay-light/60 text-lg max-w-2xl mx-auto">
              This series is an act of witness. An insistence that these lives be seen. 
              A belief that storytelling can be a form of resistance.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="snap-section-content">
        <Footer />
      </div>
    </div>;
};
export default Mission;