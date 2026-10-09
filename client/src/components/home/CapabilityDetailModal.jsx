import React from 'react';
import { X, CheckCircle, Cpu, Layers, Sparkles, ArrowRight } from 'lucide-react';
import { NeonBadge } from '../common/NeonBadge';

export const CapabilityDetailModal = ({ capability, onClose, onConsult }) => {
  if (!capability) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-blue-300 dark:border-blue-800 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent Header Line */}
        <div className="h-1.5 w-full bg-gradient-to-r from-yellow-400 via-blue-600 to-purple-600" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white bg-slate-100 dark:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-blue-600/10 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 border border-blue-500/30">
                CAPABILITY #{capability.code}
              </span>
              <NeonBadge
                variant={
                  capability.accentColor === 'yellow'
                    ? 'yellow'
                    : capability.accentColor === 'purple'
                    ? 'purple'
                    : 'blue'
                }
                size="small"
              >
                {capability.category}
              </NeonBadge>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {capability.title}
            </h2>

            <p className="text-base font-semibold text-yellow-600 dark:text-yellow-400">
              "{capability.tagline}"
            </p>
          </div>

          {/* Description */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {capability.description}
          </div>

          {/* Key Deliverables */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-blue-500" />
              Enterprise Deliverables & Artifacts
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {capability.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 p-2.5 rounded-lg bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 text-xs text-slate-700 dark:text-slate-200"
                >
                  <CheckCircle className="w-4 h-4 text-yellow-500 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack & Target Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-purple-500" />
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {capability.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-yellow-500" />
                Performance Benchmark
              </h4>
              <div className="p-2.5 rounded-lg bg-yellow-500/10 border border-yellow-500/30 text-xs font-semibold text-yellow-700 dark:text-yellow-300">
                {capability.metrics}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Close
            </button>

            <button
              onClick={() => {
                onClose();
                onConsult(capability.title);
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-300 hover:to-amber-300 shadow-md hover:shadow-[0_0_20px_rgba(250,204,21,0.5)] transition-all"
            >
              <span>Consult on {capability.title.split(' ')[0]}</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
