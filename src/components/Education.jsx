import React from 'react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="text-cyan-400 text-xs sm:text-sm font-mono tracking-widest uppercase mb-2 block">
          // Academic Journey
        </span>
        <h2 className="font-['Syne'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
          Education & Campus
        </h2>
      </div>

      <div className="max-w-4xl mx-auto">
        {educationData.map((item, idx) => (
          <div
            key={idx}
            className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 backdrop-blur-xl relative overflow-hidden transition-all duration-300"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <span className="px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-semibold">
                {item.badge}
              </span>
              <span className="text-xs sm:text-sm text-slate-400 font-mono">
                {item.period}
              </span>
            </div>

            <h3 className="font-['Syne'] text-xl sm:text-2xl font-bold text-white mb-2">
              {item.degree}
            </h3>

            <div className="text-cyan-400 font-medium text-base sm:text-lg mb-4">
              {item.institution}
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              {item.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
