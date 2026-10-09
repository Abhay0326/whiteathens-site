import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  Sparkles,
  Bot,
  Shield,
  Database,
  Layers,
  Zap,
  Cpu,
  ChevronRight,
  CheckCircle,
} from 'lucide-react';
import { CAPABILITIES, CATEGORIES } from '../data/capabilitiesData';
import { CapabilityDetailModal } from '../components/home/CapabilityDetailModal';
import { ConsultationModal } from '../components/common/ConsultationModal';
import { NeonBadge } from '../components/common/NeonBadge';

export const Capabilities = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCapability, setSelectedCapability] = useState(null);
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [consultService, setConsultService] = useState('');

  // Category Icon helper
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Strategy & AI Transformation':
        return Bot;
      case 'Responsible AI & Governance':
        return Shield;
      case 'Enterprise Platform & Architecture':
        return Database;
      case 'Operations & Engineering Excellence':
        return Layers;
      case 'Enablement & Adoption':
        return Zap;
      case 'Experience & Interaction':
        return Cpu;
      default:
        return Sparkles;
    }
  };

  // Filtered and searched capabilities
  const filteredCapabilities = useMemo(() => {
    return CAPABILITIES.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;

      const query = searchQuery.toLowerCase();
      const matchesQuery =
        !searchQuery ||
        item.title.toLowerCase().includes(query) ||
        item.code.toLowerCase().includes(query) ||
        item.tagline.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.techStack.some((tech) => tech.toLowerCase().includes(query)) ||
        item.deliverables.some((del) => del.toLowerCase().includes(query));

      return matchesCategory && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  const handleOpenConsult = (serviceTitle) => {
    setConsultService(serviceTitle);
    setConsultModalOpen(true);
  };

  return (
    <div className="py-12 md:py-20 relative overflow-hidden transition-colors duration-300">
      {/* Ambient background lighting */}
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-blue-600/10 dark:bg-blue-600/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/10 dark:bg-yellow-400/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <NeonBadge variant="yellow">Enterprise AI Portfolio</NeonBadge>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-gray-400 tracking-tight">
            Complete Suite of <span className="neon-text-blue">28 AI Capabilities</span>.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-500">
            Engineered by White Athens Software to power autonomous multi-agent workforces, enterprise-grade RAG, and sovereign regulatory compliance.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-blue-900/50 shadow-lg space-y-5">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search 28 capabilities by title, technology (e.g. RAG, Swarm, LoRA, FinOps), or deliverable..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-3.5 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-yellow-500" />
              Domain:
            </span>
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-yellow-400 text-slate-950 font-bold shadow-[0_0_12px_rgba(250,204,21,0.5)] scale-105'
                    : 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-1 border-t border-slate-100 dark:border-slate-800">
            <span>
              Showing <span className="font-bold text-yellow-600 dark:text-yellow-400">{filteredCapabilities.length}</span> of 28 capabilities
            </span>
            <span>Click any card for full architecture deliverables & tech specs</span>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCapabilities.map((item) => {
            const Icon = getCategoryIcon(item.category);
            const isYellow = item.accentColor === 'yellow';
            const isPurple = item.accentColor === 'purple';

            return (
              <div
                key={item.id}
                onClick={() => setSelectedCapability(item)}
                className={`group relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between cursor-pointer border transition-all duration-300 overflow-hidden ${
                  isYellow
                    ? 'border-yellow-400/40 hover:border-yellow-400 hover:shadow-[0_0_25px_rgba(250,204,21,0.3)] bg-gradient-to-br from-yellow-500/5 via-white to-slate-50 dark:from-yellow-950/20 dark:via-slate-900 dark:to-slate-950'
                    : isPurple
                    ? 'border-purple-400/40 hover:border-purple-400 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] bg-gradient-to-br from-purple-500/5 via-white to-slate-50 dark:from-purple-950/20 dark:via-slate-900 dark:to-slate-950'
                    : 'border-blue-400/40 hover:border-blue-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] bg-gradient-to-br from-blue-600/5 via-white to-slate-50 dark:from-blue-950/30 dark:via-slate-900 dark:to-slate-950'
                }`}
              >
                {/* Glowing top line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 opacity-70 group-hover:opacity-100 transition-opacity ${
                    isYellow
                      ? 'bg-yellow-400'
                      : isPurple
                      ? 'bg-purple-500'
                      : 'bg-blue-500'
                  }`}
                />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center border shadow-sm group-hover:scale-105 transition-transform ${
                          isYellow
                            ? 'bg-yellow-400/20 border-yellow-400/50 text-yellow-600 dark:text-yellow-400'
                            : isPurple
                            ? 'bg-purple-500/20 border-purple-400/50 text-purple-600 dark:text-purple-400'
                            : 'bg-blue-600/20 border-blue-400/50 text-blue-600 dark:text-blue-400'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-500 dark:text-slate-400">
                        #{item.code}
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                        isYellow
                          ? 'border-yellow-400/40 text-yellow-700 dark:text-yellow-300 bg-yellow-400/10'
                          : isPurple
                          ? 'border-purple-400/40 text-purple-700 dark:text-purple-300 bg-purple-400/10'
                          : 'border-blue-400/40 text-blue-700 dark:text-blue-300 bg-blue-400/10'
                      }`}
                    >
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-1.5 group-hover:text-yellow-500 dark:group-hover:text-yellow-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 italic mb-3">
                    "{item.tagline}"
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Deliverables snippet */}
                  <div className="space-y-1 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                      Key Deliverables:
                    </span>
                    {item.deliverables.slice(0, 2).map((del, idx) => (
                      <div
                        key={idx}
                        className="text-[11px] text-slate-700 dark:text-slate-300 flex items-center gap-1.5 truncate"
                      >
                        <CheckCircle className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                        <span className="truncate">{del}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Bottom */}
                <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs mt-auto">
                  <span className="text-slate-500 dark:text-slate-400 truncate max-w-[200px]">
                    ⚡ {item.metrics}
                  </span>

                  <span className="font-bold text-yellow-600 dark:text-yellow-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Inspect</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCapabilities.length === 0 && (
          <div className="text-center py-16 p-8 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <p className="text-base font-bold text-slate-700 dark:text-slate-300">
              No capabilities match "{searchQuery}" in category "{selectedCategory}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-3 text-xs font-semibold text-yellow-600 dark:text-yellow-400 underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <CapabilityDetailModal
        capability={selectedCapability}
        onClose={() => setSelectedCapability(null)}
        onConsult={(serviceName) => {
          setSelectedCapability(null);
          handleOpenConsult(serviceName);
        }}
      />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={consultModalOpen}
        onClose={() => setConsultModalOpen(false)}
        preselectedService={consultService}
      />
    </div>
  );
};
