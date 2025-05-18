
import { Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const experienceData = [
  {
    id: 1,
    title: "Software Development Intern – Group Project",
    company: "S V Krishi Nature",
    location: "Pune, India (Remote)",
    startDate: "Jan 2025",
    endDate: "May 2025",
    description: [
      "Collaborated as a team of 5 to design and develop an integrated system comprising a responsive company website, a staff management web application, and a mobile Android app for directors.",
      "Engineered scalable modules using Flask (backend), React.js (frontend), and Google Cloud APIs to support real-time data operations, secure document handling, and WhatsApp-based communication.",
      "Enhanced operational efficiency and customer engagement by automating manual workflows and introducing chatbot support, multilingual readiness, and modular architecture for future AI-based features."
    ],
    fullDescription: "During my internship at S V Krishi Nature, I was part of an ambitious project to digitally transform agricultural operations through innovative software solutions. Working within a team of five developers, I played a key role in designing and implementing a comprehensive digital ecosystem that connected various stakeholders in the agricultural supply chain.\n\nThe project involved creating three interconnected applications: a public-facing company website, an internal staff management web application, and a dedicated mobile application for company directors. Each component was designed to address specific business needs while maintaining data consistency across platforms.\n\nAs a full-stack developer, I focused on building scalable backend services using Flask that could handle varying loads and provide reliable API endpoints for both web and mobile applications. The frontend implementations utilized React.js to create responsive and intuitive user interfaces, ensuring a seamless experience across devices.\n\nOne of my significant contributions was integrating Google Cloud services for secure document storage and retrieval, implementing a real-time notification system, and developing WhatsApp-based communication channels to reach farmers with limited internet connectivity.\n\nThe project successfully improved operational efficiency by automating previously manual workflows such as inventory management, order processing, and field staff coordination. Customer engagement metrics improved significantly through the introduction of multilingual support and an AI-powered chatbot that could address common queries about organic farming practices and product information.\n\nThe modular architecture I helped design allows for future expansion, particularly in implementing machine learning features for crop prediction and personalized recommendations based on soil conditions and climate data.",
    images: [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    technologies: ["Flask", "React.js", "Google Cloud", "Android", "WhatsApp API", "Python", "JavaScript", "SQL", "XML", "Bootstrap"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">My professional journey</p>
        
        <div className="max-w-3xl mx-auto">
          {experienceData.map((experience) => (
            <div key={experience.id} className="relative pl-8 border-l-2 border-portfolio-gray/20">
              <div className="absolute -left-3 top-0 bg-portfolio-blue rounded-full p-1">
                <Briefcase size={20} className="text-white" />
              </div>
              
              <div className="mb-12">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-portfolio-dark">{experience.title}</h3>
                  <span className="text-sm text-portfolio-gray">{experience.startDate} – {experience.endDate}</span>
                </div>
                
                <div className="flex items-center mb-4">
                  <h4 className="text-md font-medium text-portfolio-blue">{experience.company}</h4>
                  <span className="mx-2 text-portfolio-gray">•</span>
                  <span className="text-sm text-portfolio-gray">{experience.location}</span>
                </div>
                
                <ul className="list-disc pl-5 space-y-2 text-portfolio-gray">
                  {experience.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                
                <div className="mt-6">
                  <Link 
                    to={`/experience/${experience.id}`}
                    className="inline-flex items-center gap-1 text-portfolio-blue hover:text-blue-700 transition-colors font-medium"
                  >
                    View Project Details <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
export { experienceData };
