
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

  const pathname = location.pathname;
  const getActiveTopRoute = (path: string) => {
    if (path.startsWith('/blog')) return '/blog';
    if (path.startsWith('/about')) return '/about';
    if (path.startsWith('/projects')) return '/projects';
    if (path.startsWith('/contact')) return '/contact';
    return '/';
  };

  const activeRoute = getActiveTopRoute(pathname);
  const navLinks = [
    { to: '/', label: 'HOME' },
    { to: '/about', label: 'ABOUT' },
    { to: '/projects', label: 'PROJECTS' },
    { to: '/blog', label: 'BLOG' },
    { to: '/contact', label: 'CONTACT' },
  ];
  const visibleLinks = navLinks.filter(l => l.to !== activeRoute);

  return (
    <header className="w-full fixed top-6 left-0 z-50 flex justify-center pointer-events-none px-6">
      <div className="nav-pill pointer-events-auto">
        {/* Logo with pill styling */}
        <Link to="/" className="logo-pill flex items-center magnify-on-hover">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-black font-bold" style={{fontFamily: 'Orbitron, monospace'}}>
            UH
          </div>
          <span className="ml-3 text-cyan-300 font-semibold tracking-wider" style={{fontFamily: 'Orbitron, monospace'}}>
            UDAY HESE
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 ml-auto">
          {visibleLinks.filter(l => l.to !== '/contact').map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="magnify-on-hover text-sm text-cyan-300/90 hover:text-cyan-300 transition-all duration-300 tracking-wider uppercase font-medium"
              style={{fontFamily: 'Orbitron, monospace'}}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://drive.google.com/file/d/1F78Mm3hfcVNxLZF8PLc661tYO8zagOQ1/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="magnify-on-hover text-sm text-cyan-300/90 hover:text-cyan-300 transition-all duration-300 tracking-wider uppercase font-medium"
            style={{fontFamily: 'Orbitron, monospace'}}
          >
            RESUME
          </a>
          {activeRoute !== '/contact' && (
            <Link
              to="/contact"
              className={`contact-pill text-sm tracking-wider uppercase ${activeRoute === '/contact' ? 'is-active' : ''}`}
              style={{fontFamily: 'Orbitron, monospace'}}
              tabIndex={0}
              role="button"
              aria-label="Contact"
            >
              {/* Fill layer */}
              <span className="contact-pill__fill" aria-hidden="true"></span>

              {/* Reflective top edge */}
              <span className="contact-pill__reflect" aria-hidden="true"></span>

              {/* Layered bands for level effect */}
              <span className="fill-band band-1" aria-hidden="true"></span>
              <span className="fill-band band-2" aria-hidden="true"></span>
              <span className="fill-band band-3" aria-hidden="true"></span>

              {/* Button content */}
              <span style={{position: 'relative', zIndex: 2}}>CONTACT</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{position: 'relative', zIndex: 2}}>
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-auto p-2 text-cyan-300 focus:outline-none rounded-md hover:bg-cyan-400/10 transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full px-6 pointer-events-auto">
          <div className="nav-pill flex-col items-stretch gap-2 py-4">
            {visibleLinks.filter(l => l.to !== '/contact').map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="text-cyan-300 hover:text-cyan-400 transition-all duration-300 tracking-wider uppercase text-sm font-medium py-3 px-4 rounded-md hover:bg-cyan-400/10 text-center"
                style={{fontFamily: 'Orbitron, monospace'}}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://drive.google.com/file/d/1F78Mm3hfcVNxLZF8PLc661tYO8zagOQ1/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 hover:text-cyan-400 transition-all duration-300 tracking-wider uppercase text-sm font-medium py-3 px-4 rounded-md hover:bg-cyan-400/10 text-center"
              style={{fontFamily: 'Orbitron, monospace'}}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              RESUME
            </a>
            {activeRoute !== '/contact' && (
              <Link
                to="/contact"
                className={`contact-pill text-sm tracking-wider uppercase justify-center mt-2 ${activeRoute === '/contact' ? 'is-active' : ''}`}
                style={{fontFamily: 'Orbitron, monospace'}}
                onClick={() => setIsMobileMenuOpen(false)}
                tabIndex={0}
                role="button"
                aria-label="Contact"
              >
                {/* Fill layer */}
                <span className="contact-pill__fill" aria-hidden="true"></span>

                {/* Reflective top edge */}
                <span className="contact-pill__reflect" aria-hidden="true"></span>

                {/* Layered bands for level effect */}
                <span className="fill-band band-1" aria-hidden="true"></span>
                <span className="fill-band band-2" aria-hidden="true"></span>
                <span className="fill-band band-3" aria-hidden="true"></span>

                {/* Button content */}
                <span style={{position: 'relative', zIndex: 2}}>CONTACT</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{position: 'relative', zIndex: 2}}>
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
