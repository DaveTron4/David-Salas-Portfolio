import skillsData from "../../data/skills.json";
import { motion } from "motion/react"

const SkillsComponent = () => {
  return (
    // <div className="px-8 py-16 bg-slate-900 text-white">
    //   <h2 className="text-4xl font-bold mb-8 text-center">My Skills</h2>
    //   <div className="flex flex-col gap-8">
    //     {Object.entries(skillsData.skills).map(([category, skills], idx) => {
    //       const direction = idx % 2 === 0 ? "left" : "right";
    //       // const duration = Math.max(8, skills.length * 2);
    //       const duration = 25;
    //       const itemWidth = 32; // 170px min width + 20px gap
    //       const adjustment = itemWidth / 2; // half a gap to smooth the loop

    //       const style =
    //         direction === "left"
    //           ? { "--start": "0", "--end": `calc(-50% - ${adjustment}px)`, "--duration": `${duration}s` }
    //           : { "--start": `calc(-50% - ${adjustment}px)`, "--end": "0", "--duration": `${duration}s` };

    //       return (
    //         <div key={category} className="">
    //           <h3 className="text-xl font-semibold mb-4 text-indigo-400">{category}</h3>
    //           <div className="overflow-hidden bg-black py-4 flex rounded-full">
    //             <ul
    //               className="flex gap-8 bg-black text-white infinite-scroll"
    //               style={style as React.CSSProperties}
    //             >
    //               {[...skills, ...skills].map((skill, index) => (
    //                 <li
    //                   key={index}
    //                   className="text-white flex flex-none justify-center min-w-[180px] bg-gray-700 rounded-full py-2 transition-colors duration-200 hover:bg-indigo-500 hover:text-white cursor-pointer"
    //                 >
    //                   {skill}
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
    <section id="skills" className="py-20 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(skillsData.skills).map(([category, skills], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Category Title */}
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {category}
                </h3>
                <div className="h-px bg-gradient-to-r from-primary to-accent flex-1 opacity-30"></div>
              </div>

              {/* Infinite Scroll Container */}
              <div className="relative overflow-hidden">
                <div 
                  className={`flex gap-4 w-fit animate-scroll-${category} hover:pause-animation`}
                  style={{
                    animation: `scroll-${category} 30s linear infinite`,
                  }}
                >
                  {/* Duplicate the skills array for seamless loop */}
                  {[...skills, ...skills].map((skill, index) => (
                    <div
                      key={`${skill}-${index}`}
                      className="flex-shrink-0 glass px-6 py-3 rounded-full hover:bg-primary/20 border-primary/30 transition-all duration-300 hover:scale-105"
                    >
                      <span className="whitespace-nowrap">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style tsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        .hover:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default SkillsComponent;