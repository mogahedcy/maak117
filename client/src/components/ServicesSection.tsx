import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { Utensils, Heart, Truck, Wrench } from 'lucide-react';
import oilFieldImage from '@assets/generated_images/Oil_field_catering_service_08ea2bc3.png';
import reliefImage from '@assets/generated_images/Relief_organization_catering_e16490cf.png';
import transportImage from '@assets/generated_images/Transportation_services_fleet_8d442aae.png';
import additionalImage from '@assets/generated_images/Additional_services_workforce_a1911e94.png';

export default function ServicesSection() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Utensils,
      title: t('services.service1.title'),
      description: t('services.service1.description'),
      image: oilFieldImage
    },
    {
      icon: Heart,
      title: t('services.service2.title'),
      description: t('services.service2.description'),
      image: reliefImage
    },
    {
      icon: Truck,
      title: t('services.service3.title'),
      description: t('services.service3.description'),
      image: transportImage
    },
    {
      icon: Wrench,
      title: t('services.service4.title'),
      description: t('services.service4.description'),
      image: additionalImage
    }
  ];

  return (
    <section id="services" className="py-16 md:py-20 lg:py-24 bg-muted/30" data-testid="section-services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12" data-testid="text-services-title">
          {t('services.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="overflow-hidden hover-elevate transition-all"
                data-testid={`card-service-${index}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <Icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-foreground" data-testid={`text-service-title-${index}`}>
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground" data-testid={`text-service-description-${index}`}>
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
