
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Upload } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useForm } from 'react-hook-form';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from '@/components/ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Define the form validation schema
const formSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  experienceLevel: z.string().min(1, { message: 'Please select your experience level' }),
  background: z.array(z.string()).min(1, { message: 'Please select at least one background' }),
  motivation: z.string().min(10, { message: 'Please provide some information about your motivation' }),
});

type FormValues = z.infer<typeof formSchema>;

const RegisterSection: React.FC = () => {
  const { toast } = useToast();
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      experienceLevel: '',
      background: [],
      motivation: '',
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setResumeFile(e.target.files[0]);
    }
  };
  
  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    try {
      let resumeUrl = null;
      
      // Upload resume file if it exists
      if (resumeFile) {
        const fileExt = resumeFile.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
        
        const { data: fileData, error: fileError } = await supabase.storage
          .from('resumes')
          .upload(fileName, resumeFile);
        
        if (fileError) {
          throw new Error(`Error uploading resume: ${fileError.message}`);
        }
        
        // Get public URL for the uploaded file
        const { data } = supabase.storage.from('resumes').getPublicUrl(fileName);
        resumeUrl = data.publicUrl;
      }
      
      // Insert application data into the database
      const { error: insertError } = await supabase
        .from('hackathon_applications')
        .insert({
          first_name: values.firstName,
          last_name: values.lastName,
          email: values.email,
          experience_level: values.experienceLevel,
          background: values.background,
          motivation: values.motivation,
          resume_file_url: resumeUrl,
        });
      
      if (insertError) {
        throw new Error(`Error submitting application: ${insertError.message}`);
      }
      
      // Show success message
      toast({
        title: "Application Submitted Successfully",
        description: "Thank you for your application! We'll be in touch soon.",
        duration: 5000,
      });
      
      // Reset form
      form.reset();
      setResumeFile(null);
      
    } catch (error: any) {
      console.error('Application submission error:', error);
      
      toast({
        title: "Submission Error",
        description: error.message || "There was an error submitting your application. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const backgroundOptions = ["Developer", "Designer", "Product Manager", "Student", "Entrepreneur", "Other"];

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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-medium text-white/80">First Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John"
                          className="bg-dark-300 border-dark-300 text-white focus:border-bitcoin"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-destructive text-xs" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-medium text-white/80">Last Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Doe"
                          className="bg-dark-300 border-dark-300 text-white focus:border-bitcoin"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-destructive text-xs" />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-sm font-medium text-white/80">Email Address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="johndoe@example.com"
                        className="bg-dark-300 border-dark-300 text-white focus:border-bitcoin"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-destructive text-xs" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="experienceLevel"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-sm font-medium text-white/80">Experience Level</FormLabel>
                    <FormControl>
                      <select
                        className="w-full rounded-md bg-dark-300 border-dark-300 text-white focus:border-bitcoin p-2"
                        {...field}
                      >
                        <option value="" className="text-gray-500">Select your experience</option>
                        <option value="beginner">Beginner (0-1 year)</option>
                        <option value="intermediate">Intermediate (1-3 years)</option>
                        <option value="advanced">Advanced (3-5 years)</option>
                        <option value="expert">Expert (5+ years)</option>
                      </select>
                    </FormControl>
                    <FormMessage className="text-destructive text-xs" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="background"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-sm font-medium text-white">Background</FormLabel>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {backgroundOptions.map((role) => (
                        <label 
                          key={role} 
                          className={`flex items-center space-x-2 bg-dark-300 p-3 rounded-lg cursor-pointer hover:bg-dark-400 transition-colors ${
                            field.value.includes(role) ? "border border-bitcoin" : ""
                          }`}
                        >
                          <input 
                            type="checkbox" 
                            className="rounded border-dark-300 text-bitcoin focus:ring-bitcoin"
                            checked={field.value.includes(role)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                field.onChange([...field.value, role]);
                              } else {
                                field.onChange(field.value.filter(item => item !== role));
                              }
                            }}
                          />
                          <span className="text-white">{role}</span>
                        </label>
                      ))}
                    </div>
                    <FormMessage className="text-destructive text-xs" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="motivation"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-sm font-medium text-white">Why do you want to join?</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us why you're interested in this hackathon and what you hope to build or learn..."
                        className="bg-dark-300 border-dark-300 text-white focus:border-bitcoin min-h-[120px] placeholder:text-white/50"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-destructive text-xs" />
                  </FormItem>
                )}
              />
              
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
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
