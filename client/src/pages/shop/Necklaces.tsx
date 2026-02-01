import { Heart } from 'lucide-react';
import CategoryTemplate from './CategoryTemplate';

export default function Necklaces() {
  const subcategories = [
    { title: 'Diamond Pendants', description: 'Solitaire and multi-stone diamond pendants' },
    { title: 'Gemstone Necklaces', description: 'Colored gemstone pendants and necklaces' },
    { title: 'Pearl Necklaces', description: 'Classic pearl strands and modern designs' },
    { title: 'Chains', description: 'Gold and platinum chains in various styles' },
    { title: 'Statement Necklaces', description: 'Bold, dramatic pieces for special occasions' },
    { title: 'Layering Necklaces', description: 'Delicate pieces perfect for layering' },
  ];

  return (
    <CategoryTemplate
      title="Necklaces Collection"
      description="Elegant pendants, classic strands, and statement pieces to adorn your neckline"
      icon={<Heart className="w-16 h-16 text-[#d4af37]" />}
      subcategories={subcategories}
    />
  );
}
