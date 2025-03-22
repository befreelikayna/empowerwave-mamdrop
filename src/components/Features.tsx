
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './common/Card';

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Free Educational Workshops",
      description: "We offer free training workshops across all regions. These sessions help women learn about e-commerce and affiliate marketing using their mobile devices from home.",
      icon: "🎓"
    },
    {
      id: 2,
      title: "Free Digital Marketing Training",
      description: "We help women learn how to earn money from home through e-commerce using affiliate marketing. Our training program is designed to help women start earning income using just a mobile phone.",
      icon: "💻"
    },
    {
      id: 3,
      title: "Join a Strong Women's Network",
      description: "Be part of the largest women's community in e-commerce, where women help each other succeed and continuously develop their skills and businesses.",
      icon: "👭"
    },
    {
      id: 4,
      title: "100% Free to Start",
      description: "You don't need to pay anything to get started. Our program allows women to learn e-commerce and work in affiliate marketing for free from their mobile phones.",
      icon: "🔑"
    }
  ];

  return (
    <section className="bg-secondary py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
            Why Choose MamaDrop
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto">
            Empowering Women Through Digital Opportunities
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            MamaDrop provides the tools, training, and support you need to succeed in the digital economy, all from the comfort of your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className="feature-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card 
                className="h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-elevated"
                variant="default"
              >
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 text-2xl">
                    {feature.icon}
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/70">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
