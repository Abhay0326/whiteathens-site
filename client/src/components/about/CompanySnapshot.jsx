import React from 'react';
import {
  Building2,
  Calendar,
  Users,
  Cpu,
  Layers,
  MapPin,
  CheckCircle2,
  Briefcase,
  Target,
  Eye,
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import { NeonBadge } from '../common/NeonBadge';

export const CompanySnapshot = () => {
  return (
    <div className="space-y-12">
      {/* Vision & Mission Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Vision Card */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-yellow-500/10 via-slate-50 to-white dark:from-yellow-950/20 dark:via-slate-900 dark:to-slate-950 border border-yellow-400/40 shadow-lg relative overflow-hidden group">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-yellow-400/20 border border-yellow-400/50 text-yellow-600 dark:text-yellow-400 flex items-center justify-center">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-yellow-600 dark:text-yellow-400 font-bold">
                Strategic North Star
              </span>
              <h3 className="text-xl font-black text-slate-900 dark:text-white">
                Our Vision
              </h3>
            </div>
          </div>
          <p className="text-base text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
            "{COMPANY_INFO.visionStatement}"
          </p>
        </div>

        {/* Mission Card */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-600/10 via-slate-50 to-white dark:from-blue-950/30 dark:via-slate-900 dark:to-slate-950 border border-blue-500/40 shadow-lg relative overflow-hidden group">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-400/50 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold">
                Core Purpose
              </span>
              <h3 className="text-xl font-black text-slate-900 dark:text-white">
                Our Mission
              </h3>
            </div>
          </div>
          <p className="text-base text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
            "{COMPANY_INFO.missionStatement}"
          </p>
        </div>
      </div>

      {/* Snapshot Specs Grid */}
      <div className="rounded-3xl p-8 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-blue-900/40 shadow-xl">
        <div className="mb-6 flex items-center justify-between flex-wrap gap-2">
          <div>
            <NeonBadge variant="yellow">Corporate Identity</NeonBadge>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
              Company Snapshot
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
            Official Organization Record
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Organization Name */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
              <Building2 className="w-4 h-4 text-blue-500" />
              Company Legal Entity
            </div>
            <div className="text-base font-bold text-slate-900 dark:text-white">
              {COMPANY_INFO.name}
            </div>
            <div className="text-xs text-yellow-600 dark:text-yellow-400 font-medium mt-0.5">
              whiteathens.com
            </div>
          </div>

          {/* Year of Establishment */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
              <Calendar className="w-4 h-4 text-yellow-500" />
              Year of Establishment
            </div>
            <div className="text-base font-bold text-slate-900 dark:text-white">
              {COMPANY_INFO.yearOfEstablishment}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Next-Gen AI-First Enterprise Practice
            </div>
          </div>

          {/* Team Scale */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
              <Users className="w-4 h-4 text-purple-500" />
              Specialist Team Size
            </div>
            <div className="text-base font-bold text-slate-900 dark:text-white">
              {COMPANY_INFO.employeeCount}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              AI Architects, ML Engineers & Cloud Specialists
            </div>
          </div>

          {/* Headquarters */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
              <MapPin className="w-4 h-4 text-red-500" />
              Global Headquarters
            </div>
            <div className="text-base font-bold text-slate-900 dark:text-white">
              {COMPANY_INFO.headquarters}
            </div>
            <div className="text-xs text-blue-600 dark:text-blue-400 font-medium mt-0.5">
              {COMPANY_INFO.serviceReach}
            </div>
          </div>

          {/* Nature of Business */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 md:col-span-2">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
              <Briefcase className="w-4 h-4 text-yellow-500" />
              Nature of Business
            </div>
            <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
              {COMPANY_INFO.natureOfBusiness}
            </div>
          </div>
        </div>

        {/* Core Expertise Badges */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
            <Cpu className="w-4 h-4 text-yellow-500" />
            Core Technology Expertise
          </h4>
          <div className="flex flex-wrap gap-2">
            {COMPANY_INFO.coreExpertise.map((exp, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 shadow-sm"
              >
                {exp}
              </span>
            ))}
          </div>
        </div>

        {/* Key Services List */}
        <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-purple-500" />
            Primary Service Verticals
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {COMPANY_INFO.keyServices.map((srv, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 text-xs font-medium text-slate-800 dark:text-slate-200"
              >
                <CheckCircle2 className="w-4 h-4 text-yellow-500 dark:text-yellow-400 flex-shrink-0" />
                <span>{srv}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industries Served Section */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <NeonBadge variant="purple">Cross-Industry Impact</NeonBadge>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-gray-400">
            Industries We Serve
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-500">
            Tailored AI architectures customized for sector-specific regulatory controls, data topologies, and workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANY_INFO.industriesServed.map((ind, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-blue-900/40 shadow-sm hover:shadow-md hover:border-yellow-400/50 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-yellow-400/10 text-yellow-600 dark:text-yellow-400 border border-yellow-400/40">
                  {ind.tag}
                </span>
                <span className="text-xs text-slate-400 font-mono">SECTOR 0{idx + 1}</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-yellow-500 transition-colors mb-2">
                {ind.name}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {ind.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
