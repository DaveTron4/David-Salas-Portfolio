import { motion } from "framer-motion";

const AboutComponent = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-text-color">
            About <span className="bg-gradient-to-r from-accent2 to-accent1 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Senior Computer Science student building secure, scalable solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative glass-card p-4 rounded-2xl">
              <img
                src="/profile.jpg"
                alt="David Salas Carrascal - Full-Stack Software Engineer"
                className="w-full h-96 lg:h-[500px] object-cover rounded-xl"
              />
            </div>
          </motion.div>

          {/* Right side - Story */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-text-color">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  As a senior Computer Science student at Georgia State University, I specialize in 
                  full-stack development and cybersecurity. I'm passionate about transforming complex 
                  challenges into elegant, secure software solutions that make a real impact.
                </p>
                <p>
                  Currently serving as a CodePath Tech Fellow, I mentor aspiring developers while 
                  continuously expanding my expertise in cloud security and advanced penetration testing. 
                  My experience spans from building responsive web applications to implementing secure 
                  backend systems with modern frameworks.
                </p>
                <p>
                  I thrive on learning emerging technologies and contributing to projects that push 
                  boundaries. Whether it's crafting user-centric interfaces or architecting scalable 
                  databases, I'm driven by the goal of building the future of tech—one line of code 
                  at a time.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-accent2 to-accent1 bg-clip-text text-transparent">4+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-accent2 to-accent1 bg-clip-text text-transparent">15+</div>
                  <div className="text-sm text-muted-foreground">Projects Built</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-accent2 to-accent1 bg-clip-text text-transparent">20+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutComponent