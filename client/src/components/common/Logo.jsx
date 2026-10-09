import React from 'react';
import { Link } from 'react-router-dom';

export const Logo = ({ size = 'normal', showSubtitle = true }) => {
  const isLarge = size === 'large';

  return (
    <Link to="/" className="flex items-center gap-3 group select-none">
      {/* Brand Icon: WA Monogram fused with Greek Classical Temple Pillars */}
      <div
        className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-900 via-blue-950 to-slate-950 border border-yellow-500/40 shadow-md group-hover:border-yellow-400 group-hover:shadow-[0_0_18px_rgba(250,204,21,0.45)] transition-all duration-300 ${
          isLarge ? 'w-14 h-14' : 'w-10 h-10'
        }`}
      >
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={isLarge ? 'w-9 h-9' : 'w-6 h-6'}
        >
          {/* Triangular Pediment / Temple Roof in Gold */}
          <polygon
            points="32,6 8,20 56,20"
            fill="url(#goldGradient)"
            stroke="#F59E0B"
            strokeWidth="1.5"
          />
          {/* Pediment Architrave */}
          <rect x="6" y="21" width="52" height="3" rx="1.5" fill="#FACC15" />
          {/* Classical Pillars forming stylized 'W' & 'A' */}
          <rect x="12" y="26" width="5" height="24" rx="1.5" fill="url(#goldGradient)" />
          <rect x="22" y="26" width="5" height="24" rx="1.5" fill="url(#goldGradient)" />
          <rect x="37" y="26" width="5" height="24" rx="1.5" fill="url(#goldGradient)" />
          <rect x="47" y="26" width="5" height="24" rx="1.5" fill="url(#goldGradient)" />
          {/* Diagonal geometric crossbar uniting into 'A' */}
          <line
            x1="27"
            y1="34"
            x2="37"
            y2="34"
            stroke="#FDE047"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Temple Base / Plinth in Yellow Gold */}
          <rect x="6" y="52" width="52" height="4" rx="2" fill="#F59E0B" />
          <rect x="3" y="57" width="58" height="3" rx="1.5" fill="#EAB308" />

          {/* Glowing Gradient Definition */}
          <defs>
            <linearGradient id="goldGradient" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FEF08A" />
              <stop offset="0.4" stopColor="#FACC15" />
              <stop offset="1" stopColor="#D97706" />
            </linearGradient>
          </defs>
        </svg>

        {/* Ambient neon pulse behind icon */}
        <span className="absolute -inset-0.5 rounded-xl bg-yellow-400/20 blur-[6px] opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none" />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-black tracking-tight text-yellow-400 group-hover:text-yellow-300 transition-colors drop-shadow-[0_0_8px_rgba(250,204,21,0.4)] ${
              isLarge ? 'text-3xl' : 'text-xl'
            }`}
          >
            White Athens
          </span>
        </div>
        {showSubtitle && (
          <span
            className={`font-medium tracking-widest uppercase transition-colors ${
              isLarge ? 'text-xs' : 'text-[10px]'
            } text-blue-600 dark:text-blue-400 group-hover:text-blue-500`}
          >
            Software • AI Systems
          </span>
        )}
      </div>
    </Link>
  );
};
