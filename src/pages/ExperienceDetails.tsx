
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { experienceData } from "../components/Experience";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ExperienceDetails = () => {
  const { id } = useParams<{ id: string }>();
  const experience = experienceData.find(exp => exp.id === Number(id));
  
  if (!experience) {
    return (
      <>
        <Navbar />
        <div className="min-h-[70vh] flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-portfolio-dark mb-4">Experience Not Found</h1>
          <p className="text-portfolio-gray mb-6">The experience you are looking for doesn't exist.</p>
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
          <Link to="/#experience" className="inline-flex items-center gap-2 text-portfolio-gray hover:text-portfolio-blue mb-8">
            <ArrowLeft size={18} />
            Back to Experience
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="text-sm text-portfolio-gray">{experience.startDate} – {experience.endDate}</span>
              <h1 className="text-4xl font-bold text-portfolio-dark mb-2">{experience.title}</h1>
              <div className="flex items-center mb-6">
                <h2 className="text-xl font-medium text-portfolio-blue">{experience.company}</h2>
                <span className="mx-2 text-portfolio-gray">•</span>
                <span className="text-portfolio-gray">{experience.location}</span>
              </div>
            </div>
            
            <div className="mb-12 whitespace-pre-line text-portfolio-gray">
              {experience.fullDescription}
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-portfolio-dark mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {experience.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="text-sm bg-portfolio-light text-portfolio-dark px-4 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-portfolio-dark mb-6">Project Images</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {experience.images.map((image, index) => (
                  <div key={index} className="rounded-xl overflow-hidden shadow-md">
                    <img 
                      src={image} 
                      alt={`${experience.company} project ${index + 1}`} 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-portfolio-dark mb-6">Key Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-3 text-portfolio-gray">
                {experience.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ExperienceDetails;
