import React from 'react';
import { Layers, ShieldCheck, Zap, Server } from 'lucide-react';

export const StatsSection = () => {
  const stats = [
    {
      label: 'Production AI Capabilities',
      value: '28',
      suffix: '+',
      detail: 'Strategy, RAG, Swarms, FinOps & Governance',
      icon: Layers,
      color: 'yellow',
    },
    {
      label: 'Grounding Precision Target',
      value: '99.8',
      suffix: '%',
      detail: 'Deterministic guardrails with zero hallucination',
      icon: ShieldCheck,
      color: 'blue',
    },
    {
      label: 'Inference Cost Reduction',
      value: '58',
      suffix: '%',
      detail: 'Intelligent model routing & semantic token caching',
      icon: Zap,
      color: 'yellow',
    },
    {
      label: 'Cloud Agnostic Infrastructure',
      value: '100',
      suffix: '%',
      detail: 'AWS, Azure, Google Cloud & Sovereign On-Prem',
      icon: Server,
      color: 'purple',
    },
  ];

  return (
    <section className="py-12 bg-slate-100/80 dark:bg-slate-900/60 border-y border-slate-200 dark:border-blue-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            const isYellow = stat.color === 'yellow';
            const isPurple = stat.color === 'purple';

            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-blue-900/40 shadow-sm hover:shadow-md hover:border-yellow-400/50 dark:hover:border-yellow-400/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase">
                    METRIC 0{idx + 1}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center border ${
                      isYellow
                        ? 'bg-yellow-400/10 border-yellow-400/40 text-yellow-600 dark:text-yellow-400'
                        : isPurple
                        ? 'bg-purple-500/10 border-purple-400/40 text-purple-600 dark:text-purple-400'
                        : 'bg-blue-600/10 border-blue-400/40 text-blue-600 dark:text-blue-400'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="flex items-baseline gap-1 mb-1">
                  <span
                    className={`text-4xl font-black tracking-tight ${
                      isYellow
                        ? 'text-yellow-500 dark:text-yellow-400'
                        : isPurple
                        ? 'text-purple-600 dark:text-purple-400'
                        : 'text-blue-600 dark:text-blue-400'
                    }`}
                  >
                    {stat.value}
                  </span>
                  <span className="text-2xl font-bold text-slate-500 dark:text-slate-400">
                    {stat.suffix}
                  </span>
                </div>

                <div className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                  {stat.label}
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {stat.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
