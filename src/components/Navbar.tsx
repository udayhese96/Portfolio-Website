
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled
        ? 'backdrop-blur-md bg-black/90 border-b border-cyan-400/30 py-3'
        : 'bg-black/30 backdrop-blur-sm py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo with cyberpunk styling */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <svg className="w-10 h-10" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#00ffff', stopOpacity:1}} />
                  <stop offset="50%" style={{stopColor:'#0080ff', stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:'#0040ff', stopOpacity:1}} />
                </linearGradient>
                <radialGradient id="logoGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style={{stopColor:'#00ffff', stopOpacity:0.8}} />
                  <stop offset="70%" style={{stopColor:'#0080ff', stopOpacity:0.4}} />
                  <stop offset="100%" style={{stopColor:'#0040ff', stopOpacity:0.1}} />
                </radialGradient>
              </defs>
              <circle cx="16" cy="16" r="15" fill="url(#logoGlow)" opacity="0.3" />
              <circle cx="16" cy="16" r="13" fill="none" stroke="url(#logoGradient)" strokeWidth="1.5" />
              <text x="16" y="16" fontFamily="Orbitron, monospace" fontSize="10" fontWeight="900"
                    fill="url(#logoGradient)" textAnchor="middle" dominantBaseline="central">UH</text>
            </svg>
            <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <span className="text-xl font-bold neon-text tracking-wider" style={{fontFamily: 'Orbitron, monospace'}}>
            UDAYHESE
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {isHomePage ? (
            <>
              <a href="#home" className="nav-link relative text-sm font-medium text-cyan-300 hover:text-cyan-400 transition-all duration-300 tracking-wider uppercase" style={{fontFamily: 'Orbitron, monospace'}}>
                <span className="relative z-10">HOME</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 hover:w-full"></div>
              </a>
              <a href="#about" className="nav-link relative text-sm font-medium text-cyan-300 hover:text-cyan-400 transition-all duration-300 tracking-wider uppercase" style={{fontFamily: 'Orbitron, monospace'}}>
                <span className="relative z-10">ABOUT</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 hover:w-full"></div>
              </a>
              <a href="#projects" className="nav-link relative text-sm font-medium text-cyan-300 hover:text-cyan-400 transition-all duration-300 tracking-wider uppercase" style={{fontFamily: 'Orbitron, monospace'}}>
                <span className="relative z-10">PROJECTS</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 hover:w-full"></div>
              </a>
              <a href="#blog" className="nav-link relative text-sm font-medium text-cyan-300 hover:text-cyan-400 transition-all duration-300 tracking-wider uppercase" style={{fontFamily: 'Orbitron, monospace'}}>
                <span className="relative z-10">BLOG</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 hover:w-full"></div>
              </a>
              <a href="#contact" className="nav-link relative text-sm font-medium text-cyan-300 hover:text-cyan-400 transition-all duration-300 tracking-wider uppercase" style={{fontFamily: 'Orbitron, monospace'}}>
                <span className="relative z-10">CONTACT</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 hover:w-full"></div>
              </a>
            </>
          ) : (
            <>
              <Link to="/" className="nav-link relative text-sm font-medium text-cyan-300 hover:text-cyan-400 transition-all duration-300 tracking-wider uppercase" style={{fontFamily: 'Orbitron, monospace'}}>
                <span className="relative z-10">HOME</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 hover:w-full"></div>
              </Link>
              <Link to="/blog" className="nav-link relative text-sm font-medium text-cyan-300 hover:text-cyan-400 transition-all duration-300 tracking-wider uppercase" style={{fontFamily: 'Orbitron, monospace'}}>
                <span className="relative z-10">BLOG</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 hover:w-full"></div>
              </Link>
            </>
          )}
        </div>

        {/* Cyberpunk Mobile Menu Button */}
        <button
          className="md:hidden relative p-2 text-cyan-400 focus:outline-none group"
          onClick={toggleMobileMenu}
        >
          <div className="absolute inset-0 bg-cyan-400/10 rounded border border-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Cyberpunk Mobile Menu */}
      <div className={`md:hidden backdrop-blur-md bg-black/95 border-t border-cyan-400/30 transition-all duration-500 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
          {isHomePage ? (
            <>
              <a href="#home" className="mobile-nav-link text-cyan-300 hover:text-cyan-400 transition-all duration-300 tracking-wider uppercase border-l-2 border-transparent hover:border-cyan-400 pl-4"
                 style={{fontFamily: 'Orbitron, monospace'}} onClick={() => setIsMobileMenuOpen(false)}>
                HOME
              </a>
              <a href="#about" className="mobile-nav-link text-cyan-300 hover:text-cyan-400 transition-all duration-300 tracking-wider uppercase border-l-2 border-transparent hover:border-cyan-400 pl-4"
                 style={{fontFamily: 'Orbitron, monospace'}} onClick={() => setIsMobileMenuOpen(false)}>
                ABOUT
              </a>
              <a href="#projects" className="mobile-nav-link text-cyan-300 hover:text-cyan-400 transition-all duration-300 tracking-wider uppercase border-l-2 border-transparent hover:border-cyan-400 pl-4"
                 style={{fontFamily: 'Orbitron, monospace'}} onClick={() => setIsMobileMenuOpen(false)}>
                PROJECTS
              </a>
              <a href="#blog" className="mobile-nav-link text-cyan-300 hover:text-cyan-400 transition-all duration-300 tracking-wider uppercase border-l-2 border-transparent hover:border-cyan-400 pl-4"
                 style={{fontFamily: 'Orbitron, monospace'}} onClick={() => setIsMobileMenuOpen(false)}>
                BLOG
              </a>
              <a href="#contact" className="mobile-nav-link text-cyan-300 hover:text-cyan-400 transition-all duration-300 tracking-wider uppercase border-l-2 border-transparent hover:border-cyan-400 pl-4"
                 style={{fontFamily: 'Orbitron, monospace'}} onClick={() => setIsMobileMenuOpen(false)}>
                CONTACT
              </a>
            </>
          ) : (
            <>
              <Link to="/" className="mobile-nav-link text-cyan-300 hover:text-cyan-400 transition-all duration-300 tracking-wider uppercase border-l-2 border-transparent hover:border-cyan-400 pl-4"
                    style={{fontFamily: 'Orbitron, monospace'}} onClick={() => setIsMobileMenuOpen(false)}>
                HOME
              </Link>
              <Link to="/blog" className="mobile-nav-link text-cyan-300 hover:text-cyan-400 transition-all duration-300 tracking-wider uppercase border-l-2 border-transparent hover:border-cyan-400 pl-4"
                    style={{fontFamily: 'Orbitron, monospace'}} onClick={() => setIsMobileMenuOpen(false)}>
                BLOG
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
