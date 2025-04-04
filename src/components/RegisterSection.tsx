
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const RegisterSection: React.FC = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Received",
      description: "We've received your application. We'll be in touch soon!",
      duration: 5000,
    });
  };

  return (
    <section id="register" className="section relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-bitcoin/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Register for the <span className="text-bitcoin">Hackathon</span></h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Join us for an unforgettable weekend of building, learning, and connecting with the Bitcoin community.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-dark-100 rounded-2xl p-8 border border-dark-300">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-medium text-foreground/80">
                  First Name
                </label>
                <Input
                  id="firstName"
                  placeholder="John"
                  className="bg-dark-200 border-dark-300 focus:border-bitcoin"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-medium text-foreground/80">
                  Last Name
                </label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  className="bg-dark-200 border-dark-300 focus:border-bitcoin"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-foreground/80">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="johndoe@example.com"
                className="bg-dark-200 border-dark-300 focus:border-bitcoin"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="experience" className="block text-sm font-medium text-foreground/80">
                Experience Level
              </label>
              <select
                id="experience"
                className="w-full rounded-md bg-dark-200 border-dark-300 focus:border-bitcoin p-2 text-foreground"
                required
              >
                <option value="">Select your experience</option>
                <option value="beginner">Beginner (0-1 year)</option>
                <option value="intermediate">Intermediate (1-3 years)</option>
                <option value="advanced">Advanced (3-5 years)</option>
                <option value="expert">Expert (5+ years)</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="background" className="block text-sm font-medium text-foreground/80">
                Background
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {["Developer", "Designer", "Product Manager", "Student", "Entrepreneur", "Other"].map((role) => (
                  <label key={role} className="flex items-center space-x-2 bg-dark-200 p-3 rounded-lg cursor-pointer hover:bg-dark-300 transition-colors">
                    <input type="checkbox" className="rounded border-dark-300" />
                    <span>{role}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="motivation" className="block text-sm font-medium text-foreground/80">
                Why do you want to join?
              </label>
              <Textarea
                id="motivation"
                placeholder="Tell us why you're interested in this hackathon and what you hope to build or learn..."
                className="bg-dark-200 border-dark-300 focus:border-bitcoin min-h-[120px]"
                required
              />
            </div>
            
            <div className="pt-4">
              <Button 
                type="submit" 
                className="w-full bg-bitcoin hover:bg-bitcoin-light text-white font-medium py-6"
              >
                Submit Application
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
