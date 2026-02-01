# Henry's Fine Jewelry Website - Final Design System

## Design Philosophy

**Dark Luxury Aesthetic** - Inspired by Harry Winston and Chopard, this design embodies sophisticated elegance through minimalism, refined typography, and a monochromatic palette with subtle gold accents. The aesthetic conveys timeless luxury, craftsmanship, and exclusivity befitting a high-end jewelry brand.

---

## Core Design Principles

1. **Sophisticated Minimalism**: Clean layouts with ample negative space, avoiding visual clutter
2. **Refined Typography**: Elegant serif logo paired with clean sans-serif body text, light font weights throughout
3. **Dark Monochromatic Palette**: Deep blacks and charcoals with strategic gold accents
4. **Emotional Storytelling**: Hero carousel showcasing life moments (proposals, custom design, craftsmanship)
5. **Understated Elegance**: Subtle animations, refined hover states, no garish effects

---

## Color System

### Primary Colors
- **Deep Black**: `#0a0a0a` - Main background
- **Dark Charcoal**: `#1a1a1a` - Header, sections, cards
- **Medium Charcoal**: `#2a2a2a` - Buttons, elevated elements
- **Pure White**: `#ffffff` - Primary text, headings

### Accent Colors
- **Luxury Gold**: `#d4af37` - Hover states, accents, highlights
- **White with Opacity**: `rgba(255, 255, 255, 0.1)` - Borders, dividers
- **White with Opacity**: `rgba(255, 255, 255, 0.3)` - Secondary borders

### Color Usage Rules
- Never use blue colors (removed from original palette)
- Gold is reserved for hover states and subtle accents only
- Buttons use dark backgrounds (#2a2a2a) with white text, not gold backgrounds
- All text must be white or near-white for contrast against dark backgrounds

---

## Typography System

### Fonts
- **Logo Font**: Cinzel (serif) - Elegant, timeless Roman-style serif
- **Body Font**: Inter (sans-serif) - Clean, modern, highly readable
- **Font Loading**: Google Fonts CDN in `client/index.html`

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
```

### Typography Hierarchy
- **Logo**: Cinzel, font-medium, tracking-[0.1em], responsive sizing (text-xl to text-[2.5rem])
- **Hero Headings**: Inter, font-light, text-5xl to text-6xl, tracking-tight
- **Page Headings (h1)**: Inter, font-light, text-4xl to text-5xl
- **Section Headings (h2)**: Inter, font-light, text-3xl to text-4xl
- **Subheadings (h3)**: Inter, font-medium, text-xl to text-2xl
- **Body Text**: Inter, font-normal, text-base to text-lg
- **Navigation**: Inter, font-medium, text-xs, tracking-[0.2em], uppercase
- **Buttons**: Inter, font-medium, text-sm, tracking-[0.15em], uppercase

### Typography Rules
- Logo is the ONLY element using serif font (Cinzel)
- All other text uses Inter sans-serif
- Use font-light for all major headings to maintain elegance
- Wide letter spacing (tracking) for uppercase text
- Never use font-bold or font-semibold for headings

---

## Layout & Structure

### Header Design (Two-Tier)
**Top Bar**:
- Background: #1a1a1a
- Height: py-2
- Content: Store phone numbers (left), trust signals (right)
- Border: border-b border-white/10

**Logo Tier**:
- Background: #1a1a1a
- Padding: py-6
- Desktop: Logo centered with `lg:mx-auto`
- Mobile: Logo left-aligned with `pr-12` to avoid hamburger
- Hamburger: Absolutely positioned `right-4` on mobile only
- Border: border-b border-white/10

**Navigation Tier** (Desktop only):
- Background: #1a1a1a
- Padding: py-4
- Layout: Centered flex with gap-10
- Items: Engagement Rings, Custom Design, Services, About, Locations, Book Consultation
- Hover: text-[#d4af37]

### Mobile Navigation
- Hamburger icon: Three horizontal lines (w-6 h-0.5) with animated transform
- Slide-out drawer: Right-aligned, w-80 max-w-[85vw], bg-[#1a1a1a]
- Overlay: bg-black/80 backdrop-blur-sm
- Transitions: duration-300 for smooth animations
- Content: All nav links + Book Consultation CTA + contact info

### Hero Carousel
- Auto-playing carousel with 5-second intervals
- 4 slides: Proposal moment, Custom design, Ring close-up, Store interior
- Dynamic CTAs that change per slide
- Navigation: Left/right arrows + dot indicators
- Overlay: Dark gradient for text readability
- Transitions: Smooth fade between slides

### Section Spacing
- Section padding: py-16 to py-24
- Container max-width: 1280px with responsive padding
- Grid gaps: gap-8 to gap-12
- Card spacing: p-6 to p-8

---

## Component Styling

### Buttons
**Primary CTA**:
```css
bg-[#2a2a2a] text-white px-8 py-3 rounded-md
hover:bg-[#3a3a3a] transition-all duration-300
border border-white/10
uppercase tracking-[0.15em] font-medium text-sm
```

**Secondary CTA**:
```css
bg-white text-[#1a1a1a] px-8 py-3 rounded-md
hover:bg-gray-100 transition-all duration-300
uppercase tracking-[0.15em] font-medium text-sm
```

**Outlined Button**:
```css
border border-white/30 text-white px-6 py-2
hover:bg-white hover:text-[#1a1a1a] transition-all
uppercase tracking-[0.2em] font-medium text-xs
```

### Cards
```css
bg-[#1a1a1a] rounded-lg overflow-hidden
border border-white/10
hover:border-[#d4af37] transition-all duration-300
```

### Links
- Default: text-white
- Hover: text-[#d4af37] transition-colors
- Navigation: uppercase tracking-[0.2em]

### Images
- Overlay for text: bg-black/50 to bg-black/60
- Aspect ratios: aspect-[16/9] or aspect-square
- Object fit: object-cover
- Hover: scale-105 transition-transform duration-500

---

## Page-Specific Guidelines

### Homepage
1. **Hero Carousel**: 4 slides with dynamic headlines and CTAs
2. **Trust Badges**: 4 icons (37 Years, 300+ Reviews, GIA, Family Owned)
3. **Collections Grid**: 3 cards (Engagement Rings, Custom Design, Fine Jewelry)
4. **Why Choose Section**: 4 feature cards with icons
5. **Testimonials**: 3 customer reviews with names
6. **Locations**: 2 store cards with addresses and phone numbers
7. **Newsletter**: Email subscription form

### Engagement Rings Page
- Hero section with ring imagery
- Ring styles grid (Solitaire, Halo, Three-Stone, Vintage)
- 4Cs education section
- GIA certification callout
- CTA: Schedule Consultation

### Custom Design Page
- Hero with custom design imagery
- 4-step process visualization
- Portfolio examples grid
- CTA: Start Custom Design

### Services Page
- Services grid (Repairs, Appraisals, Cleaning, Resizing)
- Detailed descriptions
- CTA: Schedule Service

### About Page
- Family story with timeline
- Values section
- Team introduction (text only, no fake photos)
- CTA: Visit Us Today

### Locations Page
- 2 store cards with full details
- Hours of operation
- Directions information
- CTA: Call to Schedule

---

## Visual Assets

### Generated Images (AI)
Located in `/client/public/images/`:
- `hero-couple-proposal.jpg` - Emotional proposal moment for hero carousel
- `hero-hands-rings.jpg` - Ring close-up for hero carousel
- `custom-design-process.jpg` - Custom design process for hero carousel
- `family-business-portrait.jpg` - (Not used - avoid fake staff photos)

### Authentic Images
- `store-interior-welcoming.jpg` - Real store interior from henrysfinejewelry.com

### Image Usage Rules
- Use generated images ONLY for lifestyle/emotional moments
- NEVER use generated images for store photos or staff portraits
- Use authentic store interior image from original website
- All images must have dark overlays for text readability

---

## Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1023px (sm to lg)
- **Desktop**: ≥ 1024px (lg)

### Mobile-Specific Rules
- Logo: Left-aligned with pr-12
- Hamburger: Visible, absolute right-4
- Navigation: Hidden, replaced by drawer
- Hero text: Smaller font sizes (text-4xl)
- Grid: Single column (grid-cols-1)

### Desktop-Specific Rules
- Logo: Centered with lg:mx-auto
- Hamburger: Hidden (lg:hidden)
- Navigation: Visible horizontal menu
- Hero text: Larger font sizes (text-6xl)
- Grid: Multi-column (grid-cols-2, grid-cols-3)

---

## Animation & Interaction

### Transitions
- Default: `transition-all duration-300`
- Hover effects: `transition-colors` or `transition-transform`
- Carousel: `transition-opacity duration-500`

### Hover States
- Links: Color change to #d4af37
- Buttons: Background darkens or lightens
- Cards: Border color changes to #d4af37
- Images: Subtle scale-105

### Carousel Animations
- Auto-advance: 5000ms interval
- Fade transition: opacity-0 to opacity-100
- Smooth easing: ease-in-out

---

## Technical Implementation

### CSS Framework
- Tailwind CSS 4 with `@theme inline` configuration
- Custom font-family utilities in index.css
- No custom CSS classes for buttons (use inline Tailwind)

### Font Configuration (index.css)
```css
@theme inline {
  --font-family-heading: 'Cinzel', serif;
  --font-family-sans: 'Inter', sans-serif;
}
```

### React Components
- Header: Two-tier design with mobile drawer
- Footer: Multi-column layout with newsletter
- Home: Carousel with dynamic CTAs
- All pages: Consistent dark aesthetic

### State Management
- Carousel: useState for currentSlide, useEffect for auto-advance
- Mobile menu: useState for mobileMenuOpen
- Form inputs: Controlled components with useState

---

## Brand Voice & Content

### Tone
- Sophisticated and refined
- Warm and personal (family-owned)
- Confident but not boastful
- Emotional and story-driven

### Key Messages
- "Where Love Stories Begin"
- 37 years of family expertise
- GIA authorized retailer
- 300+ 5-star reviews
- Two convenient NJ locations

### CTAs
- "Explore Engagement Rings"
- "Book Consultation"
- "Start Custom Design"
- "Schedule Service"
- "Visit Our Showrooms"

---

## Design Checklist

- [x] Logo uses Cinzel serif font only
- [x] All other text uses Inter sans-serif
- [x] All headings use font-light weight
- [x] No blue colors anywhere on site
- [x] Buttons use dark backgrounds (#2a2a2a), not gold
- [x] Gold (#d4af37) reserved for hover states only
- [x] Mobile logo left-aligned with pr-12
- [x] Desktop logo centered with lg:mx-auto
- [x] Hamburger menu functional on mobile
- [x] Hero carousel auto-advances every 5 seconds
- [x] All images have dark overlays for text
- [x] No fake store photos or staff portraits
- [x] Consistent uppercase tracking for navigation
- [x] All transitions smooth (duration-300)
- [x] Responsive on mobile, tablet, desktop

---

## Future Enhancements

1. **Google Maps Integration**: Embed interactive maps on Locations page
2. **Customer Review Widget**: Automated Google Reviews carousel
3. **Ring Finder Quiz**: Interactive tool to recommend ring styles
4. **Contact Form**: Inquiry form with email notifications
5. **Live Chat**: Real-time customer support widget
6. **Instagram Feed**: Social media integration for social proof
7. **Appointment Booking**: Inline scheduling modal with calendar
8. **Ring Size Guide**: Downloadable PDF or interactive tool
9. **Video Content**: Replace hero slide with video option
10. **Parallax Effects**: Subtle scroll animations for depth

---

*This design system ensures Henry's Fine Jewelry website conveys the sophistication, craftsmanship, and timeless elegance expected from a high-end jewelry brand while maintaining warmth and accessibility as a family-owned business.*
