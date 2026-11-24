import React, { useState } from 'react';
import { 
  Code2, 
  BrainCircuit, 
  ShieldAlert, 
  Check, 
  Copy, 
  Sparkles, 
  ArrowRight
} from 'lucide-react';
import { coreDomains } from '../data/portfolioData';

export default function CoreDomains() {
  const [activeDomainId, setActiveDomainId] = useState('software-dev');
  const [copiedCode, setCopiedCode] = useState(false);

  const activeDomain = coreDomains.find(d => d.id === activeDomainId) || coreDomains[0];

  const handleCopyCode = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const getDomainIcon = (id) => {
    switch (id) {
      case 'software-dev':
        return Code2;
      case 'ai-ml':
        return BrainCircuit;
      case 'cybersecurity':
        return ShieldAlert;
      default:
        return Code2;
    }
  };

  return (
    <section id="domains" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Signature Triad</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Where My Interests Meet Technology
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Three interconnected pillars forming the bedrock of my learning journey. Built with balanced depth, authentic curiosity, and serious technical intent.
          </p>
        </div>

        {/* 3 Large Signature Interactive Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {coreDomains.map((domain) => {
            const Icon = getDomainIcon(domain.id);
            const isSelected = activeDomainId === domain.id;

            const accentBorder = {
              blue: isSelected ? 'border-blue-500 shadow-lg shadow-blue-500/20' : 'border-slate-800 hover:border-blue-500/40',
              purple: isSelected ? 'border-purple-500 shadow-lg shadow-purple-500/20' : 'border-slate-800 hover:border-purple-500/40',
              emerald: isSelected ? 'border-emerald-500 shadow-lg shadow-emerald-500/20' : 'border-slate-800 hover:border-emerald-500/40',
            }[domain.accentClass];

            const iconColors = {
              blue: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
              purple: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
              emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
            }[domain.accentClass];

            return (
              <div
                key={domain.id}
                onClick={() => setActiveDomainId(domain.id)}
                className={`cursor-pointer p-6 sm:p-7 rounded-2xl bg-[#0f1728]/80 backdrop-blur-xl border transition-all duration-300 flex flex-col justify-between ${accentBorder} hover:-translate-y-1.5`}
              >
                <div>
                  {/* Top Bar with Icon & Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3 rounded-xl border ${iconColors}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                      Domain {domain.id === 'software-dev' ? '01' : domain.id === 'ai-ml' ? '02' : '03'}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white tracking-tight">
                    {domain.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-1 mb-4">
                    {domain.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {domain.description}
                  </p>

                  {/* Key Topics List */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-2">
                      Core Topics &amp; Stack:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {domain.topics.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-900/80 text-slate-300 border border-slate-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Trigger Indicator */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-medium">
                  <span className={`font-mono text-[11px] ${
                    isSelected ? 'text-white font-bold' : 'text-slate-400'
                  }`}>
                    {isSelected ? '● ACTIVE INSPECTION' : 'Click to inspect blueprint'}
                  </span>
                  <ArrowRight className={`w-4 h-4 transition-transform ${
                    isSelected ? 'translate-x-1 text-white' : 'text-slate-500'
                  }`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Deep-Dive Preview Window */}
        <div className="rounded-2xl bg-[#090e18] border border-slate-800 overflow-hidden shadow-2xl backdrop-blur-xl">
          {/* Header Bar */}
          <div className="px-5 py-3.5 bg-[#0e1626] border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono text-slate-300">
                blueprint_viewer: {activeDomain.title.toLowerCase().replace(/\s+/g, '_')}.preview
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleCopyCode(activeDomain.codePreview)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCode ? 'Copied' : 'Copy Blueprint'}</span>
              </button>
            </div>
          </div>

          {/* Content Pane */}
          <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Column: Code / Terminal Snippet */}
            <div className="lg:col-span-7 bg-[#070b12] rounded-xl p-4 border border-slate-800/90 font-mono text-xs overflow-x-auto">
              <div className="flex items-center justify-between text-slate-500 text-[10px] pb-2 mb-2 border-b border-slate-800">
                <span>SYNTAX EXECUTION CONTEXT</span>
                <span className="text-blue-400">READ-ONLY EXPLORATION</span>
              </div>
              <pre className="text-slate-200 leading-relaxed">
                <code>{activeDomain.codePreview}</code>
              </pre>
            </div>

            {/* Right Column: Architectural Highlights */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-[11px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/30">
                <span>ARCHITECTURAL SUMMARY</span>
              </div>
              <h4 className="text-lg font-heading font-bold text-white">
                {activeDomain.title} Integration
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeDomain.id === 'software-dev' && (
                  "Treating software development as the foundation for digital systems. Mastering full-stack architecture, clean separation of concerns, and robust client-side experiences."
                )}
                {activeDomain.id === 'ai-ml' && (
                  "Approaching artificial intelligence through disciplined mathematical intuition and practical data pipelines. Exploring how models learn representations from datasets."
                )}
                {activeDomain.id === 'cybersecurity' && (
                  "Treating cybersecurity as an intrinsic quality of computing. Building proficiency in Linux operating environments, network packet flows, and system defense fundamentals."
                )}
              </p>
              <div className="text-xs text-slate-400 font-mono flex items-center gap-2 pt-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Actively studying and expanding through hands-on labs</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
