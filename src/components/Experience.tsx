
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
      "Developed a comprehensive digital solution for customer management at SV Krishi Nature, pioneers of the Guardneer Water Conditioner technology serving 7,000+ customers nationwide since 2007.",
      "Engineered a three-part system: responsive company website, staff management web application, and directors' Android app using Flask (backend), React.js (frontend), and Google Cloud APIs.",
      "Implemented features including Google Drive integration, WhatsApp-based communication, real-time data operations, chatbot support, and scalable architecture for future AI integration."
    ],
    fullDescription: "This project focused on the development and deployment of a comprehensive digital solution tailored for customer management at SV Krishi Nature, a pioneering company known for its revolutionary Guardneer Water Conditioner—the world's first of its kind water treatment solution for hard water challenges. SV Krishi Nature has served over 7,000 satisfied customers nationwide since 2007, earning a distinguished reputation and numerous awards for its innovation. Its water conditioners operate without chemicals, salt, or maintenance and are easy to install, offering a sustainable and cost-effective approach for agriculture, industry, and domestic use.\n\nIn alignment with the company's mission to deliver high-quality, user-friendly solutions, the system integrates three essential components: a responsive customer engagement website, a web-based staff management application, and a mobile Android app designed for directors. The website offers comprehensive product information, chatbot integration, and direct customer inquiry functionality. The staff application supports efficient customer data handling, status tracking, and marketing coordination. The director's app enables real-time access to customer data, business insights, and communication tools.\n\nUtilizing modern technologies including Flask, React.js, and Google Cloud APIs, the system provides a seamless and secure platform for real-time operations. Features like Google Drive document storage and WhatsApp integration further enhance communication and data accessibility. The platform is modular and scalable, prepared for future advancements such as AI-based analytics and multilingual support.\n\nBy replacing outdated manual processes with automated workflows, this system not only streamlines internal operations but also enhances the overall customer experience. Through this initiative, SV Krishi Nature continues to uphold its commitment to technological excellence and environmental responsibility, setting new standards in customer relationship management within the agritech domain.",
    images: [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    technologies: ["Flask", "React.js", "Python", "JavaScript", "Google Cloud APIs", "SQLite", "Android Studio", "WhatsApp Business API", "Bootstrap", "REST API", "OAuth 2.0", "JWT", "Firebase"]
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
