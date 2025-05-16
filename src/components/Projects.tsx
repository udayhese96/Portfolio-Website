
import { ArrowRight, Github, ExternalLink } from "lucide-react";

const projectsData = [
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
];

const ProjectCard = ({ project }: { project: typeof projectsData[0] }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold font-poppins text-portfolio-dark mb-2">
          {project.title}
        </h3>
        
        <p className="text-portfolio-gray mb-4 text-sm line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs bg-portfolio-light text-portfolio-dark px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-portfolio-dark hover:text-portfolio-blue transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-portfolio-dark hover:text-portfolio-blue transition-colors"
            >
              <ExternalLink size={20} />
            </a>
          </div>
          
          <a 
            href={project.liveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-portfolio-blue font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
          >
            View Project <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">My recent work</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
