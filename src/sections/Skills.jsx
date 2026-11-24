import React, { useState } from 'react';
import { 
  Wrench, 
  Terminal, 
  Globe, 
  Shield, 
  Cpu, 
  CheckCircle2, 
  Clock, 
  Info
} from 'lucide-react';
import { technicalSkills } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Programming', 'Web Development', 'Cybersecurity & Systems', 'AI & Machine Learning', 'Tools & Environments'];

  const categoryIcons = {
    'Programming': Terminal,
    'Web Development': Globe,
    'Cybersecurity & Systems': Shield,
    'AI & Machine Learning': Cpu,
    'Tools & Environments': Wrench,
  };

  const filteredCategories = selectedCategory === 'All'
    ? technicalSkills
    : technicalSkills.filter(c => c.category === selectedCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5" />
            <span>Capability Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            My Technical Toolkit
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            A transparent overview of programming languages, web technologies, cybersecurity tools, and AI concepts. Clearly differentiated between established capabilities and active learning.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 border ${
                selectedCategory === cat
                  ? 'bg-blue-600/30 text-white border-blue-500 shadow-md shadow-blue-500/20 font-semibold'
                  : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid Grouped by Category */}
        <div className="space-y-10">
          {filteredCategories.map((group, gIdx) => {
            const GroupIcon = categoryIcons[group.category] || Wrench;
            
            const groupAccentStyles = {
              blue: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
              cyan: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
              purple: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
              emerald: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
            }[group.accent] || 'text-blue-400 border-blue-500/30 bg-blue-500/10';

            return (
              <div key={gIdx} className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl border ${groupAccentStyles}`}>
                    <GroupIcon className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-white tracking-tight">
                    {group.category}
                  </h3>
                  <div className="flex-1 h-px bg-slate-800/80 ml-2" />
                </div>

                {/* Skills Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.skills.map((skill, sIdx) => {
                    const isCore = skill.status === 'Core Skill';
                    const isPracticed = skill.status === 'Practiced';

                    return (
                      <div
                        key={sIdx}
                        className="p-5 rounded-2xl bg-[#0f1728]/70 border border-slate-800 hover:border-slate-700 backdrop-blur-md transition-all duration-200 flex flex-col justify-between group hover:-translate-y-1"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                              {skill.name}
                            </span>
                            <span
                              className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                                isCore
                                  ? 'bg-blue-500/10 text-blue-300 border-blue-500/30'
                                  : isPracticed
                                  ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                                  : 'bg-purple-500/10 text-purple-300 border-purple-500/30'
                              }`}
                            >
                              {skill.status}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 leading-relaxed">
                            {skill.note}
                          </p>
                        </div>

                        <div className="pt-3 mt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                          <span className="flex items-center gap-1.5">
                            {isCore || isPracticed ? (
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                            ) : (
                              <Clock className="w-3.5 h-3.5 text-purple-400" />
                            )}
                            <span>{isCore ? 'Hands-on practice' : isPracticed ? 'System fluent' : 'Concept in progress'}</span>
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Honest Taxonomy Notice */}
        <div className="mt-14 p-5 rounded-2xl bg-[#0e1628]/80 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong className="text-white">Authentic Skill Reporting: </strong>
              To uphold professional integrity, this portfolio deliberately avoids fabricated skill percentages (e.g. &quot;Python 95%&quot;). Skills are organized by genuine practical experience and active coursework.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 text-xs font-mono">
            <span className="flex items-center gap-1 text-blue-300">
              <span className="w-2 h-2 rounded-full bg-blue-400" /> Core Skill
            </span>
            <span className="flex items-center gap-1 text-purple-300">
              <span className="w-2 h-2 rounded-full bg-purple-400" /> Actively Learning
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
