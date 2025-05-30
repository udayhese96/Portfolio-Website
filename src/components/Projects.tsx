import { Github, ExternalLink, Eye } from "lucide-react";
import { useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "FairShare: Split Wise Clone",
    description: "Built a fully client-side app for group expense tracking, settlements, and balances. Used React Query for real-time UI sync and responsive state updates. Designed modular components for group creation, expenses, and settlements.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    technologies: ["React", "React Query", "localStorage", "CSS/SCSS", "Chart.js"],
    liveLink: "",
    githubLink: "https://github.com/udayhese96/FairShare_Splitwise_Clone",
    fullDescription: "FairShare is a comprehensive expense-sharing application designed to simplify financial management among friends, roommates, and groups. Built with React and utilizing React Query for state management, the app offers a seamless way to track shared expenses, calculate settlements, and maintain transparent financial records within groups. Users can create multiple groups, add expenses with detailed categorization, and see real-time updates of who owes what to whom. The application features an intuitive dashboard displaying balances, recent activities, and settlement suggestions. All data is stored locally using the browser's localStorage API, ensuring privacy while eliminating the need for server dependencies. The responsive design adapts seamlessly to both desktop and mobile devices, making it accessible anytime, anywhere."
  },
  {
    id: 2,
    title: "Mental Health Chatbot",
    description: "Created a mental health chatbot using Groq API for empathetic AI support. Processed PDFs using PyMuPDF + HuggingFace for offline knowledge. Used Langchain for memory, prompts, and flow control.",
    image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    technologies: ["Groq LLMs", "Langchain", "HuggingFace", "Flask", "PyMuPDF"],
    liveLink: "",
    githubLink: "https://github.com/udayhese96/Mental-Health-Chatbot",
    fullDescription: "The Mental Health Chatbot is an innovative AI-powered solution designed to provide accessible mental health support. Leveraging the advanced capabilities of the Groq API for natural language understanding, the chatbot delivers empathetic and contextually relevant responses to users seeking emotional support or mental health information. A key feature of this project is its ability to operate with offline knowledge by processing specialized mental health literature and resources. Using PyMuPDF for document parsing and HuggingFace transformers for text processing, the chatbot maintains a comprehensive knowledge base on mental health topics without requiring constant internet connectivity. The implementation utilizes Langchain for sophisticated conversation management, including memory retention across chat sessions, carefully crafted prompts to ensure supportive responses, and logical flow control to guide helpful interactions. The Flask-based backend ensures the system is lightweight and deployable in various environments, making mental health support more accessible to users regardless of location."
  },
  {
    id: 3,
    title: "Virtual Traffic Police",
    description: "Developed a real-time traffic system using YOLOv10 and OpenCV for vehicle detection. Used FFmpeg and Scikit-Video for live video stream analysis. Enabled model adaptability with PyTorch/TensorFlow for pattern-based control.",
    image: "/lovable-uploads/0ea351c1-0550-4c0c-abd6-5c6d4e6baa2f.png",
    technologies: ["YOLOv10", "OpenCV", "FFmpeg", "PyTorch", "TensorFlow"],
    liveLink: "",
    githubLink: "https://github.com/udayhese96/AI-Dynamic-Traffic-Light-Optimization-for-Heavy-Routes",
    fullDescription: "The Virtual Traffic Police system is an innovative computer vision application designed to optimize traffic flow through real-time monitoring and intelligent signal control. Leveraging YOLOv10's state-of-the-art object detection capabilities combined with OpenCV's image processing toolkit, the system accurately identifies and tracks vehicles across multiple lanes and intersections. The implementation utilizes FFmpeg and Scikit-Video for efficient handling of live video streams from multiple traffic cameras, enabling simultaneous analysis of traffic conditions across an entire network. What sets this system apart is its adaptability through machine learning — PyTorch and TensorFlow frameworks power the traffic pattern recognition models that learn from historical data and adjust signal timing accordingly. The system can identify traffic congestion patterns, predict potential bottlenecks, and dynamically adjust traffic light cycles to optimize vehicle flow. This smart infrastructure solution not only reduces wait times and fuel consumption but also minimizes the environmental impact of idle vehicles while improving overall transportation efficiency."
  },
  {
    id: 4,
    title: "Heart Disease Prediction System",
    description: "Designed and implemented a machine learning-based heart disease prediction system using KNN, SVM, Neural Networks, and Ensemble Learning techniques. Achieved enhanced predictive performance by integrating multiple algorithms.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    technologies: ["Machine Learning", "KNN", "SVM", "Neural Networks", "Python"],
    liveLink: "",
    githubLink: "https://github.com/udayhese96/Heart-Disease-Prediction",
    fullDescription: "The Heart Disease Prediction System is a sophisticated medical diagnostic tool that leverages machine learning to assess cardiovascular disease risk with high accuracy. This comprehensive system implements and compares multiple classification algorithms including K-Nearest Neighbors (KNN), Support Vector Machines (SVM), Neural Networks, and Ensemble Learning techniques to achieve reliable predictions based on patient data. The system processes various health parameters such as age, sex, cholesterol levels, blood pressure, and other clinical measurements to generate risk assessments. What distinguishes this project is its ensemble approach—rather than relying on a single algorithm, it strategically combines the strengths of multiple models to enhance predictive accuracy and reduce false negatives, which are particularly critical in medical diagnostics. The implementation includes a user-friendly interface for healthcare professionals to input patient data and receive clear, interpretable results. Extensive validation using established medical datasets ensures the system's reliability, making it a valuable tool for early detection and preventive healthcare strategies."
  },
  {
    id: 5,
    title: "Online Laptop Borrowal System",
    description: "Developed a dynamic and responsive web application using HTML, CSS, PHP, MySQL, and Bootstrap for managing laptop borrowals in a lab setting. Designed user-friendly interfaces and implemented secure login and data validation mechanisms.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
    technologies: ["HTML", "CSS", "PHP", "MySQL", "Bootstrap"],
    liveLink: "",
    githubLink: "https://github.com/udayhese96/Logbook-Register-for-College-Laptops",
    fullDescription: "The Online Laptop Borrowal System is a comprehensive resource management application designed to streamline the process of laptop lending and tracking in educational institutions. Developed using a stack of HTML, CSS, PHP, MySQL, and Bootstrap, this web application offers a complete solution for managing the entire borrowing lifecycle—from inventory management to user requests and returns. The system features role-based access control with separate interfaces for students, faculty, and administrators, each with appropriate permissions and capabilities. For students, the platform provides an intuitive interface to browse available devices, submit borrowing requests, and track return deadlines. Administrators benefit from a robust dashboard that displays real-time inventory status, borrowing analytics, and automated notification systems for overdue returns. The implementation includes comprehensive data validation to prevent input errors, secure authentication protocols to protect sensitive information, and detailed logging for audit purposes. The responsive design ensures the application works seamlessly across desktop and mobile devices, making it accessible to users regardless of their device preference."
  },
  {
    id: 6,
    title: "Dealership Strategy Planning Using RTO Market Intelligence—Telangana (2019–2025)",
    description: "Comprehensive data analysis project using Microsoft Power BI to analyze vehicle registration trends, market intelligence, and dealership strategy planning for Telangana state from 2019-2025. Features interactive dashboards with vehicle counts, registration patterns, and market insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    technologies: ["Microsoft Power BI", "Data Analysis", "Business Intelligence", "Dashboard Design"],
    liveLink: "",
    githubLink: "",
    driveLink: "https://drive.google.com/drive/folders/1U48onoLupYVA8Y1Qks5Nc4WbHImZWDkB?usp=sharing",
    screenshots: [
      "/lovable-uploads/618bf347-e00f-499e-b285-cb3f9de47f74.png",
      "/lovable-uploads/c02b1cd3-e15f-4d44-9220-973df049b070.png",
      "/lovable-uploads/fefed84c-e7d6-44de-bcbd-67cf41dd2ad6.png",
      "/lovable-uploads/be78ac18-90b1-404a-ad08-61d9c2e989f0.png",
      "/lovable-uploads/216908a1-4a64-42c2-a2e2-14124db16272.png",
      "/lovable-uploads/f1f7cd34-6fe3-49ac-a4e6-58da312ca76f.png",
      "/lovable-uploads/8546703c-052a-46e4-9120-0c284d769320.png",
      "/lovable-uploads/2c075cec-34dd-4472-ae9b-f4589ec58717.png",
      "/lovable-uploads/36ebd4ee-4ae7-47bb-a908-71887784211d.png",
      "/lovable-uploads/62eef464-a6a5-4ba3-bd4e-a435013a4642.png"
    ],
    fullDescription: `**Objective:** Provide insights from Telangana's vehicle registration data (Jan 2019–Mar 2025) to guide dealership expansion, sales, and service decisions.

**Approach & Methodology:**
• **Data Cleaning:** Removed invalid fuel entries (-1/null), standardized dates, cleaned region names. Created DAX fields: MonthYear, IsElectric, VehicleAge, InsuranceExpired.
• **Segmentation:** By Fuel Type, Vehicle Class, Maker & Model, and Region (from OfficeCd).
• **Tools Used:** Power BI Desktop (visuals), Power Query & DAX (data shaping).

**Executive Summary:** This report leverages vehicle registration data from various RTOs in Telangana to inform dealership strategy decisions. It presents insights into fuel type trends, vehicle class distributions, insurance status, vehicle brand share, and electric vehicle adoption. These insights guide dealership placement, inventory optimization, and strategic partnerships.

**Detailed KPIs for Strategic Planning:**

**1. Total Vehicle Registrations by Year and Fuel Type**
• **Definition:** Measures the number of vehicles registered annually, segmented by fuel type.
• **Insight:** A noticeable increase in battery and electric vehicles in recent years. Traditional fuels like petrol and diesel still dominate but show signs of tapering growth.
• **Application:** Helps forecast demand for EV-compatible infrastructure and identify regions for electric vehicle (EV) focused showrooms or services.

**2. Manufacturer Market Share**
• **Definition:** Share of vehicle registrations attributed to each vehicle manufacturer.
• **Insight:** Hero MotoCorp, Honda, and Bajaj Auto lead in registration volumes, indicating strong brand presence. Tata Motors and Maruti Suzuki are also significant players.
• **Application:** Identify which OEM partnerships will be most beneficial for dealership profitability and align with local market preferences.

**3. Vehicle Class Distribution**
• **Definition:** Share of vehicle types (e.g., Motorcycles, Goods Carriers, Tractors, Autos).
• **Insight:** Over 70% of registrations are motorcycles and scooters, indicating a 2-wheeler dominated market. Notable representation of goods and passenger vehicles, useful for commercial dealerships.
• **Application:** Optimize showroom inventory—prioritize two-wheelers and light commercial vehicles in key markets.

**4. Insurance Expiry Status**
• **Definition:** Percentage of vehicles with active vs. expired insurance.
• **Insight:** Nearly 54% of vehicles have expired insurance.
• **Application:** Opportunity for dealerships to offer value-added services like insurance renewal, servicing plans, and loyalty programs.

**5. Electric Vehicle (EV) Adoption Rate**
• **Definition:** Count of registered electric vehicles over time.
• **Insight:** Sharp upward trend in electric vehicle adoption post-2021, especially in urban RTO regions. Correlates with national EV policies and consumer awareness.
• **Application:** Plan EV-specific dealerships or service centers in high-growth urban zones; invest in EV technician training.

**6. Second Vehicle Ownership Indicator**
• **Definition:** Count of vehicles owned as a second vehicle (Yes/No).
• **Insight:** Over 91% are first vehicles, indicating potential for upsell or second vehicle promotions.
• **Application:** Target first-time buyers with entry-level models; introduce loyalty programs or upgrade incentives for existing customers.

**Strategic Recommendations:**
1. **Expand Dealerships** in RTA Zones with rising EV and bike registrations—focus on Adilabad, Hanumakonda, and Bhadrachalam.
2. **Stock Inventory According to Demand**—2-wheelers and small commercial vehicles in rural and semi-urban areas.
3. **Form EV-Centric Partnerships**—with Tata, Ather, and TVS for electric mobility expansion.
4. **Integrate Value-Added Services**—insurance, finance, AMC plans to tap into vehicles with expired policies.`
  }
];

const ProjectCard = ({ project }: { project: typeof projectsData[0] }) => {
  const [showKnowMore, setShowKnowMore] = useState(false);

  return (
    <>
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
              {project.githubLink && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-portfolio-dark hover:text-portfolio-blue transition-colors"
                  title="View GitHub Repository"
                >
                  <Github size={20} />
                </a>
              )}
              {project.liveLink && (
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-portfolio-dark hover:text-portfolio-blue transition-colors"
                  title="View Live Demo"
                >
                  <ExternalLink size={20} />
                </a>
              )}
              {project.driveLink && (
                <a 
                  href={project.driveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-portfolio-dark hover:text-portfolio-blue transition-colors flex items-center"
                  title="View on Google Drive"
                >
                  <img src="/lovable-uploads/c60e6416-8a97-499c-ba49-d5fb5679ad39.png" alt="Google Drive" className="w-5 h-5" />
                </a>
              )}
            </div>
            
            {/* Only show Know More for the Dealership project */}
            {project.id === 6 && project.screenshots && project.screenshots.length > 0 && (
              <button
                onClick={() => setShowKnowMore(true)}
                className="text-portfolio-blue hover:text-blue-600 transition-colors flex items-center gap-1 text-sm font-medium"
              >
                <Eye size={16} />
                Know More
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Know More Modal - Only for Dealership project */}
      {showKnowMore && project.id === 6 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-6xl max-h-[90vh] overflow-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-portfolio-dark">{project.title}</h3>
                <button
                  onClick={() => setShowKnowMore(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="prose max-w-none mb-6 text-portfolio-gray">
                {project.fullDescription.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <h4 key={index} className="text-lg font-bold text-portfolio-dark mt-4 mb-2">
                        {paragraph.replace(/\*\*/g, '')}
                      </h4>
                    );
                  } else if (paragraph.startsWith('•')) {
                    return (
                      <ul key={index} className="list-disc ml-6 mb-2">
                        {paragraph.split('\n').map((item, itemIndex) => (
                          <li key={itemIndex} className="mb-1">
                            {item.replace('• ', '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/<strong>(.*?)<\/strong>/g, (match, p1) => p1)}
                          </li>
                        ))}
                      </ul>
                    );
                  } else if (paragraph.match(/^\d+\./)) {
                    return (
                      <ol key={index} className="list-decimal ml-6 mb-2">
                        {paragraph.split('\n').map((item, itemIndex) => (
                          <li key={itemIndex} className="mb-1">
                            {item.replace(/^\d+\.\s*/, '').replace(/\*\*(.*?)\*\*/g, (match, p1) => p1)}
                          </li>
                        ))}
                      </ol>
                    );
                  } else {
                    return (
                      <p key={index} className="mb-3">
                        {paragraph.replace(/\*\*(.*?)\*\*/g, (match, p1) => p1)}
                      </p>
                    );
                  }
                })}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {project.screenshots.map((screenshot, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src={screenshot} 
                      alt={`${project.title} screenshot ${index + 1}`} 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                ))}
              </div>

              {project.driveLink && (
                <div className="mt-6 flex justify-center">
                  <a 
                    href={project.driveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-portfolio-blue text-white px-6 py-3 rounded-lg font-medium transition-all hover:bg-blue-600 flex items-center gap-2"
                  >
                    <img src="/lovable-uploads/c60e6416-8a97-499c-ba49-d5fb5679ad39.png" alt="Google Drive" className="w-5 h-5" />
                    View Full Project on Drive
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
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
export { projectsData };
