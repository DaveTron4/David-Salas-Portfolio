import skillsData from "../../data/skills.json";
import { motion } from "motion/react"

const SkillsComponent = () => {
  return (
    <section id="skills" className="py-20 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-text-color">
            Technical <span className="bg-gradient-to-r from-accent2 to-accent1 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            A look at the languages, frameworks, and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {Object.entries(skillsData.skills).map(([category, skills], idx) => {
            const direction = idx % 2 === 0 ? "left" : "right";
            const duration = 25; // Faster for mobile visibility
            
            const adjustment = 8; // Adjusted for smaller gap

            const style =
              direction === "left"
                ? { "--start": "0%", "--end": `calc(-50% - ${adjustment}px)`, "--duration": `${duration}s` }
                : { "--start": `calc(-50% - ${adjustment}px)`, "--end": "0%", "--duration": `${duration}s` };

            return (
              <div key={category}>
                <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-accent2 to-accent1 bg-clip-text text-transparent">{category}</h3>
                <div className="w-full overflow-hidden group" style={{
                    maskImage: 'linear-gradient(to right, transparent 0, black 5%, black 95%, transparent 100%)'
                }}>
                  <ul
                    className="flex items-center gap-4 infinite-scroll"
                    style={style as React.CSSProperties}
                  >
                    {[...skills, ...skills].map((skill, index) => (
                      <li
                        key={index}
                        className="flex-shrink-0 w-28 sm:w-36 lg:w-44 h-10 sm:h-11 lg:h-12 flex items-center justify-center glass hover:bg-primary/20 border-primary/30 cursor-pointer rounded-full transition-colors duration-200"
                      >
                        <span className="text-slate-300 font-medium text-sm sm:text-base">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsComponent;