
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Steps = () => {
  const steps = [
    {
      id: 1,
      title: "Free Registration",
      description: "Sign up without any financial commitment and become part of our empowering community.",
      icon: "📝"
    },
    {
      id: 2,
      title: "Learning & Training",
      description: "Access free courses and live workshops led by industry experts in digital marketing.",
      icon: "🧠"
    },
    {
      id: 3,
      title: "Marketing & Earning",
      description: "Start promoting products and earn commissions for each successful referral you make.",
      icon: "💰"
    },
    {
      id: 4,
      title: "Growth & Leadership",
      description: "Develop your skills, build a team, and help other women succeed in their journey.",
      icon: "🚀"
    }
  ];

  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
            How MamaDrop Works
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto">
            Simple Steps to Financial Independence
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Our program makes it easy to start and grow your online business, even if you have no prior experience.
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
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-foreground/70">{step.description}</p>
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
