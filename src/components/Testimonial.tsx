
import React from 'react';
import { Card } from './common/Card';
import { Quote } from 'lucide-react';

const Testimonial = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-secondary/50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto">
            Hear From Our Community
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Real stories from real women who have transformed their lives through MamaDrop.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="p-8 h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-elevated border-t-4 border-t-primary bg-white">
            <div className="flex flex-col h-full">
              <Quote className="text-primary/40 w-12 h-12 mb-6" />
              <p className="text-lg mb-8 flex-grow">
                "MamaDrop has completely changed my life. As a single mother, I was struggling to make ends meet. Now I can work from home and earn enough to support my family while still being present for my children."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 overflow-hidden flex items-center justify-center text-primary font-bold">
                  SA
                </div>
                <div className="ml-4">
                  <p className="font-semibold">Sarah A.</p>
                  <p className="text-sm text-foreground/60">Member since 2022</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-elevated border-t-4 border-t-primary bg-white">
            <div className="flex flex-col h-full">
              <Quote className="text-primary/40 w-12 h-12 mb-6" />
              <p className="text-lg mb-8 flex-grow">
                "The training provided by MamaDrop is incredible. I had no background in digital marketing, but they made it so easy to understand. Within two months, I was earning a stable income from my phone."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 overflow-hidden flex items-center justify-center text-primary font-bold">
                  LM
                </div>
                <div className="ml-4">
                  <p className="font-semibold">Laila M.</p>
                  <p className="text-sm text-foreground/60">Member since 2021</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-elevated border-t-4 border-t-primary bg-white">
            <div className="flex flex-col h-full">
              <Quote className="text-primary/40 w-12 h-12 mb-6" />
              <p className="text-lg mb-8 flex-grow">
                "The community of women at MamaDrop is so supportive. We lift each other up and share knowledge. I've made lifelong friends and business partners through this amazing platform."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 overflow-hidden flex items-center justify-center text-primary font-bold">
                  FZ
                </div>
                <div className="ml-4">
                  <p className="font-semibold">Fatima Z.</p>
                  <p className="text-sm text-foreground/60">Member since 2023</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
