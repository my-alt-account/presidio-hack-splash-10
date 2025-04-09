
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 bg-cream">
      {/* Background elements with reduced opacity */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-presidio/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-presidio/5 blur-3xl"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center justify-between gap-8">
          {/* Center aligned content */}
          <div className="flex flex-col items-center text-center w-full max-w-4xl mx-auto">
            {/* Image now appears at the top with added top margin */}
            <div className="w-full max-w-2xl mb-8 mt-12">  {/* Added mt-12 for top margin */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/5f563dc5-4295-4afe-9a4a-73cc9fe63005.png" 
                  alt="Presidio with Golden Gate Bridge view" 
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-presidio/30 to-transparent"></div>
              </div>
            </div>
            
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-presidio/10 border border-presidio/20 mb-6">
              <span className="text-presidio font-medium mr-2">May 16-17, 2025</span>
              <span className="text-presidio/70">•</span>
              <span className="text-presidio/90 ml-2">Presidio, San Francisco</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              <span className="text-presidio">Presidio Bitcoin</span>
              <br />
              <span className="text-presidio-dark">Hackathon 2025</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-presidio mb-10 max-w-2xl mx-auto">
              Join the premier Bitcoin hackathon to build, learn, and connect with the brightest minds in the Bitcoin ecosystem.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-presidio hover:bg-presidio-light text-cream font-bold text-lg px-8 py-6"
                onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-presidio hover:border-presidio-light text-presidio hover:text-presidio-dark text-lg px-8 py-6"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-20 flex flex-col items-center">
          <p className="text-presidio/80 mb-4">Scroll to discover</p>
          <div className="w-6 h-10 border-2 border-presidio/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-presidio/80 rounded-full animate-pulse mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

