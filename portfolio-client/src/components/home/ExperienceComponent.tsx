import experience from "../../data/experiences.json";
import { motion } from "framer-motion";

const ExperienceComponent = () => {
  
  return (
    <section id="experience" className="py-20 sm:py-32 bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-text-color">
            Career <span className="bg-gradient-to-r from-accent2 to-accent1 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My professional path and key accomplishments.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-accent2/30">
          {experience.experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-12 ml-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Dot on the timeline */}
              <div className="absolute w-4 h-4 bg-accent1 rounded-full -left-[9px] mt-1.5 border-4 border-background"></div>

              <div className="p-6 rounded-lg bg-card border border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:border-accent2/50">
                <p className="text-sm text-muted-foreground mb-1">{exp.date}</p>
                <h3 className="text-2xl font-semibold text-foreground">{exp.position}</h3>
                <p className="text-lg font-medium text-accent2 mb-3">{exp.company}</p>
                <p className="text-muted-foreground">{exp.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="glass text-xs font-medium px-3 py-1 rounded-full cursor-pointer hover:bg-primary/20 border-primary/30 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceComponent