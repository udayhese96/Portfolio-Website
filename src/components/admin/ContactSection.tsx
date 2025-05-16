import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { usePortfolio } from "@/context/PortfolioContext";

const ContactSection = () => {
  const { toast } = useToast();
  const { portfolioData, updateContact } = usePortfolio();
  const [formData, setFormData] = useState(portfolioData.contact);
  
  // Keep local form data in sync with context
  useEffect(() => {
    setFormData(portfolioData.contact);
  }, [portfolioData.contact]);
  
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Update contact data in context
    updateContact(formData);
    
    setTimeout(() => {
      console.log("Contact data updated:", formData);
      toast({
        title: "Success!",
        description: "Contact information has been updated",
      });
      setIsLoading(false);
    }, 500);
  };
  
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-portfolio-dark">Contact Information</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <Label htmlFor="location">Location</Label>
            <Input 
              id="location" 
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Your location"
            />
          </div>
          
          <div>
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your contact email"
            />
          </div>
        </div>
        
        <Button 
          type="submit" 
          className="bg-portfolio-blue hover:bg-blue-600"
          disabled={isLoading}
        >
          {isLoading ? "Saving..." : "Save Changes"}
        </Button>
      </form>
    </div>
  );
};

export default ContactSection;
