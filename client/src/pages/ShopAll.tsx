import { Link } from 'wouter';
import { ShoppingBag, Phone } from 'lucide-react';

export default function ShopAll() {
  const basePath = import.meta.env.BASE_URL;

  const categories = [
    { name: 'Rings', link: '/shop/rings', description: 'Engagement rings, wedding bands, and fashion rings' },
    { name: 'Earrings', link: '/shop/earrings', description: 'Studs, hoops, drops, and statement earrings' },
    { name: 'Necklaces', link: '/shop/necklaces', description: 'Pendants, chains, and statement necklaces' },
    { name: 'Bracelets', link: '/shop/bracelets', description: 'Tennis bracelets, bangles, and chains' },
    { name: 'Engagement Rings', link: '/engagement-rings', description: 'Solitaires, halos, and custom designs' },
    { name: 'Estate Jewelry', link: '/shop/estate', description: 'Vintage and antique pieces' },
    { name: 'Artisan Sterling Silver', link: '/shop/sterling', description: 'Handcrafted silver jewelry' },
  ];

  return (
    <div>
      <section className="relative h-[50vh] min-h-[350px] flex items-center bg-[#1a1a1a]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${basePath}images/shop-all-hero.jpg)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        <div className="container relative z-10 text-white">
          <div className="max-w-3xl">
            <ShoppingBag className="w-16 h-16 text-[#d4af37] mb-6" />
            <h1 className="text-5xl md:text-6xl font-sans font-light mb-6">
              Shop Our Collection
            </h1>
            <p className="text-xl mb-8">
              Explore our curated selection of fine jewelry, from timeless classics to contemporary designs
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-sans text-4xl md:text-5xl mb-4 text-[#1a1a1a]">Browse by Category</h2>
            <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
              Find the perfect piece for any occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <Link key={index} href={category.link} className="group">
                <div className="bg-[#fafaf8] p-8 rounded-xl border-2 border-transparent hover:border-[#d4af37] transition-all card-hover h-full">
                  <h3 className="font-sans text-2xl font-light text-[#1a1a1a] mb-3 group-hover:text-[#d4af37] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-[#6b7280]">{category.description}</p>
                  <span className="inline-block mt-4 text-[#d4af37] font-medium">Browse →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1a1a1a] text-white py-16">
        <div className="container text-center">
          <h2 className="font-sans text-3xl md:text-4xl mb-6 font-light">Visit Our Showrooms</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience our full collection in person at either of our New Jersey locations
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
