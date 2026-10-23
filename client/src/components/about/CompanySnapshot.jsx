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
        <div className="p-8 rounded-3xl bg-gradient-to-br from-yellow-500/10 via-slate-50 to-white border border-yellow-400/40 shadow-lg relative overflow-hidden group">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-yellow-400/20 border border-yellow-400/50 text-yellow-600 flex items-center justify-center">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-yellow-600  font-bold">
                Strategic North Star
              </span>
              <h3 className="text-xl font-black text-slate-900 ">
                Our Vision
              </h3>
            </div>
          </div>
          <p className="text-base text-slate-700 leading-relaxed font-medium">
            "{COMPANY_INFO.visionStatement}"
          </p>
        </div>

        {/* Mission Card */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-600/10 via-slate-50 to-white border border-blue-500/40 shadow-lg relative overflow-hidden group">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-400/50 text-blue-600 flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-blue-600 font-bold">
                Core Purpose
              </span>
              <h3 className="text-xl font-black text-slate-900">
                Our Mission
              </h3>
            </div>
          </div>
          <p className="text-base text-slate-700 leading-relaxed font-medium">
            "{COMPANY_INFO.missionStatement}"
          </p>
        </div>
      </div>

      {/* Industries Served Section */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <NeonBadge variant="purple">Cross-Industry Impact</NeonBadge>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 ">
            Industries We Serve
          </h3>
          <p className="text-sm text-slate-600">
            Tailored AI architectures customized for sector-specific regulatory controls, data topologies, and workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANY_INFO.industriesServed.map((ind, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-yellow-400/50 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-yellow-400/10 text-yellow-600 border border-yellow-400/40">
                  {ind.tag}
                </span>
                <span className="text-xs text-slate-400 font-mono">SECTOR 0{idx + 1}</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 group-hover:text-yellow-500 transition-colors mb-2">
                {ind.name}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {ind.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
