
import { ArrowRight, Zap } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";

const Hero = () => {
  const { portfolioData } = usePortfolio();
  const { hero } = portfolioData;

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-10 bg-black">
      {/* Enhanced Cyberpunk Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 200, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.2) 1px, transparent 1px),
            radial-gradient(circle at 20% 80%, rgba(0, 150, 255, 0.04) 0%, transparent 70%)
          `,
          backgroundSize: '80px 80px, 80px 80px, 400px 400px',
          animation: 'cyberpunkGrid 22s ease-in-out infinite',
          filter: 'drop-shadow(0 0 3px rgba(0, 200, 255, 0.1))'
        }}></div>
      </div>

      {/* Enhanced 3D Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Rhombus */}
        <div className="absolute top-1/4 left-1/6" style={{animation: 'floatRandomZoom1 19.8s ease-in-out infinite'}}>
          <svg width="35" height="35" viewBox="0 0 100 100" className="text-cyan-400/25">
            <polygon points="50,10 90,50 50,90 10,50" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>

        {/* Wave pattern */}
        <div className="absolute bottom-1/3 right-1/4" style={{animation: 'floatRandomZoom2 16.4s ease-in-out infinite'}}>
          <svg width="40" height="25" viewBox="0 0 100 50" className="text-blue-400/20">
            <path d="M0,25 Q25,10 50,25 T100,25" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>

        {/* Irregular hexagon */}
        <div className="absolute top-3/5 left-1/3" style={{animation: 'floatRandomZoom3 21.7s ease-in-out infinite'}}>
          <svg width="30" height="30" viewBox="0 0 100 100" className="text-purple-400/25">
            <polygon points="50,5 85,25 90,60 55,95 15,75 5,40" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>

        {/* Crescent */}
        <div className="absolute top-1/6 right-1/3" style={{animation: 'floatRandomZoom1 18.3s ease-in-out infinite reverse'}}>
          <svg width="28" height="28" viewBox="0 0 100 100" className="text-cyan-300/30">
            <path d="M50,10 A30,30 0 1,1 50,90 A20,20 0 1,0 50,10" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>

        {/* Multiplication sign */}
        <div className="absolute bottom-1/5 left-1/5 text-2xl text-blue-400/25 font-bold"
             style={{animation: 'floatRandomZoom2 15.8s ease-in-out infinite', filter: 'drop-shadow(0 0 8px rgba(0, 150, 255, 0.3))'}}>×</div>

        {/* Arrow circle */}
        <div className="absolute top-2/3 right-1/6" style={{animation: 'floatRandomZoom3 14.1s ease-in-out infinite'}}>
          <svg width="32" height="32" viewBox="0 0 100 100" className="text-cyan-400/20">
            <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1"/>
            <path d="M35,50 L65,50 M55,40 L65,50 L55,60" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-10 lg:order-1 order-2">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm bg-cyan-400/10 border border-cyan-400/30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-300 text-sm font-medium tracking-wide" style={{fontFamily: 'Space Mono, monospace'}}>
                AVAILABLE FOR HIRE
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="neon-text block" style={{fontFamily: 'Orbitron, monospace'}}>
                  UDAY HESE
                </span>
                <span className="text-2xl md:text-3xl lg:text-4xl text-cyan-300/80 block mt-2" style={{fontFamily: 'Exo 2, sans-serif'}}>
                  &lt; Developer /&gt;
                </span>
              </h1>

              <div className="flex items-center gap-3">
                <Zap className="text-yellow-400 w-6 h-6" />
                <p className="text-xl md:text-2xl neon-blue-text font-semibold">
                  Crafting the Future with Code & AI
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg text-cyan-200/80 leading-relaxed max-w-xl">
                Hi, I'm Uday — a final-year CSE-AI student passionate about
                <span className="text-cyan-400 font-semibold"> solving real-world problems</span> through
                <span className="text-blue-400 font-semibold"> full stack development</span> and
                <span className="text-purple-400 font-semibold"> machine learning</span>.
              </p>

              <div className="flex items-center gap-4 text-sm text-cyan-300/60 mono">
                <span className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                  Final Year CS-AI Student
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                  Full Stack Developer
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                  AI Engineer
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a href="#projects" className="cyber-button flex items-center gap-3">
                <ArrowRight size={18} />
                VIEW PROJECTS
              </a>

              <div className="flex items-center gap-4">
                <a href="https://github.com/udayhese96" target="_blank" rel="noopener noreferrer"
                   className="p-3 rounded-lg border border-cyan-400/30 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"
                       className="group-hover:scale-110 transition-transform duration-300">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/udayhese/" target="_blank" rel="noopener noreferrer"
                   className="p-3 rounded-lg border border-cyan-400/30 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"
                       className="group-hover:scale-110 transition-transform duration-300">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <p className="font-medium text-cyan-300 tracking-wider uppercase" style={{fontFamily: 'Orbitron, monospace'}}>
                  Tech Arsenal
                </p>
                <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/50 to-transparent"></div>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-8">
                {[
                  {src: "https://skillicons.dev/icons?i=html", alt: "HTML"},
                  {src: "https://skillicons.dev/icons?i=css", alt: "CSS"},
                  {src: "https://skillicons.dev/icons?i=js", alt: "JavaScript"},
                  {src: "https://skillicons.dev/icons?i=react", alt: "React"},
                  {src: "https://skillicons.dev/icons?i=nodejs", alt: "Node.js"},
                  {src: "https://skillicons.dev/icons?i=mongodb", alt: "MongoDB"},
                  {src: "https://skillicons.dev/icons?i=mysql", alt: "SQL"},
                  {src: "https://skillicons.dev/icons?i=python", alt: "Python"},
                  {src: "https://skillicons.dev/icons?i=tensorflow", alt: "TensorFlow"},
                  {src: "https://skillicons.dev/icons?i=bootstrap", alt: "Bootstrap"},
                  {src: "https://skillicons.dev/icons?i=java", alt: "Java"},
                  {src: "https://skillicons.dev/icons?i=django", alt: "Django"},
                  {src: "https://skillicons.dev/icons?i=flask", alt: "Flask"},
                  {src: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", alt: "Hugging Face"},
                  {src: "https://logos-world.net/wp-content/uploads/2022/02/Microsoft-Power-BI-Symbol.png", alt: "Power BI"},
                  {src: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg", alt: "Tableau"}
                ].map((tech, index) => (
                  <div key={index} className="group relative">
                    <div className="w-12 h-12 rounded-lg border border-cyan-400/20 p-2 bg-gray-900/30 hover:border-cyan-400/50 hover:bg-gray-900/50 transition-all duration-300 hover:scale-110">
                      <img
                        src={tech.src}
                        alt={tech.alt}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 px-2 py-1 rounded text-xs text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-cyan-400/30">
                      {tech.alt}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-2/5 flex lg:justify-start justify-center lg:order-2 order-1">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Rotating rectangular ovals */}
                <div className="absolute inset-0 rounded-full">
                  <div className="absolute inset-0 border-2 border-cyan-400/40 rounded-[40%] animate-spin"
                       style={{animationDuration: '25s', borderRadius: '40% 60% 60% 40%'}}>
                  </div>
                  <div className="absolute inset-4 border border-blue-400/30 rounded-[60%] animate-spin"
                       style={{animationDuration: '20s', animationDirection: 'reverse', borderRadius: '60% 40% 40% 60%'}}>
                  </div>
                  <div className="absolute inset-8 border border-purple-400/20 rounded-[50%] animate-spin"
                       style={{animationDuration: '15s', borderRadius: '50% 70% 50% 30%'}}>
                  </div>
                  <div className="absolute inset-12 border border-cyan-300/25 rounded-[70%] animate-spin"
                       style={{animationDuration: '18s', animationDirection: 'reverse', borderRadius: '70% 30% 70% 30%'}}>
                  </div>
                </div>

                {/* Image */}
                <div className="absolute inset-16 rounded-full overflow-hidden backdrop-blur-sm bg-gray-900/30 border border-cyan-400/30">
                  <img
                    src="/lovable-uploads/a7869fd3-1e2d-406d-b4f0-1f3b8ee9d47b.png"
                    alt="Uday Hese - Cyberpunk Developer"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 via-transparent to-blue-400/20"></div>
                </div>

                {/* Floating decorations */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-cyan-400/20 border border-cyan-400 flex items-center justify-center backdrop-blur-sm">
                  <Zap className="w-6 h-6 text-cyan-400" />
                </div>

                <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-blue-400/20 border border-blue-400 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-2xl">🚀</span>
                </div>

                {/* Code snippets floating around */}
                <div className="absolute -top-8 left-8 text-xs text-cyan-400/60 mono bg-gray-900/50 px-2 py-1 rounded border border-cyan-400/20">
                  console.log('Hello World');
                </div>
                <div className="absolute -bottom-8 right-8 text-xs text-blue-400/60 mono bg-gray-900/50 px-2 py-1 rounded border border-blue-400/20">
                  &lt;/Developer&gt;
                </div>
              </div>

              {/* Orbiting elements */}
              <div className="absolute inset-0">
                <div className="absolute w-full h-full animate-spin" style={{animationDuration: '30s'}}>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full blur-sm"></div>
                </div>
                <div className="absolute w-full h-full animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full blur-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
