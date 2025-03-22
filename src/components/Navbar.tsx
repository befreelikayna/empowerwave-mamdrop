
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import Button from './common/Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            aria-label="MamaDrop Home"
          >
            <span className="text-2xl font-bold text-foreground">MamaDrop</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              الرئيسية
            </Link>
            <Link 
              to="/about" 
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              من نحن
            </Link>
            <Link 
              to="/programs" 
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              البرامج
            </Link>
            <Link 
              to="/contact" 
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              اتصل بنا
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              className="p-2 rounded-full text-foreground hover:bg-primary/10 transition-colors"
              aria-label="تغيير اللغة"
            >
              <Globe size={20} />
            </button>
            
            <Button 
              variant="primary"
              className="hidden md:flex"
            >
              انضمي الآن
            </Button>

            <button 
              className="w-10 h-10 flex items-center justify-center rounded-full bg-background/5 backdrop-blur-sm text-foreground md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`
        fixed inset-0 bg-background z-50 transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        md:hidden
      `}>
        <div className="flex justify-end p-4">
          <button
            className="w-10 h-10 flex items-center justify-center rounded-full bg-background/10"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-full space-y-8 -mt-16">
          <Link 
            to="/" 
            className="text-2xl font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            الرئيسية
          </Link>
          <Link 
            to="/about" 
            className="text-2xl font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            من نحن
          </Link>
          <Link 
            to="/programs" 
            className="text-2xl font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            البرامج
          </Link>
          <Link 
            to="/contact" 
            className="text-2xl font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            اتصل بنا
          </Link>
          <Button
            variant="primary"
            size="lg"
            className="mt-8"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            انضمي الآن
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
