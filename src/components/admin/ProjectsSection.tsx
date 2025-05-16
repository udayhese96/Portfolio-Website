
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Plus, Trash2, Edit } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
}

const ProjectsSection = () => {
  const { toast } = useToast();
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: "E-commerce Website",
      description: "A full-stack e-commerce platform with React, Node.js, and MongoDB. Features include user authentication, product filtering, cart functionality, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveLink: "https://example.com",
      githubLink: "https://github.com"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A Kanban-style task management application with drag-and-drop functionality, user authentication, and real-time updates using WebSockets.",
      image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application that provides current weather data and forecasts for any location. Built with React and integrated with the OpenWeatherMap API.",
      image: "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["React", "RESTful API", "CSS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com"
    }
  ]);
  
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project>({
    id: 0,
    title: "",
    description: "",
    image: "",
    technologies: [],
    liveLink: "",
    githubLink: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCurrentProject(prev => ({ ...prev, [name]: value }));
  };
  
  const handleTechnologiesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const techArray = e.target.value.split(",").map(item => item.trim());
    setCurrentProject(prev => ({ ...prev, technologies: techArray }));
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // In a real application, you would upload this to a server
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setCurrentProject(prev => ({ ...prev, image: imageUrl }));
    }
  };
  
  const handleEditProject = (project: Project) => {
    setCurrentProject(project);
    setIsEditing(true);
  };
  
  const handleDeleteProject = (id: number) => {
    if (confirm("Are you sure you want to delete this project?")) {
      setProjects(prev => prev.filter(project => project.id !== id));
      toast({
        title: "Project deleted",
        description: "The project has been removed",
      });
    }
  };
  
  const handleAddNewProject = () => {
    setCurrentProject({
      id: Date.now(),
      title: "",
      description: "",
      image: "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: [],
      liveLink: "",
      githubLink: ""
    });
    setIsEditing(true);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validate the form
    if (!currentProject.title || !currentProject.description) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      if (projects.some(project => project.id === currentProject.id)) {
        // Update existing project
        setProjects(prev => 
          prev.map(project => 
            project.id === currentProject.id ? currentProject : project
          )
        );
        toast({
          title: "Project updated",
          description: "The project has been updated successfully",
        });
      } else {
        // Add new project
        setProjects(prev => [...prev, currentProject]);
        toast({
          title: "Project added",
          description: "The new project has been added successfully",
        });
      }
      
      setIsEditing(false);
      setIsLoading(false);
    }, 1000);
  };
  
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-portfolio-dark">Projects</h2>
        {!isEditing && (
          <Button 
            onClick={handleAddNewProject}
            className="bg-portfolio-blue hover:bg-blue-600"
          >
            <Plus size={18} className="mr-1" /> Add New Project
          </Button>
        )}
      </div>
      
      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-6 rounded-lg border border-gray-200 bg-gray-50 p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <Label htmlFor="title">Project Title*</Label>
              <Input 
                id="title" 
                name="title"
                value={currentProject.title}
                onChange={handleChange}
                placeholder="Project title"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="projectImage">Project Image</Label>
              <div className="flex items-center gap-4">
                <img 
                  src={currentProject.image} 
                  alt="Project preview" 
                  className="h-16 w-16 rounded-md object-cover"
                />
                <Input 
                  id="projectImage" 
                  type="file" 
                  onChange={handleImageChange}
                  accept="image/*"
                />
              </div>
            </div>
            
            <div className="md:col-span-2">
              <Label htmlFor="description">Project Description*</Label>
              <Textarea 
                id="description" 
                name="description"
                value={currentProject.description}
                onChange={handleChange}
                placeholder="Describe your project"
                rows={3}
                required
              />
            </div>
            
            <div className="md:col-span-2">
              <Label htmlFor="technologies">Technologies (comma separated)*</Label>
              <Input 
                id="technologies" 
                name="technologies"
                value={currentProject.technologies.join(", ")}
                onChange={handleTechnologiesChange}
                placeholder="React, Node.js, MongoDB, etc."
                required
              />
            </div>
            
            <div>
              <Label htmlFor="githubLink">GitHub Link</Label>
              <Input 
                id="githubLink" 
                name="githubLink"
                value={currentProject.githubLink}
                onChange={handleChange}
                placeholder="https://github.com/username/repo"
              />
            </div>
            
            <div>
              <Label htmlFor="liveLink">Live Link</Label>
              <Input 
                id="liveLink" 
                name="liveLink"
                value={currentProject.liveLink}
                onChange={handleChange}
                placeholder="https://projectname.com"
              />
            </div>
          </div>
          
          <div className="flex justify-end gap-3">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="bg-portfolio-blue hover:bg-blue-600"
              disabled={isLoading}
            >
              {isLoading ? "Saving..." : "Save Project"}
            </Button>
          </div>
        </form>
      ) : (
        <div className="space-y-6">
          {projects.map(project => (
            <div 
              key={project.id} 
              className="flex flex-col items-start gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:flex-row"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="h-32 w-32 rounded-md object-cover"
              />
              
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-portfolio-dark">{project.title}</h3>
                <p className="mb-2 text-sm text-portfolio-gray line-clamp-2">{project.description}</p>
                
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="rounded-full bg-portfolio-light px-3 py-1 text-xs text-portfolio-dark"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2 text-sm">
                  <span className="text-portfolio-gray">Live: </span>
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-portfolio-blue hover:underline"
                  >
                    {project.liveLink}
                  </a>
                </div>
                
                <div className="flex gap-2 text-sm">
                  <span className="text-portfolio-gray">GitHub: </span>
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-portfolio-blue hover:underline"
                  >
                    {project.githubLink}
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-blue-200 text-portfolio-blue hover:bg-blue-50"
                  onClick={() => handleEditProject(project)}
                >
                  <Edit size={16} className="mr-1" /> Edit
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-red-200 text-red-500 hover:bg-red-50"
                  onClick={() => handleDeleteProject(project.id)}
                >
                  <Trash2 size={16} className="mr-1" /> Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;
