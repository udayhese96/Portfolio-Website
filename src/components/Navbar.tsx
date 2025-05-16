
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isAdminPage = location.pathname.includes('/admin');

  // Skip rendering Navbar on admin pages
  if (isAdminPage) return null;

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

  const isAdmin = localStorage.getItem("isAdminLoggedIn") === "true";

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="text-portfolio-dark text-2xl font-bold font-poppins">Portfolio.</a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <a href="#home" className="text-portfolio-dark hover:text-portfolio-blue transition-colors">Home</a>
          <a href="#about" className="text-portfolio-dark hover:text-portfolio-blue transition-colors">About</a>
          <a href="#projects" className="text-portfolio-dark hover:text-portfolio-blue transition-colors">Projects</a>
          <a href="#contact" className="text-portfolio-dark hover:text-portfolio-blue transition-colors">Contact</a>
          {isAdmin ? (
            <a href="/admin/dashboard" className="text-portfolio-blue hover:text-portfolio-dark transition-colors">Admin</a>
          ) : (
            <a href="/admin" className="text-portfolio-dark hover:text-portfolio-blue transition-colors">Login</a>
          )}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-portfolio-dark focus:outline-none"
          onClick={toggleMobileMenu}
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
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-white shadow-lg transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-60' : 'max-h-0'}`}>
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          <a href="#home" className="text-portfolio-dark hover:text-portfolio-blue transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#about" className="text-portfolio-dark hover:text-portfolio-blue transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#projects" className="text-portfolio-dark hover:text-portfolio-blue transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
          <a href="#contact" className="text-portfolio-dark hover:text-portfolio-blue transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          {isAdmin ? (
            <a href="/admin/dashboard" className="text-portfolio-blue hover:text-portfolio-dark transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Admin</a>
          ) : (
            <a href="/admin" className="text-portfolio-dark hover:text-portfolio-blue transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Login</a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
