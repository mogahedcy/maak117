import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function ContactSection() {
  const { t } = useTranslation();
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current && typeof window !== 'undefined') {
      const L = (window as any).L;
      if (L) {
        const map = L.map(mapRef.current).setView([15.301483, 44.238522], 13);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        L.marker([15.301483, 44.238522]).addTo(map)
          .bindPopup('Ahmed Abdulqader Company<br>مؤسسة أحمد عبدالقادر')
          .openPopup();

        return () => {
          map.remove();
        };
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && !(window as any).L) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <section id="contact" className="py-16 md:py-20 lg:py-24" data-testid="section-contact">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-3" data-testid="text-contact-title">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-12" data-testid="text-contact-subtitle">
            {t('contact.subtitle')}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="p-6 hover-elevate" data-testid="card-email">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-md">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">{t('contact.email')}</h3>
                    <a 
                      href="mailto:yks936@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-email"
                    >
                      yks936@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover-elevate" data-testid="card-phone">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-md">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">{t('contact.phone')}</h3>
                    <a 
                      href="tel:+967773505749" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-phone"
                    >
                      +967 773 505 749
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover-elevate" data-testid="card-location">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-md">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">{t('contact.location')}</h3>
                    <p className="text-muted-foreground">15.301483, 44.238522</p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="overflow-hidden" data-testid="card-map">
              <div 
                ref={mapRef} 
                className="w-full h-[400px]"
                data-testid="map-container"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
