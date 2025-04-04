
import React from 'react';

interface SpeakerProps {
  name: string;
  role: string;
  company: string;
  imagePlaceholder: string;
}

const Speaker: React.FC<SpeakerProps> = ({ name, role, company, imagePlaceholder }) => {
  return (
    <div className="group">
      <div className="aspect-square mb-4 bg-dark-200 rounded-xl overflow-hidden relative border border-dark-300 group-hover:border-bitcoin transition-colors">
        <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-dark-300">
          {imagePlaceholder}
        </div>
      </div>
      <h4 className="font-bold text-lg group-hover:text-bitcoin transition-colors">{name}</h4>
      <p className="text-foreground/70">{role}</p>
      <p className="text-bitcoin font-medium">{company}</p>
    </div>
  );
};

const SpeakersSection: React.FC = () => {
  const speakers = [
    { name: "Alex Johnson", role: "Lead Developer", company: "Bitcoin Core", imagePlaceholder: "AJ" },
    { name: "Sarah Williams", role: "CTO", company: "Lightning Labs", imagePlaceholder: "SW" },
    { name: "Michael Chen", role: "Founder", company: "Blockchain Capital", imagePlaceholder: "MC" },
    { name: "Jessica Rodriguez", role: "Head of Research", company: "Blockstream", imagePlaceholder: "JR" },
  ];

  const judges = [
    { name: "Robert Taylor", role: "Venture Partner", company: "Digital Currency Group", imagePlaceholder: "RT" },
    { name: "Emily Watson", role: "CEO", company: "Bitcoin Alliance", imagePlaceholder: "EW" },
    { name: "David Kim", role: "Professor", company: "MIT Digital Currency Initiative", imagePlaceholder: "DK" },
  ];

  return (
    <section id="speakers" className="section bg-dark-100">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Speakers & <span className="text-bitcoin">Judges</span></h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Learn from and get feedback from the best minds in the Bitcoin ecosystem.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <span className="h-4 w-4 rounded-full bg-bitcoin mr-3"></span>
            Featured Speakers
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {speakers.map((speaker, index) => (
              <Speaker key={index} {...speaker} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <span className="h-4 w-4 rounded-full bg-bitcoin mr-3"></span>
            Judges
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {judges.map((judge, index) => (
              <Speaker key={index} {...judge} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
