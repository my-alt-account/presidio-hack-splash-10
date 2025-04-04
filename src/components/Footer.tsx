
import React from 'react';
import { Bitcoin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-200 py-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Bitcoin className="h-6 w-6 text-bitcoin" />
              <span className="font-display font-bold text-xl">Presidio Hack</span>
            </div>
            <p className="text-foreground/70 mb-6">
              The premier Bitcoin hackathon for builders and innovators.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'GitHub', 'Discord', 'LinkedIn'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="h-10 w-10 rounded-full bg-dark-300 flex items-center justify-center hover:bg-bitcoin transition-colors"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Event</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-foreground/70 hover:text-bitcoin transition-colors">About</a></li>
              <li><a href="#schedule" className="text-foreground/70 hover:text-bitcoin transition-colors">Schedule</a></li>
              <li><a href="#speakers" className="text-foreground/70 hover:text-bitcoin transition-colors">Speakers</a></li>
              <li><a href="#register" className="text-foreground/70 hover:text-bitcoin transition-colors">Register</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/70 hover:text-bitcoin transition-colors">Sponsor Guide</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-bitcoin transition-colors">Venue Information</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-bitcoin transition-colors">Code of Conduct</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-bitcoin transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-foreground/70">Austin, TX</li>
              <li><a href="mailto:info@presidiohack.com" className="text-foreground/70 hover:text-bitcoin transition-colors">info@presidiohack.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-dark-300 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-foreground/60 text-sm">
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
