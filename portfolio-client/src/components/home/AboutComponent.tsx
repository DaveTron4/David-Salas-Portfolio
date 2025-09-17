import { motion } from "framer-motion";
import { Code2, Rocket } from "lucide-react";

const AboutComponent = () => {
  return (
    <section id="about" className="section-card py-20 relative">
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
            Passionate full stack developer with 5+ years of experience creating digital solutions
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
                src="../../../public/profile.jpg"
                alt="Alex Smith - Full Stack Developer"
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
              <h3 className="text-2xl font-bold mb-6 text-text-color">My Story</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I started my journey in web development 5 years ago, driven by a passion for creating 
                  digital experiences that solve real-world problems. What began as curiosity about how 
                  websites work has evolved into a deep expertise in full stack development.
                </p>
                <p>
                  I specialise in modern JavaScript frameworks, cloud technologies, and database design. 
                  My experience spans from startups to enterprise-level applications, always focusing on 
                  user experience and performance optimization.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open 
                  source projects, or sharing knowledge with the developer community. I believe in 
                  continuous learning and staying ahead of industry trends.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-accent2 to-accent1 bg-clip-text text-transparent">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-accent2 to-accent1 bg-clip-text text-transparent">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-accent2 to-accent1 bg-clip-text text-transparent">15+</div>
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