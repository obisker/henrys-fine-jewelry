import { Heart, Users, Award, Shield } from 'lucide-react';

export default function About() {
  return (
    <div>
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-sans text-5xl md:text-6xl mb-6 font-light text-white">Our Story</h1>
            <p className="text-xl text-[#6b7280] mb-12">
              For over 37 years, Henry's Fine Jewelry has been helping families in New Jersey celebrate life's most precious moments. What started as a dream in 1989 has grown into a trusted, multi-generational family business serving Summit and Basking Ridge.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-[#d4af37]" />
              </div>
              <h3 className="font-sans text-xl mb-2">Family Values</h3>
              <p className="text-[#6b7280]">Three generations of expertise and care</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#d4af37]" />
              </div>
              <h3 className="font-sans text-xl mb-2">Personal Service</h3>
              <p className="text-[#6b7280]">We treat every customer like family</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#d4af37]" />
              </div>
              <h3 className="font-sans text-xl mb-2">Expert Craftsmanship</h3>
              <p className="text-[#6b7280]">Master jewelers and designers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#d4af37]" />
              </div>
              <h3 className="font-sans text-xl mb-2">Trusted Quality</h3>
              <p className="text-[#6b7280]">GIA certified with lifetime guarantee</p>
            </div>
          </div>
        </div>
      </section>

      <section className="diagonal-divider bg-[#1a1a1a] text-white py-20">
        <div className="container text-center">
          <h2 className="font-sans text-4xl md:text-5xl mb-6 font-light">Visit Us Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the Henry's difference at either of our New Jersey locations
          </p>
          <a href="tel:9082733777" className="inline-block bg-[#d4af37] text-white px-8 py-3.5 rounded-md hover:bg-[#d4af37]/90 transition-all duration-300 font-medium tracking-wide shadow-md hover:shadow-xl text-[15px]">
            Book Your Appointment
          </a>
        </div>
      </section>
    </div>
  );
}
