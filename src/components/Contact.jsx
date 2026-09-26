import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="text-cyan-400 text-xs sm:text-sm font-mono tracking-widest uppercase mb-2 block">
          // Let's Connect
        </span>
        <h2 className="font-['Syne'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
          Get in Touch
        </h2>
      </div>

      <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-900/90 to-[#070b16] border border-cyan-500/20 backdrop-blur-xl text-center relative overflow-hidden shadow-2xl">
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <h3 className="font-['Syne'] text-2xl sm:text-3xl font-bold text-white mb-4">
          Have a Project, Idea, or Collaboration?
        </h3>
        
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 font-light">
          Whether you want to discuss a new web/app project, commerce solutions, or SMO campaigns, feel free to reach out directly.
        </p>

        {/* Contact Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-10">
          
          {/* WhatsApp Card */}
          <a
            href={`https://wa.me/${personalInfo.whatsapp}?text=Hi%20Siddeeq,%20I%20would%20like%20to%20talk%20about%20a%20project.`}
            target="_blank"
            rel="noreferrer"
            className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 hover:border-emerald-500/50 hover:bg-emerald-500/20 transition-all duration-200 flex items-center justify-center gap-3 group"
          >
            <span className="text-emerald-400 font-bold text-base group-hover:scale-105 transition-transform">
              Chat on WhatsApp
            </span>
          </a>

          {/* Email Card */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 hover:border-cyan-500/50 hover:bg-cyan-500/20 transition-all duration-200 flex items-center justify-center gap-3 group"
          >
            <span className="text-cyan-400 font-bold text-base group-hover:scale-105 transition-transform">
              Send an Email
            </span>
          </a>

        </div>

        <div className="text-xs font-mono text-slate-400">
          Location: {personalInfo.location}
        </div>

      </div>

    </section>
  );
}
