
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold font-poppins text-portfolio-dark">
          Portfolio.
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 font-poppins font-medium">
            <li><a href="#home" className="text-portfolio-dark hover:text-portfolio-blue">Home</a></li>
            <li><a href="#about" className="text-portfolio-dark hover:text-portfolio-blue">About</a></li>
            <li><a href="#projects" className="text-portfolio-dark hover:text-portfolio-blue">Projects</a></li>
            <li><a href="#contact" className="text-portfolio-dark hover:text-portfolio-blue">Contact</a></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-portfolio-dark" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <ul className="flex flex-col space-y-4 p-6 font-poppins font-medium">
            <li><a href="#home" className="block text-portfolio-dark hover:text-portfolio-blue" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" className="block text-portfolio-dark hover:text-portfolio-blue" onClick={toggleMenu}>About</a></li>
            <li><a href="#projects" className="block text-portfolio-dark hover:text-portfolio-blue" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" className="block text-portfolio-dark hover:text-portfolio-blue" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
