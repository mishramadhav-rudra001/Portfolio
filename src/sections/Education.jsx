import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  Award 
} from 'lucide-react';
import { educationInfo } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Education
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Formal undergraduate computer science coursework and continuous academic development at Indira Gandhi National Open University.
          </p>
        </div>

        {/* Education Hero Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#0f1728]/80 border border-slate-800 p-6 sm:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Background Orb */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            
            {/* Degree and Institution Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 mb-1">
                  <BookOpen className="w-4 h-4" />
                  <span>{educationInfo.type}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
                  {educationInfo.degree}
                </h3>
                <p className="text-base text-slate-300 font-medium">
                  {educationInfo.institution}
                </p>
              </div>

              {/* Status Badge */}
              <div className="flex flex-col sm:items-end space-y-1.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {educationInfo.status}
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  Expected Graduation: {educationInfo.expectedGraduation}
                </span>
                <span className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  {educationInfo.location}
                </span>
              </div>
            </div>

            {/* Overview Description */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {educationInfo.description}
            </p>

            {/* Core Coursework Badges */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                Relevant Academic Coursework:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
                {educationInfo.coursework.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-medium text-slate-200 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Takeaways */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300 uppercase tracking-wider">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Academic Core Strengths</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                {educationInfo.keyTakeaways.map((takeaway, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
