import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Globe, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('lang', i18n.language);
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
  }, [i18n.language, isRTL]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm border-b' : 'bg-transparent'
      }`}
      data-testid="header-main"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 gap-4">
          <div className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground leading-tight" data-testid="text-company-name">
                {isRTL ? 'مؤسسة أحمد عبدالقادر' : 'Ahmed Abdulqader Company'}
              </span>
              <span className="text-xs text-muted-foreground">
                {isRTL ? 'للتجارة والاستيراد وخدمات التموين' : 'Yemen Catering and Service'}
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              data-testid="link-about"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              data-testid="link-services"
            >
              {t('nav.services')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              data-testid="link-contact"
            >
              {t('nav.contact')}
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleLanguage}
              data-testid="button-language-toggle"
              className="hover-elevate active-elevate-2"
            >
              <Globe className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="md:hidden hover-elevate active-elevate-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t" data-testid="mobile-menu">
            <nav className="flex flex-col gap-3">
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors text-start px-2 py-1"
                data-testid="link-about-mobile"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors text-start px-2 py-1"
                data-testid="link-services-mobile"
              >
                {t('nav.services')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors text-start px-2 py-1"
                data-testid="link-contact-mobile"
              >
                {t('nav.contact')}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
