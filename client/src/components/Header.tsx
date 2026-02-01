import { Link } from 'wouter';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);

  return (
    <>
      {/* Top Bar - Contact Info */}
      <div className="bg-[#1a1a1a] text-white py-2 text-xs border-b border-white/10">
        <div className="container flex justify-between items-center">
          <div className="hidden sm:flex gap-6">
            <Link href="tel:9082733777" className="hover:text-[#d4af37] transition-colors tracking-wide">
              SUMMIT: (908) 273-3777
            </Link>
            <Link href="tel:9089030390" className="hover:text-[#d4af37] transition-colors tracking-wide">
              BASKING RIDGE: (908) 903-0390
            </Link>
          </div>
          <div className="text-xs tracking-wide hidden md:block">
            FAMILY-OWNED SINCE 1989 | 300+ 5-STAR REVIEWS
          </div>
        </div>
      </div>
      {/* Main Header - Two Tier Design */}
      <header className="bg-[#1a1a1a] sticky top-0 z-40">
        {/* Logo Tier */}
        <div className="border-b border-white/10 py-6">
          <div className="container relative flex items-center">
            {/* Mobile: Left-aligned with padding, Desktop: Centered */}
            <Link href="/" className="hover:opacity-90 transition-opacity lg:mx-auto lg:px-0 pr-12">
              {/* Henry's Fine Jewelry - Single line, never wraps */}
              <span className="font-heading font-medium text-white tracking-[0.1em] leading-none whitespace-nowrap text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] transition-all">
                HENRY'S FINE JEWELRY
              </span>
            </Link>

            {/* Mobile Hamburger Button - Absolute positioned to not affect centering */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden absolute right-4 flex flex-col gap-1.5 p-2 z-50"
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
        
        {/* Navigation Tier - Desktop */}
        <div className="py-4">
          <nav className="container hidden lg:flex items-center justify-center gap-10">
            {/* Shop Online Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShopDropdownOpen(true)}
              onMouseLeave={() => setShopDropdownOpen(false)}
            >
              <Link href="/shop" className="text-white hover:text-[#d4af37] transition-colors text-xs tracking-[0.2em] uppercase font-medium">
                Shop Online
              </Link>
              {shopDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-[#1a1a1a] border border-white/10 shadow-xl rounded-md overflow-hidden z-50">
                  <Link href="/shop" className="block px-6 py-3 text-white hover:bg-[#2a2a2a] hover:text-[#d4af37] transition-colors text-xs tracking-[0.15em] uppercase border-b border-white/10">
                    Shop All Items
                  </Link>
                  <Link href="/shop/rings" className="block px-6 py-3 text-white hover:bg-[#2a2a2a] hover:text-[#d4af37] transition-colors text-xs tracking-[0.15em] uppercase border-b border-white/10">
                    Rings
                  </Link>
                  <Link href="/shop/earrings" className="block px-6 py-3 text-white hover:bg-[#2a2a2a] hover:text-[#d4af37] transition-colors text-xs tracking-[0.15em] uppercase border-b border-white/10">
                    Earrings
                  </Link>
                  <Link href="/shop/necklaces" className="block px-6 py-3 text-white hover:bg-[#2a2a2a] hover:text-[#d4af37] transition-colors text-xs tracking-[0.15em] uppercase border-b border-white/10">
                    Necklaces
                  </Link>
                  <Link href="/shop/bracelets" className="block px-6 py-3 text-white hover:bg-[#2a2a2a] hover:text-[#d4af37] transition-colors text-xs tracking-[0.15em] uppercase border-b border-white/10">
                    Bracelets
                  </Link>
                  <Link href="/shop/estate" className="block px-6 py-3 text-white hover:bg-[#2a2a2a] hover:text-[#d4af37] transition-colors text-xs tracking-[0.15em] uppercase border-b border-white/10">
                    Estate Jewelry
                  </Link>
                  <Link href="/shop/sterling" className="block px-6 py-3 text-white hover:bg-[#2a2a2a] hover:text-[#d4af37] transition-colors text-xs tracking-[0.15em] uppercase">
                    Artisan Sterling Silver
                  </Link>
                </div>
              )}
            </div>
            <Link href="/engagement-rings" className="text-white hover:text-[#d4af37] transition-colors text-xs tracking-[0.2em] uppercase font-medium">
              Engagement Rings
            </Link>
            <Link href="/custom-design" className="text-white hover:text-[#d4af37] transition-colors text-xs tracking-[0.2em] uppercase font-medium">
              Custom Design
            </Link>
            <Link href="/services" className="text-white hover:text-[#d4af37] transition-colors text-xs tracking-[0.2em] uppercase font-medium">
              Services
            </Link>
            <Link href="/about" className="text-white hover:text-[#d4af37] transition-colors text-xs tracking-[0.2em] uppercase font-medium">
              About
            </Link>
            <Link href="/locations" className="text-white hover:text-[#d4af37] transition-colors text-xs tracking-[0.2em] uppercase font-medium">
              Locations
            </Link>
            <Link 
              href="tel:9082733777" 
              className="border border-white/30 text-white px-6 py-2 hover:bg-white hover:text-[#1a1a1a] transition-all text-xs tracking-[0.2em] uppercase font-medium"
            >
              Book Consultation
            </Link>
          </nav>
        </div>
      </header>

      {/* Mobile Slide-out Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-[#1a1a1a] shadow-2xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <span className="font-heading text-xl text-white tracking-[0.1em]">
                HENRY'S FINE JEWELRY
              </span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-[#d4af37] transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Drawer Navigation */}
          <nav className="flex flex-col p-6 gap-6">
            <Link
              href="/shop"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-[#d4af37] transition-colors text-base tracking-[0.15em] uppercase font-medium"
            >
              Shop Online
            </Link>
            <Link
              href="/engagement-rings"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-[#d4af37] transition-colors text-base tracking-[0.15em] uppercase font-medium"
            >
              Engagement Rings
            </Link>
            <Link
              href="/custom-design"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-[#d4af37] transition-colors text-base tracking-[0.15em] uppercase font-medium"
            >
              Custom Design
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-[#d4af37] transition-colors text-base tracking-[0.15em] uppercase font-medium"
            >
              Services
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-[#d4af37] transition-colors text-base tracking-[0.15em] uppercase font-medium"
            >
              About
            </Link>
            <Link
              href="/locations"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-[#d4af37] transition-colors text-base tracking-[0.15em] uppercase font-medium"
            >
              Locations
            </Link>
            
            <div className="border-t border-white/10 pt-6 mt-4">
              <Link
                href="/locations"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full bg-[#2a2a2a] text-white px-6 py-3 rounded-md hover:bg-[#3a3a3a] transition-all duration-300 text-center tracking-[0.15em] border border-white/10 uppercase text-sm font-medium"
              >
                Book Consultation
              </Link>
            </div>

            {/* Contact Info */}
            <div className="border-t border-white/10 pt-6 mt-4 space-y-4">
              <div>
                <p className="text-[#d4af37] text-xs tracking-wider mb-1 uppercase">Summit</p>
                <a href="tel:9082733777" className="text-white hover:text-[#d4af37] transition-colors text-sm">
                  (908) 273-3777
                </a>
              </div>
              <div>
                <p className="text-[#d4af37] text-xs tracking-wider mb-1 uppercase">Basking Ridge</p>
                <a href="tel:9089030390" className="text-white hover:text-[#d4af37] transition-colors text-sm">
                  (908) 903-0390
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
