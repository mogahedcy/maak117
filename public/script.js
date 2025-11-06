// Translations
const translations = {
    ar: {
        'nav.about': 'من نحن',
        'nav.services': 'خدماتنا',
        'nav.contact': 'تواصل معنا',
        'hero.title': 'مؤسسة أحمد عبدالقادر',
        'hero.subtitle': 'للتجارة والاستيراد وخدمات التموين',
        'hero.description': 'خدمات تموين غذائي ولوجستية احترافية للحقول النفطية والمنظمات الإغاثية وحلول نقل شاملة',
        'hero.cta': 'احصل على عرض سعر',
        'about.title': 'من نحن',
        'about.content': 'نحن مؤسسة احمد عبد القادر نقدم خدماتنا المميزة بأعلى جودة كون خبرتنا السابقة في التموين الغذائي لشركة بلحاف وشركة توتال والشركة اليمنية والشركة العربية وشركة انتراكس الشرق الاوسط وغيرها من الشركات الكبرى مستخدمين منتجات غذائية صحية وطازجة ويتم نقلها بمعدات حديثة ومتطورة تمتلك الحفاظ على الاغذية بدرجة برودة معينة لتقديم المنتجات والخدمات بشكل متميز وخالي من المخاطر لتضمين مؤسستنا بالأزدهار والتقدم في مستقبل يمننا السعيد.',
        'features.quality': 'الجودة',
        'features.experience': 'الخبرة',
        'features.clients': 'عملاء كبار',
        'features.growth': 'النمو',
        'services.title': 'خدماتنا',
        'services.service1.title': 'تموين غذائي للحقول النفطية',
        'services.service1.description': 'تقديم خدمات تموين غذائي شاملة للحقول النفطية بأعلى معايير الجودة',
        'services.service2.title': 'تموين للمنظمات الإغاثية',
        'services.service2.description': 'خدمات توريد غذائي احترافية للمنظمات الإغاثية والإنسانية',
        'services.service3.title': 'خدمات النقل',
        'services.service3.description': 'جميع أنواع خدمات النقل بمعدات متوسطة وثقيلة',
        'services.service4.title': 'خدمات إضافية',
        'services.service4.description': 'توفير أيدي عاملة ذات خبرة وسيارات فاخرة',
        'contact.title': 'تواصل معنا',
        'contact.subtitle': 'للحصول على عروض سعر',
        'contact.email': 'البريد الإلكتروني',
        'contact.phone': 'الهاتف',
        'contact.location': 'موقعنا',
        'footer.company': 'مؤسسة أحمد عبدالقادر',
        'footer.description': 'خدمات تموين ولوجستية احترافية',
        'footer.quickLinks': 'روابط سريعة',
        'footer.rights': 'جميع الحقوق محفوظة'
    },
    en: {
        'nav.about': 'About Us',
        'nav.services': 'Services',
        'nav.contact': 'Contact',
        'hero.title': 'Ahmed Abdulqader Company',
        'hero.subtitle': 'Yemen Catering and Service',
        'hero.description': 'Professional catering and logistics services for oil fields, relief organizations, and comprehensive transportation solutions',
        'hero.cta': 'Get Quote',
        'about.title': 'About Us',
        'about.content': 'We are Ahmed Abdulqader Company, providing our distinguished services with the highest quality. Our previous experience in food catering for Balhaf Company, Total Company, Yemeni Company, Arab Company, Antrax Middle East Company, and other major companies. We use healthy and fresh food products that are transported with modern and advanced equipment capable of preserving food at a certain temperature to provide products and services in a distinctive and risk-free manner to ensure our company\'s prosperity and progress in the future of our happy Yemen.',
        'features.quality': 'Quality',
        'features.experience': 'Experience',
        'features.clients': 'Major Clients',
        'features.growth': 'Growth',
        'services.title': 'Our Services',
        'services.service1.title': 'Oil Field Catering',
        'services.service1.description': 'Providing comprehensive food catering services to oil fields with the highest quality standards',
        'services.service2.title': 'Relief Organization Catering',
        'services.service2.description': 'Professional food supply services for relief and humanitarian organizations',
        'services.service3.title': 'Transportation Services',
        'services.service3.description': 'All types of transportation services with medium and heavy equipment',
        'services.service4.title': 'Additional Services',
        'services.service4.description': 'Providing experienced workforce and luxury vehicles',
        'contact.title': 'Contact Us',
        'contact.subtitle': 'Get a Price Quote',
        'contact.email': 'Email',
        'contact.phone': 'Phone',
        'contact.location': 'Our Location',
        'footer.company': 'Ahmed Abdulqader Company',
        'footer.description': 'Professional catering and logistics services',
        'footer.quickLinks': 'Quick Links',
        'footer.rights': 'All rights reserved'
    }
};

// Current language
let currentLang = 'ar';

// Update page language
function updateLanguage(lang) {
    currentLang = lang;
    const html = document.documentElement;
    const isRTL = lang === 'ar';
    
    html.setAttribute('lang', lang);
    html.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update company name in header
    const companyTitle = document.getElementById('company-title');
    const companySubtitle = document.getElementById('company-subtitle');
    if (companyTitle && companySubtitle) {
        if (isRTL) {
            companyTitle.textContent = 'مؤسسة أحمد عبدالقادر';
            companySubtitle.textContent = 'للتجارة والاستيراد وخدمات التموين';
        } else {
            companyTitle.textContent = 'Ahmed Abdulqader Company';
            companySubtitle.textContent = 'Yemen Catering and Service';
        }
    }
    
    // Save preference
    localStorage.setItem('language', lang);
}

// Toggle language
function toggleLanguage() {
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    updateLanguage(newLang);
}

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('active');
}

// Smooth scroll
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.remove('active');
    }
}

// Header scroll effect
function handleScroll() {
    const header = document.getElementById('header');
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Initialize map
function initMap() {
    if (typeof L === 'undefined') {
        setTimeout(initMap, 100);
        return;
    }
    
    const mapElement = document.getElementById('map');
    if (!mapElement) return;
    
    const map = L.map('map').setView([15.301483, 44.238522], 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    const marker = L.marker([15.301483, 44.238522]).addTo(map);
    marker.bindPopup('Ahmed Abdulqader Company<br>مؤسسة أحمد عبدالقادر').openPopup();
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Set current year
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Load saved language preference
    const savedLang = localStorage.getItem('language') || 'ar';
    updateLanguage(savedLang);
    
    // Language toggle button
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
    
    // Mobile menu button
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            smoothScroll(target);
        });
    });
    
    // Scroll event
    window.addEventListener('scroll', handleScroll);
    
    // Initialize map
    initMap();
});
