
import { createContext, useContext, ReactNode, useState, useEffect } from "react";

// Define types for our portfolio data
export interface HeroData {
  name: string;
  bio: string;
  profileImage: string;
  githubLink: string;
  linkedinLink: string;
}

export interface AboutData {
  aboutImage: string;
  aboutText1: string;
  aboutText2: string;
  yearsExperience: string;
  projectsCompleted: string;
  companiesWorked: string;
  resumeLink: string;
}

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
}

export interface ContactData {
  location: string;
  email: string;
}

export interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  date: string;
  isRead: boolean;
}

export interface PortfolioData {
  hero: HeroData;
  about: AboutData;
  projects: ProjectData[];
  contact: ContactData;
  messages: Message[];
}

// Initial default data
const defaultData: PortfolioData = {
  hero: {
    name: "Full Stack Developer",
    bio: "Hi, I'm a passionate student developer. I enjoy building web applications and solving complex problems with code.",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    githubLink: "https://github.com",
    linkedinLink: "https://linkedin.com"
  },
  about: {
    aboutImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    aboutText1: "I'm a Computer Science student passionate about creating robust, user-friendly web applications. With a strong foundation in both frontend and backend technologies, I enjoy the full process of bringing ideas to life through code.",
    aboutText2: "My journey in programming began during my first year of college, and since then, I've been constantly learning and expanding my skillset. I'm particularly interested in React, Node.js, and exploring the potential of AI integration in web applications.",
    yearsExperience: "2+",
    projectsCompleted: "10+",
    companiesWorked: "3+",
    resumeLink: "/resume.pdf"
  },
  projects: [
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
  ],
  contact: {
    location: "New York, USA",
    email: "example@example.com"
  },
  messages: [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      message: "Hi, I'm interested in hiring you for a freelance project. Can we schedule a call to discuss the details?",
      date: "2023-10-15",
      isRead: true
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      message: "Hello, I came across your portfolio and I'm really impressed with your work. I have a small project that I'd like you to work on. Please let me know if you're available.",
      date: "2023-10-12",
      isRead: false
    },
    {
      id: 3,
      name: "Alex Johnson",
      email: "alex@example.com",
      message: "I'd like to connect and discuss potential collaboration opportunities. I think your skills would be a great fit for our upcoming project.",
      date: "2023-10-10",
      isRead: false
    }
  ]
};

// Create context
interface PortfolioContextType {
  portfolioData: PortfolioData;
  updateHero: (data: HeroData) => void;
  updateAbout: (data: AboutData) => void;
  updateProject: (data: ProjectData) => void;
  addProject: (data: Omit<ProjectData, "id">) => void;
  deleteProject: (id: number) => void;
  updateContact: (data: ContactData) => void;
  addMessage: (message: Omit<Message, "id" | "date" | "isRead">) => void;
  markMessageAsRead: (id: number) => void;
  deleteMessage: (id: number) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

// Provider component
export const PortfolioProvider = ({ children }: { children: ReactNode }) => {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(defaultData);

  // Load data from localStorage on initial render
  useEffect(() => {
    const savedData = localStorage.getItem("portfolioData");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setPortfolioData(parsedData);
      } catch (error) {
        console.error("Error parsing portfolio data from localStorage:", error);
      }
    }
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("portfolioData", JSON.stringify(portfolioData));
  }, [portfolioData]);

  const updateHero = (data: HeroData) => {
    setPortfolioData(prev => ({
      ...prev,
      hero: data
    }));
  };

  const updateAbout = (data: AboutData) => {
    setPortfolioData(prev => ({
      ...prev,
      about: data
    }));
  };

  const updateProject = (data: ProjectData) => {
    setPortfolioData(prev => ({
      ...prev,
      projects: prev.projects.map(project => 
        project.id === data.id ? data : project
      )
    }));
  };

  const addProject = (data: Omit<ProjectData, "id">) => {
    const newProject = {
      ...data,
      id: Date.now()
    };
    
    setPortfolioData(prev => ({
      ...prev,
      projects: [...prev.projects, newProject]
    }));
  };

  const deleteProject = (id: number) => {
    setPortfolioData(prev => ({
      ...prev,
      projects: prev.projects.filter(project => project.id !== id)
    }));
  };

  const updateContact = (data: ContactData) => {
    setPortfolioData(prev => ({
      ...prev,
      contact: data
    }));
  };

  const addMessage = (messageData: Omit<Message, "id" | "date" | "isRead">) => {
    const newMessage = {
      ...messageData,
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      isRead: false
    };
    
    setPortfolioData(prev => ({
      ...prev,
      messages: [newMessage, ...prev.messages]
    }));
  };

  const markMessageAsRead = (id: number) => {
    setPortfolioData(prev => ({
      ...prev,
      messages: prev.messages.map(message => 
        message.id === id ? { ...message, isRead: true } : message
      )
    }));
  };

  const deleteMessage = (id: number) => {
    setPortfolioData(prev => ({
      ...prev,
      messages: prev.messages.filter(message => message.id !== id)
    }));
  };

  return (
    <PortfolioContext.Provider
      value={{
        portfolioData,
        updateHero,
        updateAbout,
        updateProject,
        addProject,
        deleteProject,
        updateContact,
        addMessage,
        markMessageAsRead,
        deleteMessage
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

// Custom hook for using portfolio context
export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
};
