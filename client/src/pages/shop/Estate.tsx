import { Crown } from 'lucide-react';
import CategoryTemplate from './CategoryTemplate';

export default function Estate() {
  const subcategories = [
    { title: 'Vintage Rings', description: 'Art Deco, Victorian, and Edwardian rings' },
    { title: 'Estate Necklaces', description: 'Timeless vintage necklaces and pendants' },
    { title: 'Antique Brooches', description: 'Collectible and wearable vintage brooches' },
    { title: 'Vintage Earrings', description: 'Classic designs from bygone eras' },
    { title: 'Heirloom Restoration', description: 'Restore and modernize family treasures', link: '/services' },
    { title: 'Estate Appraisals', description: 'Professional valuation services', link: '/services' },
  ];

  return (
    <CategoryTemplate
      title="Estate & Vintage Jewelry"
      description="Discover timeless pieces with history and character from past eras"
      icon={<Crown className="w-16 h-16 text-[#d4af37]" />}
      subcategories={subcategories}
    />
  );
}
