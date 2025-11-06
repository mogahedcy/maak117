// Translations
const translations = {
  en: {
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
    features: {
      quality: "Quality",
      experience: "Experience",
      clients: "Major Clients",
      growth: "Growth"
    },
    footer: {
      company: "Ahmed Abdulqader Company",
      description: "Professional catering and logistics services",
      quickLinks: "Quick Links",
      rights: "All rights reserved"
    }
  },
  ar: {
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
    features: {
      quality: "الجودة",
      experience: "الخبرة",
      clients: "عملاء كبار",
      growth: "النمو"
    },
    footer: {
      company: "مؤسسة أحمد عبدالقادر",
      description: "خدمات تموين ولوجستية احترافية",
      quickLinks: "روابط سريعة",
      rights: "جميع الحقوق محفوظة"
    }
  }
};

// Current language state
let currentLang = 'ar';

// Update language
function updateLanguage(lang) {
  currentLang = lang;
  const html = document.documentElement;
  
  // Set language and direction
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const keys = element.getAttribute('data-i18n').split('.');
    let value = translations[lang];
    
    for (const key of keys) {
      value = value[key];
    }
    
    if (value) {
      element.textContent = value;
    }
  });
  
  // Update company title
  const companyTitle = document.getElementById('company-title');
  if (companyTitle) {
    companyTitle.textContent = lang === 'ar' 
      ? 'مؤسسة أحمد عبدالقادر' 
      : 'Ahmed Abdulqader Company';
  }
  
  // Update company subtitle
  const companySubtitle = document.getElementById('company-subtitle');
  if (companySubtitle) {
    companySubtitle.textContent = lang === 'ar'
      ? 'للتجارة والاستيراد وخدمات التموين'
      : 'Yemen Catering and Service';
  }
  
  // Update hero CTA arrow direction
  const heroCta = document.getElementById('hero-cta');
  if (heroCta) {
    const arrow = heroCta.querySelector('.btn-icon-arrow polyline');
    if (arrow) {
      if (lang === 'ar') {
        arrow.setAttribute('points', '12 5 5 12 12 19');
      } else {
        arrow.setAttribute('points', '12 5 19 12 12 19');
      }
    }
  }
}

// Initialize language
document.addEventListener('DOMContentLoaded', function() {
  // Set initial language
  updateLanguage(currentLang);
  
  // Language toggle
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', function() {
      currentLang = currentLang === 'ar' ? 'en' : 'ar';
      updateLanguage(currentLang);
    });
  }
  
  // Header scroll effect
  const header = document.getElementById('header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconMenu = mobileMenuBtn.querySelector('.icon-menu');
  const iconClose = mobileMenuBtn.querySelector('.icon-close');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      const isActive = mobileMenu.classList.toggle('active');
      
      if (isActive) {
        iconMenu.style.display = 'none';
        iconClose.style.display = 'block';
      } else {
        iconMenu.style.display = 'block';
        iconClose.style.display = 'none';
      }
    });
  }
  
  // Close mobile menu when clicking on a link
  const mobileLinks = document.querySelectorAll('.nav-link-mobile');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      iconMenu.style.display = 'block';
      iconClose.style.display = 'none';
    });
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Initialize map with Leaflet
  if (typeof L !== 'undefined') {
    const mapElement = document.getElementById('map');
    if (mapElement) {
      const map = L.map('map').setView([15.301483, 44.238522], 13);
      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);
      
      L.marker([15.301483, 44.238522]).addTo(map)
        .bindPopup('Ahmed Abdulqader Company<br>مؤسسة أحمد عبدالقادر')
        .openPopup();
    }
  }
  
  // Set current year in footer
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
