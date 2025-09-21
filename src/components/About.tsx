
import { usePortfolio } from "@/context/PortfolioContext";
import { Brain, Code, Database, Zap, Download, ExternalLink } from "lucide-react";

const About = () => {
  const { portfolioData } = usePortfolio();
  const { about } = portfolioData;

  const skills = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Development",
      description: "React, Node.js, Python, Java",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Machine Learning",
      description: "TensorFlow, PyTorch, Deep Learning",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Engineering",
      description: "MongoDB, MySQL, Cloud Systems",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="about" className="relative py-20 lg:py-32 bg-black">
      {/* Section transition gradient */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black via-black/80 to-transparent z-5"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black via-black/80 to-transparent z-5"></div>
      {/* Enhanced Cyberpunk Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 150, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 200, 255, 0.2) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.04) 0%, transparent 70%)
          `,
          backgroundSize: '50px 50px, 50px 50px, 200px 200px',
          animation: 'cyberpunkGrid 15s ease-in-out infinite',
          filter: 'drop-shadow(0 0 3px rgba(0, 200, 255, 0.1))'
        }}></div>
      </div>

      {/* Enhanced 3D Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Hexagon */}
        <div className="absolute top-1/6 left-1/5" style={{animation: 'floatRandomZoom1 18.5s ease-in-out infinite'}}>
          <svg width="40" height="40" viewBox="0 0 100 100" className="text-cyan-400/20">
            <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>

        {/* Triangle */}
        <div className="absolute w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent border-b-blue-400/30 top-2/3 right-1/4"
             style={{animation: 'floatRandomZoom2 16.3s ease-in-out infinite', filter: 'drop-shadow(0 0 8px rgba(0, 150, 255, 0.4))'}}></div>

        {/* Diamond */}
        <div className="absolute w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-400/10 transform rotate-45 bottom-1/4 left-1/3"
             style={{animation: 'floatRandomZoom3 13.4s ease-in-out infinite'}}></div>

        {/* Circle with inner ring */}
        <div className="absolute w-16 h-16 border-2 border-purple-400/25 rounded-full top-1/2 right-1/6"
             style={{animation: 'floatRandomZoom1 20.7s ease-in-out infinite reverse'}}>
          <div className="w-8 h-8 bg-purple-400/15 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        {/* Plus sign */}
        <div className="absolute text-2xl text-cyan-300/30 font-bold top-3/4 left-1/6"
             style={{animation: 'floatRandomZoom2 14.8s ease-in-out infinite', filter: 'drop-shadow(0 0 6px rgba(0, 255, 255, 0.4))'}}>+</div>

        {/* Octagon */}
        <div className="absolute bottom-1/5 right-1/3" style={{animation: 'floatRandomZoom3 17.2s ease-in-out infinite'}}>
          <svg width="30" height="30" viewBox="0 0 100 100" className="text-blue-300/25">
            <polygon points="30,10 70,10 90,30 90,70 70,90 30,90 10,70 10,30" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm bg-cyan-400/10 border border-cyan-400/30 mb-6">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm font-medium tracking-wide mono">
              ABOUT.EXE
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold neon-text mb-6" style={{fontFamily: 'Orbitron, monospace'}}>
            NEURAL NETWORK
          </h2>
          <p className="text-xl text-cyan-200/80 max-w-2xl mx-auto">
            Decoding the digital consciousness behind the code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Main Description */}
            <div className="space-y-6">
              <div className="cyber-card">
                <p className="text-cyan-100/90 text-lg leading-relaxed">
                  Hey, I'm <span className="neon-text font-semibold">Uday</span>! A final-year Computer Science and
                  Artificial Intelligence undergraduate at <span className="text-blue-400 font-medium">
                  Vishwakarma Institute of Information Technology</span>, Pune, driven by a passion for building
                  <span className="text-cyan-400 font-medium"> intelligent, scalable, and real-world tech solutions</span>.
                </p>
              </div>

              <div className="cyber-card">
                <p className="text-cyan-100/80 leading-relaxed">
                  I thrive at the intersection of <span className="text-purple-400 font-medium">software development</span>,
                  <span className="text-blue-400 font-medium"> machine learning</span>, and
                  <span className="text-cyan-400 font-medium"> cloud-integrated systems</span>, constantly pushing the
                  boundaries of what's possible through technology.
                </p>
              </div>

              <div className="cyber-card">
                <p className="text-cyan-100/80 leading-relaxed">
                  Whether it's deploying <span className="text-green-400 font-medium">real-time computer vision applications</span>,
                  building <span className="text-yellow-400 font-medium">AI-powered chatbots</span>, or creating
                  <span className="text-pink-400 font-medium"> seamless web experiences</span>—I'm always excited to solve
                  complex problems with efficient and innovative code.
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="cyber-card p-4 h-full">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} p-3 mb-3 text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {skill.icon}
                    </div>
                    <h3 className="text-cyan-300 font-semibold mb-2 font-orbitron text-sm">
                      {skill.title}
                    </h3>
                    <p className="text-cyan-200/60 text-xs">
                      {skill.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://drive.google.com/file/d/1F78Mm3hfcVNxLZF8PLc661tYO8zagOQ1/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-button flex items-center gap-3"
              >
                <Download size={18} />
                DOWNLOAD RESUME
              </a>

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/udayhese96"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-cyan-400/30 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"
                       className="group-hover:scale-110 transition-transform duration-300">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/udayhese/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-cyan-400/30 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"
                       className="group-hover:scale-110 transition-transform duration-300">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Interactive Stats */}
          <div className="relative">
            {/* Main Stats Card */}
            <div className="cyber-card p-8 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0"
                     style={{
                       backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 255, 255, 0.3) 1px, transparent 0)`,
                       backgroundSize: '20px 20px',
                     }}>
                </div>
              </div>

              <div className="relative z-10 space-y-6">
                <h3 className="text-2xl font-bold neon-blue-text mb-6 font-orbitron">
                  SYSTEM STATUS
                </h3>

                {/* Progress Bars */}
                <div className="space-y-4">
                  {[
                    { skill: "Full Stack Dev", level: 90, color: "cyan" },
                    { skill: "Machine Learning", level: 85, color: "blue" },
                    { skill: "Problem Solving", level: 95, color: "purple" },
                    { skill: "Team Leadership", level: 80, color: "pink" }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-cyan-300 font-medium mono">{item.skill}</span>
                        <span className="text-cyan-400 mono">{item.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r from-${item.color}-400 to-${item.color}-600 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${item.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    { label: "Projects", value: "15+" },
                    { label: "Experience", value: "2+ Years" },
                    { label: "Technologies", value: "20+" },
                    { label: "Coffee Cups", value: "∞" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-4 rounded-lg border border-cyan-400/20 bg-gray-900/30">
                      <div className="text-2xl font-bold neon-text font-orbitron">
                        {stat.value}
                      </div>
                      <div className="text-cyan-300/60 text-xs mono uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-cyan-400 rounded-full animate-pulse bg-cyan-400/20"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 border border-blue-400/50 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
