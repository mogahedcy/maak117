import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        about: "About Us",
        services: "Services",
        contact: "Contact"
      },
      hero: {
        title: "Ahmed Abdulqader Company",
        subtitle: "Yemen Catering and Service",
        description: "Professional catering and logistics services for oil fields, relief organizations, and comprehensive transportation solutions",
        cta: "Get Quote"
      },
      about: {
        title: "About Us",
        content: "We are Ahmed Abdulqader Company, providing our distinguished services with the highest quality. Our previous experience in food catering for Balhaf Company, Total Company, Yemeni Company, Arab Company, Antrax Middle East Company, and other major companies. We use healthy and fresh food products that are transported with modern and advanced equipment capable of preserving food at a certain temperature to provide products and services in a distinctive and risk-free manner to ensure our company's prosperity and progress in the future of our happy Yemen."
      },
      services: {
        title: "Our Services",
        service1: {
          title: "Oil Field Catering",
          description: "Providing comprehensive food catering services to oil fields with the highest quality standards"
        },
        service2: {
          title: "Relief Organization Catering",
          description: "Professional food supply services for relief and humanitarian organizations"
        },
        service3: {
          title: "Transportation Services",
          description: "All types of transportation services with medium and heavy equipment"
        },
        service4: {
          title: "Additional Services",
          description: "Providing experienced workforce and luxury vehicles"
        }
      },
      contact: {
        title: "Contact Us",
        subtitle: "Get a Price Quote",
        email: "Email",
        phone: "Phone",
        location: "Our Location"
      },
      footer: {
        company: "Ahmed Abdulqader Company",
        description: "Professional catering and logistics services",
        quickLinks: "Quick Links",
        rights: "All rights reserved"
      }
    }
  },
  ar: {
    translation: {
      nav: {
        about: "من نحن",
        services: "خدماتنا",
        contact: "تواصل معنا"
      },
      hero: {
        title: "مؤسسة أحمد عبدالقادر",
        subtitle: "للتجارة والاستيراد وخدمات التموين",
        description: "خدمات تموين غذائي ولوجستية احترافية للحقول النفطية والمنظمات الإغاثية وحلول نقل شاملة",
        cta: "احصل على عرض سعر"
      },
      about: {
        title: "من نحن",
        content: "نحن مؤسسة احمد عبد القادر نقدم خدماتنا المميزة بأعلى جودة كون خبرتنا السابقة في التموين الغذائي لشركة بلحاف وشركة توتال والشركة اليمنية والشركة العربية وشركة انتراكس الشرق الاوسط وغيرها من الشركات الكبرى مستخدمين منتجات غذائية صحية وطازجة ويتم نقلها بمعدات حديثة ومتطورة تمتلك الحفاظ على الاغذية بدرجة برودة معينة لتقديم المنتجات والخدمات بشكل متميز وخالي من المخاطر لتضمين مؤسستنا بالأزدهار والتقدم في مستقبل يمننا السعيد."
      },
      services: {
        title: "خدماتنا",
        service1: {
          title: "تموين غذائي للحقول النفطية",
          description: "تقديم خدمات تموين غذائي شاملة للحقول النفطية بأعلى معايير الجودة"
        },
        service2: {
          title: "تموين للمنظمات الإغاثية",
          description: "خدمات توريد غذائي احترافية للمنظمات الإغاثية والإنسانية"
        },
        service3: {
          title: "خدمات النقل",
          description: "جميع أنواع خدمات النقل بمعدات متوسطة وثقيلة"
        },
        service4: {
          title: "خدمات إضافية",
          description: "توفير أيدي عاملة ذات خبرة وسيارات فاخرة"
        }
      },
      contact: {
        title: "تواصل معنا",
        subtitle: "للحصول على عروض سعر",
        email: "البريد الإلكتروني",
        phone: "الهاتف",
        location: "موقعنا"
      },
      footer: {
        company: "مؤسسة أحمد عبدالقادر",
        description: "خدمات تموين ولوجستية احترافية",
        quickLinks: "روابط سريعة",
        rights: "جميع الحقوق محفوظة"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ar',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
