import { Gem } from 'lucide-react';
import CategoryTemplate from './CategoryTemplate';

export default function Bracelets() {
  const subcategories = [
    { title: 'Tennis Bracelets', description: 'Classic diamond and gemstone tennis bracelets' },
    { title: 'Bangles', description: 'Solid and hinged bangle bracelets' },
    { title: 'Chain Bracelets', description: 'Gold and platinum chain styles' },
    { title: 'Gemstone Bracelets', description: 'Sapphire, ruby, and emerald designs' },
    { title: 'Charm Bracelets', description: 'Personalized charm and link bracelets' },
    { title: 'Cuff Bracelets', description: 'Bold statement cuff designs' },
  ];

  return (
    <CategoryTemplate
      title="Bracelets Collection"
      description="From delicate chains to bold statement pieces, find the perfect bracelet"
      icon={<Gem className="w-16 h-16 text-[#d4af37]" />}
      subcategories={subcategories}
    />
  );
}
