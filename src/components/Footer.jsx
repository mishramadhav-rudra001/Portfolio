import React, { useState, useEffect } from 'react';
import { 
  ArrowUp, 
  Mail
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

const CURRENT_YEAR = 2026;

export default function Footer() {
  const [indiaTime, setIndiaTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setIndiaTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#06080e] border-t border-slate-900 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-900">
          
          {/* Brand Info */}
          <div className="space-y-3 max-w-md">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-emerald-500 p-[1.5px]">
                <div className="w-full h-full bg-[#080B12] rounded-[10px] flex items-center justify-center">
                  <span className="font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 text-xs">
                    MM
                  </span>
                </div>
              </div>
              <span className="font-heading font-bold text-white text-lg tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed font-mono">
              &ldquo;Think. Build. Learn. Secure.&rdquo;
            </p>

            <p className="text-xs text-slate-500 leading-relaxed">
              Aspiring Software Developer, AI/ML Enthusiast, and Cybersecurity Learner pursuing BCA at IGNOU.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400">
            <a href="#hero" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#domains" className="hover:text-purple-400 transition-colors">Expertise</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#journey" className="hover:text-emerald-400 transition-colors">Journey</a>
            <a href="#education" className="hover:text-blue-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>

          {/* Back to top & India Time */}
          <div className="flex flex-col sm:items-end gap-3 shrink-0">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-blue-400" />
            </button>

            <div className="text-[11px] font-mono text-slate-500 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>India Time (IST): {indiaTime || 'Active'}</span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Tech Stack */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {CURRENT_YEAR} {personalInfo.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socialLinks.email}
              className="text-slate-400 hover:text-emerald-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
