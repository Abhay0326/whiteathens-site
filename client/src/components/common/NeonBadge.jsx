import React from 'react';

export const NeonBadge = ({ children, variant = 'blue', size = 'normal', className = '' }) => {
  const styles = {
    yellow:
      'bg-yellow-500/10 text-yellow-600 dark:text-yellow-300 border-yellow-500/40 dark:border-yellow-400/60 shadow-[0_0_12px_rgba(250,204,21,0.25)]',
    blue:
      'bg-blue-600/10 text-blue-700 dark:text-blue-300 border-blue-500/40 dark:border-blue-400/60 shadow-[0_0_15px_rgba(59,130,246,0.3)]',
    purple:
      'bg-purple-600/10 text-purple-700 dark:text-purple-300 border-purple-500/40 dark:border-purple-400/60 shadow-[0_0_14px_rgba(168,85,247,0.25)]',
    gray:
      'bg-slate-200 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700/60',
  };

  const sizes = {
    small: 'text-[11px] px-2 py-0.5',
    normal: 'text-xs px-3 py-1',
    large: 'text-sm px-4 py-1.5 font-semibold',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border font-medium tracking-wide transition-all duration-300 ${
        styles[variant] || styles.blue
      } ${sizes[size] || sizes.normal} ${className}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full animate-pulse ${
          variant === 'yellow'
            ? 'bg-yellow-400'
            : variant === 'purple'
            ? 'bg-purple-400'
            : variant === 'gray'
            ? 'bg-slate-400'
            : 'bg-blue-400'
        }`}
      />
      {children}
    </span>
  );
};
