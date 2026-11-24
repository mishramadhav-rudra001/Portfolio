import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ChevronRight } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Expertise', href: '#domains' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#journey' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Simple scrollspy to highlight active section
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-[#080B12]/85 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/40'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand identity */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Madhav Mishra - Home"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-emerald-500 p-[1.5px] transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1">
              <div className="w-full h-full bg-[#080B12] rounded-[10px] flex items-center justify-center">
                <span className="font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-emerald-400 text-sm tracking-wider">
                  MM
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-bold text-white text-base tracking-tight group-hover:text-blue-400 transition-colors">
                  {personalInfo.name}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" title="Available for opportunities" />
              </div>
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest hidden sm:inline-block">
                Software &bull; AI &bull; Cyber
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200 relative ${
                    isActive
                      ? 'text-white bg-blue-500/20 font-semibold shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-0.5 bg-blue-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons & Social Links */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 border border-transparent hover:border-slate-700/60 transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-blue-400 hover:bg-slate-800/60 border border-transparent hover:border-slate-700/60 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-200 bg-gradient-to-r from-blue-600/30 to-purple-600/30 hover:from-blue-600/50 hover:to-purple-600/50 border border-blue-500/40 hover:border-blue-400 transition-all duration-200 shadow-sm hover:shadow-blue-500/20"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-2 rounded-lg text-xs font-medium text-blue-300 bg-blue-900/30 border border-blue-600/40"
              aria-label="View Resume"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-blue-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#080B12]/95 border-b border-slate-800 backdrop-blur-2xl px-5 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-white bg-blue-600/20 font-semibold border-l-2 border-blue-500'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-600" />
                </a>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-blue-400 border border-slate-800"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
