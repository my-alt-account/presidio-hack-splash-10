import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/90 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/5c1da2ac-112d-4efe-a24f-fc69284209e2.png" 
            alt="Presidio Bitcoin Hackathon Logo" 
            className="h-8 w-8"
          />
          <span className="font-display font-bold text-xl text-presidio">Presidio Bitcoin Hackathon</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-presidio hover:text-bitcoin transition-colors">About</a>
          <a href="#schedule" className="text-presidio hover:text-bitcoin transition-colors">Schedule</a>
          <a href="#speakers" className="text-presidio hover:text-bitcoin transition-colors">Speakers</a>
          <a href="#sponsors" className="text-presidio hover:text-bitcoin transition-colors">Sponsors</a>
          <a href="#faq" className="text-presidio hover:text-bitcoin transition-colors">FAQ</a>
        </nav>
        <Button 
          className="bg-presidio hover:bg-presidio-light text-cream font-bold"
          onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Register Now
        </Button>
      </div>
    </header>
  );
};

export default Header;
