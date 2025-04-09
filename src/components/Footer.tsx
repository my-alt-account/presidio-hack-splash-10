
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-200 py-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/f93b766b-1946-4ed2-9232-4b501cc053d5.png" 
                alt="Presidio Bitcoin Logo" 
                className="h-8 w-8"
              />
              <span className="font-display font-bold text-xl text-white">Presidio Bitcoin Hackathon</span>
            </div>
            <p className="text-white/90 mb-6">
              The premier Bitcoin hackathon for builders and innovators.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'GitHub', 'Discord', 'LinkedIn'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="h-10 w-10 rounded-full bg-dark-300 flex items-center justify-center hover:bg-bitcoin transition-colors text-white"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-white">Event</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/90 hover:text-bitcoin transition-colors">About</a></li>
              <li><a href="#schedule" className="text-white/90 hover:text-bitcoin transition-colors">Schedule</a></li>
              <li><a href="#speakers" className="text-white/90 hover:text-bitcoin transition-colors">Speakers</a></li>
              <li><a href="#register" className="text-white/90 hover:text-bitcoin transition-colors">Register</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="text-white/90">Presidio, San Francisco</li>
              <li><a href="mailto:info@presidiohack.com" className="text-white/90 hover:text-bitcoin transition-colors">info@presidiohack.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-dark-300 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-white/80 text-sm">
          <p>© 2025 Presidio Bitcoin Hackathon. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-bitcoin transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-bitcoin transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
