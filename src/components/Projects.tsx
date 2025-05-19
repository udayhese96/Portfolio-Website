
import { Github, ExternalLink } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "FairShare: Split Wise Clone",
    description: "Built a fully client-side app for group expense tracking, settlements, and balances. Used React Query for real-time UI sync and responsive state updates. Designed modular components for group creation, expenses, and settlements.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    technologies: ["React", "React Query", "localStorage", "CSS/SCSS", "Chart.js"],
    liveLink: "",
    githubLink: "https://github.com/udayhese96/FairShare_Splitwise_Clone",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
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
    screenshots: [
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    fullDescription: "The Mental Health Chatbot is an innovative AI-powered solution designed to provide accessible mental health support. Leveraging the advanced capabilities of the Groq API for natural language understanding, the chatbot delivers empathetic and contextually relevant responses to users seeking emotional support or mental health information. A key feature of this project is its ability to operate with offline knowledge by processing specialized mental health literature and resources. Using PyMuPDF for document parsing and HuggingFace transformers for text processing, the chatbot maintains a comprehensive knowledge base on mental health topics without requiring constant internet connectivity. The implementation utilizes Langchain for sophisticated conversation management, including memory retention across chat sessions, carefully crafted prompts to ensure supportive responses, and logical flow control to guide helpful interactions. The Flask-based backend ensures the system is lightweight and deployable in various environments, making mental health support more accessible to users regardless of location."
  },
  {
    id: 3,
    title: "Virtual Traffic Police",
    description: "Developed a real-time traffic system using YOLOv10 and OpenCV for vehicle detection. Used FFmpeg and Scikit-Video for live video stream analysis. Enabled model adaptability with PyTorch/TensorFlow for pattern-based control.",
    image: "https://images.unsplash.com/photo-1565609697598-079c0ba30313?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    technologies: ["YOLOv10", "OpenCV", "FFmpeg", "PyTorch", "TensorFlow"],
    liveLink: "",
    githubLink: "https://github.com/udayhese96/AI-Dynamic-Traffic-Light-Optimization-for-Heavy-Routes",
    screenshots: [
      "https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1606768666853-403c90a981ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
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
    screenshots: [
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
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
    screenshots: [
      "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
      "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    fullDescription: "The Online Laptop Borrowal System is a comprehensive resource management application designed to streamline the process of laptop lending and tracking in educational institutions. Developed using a stack of HTML, CSS, PHP, MySQL, and Bootstrap, this web application offers a complete solution for managing the entire borrowing lifecycle—from inventory management to user requests and returns. The system features role-based access control with separate interfaces for students, faculty, and administrators, each with appropriate permissions and capabilities. For students, the platform provides an intuitive interface to browse available devices, submit borrowing requests, and track return deadlines. Administrators benefit from a robust dashboard that displays real-time inventory status, borrowing analytics, and automated notification systems for overdue returns. The implementation includes comprehensive data validation to prevent input errors, secure authentication protocols to protect sensitive information, and detailed logging for audit purposes. The responsive design ensures the application works seamlessly across desktop and mobile devices, making it accessible to users regardless of their device preference."
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
        
        <div className="flex justify-end items-center">
          <div className="flex gap-3">
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-portfolio-dark hover:text-portfolio-blue transition-colors"
            >
              <Github size={20} />
            </a>
            {project.liveLink && (
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-portfolio-dark hover:text-portfolio-blue transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
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
export { projectsData };
