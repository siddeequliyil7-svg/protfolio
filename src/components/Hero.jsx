import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto text-center">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md hover:bg-cyan-500/15 transition-all">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>{personalInfo.availability}</span>
        </div>

        {/* Dynamic Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
          <span className="px-3.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs sm:text-sm font-semibold">
            Plus One Commerce
          </span>
          <span className="px-3.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs sm:text-sm font-semibold">
            Sirajul Huda Kuttiyady
          </span>
          <span className="px-3.5 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs sm:text-sm font-semibold">
            Web & App Developer
          </span>
          <span className="px-3.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs sm:text-sm font-semibold">
            SMO Specialist
          </span>
        </div>

        {/* Main Name Heading */}
        <h1 className="font-['Syne'] text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400 tracking-tight leading-[1.1] mb-6">
          {personalInfo.name}
        </h1>

        {/* Subtitle / Bio */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-10">
          {personalInfo.aboutBio}
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`https://wa.me/${personalInfo.whatsapp}?text=Hi%20Siddeeq,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!`}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-base shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-3"
          >
            <span>Chat on WhatsApp</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          <a
            href="#projects"
            className="px-8 py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-semibold text-base border border-slate-700/60 hover:border-cyan-500/40 backdrop-blur-md hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Explore Projects
          </a>
        </div>

      </div>
    </section>
  );
}
