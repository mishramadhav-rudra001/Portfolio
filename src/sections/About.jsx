import React from 'react';
import { 
  GraduationCap, 
  Code, 
  Cpu, 
  ShieldCheck, 
  Compass, 
  Zap, 
  Layers, 
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { aboutHighlights } from '../data/portfolioData';

export default function About() {
  const iconMap = {
    GraduationCap: GraduationCap,
    Code: Code,
    Cpu: Cpu,
    ShieldCheck: ShieldCheck,
  };

  const principles = [
    {
      title: "Clean, Scalable Architecture",
      desc: "Belief in readable code, thoughtful component modularity, and maintainable software patterns that scale gracefully.",
      icon: Layers,
      color: "text-blue-400",
      border: "border-blue-500/20"
    },
    {
      title: "Algorithmic & Systems Thinking",
      desc: "Delving beneath abstractions to understand how operating systems, memory, data structures, and networks interact.",
      icon: Zap,
      color: "text-cyan-400",
      border: "border-cyan-500/20"
    },
    {
      title: "Intelligence Through Data",
      desc: "Investigating how machine learning algorithms discover latent patterns to automate decisions and solve complex puzzles.",
      icon: Cpu,
      color: "text-purple-400",
      border: "border-purple-500/20"
    },
    {
      title: "Security-by-Design Mindset",
      desc: "Viewing security as a foundational principle rather than an afterthought, respecting Linux permissions and network boundaries.",
      icon: ShieldCheck,
      color: "text-emerald-400",
      border: "border-emerald-500/20"
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Profile &amp; Mindset</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Beyond the Code
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            A technology enthusiast and BCA student developing balanced capabilities across software engineering, artificial intelligence, and cybersecurity.
          </p>
        </div>

        {/* 4 Interactive Profile Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {aboutHighlights.map((item, idx) => {
            const Icon = iconMap[item.icon] || Code;
            const accentClasses = {
              blue: "border-blue-500/30 text-blue-400 bg-blue-500/10",
              cyan: "border-cyan-500/30 text-cyan-400 bg-cyan-500/10",
              purple: "border-purple-500/30 text-purple-400 bg-purple-500/10",
              emerald: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
            }[item.accent] || "border-blue-500/30 text-blue-400 bg-blue-500/10";

            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0f1728]/70 border border-slate-800 backdrop-blur-md hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    {item.label}
                  </span>
                  <div className={`p-2 rounded-xl ${accentClasses} transition-transform group-hover:scale-110`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-lg font-heading font-bold text-white tracking-tight">
                  {item.value}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {item.subtext}
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Narrative & Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Narrative Story Card */}
          <div className="lg:col-span-7 bg-[#0d1524]/80 border border-slate-800 p-6 sm:p-8 rounded-2xl backdrop-blur-xl relative space-y-5">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <span>CANDIDATE DOSSIER // MADHAV MISHRA</span>
            </div>

            <p className="text-slate-300 text-base leading-relaxed">
              Hello! I'm <strong className="text-white font-semibold">Madhav Mishra</strong>, an undergraduate pursuing my <strong className="text-blue-300">Bachelor of Computer Applications (BCA)</strong> at Indira Gandhi National Open University (IGNOU).
            </p>

            <p className="text-slate-300 text-base leading-relaxed">
              My technical journey is fueled by genuine curiosity about how computing systems operate at scale. While many early career developers pick a single niche, I am intentionally building my foundations across three complementary pillars:
            </p>

            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                <span>
                  <strong className="text-white">Software Engineering:</strong> Building intuitive user interfaces with modern React, developing structured backend logic, and practicing modular coding standards.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-purple-400 mt-1 shrink-0" />
                <span>
                  <strong className="text-white">Artificial Intelligence &amp; ML:</strong> Learning how models learn from data, understanding supervised &amp; unsupervised architectures, and exploring practical automation.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                <span>
                  <strong className="text-white">Cybersecurity &amp; Infrastructure:</strong> Getting comfortable with the Linux terminal, mastering networking protocols (TCP/IP, DNS, ports), and practicing defensive concepts.
                </span>
              </li>
            </ul>

            <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Eager to contribute to technology teams &amp; startups</span>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300"
              >
                <span>Discuss an internship opportunity</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 4 Pillars of Engineering Mindset */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {principles.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl bg-[#0f1728]/70 border ${p.border} backdrop-blur-md hover:border-slate-700 transition-all duration-200`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg bg-slate-900 border border-slate-800 ${p.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-heading font-bold text-white tracking-tight">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-11">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
