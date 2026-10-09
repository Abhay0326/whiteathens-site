import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  User,
  HelpCircle,
  ChevronDown,
  ShieldCheck,
} from 'lucide-react';
import { LinkedInIcon } from '../components/common/Icons';
import { COMPANY_INFO, FOUNDER_INFO } from '../data/companyData';
import { NeonBadge } from '../components/common/NeonBadge';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'AI Transformation Consulting',
    timeline: 'Immediate (1-3 months)',
    budget: '$25k - $50k',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingInquiries = JSON.parse(localStorage.getItem('wa_inquiries') || '[]');
    const newInquiry = {
      ...formData,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem('wa_inquiries', JSON.stringify([newInquiry, ...existingInquiries]));
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'How does White Athens Software engage with enterprise clients?',
      a: 'We engage via three flexible models: (1) Strategic AI Advisory & Readiness Audits, (2) Dedicated Multi-Agent Pod Architecture & Co-Development, and (3) Full Turnkey Platform Delivery with comprehensive DevSecOps and sovereign deployment.',
    },
    {
      q: 'What makes your Agentic AI Swarms different from standard chat tools?',
      a: 'We construct multi-agent networks where specialized agents reason, critique, and coordinate using deterministic business rules, dynamic state machines, and consensus protocols—eliminating hallucination and executing real API actions safely.',
    },
    {
      q: 'How do you guarantee data privacy and regulatory compliance?',
      a: 'We enforce zero-plain-text PII transmission, local tokenization vaults, low-latency guardrails, and compliance telemetry conforming strictly to the EU AI Act, NIST AI RMF, and ISO/IEC 42001.',
    },
    {
      q: 'Can White Athens deploy on our existing on-premise or sovereign cloud infrastructure?',
      a: 'Yes. Our architectures are cloud-agnostic, delivered via Kubernetes (K8s) and Terraform IaC compatible with AWS, Google Cloud, Azure, and private sovereign bare-metal GPU clusters.',
    },
  ];

  return (
    <div className="py-12 md:py-20 relative overflow-hidden transition-colors duration-300">
      {/* Ambient background lighting */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-yellow-400/10 dark:bg-yellow-400/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/15 dark:bg-blue-600/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <NeonBadge variant="yellow">Enterprise AI Advisory</NeonBadge>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-gray-400 tracking-tight">
            Connect with Our <span className="neon-text-yellow">Solutions Architects</span>.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-500">
            Reach out directly to Sachin Jain (Director & Chief AI Architect) or book a structured technical discovery workshop for your organization.
          </p>
        </div>

        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Office & Leadership Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl p-8 bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-900/60 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-yellow-600 dark:text-yellow-400 uppercase tracking-widest">
                  Executive Headquarters
                </span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                  {COMPANY_INFO.name}
                </h3>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold mt-0.5">
                  whiteathens.com
                </p>
              </div>

              <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                  <User className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-mono uppercase">
                      Leadership
                    </div>
                    <div className="font-bold text-slate-900 dark:text-white">
                      {FOUNDER_INFO.name}
                    </div>
                    <div className="text-xs text-blue-600 dark:text-blue-400">
                      {FOUNDER_INFO.title}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                  <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-mono uppercase">
                      Direct Telephone
                    </div>
                    <a
                      href={`tel:${FOUNDER_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                      className="font-mono font-bold text-slate-900 dark:text-white hover:text-yellow-500"
                    >
                      {FOUNDER_INFO.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                  <Mail className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-mono uppercase">
                      Executive Email
                    </div>
                    <a
                      href={`mailto:${FOUNDER_INFO.contact.email}`}
                      className="font-mono font-bold text-slate-900 dark:text-white hover:text-yellow-500 truncate block"
                    >
                      {FOUNDER_INFO.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                  <MapPin className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-mono uppercase">
                      Physical Presence
                    </div>
                    <div className="font-bold text-slate-900 dark:text-white">
                      {COMPANY_INFO.headquarters}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      Serving enterprises globally
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                  <LinkedInIcon className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-mono uppercase">
                      Professional Network
                    </div>
                    <a
                      href={FOUNDER_INFO.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      linkedin.com/in/sachinsamhita/
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>NDA signed prior to deep architecture reviews</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Project Brief Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-8 sm:p-10 bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-900/60 shadow-xl relative overflow-hidden">
              <div className="h-1.5 w-full bg-gradient-to-r from-yellow-400 via-blue-600 to-purple-600 absolute top-0 left-0 right-0" />

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-yellow-400/20 text-yellow-500 flex items-center justify-center border border-yellow-400/50 shadow-[0_0_20px_rgba(250,204,21,0.4)]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Inquiry Submitted Successfully
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-yellow-600 dark:text-yellow-400">{formData.name}</span>. We have logged your request in our direct architect queue. Sachin Jain and our team will get in touch shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        service: 'AI Transformation Consulting',
                        timeline: 'Immediate (1-3 months)',
                        budget: '$25k - $50k',
                        message: '',
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl font-medium bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                      Request an Architecture Consultation
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Fill out your business requirements below to initiate confidential engagement.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Enterprise Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@enterprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Acme Financial"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 / +1 ..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Core Capability Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="AI Transformation Consulting">AI Transformation Consulting</option>
                        <option value="Multi-Agent Swarm (Agentic AI)">Multi-Agent Swarms</option>
                        <option value="Hybrid RAG & Knowledge Mining">Hybrid RAG & Knowledge Mining</option>
                        <option value="Chat-with-Database using LLMs">Chat-with-Database</option>
                        <option value="Guardrails & AI Governance">Guardrails & AI Governance</option>
                        <option value="DevSecOps & Multi-Cloud">DevSecOps & Multi-Cloud</option>
                        <option value="FinOps & Cost Optimization">FinOps & Cost Optimization</option>
                        <option value="Conversational Interface">Conversational Interfaces</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Estimated Project Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="Immediate (1-3 months)">Immediate (1–3 months)</option>
                        <option value="Next Quarter (3-6 months)">Next Quarter (3–6 months)</option>
                        <option value="Exploratory / Planning">Exploratory / Planning</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Project Goals & Specific Technical Constraints
                    </label>
                    <textarea
                      rows="4"
                      required
                      placeholder="Outline data scale, current model stack, cloud preferences, or regulatory boundaries..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      🔒 All inquiries confidential
                    </span>
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-300 hover:to-amber-300 text-slate-950 shadow-md hover:shadow-[0_0_20px_rgba(250,204,21,0.5)] transition-all"
                    >
                      <span>Send Consultation Request</span>
                      <Send className="w-4 h-4 text-slate-950" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Enterprise FAQs Accordion */}
        <div className="max-w-4xl mx-auto space-y-6 pt-8">
          <div className="text-center space-y-2">
            <NeonBadge variant="blue">Frequently Asked Questions</NeonBadge>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-gray-400">
              Working with White Athens Software
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-blue-900/40 bg-white dark:bg-slate-900 overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 dark:text-white text-sm sm:text-base hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      openFaq === idx ? 'rotate-180 text-yellow-500' : 'text-slate-400'
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
