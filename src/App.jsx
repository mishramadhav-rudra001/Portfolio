import React, { useState } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import ResumeModal from './components/ResumeModal';
import Toast from './components/Toast';
import Footer from './components/Footer';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import CoreDomains from './sections/CoreDomains';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import LearningJourney from './sections/LearningJourney';
import Education from './sections/Education';
import GitHubShowcase from './sections/GitHubShowcase';
import ResumeSection from './sections/ResumeSection';
import Contact from './sections/Contact';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = ({ message, type = 'success' }) => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  return (
    <div className="relative min-h-screen bg-[#080B12] text-[#F8FAFC] overflow-x-hidden selection:bg-blue-500/30 selection:text-cyan-300">
      {/* Interactive Custom Cursor (Desktop) */}
      <CustomCursor />

      {/* Dynamic Background Network & Grid */}
      <BackgroundCanvas />

      {/* Sticky Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col space-y-4">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <CoreDomains />
        <Skills />
        <Projects />
        <LearningJourney />
        <Education />
        <GitHubShowcase />
        <ResumeSection onOpenResume={() => setIsResumeOpen(true)} />
        <Contact onShowToast={showToast} />
      </main>

      {/* Premium Minimal Footer */}
      <Footer />

      {/* Interactive Printable / Downloadable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Global Notification Toast */}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}
