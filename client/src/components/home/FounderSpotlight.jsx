import React from 'react';
import { Link } from 'react-router-dom';
import { User, ArrowRight, Mail, Phone, MapPin, ShieldCheck, Quote } from 'lucide-react';
import { LinkedInIcon } from '../common/Icons';
import { FOUNDER_INFO } from '../../data/companyData';
import { NeonBadge } from '../common/NeonBadge';

export const FounderSpotlight = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-slate-100/60 via-blue-950/10 to-slate-100/60 dark:from-slate-900/40 dark:via-blue-950/30 dark:to-slate-950 transition-colors duration-300">
      {/* Background neon orb */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-yellow-400/10 dark:bg-yellow-400/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-blue-600/10 dark:bg-blue-600/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2">
            <NeonBadge variant="yellow">Leadership Spotlight</NeonBadge>
            <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-500">
              Visionary AI Architecture
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-gray-500 tracking-tight">
            Meet Our <span className="neon-text-yellow">Founder & Chief Architect</span>.
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-500">
            Leading White Athens Software at the bleeding edge of Agentic AI, Generative Systems, and Enterprise Transformation.
          </p>
        </div>

        {/* Founder Card Container */}
        <div className="max-w-5xl mx-auto rounded-3xl p-8 sm:p-10 lg:p-12 bg-white dark:bg-slate-900/90 border border-blue-200 dark:border-blue-800/80 shadow-2xl glass-card relative overflow-hidden">
          {/* Subtle glowing corner highlight */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-yellow-400/15 via-blue-500/10 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Image Placeholder Column */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group w-full max-w-[320px] aspect-[4/5] rounded-2xl overflow-hidden border-2 border-yellow-400/60 dark:border-yellow-400/50 bg-gradient-to-b from-blue-900 via-slate-900 to-slate-950 shadow-[0_0_30px_rgba(250,204,21,0.25)] flex flex-col items-center justify-center p-6 text-center transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(250,204,21,0.4)]">
                {/* Visual Placeholder Graphic */}
                <div className="w-28 h-28 rounded-full bg-blue-950/80 border-2 border-dashed border-yellow-400/60 flex items-center justify-center mb-4 text-yellow-400 shadow-inner group-hover:scale-105 transition-transform duration-300">
                  <User className="w-14 h-14 opacity-80" />
                </div>

                <div className="space-y-1.5 z-10">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-yellow-400">
                    Founder Portrait Space
                  </span>
                  <p className="text-xs text-slate-300 font-medium leading-relaxed">
                    Reserved for <span className="text-white font-semibold">{FOUNDER_INFO.name}</span>
                  </p>
                  <p className="text-[11px] text-blue-300/80">
                    Director & Chief AI Architect
                  </p>
                </div>

                {/* Verified Leadership Pill */}
                <div className="mt-4 px-3 py-1 rounded-full bg-yellow-400/20 border border-yellow-400/50 text-[11px] font-bold text-yellow-300 flex items-center gap-1.5 shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-yellow-400" />
                  <span>White Athens Software</span>
                </div>

                {/* Ambient glow in placeholder */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Direct Reachout icons */}
              <div className="mt-4 flex items-center gap-3">
                <a
                  href={FOUNDER_INFO.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-blue-600/10 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-500/30 transition-all duration-200"
                  aria-label="Founder LinkedIn"
                  title="Connect on LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${FOUNDER_INFO.contact.email}`}
                  className="p-2.5 rounded-xl bg-yellow-400/10 hover:bg-yellow-400 text-yellow-600 hover:text-slate-950 border border-yellow-400/30 transition-all duration-200"
                  aria-label="Email Founder"
                  title="Send Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${FOUNDER_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="p-2.5 rounded-xl bg-purple-600/10 hover:bg-purple-600 text-purple-600 hover:text-white border border-purple-500/30 transition-all duration-200"
                  aria-label="Call Office"
                  title="Call Phone"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Founder Biography Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div>
                <span className="text-xs font-mono font-bold text-yellow-600 dark:text-yellow-400 tracking-widest uppercase">
                  Executive Profile
                </span>
                <h3 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mt-1">
                  {FOUNDER_INFO.name}
                </h3>
                <p className="text-base font-bold text-blue-600 dark:text-blue-400 mt-0.5">
                  {FOUNDER_INFO.title}
                </p>
              </div>

              {/* Executive Quote */}
              <div className="relative p-5 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border-l-4 border-yellow-400 text-slate-700 dark:text-slate-200 italic text-sm sm:text-base leading-relaxed">
                <Quote className="w-6 h-6 text-yellow-500/50 absolute top-2 right-3 -scale-x-100 pointer-events-none" />
                "{FOUNDER_INFO.quote}"
              </div>

              {/* Bio Excerpt */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {FOUNDER_INFO.tagline}
              </p>

              {/* Core Architecture Domains */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  Core Specializations & Domains:
                </span>
                <div className="flex flex-wrap gap-2">
                  {FOUNDER_INFO.domains.map((domain, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                    >
                      {domain}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action: Link to Full About Page with Visiting Card */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  to="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-300 hover:to-amber-300 shadow-md hover:shadow-[0_0_20px_rgba(250,204,21,0.5)] transition-all"
                >
                  <span>View Full Profile & Visiting Card</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </Link>

                <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-yellow-500" />
                  <span>Delhi NCR, India • Global Client Engagements</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
