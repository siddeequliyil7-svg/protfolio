import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/60 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center font-bold text-white text-xs">
            AS
          </div>
          <span className="text-sm font-medium text-slate-300">
            {personalInfo.name}
          </span>
        </div>

        <div className="text-xs text-slate-500 font-light">
          © {currentYear} Aboobaker Siddeeq Uliyil. All rights reserved. • Plus One Commerce (Sirajul Huda Kuttiyady)
        </div>

        <div className="flex items-center gap-6 text-xs text-slate-400">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
          <a href={personalInfo.instagram} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">Instagram</a>
          <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-400 transition-colors">Email</a>
        </div>

      </div>
    </footer>
  );
}
