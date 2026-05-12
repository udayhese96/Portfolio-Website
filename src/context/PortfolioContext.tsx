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
  liveLink?: string;
  githubLink?: string;
  driveLink?: string;
  screenshots?: string[];
  fullDescription?: string;
}

export interface ContactData {
  location: string;
  email: string;
  phone?: string;
}

export interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  date: string;
  isRead: boolean;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  readTime: string;
  headerLink?: string;
  headerLinkLabel?: string;
  headerLinkIcon?: "award" | "link" | "github";
  secondaryLink?: string;
  secondaryLinkLabel?: string;
  secondaryLinkIcon?: "award" | "link" | "github";
}

export interface PortfolioData {
  hero: HeroData;
  about: AboutData;
  projects: ProjectData[];
  contact: ContactData;
  messages: Message[];
  blogPosts: BlogPost[];
}

// Initial default data
const defaultData: PortfolioData = {
  hero: {
    name: "Full Stack Developer",
    bio: "Hi, I'm a passionate developer. I enjoy building web applications and solving complex problems with code.",
    profileImage: "/lovable-uploads/a7869fd3-1e2d-406d-b4f0-1f3b8ee9d47b.png",
    githubLink: "https://github.com/udayhese96",
    linkedinLink: "https://www.linkedin.com/in/udayhese/"
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
      githubLink: "https://github.com/udayhese96"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A Kanban-style task management application with drag-and-drop functionality, user authentication, and real-time updates using WebSockets.",
      image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/udayhese96"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application that provides current weather data and forecasts for any location. Built with React and integrated with the OpenWeatherMap API.",
      image: "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["React", "RESTful API", "CSS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/udayhese96"
    },
    {
      id: 4,
      title: "AlgoVault",
      description: "AlgoVault is a modern, premium web platform designed to be your personal Data Structures and Algorithms (DSA) workspace.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      technologies: ["Next.js", "Tailwind CSS", "Supabase", "Monaco Editor", "Judge0"],
      liveLink: "https://algo-vault-seven.vercel.app",
      githubLink: "https://github.com/udayhese96/AlgoVault",
      fullDescription: `AlgoVault is a modern, premium web platform designed to be your personal Data Structures and Algorithms (DSA) workspace. It provides a distraction-free, LeetCode-inspired environment to organize your coding problems, write algorithmic strategies, and execute code directly in your browser.

## Features ✨

* **Analytics Dashboard:** Premium LeetCode-inspired dashboard with SVG donut charts for problem-solving stats, an activity heatmap, and global streak tracking to gamify your learning experience.
* **Smart Organization:** Group your questions into custom folders and tag them by difficulty (Easy, Medium, Hard). Includes a VS Code-inspired sidebar explorer for quick folder/question management.
* **Workspace Control Bar:** Real-time text-based search, difficulty level filtering, and chronological sorting to maintain a distraction-free coding workspace.
* **Full-Featured Code Workspace:** Professional IDE layout powered by Monaco Editor with syntax highlighting and auto-completion.
* **Live Code Execution:** Securely run **Python**, **Java** (with auto 'Main' class conversion), and **C++** code directly in the browser via the Judge0 execution engine.
* **Dual Output Terminal:** View live compiler results (memory, execution time, and errors) and optionally copy/save manual outputs to your database.
* **Rich Note-taking:** Document problem statements and write down your personal solving approaches/time complexities.
* **Secure Authentication:** Robust passwordless login and account recovery via a custom OTP (One-Time Password) system integrated with Supabase.
* **Modern UI:** Built with a stunning dark/light theme toggle, glassmorphic effects, and highly responsive design across mobile and desktop.

## Tech Stack 🛠

* **Framework:** Next.js 16 (App Router)
* **Styling:** Tailwind CSS + Custom CSS (Glassmorphism & Gradients)
* **Database & Auth:** Supabase (PostgreSQL & OTP Authentication)
* **Code Editor:** Monaco Editor (\`@monaco-editor/react\`)
* **Code Execution API:** Judge0 Community Edition

*Built as a high-performance workspace to master Data Structures and Algorithms. Completed in May 2026.*`
    }
  ],
  contact: {
    location: "Pune, India",
    email: "udayhese0101@gmail.com",
    phone: "+91-8624012250"
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
  ],
  blogPosts: [
    {
      id: 1,
      slug: "building-ai-cloud-skills-google-cloud-2026",
      title: "Building AI & Cloud Skills with Google Cloud Technical Series (OnBoard Edition 2026)",
      excerpt: "I recently completed the Google Cloud Asia Pacific – Cloud Technical Series (OnBoard Edition 2026). This program helped me strengthen my understanding of AI, cloud computing, and modern development practices.",
      date: "2026-02-14",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      headerLink: "https://googlecloudapac.accredible.com/77dcae2d-86f0-4c48-b769-e9f2edec0327#acc.AqH0mzk2",
      headerLinkLabel: "Certificate Link",
      headerLinkIcon: "award",
      content: `I recently completed the Google Cloud Asia Pacific – Cloud Technical Series (OnBoard Edition 2026). This program helped me strengthen my understanding of AI, cloud computing, and modern development practices through technical sessions and hands-on labs.

Below are the key things I learned:

## 1. Generative AI and AI Agents

- Gained understanding of how Generative AI models are used in real-world applications.
- Learned how AI agents can automate workflows and assist in building intelligent systems.
- Understood how AI is transforming application development and problem-solving approaches.
- Realized the importance of learning how to use AI effectively rather than just depending on it.

## 2. Google AI Studio

- Explored Google AI Studio for experimenting with foundation models.
- Learned how to prototype AI-based applications quickly.
- Understood how AI tools simplify testing and deployment processes.

## 3. Google Workspace & Workflow Tools

- Learned about workflow automation tools within the Google ecosystem.
- Understood how low-code tools improve productivity.
- Explored how collaboration and cloud-based tools enhance team efficiency.

## 4. Cloud Computing & App Development

- Strengthened knowledge of cloud-native application development.
- Learned infrastructure and DevOps fundamentals.
- Gained insights into scalable system design.
- Improved understanding of data engineering basics.

## 5. Hands-On Labs Experience

- Practiced deploying cloud services.
- Applied concepts learned in technical sessions.
- Improved practical implementation skills.

My Key Takeaway

This program helped me understand how rapidly the technology landscape is changing due to AI and cloud computing. It reinforced the importance of continuous learning and regularly upgrading skills to stay relevant in the industry.

Going forward, I will continue learning and building projects in:

- AI-powered applications
- Cloud-native architectures
- Agent-based systems
- Data-driven development`
    },
    {
      id: 2,
      slug: "embedmail-ai-modern-email-studio",
      title: "EmbedMail AI – A Modern AI-Powered Email Studio with Gmail Integration",
      excerpt: "EmbedMail AI is a modern Email Studio application that allows users to create, edit, and send HTML emails using their own Gmail account through secure OAuth 2.0 authentication.",
      date: "2026-01-15",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      headerLink: "https://embedmail-ai.vercel.app/",
      headerLinkLabel: "Live Application",
      headerLinkIcon: "link",
      secondaryLink: "https://github.com/udayhese96/AI-Embedded-Mailer",
      secondaryLinkLabel: "GitHub Repository",
      secondaryLinkIcon: "github",
      content: `I developed **EmbedMail AI**, a modern Email Studio application that allows users to create, edit, and send HTML emails using their own Gmail account through secure OAuth 2.0 authentication.

This project was built to simplify email composition while maintaining strong security practices and intelligent content handling. Along with secure Gmail integration, I implemented a Hybrid RAG (Retrieval-Augmented Generation) pipeline to enhance email content suggestions and template retrieval.

## Core Features

### 1. Secure Gmail OAuth 2.0 Integration

- Users can connect their Gmail account securely.
- Authentication is handled using Google OAuth 2.0.
- Access tokens are securely managed in the backend.
- Redirect URI configuration ensures safe authentication flow.

### 2. HTML Email Composer

- Create fully customizable HTML emails.
- Edit and format email content.
- Enter recipient, subject, and body in a structured interface.
- Send emails directly using Gmail API.

### 3. AI-Powered RAG Pipeline (Hybrid Search)

- Implemented Retrieval-Augmented Generation system.
- Hybrid Search combining:
  - Dense vector search (semantic similarity)
  - Keyword-based search (exact match relevance)
- Improved template and context retrieval.
- More accurate and context-aware email suggestions.

### 4. Full-Stack Architecture

**Frontend:**

- React + TypeScript
- Component-based UI structure
- Authentication state management
- API integration

**Backend:**

- FastAPI (Python)
- Gmail API integration
- OAuth handling
- Environment-based configuration
- Secure encryption using Fernet

## Technologies Used

- React
- TypeScript
- FastAPI
- Python
- Gmail API
- OAuth 2.0
- Vector embeddings
- Hybrid Search (Semantic + Keyword Retrieval)
- Environment variable configuration
- Vercel (Deployment)

## What It Took to Build This

Building this application required:

- Understanding OAuth 2.0 authorization flow
- Configuring Google Cloud Console credentials
- Managing secure environment variables
- Designing REST APIs with FastAPI
- Implementing frontend-backend communication
- Handling authentication sessions
- Integrating AI-based retrieval systems
- Designing hybrid ranking strategies
- Testing Gmail API email sending flow

## Deployment

The frontend is deployed on Vercel and the application is publicly accessible at:
[https://embedmail-ai.vercel.app/](https://embedmail-ai.vercel.app/)

The source code is available here:
[https://github.com/udayhese96/AI-Embedded-Mailer](https://github.com/udayhese96/AI-Embedded-Mailer)

## Current Status

The project is actively being improved.

I am continuously working on:

- Enhancing AI content generation
- Improving hybrid retrieval ranking
- Adding better UI components
- Optimizing performance
- Adding more intelligent automation features
- Exploring multi-provider email support

## Conclusion

EmbedMail AI represents a combination of:

- Secure authentication systems
- Full-stack development
- Cloud-based APIs
- AI-powered retrieval systems

This project helped me strengthen my skills in building secure, scalable, and AI-integrated applications. I will continue updating and improving this system with new features and optimizations.`
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
  addBlogPost: (post: Omit<BlogPost, "id" | "date">) => void;
  deleteBlogPost: (id: number) => void;
  updateBlogPost: (post: BlogPost) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

// Provider component
export const PortfolioProvider = ({ children }: { children: ReactNode }) => {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(defaultData);
  const [isLoading, setIsLoading] = useState(true);

  // Load data from JSON files and localStorage on initial render
  useEffect(() => {
    const loadData = async () => {
      try {
        // Load from JSON files
        const [contactRes, aboutRes, projectsRes, postsRes] = await Promise.all([
          fetch('/data/contact.json').catch(() => null),
          fetch('/data/about.json').catch(() => null),
          fetch('/data/projects.json').catch(() => null),
          fetch('/data/posts.json').catch(() => null),
        ]);

        const contact = contactRes ? await contactRes.json() : defaultData.contact;
        const about = aboutRes ? await aboutRes.json() : null;
        const projects = projectsRes ? await projectsRes.json() : defaultData.projects;
        const posts = postsRes ? await postsRes.json() : defaultData.blogPosts;

        // Check for localStorage data first
        const savedData = localStorage.getItem("portfolioData");
        if (savedData) {
          try {
            const parsedData = JSON.parse(savedData);
            setPortfolioData({
              ...parsedData,
              contact: contact, // Always use contact.json
              blogPosts: posts, // Always use latest blog posts
            });
          } catch (error) {
            console.error("Error parsing portfolio data from localStorage:", error);
            setPortfolioData({
              ...defaultData,
              contact,
              projects,
              blogPosts: posts,
            });
          }
        } else {
          // Initialize from JSON files
          setPortfolioData({
            ...defaultData,
            contact,
            projects,
            blogPosts: posts,
          });
        }
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("portfolioData", JSON.stringify(portfolioData));
    }
  }, [portfolioData, isLoading]);

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

  const addBlogPost = (postData: Omit<BlogPost, "id" | "date">) => {
    const newBlogPost = {
      ...postData,
      id: Date.now(),
      date: new Date().toISOString().split('T')[0]
    };

    setPortfolioData(prev => ({
      ...prev,
      blogPosts: [newBlogPost, ...prev.blogPosts]
    }));
  };

  const deleteBlogPost = (id: number) => {
    setPortfolioData(prev => ({
      ...prev,
      blogPosts: prev.blogPosts.filter(post => post.id !== id)
    }));
  };

  const updateBlogPost = (post: BlogPost) => {
    setPortfolioData(prev => ({
      ...prev,
      blogPosts: prev.blogPosts.map(blogPost =>
        blogPost.id === post.id ? post : blogPost
      )
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
        deleteMessage,
        addBlogPost,
        deleteBlogPost,
        updateBlogPost
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
