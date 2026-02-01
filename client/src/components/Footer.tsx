import { Link } from 'wouter';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-white/10">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              {/* Henry's Fine Jewelry - Single line, elegant script */}
              <span className="text-[28px] font-heading font-medium text-white tracking-[0.1em] leading-none">
                HENRY'S FINE JEWELRY
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Celebrating life's precious moments with exquisite jewelry since 1989
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/engagement-rings" className="text-gray-300 hover:text-[#d4af37] transition-colors">Engagement Rings</Link></li>
              <li><Link href="/custom-design" className="text-gray-300 hover:text-[#d4af37] transition-colors">Custom Design</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-[#d4af37] transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-[#d4af37] transition-colors">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Summit Location</h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>419 Springfield Avenue<br/>Summit, NJ 07901</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <a href="tel:9082733777" className="hover:text-[#d4af37]">(908) 273-3777</a>
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Basking Ridge Location</h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>665 Martinsville Road<br/>Basking Ridge, NJ 07920</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <a href="tel:9089030390" className="hover:text-[#d4af37]">(908) 903-0390</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Henry's Fine Jewelry. All rights reserved.</p>
          <p>Family-Owned Since 1989</p>
        </div>
      </div>
    </footer>
  );
}
