import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Bot,
  Database,
  Shield,
  Layers,
  Zap,
  Cpu,
  ChevronRight,
} from 'lucide-react';
import { CAPABILITIES, CATEGORIES } from '../../data/capabilitiesData';
import { NeonBadge } from '../common/NeonBadge';
import { CapabilityDetailModal } from './CapabilityDetailModal';

export const BentoGrid = ({ onConsultService }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCapability, setSelectedCapability] = useState(null);

  // Filter capabilities based on category
  const filteredCapabilities =
    selectedCategory === 'All'
      ? CAPABILITIES
      : CAPABILITIES.filter((c) => c.category === selectedCategory);

  // Pick top flagship items for prominent Bento display if "All", or display filtered
  const displayedItems =
    selectedCategory === 'All'
      ? CAPABILITIES.slice(0, 12) // Top 12 for the home page Bento showcase
      : filteredCapabilities;

  const getIconForCategory = (cat) => {
    switch (cat) {
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

  return (
    <section className="py-20 md:py-28 relative overflow-hidden transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 dark:bg-blue-600/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-yellow-400/10 dark:bg-yellow-400/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2">
            <NeonBadge variant="yellow">Enterprise AI Portfolio</NeonBadge>
            <span className="text-xs uppercase font-mono tracking-widest text-blue-600 dark:text-blue-400">
              28 Production Capabilities
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-gray-400 tracking-tight">
            Engineered for Impact in a{' '}
            <span className="neon-text-blue">Bento Grid</span> Matrix.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-500">
            From multi-agent swarms to sovereign EU-compliant AI governance. Click any card to explore architecture deliverables and verified benchmarks.
          </p>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-yellow-400 text-slate-950 font-bold shadow-[0_0_15px_rgba(250,204,21,0.5)] scale-105'
                    : 'bg-slate-200/80 dark:bg-blue-950/60 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-blue-900 border border-slate-300 dark:border-blue-800/60'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedItems.map((item) => {
            const Icon = getIconForCategory(item.category);
            const isLarge = item.bentoSize === 'large';
            const isYellow = item.accentColor === 'yellow';
            const isPurple = item.accentColor === 'purple';

            return (
              <div
                key={item.id}
                onClick={() => setSelectedCapability(item)}
                className={`group relative rounded-2xl p-6 sm:p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden border ${
                  isLarge ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                } ${
                  isYellow
                    ? 'border-yellow-400/40 dark:border-yellow-400/30 hover:border-yellow-400 hover:shadow-[0_0_25px_rgba(250,204,21,0.3)] bg-gradient-to-br from-yellow-500/5 via-slate-50 to-white dark:from-yellow-950/20 dark:via-slate-900 dark:to-blue-950/40'
                    : isPurple
                    ? 'border-purple-400/40 dark:border-purple-500/30 hover:border-purple-400 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] bg-gradient-to-br from-purple-500/5 via-slate-50 to-white dark:from-purple-950/20 dark:via-slate-900 dark:to-blue-950/40'
                    : 'border-blue-400/40 dark:border-blue-600/30 hover:border-blue-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] bg-gradient-to-br from-blue-600/5 via-slate-50 to-white dark:from-blue-950/30 dark:via-slate-900 dark:to-slate-950'
                }`}
              >
                {/* Glowing top line indicator */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 transition-all duration-300 opacity-60 group-hover:opacity-100 ${
                    isYellow
                      ? 'bg-yellow-400'
                      : isPurple
                      ? 'bg-purple-500'
                      : 'bg-blue-500'
                  }`}
                />

                {/* Card Top Row */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center border shadow-sm transition-transform duration-300 group-hover:scale-110 ${
                          isYellow
                            ? 'bg-yellow-400/20 border-yellow-400/60 text-yellow-600 dark:text-yellow-400'
                            : isPurple
                            ? 'bg-purple-500/20 border-purple-400/60 text-purple-600 dark:text-purple-400'
                            : 'bg-blue-600/20 border-blue-400/60 text-blue-600 dark:text-blue-400'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-500 dark:text-slate-400">
                        #{item.code}
                      </span>
                    </div>

                    <span
                      className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${
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

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-yellow-500 dark:group-hover:text-yellow-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3 italic">
                    "{item.tagline}"
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Deliverables / Tech Stack preview */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.techStack.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {item.techStack.length > 3 && (
                      <span className="text-[11px] px-1.5 py-0.5 text-slate-500 dark:text-slate-400">
                        +{item.techStack.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Bottom / Benchmark */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2 mt-auto">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 truncate max-w-[220px]">
                    ⚡ {item.metrics}
                  </span>

                  <span className="inline-flex items-center gap-1 text-xs font-bold text-yellow-600 dark:text-yellow-400 group-hover:translate-x-1 transition-transform">
                    <span>Inspect</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Capabilities CTA Banner */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-900/40 via-slate-900/60 to-blue-900/40 border border-blue-700/40 text-center space-y-4">
          <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Need the Complete <span className="neon-text-yellow">28 AI Capabilities</span> Catalog?
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            Explore deep-dive technical specs, deployment architectures, and custom multi-agent integration blueprints for every enterprise discipline.
          </p>
          <div className="pt-2">
            <Link
              to="/capabilities"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-300 hover:to-amber-300 shadow-lg shadow-yellow-500/20 hover:shadow-[0_0_20px_rgba(250,204,21,0.5)] transition-all"
            >
              <span>Explore All 28 Capabilities</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </Link>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <CapabilityDetailModal
        capability={selectedCapability}
        onClose={() => setSelectedCapability(null)}
        onConsult={(serviceName) => {
          setSelectedCapability(null);
          if (onConsultService) onConsultService(serviceName);
        }}
      />
    </section>
  );
};
