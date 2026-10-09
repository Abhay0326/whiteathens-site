import React, { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // 1. Check localStorage first
    const savedTheme = localStorage.getItem('wa_theme_preference');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    // 2. Default to system preference
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark'; // Fallback
  });

  const [isSystemDefault, setIsSystemDefault] = useState(() => {
    return !localStorage.getItem('wa_theme_preference');
  });

  // Apply theme to html root
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
  }, [theme]);

  // Listen to OS system theme changes if user hasn't overridden
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = (e) => {
      const savedTheme = localStorage.getItem('wa_theme_preference');
      if (!savedTheme) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    setIsSystemDefault(false);
    localStorage.setItem('wa_theme_preference', newTheme);
  };

  const resetToSystem = () => {
    localStorage.removeItem('wa_theme_preference');
    setIsSystemDefault(true);
    if (window.matchMedia) {
      setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, resetToSystem, isSystemDefault }}>
      {children}
    </ThemeContext.Provider>
  );
};
export { ThemeContext };
export default ThemeProvider;
