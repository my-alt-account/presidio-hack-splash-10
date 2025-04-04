
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface SpeakerProps {
  name: string;
  role: string;
  company: string;
  imagePlaceholder?: string;
  imageUrl?: string;
}

const Speaker: React.FC<SpeakerProps> = ({ name, role, company, imagePlaceholder, imageUrl }) => {
  return (
    <div className="group">
      <div className="aspect-square mb-4 bg-dark-200 rounded-xl overflow-hidden relative border border-dark-300 group-hover:border-bitcoin transition-colors">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-dark-300">
            {imagePlaceholder}
          </div>
        )}
      </div>
      <h4 className="font-bold text-lg group-hover:text-bitcoin transition-colors text-white">{name}</h4>
      <p className="text-white/90">{role}</p>
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
    { 
      name: "Steve Lee", 
      role: "Investor & Lead", 
      company: "Spiral", 
      imageUrl: "/lovable-uploads/7cf79b3f-6307-46d4-be98-9ae9d4b82644.png" 
    },
    { name: "Max Webster", role: "Founder", company: "Hivemind Ventures", imagePlaceholder: "MW" },
    { name: "David King", role: "Investor & Creative Lead", company: "Founders You Should Know", imagePlaceholder: "DK" },
  ];

  return (
    <section id="speakers" className="section bg-dark-100">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">Speakers & <span className="text-bitcoin">Judges</span></h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Learn from and get feedback from the best minds in the Bitcoin ecosystem.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center text-white">
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
          <h3 className="text-2xl font-bold mb-8 flex items-center text-white">
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
