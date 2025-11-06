import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t py-12" data-testid="footer-main">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-3 text-foreground" data-testid="text-footer-company">
              {t('footer.company')}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">{t('footer.quickLinks')}</h3>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-start"
                data-testid="link-footer-about"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-start"
                data-testid="link-footer-services"
              >
                {t('nav.services')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-start"
                data-testid="link-footer-contact"
              >
                {t('nav.contact')}
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">{t('contact.title')}</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="mailto:yks936@gmail.com" className="hover:text-primary transition-colors">
                yks936@gmail.com
              </a>
              <a href="tel:+967773505749" className="hover:text-primary transition-colors">
                +967 773 505 749
              </a>
            </div>
          </div>
        </div>

        <div className="border-t pt-6">
          <p className="text-center text-sm text-muted-foreground" data-testid="text-copyright">
            © {currentYear} {t('footer.company')}. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
}
