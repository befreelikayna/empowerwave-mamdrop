
import React from 'react';
import { Card } from './common/Card';
import { Quote } from 'lucide-react';

const Testimonial = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-secondary/50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
            قصص النجاح
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto">
            اسمعي من مجتمعنا
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            قصص حقيقية من نساء حقيقيات غيرن حياتهن من خلال MamaDrop.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="p-8 h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-elevated border-t-4 border-t-primary bg-white">
            <div className="flex flex-col h-full">
              <Quote className="text-primary/40 w-12 h-12 mb-6" />
              <p className="text-lg mb-8 flex-grow text-right">
                "لقد غيرت MamaDrop حياتي تمامًا. كأم عزباء، كنت أكافح لتدبر أموري. الآن يمكنني العمل من المنزل وكسب ما يكفي لإعالة عائلتي مع الاستمرار في التواجد مع أطفالي."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 overflow-hidden flex items-center justify-center text-primary font-bold">
                  سع
                </div>
                <div className="mr-4 text-right">
                  <p className="font-semibold">سارة ع.</p>
                  <p className="text-sm text-foreground/60">عضوة منذ 2022</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-elevated border-t-4 border-t-primary bg-white">
            <div className="flex flex-col h-full">
              <Quote className="text-primary/40 w-12 h-12 mb-6" />
              <p className="text-lg mb-8 flex-grow text-right">
                "التدريب المقدم من MamaDrop مذهل. لم تكن لدي خلفية في التسويق الرقمي، لكنهم جعلوه سهل الفهم. في غضون شهرين، كنت أكسب دخلاً ثابتًا من هاتفي."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 overflow-hidden flex items-center justify-center text-primary font-bold">
                  لم
                </div>
                <div className="mr-4 text-right">
                  <p className="font-semibold">ليلى م.</p>
                  <p className="text-sm text-foreground/60">عضوة منذ 2021</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-elevated border-t-4 border-t-primary bg-white">
            <div className="flex flex-col h-full">
              <Quote className="text-primary/40 w-12 h-12 mb-6" />
              <p className="text-lg mb-8 flex-grow text-right">
                "مجتمع النساء في MamaDrop داعم للغاية. نحن نرفع بعضنا البعض ونشارك المعرفة. لقد كوّنت صداقات وشراكات عمل مدى الحياة من خلال هذه المنصة الرائعة."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 overflow-hidden flex items-center justify-center text-primary font-bold">
                  فز
                </div>
                <div className="mr-4 text-right">
                  <p className="font-semibold">فاطمة ز.</p>
                  <p className="text-sm text-foreground/60">عضوة منذ 2023</p>
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
