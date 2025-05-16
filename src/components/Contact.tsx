
import { useState } from "react";
import { MapPin, Mail } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const { portfolioData, addMessage } = usePortfolio();
  const { contact } = portfolioData;
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Add the message directly to our context
    addMessage({
      name: formData.name,
      email: formData.email,
      message: formData.message,
    });
    
    // Reset form and show success message
    setFormData({ name: "", email: "", message: "" });
    toast({
      title: "Message sent",
      description: "Your message has been sent successfully!",
    });
    setIsSubmitting(false);
  };
  
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">Get in touch</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-bold text-portfolio-dark mb-6">Get in Touch</h3>
            <p className="text-portfolio-gray mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-portfolio-light flex items-center justify-center rounded-lg">
                  <MapPin className="text-portfolio-blue" />
                </div>
                <div>
                  <p className="font-medium text-portfolio-dark">Location</p>
                  <p className="text-portfolio-gray">{contact.location}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-portfolio-light flex items-center justify-center rounded-lg">
                  <Mail className="text-portfolio-blue" />
                </div>
                <div>
                  <p className="font-medium text-portfolio-dark">Email</p>
                  <p className="text-portfolio-gray">{contact.email}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-portfolio-light border-0"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-portfolio-light border-0"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-portfolio-light border-0 resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="btn-primary w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
