
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { usePortfolio } from "@/context/PortfolioContext";

const ProfileSection = () => {
  const { toast } = useToast();
  const { portfolioData, updateHero } = usePortfolio();
  const [formData, setFormData] = useState(portfolioData.hero);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // In a real application, you would upload this to a server
      // For now, we'll just create a URL for the selected file
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setFormData(prev => ({ ...prev, profileImage: imageUrl }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Update the hero data using the context
    updateHero(formData);
    
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "Profile information has been updated",
      });
      setIsLoading(false);
    }, 500);
  };
  
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-portfolio-dark">Hero Section</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <Label htmlFor="name">Title</Label>
            <Input 
              id="name" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your title or name"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="profileImage">Profile Image</Label>
            <div className="flex items-center gap-4">
              <img 
                src={formData.profileImage} 
                alt="Profile preview" 
                className="h-16 w-16 rounded-full object-cover"
              />
              <Input 
                id="profileImage" 
                type="file" 
                onChange={handleProfileImageChange}
                accept="image/*"
              />
            </div>
          </div>
          
          <div className="md:col-span-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea 
              id="bio" 
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Short description about yourself"
              rows={3}
            />
          </div>
          
          <div>
            <Label htmlFor="githubLink">GitHub Link</Label>
            <Input 
              id="githubLink" 
              name="githubLink"
              value={formData.githubLink}
              onChange={handleChange}
              placeholder="https://github.com/yourusername"
            />
          </div>
          
          <div>
            <Label htmlFor="linkedinLink">LinkedIn Link</Label>
            <Input 
              id="linkedinLink" 
              name="linkedinLink"
              value={formData.linkedinLink}
              onChange={handleChange}
              placeholder="https://linkedin.com/in/yourusername"
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

export default ProfileSection;
