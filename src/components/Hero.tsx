
import { useEffect, useState, useRef } from "react";
import { ArrowRight, Zap } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";
import Shapes from "./Shapes";

const Hero = () => {
  const { portfolioData } = usePortfolio();
  const { hero } = portfolioData;
  const [sequenceStarted, setSequenceStarted] = useState(false);
  const cleanupTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Detect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Detect low-end device
    const isLowEndDevice =
      (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) ||
      window.innerWidth < 480;

    // If reduced motion, skip animations
    if (prefersReducedMotion) {
      document.body.classList.add('sequence-complete');
      document.body.classList.remove('sequence-run');
      setSequenceStarted(true);
      return;
    }

    // Check if we're on the home/index page
    const isHomePage = window.location.pathname === '/' ||
      window.location.pathname === '/index' ||
      window.location.pathname === '';

    // On home page, ALWAYS run the sequence on every page load/refresh
    if (isHomePage) {
      // Reset to initial state: show only navbar + background
      document.body.classList.remove('sequence-complete');
      document.body.classList.remove('sequence-run');
      setSequenceStarted(false);

      // Start sequence after 288ms (0.16x speed: 1800ms × 0.16)
      const sequenceTimer = setTimeout(() => {
        document.body.classList.add('sequence-run');
        setSequenceStarted(true);
      }, 288);

      // Cleanup will-change after sequence completes (~3s total with letter collision)
      cleanupTimerRef.current = setTimeout(() => {
        document.body.classList.remove('sequence-run');
        document.body.classList.add('sequence-complete');

        // Remove will-change from all animated elements
        const animatedElements = document.querySelectorAll('[style*="will-change"]');
        animatedElements.forEach(el => {
          (el as HTMLElement).style.willChange = 'auto';
        });
      }, 3100);

      return () => {
        clearTimeout(sequenceTimer);
        if (cleanupTimerRef.current) clearTimeout(cleanupTimerRef.current);
      };
    } else {
      // Not on home page: show everything immediately
      document.body.classList.remove('sequence-run');
      document.body.classList.add('sequence-complete');
      setSequenceStarted(true);
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-10 bg-transparent">

      {/* Enhanced 3D Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Rhombus */}
        <div className="absolute top-1/4 left-1/6" style={{ animation: 'floatRandomZoom1 19.8s ease-in-out infinite' }}>
          <svg width="35" height="35" viewBox="0 0 100 100" className="text-cyan-400/25">
            <polygon points="50,10 90,50 50,90 10,50" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        {/* Wave pattern */}
        <div className="absolute bottom-1/3 right-1/4" style={{ animation: 'floatRandomZoom2 16.4s ease-in-out infinite' }}>
          <svg width="40" height="25" viewBox="0 0 100 50" className="text-blue-400/20">
            <path d="M0,25 Q25,10 50,25 T100,25" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        {/* Irregular hexagon */}
        <div className="absolute top-3/5 left-1/3" style={{ animation: 'floatRandomZoom3 21.7s ease-in-out infinite' }}>
          <svg width="30" height="30" viewBox="0 0 100 100" className="text-purple-400/25">
            <polygon points="50,5 85,25 90,60 55,95 15,75 5,40" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        {/* Crescent */}
        <div className="absolute top-1/6 right-1/3" style={{ animation: 'floatRandomZoom1 18.3s ease-in-out infinite reverse' }}>
          <svg width="28" height="28" viewBox="0 0 100 100" className="text-cyan-300/30">
            <path d="M50,10 A30,30 0 1,1 50,90 A20,20 0 1,0 50,10" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        {/* Multiplication sign */}
        <div className="absolute bottom-1/5 left-1/5 text-2xl text-blue-400/25 font-bold"
          style={{ animation: 'floatRandomZoom2 15.8s ease-in-out infinite', filter: 'drop-shadow(0 0 8px rgba(0, 150, 255, 0.3))' }}>×</div>

        {/* Arrow circle */}
        <div className="absolute top-2/3 right-1/6" style={{ animation: 'floatRandomZoom3 14.1s ease-in-out infinite' }}>
          <svg width="32" height="32" viewBox="0 0 100 100" className="text-cyan-400/20">
            <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M35,50 L65,50 M55,40 L65,50 L55,60" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-16 lg:gap-24">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-10 lg:order-1 order-2">

            {/* Main Heading - Split first and last name with letter collision */}
            <div className="space-y-2">
              <h1 className="space-y-1">
                <span className="hero-first block" style={{ fontFamily: 'Orbitron, monospace' }}>
                  {'UDAY'.split('').map((letter, index) => (
                    <span
                      key={`first-${index}`}
                      className="hero-letter"
                      style={{
                        animationDelay: `${448 + (index * 50)}ms`,
                        display: 'inline-block'
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
                <span className="hero-last block" style={{ fontFamily: 'Orbitron, monospace' }}>
                  {'HESE'.split('').map((letter, index) => (
                    <span
                      key={`last-${index}`}
                      className="hero-letter"
                      style={{
                        animationDelay: `${648 + (index * 50)}ms`,
                        display: 'inline-block'
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
              </h1>

              <div className="hero-sub subtitle mt-4" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                &lt; /Software Developer &gt;
              </div>

              <div className="hero-tagline flex items-center gap-3 mt-4">
                <Zap className="text-yellow-400 w-6 h-6" />
                <p className="text-xl md:text-2xl neon-blue-text font-semibold">
                  Crafting the Future with Code & AI
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="hero-bio space-y-4">
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
          </div>

          {/* Right Image */}
          <div className="lg:w-2/5 flex lg:justify-start justify-center lg:order-2 order-1 lg:mt-0 -mt-8">
            <div className="relative w-full max-w-[600px] aspect-square mx-auto">
              <Shapes />
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;
