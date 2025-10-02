
import { useEffect, useState } from "react";
import { ArrowRight, Zap } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";

const Hero = () => {
  const { portfolioData } = usePortfolio();
  const { hero } = portfolioData;
  const [sequenceStarted, setSequenceStarted] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setSequenceStarted(true);
      return;
    }

    // Check if this is the first visit
    const visited = sessionStorage.getItem('siteVisited_v1');
    if (!visited) {
      // Show only navbar initially, start sequence after delay
      setSequenceStarted(false);
      const timer = setTimeout(() => {
        document.documentElement.classList.add('sequence-run');
        setSequenceStarted(true);
      }, 450);
      sessionStorage.setItem('siteVisited_v1', '1');
      return () => clearTimeout(timer);
    } else {
      // Already visited, show everything immediately
      document.documentElement.classList.remove('sequence-run');
      setSequenceStarted(true);
    }
  }, []);

  const delayStyle = (index: number, base = 450) => ({
    animationDelay: `${base + index * 150}ms`
  });

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-10 bg-shaded">

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
            <div className="hero-badge badge magnify-on-hover" style={delayStyle(0, 650)}>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-300 text-sm font-medium tracking-wide" style={{fontFamily: 'Space Mono, monospace'}}>
                AVAILABLE FOR HIRE
              </span>
            </div>

            {/* Main Heading - Split first and last name */}
            <div className="space-y-2">
              <h1 className="space-y-1">
                <span className="hero-first block" style={{...delayStyle(1, 700), fontFamily: 'Orbitron, monospace'}}>
                  UDAY
                </span>
                <span className="hero-last block" style={{...delayStyle(2, 850), fontFamily: 'Orbitron, monospace'}}>
                  HESE
                </span>
              </h1>

              <div className="hero-sub subtitle mt-4" style={{...delayStyle(3, 1000), fontFamily: 'Exo 2, sans-serif'}}>
                &lt; Developer /&gt;
              </div>

              <div className="hero-sub flex items-center gap-3 mt-4" style={delayStyle(4, 1150)}>
                <Zap className="text-yellow-400 w-6 h-6" />
                <p className="text-xl md:text-2xl neon-blue-text font-semibold">
                  Crafting the Future with Code & AI
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="hero-bio space-y-4" style={delayStyle(5, 1300)}>
              <p className="text-lg text-cyan-200/80 leading-relaxed max-w-xl">
                Hi, I'm Uday — a final-year CSE-AI student passionate about
                <span className="text-cyan-400 font-semibold"> solving real-world problems</span> through
                <span className="text-blue-400 font-semibold"> full stack development</span> and
                <span className="text-purple-400 font-semibold"> machine learning</span>.
              </p>

              <div className="flex items-center gap-4 text-sm text-cyan-300/60 mono">
                <span className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                  Final Year CSE-AI Student
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
                  <div key={index} className="tech group relative magnify-on-hover" style={delayStyle(6 + index, 1500)}>
                    <div className="w-12 h-12 rounded-lg border border-cyan-400/20 p-2 bg-gray-900/30 hover:border-cyan-400/50 hover:bg-gray-900/50 transition-all duration-300">
                      <img
                        src={tech.src}
                        alt={tech.alt}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 px-2 py-1 rounded text-xs text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-cyan-400/30 z-10">
                      {tech.alt}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-2/5 flex lg:justify-start justify-center lg:order-2 order-1">
            <div className="hero-avatar relative" style={delayStyle(4, 1100)}>
              {/* Main Image Container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 magnify-on-hover">
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

      
    </section>
  );
};

export default Hero;
