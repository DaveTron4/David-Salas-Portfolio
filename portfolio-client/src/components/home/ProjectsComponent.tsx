// ProjectSection.tsx
import { useState, useRef, useEffect } from "react";
import projects from "../../data/projects.json";
import { motion } from "framer-motion";
import {ExternalLink, Github } from "lucide-react";
import { Button } from "../../ui/Button";

export default function ProjectSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  // Check if screen is mobile/tablet
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Don't use scroll observer on mobile

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      { 
        threshold: 0,
        rootMargin: "-20% 0px -20% 0px" // Trigger change when element is 20% into viewport
      }
    );

    refs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, [isMobile]);

  // Mobile/Tablet Layout
  if (isMobile) {
    return (
      <section id="projects" className="py-20 relative bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-text-color">
              Featured <span className="bg-gradient-to-r from-accent2 to-accent1 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A showcase of my recent work and creative solutions
            </p>
          </motion.div>

          {/* Mobile Project Cards */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-card overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-t-xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-to-r from-accent2 via-accent to-accent1 p-[2px] rounded-t-xl">
                    <div className="bg-background rounded-t-[10px] overflow-hidden">
                      <div className="relative h-48 sm:h-64 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transform transition-all duration-700 ease-out group-hover:scale-105"
                          style={{
                            filter: 'drop-shadow(0 10px 20px rgba(99, 102, 241, 0.3)) drop-shadow(0 6px 6px rgba(139, 92, 246, 0.2))'
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-accent2/20 via-transparent to-accent1/10 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Project Number & Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-2xl font-bold bg-gradient-to-r from-accent2 to-accent1 bg-clip-text text-transparent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="h-px bg-gradient-to-r from-accent2 to-accent1 flex-1"></div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-muted-foreground mb-6">{project.longDesc}</p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="glass px-3 py-1 rounded-full text-sm border-primary/30 hover:bg-primary/10 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      asChild
                      className="glass hover:bg-primary/20 border-primary/30 flex-1"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      asChild
                      className="glass hover:bg-accent/20 border-accent/30 flex-1"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* All Projects Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="glass hover:bg-primary/20 border-primary/30"
            >
              <a
                href="https://github.com/DaveTron4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-text-color">
            Featured <span className="bg-gradient-to-r from-accent2 to-accent1 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-8 py-16">

          {/* Left Side - Images */}
          <div className="space-y-32">
            {projects.map((project, i) => (
              <div
                key={i}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                data-index={i}
                className="min-h-screen flex items-center"
              >
                <motion.div className="relative glass-card p-4 rounded-2xl w-full"
                    initial={{ opacity: 0}}
                    animate={{opacity: activeIndex === i ? 1 : 0}}
                    transition={{ duration: 0.3, ease: "easeOut" }}>
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="rounded-xl w-full aspect-square object-cover"
                    initial={{ opacity: 0}}
                    animate={{opacity: activeIndex === i ? 1 : 0}}
                    whileHover={{ scale: .9, translateY: 5}}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </motion.div>
              </div>
            ))}
          </div>

          {/* Right Side - Sticky Info */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              {/* Outer container keeps rounded corners; inner content scrolls */}
              <div className="glass-card rounded-2xl overflow-hidden">
                <div className="lg:max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="p-8 lg:p-12"
                  >
                    {/* Project Number */}
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-4xl font-bold bg-gradient-to-r from-accent2 to-accent1 bg-clip-text text-transparent">
                        {String(activeIndex + 1).padStart(2, '0')}
                      </span>
                      <div className="h-px bg-gradient-to-r from-accent2 to-accent1 flex-1"></div>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-3xl text-text-color lg:text-4xl font-bold mb-6">
                      {projects[activeIndex].title}
                    </h3>

                    {/* Project Description */}
                    <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                      {projects[activeIndex].longDesc}
                    </p>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold mb-4 text-accent2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-3">
                        {projects[activeIndex].technologies.map((tech) => (
                          <span
                            key={tech}
                            className="glass px-4 py-2 rounded-full border-primary/30 hover:bg-primary/10 transition-colors duration-200 cursor-pointer"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        asChild
                        className="glass hover:bg-primary/20 border-primary/30 flex-1"
                      >
                        <a
                          href={projects[activeIndex].liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        asChild
                        className="glass flex-1"
                      >
                        <a
                          href={projects[activeIndex].githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
        </div>
        {/* All Projects Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="glass hover:bg-primary/20 border-primary/30"
          >
            <a
              href="https://github.com/DaveTron4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
