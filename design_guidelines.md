# Design Guidelines: Ahmed Abdulqader Company Website

## Design Approach
**Reference-Based (Corporate B2B)**: Drawing inspiration from professional logistics and supply companies (Maersk, DHL, Aramco contractors) with emphasis on trust, professionalism, and operational excellence. This B2B service site requires credibility-focused design with clear service presentation.

## Core Design Principles
1. **Professional Authority**: Convey expertise serving major oil companies
2. **Bilingual Excellence**: Seamless Arabic/English experience with proper RTL support
3. **Service Clarity**: Clear, scannable presentation of four core services
4. **Trust Building**: Showcase experience with major clients prominently

---

## Typography System
**Font Selection**: Google Fonts via CDN
- **English**: Inter or Poppins (clean, professional sans-serif)
- **Arabic**: Cairo or Tajawal (modern Arabic with excellent readability)

**Hierarchy**:
- Hero Headline: text-4xl md:text-5xl lg:text-6xl, font-bold
- Section Titles: text-3xl md:text-4xl, font-semibold
- Service Cards: text-xl font-semibold
- Body Text: text-base md:text-lg, leading-relaxed
- Captions/Labels: text-sm, font-medium

---

## Layout System
**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20
- Component padding: p-6 to p-8
- Section spacing: py-16 md:py-20 lg:py-24
- Container: max-w-7xl mx-auto px-4 md:px-6

**Grid System**:
- Services: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- About section: Single column max-w-4xl for readability
- Contact: grid-cols-1 lg:grid-cols-2

---

## Component Library

### Header
- Sticky navigation with company logo (left for English, right for Arabic)
- Language toggle button (prominent, top-right for English)
- Navigation links: About, Services, Contact (center-aligned)
- Mobile: Hamburger menu with slide-in panel
- Height: h-20, backdrop-blur on scroll

### Hero Section
- **Full-width hero**: min-h-[600px] md:min-h-[700px]
- Large hero image showing logistics/catering operations
- Overlay with company name (bilingual) + tagline
- Primary CTA button: "Get Quote" / "احصل على عرض سعر"
- Button with backdrop-blur-sm bg-opacity-90

### About Section ("من نحن")
- Single column layout with max-w-4xl
- Company description with client logos grid below
- Logos: grid-cols-2 md:grid-cols-3 lg:grid-cols-5 (grayscale filter)
- Stats row: Years of experience, clients served (if available)

### Services Section ("خدماتنا")
- 4-column grid on desktop, stacks on mobile
- Each service card: rounded-xl with icon, title, brief description
- Icons: Font Awesome (truck, utensils, users, tools)
- Card padding: p-6, hover:shadow-lg transition
- Iconography: text-4xl mb-4

### Contact Section ("تواصل معنا")
- Two-column layout: Contact info (left) + Embedded map (right)
- Contact info includes:
  - Email with icon (envelope)
  - Phone with icon (phone) + WhatsApp link
  - Working hours/response time
- Google Maps embed at coordinates: 15.301483, 44.238522
- Map: rounded-lg, min-h-[400px]

### Footer
- Three-column grid: Company info, Quick links, Contact
- Social media icons (if applicable)
- Copyright notice in both languages
- Background: subtle contrast from main page

---

## Images

**Hero Image**: 
Professional photo of logistics operations - food containers being loaded, modern refrigerated trucks, or warehouse operations. Should convey scale and professionalism. Full-width, aspect ratio 16:9 minimum.

**About Section (Optional)**: 
Team photo or facility image (max-w-2xl, centered)

**Service Cards**: 
Consider subtle background patterns or small representative images (optional)

**Client Logos**: 
Grayscale logos of mentioned companies (Balhaf, Total, etc.) - 5-6 logos

---

## Responsive Behavior
- Mobile-first approach
- Breakpoints: sm(640px), md(768px), lg(1024px), xl(1280px)
- Arabic layout: Complete RTL mirror including navigation, grids, text alignment
- Touch-friendly: Minimum tap target 44x44px for mobile

---

## Accessibility & Bilingual Requirements
- Language toggle preserves page section/scroll position
- `lang` attribute switches between "ar" and "en"
- `dir="rtl"` for Arabic, `dir="ltr"` for English
- Proper semantic HTML with ARIA labels in both languages
- Form labels and error messages in active language
- Map markers with bilingual tooltips

---

## Interactions (Minimal)
- Smooth scroll to sections on nav click
- Service cards: subtle hover elevation (shadow transition)
- CTA buttons: scale slightly on hover
- Language toggle: fade transition between content
- NO scroll animations or parallax effects