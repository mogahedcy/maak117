import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { Building2, Users, Award, TrendingUp } from 'lucide-react';

export default function AboutSection() {
  const { t } = useTranslation();

  const features = [
    { icon: Award, label: { en: 'Quality', ar: 'الجودة' } },
    { icon: Users, label: { en: 'Experience', ar: 'الخبرة' } },
    { icon: Building2, label: { en: 'Major Clients', ar: 'عملاء كبار' } },
    { icon: TrendingUp, label: { en: 'Growth', ar: 'النمو' } }
  ];

  return (
    <section id="about" className="py-16 md:py-20 lg:py-24" data-testid="section-about">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12" data-testid="text-about-title">
            {t('about.title')}
          </h2>
          
          <Card className="p-6 md:p-8 mb-12">
            <p className="text-base md:text-lg leading-relaxed text-foreground" data-testid="text-about-content">
              {t('about.content')}
            </p>
          </Card>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const currentLang = t('nav.about').includes('من') ? 'ar' : 'en';
              return (
                <Card 
                  key={index} 
                  className="p-6 text-center hover-elevate transition-shadow"
                  data-testid={`card-feature-${index}`}
                >
                  <Icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <p className="text-sm font-medium text-foreground">
                    {feature.label[currentLang]}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
