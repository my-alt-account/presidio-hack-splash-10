
import React from 'react';

const SponsorsSection: React.FC = () => {
  // Current sponsors (3 actual sponsors with logos)
  const sponsors = [
    {
      name: "Human Rights Foundation",
      logo: "/lovable-uploads/36ffa97f-4706-442b-bd0f-d0fc196d0f61.png"
    },
    {
      name: "Lightspark",
      logo: "/lovable-uploads/22e8d730-c4f2-4a7c-acd1-98e996403216.png"
    },
    {
      name: "Block",
      logo: "/lovable-uploads/873dcdc1-9cba-4886-a6ba-0b17fcc1dcaf.png"
    }
  ];

  // Generate empty sponsor placeholders to make 10 total
  const emptySponsors = Array(7).fill(null).map((_, index) => ({
    name: `Sponsor ${index + 4}`,
    logo: null
  }));

  const allSponsors = [...sponsors, ...emptySponsors];

  return (
    <section id="sponsors" className="section bg-dark-100">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">Our <span className="text-bitcoin">Sponsors</span></h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            We're proud to partner with leading organizations in the Bitcoin ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {allSponsors.map((sponsor, index) => (
            <div 
              key={`sponsor-${index}`}
              className="aspect-square rounded-xl bg-white border border-dark-300 flex items-center justify-center p-6 hover:border-bitcoin transition-colors"
            >
              {sponsor.logo ? (
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  className="max-h-full max-w-full object-contain"
                />
              ) : (
                <div className="text-lg font-bold text-dark-100/60">Available</div>
              )}
            </div>
          ))}
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
