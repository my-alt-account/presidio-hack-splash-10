import React from 'react';

const SponsorsSection: React.FC = () => {
  return (
    <section id="sponsors" className="section bg-dark-100">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">Our <span className="text-bitcoin">Sponsors</span></h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            We're proud to partner with leading organizations in the Bitcoin ecosystem.
          </p>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-white">Gold Sponsors</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div 
              className="aspect-[3/1] rounded-xl bg-white border border-dark-300 flex items-center justify-center p-6"
            >
              <img 
                src="/lovable-uploads/36ffa97f-4706-442b-bd0f-d0fc196d0f61.png" 
                alt="Human Rights Foundation" 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div 
              className="aspect-[3/1] rounded-xl bg-white border border-dark-300 flex items-center justify-center p-6"
            >
              <img 
                src="/lovable-uploads/22e8d730-c4f2-4a7c-acd1-98e996403216.png" 
                alt="Lightspark" 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div 
              className="aspect-[3/1] rounded-xl bg-white border border-dark-300 flex items-center justify-center p-6"
            >
              <img 
                src="/lovable-uploads/873dcdc1-9cba-4886-a6ba-0b17fcc1dcaf.png" 
                alt="Block" 
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-white">Silver Sponsors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={`silver-${i}`}
                className="aspect-[3/2] rounded-xl bg-dark-200 border border-dark-300 flex items-center justify-center p-6"
              >
                <div className="text-xl font-bold text-white/80">Silver Sponsor</div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-white">Bronze Sponsors</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={`bronze-${i}`}
                className="aspect-square rounded-xl bg-dark-200 border border-dark-300 flex items-center justify-center p-4"
              >
                <div className="text-lg font-bold text-white/60">Bronze</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="inline-block px-8 py-4 rounded-full border-2 border-white hover:border-bitcoin text-white hover:text-bitcoin transition-colors font-medium">
            Become a Sponsor
          </a>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
