
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './common/Card';

const Features = () => {
  const features = [
    {
      id: 1,
      title: "ندوات تعليمية مجانية",
      description: "نقدم ورش تدريبية مجانية في جميع المناطق. تساعد هذه الجلسات النساء على تعلم التجارة الإلكترونية والتسويق بالعمولة باستخدام أجهزتهن المحمولة من المنزل.",
      icon: "🎓"
    },
    {
      id: 2,
      title: "تدريب مجاني على التسويق الرقمي",
      description: "نساعد النساء على تعلم كيفية كسب المال من المنزل من خلال التجارة الإلكترونية باستخدام التسويق بالعمولة. تم تصميم برنامجنا التدريبي لمساعدة النساء على بدء كسب الدخل باستخدام هاتف محمول فقط.",
      icon: "💻"
    },
    {
      id: 3,
      title: "انضمي إلى شبكة نسائية قوية",
      description: "كوني جزءًا من أكبر مجتمع نسائي في مجال التجارة الإلكترونية، حيث تساعد النساء بعضهن البعض على النجاح والتطوير المستمر لمهاراتهن وأعمالهن.",
      icon: "👭"
    },
    {
      id: 4,
      title: "100% مجاني للبدء",
      description: "لست بحاجة إلى دفع أي شيء للبدء. يتيح برنامجنا للنساء تعلم التجارة الإلكترونية والعمل في التسويق بالعمولة مجانًا من هواتفهن المحمولة.",
      icon: "🔑"
    }
  ];

  return (
    <section className="bg-secondary py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
            لماذا تختارين MamaDrop
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto">
            تمكين المرأة من خلال الفرص الرقمية
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            توفر MamaDrop الأدوات والتدريب والدعم الذي تحتاجين إليه للنجاح في الاقتصاد الرقمي، كل ذلك من راحة منزلك.
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
