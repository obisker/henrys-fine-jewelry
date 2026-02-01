import { Link } from 'wouter';
import { Diamond, Heart, Shield, Sparkles, CheckCircle, Phone } from 'lucide-react';

export default function EngagementRings() {
  const basePath = import.meta.env.BASE_URL;
  const ringStyles = [
    { name: 'Solitaire', description: 'Timeless elegance with a single center diamond', popular: true },
    { name: 'Halo', description: 'Center stone surrounded by smaller diamonds for extra sparkle', popular: true },
    { name: 'Three-Stone', description: 'Symbolizing past, present, and future', popular: false },
    { name: 'Vintage', description: 'Intricate details and romantic designs', popular: false },
    { name: 'Modern', description: 'Contemporary and unique settings', popular: false },
    { name: 'Custom', description: 'Designed uniquely for you', popular: true },
  ];

  const fourCs = [
    { icon: Diamond, title: 'Cut', description: 'The most important factor in a diamond\'s brilliance and sparkle' },
    { icon: Sparkles, title: 'Clarity', description: 'Measures internal and external imperfections' },
    { icon: Heart, title: 'Color', description: 'Graded from D (colorless) to Z (light yellow)' },
    { icon: Shield, title: 'Carat', description: 'The weight and size of the diamond' },
  ];

  return (
    <div>
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${basePath}images/hero-hands-rings.jpg)` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        <div className="container relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-sans font-light mb-6">
              Find Your Perfect Engagement Ring
            </h1>
            <p className="text-xl mb-8">
              From classic solitaires to custom designs, discover the ring that tells your unique love story
            </p>
            <a href="tel:9082733777" className="inline-block bg-[#2a2a2a] text-white px-8 py-3.5 rounded-md hover:bg-[#3a3a3a] border border-white/10 transition-all duration-300 font-medium tracking-wide shadow-md hover:shadow-xl text-[15px]">Schedule Consultation</a>
          </div>
        </div>
      </section>

      <section className="bg-[#1a1a1a] text-white py-8">
        <div className="container flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
          <Shield className="w-12 h-12 text-[#d4af37]" />
          <div>
            <h3 className="font-sans text-2xl font-light mb-2">GIA Authorized Diamond Retailer</h3>
            <p className="text-white/90">Every diamond comes with GIA certification and our lifetime guarantee</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-sans text-4xl md:text-5xl mb-4 text-white">Explore Ring Styles</h2>
            <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
              From timeless classics to contemporary designs, find the style that speaks to your heart
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {ringStyles.map((style, index) => (
              <div key={index} className="bg-[#fafaf8] p-6 rounded-xl border-2 border-transparent hover:border-[#d4af37] transition-all card-hover">
                {style.popular && <span className="inline-block px-3 py-1 bg-[#d4af37] text-white text-xs font-light rounded-full mb-3">Popular</span>}
                <h3 className="font-sans text-2xl font-light text-white mb-2">{style.name}</h3>
                <p className="text-[#6b7280]">{style.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/custom-design" className="inline-block border-2 border-[#d4af37] text-white px-8 py-3.5 rounded-md hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 font-medium tracking-wide text-[15px]">Create a Custom Design</Link>
          </div>
        </div>
      </section>

      <section className="diagonal-divider bg-[#fafaf8] py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-sans text-4xl md:text-5xl mb-4 text-white">Understanding the 4 Cs</h2>
            <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
              Make an informed decision with our expert guidance on diamond quality
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {fourCs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-[#d4af37]" />
                </div>
                <h3 className="font-sans text-2xl font-light text-white mb-2">{item.title}</h3>
                <p className="text-[#6b7280]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="diagonal-divider-bottom bg-[#1a1a1a] text-white py-20">
        <div className="container text-center">
          <h2 className="font-sans text-4xl md:text-5xl mb-6 font-light">Ready to Find Your Ring?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a private consultation at either of our New Jersey locations. We'll guide you through every step of finding the perfect engagement ring.
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
