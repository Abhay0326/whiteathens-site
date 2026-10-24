import React, { useState } from 'react';
import { Hero } from '../components/home/Hero';
import { MarqueeTicker } from '../components/home/MarqueeTicker';
import { StatsSection } from '../components/home/StatsSection';
import { BentoGrid } from '../components/home/BentoGrid';
import { WhyUs } from '../components/home/WhyUs';
import { FounderSpotlight } from '../components/home/FounderSpotlight';
import { ConsultationModal } from '../components/common/ConsultationModal';
import ScrollReveal from '../components/common/ScrollReveal';

export const Home = () => {
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleConsultService = (serviceName) => {
    setSelectedService(serviceName);
    setConsultModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <ScrollReveal>
        {/* 1. Hero Section */}
        <Hero />
      </ScrollReveal>

      <ScrollReveal>
        {/* 3. Enterprise Stats */}
        <StatsSection />
      </ScrollReveal>

      <ScrollReveal>
        {/* 4. Flagship Bento Grid Showcase */}
        <BentoGrid onConsultService={handleConsultService} />
      </ScrollReveal>

      <ScrollReveal>
        {/* 5. Enterprise Differentiators */}
        <WhyUs />
      </ScrollReveal>

      <ScrollReveal>
        {/* 6. Founder Showcase in the Second Half of the Main Page */}
        <FounderSpotlight />
      </ScrollReveal>

      <ScrollReveal>
        {/* Global Consultation Modal */}
        <ConsultationModal
          isOpen={consultModalOpen}
          onClose={() => setConsultModalOpen(false)}
          preselectedService={selectedService}
        />
      </ScrollReveal>  
    </div>
  );
};
