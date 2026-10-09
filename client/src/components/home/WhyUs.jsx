import React from 'react';
import { ShieldCheck, Bot, Lock, Cloud } from 'lucide-react';
import { NeonBadge } from '../common/NeonBadge';

export const WhyUs = () => {
  const pillars = [
    {
      title: 'Autonomous Multi-Agent Architecture',
      desc: 'We do not build simple prompt wrappers. We engineer self-healing, multi-agent swarms capable of complex multi-step reasoning, consensus validation, and programmatic task execution.',
      icon: Bot,
      color: 'yellow',
    },
    {
      title: 'Deterministic Rules + Generative Intelligence',
      desc: 'Generative creativity is contained by hard-coded enterprise business rules, guaranteeing that financial, legal, and operational logic is never violated.',
      icon: Lock,
      color: 'blue',
    },
    {
      title: 'Sovereign Multi-Cloud & Zero Lock-In',
      desc: 'Our cloud architectures deploy seamlessly across AWS, Azure, Google Cloud, and sovereign on-prem GPU bare-metal through hardened Terraform and Kubernetes IaC.',
      icon: Cloud,
      color: 'purple',
    },
    {
      title: 'Institutional Governance & Compliance',
      desc: 'Turnkey operationalization for the EU AI Act, NIST AI RMF, and ISO/IEC 42001, complete with bias audits, token red-teaming, and auditable lineage.',
      icon: ShieldCheck,
      color: 'yellow',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <NeonBadge variant="blue">The White Athens Advantage</NeonBadge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-gray-400 tracking-tight">
            Why Enterprise Leaders Choose <span className="neon-text-yellow">White Athens</span>.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-500">
            Bridging the gap between bleeding-edge research and mission-critical enterprise production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isYellow = pillar.color === 'yellow';
            const isPurple = pillar.color === 'purple';
            // console.log(idx)

            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-blue-900/40 shadow-md hover:shadow-xl hover:border-yellow-400/60 dark:hover:border-yellow-400/60 transition-all duration-300 relative group"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border shadow-sm transition-transform duration-300 group-hover:scale-110 ${
                      isYellow
                        ? 'bg-yellow-400/15 border-yellow-400/40 text-yellow-600 dark:text-yellow-400'
                        : isPurple
                        ? 'bg-purple-500/15 border-purple-400/40 text-purple-600 dark:text-purple-400'
                        : 'bg-blue-600/15 border-blue-400/40 text-blue-600 dark:text-blue-400'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-yellow-500 dark:group-hover:text-yellow-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
