import { Link } from 'wouter';
import { Phone } from 'lucide-react';

interface CategoryPageProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  subcategories: Array<{
    title: string;
    description: string;
    link?: string;
  }>;
}

export default function CategoryTemplate({ title, description, icon, subcategories }: CategoryPageProps) {
  return (
    <div>
      <section className="relative h-[50vh] min-h-[350px] flex items-center bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]">
        <div className="container relative z-10 text-white">
          <div className="max-w-3xl">
            <div className="mb-6">{icon}</div>
            <h1 className="text-5xl md:text-6xl font-sans font-light mb-6">
              {title}
            </h1>
            <p className="text-xl mb-8">{description}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-sans text-4xl md:text-5xl mb-4 text-[#1a1a1a]">Our Collection</h2>
            <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
              Explore our curated selection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {subcategories.map((sub, index) => (
              <div key={index} className="bg-[#fafaf8] p-8 rounded-xl border-2 border-[#e5e5e5]">
                <h3 className="font-sans text-2xl font-light text-[#1a1a1a] mb-3">{sub.title}</h3>
                <p className="text-[#6b7280] mb-4">{sub.description}</p>
                {sub.link ? (
                  <Link href={sub.link} className="text-[#d4af37] font-medium">Browse →</Link>
                ) : (
                  <a href="tel:9082733777" className="text-[#d4af37] font-medium">Call to Inquire →</a>
                )}
              </div>
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
