import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';
import { ConsultationModal } from './ConsultationModal';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'AI Capabilities', path: '/capabilities' },
    { name: 'About & Leadership', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-blue-900/40 bg-white/80 dark:bg-slate-950/80 glass-nav transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Logo with yellow organization branding */}
          <Logo />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    active
                      ? 'text-yellow-600 dark:text-yellow-400 bg-yellow-400/10'
                      : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/70 dark:hover:bg-blue-950/50'
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-yellow-400 rounded-full shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* System / Dark / Light Theme Toggle */}
            <ThemeToggle />

            {/* Quick Consultation CTA Button */}
            <button
              type="button"
              onClick={() => setConsultModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-900 bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-400 hover:from-yellow-300 hover:to-amber-300 border border-yellow-200 shadow-md hover:shadow-[0_0_20px_rgba(250,204,21,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-900 fill-slate-900" />
              <span>Book Architect</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-blue-950 border border-slate-200 dark:border-blue-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 dark:border-blue-900/60 bg-white/95 dark:bg-slate-950/95 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl animate-fadeIn">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  isActive(link.path)
                    ? 'bg-yellow-400/15 text-yellow-600 dark:text-yellow-400 font-bold border-l-4 border-yellow-400'
                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-blue-950/60'
                }`}
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </Link>
            ))}

            <div className="pt-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setConsultModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-slate-900 bg-gradient-to-r from-yellow-400 to-amber-400 shadow-md"
              >
                <Sparkles className="w-4 h-4 fill-slate-900" />
                <span>Book AI Architect Consultation</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={consultModalOpen}
        onClose={() => setConsultModalOpen(false)}
      />
    </>
  );
};
