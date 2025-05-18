
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { projectsData } from "../components/Projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.id === Number(id));
  
  if (!project) {
    return (
      <>
        <Navbar />
        <div className="min-h-[70vh] flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-portfolio-dark mb-4">Project Not Found</h1>
          <p className="text-portfolio-gray mb-6">The project you are looking for doesn't exist.</p>
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Navbar />
      <main className="py-20">
        <div className="container mx-auto px-6">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-portfolio-gray hover:text-portfolio-blue mb-8">
            <ArrowLeft size={18} />
            Back to Projects
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-portfolio-dark mb-4">{project.title}</h1>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="text-sm bg-portfolio-light text-portfolio-dark px-4 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="mb-12">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-[400px] object-cover rounded-xl mb-6"
              />
              
              <div className="prose max-w-none">
                <p className="text-lg text-portfolio-gray">
                  {project.fullDescription}
                </p>
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-portfolio-dark mb-6">Project Screenshots</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.screenshots.map((screenshot, index) => (
                  <div key={index} className="rounded-xl overflow-hidden shadow-md">
                    <img 
                      src={screenshot} 
                      alt={`${project.title} screenshot ${index + 1}`} 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center gap-6">
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <Github size={18} /> View on GitHub
              </a>
              
              {project.liveLink && (
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-portfolio-dark text-white px-6 py-3 rounded-lg font-medium transition-all hover:bg-gray-800 flex items-center gap-2"
                >
                  <ExternalLink size={18} /> View Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetails;
