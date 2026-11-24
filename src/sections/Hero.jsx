import React from 'react';
import { 
  ArrowDown, 
  FileText, 
  Mail, 
  Terminal, 
  Code2, 
  BrainCircuit, 
  ShieldCheck, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Personal Brand Identity & Headlines */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left z-10">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 backdrop-blur-md w-fit shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-mono text-slate-300 font-medium tracking-wide">
              {personalInfo.status}
            </span>
          </div>

          {/* Name & Greeting */}
          <div className="space-y-2">
            <p className="text-base sm:text-lg font-mono text-blue-400 font-medium">
              {personalInfo.heroGreeting}
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-white leading-[1.08]">
              Building{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Software.
              </span>
              <br />
              Exploring{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
                Intelligence.
              </span>
              <br />
              Understanding{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                Security.
              </span>
            </h1>
          </div>

          {/* Professional Designation */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-sm sm:text-base font-semibold text-slate-200">
              Aspiring Software Developer
            </span>
            <span className="text-slate-600 font-bold">&bull;</span>
            <span className="text-sm sm:text-base font-semibold text-purple-300">
              AI/ML Enthusiast
            </span>
            <span className="text-slate-600 font-bold">&bull;</span>
            <span className="text-sm sm:text-base font-semibold text-emerald-400">
              Cybersecurity Learner
            </span>
          </div>

          {/* Supporting Bio */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
            Passionate about creating software, exploring intelligent technologies, and understanding digital security. Constantly learning, experimenting, and building towards the future of technology.
          </p>

          {/* 3 Animated Domain Indicator Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <a
              href="#domains"
              className="group p-3 rounded-xl bg-slate-900/60 border border-blue-500/20 hover:border-blue-400/60 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                  <Code2 className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-white group-hover:text-blue-300 transition-colors">
                    Software Dev
                  </span>
                  <span className="text-[10px] text-slate-400">Web & Systems</span>
                </div>
              </div>
            </a>

            <a
              href="#domains"
              className="group p-3 rounded-xl bg-slate-900/60 border border-purple-500/20 hover:border-purple-400/60 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                  <BrainCircuit className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-white group-hover:text-purple-300 transition-colors">
                    AI & Machine Learning
                  </span>
                  <span className="text-[10px] text-slate-400">Data & Neural Nets</span>
                </div>
              </div>
            </a>

            <a
              href="#domains"
              className="group p-3 rounded-xl bg-slate-900/60 border border-emerald-500/20 hover:border-emerald-400/60 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-white group-hover:text-emerald-300 transition-colors">
                    Cybersecurity
                  </span>
                  <span className="text-[10px] text-slate-400">Linux & Defense</span>
                </div>
              </div>
            </a>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Explore My Work</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-blue-400/60 transition-all duration-300 hover:-translate-y-0.5 shadow-md"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              <span>Download Resume</span>
            </button>

            <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all"
            >
              <Mail className="w-4 h-4 text-emerald-400" />
              <span>Let's Connect</span>
            </a>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-4 pt-2 text-xs font-mono text-slate-400">
            <span>Find me on:</span>
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4 text-blue-400" />
              <span>GitHub</span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-300 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-cyan-400" />
              <span>LinkedIn</span>
            </a>
          </div>

        </div>

        {/* Right Column: Abstract Futuristic Interactive Visual */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div className="relative w-full max-w-lg aspect-square">
            
            {/* Ambient Multi-Hue Glow Rings */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-emerald-500/20 rounded-3xl blur-2xl transform -rotate-3 scale-95" />
            
            {/* Main Interactive Hologram Frame */}
            <div className="relative w-full h-full rounded-2xl bg-[#0c1424]/90 border border-slate-700/70 p-5 shadow-2xl flex flex-col justify-between overflow-hidden backdrop-blur-xl">
              
              {/* Terminal Titlebar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] font-mono text-slate-400 ml-2">
                    madhav@future-stack:~
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  SYSTEM ACTIVE
                </span>
              </div>

              {/* Central Composite Visual: Code + Neural Nodes + Shield */}
              <div className="relative flex-1 my-4 flex items-center justify-center">
                {/* Background Concentric SVG Circuit Rings */}
                <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 400 400" fill="none">
                  <circle cx="200" cy="200" r="160" stroke="#3B82F6" strokeWidth="1" strokeDasharray="6 6" />
                  <circle cx="200" cy="200" r="120" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="4 8" />
                  <circle cx="200" cy="200" r="80" stroke="#10B981" strokeWidth="1" />
                  <line x1="40" y1="200" x2="360" y2="200" stroke="#334155" strokeWidth="0.8" />
                  <line x1="200" y1="40" x2="200" y2="360" stroke="#334155" strokeWidth="0.8" />
                </svg>

                {/* Central Futuristic Core Badge */}
                <div className="relative z-10 w-32 h-32 rounded-2xl bg-gradient-to-br from-slate-900 to-[#101726] border-2 border-indigo-500/50 p-4 shadow-xl flex flex-col items-center justify-center text-center">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center mb-1 shadow-md shadow-purple-600/30">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs font-heading font-bold text-white tracking-wider">
                    MADHAV
                  </span>
                  <span className="text-[9px] font-mono text-cyan-400">
                    BCA &bull; IGNOU
                  </span>
                </div>

                {/* Floating Node 1: Software Architecture */}
                <div className="absolute top-2 left-3 z-20 px-3 py-2 rounded-xl bg-slate-900/90 border border-blue-500/40 shadow-lg flex items-center gap-2 backdrop-blur-md animate-bounce duration-1000">
                  <Code2 className="w-4 h-4 text-blue-400" />
                  <div className="flex flex-col">
                    <span className="text-[11px] font-mono text-white font-medium">React + Python</span>
                    <span className="text-[9px] text-blue-300">Clean Architecture</span>
                  </div>
                </div>

                {/* Floating Node 2: Neural / ML */}
                <div className="absolute top-8 right-2 z-20 px-3 py-2 rounded-xl bg-slate-900/90 border border-purple-500/40 shadow-lg flex items-center gap-2 backdrop-blur-md">
                  <BrainCircuit className="w-4 h-4 text-purple-400" />
                  <div className="flex flex-col">
                    <span className="text-[11px] font-mono text-white font-medium">Neural Logic</span>
                    <span className="text-[9px] text-purple-300">Pattern Exploration</span>
                  </div>
                </div>

                {/* Floating Node 3: Cyber Shield */}
                <div className="absolute bottom-3 left-4 z-20 px-3 py-2 rounded-xl bg-slate-900/90 border border-emerald-500/40 shadow-lg flex items-center gap-2 backdrop-blur-md">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <div className="flex flex-col">
                    <span className="text-[11px] font-mono text-white font-medium">Linux & Defense</span>
                    <span className="text-[9px] text-emerald-300">Port & Net Hardening</span>
                  </div>
                </div>

                {/* Floating Node 4: Continuous Learner */}
                <div className="absolute bottom-6 right-3 z-20 px-3 py-2 rounded-xl bg-slate-900/90 border border-cyan-500/40 shadow-lg flex items-center gap-2 backdrop-blur-md">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <div className="flex flex-col">
                    <span className="text-[11px] font-mono text-white font-medium">Bash & Git</span>
                    <span className="text-[9px] text-cyan-300">Modern Workflows</span>
                  </div>
                </div>
              </div>

              {/* Bottom Console Snippet */}
              <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 text-[11px] font-mono text-slate-300 space-y-1">
                <div className="flex items-center justify-between text-slate-500 text-[10px]">
                  <span>INTERSECTION MONITOR</span>
                  <span className="text-emerald-400">100% OPERATIONAL</span>
                </div>
                <div className="text-blue-400">
                  &gt; initiate --domains [&quot;software&quot;, &quot;ai-ml&quot;, &quot;cybersecurity&quot;]
                </div>
                <div className="text-slate-400 text-[10px]">
                  [✓] Foundations solid &bull; Authentic curiosity &bull; Ready to build
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Down Scroll Hint */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-500 hover:text-blue-400 transition-colors"
        aria-label="Scroll to About Section"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest">Explore</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
