import React from 'react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="text-cyan-400 text-xs sm:text-sm font-mono tracking-widest uppercase mb-2 block">
          // Capabilities & Stack
        </span>
        <h2 className="font-['Syne'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
          Skills & Specializations
        </h2>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsData.map((category, idx) => (
          <div
            key={idx}
            className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 group"
          >
            <h3 className="font-['Syne'] text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
              {category.category}
            </h3>
            <p className="text-sm text-slate-400 mb-6">
              {category.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 text-xs sm:text-sm font-medium hover:border-cyan-400/40 hover:text-cyan-300 hover:bg-slate-800 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
