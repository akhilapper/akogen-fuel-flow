
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img
            src="/lovable-uploads/1a5d044c-8f4a-498f-b92c-664b33aebb0d.png"
            alt="Akogen Logo"
            className="h-12"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-akogen-black hover:text-akogen-green font-medium transition duration-200">
            About
          </a>
          <a href="#process" className="text-akogen-black hover:text-akogen-green font-medium transition duration-200">
            Process
          </a>
          <a href="#benefits" className="text-akogen-black hover:text-akogen-green font-medium transition duration-200">
            Benefits
          </a>
          <a href="#testimonials" className="text-akogen-black hover:text-akogen-green font-medium transition duration-200">
            Partners
          </a>
          <a href="#contact" className="bg-akogen-green hover:bg-akogen-green-dark text-white py-2 px-4 rounded-md font-medium transition duration-200">
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-akogen-black" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-5">
          <div className="container mx-auto flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-akogen-black hover:text-akogen-green font-medium transition duration-200 px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#process" 
              className="text-akogen-black hover:text-akogen-green font-medium transition duration-200 px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Process
            </a>
            <a 
              href="#benefits" 
              className="text-akogen-black hover:text-akogen-green font-medium transition duration-200 px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#testimonials" 
              className="text-akogen-black hover:text-akogen-green font-medium transition duration-200 px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Partners
            </a>
            <a 
              href="#contact" 
              className="bg-akogen-green hover:bg-akogen-green-dark text-white py-2 px-4 rounded-md font-medium transition duration-200 mx-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
