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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Value Proposition, Neon Accents & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2">
              <NeonBadge variant="yellow" size="normal">
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
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                to="/capabilities"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-400 hover:from-yellow-300 hover:to-amber-300 shadow-lg shadow-yellow-500/25 hover:shadow-[0_0_25px_rgba(250,204,21,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Explore 28 AI Capabilities</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </Link>

              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-slate-800 dark:text-white bg-slate-200/80 dark:bg-blue-950/70 hover:bg-slate-300 dark:hover:bg-blue-900/80 border border-slate-300 dark:border-blue-700/60 shadow-md hover:shadow-[0_0_20px_rgba(59,130,246,0.35)] transition-all duration-300"
              >
                <Sparkles className="w-4 h-4 text-yellow-500 dark:text-yellow-400" />
                <span>Consult Chief AI Architect</span>
              </button>
            </div>

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

          {/* Right Column: Live Simulated Multi-Agent Swarm Console */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-blue-300/60 dark:border-blue-800/80 bg-slate-900/90 dark:bg-slate-950/90 shadow-2xl glass-card text-white">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" />
                    whiteathens-swarm-orchestrator.v2
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-blue-950 text-yellow-300 border border-yellow-400/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-ping" />
                  LIVE
                </span>
              </div>

              {/* Swarm Live Flow Display */}
              <div className="p-5 space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2">
                  <span>SWARM PROTOCOL: MULTI-AGENT CONSENSUS</span>
                  <span className="text-yellow-400 font-mono">LATENCY: 174ms</span>
                </div>

                <div className="space-y-2.5">
                  {swarmSimulation.map((step) => (
                    <div
                      key={step.id}
                      onClick={() => setActiveStep(step.id)}
                      className={`p-3 rounded-xl border transition-all cursor-pointer ${
                        activeStep === step.id
                          ? 'border-yellow-400/80 bg-yellow-400/10 shadow-[0_0_15px_rgba(250,204,21,0.25)]'
                          : 'border-slate-800 bg-slate-900/60 hover:border-blue-600/50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <Bot
                            className={`w-4 h-4 ${
                              activeStep === step.id ? 'text-yellow-400' : 'text-blue-400'
                            }`}
                          />
                          <span className="text-xs font-bold text-white tracking-wide">
                            {step.agent}
                          </span>
                        </div>
                        <span
                          className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded ${
                            step.status === 'Completed'
                              ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                              : step.status === 'Active Shield'
                              ? 'bg-blue-950 text-blue-300 border border-blue-700'
                              : 'bg-yellow-950 text-yellow-300 border border-yellow-700'
                          }`}
                        >
                          {step.status}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-slate-300">
                        <span>{step.role}</span>
                        <span className="font-mono text-slate-400">{step.latency}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Console Log Bottom preview */}
                <div className="p-2.5 rounded-lg bg-black/60 font-mono text-[11px] text-slate-300 space-y-1 border border-slate-800/80">
                  <div className="text-blue-400 flex items-center gap-1">
                    <span className="text-yellow-400">➜</span> [Enterprise Gateway]: Dispatched autonomous query across 4 models
                  </div>
                  <div className="text-emerald-400">
                    ✔ RBAC token verified. Zero PII transmitted.
                  </div>
                </div>

                <div className="pt-1 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">
                    White Athens Autonomous Swarm Architecture
                  </span>
                  <Link
                    to="/capabilities"
                    className="text-xs text-yellow-400 hover:text-yellow-300 font-semibold flex items-center gap-1"
                  >
                    View Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};
