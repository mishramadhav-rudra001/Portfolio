import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare,
  ExternalLink
} from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Please provide a subject';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message (minimum 10 characters)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
      onShowToast({ message: 'Email copied to clipboard!', type: 'success' });
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
      onShowToast({ message: 'Phone number copied to clipboard!', type: 'success' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Honest handling: prepares message and launches mailto client
    setTimeout(() => {
      setIsSubmitting(false);

      const subjectEncoded = encodeURIComponent(`[Portfolio Contact] ${formData.subject}`);
      const bodyEncoded = encodeURIComponent(
        `Hi Madhav,\n\nMy Name: ${formData.name}\nMy Email: ${formData.email}\n\nMessage:\n${formData.message}\n`
      );

      const mailtoUrl = `mailto:${personalInfo.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
      window.open(mailtoUrl, '_blank');

      onShowToast({ 
        message: 'Message prepared! Opening default email client...', 
        type: 'success' 
      });

      // Clear form
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 600);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect &amp; Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Have an Opportunity? Let's Connect.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Whether you are a recruiter seeking an energetic intern, a technology team exploring candidates, or a fellow learner, I look forward to connecting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl bg-[#0f1728]/80 border border-slate-800 backdrop-blur-xl space-y-5">
              <h3 className="text-xl font-heading font-bold text-white tracking-tight">
                Direct Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Reach out directly via email, phone, or connect on LinkedIn and GitHub. Response time is typically within 24 hours.
              </p>

              {/* Email Card with Copy Button */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">Email Address</span>
                    <a
                      href={personalInfo.socialLinks.email}
                      className="text-xs sm:text-sm font-medium text-slate-200 hover:text-blue-400 transition-colors truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-2 rounded-lg text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors shrink-0"
                  title="Copy email"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card with Copy Button */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">Phone / WhatsApp</span>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-xs sm:text-sm font-medium text-slate-200 hover:text-emerald-400 transition-colors"
                    >
                      +91 {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="p-2 rounded-lg text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors shrink-0"
                  title="Copy phone"
                  aria-label="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">Location</span>
                  <span className="text-xs sm:text-sm font-medium text-slate-200">
                    {personalInfo.location} (Open to remote &amp; on-site opportunities)
                  </span>
                </div>
              </div>

              {/* Social Profiles Grid */}
              <div className="pt-2 grid grid-cols-2 gap-3">
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-semibold text-slate-200">LinkedIn</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-blue-400 transition-colors" />
                </a>

                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-slate-300" />
                    <span className="text-xs font-semibold text-slate-200">GitHub</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-white transition-colors" />
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0f1728]/80 border border-slate-800 backdrop-blur-xl shadow-2xl">
              <div className="pb-4 mb-6 border-b border-slate-800 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-heading font-bold text-white">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Fill in your details below to begin the conversation.
                  </p>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  RECRUITER READY
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. John Doe / Recruiter Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none transition-colors ${
                        errors.name ? 'border-rose-500 focus:border-rose-400' : 'border-slate-800 focus:border-blue-500'
                      }`}
                    />
                    {errors.name && <p className="text-[10px] text-rose-400">{errors.name}</p>}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. hiring@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none transition-colors ${
                        errors.email ? 'border-rose-500 focus:border-rose-400' : 'border-slate-800 focus:border-blue-500'
                      }`}
                    />
                    {errors.email && <p className="text-[10px] text-rose-400">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 block">
                    Subject *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Internship Opportunity / Software Developer Role"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none transition-colors ${
                      errors.subject ? 'border-rose-500 focus:border-rose-400' : 'border-slate-800 focus:border-blue-500'
                    }`}
                  />
                  {errors.subject && <p className="text-[10px] text-rose-400">{errors.subject}</p>}
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 block">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your team, the role requirements, or the project you are building..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none transition-colors resize-none ${
                      errors.message ? 'border-rose-500 focus:border-rose-400' : 'border-slate-800 focus:border-blue-500'
                    }`}
                  />
                  {errors.message && <p className="text-[10px] text-rose-400">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-600/30 transition-all duration-200 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Preparing Transmission...' : 'Send Message'}</span>
                  </button>
                  <p className="text-[10px] text-slate-500 text-center mt-2">
                    Transparent notice: Submitting prepares an authenticated email transmission to <code className="text-slate-400">mishramadhav03@gmail.com</code>.
                  </p>
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
