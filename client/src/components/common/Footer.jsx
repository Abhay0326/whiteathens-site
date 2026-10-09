import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ShieldCheck, Cpu, ArrowUpRight } from 'lucide-react';
import { LinkedInIcon } from './Icons';
import { Logo } from './Logo';
import { COMPANY_INFO, FOUNDER_INFO } from '../../data/companyData';

export const Footer = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-blue-900/50 bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 pt-16 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200 dark:border-blue-900/40">
          {/* Brand & Mission column */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="large" />
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              Empowering enterprises to transition from static chatbots to autonomous, self-governing multi-agent swarms with enterprise-grade guardrails and zero-trust security.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-yellow-400/15 text-yellow-600 dark:text-yellow-400 border border-yellow-400/40">
                <ShieldCheck className="w-3.5 h-3.5" />
                Est. {COMPANY_INFO.yearOfEstablishment} • Enterprise AI
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-500/30">
                <Cpu className="w-3.5 h-3.5" />
                Delhi NCR, India
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors flex items-center gap-1"
                >
                  Home Overview
                </Link>
              </li>
              <li>
                <Link
                  to="/capabilities"
                  className="hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors flex items-center gap-1"
                >
                  AI Capabilities (28)
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors flex items-center gap-1"
                >
                  About Company & Founder
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors flex items-center gap-1"
                >
                  Contact & Advisory
                </Link>
              </li>
            </ul>
          </div>

          {/* Core AI Domains */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Flagship Capabilities
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <Link to="/capabilities" className="hover:text-blue-500 dark:hover:text-blue-300 transition-colors">
                  Multi-Agent Swarms
                </Link>
              </li>
              <li>
                <Link to="/capabilities" className="hover:text-blue-500 dark:hover:text-blue-300 transition-colors">
                  Hybrid RAG & Vector Mining
                </Link>
              </li>
              <li>
                <Link to="/capabilities" className="hover:text-blue-500 dark:hover:text-blue-300 transition-colors">
                  Chat-with-Database (NL2SQL)
                </Link>
              </li>
              <li>
                <Link to="/capabilities" className="hover:text-blue-500 dark:hover:text-blue-300 transition-colors">
                  Guardrails & Prompt Shields
                </Link>
              </li>
              <li>
                <Link to="/capabilities" className="hover:text-blue-500 dark:hover:text-blue-300 transition-colors">
                  DevSecOps & Multi-Cloud
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Leadership & Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-yellow-600 dark:text-yellow-400">
              Executive Office
            </h4>
            <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <div className="font-semibold text-slate-800 dark:text-slate-200">
                {FOUNDER_INFO.name}
              </div>
              <div className="text-[11px] text-blue-600 dark:text-blue-400 font-medium">
                {FOUNDER_INFO.title}
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-3.5 h-3.5 text-yellow-500 flex-shrink-0" />
                <span>{FOUNDER_INFO.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-yellow-500 flex-shrink-0" />
                <span className="truncate">{FOUNDER_INFO.contact.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-yellow-500 flex-shrink-0" />
                <span>{FOUNDER_INFO.contact.location}</span>
              </div>
              <div className="pt-2">
                <a
                  href={FOUNDER_INFO.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all"
                >
                  <LinkedInIcon className="w-3.5 h-3.5" />
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-500">
          <div>
            © {new Date().getFullYear()} White Athens Software (whiteathens.com). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors">
              Company Snapshot
            </Link>
            <span>•</span>
            <Link to="/capabilities" className="hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors">
              Capabilities Catalog
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors">
              Enterprise Inquiry
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
