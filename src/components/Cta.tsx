
import React from 'react';
import Button from './common/Button';

const Cta = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl opacity-60"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent/10 rounded-full filter blur-3xl opacity-60"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="bg-gradient-to-r from-primary/90 to-gold-dark/90 rounded-2xl py-16 px-6 md:py-20 md:px-12 shadow-elevated overflow-hidden relative">
          {/* Abstract shapes */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-tr-full"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white mb-6 backdrop-blur-sm">
              انضمي إلى حركتنا
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              ابدئي رحلتك نحو الاستقلال المالي اليوم
            </h2>
            
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              انضمي إلى آلاف النساء اللواتي يحققن أحلامهن بالفعل مع MamaDrop. لا يلزم أي استثمار - فقط تفانيك وهاتف محمول.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
              >
                سجلي الآن - مجانًا
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-white border-white hover:bg-white/10"
              >
                اعرفي المزيد
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
