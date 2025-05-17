import { ArrowRight, Github, ExternalLink, Database, Code, Flask, FileCode } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "FairShare: Split Wise Clone",
    description: "Built a fully client-side app for group expense tracking, settlements, and balances. Used React Query for real-time UI sync and responsive state updates. Designed modular components for group creation, expenses, and settlements.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    technologies: ["React", "React Query", "localStorage", "CSS/SCSS", "Chart.js"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/udayhese96"
  },
  {
    id: 2,
    title: "Mental Health Chatbot",
    description: "Created a mental health chatbot using Groq API for empathetic AI support. Processed PDFs using PyMuPDF + HuggingFace for offline knowledge. Used Langchain for memory, prompts, and flow control.",
    image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    technologies: ["Groq LLMs", "Langchain", "HuggingFace", "Flask", "PyMuPDF"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/udayhese96"
  },
  {
    id: 3,
    title: "Virtual Traffic Police",
    description: "Developed a real-time traffic system using YOLOv10 and OpenCV for vehicle detection. Used FFmpeg and Scikit-Video for live video stream analysis. Enabled model adaptability with PyTorch/TensorFlow for pattern-based control.",
    image: "https://images.unsplash.com/photo-1565609697598-079c0ba30313?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    technologies: ["YOLOv10", "OpenCV", "FFmpeg", "PyTorch", "TensorFlow"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/udayhese96"
  },
  {
    id: 4,
    title: "Heart Disease Prediction System",
    description: "Designed and implemented a machine learning-based heart disease prediction system using KNN, SVM, Neural Networks, and Ensemble Learning techniques. Achieved enhanced predictive performance by integrating multiple algorithms.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    technologies: ["Machine Learning", "KNN", "SVM", "Neural Networks", "Python"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/udayhese96"
  },
  {
    id: 5,
    title: "Online Laptop Borrowal System",
    description: "Developed a dynamic and responsive web application using HTML, CSS, PHP, MySQL, and Bootstrap for managing laptop borrowals in a lab setting. Designed user-friendly interfaces and implemented secure login and data validation mechanisms.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
    technologies: ["HTML", "CSS", "PHP", "MySQL", "Bootstrap"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/udayhese96"
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
