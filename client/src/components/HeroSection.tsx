import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import heroImage from '@assets/1762458423_1762463913431.png';

export default function HeroSection() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center" data-testid="section-hero">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight" data-testid="text-hero-title">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-2" data-testid="text-hero-subtitle">
            {t('hero.subtitle')}
          </p>
          <p className="text-lg text-white/80 mb-8 max-w-2xl leading-relaxed" data-testid="text-hero-description">
            {t('hero.description')}
          </p>
          <Button
            size="lg"
            onClick={scrollToContact}
            data-testid="button-get-quote"
            className="text-base hover-elevate active-elevate-2"
          >
            {t('hero.cta')}
            {isRTL ? <ArrowLeft className="h-5 w-5 mr-2" /> : <ArrowRight className="h-5 w-5 ml-2" />}
          </Button>
        </div>
      </div>
    </section>
  );
}
