
import React, { useEffect, useRef } from 'react';
import Button from './common/Button';

const Hero = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    const loadImage = async () => {
      const img = imageRef.current;
      if (img) {
        img.classList.add('animate-fade-in');
      }
    };
    
    loadImage();
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-gold-light/10 to-transparent"></div>
      <div className="absolute -top-10 left-1/4 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute top-40 right-1/4 w-60 h-60 bg-primary/10 rounded-full filter blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <span className="animate-pulse-subtle">✦</span>
              <span className="mr-2">تمكين المرأة من خلال التسويق الالكتروني</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight animate-fade-in text-right">
              حققي <span className="text-primary">استقلالك المادي</span> مع MamaDrop
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 animate-fade-in stagger-1 text-right">
              MamaDrop ملتزمة بتمكين المرأة من خلال فرص العمل القائمة على الهاتف المحمول. انضمي إلى آلاف النساء اللواتي يحققن الاستقلال المالي من خلال برنامجنا للتسويق الرقمي.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in stagger-2 justify-end">
              <Button size="lg">
                انضمي مجانًا
              </Button>
              <Button variant="outline" size="lg">
                تعرفي أكثر
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-6 border-t border-border animate-fade-in stagger-3">
              <div className="text-right">
                <p className="text-3xl font-bold">+10K</p>
                <p className="text-sm text-foreground/70">امرأة ممكّنة</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold">100%</p>
                <p className="text-sm text-foreground/70">تدريب مجاني</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold">24/7</p>
                <p className="text-sm text-foreground/70">نظام دعم</p>
              </div>
            </div>
          </div>
          
          <div className="relative lg:ml-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl transform rotate-6 scale-105"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-elevated bg-white p-2">
              <img
                ref={imageRef}
                src="/lovable-uploads/ca850c3c-d8c0-4081-ab36-bb4af5e83d9a.png"
                alt="تمكين المرأة من خلال التسويق الرقمي"
                className="w-full h-auto object-cover opacity-0 transition-opacity"
                style={{ aspectRatio: "4/3" }}
                loading="eager"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-tr from-gold-light to-gold-dark rounded-full opacity-30 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
