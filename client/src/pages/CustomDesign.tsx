import { Pencil, Gem, Hammer, Sparkles, CheckCircle, Phone } from 'lucide-react';

export default function CustomDesign() {
  const designProcess = [
    { step: 1, icon: Pencil, title: 'Consultation', description: 'Share your vision, inspiration, and budget with our expert designers' },
    { step: 2, icon: Gem, title: 'Design & Selection', description: 'Review hand-drawn sketches and select your perfect stones' },
    { step: 3, icon: Hammer, title: 'Craftsmanship', description: 'Our master jewelers bring your design to life with precision' },
    { step: 4, icon: Sparkles, title: 'Your Masterpiece', description: 'Receive your one-of-a-kind piece with lifetime service guarantee' },
  ];

  const reasons = [
    'Transform heirloom pieces into modern designs',
    'Create a truly unique engagement ring',
    'Combine stones from multiple pieces',
    'Design matching wedding bands',
    'Commemorate special milestones',
    'Express your personal style',
  ];

  return (
    <div>
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/custom-design-process.jpg)' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-black/45" />
        </div>
        <div className="container relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-sans font-light mb-6">Custom Jewelry Design</h1>
            <p className="text-xl mb-8">
              Transform your vision into a one-of-a-kind masterpiece. Our expert designers and craftsmen bring your dreams to life.
            </p>
            <a href="tel:9082733777" className="inline-block bg-[#2a2a2a] text-white px-8 py-3.5 rounded-md hover:bg-[#3a3a3a] border border-white/10 transition-all duration-300 font-medium tracking-wide shadow-md hover:shadow-xl text-[15px]">Start Your Custom Design</a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-sans text-4xl md:text-5xl mb-4 text-white">Our Design Process</h2>
            <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
              From concept to creation, we guide you through every step of bringing your unique piece to life
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {designProcess.map((item, index) => (
              <div key={index} className="relative">
                {index < designProcess.length - 1 && <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-[#d4af37]/30 z-0" />}
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 bg-[#1a1a1a] rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <item.icon className="w-12 h-12 text-[#d4af37]" />
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-[#d4af37] rounded-full flex items-center justify-center text-white font-light text-sm">{item.step}</span>
                  </div>
                  <h3 className="font-sans text-2xl font-light text-white mb-3">{item.title}</h3>
                  <p className="text-[#6b7280]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="diagonal-divider bg-[#fafaf8] py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="font-sans text-4xl md:text-5xl mb-6 font-light text-white">Why Choose Custom Design?</h2>
              <p className="text-lg text-[#6b7280] mb-8">
                Custom jewelry design allows you to create something truly meaningful and unique. Whether you're reimagining an heirloom, designing the perfect engagement ring, or celebrating a milestone, our team brings decades of expertise to every project.
              </p>
              <ul className="space-y-4">
                {reasons.map((reason, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-1" />
                    <span className="text-white text-lg">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-2xl">
              <h3 className="font-sans text-3xl font-light text-white mb-6">Our Expertise</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-light text-xl text-white mb-2">37 Years of Experience</h4>
                  <p className="text-[#6b7280]">Three generations of master jewelers and designers</p>
                </div>
                <div>
                  <h4 className="font-light text-xl text-white mb-2">GIA Certified</h4>
                  <p className="text-[#6b7280]">Expert gemstone selection and quality assurance</p>
                </div>
                <div>
                  <h4 className="font-light text-xl text-white mb-2">In-House Workshop</h4>
                  <p className="text-[#6b7280]">Complete control over quality and timeline</p>
                </div>
                <div>
                  <h4 className="font-light text-xl text-white mb-2">Lifetime Guarantee</h4>
                  <p className="text-[#6b7280]">Complimentary cleaning, inspection, and service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="diagonal-divider-bottom bg-[#d4af37] text-white py-20">
        <div className="container text-center">
          <h2 className="font-sans text-4xl md:text-5xl mb-6 font-light">Ready to Create Your Masterpiece?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a complimentary design consultation at either of our locations. Bring your ideas, inspiration photos, or heirloom pieces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:9082733777" className="inline-block bg-white text-[#1a1a1a] px-8 py-3.5 rounded-md hover:bg-white/90 transition-all duration-300 font-medium tracking-wide shadow-md hover:shadow-lg text-[15px]">
              <Phone className="w-5 h-5 inline mr-2" />Summit: (908) 273-3777
            </a>
            <a href="tel:9089030390" className="inline-block bg-white text-[#1a1a1a] px-8 py-3.5 rounded-md hover:bg-white/90 transition-all duration-300 font-medium tracking-wide shadow-md hover:shadow-lg text-[15px]">
              <Phone className="w-5 h-5 inline mr-2" />Basking Ridge: (908) 903-0390
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
