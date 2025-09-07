import React from 'react'
import experience from "../../data/experiences.json";

const ExperienceComponent = () => {
  return (
    <div className="px-8 py-16 bg-slate-900 text-white">
      <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
      <div className="relative border-l-4 border-indigo-500 ml-6">
        {experience.experiences.map((exp, index) => (
          <div key={index} className="mb-10 ml-4">
            {/* Dot on the timeline */}
            <div className="absolute -left-3.5 w-7 h-7 bg-indigo-500 rounded-full border-4 border-slate-900"></div>

            <div className="bg-slate-800 p-6 rounded-xl shadow-md">
              <p className="text-sm text-gray-400">{exp.date}</p>
              <h3 className="text-2xl font-semibold text-indigo-400">{exp.position}</h3>
              <p className="text-lg font-medium">{exp.company}</p>
              <p className="mt-2 text-gray-300">{exp.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-indigo-600 text-white text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceComponent