
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">My professional journey</p>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 border-l-2 border-portfolio-gray/20">
            <div className="absolute -left-3 top-0 bg-portfolio-blue rounded-full p-1">
              <Briefcase size={20} className="text-white" />
            </div>
            
            <div className="mb-12">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-bold text-portfolio-dark">Software Development Intern – Group Project</h3>
                <span className="text-sm text-portfolio-gray">Jan 2025 – May 2025</span>
              </div>
              
              <div className="flex items-center mb-4">
                <h4 className="text-md font-medium text-portfolio-blue">S V Krishi Nature</h4>
                <span className="mx-2 text-portfolio-gray">•</span>
                <span className="text-sm text-portfolio-gray">Pune, India (Remote)</span>
              </div>
              
              <ul className="list-disc pl-5 space-y-2 text-portfolio-gray">
                <li>
                  Collaborated as a team of 5 to design and develop an integrated system comprising a responsive company website,
                  a staff management web application, and a mobile Android app for directors.
                </li>
                <li>
                  Engineered scalable modules using Flask (backend), React.js (frontend), and Google Cloud APIs to support
                  real-time data operations, secure document handling, and WhatsApp-based communication.
                </li>
                <li>
                  Enhanced operational efficiency and customer engagement by automating manual workflows and introducing
                  chatbot support, multilingual readiness, and modular architecture for future AI-based features.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
