import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      title: "72 Hours of Building",
      description: "Immerse yourself in an intensive coding experience with like-minded Bitcoin enthusiasts."
    },
    {
      title: "$50,000 in Prizes",
      description: "Compete for substantial prizes and recognition from the Bitcoin community."
    },
    {
      title: "Expert Mentorship",
      description: "Get guidance from Bitcoin Core developers and industry leaders."
    },
    {
      title: "Networking",
      description: "Connect with potential partners, employers, and collaborators."
    }
  ];

  return (
    <section id="about" className="section bg-dark-100">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">
            About The <span className="text-bitcoin">Hackathon</span>
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Bitcoin Hackathon brings together developers, designers, and entrepreneurs to build the next generation of Bitcoin applications and infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
            <p className="text-white/90 mb-6">
              Presidio Bitcoin is dedicated to advancing Bitcoin adoption through education, development, and community building. Our hackathon provides a platform for innovators to create solutions that leverage Bitcoin's potential.
            </p>
            <p className="text-white/90 mb-6">
              Whether you're building on Lightning Network, developing wallets, creating smart contracts with RGB or Taproot, or exploring other Bitcoin technologies, this is your chance to make an impact.
            </p>
            <a href="#register" className="inline-flex items-center text-bitcoin hover:underline font-medium">
              Join the revolution <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-dark-200 p-6 rounded-lg border border-dark-300 hover:border-bitcoin/40 transition-colors"
              >
                <h4 className="text-xl font-bold mb-2 text-white">{feature.title}</h4>
                <p className="text-white/90">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-dark-200 p-8 md:p-12 rounded-xl border border-dark-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-white">Focus Areas</h3>
              <p className="text-white/90">
                This year, we're particularly interested in projects addressing:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center bg-dark p-4 rounded-lg">
                <span className="h-2 w-2 rounded-full bg-bitcoin mr-3"></span>
                <span className="text-white/90">Lightning Network Innovations</span>
              </div>
              <div className="flex items-center bg-dark p-4 rounded-lg">
                <span className="h-2 w-2 rounded-full bg-bitcoin mr-3"></span>
                <span className="text-white/90">Privacy & Security</span>
              </div>
              <div className="flex items-center bg-dark p-4 rounded-lg">
                <span className="h-2 w-2 rounded-full bg-bitcoin mr-3"></span>
                <span className="text-white/90">Scaling Solutions</span>
              </div>
              <div className="flex items-center bg-dark p-4 rounded-lg">
                <span className="h-2 w-2 rounded-full bg-bitcoin mr-3"></span>
                <span className="text-white/90">Developer Tools</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
