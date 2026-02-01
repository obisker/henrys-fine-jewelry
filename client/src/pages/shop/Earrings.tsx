import { Sparkles } from 'lucide-react';
import CategoryTemplate from './CategoryTemplate';

export default function Earrings() {
  const basePath = import.meta.env.BASE_URL;

  const subcategories = [
    { title: 'Diamond Studs', description: 'Classic and timeless diamond stud earrings' },
    { title: 'Hoops', description: 'From delicate to statement-making hoop earrings' },
    { title: 'Drop Earrings', description: 'Elegant drop and dangle styles' },
    { title: 'Gemstone Earrings', description: 'Sapphires, rubies, emeralds, and more' },
    { title: 'Pearl Earrings', description: 'Classic and contemporary pearl designs' },
    { title: 'Statement Earrings', description: 'Bold, eye-catching designs for special occasions' },
  ];

  return (
    <CategoryTemplate
      title="Earrings Collection"
      description="From classic studs to statement drops, discover earrings that complement your style"
      icon={<Sparkles className="w-16 h-16 text-[#d4af37]" />}
      subcategories={subcategories}
    />
  );
}
