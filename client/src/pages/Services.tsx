import { Wrench, Clock, FileCheck, Type, Sparkles, Phone } from 'lucide-react';

export default function Services() {
  const services = [
    { icon: Wrench, title: 'Jewelry Repair', description: 'Expert repair services for rings, necklaces, bracelets, and more', details: ['Ring sizing', 'Prong retipping', 'Chain repair', 'Stone replacement'] },
    { icon: Clock, title: 'Watch Repair', description: 'Professional watch battery replacement and repair services', details: ['Battery replacement', 'Band adjustment', 'Crystal replacement', 'Movement repair'] },
    { icon: FileCheck, title: 'Jewelry Appraisals', description: 'Certified appraisals for insurance and estate purposes', details: ['Insurance appraisals', 'Estate valuations', 'GIA certified', 'Detailed documentation'] },
    { icon: Type, title: 'Engraving', description: 'Personalize your jewelry with custom engraving', details: ['Ring engraving', 'Pendant engraving', 'Custom messages', 'Special dates'] },
    { icon: Sparkles, title: 'Antique Restoration', description: 'Restore heirloom pieces to their original beauty', details: ['Vintage repair', 'Period-appropriate techniques', 'Preservation', 'Modernization'] },
    { icon: Sparkles, title: 'Pearl Stringing', description: 'Professional pearl and bead restringing services', details: ['Pearl knotting', 'Restringing', 'Clasp replacement', 'Custom lengths'] },
  ];

  return (
    <div>
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="font-sans text-5xl md:text-6xl mb-6 font-light text-white">Jewelry Services</h1>
            <p className="text-xl text-[#6b7280] max-w-2xl mx-auto">
              Comprehensive jewelry services to keep your treasured pieces beautiful for generations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-[#fafaf8] p-8 rounded-xl card-hover">
                <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-[#d4af37]" />
                </div>
                <h3 className="font-sans text-2xl font-light text-white mb-3">{service.title}</h3>
                <p className="text-[#6b7280] mb-4">{service.description}</p>
                <ul className="space-y-2 text-sm text-[#6b7280]">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="diagonal-divider-bottom bg-[#1a1a1a] text-white py-20">
        <div className="container text-center">
          <h2 className="font-sans text-4xl md:text-5xl mb-6 font-light">Need a Service?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Bring your jewelry to either location for a free consultation and estimate
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
