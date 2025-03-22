
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold">MamaDrop</span>
            </Link>
            <p className="text-foreground/70 mb-6 max-w-xs">
              Empowering women through digital marketing opportunities, creating financial independence from the comfort of home.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/70 hover:bg-primary/10 hover:text-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/70 hover:bg-primary/10 hover:text-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/70 hover:bg-primary/10 hover:text-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/70 hover:bg-primary/10 hover:text-primary transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-foreground/70 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-foreground/70 hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/programs" className="text-foreground/70 hover:text-primary transition-colors">Programs</Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-foreground/70 hover:text-primary transition-colors">Success Stories</Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/70 hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Programs</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/digital-marketing" className="text-foreground/70 hover:text-primary transition-colors">Digital Marketing</Link>
              </li>
              <li>
                <Link to="/affiliate-program" className="text-foreground/70 hover:text-primary transition-colors">Affiliate Program</Link>
              </li>
              <li>
                <Link to="/workshops" className="text-foreground/70 hover:text-primary transition-colors">Free Workshops</Link>
              </li>
              <li>
                <Link to="/mentorship" className="text-foreground/70 hover:text-primary transition-colors">Mentorship</Link>
              </li>
              <li>
                <Link to="/community" className="text-foreground/70 hover:text-primary transition-colors">Community</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-foreground/70">
              <li>Marrakech, Morocco</li>
              <li>info@mamadrop.com</li>
              <li>+212 5XX-XXXXXX</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} MamaDrop. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-foreground/60 hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-foreground/60 hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="text-foreground/60 hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
