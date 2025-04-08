
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Upload } from 'lucide-react';

const RegisterSection: React.FC = () => {
  const { toast } = useToast();
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setResumeFile(e.target.files[0]);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you would upload the file to a server here
    // For now we'll just display a toast with the file name if it exists
    
    toast({
      title: "Application Received",
      description: resumeFile 
        ? `We've received your application and resume (${resumeFile.name}). We'll be in touch soon!`
        : "We've received your application. We'll be in touch soon!",
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
          <h2 className="section-title text-white">Register for the <span className="text-bitcoin">Hackathon</span></h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Join us for an unforgettable weekend of building, learning, and connecting with the Bitcoin community.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-dark-200 rounded-2xl p-8 border border-dark-300">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-medium text-white/80">
                  First Name
                </label>
                <Input
                  id="firstName"
                  placeholder="John"
                  className="bg-dark-300 border-dark-300 text-white focus:border-bitcoin"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-medium text-white/80">
                  Last Name
                </label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  className="bg-dark-300 border-dark-300 text-white focus:border-bitcoin"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-white/80">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="johndoe@example.com"
                className="bg-dark-300 border-dark-300 text-white focus:border-bitcoin"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="experience" className="block text-sm font-medium text-white/80">
                Experience Level
              </label>
              <select
                id="experience"
                className="w-full rounded-md bg-dark-300 border-dark-300 text-white focus:border-bitcoin p-2"
                required
              >
                <option value="" className="text-gray-500">Select your experience</option>
                <option value="beginner">Beginner (0-1 year)</option>
                <option value="intermediate">Intermediate (1-3 years)</option>
                <option value="advanced">Advanced (3-5 years)</option>
                <option value="expert">Expert (5+ years)</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="background" className="block text-sm font-medium text-white">
                Background
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {["Developer", "Designer", "Product Manager", "Student", "Entrepreneur", "Other"].map((role) => (
                  <label key={role} className="flex items-center space-x-2 bg-dark-300 p-3 rounded-lg cursor-pointer hover:bg-dark-400 transition-colors">
                    <input type="checkbox" className="rounded border-dark-300 text-bitcoin focus:ring-bitcoin" />
                    <span className="text-white">{role}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="motivation" className="block text-sm font-medium text-white">
                Why do you want to join?
              </label>
              <Textarea
                id="motivation"
                placeholder="Tell us why you're interested in this hackathon and what you hope to build or learn..."
                className="bg-dark-300 border-dark-300 text-white focus:border-bitcoin min-h-[120px] placeholder:text-white/50"
                required
              />
            </div>
            
            {/* Resume upload section */}
            <div className="space-y-2">
              <label htmlFor="resume" className="block text-sm font-medium text-white/80">
                Resume (Optional)
              </label>
              <div className="flex items-center gap-4">
                <label 
                  htmlFor="resume" 
                  className="flex items-center gap-2 px-4 py-2 rounded-md bg-dark-300 text-white border border-dark-400 hover:bg-dark-400 cursor-pointer transition-colors"
                >
                  <Upload size={18} />
                  <span>Choose file</span>
                </label>
                <span className="text-white/70 text-sm">
                  {resumeFile ? resumeFile.name : "No file chosen"}
                </span>
              </div>
              <input
                type="file"
                id="resume"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={handleFileChange}
              />
              <p className="text-xs text-white/60 mt-1">
                Accepted formats: PDF, DOC, DOCX (Max 5MB)
              </p>
            </div>
            
            <div className="pt-4">
              <Button 
                type="submit" 
                className="w-full bg-bitcoin hover:bg-bitcoin-light text-black font-medium py-6"
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
