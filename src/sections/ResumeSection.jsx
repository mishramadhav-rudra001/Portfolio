import React from 'react';
import { 
  Download, 
  Eye, 
  CheckCircle2, 
  Briefcase
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeSection({ onOpenResume }) {
  const handleDownloadDirect = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resumePath;
    link.download = 'Madhav_Mishra_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume-section" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0e172a] via-[#0d1424] to-[#090d16] border border-blue-500/30 backdrop-blur-xl shadow-2xl overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Left Content */}
            <div className="space-y-4 text-center md:text-left max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Career Opportunities</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
                Let's Build Something Together
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Interested in my background and technical interests? Explore my comprehensive resume covering BCA coursework, technical skill competencies, and practical project blueprints.
              </p>

              {/* Recruiter Guarantee Points */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Honest Credentials
                </span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  Available for Internships
                </span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  Immediate Availability
                </span>
              </div>
            </div>

            {/* Right Action Buttons */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3.5 w-full sm:w-auto shrink-0">
              <button
                onClick={onOpenResume}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-200"
              >
                <Eye className="w-4 h-4" />
                <span>View Digital Resume</span>
              </button>

              <button
                onClick={handleDownloadDirect}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-colors"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Download Resume PDF</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
