import React from 'react';
import { personalInfo, stats } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="text-cyan-400 text-xs sm:text-sm font-mono tracking-widest uppercase mb-2 block">
          // Who I Am
        </span>
        <h2 className="font-['Syne'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
          About Aboobaker Siddeeq
        </h2>
      </div>

      {/* Stats Counter Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 backdrop-blur-md transition-all duration-300 text-center group hover:-translate-y-1"
          >
            <div className="font-['Syne'] text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-1">
              {stat.value}
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Narrative Card */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900/90 via-[#0d1326]/80 to-slate-900/90 border border-cyan-500/20 backdrop-blur-xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl">
          <h3 className="font-['Syne'] text-2xl sm:text-3xl font-bold text-white mb-6">
            Blending Commerce Strategy with Modern Engineering
          </h3>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-light">
            Studying <strong className="text-cyan-300 font-semibold">Plus One Commerce at Sirajul Huda Higher Secondary School, Kuttiyady</strong>, I bring a unique dual-perspective: a solid understanding of business, accounting principles, and economics combined with hands-on expertise in full-stack web development and social media strategy.
          </p>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            Through <strong className="text-purple-300 font-semibold">Vibe Coding</strong> and modern AI-augmented workflows, I turn ambitious concepts into sleek, high-performing web applications and growth campaigns at remarkable velocity.
          </p>
        </div>
      </div>

    </section>
  );
}
