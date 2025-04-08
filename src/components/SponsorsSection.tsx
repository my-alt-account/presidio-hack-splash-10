import React from 'react';

const SponsorsSection: React.FC = () => {
  // Current sponsors (10 actual sponsors with logos)
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
      logo: "/lovable-uploads/e9e71786-f19c-406a-a7d2-fd1ec9bf762b.png"
    },
    {
      name: "Lexe",
      logo: "/lovable-uploads/fa885fbb-5f94-4e53-a0e4-1cbe23d78d8e.png"
    },
    {
      name: "Alby",
      logo: "/lovable-uploads/1038b2be-20ea-4725-b540-4f4e96c83b74.png"
    },
    {
      name: "Fewsats",
      logo: "/lovable-uploads/d20bf891-efc0-442c-8fad-8377bf47436f.png"
    },
    {
      name: "Hivemind Ventures",
      logo: "/lovable-uploads/16b945cb-e5fe-4725-af2a-33f28376e526.png"
    },
    {
      name: "OpenSecret",
      logo: "/lovable-uploads/3b1f330e-1cdb-48ab-ba8d-6c50f565c3f3.png"
    },
    {
      name: "Lightning Labs",
      logo: "/lovable-uploads/f050b4d9-0e97-435b-9381-313d98912f5a.png"
    },
    {
      name: "OpenAgents",
      logo: "/lovable-uploads/29479c47-1b55-478e-9da4-5f93ba4c8052.png"
    }
  ];

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
          {sponsors.map((sponsor, index) => (
            <div 
              key={`sponsor-${index}`}
              className="aspect-square rounded-xl bg-white border border-dark-300 flex items-center justify-center p-6 hover:border-bitcoin transition-colors"
            >
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="max-h-full max-w-full object-contain"
              />
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
