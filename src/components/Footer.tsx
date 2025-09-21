
const Footer = () => {
  return (
    <footer className="relative py-8 bg-black border-t border-cyan-400/20">
      {/* Enhanced Cyberpunk Grid Background */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 0, 150, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 100, 200, 0.15) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(255, 0, 255, 0.02) 0%, transparent 60%)
          `,
          backgroundSize: '40px 40px, 40px 40px, 200px 200px',
          animation: 'cyberpunkGrid 14s ease-in-out infinite reverse',
          filter: 'drop-shadow(0 0 2px rgba(255, 0, 150, 0.1))'
        }}></div>
      </div>

      {/* Moving Grid Line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 h-px w-full bg-gradient-to-r from-transparent via-pink-400 to-transparent"
          style={{
            animation: 'movingGridLine 14s ease-in-out infinite',
            animationDelay: '6s',
            opacity: 0.2
          }}
        ></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold neon-text" style={{fontFamily: 'Orbitron, monospace'}}>UDAY HESE</h3>
          </div>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
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
      </div>
    </footer>
  );
};

export default Footer;
