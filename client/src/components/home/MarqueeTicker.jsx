import React from 'react';
import { Sparkles, Bot, Shield, Database, Cpu, Zap, Cloud, Layers } from 'lucide-react';

const TICKER_ITEMS = [
  { label: 'Autonomous Multi-Agent Swarms', icon: Bot, highlight: true },
  { label: 'Hybrid RAG & Knowledge Mining', icon: Database, highlight: false },
  { label: 'Enterprise Guardrails & Prompt Shields', icon: Shield, highlight: true },
  { label: 'Zero-Downtime DevSecOps & Multi-Cloud', icon: Cloud, highlight: false },
  { label: 'Chat-with-Database (NL2SQL)', icon: Zap, highlight: true },
  { label: 'Cloud FinOps & Token Optimization', icon: Layers, highlight: false },
  { label: 'Enterprise AI Governance (EU AI Act & NIST)', icon: Shield, highlight: true },
  { label: 'Foundational Models & Sovereign LLMs', icon: Cpu, highlight: false },
];

export const MarqueeTicker = () => {
  return (
    <div className="relative w-full overflow-hidden py-3 bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 border-y border-blue-900/50 shadow-inner">
      {/* Side gradient fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="animate-marquee flex items-center gap-8">
        {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={`flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap border transition-all duration-200 ${
                item.highlight
                  ? 'border-yellow-400/40 bg-yellow-400/10 text-yellow-300 shadow-[0_0_12px_rgba(250,204,21,0.2)]'
                  : 'border-blue-700/40 bg-blue-900/30 text-blue-200'
              }`}
            >
              <Icon
                className={`w-3.5 h-3.5 ${
                  item.highlight ? 'text-yellow-400' : 'text-blue-400'
                }`}
              />
              <span>{item.label}</span>
              <Sparkles className="w-2.5 h-2.5 opacity-60 text-yellow-400 ml-1" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
