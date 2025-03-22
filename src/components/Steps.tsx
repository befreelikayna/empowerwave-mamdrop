
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Steps = () => {
  const steps = [
    {
      id: 1,
      title: "التسجيل المجاني",
      description: "سجلي بدون أي التزام مالي وكوني جزءًا من مجتمعنا المُمكّن.",
      icon: "📝"
    },
    {
      id: 2,
      title: "التعلم والتدريب",
      description: "استفيدي من الدورات المجانية وورش العمل المباشرة التي يقودها خبراء في مجال التسويق الرقمي.",
      icon: "🧠"
    },
    {
      id: 3,
      title: "التسويق والكسب",
      description: "ابدئي بالترويج للمنتجات واكسبي عمولات مقابل كل إحالة ناجحة تقومين بها.",
      icon: "💰"
    },
    {
      id: 4,
      title: "النمو والقيادة",
      description: "طوري مهاراتك، وابني فريقك، وساعدي النساء الأخريات على النجاح في رحلتهن.",
      icon: "🚀"
    }
  ];

  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
            كيف يعمل MamaDrop
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto">
            خطوات بسيطة نحو الاستقلال المالي
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            يجعل برنامجنا من السهل بدء وتنمية عملك عبر الإنترنت، حتى لو لم يكن لديك خبرة سابقة.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform -translate-x-1/2 hidden md:block"></div>

          {steps.map((step, index) => (
            <div 
              key={step.id}
              className={`flex flex-col md:flex-row md:items-center gap-8 mb-16 ${
                index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <h3 className="text-2xl font-bold mb-3 text-right">{step.title}</h3>
                <p className="text-foreground/70 text-right">{step.description}</p>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 flex items-center justify-center z-10 border-4 border-background text-3xl">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full h-10 flex items-center justify-center md:hidden">
                    <ArrowRight className="text-primary/50 rotate-90" />
                  </div>
                )}
              </div>

              <div className="flex-1"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
