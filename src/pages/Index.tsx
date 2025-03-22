
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Steps from '@/components/Steps';
import Testimonial from '@/components/Testimonial';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';

const Index = () => {
  // Add scroll reveal animation
  useEffect(() => {
    // Set RTL direction for Arabic content
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          // Make sure visibility is set to visible by using proper typecasting
          const element = entry.target as HTMLElement;
          element.style.visibility = 'visible';
          element.style.opacity = '1';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section > div');
    sections.forEach(section => {
      // Use visibility: hidden instead of opacity: 0 to avoid layout shifts
      section.classList.add('invisible');
      // Use proper typecasting for setting style properties
      const sectionElement = section as HTMLElement;
      sectionElement.style.opacity = '0';
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen" dir="rtl" lang="ar">
      <Navbar />
      <main className="flex-grow pt-20"> {/* Add padding-top to account for fixed navbar */}
        <Hero />
        <Features />
        <Steps />
        <Testimonial />
        <Cta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
