import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { QrCode, Bitcoin, CreditCard, Zap } from 'lucide-react';
import { generateLnurlAuth, checkLnurlAuthStatus } from '@/utils/lnurlAuth';

const RegisterSection: React.FC = () => {
  const { toast } = useToast();
  const [authMethod, setAuthMethod] = useState<'standard' | 'lightning'>('standard');
  const [showLightningModal, setShowLightningModal] = useState(false);
  const [lnurlAuthData, setLnurlAuthData] = useState<{
    lnurl: string;
    k1: string;
    encoded: string;
  } | null>(null);
  const [checkingStatus, setCheckingStatus] = useState(false);
  const [statusInterval, setStatusInterval] = useState<number | null>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (authMethod === 'lightning') {
      const authData = generateLnurlAuth();
      setLnurlAuthData(authData);
      setShowLightningModal(true);
      
      // Start checking for authentication status
      const interval = window.setInterval(() => {
        checkAuthStatus(authData.k1);
      }, 3000);
      setStatusInterval(interval as unknown as number);
    } else {
      toast({
        title: "Application Received",
        description: "We've received your application. We'll be in touch soon!",
        duration: 5000,
      });
    }
  };

  const checkAuthStatus = async (k1: string) => {
    if (checkingStatus) return;
    
    setCheckingStatus(true);
    try {
      const isAuthenticated = await checkLnurlAuthStatus(k1);
      if (isAuthenticated) {
        clearAuthInterval();
        handleLightningAuthComplete();
      }
    } catch (error) {
      console.error("Error checking authentication status:", error);
    } finally {
      setCheckingStatus(false);
    }
  };

  const clearAuthInterval = () => {
    if (statusInterval !== null) {
      window.clearInterval(statusInterval);
      setStatusInterval(null);
    }
  };

  // Clean up interval on unmount
  useEffect(() => {
    return () => {
      if (statusInterval !== null) {
        window.clearInterval(statusInterval);
      }
    };
  }, [statusInterval]);

  const handleLightningAuthComplete = () => {
    setShowLightningModal(false);
    toast({
      title: "Lightning Authentication Successful",
      description: "You've successfully authenticated with Lightning. Your hackathon registration is confirmed!",
      duration: 5000,
    });
  };

  const handleCancel = () => {
    clearAuthInterval();
    setShowLightningModal(false);
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
            
            <div className="space-y-4">
              <label className="block text-sm font-medium text-white mb-2">
                How would you like to register?
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div
                  className={`flex items-center justify-center p-4 border ${
                    authMethod === 'standard' ? 'border-bitcoin bg-dark-300' : 'border-dark-300'
                  } rounded-lg cursor-pointer hover:bg-dark-300 transition-all`}
                  onClick={() => setAuthMethod('standard')}
                >
                  <CreditCard className="h-5 w-5 mr-2 text-white" />
                  <span className="text-white">Standard Form</span>
                </div>
                <div
                  className={`flex items-center justify-center p-4 border ${
                    authMethod === 'lightning' ? 'border-bitcoin bg-dark-300' : 'border-dark-300'
                  } rounded-lg cursor-pointer hover:bg-dark-300 transition-all`}
                  onClick={() => setAuthMethod('lightning')}
                >
                  <Zap className="h-5 w-5 mr-2 text-bitcoin" />
                  <span className="text-white">Lightning Login</span>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <Button 
                type="submit" 
                className="w-full bg-bitcoin hover:bg-bitcoin-light text-black font-medium py-6"
              >
                {authMethod === 'standard' ? 'Submit Application' : 'Login with Lightning'}
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Lightning Authentication Modal */}
      {showLightningModal && lnurlAuthData && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-dark-200 p-8 rounded-xl max-w-md w-full border border-dark-300 shadow-xl">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-white">Login with Lightning</h3>
              <p className="text-white/80 mb-6">
                Scan this QR code with your Lightning wallet to authenticate
              </p>
              
              <div className="bg-white p-4 rounded-lg mb-6 w-64 h-64 mx-auto flex items-center justify-center">
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(lnurlAuthData.encoded)}&size=250x250&margin=10`} 
                  alt="LNURL Auth QR Code"
                  className="max-w-full"
                />
              </div>
              
              <div className="mb-6">
                <p className="text-xs text-white/60 mb-2">Lightning URL:</p>
                <div className="bg-dark-300 p-2 rounded overflow-x-scroll text-xs font-mono text-white">
                  {lnurlAuthData.encoded}
                </div>
              </div>
              
              <div className="space-y-3">
                <Button
                  className={`w-full bg-bitcoin hover:bg-bitcoin-light flex items-center justify-center gap-2 text-black ${checkingStatus ? 'opacity-50' : ''}`}
                  onClick={() => checkAuthStatus(lnurlAuthData.k1)}
                  disabled={checkingStatus}
                >
                  <Zap className="h-4 w-4" />
                  {checkingStatus ? "Checking..." : "Check Authentication"}
                </Button>
                <Button
                  variant="outline"
                  className="w-full text-white border-white/20 hover:bg-dark-300"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default RegisterSection;
