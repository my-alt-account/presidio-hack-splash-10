
import React from 'react';

const SponsorsSection: React.FC = () => {
  return (
    <section id="sponsors" className="section bg-dark-100">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Our <span className="text-bitcoin">Sponsors</span></h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            We're proud to partner with leading organizations in the Bitcoin ecosystem.
          </p>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Gold Sponsors</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div 
                key={`gold-${i}`}
                className="aspect-[3/1] rounded-xl bg-dark-200 border border-dark-300 flex items-center justify-center p-8"
              >
                <div className="text-2xl font-bold text-bitcoin">Gold Sponsor</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Silver Sponsors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={`silver-${i}`}
                className="aspect-[3/2] rounded-xl bg-dark-200 border border-dark-300 flex items-center justify-center p-6"
              >
                <div className="text-xl font-bold text-foreground/60">Silver Sponsor</div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Bronze Sponsors</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={`bronze-${i}`}
                className="aspect-square rounded-xl bg-dark-200 border border-dark-300 flex items-center justify-center p-4"
              >
                <div className="text-lg font-bold text-foreground/40">Bronze</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="inline-block px-8 py-4 rounded-full border border-dark-300 hover:border-bitcoin text-foreground transition-colors">
            Become a Sponsor
          </a>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
