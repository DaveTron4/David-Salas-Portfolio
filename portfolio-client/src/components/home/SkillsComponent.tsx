import skillsData from "../../data/skills.json";

const SkillsComponent = () => {
  return (
    <div className="px-8 py-16 bg-slate-900 text-white">
      <h2 className="text-4xl font-bold mb-8 text-center">My Skills</h2>
      <div className="flex flex-col gap-8">
        {Object.entries(skillsData.skills).map(([category, skills], idx) => {
          const direction = idx % 2 === 0 ? "left" : "right";
          // const duration = Math.max(8, skills.length * 2);
          const duration = 25;
          const itemWidth = 32; // 170px min width + 20px gap
          const adjustment = itemWidth / 2; // half a gap to smooth the loop

          const style =
            direction === "left"
              ? { "--start": "0", "--end": `calc(-50% - ${adjustment}px)`, "--duration": `${duration}s` }
              : { "--start": `calc(-50% - ${adjustment}px)`, "--end": "0", "--duration": `${duration}s` };

          return (
            <div key={category} className="">
              <h3 className="text-xl font-semibold mb-4 text-indigo-400">{category}</h3>
              <div className="overflow-hidden bg-black py-4 flex rounded-full">
                <ul
                  className="flex gap-8 bg-black text-white infinite-scroll"
                  style={style as React.CSSProperties}
                >
                  {[...skills, ...skills].map((skill, index) => (
                    <li
                      key={index}
                      className="text-white flex flex-none justify-center min-w-[180px] bg-gray-700 rounded-full py-2 transition-colors duration-200 hover:bg-indigo-500 hover:text-white cursor-pointer"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsComponent;