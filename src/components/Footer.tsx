
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
            <p className="text-foreground/70 mb-6 max-w-xs text-right">
              تمكين النساء من خلال فرص التسويق الرقمي، وخلق الاستقلال المالي من راحة المنزل.
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
            <h3 className="text-lg font-semibold mb-6 text-right">روابط سريعة</h3>
            <ul className="space-y-4 text-right">
              <li>
                <Link to="/" className="text-foreground/70 hover:text-primary transition-colors">الرئيسية</Link>
              </li>
              <li>
                <Link to="/about" className="text-foreground/70 hover:text-primary transition-colors">من نحن</Link>
              </li>
              <li>
                <Link to="/programs" className="text-foreground/70 hover:text-primary transition-colors">البرامج</Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-foreground/70 hover:text-primary transition-colors">قصص النجاح</Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/70 hover:text-primary transition-colors">اتصل بنا</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-right">البرامج</h3>
            <ul className="space-y-4 text-right">
              <li>
                <Link to="/digital-marketing" className="text-foreground/70 hover:text-primary transition-colors">التسويق الرقمي</Link>
              </li>
              <li>
                <Link to="/affiliate-program" className="text-foreground/70 hover:text-primary transition-colors">برنامج التسويق بالعمولة</Link>
              </li>
              <li>
                <Link to="/workshops" className="text-foreground/70 hover:text-primary transition-colors">ورش عمل مجانية</Link>
              </li>
              <li>
                <Link to="/mentorship" className="text-foreground/70 hover:text-primary transition-colors">التوجيه والإرشاد</Link>
              </li>
              <li>
                <Link to="/community" className="text-foreground/70 hover:text-primary transition-colors">المجتمع</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-right">اتصل بنا</h3>
            <ul className="space-y-4 text-foreground/70 text-right">
              <li>مراكش، المغرب</li>
              <li>info@mamadrop.com</li>
              <li dir="ltr">+212 5XX-XXXXXX</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} MamaDrop. جميع الحقوق محفوظة.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-foreground/60 hover:text-primary transition-colors">سياسة الخصوصية</Link>
            <Link to="/terms" className="text-foreground/60 hover:text-primary transition-colors">شروط الخدمة</Link>
            <Link to="/cookies" className="text-foreground/60 hover:text-primary transition-colors">سياسة ملفات تعريف الارتباط</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
