
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Bitcoin } from "lucide-react";

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
        scrolled ? "bg-dark/90 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Bitcoin className="h-6 w-6 text-bitcoin" />
          <span className="font-display font-bold text-xl">Presidio Hack</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-foreground/80 hover:text-bitcoin transition-colors">About</a>
          <a href="#schedule" className="text-foreground/80 hover:text-bitcoin transition-colors">Schedule</a>
          <a href="#speakers" className="text-foreground/80 hover:text-bitcoin transition-colors">Speakers</a>
          <a href="#sponsors" className="text-foreground/80 hover:text-bitcoin transition-colors">Sponsors</a>
          <a href="#faq" className="text-foreground/80 hover:text-bitcoin transition-colors">FAQ</a>
        </nav>
        <Button 
          className="bg-bitcoin hover:bg-bitcoin-light text-white"
          onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Register Now
        </Button>
      </div>
    </header>
  );
};

export default Header;
