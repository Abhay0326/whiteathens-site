import React from 'react';
import {
  User,
  Award,
  Phone,
  Mail,
  MapPin,
  Quote,
  CheckCircle,
} from 'lucide-react';
import { LinkedInIcon } from '../common/Icons';
import { FOUNDER_INFO } from '../../data/companyData';
import { NeonBadge } from '../common/NeonBadge';

export const FounderFullProfile = ({ onBookConsultation }) => {
  return (
    <div className="rounded-3xl p-8 sm:p-10 lg:p-12 bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-900/60 shadow-xl space-y-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Founder Portrait Space & Direct Contacts */}
        <div className="lg:col-span-4 flex flex-col items-center">
          <div className="w-full max-w-[280px] aspect-[4/5] rounded-3xl overflow-hidden border-2 border-yellow-400/70 bg-gradient-to-b from-blue-950 via-slate-900 to-black p-6 flex flex-col items-center justify-center text-center shadow-[0_0_30px_rgba(250,204,21,0.25)] relative group">
            {/* Visual Icon / Placeholder */}
            <div className="w-24 h-24 rounded-full bg-blue-900/50 border-2 border-dashed border-yellow-400/80 flex items-center justify-center mb-3 text-yellow-400 shadow-inner group-hover:scale-105 transition-transform duration-300">
              <User className="w-12 h-12" />
            </div>

            <div className="space-y-1 z-10">
              <span className="text-[10px] font-mono font-bold tracking-widest text-yellow-400 uppercase">
                Official Portrait
              </span>
              <h4 className="text-base font-bold text-white">
                {FOUNDER_INFO.name}
              </h4>
              <p className="text-[11px] text-blue-300">
                {FOUNDER_INFO.title}
              </p>
            </div>

            <div className="mt-3 px-3 py-1 rounded-full bg-yellow-400/20 border border-yellow-400/50 text-[10px] font-bold text-yellow-300">
              White Athens Software
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Quick contact list below portrait */}
          <div className="w-full max-w-[280px] mt-6 space-y-2 text-xs text-slate-600 dark:text-slate-300">
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-yellow-500 flex-shrink-0" />
              <span className="font-mono">{FOUNDER_INFO.contact.phone}</span>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-yellow-500 flex-shrink-0" />
              <span className="truncate">{FOUNDER_INFO.contact.email}</span>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-yellow-500 flex-shrink-0" />
              <span>{FOUNDER_INFO.contact.location}</span>
            </div>

            <div className="pt-2">
              <a
                href={FOUNDER_INFO.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-all"
              >
                <LinkedInIcon className="w-4 h-4" />
                <span>Verify LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Detailed Bio & Leadership Pillars */}
        <div className="lg:col-span-8 space-y-6">
          <div>
            <div className="flex items-center gap-2">
              <NeonBadge variant="yellow" size="small">
                Executive Leadership
              </NeonBadge>
              <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold">
                WHITE ATHENS SOFTWARE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mt-1">
              {FOUNDER_INFO.name}
            </h2>
            <p className="text-base sm:text-lg font-bold text-yellow-600 dark:text-yellow-400 mt-0.5">
              {FOUNDER_INFO.title}
            </p>
          </div>

          {/* Strategic Quote */}
          <div className="relative p-6 rounded-2xl bg-yellow-500/10 border-l-4 border-yellow-400 text-slate-800 dark:text-slate-200 italic text-sm sm:text-base leading-relaxed">
            <Quote className="w-8 h-8 text-yellow-500/30 absolute top-3 right-4 -scale-x-100 pointer-events-none" />
            "{FOUNDER_INFO.quote}"
          </div>

          {/* Biography Text */}
          <div className="space-y-4 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            <p>
              {FOUNDER_INFO.name} is an AI Architect and Technology Leader who steers the engineering vision and multi-agent innovation roadmap at White Athens Software. He specializes in designing production-ready, fault-tolerant AI platforms that combine generative cognition with strict enterprise deterministic rules.
            </p>
            <p>
              With extensive hands-on experience guiding mission-critical transformations across banking & financial institutions (BFSI), global insurance carriers, automotive manufacturers, and high-scale enterprise platforms, Sachin bridges the architectural gap between raw foundation model capabilities and regulated enterprise environments.
            </p>
          </div>

          {/* Core Architectural Tenets */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
              <Award className="w-4 h-4 text-yellow-500" />
              Core Architectural Tenets & Philosophies
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-xs space-y-1">
                <span className="font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Deterministic Rule Interceptors
                </span>
                <p className="text-slate-600 dark:text-slate-400">
                  Ensuring no autonomous agent executes critical actions without validating against hard business constraints.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-xs space-y-1">
                <span className="font-bold text-yellow-600 dark:text-yellow-400 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Cost-Optimized Model Cascading
                </span>
                <p className="text-slate-600 dark:text-slate-400">
                  Routing routine queries through lightweight models, reserving costly frontier models only when deep reasoning is needed.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-xs space-y-1">
                <span className="font-bold text-purple-600 dark:text-purple-400 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Institutional Compliance by Design
                </span>
                <p className="text-slate-600 dark:text-slate-400">
                  Adherence to EU AI Act, NIST AI RMF, and ISO 42001 baked directly into the model gateway and agent telemetry.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-xs space-y-1">
                <span className="font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Multi-Cloud Sovereign Autonomy
                </span>
                <p className="text-slate-600 dark:text-slate-400">
                  Zero vendor lock-in with deployment templates for AWS, Azure, GCP, and private bare-metal sovereign Kubernetes clusters.
                </p>
              </div>
            </div>
          </div>

          {/* Book Consultation Action */}
          <div className="pt-4 flex items-center justify-between flex-wrap gap-4 border-t border-slate-200 dark:border-slate-800">
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Interested in engaging Sachin Jain for AI Strategy & Multi-Agent Architecture?
            </span>
            <button
              type="button"
              onClick={onBookConsultation}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-300 hover:to-amber-300 shadow-md hover:shadow-[0_0_20px_rgba(250,204,21,0.5)] transition-all"
            >
              Book Executive Architecture Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
