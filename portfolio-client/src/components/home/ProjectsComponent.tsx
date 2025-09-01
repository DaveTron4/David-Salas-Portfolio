// ProjectSection.tsx
import { useState, useRef, useEffect } from "react";
import projects from "../../data/projects.json";
import { motion } from "framer-motion";

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
      { threshold: 1 } // adjust how much of the image must be visible
    );

    refs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8 py-16 bg-slate-900">
      {/* Left Side - Images */}
      <div className="space-y-32">
        {projects.map((project, i) => (
          <div
            key={i}
            ref={(el) => {
              refs.current[i] = el;
            }}
            data-index={i}
            className="h-[80vh] flex items-center justify-center"
          >
            <motion.img
                src={project.image}
                alt={project.title}
                className="rounded-xl shadow-lg object-cover h-full"
                initial={{ opacity: 0, x: 80 }}
                animate={{
                    opacity: activeIndex === i ? 1 : 0,
                    x: activeIndex === i ? 0 : 80,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>
        ))}
      </div>

      {/* Right Side - Sticky Info */}
      <div className="md:sticky md:top-20 flex flex-col justify-center h-[80vh]">
        <h2 className="text-3xl font-bold">{projects[activeIndex].title}</h2>
        <p className="mt-4 text-gray-600">{projects[activeIndex].longDesc}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {projects[activeIndex].technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
