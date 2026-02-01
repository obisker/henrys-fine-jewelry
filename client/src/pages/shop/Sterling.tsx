import { Star } from 'lucide-react';
import CategoryTemplate from './CategoryTemplate';

export default function Sterling() {
  const subcategories = [
    { title: 'Handcrafted Rings', description: 'Artisan sterling silver rings' },
    { title: 'Statement Necklaces', description: 'Bold silver pendant and collar necklaces' },
    { title: 'Silver Earrings', description: 'Contemporary and traditional silver earring designs' },
    { title: 'Silver Bracelets', description: 'Cuffs, bangles, and chain bracelets' },
    { title: 'Gemstone Accents', description: 'Sterling silver with semi-precious stones' },
    { title: 'Custom Silver Work', description: 'Commission a unique sterling silver piece', link: '/custom-design' },
  ];

  return (
    <CategoryTemplate
      title="Artisan Sterling Silver"
      description="Handcrafted sterling silver jewelry combining traditional techniques with contemporary design"
      icon={<Star className="w-16 h-16 text-[#d4af37]" />}
      subcategories={subcategories}
    />
  );
}
