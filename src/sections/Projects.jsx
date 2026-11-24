import React, { useState } from 'react';
import { 
  FolderGit2, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { Github } from '../components/Icons';
import { projectsData, personalInfo } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filterTabs = [
    { label: 'All Projects', value: 'all' },
    { label: 'Software Development', value: 'software' },
    { label: 'AI / ML', value: 'ai' },
    { label: 'Cybersecurity', value: 'cybersecurity' },
  ];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.categoryKey === filter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Engineering Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Things I'm Building
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            A showcase of application architectures, exploratory data pipelines, and system utilities. Every project card reflects honest technical foundations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 border ${
                filter === tab.value
                  ? 'bg-blue-600/30 text-white border-blue-500 shadow-md shadow-blue-500/20 font-semibold'
                  : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Sophisticated Empty State / Blueprint Statement */}
        <div className="mb-12 p-6 rounded-2xl bg-[#0d1627]/80 border border-blue-500/20 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <Sparkles className="w-4 h-4" />
                <span>ACTIVE DEVELOPMENT PIPELINE</span>
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-bold text-white">
                &ldquo;Every great project starts with an idea. I'm currently developing my skills and working towards building practical technology solutions.&rdquo;
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Rather than fabricating finished products, each blueprint below demonstrates my architectural design, chosen tech stack, and practical implementation roadmap.
              </p>
            </div>
            
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors shrink-0 shadow-md"
            >
              <Github className="w-4 h-4" />
              <span>Follow on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const accentBorder = {
              blue: 'hover:border-blue-500/50',
              purple: 'hover:border-purple-500/50',
              emerald: 'hover:border-emerald-500/50',
            }[project.accent] || 'hover:border-blue-500/50';

            const badgeColor = {
              blue: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
              purple: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
              emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
            }[project.accent] || 'bg-blue-500/10 text-blue-400 border-blue-500/30';

            return (
              <div
                key={project.id}
                className={`p-6 rounded-2xl bg-[#0f1728]/80 border border-slate-800 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between ${accentBorder} hover:-translate-y-1.5 shadow-xl`}
              >
                <div>
                  {/* Category and Status Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${badgeColor}`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-heading font-bold text-white tracking-tight mb-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Architecture Overview */}
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 mb-5">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                      Architecture Blueprint:
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed font-mono">
                      {project.architecture}
                    </p>
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-1.5 mb-5">
                    {project.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Links */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    <Github className="w-3.5 h-3.5 text-blue-400" />
                    <span>View Repository</span>
                  </a>

                  <span className="text-[11px] font-mono text-slate-500">
                    Blueprint Spec
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
