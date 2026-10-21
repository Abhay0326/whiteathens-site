import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Bot, ShieldCheck, Cpu, Terminal, CheckCircle2 } from 'lucide-react';
import { NeonBadge } from '../common/NeonBadge';
import { ConsultationModal } from '../common/ConsultationModal';

export const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(2);

  const swarmSimulation = [
    { id: 1, agent: 'Lead Orchestrator', role: 'Decomposes Enterprise Request', status: 'Completed', latency: '42ms' },
    { id: 2, agent: 'Knowledge Graph RAG', role: 'Vector & Entity Extraction', status: 'Synthesizing', latency: '118ms' },
    { id: 3, agent: 'Deterministic Guardrail', role: 'Rule Validation & PII Redaction', status: 'Active Shield', latency: '14ms' },
    { id: 4, agent: 'Executive Synthesizer', role: 'Consensus Formulation & Output', status: 'Queued', latency: 'Est 85ms' },
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 transition-colors duration-300">
      {/* Background ambient glowing gradient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/15 dark:bg-blue-600/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[300px] bg-yellow-400/10 dark:bg-yellow-400/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[300px] h-[300px] bg-purple-600/10 dark:bg-purple-600/15 blur-[110px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 items-center">
          {/* Left Column: Headline, Value Proposition, Neon Accents & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2">
              <NeonBadge variant="red" size="normal">
                Next-Gen Enterprise AI Startup • Est. 2025
              </NeonBadge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-gray-400 leading-[1.12]">
              Architecting{' '}
              <span className="text-blue-600 dark:text-blue-400">Enterprise Autonomy</span> with{' '}
              <span className="neon-text-yellow inline-block font-extrabold">
                Agentic AI Swarms
              </span>{' '}
              & Sovereign Governance.
            </h1>

            <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-500 max-w-2xl font-normal leading-relaxed">
              White Athens Software empowers global organizations to move beyond basic chatbots. We architect high-performance{' '}
              <span className="font-semibold text-yellow-600 dark:text-yellow-400">
                multi-agent workforces
              </span>
              , hybrid RAG knowledge engines, and ironclad{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                compliance guardrails
              </span>{' '}
              engineered for scale.
            </p>

            {/* CTAs */}

            {/* Micro badges below CTA */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-m text-slate-600 dark:text-gray-500 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-yellow-500 dark:text-yellow-400" />
                Zero Hallucination Tolerance
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                EU AI Act & NIST RMF Compliant
              </span>
              <span className="flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                Multi-Cloud Sovereign IaC
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};
