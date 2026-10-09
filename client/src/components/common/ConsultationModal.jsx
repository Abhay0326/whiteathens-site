import React, { useState } from 'react';
import { X, Send, CheckCircle2, Building, Mail, Phone, User, MessageSquare } from 'lucide-react';
import { NeonBadge } from './NeonBadge';

export const ConsultationModal = ({ isOpen, onClose, preselectedService = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: preselectedService || 'AI Transformation Consulting',
    timeline: 'Immediate (1-3 months)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      // Save consultation booking to localStorage
      const existingInquiries = JSON.parse(localStorage.getItem('wa_inquiries') || '[]');
      const newInquiry = {
        ...formData,
        id: Date.now(),
        createdAt: new Date().toISOString(),
      };
      localStorage.setItem('wa_inquiries', JSON.stringify([newInquiry, ...existingInquiries]));

      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-900/60 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glowing top accent border */}
        <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-yellow-400 to-purple-600" />

        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white bg-slate-100 dark:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 md:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-yellow-400/20 text-yellow-500 dark:text-yellow-400 flex items-center justify-center border border-yellow-400/50 shadow-[0_0_20px_rgba(250,204,21,0.4)]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Consultation Request Received!
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-yellow-600 dark:text-yellow-400">{formData.name}</span>. Sachin Jain (Director & Chief AI Architect) or our senior solutions team will review your requirements for{' '}
                <span className="font-semibold text-blue-600 dark:text-blue-400">{formData.service}</span> and reach out within 24 business hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl font-medium bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <NeonBadge variant="yellow" size="small">
                    Executive Advisory
                  </NeonBadge>
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase">
                    White Athens Software
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Schedule an AI Architecture Consultation
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                  Discuss multi-agent swarms, hybrid RAG, or sovereign governance with our Chief AI Architect.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                      <input
                        type="text"
                        required
                        placeholder="Sachin / Enterprise Leader"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Work Email *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                      <input
                        type="email"
                        required
                        placeholder="leader@enterprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Company / Organization *
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                      <input
                        type="text"
                        required
                        placeholder="Global FinTech Corp"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                      <input
                        type="tel"
                        placeholder="+91 / +1 ..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Primary AI Capability of Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="AI Transformation Consulting">AI Transformation Consulting</option>
                      <option value="Multi-Agent Swarm (Agentic AI)">Multi-Agent Swarms</option>
                      <option value="Hybrid RAG & Knowledge Mining">Hybrid RAG & Knowledge Mining</option>
                      <option value="Chat-with-Database using LLMs">Chat-with-Database</option>
                      <option value="Guardrails & AI Governance">Guardrails & AI Governance</option>
                      <option value="Conversational Interface">Conversational Interfaces</option>
                      <option value="FinOps & Cost Optimization">FinOps & Cloud Optimization</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Target Implementation Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Immediate (1-3 months)">Immediate (1–3 months)</option>
                      <option value="Next Quarter (3-6 months)">Next Quarter (3–6 months)</option>
                      <option value="Strategic Planning (6-12 months)">Strategic Planning (6–12 months)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Project Brief / Specific Business Problem
                  </label>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <textarea
                      rows="3"
                      placeholder="Outline your enterprise workflow, data scale, or agentic requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    🔒 Direct line to Chief AI Architect • Strict NDA
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Submit Brief</span>
                        <Send className="w-4 h-4 text-yellow-300" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
