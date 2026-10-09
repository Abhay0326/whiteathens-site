import React from 'react';
import { Sun, Moon, Laptop } from 'lucide-react';
import { useTheme } from '../../context/useTheme';

export const ThemeToggle = () => {
  const { theme, toggleTheme, resetToSystem, isSystemDefault } = useTheme();

  return (
    <div className="flex items-center gap-1.5 p-1 rounded-full bg-slate-200/80 dark:bg-blue-950/70 border border-slate-300 dark:border-blue-800/60 shadow-inner">
      {/* Light / Dark Mode Toggle Button */}
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        title={`Current: ${theme === 'dark' ? 'Dark' : 'Light'} Mode. Click to switch`}
        className="relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 text-slate-700 dark:text-yellow-400 hover:scale-105 active:scale-95 bg-white dark:bg-blue-900/90 shadow-sm"
      >
        {theme === 'dark' ? (
          <Moon className="w-4 h-4 transition-transform duration-500 rotate-0 hover:-rotate-12 text-yellow-400" />
        ) : (
          <Sun className="w-4 h-4 transition-transform duration-500 rotate-0 hover:rotate-90 text-amber-500" />
        )}
      </button>

      {/* Optional Reset to System Mode Button */}
      <button
        type="button"
        onClick={resetToSystem}
        aria-label="Follow system theme"
        title={isSystemDefault ? 'Following system default theme' : 'Click to reset to system theme'}
        className={`px-2 py-1 text-[11px] font-medium rounded-full transition-all duration-200 flex items-center gap-1 ${
          isSystemDefault
            ? 'text-yellow-600 dark:text-yellow-400 font-semibold'
            : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
        }`}
      >
        <Laptop className="w-3 h-3" />
        <span className="hidden sm:inline">{isSystemDefault ? 'System' : 'Auto'}</span>
      </button>
    </div>
  );
};
