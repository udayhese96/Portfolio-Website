import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import TerminalWindow from '../components/TerminalWindow';
import TypingAnimation from '../components/TypingAnimation';

// Extended project data with full details
export const projectsData = [
    {
        id: 10,
        slug: "ai-embedded-mailer",
        title: "AI-EMBEDDED EMAIL MAILER",
        description: "AI-powered email studio with real-time HTML generation using OpenRouter LLM and secure Gmail OAuth 2.0 integration.",
        fullDescription: "A modern Email Studio that allows you to create, edit, and send HTML emails using your own Gmail account via secure OAuth 2.0 integration. Features AI-powered real-time HTML email generation using OpenRouter LLM with a chat-based conversational interface, encrypted session management, and Supabase image hosting.",
        image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&auto=format&fit=crop"
        ],
        githubLink: "https://github.com/udayhese96/AI-Embedded-Mailer",
        category: "React",
        features: [
            "AI Email Generation: Real-time HTML generation using OpenRouter LLM",
            "Gmail OAuth 2.0: Secure authentication with encrypted session management",
            "Chat Interface: Conversational UI for composing emails",
            "Supabase Storage: Image hosting and asset management"
        ]
    },
    {
        id: 1,
        slug: "dance-movement-analyzer",
        title: "DANCE MOVEMENT ANALYZER",
        description: "Cloud-deployed FastAPI backend for MediaPipe-based dance pose analysis with Dockerized video-processing APIs.",
        fullDescription: "A cloud-deployed dance analysis system built with FastAPI and MediaPipe, running on AWS EC2 Linux. The application provides real-time pose detection and analysis for dance movements, generating annotated videos through RESTful APIs.",
        image: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800&auto=format&fit=crop"
        ],
        githubLink: "https://github.com/udayhese96/callus-dance-analyzer",
        category: "Python",
        features: [
            "AWS EC2 Deployment: Hosted on Linux server for scalability",
            "MediaPipe Integration: Real-time pose detection and analysis",
            "Dockerized APIs: Containerized video-processing endpoints",
            "Annotated Output: Generates pose-annotated dance videos"
        ]
    },
    {
        id: 2,
        slug: "weather-chatbot",
        title: "WEATHER CHATBOT",
        description: "LangChain ReAct–powered chatbot for real-time weather data with intelligent tool selection and natural language responses.",
        fullDescription: "An intelligent weather chatbot built with LangChain ReAct agent architecture, capable of retrieving real-time weather data from OpenWeather API. Features robust error handling, retry logic, and natural language response generation.",
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&auto=format&fit=crop"
        ],
        githubLink: "https://github.com/udayhese96/Weather-Chat-Bot",
        category: "Python",
        features: [
            "LangChain ReAct: Intelligent tool selection and reasoning",
            "OpenWeather API: Real-time weather data retrieval",
            "FastAPI Backend: Robust API with retry logic",
            "Natural Language: Human-friendly response generation"
        ]
    },
    {
        id: 3,
        slug: "ai-creative-generator",
        title: "AI CREATIVE GENERATOR",
        description: "RAG-based creative generation pipeline using Google Gemini with vector similarity search and Supabase storage.",
        fullDescription: "A comprehensive AI creative generation system leveraging Google Gemini for text and image generation, combined with RAG (Retrieval Augmented Generation) using pgvector for semantic search. Built with TypeScript and integrated with Supabase for asset storage.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop"
        ],
        githubLink: "https://github.com/udayhese96/CREATIVES-GENERATOR",
        category: "React",
        features: [
            "Google Gemini: Text and image generation capabilities",
            "RAG Pipeline: Vector similarity search with pgvector",
            "Supabase Integration: Asset storage and management",
            "TypeScript: Type-safe implementation"
        ]
    },
    {
        id: 4,
        slug: "fairshare",
        title: "FAIRSHARE",
        description: "Built a fully client-side app for group expense tracking, settlements, and balances using...",
        fullDescription: "FairShare is a fully client-side application designed for group expense tracking, settlements, and balance management. It provides an intuitive interface for users to split expenses among friends, family, or colleagues without the need for a backend server.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop"
        ],
        githubLink: "https://github.com/udayhese96/FairShare_Splitwise_Clone",
        category: "React",
        features: [
            "Expense Tracking: Add and track shared expenses with ease",
            "Balance Management: View who owes what at a glance",
            "Settlement Suggestions: Smart suggestions for settling debts",
            "Local Storage: All data stored locally for privacy"
        ]
    },
    {
        id: 5,
        slug: "mental-health-chatbot",
        title: "MENTAL HEALTH CHATBOT",
        description: "Created a mental health chatbot using Groq API for empathetic AI support with offline knowledge...",
        fullDescription: "A compassionate mental health chatbot powered by Groq API, designed to provide empathetic AI support. The system processes offline knowledge to offer helpful responses while maintaining user privacy and providing 24/7 availability.",
        image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=800&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop"
        ],
        githubLink: "https://github.com/udayhese96/Mental-Health-Chatbot",
        category: "Python",
        features: [
            "Empathetic Responses: AI trained for compassionate communication",
            "Offline Processing: RAG-based knowledge for privacy",
            "24/7 Availability: Always available mental health support",
            "Resource Suggestions: Provides helpful mental health resources"
        ]
    },
    {
        id: 6,
        slug: "virtual-traffic-police",
        title: "VIRTUAL TRAFFIC POLICE",
        description: "Developed a real-time traffic system using YOLOv10 and OpenCV for vehicle detection...",
        fullDescription: "An intelligent traffic management system using YOLOv10 and OpenCV for real-time vehicle detection and traffic flow optimization. The system analyzes traffic patterns and dynamically adjusts signal timing to reduce congestion.",
        image: "/lovable-uploads/0ea351c1-0550-4c0c-abd6-5c6d4e6baa2f.png",
        screenshots: [
            "/lovable-uploads/0ea351c1-0550-4c0c-abd6-5c6d4e6baa2f.png"
        ],
        githubLink: "https://github.com/udayhese96/AI-Dynamic-Traffic-Light-Optimization-for-Heavy-Routes",
        category: "Python",
        features: [
            "Real-time Detection: YOLOv10 powered vehicle detection",
            "Traffic Analysis: Counts vehicles per lane in real-time",
            "Dynamic Optimization: Adjusts signal timing based on traffic",
            "Congestion Reduction: Reduces wait times at intersections"
        ]
    },
    {
        id: 7,
        slug: "heart-disease-prediction",
        title: "HEART DISEASE PREDICTION",
        description: "ML-based heart disease prediction system using KNN, SVM, Neural Networks...",
        fullDescription: "A machine learning-based system for predicting heart disease using multiple algorithms including KNN, SVM, Neural Networks, and Ensemble Learning. The system analyzes patient data to provide early risk assessment.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop"
        ],
        githubLink: "https://github.com/udayhese96/Heart-Disease-Prediction",
        category: "Python",
        features: [
            "Multiple Algorithms: KNN, SVM, Neural Networks, Ensemble",
            "High Accuracy: Optimized for reliable predictions",
            "Early Detection: Helps identify risk factors early",
            "Data Visualization: Clear presentation of results"
        ]
    },
    {
        id: 8,
        slug: "laptop-borrowal",
        title: "LAPTOP BORROWAL",
        description: "Dynamic web application for managing laptop borrowals in a lab setting with secure login.",
        fullDescription: "A comprehensive web application for managing laptop borrowals in educational institutions. Features secure authentication, real-time availability tracking, and automated return reminders.",
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop"
        ],
        githubLink: "https://github.com/udayhese96/Logbook-Register-for-College-Laptops",
        category: "Web",
        features: [
            "Secure Login: Authentication for authorized users",
            "Real-time Tracking: Track laptop availability instantly",
            "Borrowal History: Complete record of all transactions",
            "Automated Reminders: Email notifications for returns"
        ]
    },
    {
        id: 9,
        slug: "rto-dashboard",
        title: "RTO DASHBOARD",
        description: "Power BI dashboard analyzing vehicle registration data for dealership strategy planning.",
        fullDescription: "An interactive Power BI dashboard that analyzes vehicle registration data from RTO records. Provides insights for dealership strategy planning, market trends, and competitive analysis.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop"
        ],
        driveLink: "https://drive.google.com/drive/folders/1U48onoLupYVA8Y1Qks5Nc4WbHImZWDkB",
        category: "Analytics",
        features: [
            "Data Visualization: Interactive charts and graphs",
            "Market Analysis: Insights into vehicle registration trends",
            "Competitor Tracking: Monitor market share changes",
            "Strategic Planning: Data-driven decision support"
        ]
    },
];

const categories = ['All Projects', 'React', 'Python', 'Web', 'Analytics'];

// GitHub Icon
const GitHubIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
);

// Google Drive Icon
const DriveIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.71 3.5L1.15 15l4.58 8h13.54l4.58-8L17.29 3.5H7.71zM8.71 5h6.58l5.14 9H3.57l5.14-9zm-4.33 10h15.24l-2.29 4H6.67l-2.29-4z" />
    </svg>
);

const ProjectsPage = () => {
    const [activeCategory, setActiveCategory] = useState('All Projects');
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [visibleProjects, setVisibleProjects] = useState(0);
    const [typingComplete, setTypingComplete] = useState<boolean[]>([]);

    const filteredProjects = activeCategory === 'All Projects'
        ? projectsData
        : projectsData.filter(p => p.category === activeCategory);

    // Reset animation when category changes
    useEffect(() => {
        setVisibleProjects(0);
        setTypingComplete(new Array(filteredProjects.length).fill(false));
    }, [activeCategory, filteredProjects.length]);

    // Stagger project appearances
    useEffect(() => {
        if (visibleProjects < filteredProjects.length) {
            const timer = setTimeout(() => {
                setVisibleProjects(prev => prev + 1);
            }, visibleProjects === 0 ? 0 : 300);

            return () => clearTimeout(timer);
        }
    }, [visibleProjects, filteredProjects.length]);

    const handleTypingComplete = (index: number) => {
        setTypingComplete(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
        });
    };

    return (
        <div className="page-container">
            <TerminalWindow
                title="Ghostty"
                statusBar={
                    <>
                        <span>↙ main</span>
                        <span>-- VIEW --</span>
                    </>
                }
            >
                {/* Filter Tabs */}
                <div className="wis-filter-tabs">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`wis-filter-tab ${activeCategory === category ? 'wis-filter-tab-active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category === 'All Projects' ? category : `❖ ${category}`}
                        </button>
                    ))}
                </div>

                {/* Projects Grid - 4 columns */}
                <div className="wis-projects-grid">
                    {filteredProjects.slice(0, visibleProjects).map((project, index) => {
                        const isHovered = hoveredId === project.id;
                        const isCurrentlyTyping = index === visibleProjects - 1 && !typingComplete[index];

                        return (
                            <Link
                                key={project.id}
                                to={`/project/${project.slug}`}
                                className="project-item"
                                onMouseEnter={() => setHoveredId(project.id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                {/* Image - hover reveals more */}
                                <div className="project-item-image">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        style={{ opacity: isHovered ? 0.8 : 0.35 }}
                                    />
                                </div>

                                {/* Title + Icon - ALWAYS VISIBLE */}
                                <div className="project-item-header">
                                    <h3 className="project-item-title">
                                        {isCurrentlyTyping ? (
                                            <TypingAnimation
                                                text={project.title}
                                                speed={20}
                                                onComplete={() => handleTypingComplete(index)}
                                            />
                                        ) : (
                                            project.title
                                        )}
                                    </h3>
                                    <span className="project-item-icon">
                                        {project.githubLink ? <GitHubIcon /> : <DriveIcon />}
                                    </span>
                                </div>

                                {/* Description - ALWAYS VISIBLE */}
                                <p className="project-item-desc">
                                    {typingComplete[index] || index < visibleProjects - 1 ? (
                                        project.description
                                    ) : (
                                        <span style={{ opacity: 0 }}>{project.description}</span>
                                    )}
                                </p>
                            </Link>
                        );
                    })}
                </div>
            </TerminalWindow>

            <BottomNav />
        </div>
    );
};

export default ProjectsPage;
