import React, { useState } from 'react';
import {
  Phone,
  Mail,
  Globe,
  MapPin,
  QrCode,
  RotateCw,
  Download,
  Copy,
  Check,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { LinkedInIcon } from '../common/Icons';
import { FOUNDER_INFO, COMPANY_INFO } from '../../data/companyData';

export const VisitingCard3D = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [copied, setCopied] = useState(false);

  // Copy full vCard / contact text to clipboard
  const handleCopyContact = () => {
    const contactText = `Sachin Jain - Director & Chief AI Architect
White Athens Software (whiteathens.com)
Phone: ${FOUNDER_INFO.contact.phone}
Email: ${FOUNDER_INFO.contact.email}
Location: ${FOUNDER_INFO.contact.location}
LinkedIn: ${FOUNDER_INFO.contact.linkedin}`;

    navigator.clipboard.writeText(contactText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Generate and download a standard .vcf (vCard) file
  const handleDownloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Sachin Jain
ORG:White Athens Software
TITLE:Director & Chief AI Architect
TEL;TYPE=WORK,VOICE:+919811860631
EMAIL;TYPE=PREF,INTERNET:SachinJain@WhiteAthens.com
URL:https://www.WhiteAthens.com
ADR;TYPE=WORK:;;Delhi NCR;India;;;
NOTE:AI Architect & Technology Leader - Agentic AI, Generative AI & Enterprise Transformation
URL;TYPE=LinkedIn:https://www.linkedin.com/in/sachinsamhita/
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Sachin_Jain_WhiteAthens.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      {/* Instructions & Interactive Controls Bar */}
      <div className="w-full flex items-center justify-between mb-4 px-2">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-yellow-600 dark:text-yellow-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Digital Visiting Card</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsFlipped(!isFlipped)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-800 dark:text-white bg-slate-200 dark:bg-blue-950 border border-slate-300 dark:border-blue-800 hover:border-yellow-400 transition-all shadow-sm active:scale-95"
          >
            <RotateCw className={`w-3.5 h-3.5 transition-transform duration-500 ${isFlipped ? 'rotate-180' : ''}`} />
            <span>{isFlipped ? 'Show Front' : 'Flip to Back'}</span>
          </button>

          <button
            type="button"
            onClick={handleCopyContact}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-800 dark:text-white bg-slate-200 dark:bg-blue-950 border border-slate-300 dark:border-blue-800 hover:border-yellow-400 transition-all shadow-sm active:scale-95"
            title="Copy Contact Details"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>

          <button
            type="button"
            onClick={handleDownloadVCard}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-950 bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-300 hover:to-amber-300 transition-all shadow-sm active:scale-95"
            title="Download vCard file"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">vCard</span>
          </button>
        </div>
      </div>

      {/* 3D Perspective Flip Card Container */}
      <div
        className="w-full aspect-[1.75/1] min-h-[300px] perspective-1000 cursor-pointer select-none"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d rounded-2xl shadow-2xl ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* ===================== FRONT FACE ===================== */}
          <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden border border-yellow-400/50 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 text-white shadow-[0_0_35px_rgba(250,204,21,0.25)]">
            {/* Top decorative geometric slice */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-yellow-400/20 via-blue-600/10 to-transparent pointer-events-none" />

            {/* Front Header */}
            <div className="flex items-start justify-between relative z-10">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2">
                  <span>{FOUNDER_INFO.name}</span>
                  <span className="w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
                </h3>
                <p className="text-xs sm:text-sm font-bold text-yellow-400 tracking-wide mt-0.5">
                  {FOUNDER_INFO.title}
                </p>
                <p className="text-[11px] sm:text-xs text-blue-200/90 max-w-sm mt-1 leading-snug line-clamp-2">
                  {FOUNDER_INFO.tagline}
                </p>
              </div>

              {/* Minimal Brand Monogram */}
              <div className="flex flex-col items-end">
                <span className="text-base sm:text-lg font-black tracking-wider text-yellow-400">
                  WA
                </span>
                <span className="text-[9px] uppercase tracking-widest text-slate-400 font-mono">
                  WHITE ATHENS
                </span>
              </div>
            </div>

            {/* Front Middle & Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-slate-300 relative z-10 pt-2">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" />
                <span className="font-mono text-[11px]">{FOUNDER_INFO.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" />
                <span className="truncate text-[11px]">{FOUNDER_INFO.contact.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" />
                <span className="text-[11px]">{FOUNDER_INFO.contact.website}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" />
                <span className="text-[11px]">{FOUNDER_INFO.contact.location}</span>
              </div>
              <div className="flex items-center gap-2 sm:col-span-2">
                <LinkedInIcon className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" />
                <span className="text-[11px] truncate text-blue-300">
                  linkedin.com/in/sachinsamhita/
                </span>
              </div>
            </div>

            {/* Front Footer: Badges Bar */}
            <div className="pt-3 border-t border-blue-900/60 flex items-center justify-between relative z-10">
              <div className="flex flex-wrap items-center gap-1.5">
                {FOUNDER_INFO.visitingCardBadges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="text-[9px] font-bold px-2 py-0.5 rounded bg-blue-900/60 border border-blue-700/50 text-blue-200 tracking-wider"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                <span>Click to Flip</span>
                <RotateCw className="w-3 h-3 text-yellow-400" />
              </div>
            </div>
          </div>

          {/* ===================== BACK FACE ===================== */}
          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden border border-yellow-400/60 bg-gradient-to-br from-blue-950 via-slate-950 to-blue-900 text-white shadow-[0_0_35px_rgba(59,130,246,0.3)]">
            {/* Ambient Brand Accent Lines */}
            <div className="absolute -left-12 -top-12 w-48 h-48 rounded-full bg-yellow-400/10 blur-3xl pointer-events-none" />

            {/* Back Header with Stylized Monogram */}
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-slate-950 flex items-center justify-center font-black text-2xl shadow-md border border-yellow-200">
                  WA
                </div>
                <div>
                  <h4 className="text-lg font-black text-white tracking-wider">
                    WHITE ATHENS
                  </h4>
                  <p className="text-[10px] font-mono tracking-widest text-yellow-400 uppercase">
                    SOFTWARE
                  </p>
                </div>
              </div>

              {/* QR Code Graphic Mockup */}
              <div className="w-14 h-14 rounded-lg bg-white p-1.5 flex flex-col items-center justify-center shadow-lg border border-yellow-400/50">
                <QrCode className="w-full h-full text-slate-950" />
              </div>
            </div>

            {/* Back Middle: Strategic Domain Pillars */}
            <div className="my-auto relative z-10 text-center sm:text-left space-y-2">
              <div className="text-xs sm:text-sm font-mono font-bold text-yellow-300 tracking-wider">
                AI | Agentic AI | Enterprise Architecture | Technology Strategy
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                "{COMPANY_INFO.visionStatement}"
              </p>
            </div>

            {/* Back Bottom */}
            <div className="pt-3 border-t border-blue-900/60 flex items-center justify-between relative z-10">
              <div className="text-[11px] font-mono text-yellow-400 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-yellow-400" />
                <span>www.WhiteAthens.com</span>
              </div>

              <span className="text-[10px] text-slate-400 font-mono">
                Corporate HQ: Delhi NCR, India
              </span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-500 mt-3 text-center">
        💡 Hover or click to flip between Front and Back of the physical executive visiting card.
      </p>
    </div>
  );
};
