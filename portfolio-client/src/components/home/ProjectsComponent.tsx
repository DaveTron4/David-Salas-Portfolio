// ProjectSection.tsx
import { useState, useRef, useEffect } from "react";
import projects from "../../data/projects.json";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      { threshold: 1 }
    );

    refs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-8 py-16 bg-slate-900">
      {/* Left Side - Images */}
      <div className="space-y-32">
        {projects.map((project, i) => (
          <div
            key={i}
            ref={(el) => {
              refs.current[i] = el;
            }}
            data-index={i}
            className="h-[80vh] flex flex-col justify-end items-center 
              bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-700 
              rounded-xl relative border-5 border-gray-800 overflow-hidden
              shadow-[inset_0_0_30px_rgba(255,255,255,.2),0_0_100px_rgba(0,0,0,0.5)]"
          >
            <motion.p className="absolute top-5 text-3xl text-white text-center bg-gray-900/50 px-10 py-3 rounded-full
              backdrop-blur-md border-[0.1px] border-white/50
              shadow-[inset_0_0_50px_rgba(255,255,255,.3),0_5px_20px_rgba(0,0,0,0.3)]"
              initial={{ opacity: 0, y: 0, scale: 0.8 }}
              animate={activeIndex === i ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 200, damping: 20, duration: 0.5 }}
              >
              {project.shortDesc}
            </motion.p>
            <motion.div className="w-full h-[80%] flex items-center justify-center
              bg-gradient-to-b from-transparent to-black/70">
              <motion.img
                src={project.image}
                alt={project.title}
                // image fits half the container height
                className="rounded-t-xl object-contfain h-full 
                  border-[0.1px] border-b-0 border-white/50 
                  shadow-[0_0_50px_rgba(30,144,255,0.3)]"
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={
                  activeIndex === i
                    ? { opacity: 1, x: 0, y: 0 }
                    : {opacity: 0, x: 0, y: 80}
                }
                whileHover={{ scale: 1.05 , rotate: 2, translateY: 5}}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </motion.div>

            <motion.button
              className="absolute bottom-5 right-5 text-white rounded-full w-12 h-12 flex items-center justify-center
              backdrop-blur-md border-[0.1px] border-white/50
              shadow-[inset_0_0_50px_rgba(255,255,255,.3),0_0_50px_rgba(30,144,255,0.3)]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={activeIndex === i ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 200, damping: 20, duration: 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUpRight size={20} />
            </motion.button>
          </div>
        ))}
      </div>

      {/* Right Side - Sticky Info */}
      <div className="md:sticky md:top-20 mx-10 flex flex-col justify-center h-[80vh]">
        <h2 className="text-3xl font-bold text-white">{projects[activeIndex].title}</h2>
        <p className="mt-4 text-gray-100">{projects[activeIndex].longDesc}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {projects[activeIndex].technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700 text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
