
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { usePortfolio } from "@/context/PortfolioContext";

const AboutSection = () => {
  const { toast } = useToast();
  const { portfolioData, updateAbout } = usePortfolio();
  const [formData, setFormData] = useState(portfolioData.about);
  
  const [isLoading, setIsLoading] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // In a real application, you would upload this to a server
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setFormData(prev => ({ ...prev, aboutImage: imageUrl }));
    }
  };
  
  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
      // In a real application, you would upload this to a server
      // For demo, just updating the name display
      setFormData(prev => ({ ...prev, resumeLink: `/resume-${e.target.files[0].name}` }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Update about data using context
    updateAbout(formData);
    
    setTimeout(() => {
      console.log("Resume file:", resumeFile);
      toast({
        title: "Success!",
        description: "About section has been updated",
      });
      setIsLoading(false);
    }, 500);
  };
  
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-portfolio-dark">About Me Section</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="aboutImage">About Image</Label>
            <div className="flex items-center gap-4">
              <img 
                src={formData.aboutImage} 
                alt="About preview" 
                className="h-16 w-16 rounded-md object-cover"
              />
              <Input 
                id="aboutImage" 
                type="file" 
                onChange={handleImageChange}
                accept="image/*"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="resumeUpload">Resume PDF</Label>
            <div className="flex items-center gap-2">
              <Input 
                id="resumeUpload" 
                type="file" 
                onChange={handleResumeChange}
                accept=".pdf"
              />
              {resumeFile && (
                <span className="text-sm text-green-600">
                  {resumeFile.name} selected
                </span>
              )}
            </div>
            <p className="text-xs text-portfolio-gray">
              Current resume link: {formData.resumeLink}
            </p>
          </div>
          
          <div className="md:col-span-2">
            <Label htmlFor="aboutText1">About Text (First Paragraph)</Label>
            <Textarea 
              id="aboutText1" 
              name="aboutText1"
              value={formData.aboutText1}
              onChange={handleChange}
              rows={3}
            />
          </div>
          
          <div className="md:col-span-2">
            <Label htmlFor="aboutText2">About Text (Second Paragraph)</Label>
            <Textarea 
              id="aboutText2" 
              name="aboutText2"
              value={formData.aboutText2}
              onChange={handleChange}
              rows={3}
            />
          </div>
          
          <div>
            <Label htmlFor="yearsExperience">Years of Experience</Label>
            <Input 
              id="yearsExperience" 
              name="yearsExperience"
              value={formData.yearsExperience}
              onChange={handleChange}
              placeholder="e.g., 2+"
            />
          </div>
          
          <div>
            <Label htmlFor="projectsCompleted">Projects Completed</Label>
            <Input 
              id="projectsCompleted" 
              name="projectsCompleted"
              value={formData.projectsCompleted}
              onChange={handleChange}
              placeholder="e.g., 10+"
            />
          </div>
          
          <div>
            <Label htmlFor="companiesWorked">Companies Worked</Label>
            <Input 
              id="companiesWorked" 
              name="companiesWorked"
              value={formData.companiesWorked}
              onChange={handleChange}
              placeholder="e.g., 3+"
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

export default AboutSection;
