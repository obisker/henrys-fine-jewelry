import { Link } from 'wouter';
import { Phone, Heart } from 'lucide-react';

export default function Rings() {
  const basePath = import.meta.env.BASE_URL;

  return (
    <div>
      <section className="relative h-[50vh] min-h-[350px] flex items-center bg-[#1a1a1a]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${basePath}/images/rings-hero.jpg)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        <div className="container relative z-10 text-white">
          <div className="max-w-3xl">
            <Heart className="w-16 h-16 text-[#d4af37] mb-6" />
            <h1 className="text-5xl md:text-6xl font-sans font-light mb-6">
              Rings Collection
            </h1>
            <p className="text-xl mb-8">
              From engagement rings to fashion statements, discover the perfect ring for every occasion
            </p>
            <Link href="/engagement-rings" className="inline-block bg-[#d4af37] text-white px-8 py-3.5 rounded-md hover:bg-[#d4af37]/90 transition-all duration-300 font-medium tracking-wide shadow-md hover:shadow-xl text-[15px]">
              Shop Engagement Rings
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-sans text-4xl md:text-5xl mb-4 text-[#1a1a1a]">Ring Styles</h2>
            <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
              Explore our curated collection of rings for every style and occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-[#fafaf8] p-8 rounded-xl border-2 border-[#e5e5e5]">
              <h3 className="font-sans text-2xl font-light text-[#1a1a1a] mb-3">Engagement Rings</h3>
              <p className="text-[#6b7280] mb-4">Solitaires, halos, three-stone, and custom designs</p>
              <Link href="/engagement-rings" className="text-[#d4af37] font-medium">Browse →</Link>
            </div>

            <div className="bg-[#fafaf8] p-8 rounded-xl border-2 border-[#e5e5e5]">
              <h3 className="font-sans text-2xl font-light text-[#1a1a1a] mb-3">Wedding Bands</h3>
              <p className="text-[#6b7280] mb-4">Classic and contemporary bands for him and her</p>
              <a href="tel:9082733777" className="text-[#d4af37] font-medium">Call to Inquire →</a>
            </div>

            <div className="bg-[#fafaf8] p-8 rounded-xl border-2 border-[#e5e5e5]">
              <h3 className="font-sans text-2xl font-light text-[#1a1a1a] mb-3">Fashion Rings</h3>
              <p className="text-[#6b7280] mb-4">Statement pieces, cocktail rings, and everyday wear</p>
              <a href="tel:9082733777" className="text-[#d4af37] font-medium">Call to Inquire →</a>
            </div>

            <div className="bg-[#fafaf8] p-8 rounded-xl border-2 border-[#e5e5e5]">
              <h3 className="font-sans text-2xl font-light text-[#1a1a1a] mb-3">Gemstone Rings</h3>
              <p className="text-[#6b7280] mb-4">Sapphires, rubies, emeralds, and more</p>
              <a href="tel:9082733777" className="text-[#d4af37] font-medium">Call to Inquire →</a>
            </div>

            <div className="bg-[#fafaf8] p-8 rounded-xl border-2 border-[#e5e5e5]">
              <h3 className="font-sans text-2xl font-light text-[#1a1a1a] mb-3">Anniversary Rings</h3>
              <p className="text-[#6b7280] mb-4">Eternity bands and milestone celebration rings</p>
              <a href="tel:9082733777" className="text-[#d4af37] font-medium">Call to Inquire →</a>
            </div>

            <div className="bg-[#fafaf8] p-8 rounded-xl border-2 border-[#e5e5e5]">
              <h3 className="font-sans text-2xl font-light text-[#1a1a1a] mb-3">Custom Designs</h3>
              <p className="text-[#6b7280] mb-4">Create a one-of-a-kind ring uniquely yours</p>
              <Link href="/custom-design" className="text-[#d4af37] font-medium">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1a1a1a] text-white py-16">
        <div className="container text-center">
          <h2 className="font-sans text-3xl md:text-4xl mb-6 font-light">Schedule a Private Viewing</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Visit our showroom to see our full rings collection and work with our expert jewelers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:9082733777" className="inline-block bg-[#d4af37] text-white px-8 py-3.5 rounded-md hover:bg-[#d4af37]/90 transition-all duration-300 font-medium tracking-wide shadow-md hover:shadow-xl text-[15px]">
              <Phone className="w-5 h-5 inline mr-2" />Summit: (908) 273-3777
            </a>
            <a href="tel:9089030390" className="inline-block bg-[#d4af37] text-white px-8 py-3.5 rounded-md hover:bg-[#d4af37]/90 transition-all duration-300 font-medium tracking-wide shadow-md hover:shadow-xl text-[15px]">
              <Phone className="w-5 h-5 inline mr-2" />Basking Ridge: (908) 903-0390
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
