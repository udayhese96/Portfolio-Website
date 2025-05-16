
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const AboutSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    aboutImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    aboutText1: "I'm a Computer Science student passionate about creating robust, user-friendly web applications. With a strong foundation in both frontend and backend technologies, I enjoy the full process of bringing ideas to life through code.",
    aboutText2: "My journey in programming began during my first year of college, and since then, I've been constantly learning and expanding my skillset. I'm particularly interested in React, Node.js, and exploring the potential of AI integration in web applications.",
    yearsExperience: "2+",
    projectsCompleted: "10+",
    companiesWorked: "3+",
    resumeLink: "/resume.pdf"
  });
  
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
    
    // Simulate API call
    setTimeout(() => {
      console.log("About data updated:", formData);
      console.log("Resume file:", resumeFile);
      toast({
        title: "Success!",
        description: "About section has been updated",
      });
      setIsLoading(false);
    }, 1000);
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
