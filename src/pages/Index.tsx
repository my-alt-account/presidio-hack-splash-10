
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ScheduleSection from '@/components/ScheduleSection';
import SpeakersSection from '@/components/SpeakersSection';
import RegisterSection from '@/components/RegisterSection';
import SponsorsSection from '@/components/SponsorsSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark text-foreground">
      <Header />
      <HeroSection />
      <AboutSection />
      <ScheduleSection />
      <SpeakersSection />
      <RegisterSection />
      <SponsorsSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Index;
