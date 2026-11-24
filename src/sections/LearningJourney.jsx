import React, { useState } from 'react';
import { 
  GitCommit, 
  Code2, 
  BrainCircuit, 
  ShieldCheck, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';
import { learningPaths } from '../data/portfolioData';

export default function LearningJourney() {
  const [activeTab, setActiveTab] = useState(0);

  const activePath = learningPaths[activeTab] || learningPaths[0];

  const getDomainIcon = (domain) => {
    if (domain.includes('Software')) return Code2;
    if (domain.includes('AI')) return BrainCircuit;
    return ShieldCheck;
  };

  return (
    <section id="journey" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <GitCommit className="w-3.5 h-3.5" />
            <span>Progressive Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Engineering My Future
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            An interactive roadmap depicting my progression across Software Development, AI/ML, and Cybersecurity. Built with milestone honesty and no fabricated completion bars.
          </p>
        </div>

        {/* 3 Domain Roadmap Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-12">
          {learningPaths.map((path, idx) => {
            const Icon = getDomainIcon(path.domain);
            const isSelected = activeTab === idx;

            const tabColors = {
              blue: isSelected ? 'border-blue-500 bg-blue-950/40 text-blue-300' : 'border-slate-800 hover:border-slate-700 text-slate-400',
              purple: isSelected ? 'border-purple-500 bg-purple-950/40 text-purple-300' : 'border-slate-800 hover:border-slate-700 text-slate-400',
              emerald: isSelected ? 'border-emerald-500 bg-emerald-950/40 text-emerald-300' : 'border-slate-800 hover:border-slate-700 text-slate-400',
            }[path.accent];

            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between ${tabColors}`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-heading font-bold text-white">
                      {path.domain}
                    </h4>
                    <span className="text-[11px] font-mono text-slate-400">
                      {path.stages.length} Milestones
                    </span>
                  </div>
                </div>

                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Pathway Details Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0f1728]/80 border border-slate-800 backdrop-blur-xl mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                ACTIVE LEARNING TRACK
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mt-1">
                {activePath.domain}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {activePath.description}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                Foundations Validated
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/30">
                Active Study
              </span>
            </div>
          </div>

          {/* Interactive Timeline Sequence */}
          <div className="mt-8 space-y-6 relative before:absolute before:inset-0 before:left-5 sm:before:left-7 before:w-0.5 before:bg-slate-800 before:z-0">
            {activePath.stages.map((stage, sIdx) => {
              const isCompleted = stage.status === 'Completed';
              const isInProgress = stage.status === 'In Progress';

              const badgeStyle = isCompleted
                ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                : isInProgress
                ? 'bg-blue-500/10 text-blue-300 border-blue-500/30'
                : 'bg-slate-800 text-slate-400 border-slate-700';

              return (
                <div key={sIdx} className="relative z-10 flex items-start gap-4 sm:gap-6 group">
                  {/* Timeline Node Icon */}
                  <div className={`w-10 sm:w-14 h-10 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover:scale-105 ${
                    isCompleted
                      ? 'bg-[#0b1b17] border-emerald-500/50 text-emerald-400'
                      : isInProgress
                      ? 'bg-[#0f1d33] border-blue-500/60 text-blue-400 shadow-md shadow-blue-500/20'
                      : 'bg-slate-900 border-slate-800 text-slate-500'
                  }`}>
                    {isCompleted ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    ) : isInProgress ? (
                      <Clock className="w-5 h-5 text-blue-400 animate-pulse" />
                    ) : (
                      <span className="text-xs font-mono font-bold">{sIdx + 1}</span>
                    )}
                  </div>

                  {/* Milestone Card Content */}
                  <div className="flex-1 p-5 rounded-2xl bg-slate-900/60 border border-slate-800/90 group-hover:border-slate-700 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">
                          {stage.level}
                        </span>
                        <h4 className="text-sm sm:text-base font-heading font-bold text-white">
                          {stage.title}
                        </h4>
                      </div>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border self-start sm:self-auto ${badgeStyle}`}>
                        {stage.status}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {stage.topics}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
