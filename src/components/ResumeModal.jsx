import React from 'react';
import { X, Download, Printer, ExternalLink, GraduationCap, Code, ShieldCheck, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { personalInfo, educationInfo, technicalSkills } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Open / download resume PDF or prompt
    const link = document.createElement('a');
    link.href = personalInfo.resumePath;
    link.download = `Madhav_Mishra_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#0c121e] border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header toolbar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-[#0e1626]">
          <div className="flex items-center gap-2.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs font-mono text-slate-400">
              Madhav_Mishra_Resume_BCA.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-sm"
              title="Download Resume PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#090e17] text-slate-200">
          {/* Resume Header */}
          <div className="border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
                {personalInfo.name}
              </h1>
              <p className="text-sm font-medium text-blue-400 mt-1">
                {personalInfo.designation}
              </p>
              <p className="text-xs text-slate-400 mt-2 max-w-xl leading-relaxed">
                {personalInfo.shortIntro}
              </p>
            </div>

            <div className="flex flex-col space-y-1.5 text-xs text-slate-300 font-mono bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <a href={personalInfo.socialLinks.email} className="hover:underline">{personalInfo.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>+91 {personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2 pt-1 border-t border-slate-800">
                <ExternalLink className="w-3 h-3 text-cyan-400" />
                <a href={personalInfo.socialLinks.github} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
                  github.com/mishramadhav-rudra001
                </a>
              </div>
            </div>
          </div>

          {/* Core Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {personalInfo.pillars.map((pillar, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <h4 className="text-xs font-semibold text-white tracking-wide">{pillar.title}</h4>
                <p className="text-[11px] text-slate-400 mt-1 leading-snug">{pillar.short}</p>
              </div>
            ))}
          </div>

          {/* Education Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-1 border-b border-slate-800">
              <GraduationCap className="w-4 h-4 text-blue-400" />
              <h2 className="text-sm font-heading font-bold uppercase tracking-wider text-white">Education</h2>
            </div>

            <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/70">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-white">{educationInfo.degree}</h3>
                  <p className="text-xs text-blue-300 font-medium">{educationInfo.institution}</p>
                </div>
                <div className="mt-1 sm:mt-0 text-left sm:text-right">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-blue-500/10 text-blue-300 border border-blue-500/30">
                    {educationInfo.status} &bull; Expected {educationInfo.expectedGraduation}
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                {educationInfo.description}
              </p>
              
              <div className="mt-3">
                <span className="text-[11px] font-mono text-slate-500 block mb-1.5 uppercase">Key Coursework:</span>
                <div className="flex flex-wrap gap-1.5">
                  {educationInfo.coursework.map((course, i) => (
                    <span key={i} className="px-2 py-0.5 rounded-md text-[11px] bg-slate-800 text-slate-300 border border-slate-700/60">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills Organized */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-1 border-b border-slate-800">
              <Code className="w-4 h-4 text-emerald-400" />
              <h2 className="text-sm font-heading font-bold uppercase tracking-wider text-white">Technical Skills & Toolkit</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {technicalSkills.map((cat, idx) => (
                <div key={idx} className="bg-slate-900/40 p-3.5 rounded-xl border border-slate-800/70">
                  <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center justify-between">
                    <span>{cat.category}</span>
                    <span className="text-[10px] text-slate-500 lowercase font-mono">({cat.skills.length} skills)</span>
                  </h4>
                  <div className="space-y-1.5">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="flex items-center justify-between text-xs">
                        <span className="text-slate-200 font-medium">{skill.name}</span>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                          skill.status === 'Core Skill'
                            ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                            : skill.status === 'Practiced'
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                        }`}>
                          {skill.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Projects & Practical Focus */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-1 border-b border-slate-800">
              <ShieldCheck className="w-4 h-4 text-purple-400" />
              <h2 className="text-sm font-heading font-bold uppercase tracking-wider text-white">Engineering Focus & Project Blueprints</h2>
            </div>

            <div className="space-y-2.5">
              <div className="bg-slate-900/40 p-3.5 rounded-xl border border-slate-800/70">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-semibold text-white">Full-Stack Application Architecture (MERN)</h4>
                  <span className="text-[10px] font-mono text-blue-400">Software Dev</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Component-driven architecture using React, client-side routing, RESTful API endpoints in Node/Express, and schema modeling with MongoDB.
                </p>
              </div>

              <div className="bg-slate-900/40 p-3.5 rounded-xl border border-slate-800/70">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-semibold text-white">Machine Learning & Exploratory Data Pipeline</h4>
                  <span className="text-[10px] font-mono text-purple-400">AI / ML</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Data preprocessing, correlation analysis, and foundational classification models in Python using NumPy and scikit-learn.
                </p>
              </div>

              <div className="bg-slate-900/40 p-3.5 rounded-xl border border-slate-800/70">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-semibold text-white">Linux System & Network Defense Exploration</h4>
                  <span className="text-[10px] font-mono text-emerald-400">Cybersecurity</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Shell scripting for system auditing, exploring TCP/IP protocols, inspecting open ports, and understanding network defense fundamentals.
                </p>
              </div>
            </div>
          </div>

          {/* Candidate Notice */}
          <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-500/20 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
            <p className="text-xs text-slate-300">
              <span className="font-semibold text-white">Candidate Note: </span>
              All skills, education, and learning milestones listed represent authentic, active academic pursuits without fabricated credentials or metrics. Open to internships and entry-level developer roles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
