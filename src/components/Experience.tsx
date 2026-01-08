
import { Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const experienceData = [
  {
    id: 1,
    title: "AI/ML Research Intern",
    company: "VIIT Pune",
    location: "Pune, India",
    startDate: "2024",
    endDate: "Present",
    description: [
      "Conducting research in artificial intelligence and machine learning applications.",
      "Developing and implementing ML models for real-world problem solving.",
      "Collaborating with faculty and peers on cutting-edge AI projects."
    ],
    fullDescription: "Working as an AI/ML Research Intern at Vishwakarma Institute of Information Technology, Pune, focusing on advanced machine learning research and development. This role involves exploring state-of-the-art AI techniques, implementing novel algorithms, and contributing to academic research in the field of artificial intelligence.",
    images: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Jupyter", "Deep Learning", "Machine Learning", "Research"]
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Freelance",
    location: "Remote",
    startDate: "2023",
    endDate: "Present",
    description: [
      "Building full-stack web applications using modern technologies like React, Node.js, and Django.",
      "Developing responsive and user-friendly interfaces with React and TypeScript.",
      "Implementing backend APIs and database solutions for various client projects."
    ],
    fullDescription: "Working as a freelance Full Stack Developer, delivering end-to-end web solutions for diverse clients. Specializing in modern JavaScript frameworks, Python backends, and cloud deployments. Projects range from e-commerce platforms to data visualization dashboards, all built with scalability and performance in mind.",
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80"
    ],
    technologies: ["React", "Node.js", "Django", "Flask", "TypeScript", "JavaScript", "MongoDB", "PostgreSQL", "Docker", "Git", "REST API", "HTML", "CSS"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-20 lg:py-32 bg-black">
      {/* Section transition gradient */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black via-black/80 to-transparent z-5"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black via-black/80 to-transparent z-5"></div>

      {/* Enhanced 3D Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Concentric Squares */}
        <div className="absolute top-1/5 right-1/5" style={{ animation: 'floatRandomZoom2 20.7s ease-in-out infinite' }}>
          <div className="w-24 h-24 border-2 border-blue-400/20 relative">
            <div className="w-16 h-16 border border-cyan-400/30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>

        {/* Star shape */}
        <div className="absolute bottom-1/4 left-1/5" style={{ animation: 'floatRandomZoom1 17.8s ease-in-out infinite' }}>
          <svg width="35" height="35" viewBox="0 0 100 100" className="text-cyan-400/25">
            <polygon points="50,10 61,35 90,35 69,57 78,85 50,70 22,85 31,57 10,35 39,35" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        {/* Pentagon */}
        <div className="absolute top-2/3 right-1/3" style={{ animation: 'floatRandomZoom3 19.2s ease-in-out infinite' }}>
          <svg width="28" height="28" viewBox="0 0 100 100" className="text-purple-400/20">
            <polygon points="50,10 95,40 75,90 25,90 5,40" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        {/* Spiral */}
        <div className="absolute top-1/3 left-1/4" style={{ animation: 'floatRandomZoom1 15.5s ease-in-out infinite reverse' }}>
          <svg width="32" height="32" viewBox="0 0 100 100" className="text-blue-300/30">
            <path d="M50,50 m-20,0 a20,20 0 1,1 40,0 a15,15 0 1,1 -30,0 a10,10 0 1,1 20,0 a5,5 0 1,1 -10,0"
              fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        {/* Cross */}
        <div className="absolute bottom-1/3 right-1/6 text-3xl text-blue-400/25 font-bold"
          style={{ animation: 'floatRandomZoom2 16.8s ease-in-out infinite', filter: 'drop-shadow(0 0 8px rgba(0, 150, 255, 0.3))' }}>×</div>

        {/* Arrow */}
        <div className="absolute top-1/2 right-1/2" style={{ animation: 'floatRandomZoom3 14.3s ease-in-out infinite' }}>
          <svg width="25" height="25" viewBox="0 0 100 100" className="text-cyan-300/20">
            <path d="M20,50 L70,50 M55,35 L70,50 L55,65" fill="none" stroke="currentColor" strokeWidth="3" />
          </svg>
        </div>
      </div>

      {/* Moving Grid Line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 h-px w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          style={{
            animation: 'movingGridLine 8s ease-in-out infinite',
            animationDelay: '0s',
            opacity: 0.2
          }}
        ></div>
      </div>

      <div className="container mx-auto px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm bg-cyan-400/10 border border-cyan-400/30 mb-6">
            <Briefcase className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm font-medium tracking-wide mono">EXPERIENCE.LOG</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold neon-text mb-6" style={{ fontFamily: 'Orbitron, monospace' }}>
            PROFESSIONAL JOURNEY
          </h2>
          <p className="text-xl text-cyan-200/80 max-w-2xl mx-auto">
            Building the future through innovation and technology
          </p>
        </div>

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
