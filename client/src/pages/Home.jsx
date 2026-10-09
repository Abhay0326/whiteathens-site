import React, { useState } from 'react';
import { Hero } from '../components/home/Hero';
import { MarqueeTicker } from '../components/home/MarqueeTicker';
import { StatsSection } from '../components/home/StatsSection';
import { BentoGrid } from '../components/home/BentoGrid';
import { WhyUs } from '../components/home/WhyUs';
import { FounderSpotlight } from '../components/home/FounderSpotlight';
import { ConsultationModal } from '../components/common/ConsultationModal';

export const Home = () => {
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleConsultService = (serviceName) => {
    setSelectedService(serviceName);
    setConsultModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Moving Horizontal AI Capabilities Marquee Ticker */}
      <MarqueeTicker />

      {/* 3. Enterprise Stats */}
      <StatsSection />

      {/* 4. Flagship Bento Grid Showcase */}
      <BentoGrid onConsultService={handleConsultService} />

      {/* 5. Enterprise Differentiators */}
      <WhyUs />

      {/* 6. Founder Showcase in the Second Half of the Main Page */}
      <FounderSpotlight />

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={consultModalOpen}
        onClose={() => setConsultModalOpen(false)}
        preselectedService={selectedService}
      />
    </div>
  );
};
