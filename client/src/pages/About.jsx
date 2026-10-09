import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { VisitingCard3D } from '../components/about/VisitingCard3D';
import { CompanySnapshot } from '../components/about/CompanySnapshot';
import { FounderFullProfile } from '../components/about/FounderFullProfile';
import { ConsultationModal } from '../components/common/ConsultationModal';
import { NeonBadge } from '../components/common/NeonBadge';

export const About = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="py-12 md:py-20 relative overflow-hidden transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-yellow-400/10 dark:bg-yellow-400/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/15 dark:bg-blue-600/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <NeonBadge variant="yellow">Organization & Leadership</NeonBadge>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-gray-400 tracking-tight">
            About <span className="neon-text-yellow">White Athens Software</span> & Our Leadership.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-500 leading-relaxed">
            Founded in 2025, White Athens Software is an AI-first organization dedicated to bridging foundational model research with bulletproof, regulated enterprise workflows.
          </p>
        </div>

        {/* SECTION 1: Interactive 3D Digital Visiting Card Showcase */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-m font-mono font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
              Digital Identity & Credentials
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-gray-400">
              Official Executive Visiting Card
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-500">
              Flip to explore front & back card specs, copy credentials, or download the direct contact vCard file.
            </p>
          </div>

          <VisitingCard3D />
        </section>

        {/* SECTION 2: Comprehensive Founder & Leadership Profile */}
        <section className="space-y-6">
          <FounderFullProfile onBookConsultation={() => setModalOpen(true)} />
        </section>

        {/* SECTION 3: Official Company Snapshot & Capabilities */}
        <section className="space-y-6">
          <CompanySnapshot />
        </section>

        {/* SECTION 4: Direct Action Banner */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-900/60 via-slate-900 to-blue-950 border border-blue-700/50 shadow-2xl text-center space-y-4 text-white">
          <h3 className="text-2xl sm:text-3xl font-black">
            Ready to Collaborate with <span className="neon-text-yellow">White Athens</span>?
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Schedule an initial technical deep-dive with Sachin Jain and our senior solutions architects to assess your enterprise AI roadmap.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-300 hover:to-amber-300 shadow-lg shadow-yellow-500/25 hover:shadow-[0_0_20px_rgba(250,204,21,0.5)] transition-all"
            >
              <span>Schedule Architecture Consultation</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>
        </section>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};
