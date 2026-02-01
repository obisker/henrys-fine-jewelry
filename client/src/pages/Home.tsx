import { Link } from 'wouter';
import { Heart, Award, Shield, Users, ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const basePath = import.meta.env.BASE_URL;

  const heroSlides = [
    {
      image: `${basePath}images/hero-couple-proposal.jpg`,
      title: 'Where Love Stories Begin',
      subtitle: 'Celebrating life\'s most precious moments with exquisite jewelry since 1989',
      primaryCta: { text: 'Explore Engagement Rings', link: '/engagement-rings' },
      secondaryCta: { text: 'Book Consultation', link: 'tel:9082733777', isPhone: true },
    },
    {
      image: `${basePath}images/custom-design-process.jpg`,
      title: 'Custom Design Excellence',
      subtitle: 'Bring your vision to life with our expert craftsmen and designers',
      primaryCta: { text: 'Start Custom Design', link: '/custom-design' },
      secondaryCta: { text: 'View Our Process', link: '/custom-design' },
    },
    {
      image: `${basePath}images/hero-hands-rings.jpg`,
      title: 'Timeless Engagement Rings',
      subtitle: 'Discover the perfect symbol of your love from our curated collection',
      primaryCta: { text: 'Browse Engagement Rings', link: '/engagement-rings' },
      secondaryCta: { text: 'Book Consultation', link: 'tel:9082733777', isPhone: true },
    },
    {
      image: `${basePath}images/store-interior-welcoming.jpg`,
      title: 'Family-Owned Since 1989',
      subtitle: 'Experience personalized service at our Summit and Basking Ridge locations',
      primaryCta: { text: 'Visit Our Showrooms', link: '/locations' },
      secondaryCta: { text: 'Call Us Today', link: 'tel:9082733777', isPhone: true },
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  const trustSignals = [
    { icon: Users, text: '37 Years of Excellence' },
    { icon: Star, text: '300+ 5-Star Reviews' },
    { icon: Shield, text: 'GIA Authorized' },
    { icon: Heart, text: 'Family Owned' },
  ];

  const testimonials = [
    {
      name: 'Nathan T.',
      text: 'I highly recommend visiting Henry\'s if you\'re looking for a trustworthy jeweler with great customer service and fair prices.',
      rating: 5,
    },
    {
      name: 'Kyle K.',
      text: 'They did an excellent job creating the perfect engagement ring for my fiance. Michael was extremely personable and helpful throughout the process.',
      rating: 5,
    },
    {
      name: 'Heather M.',
      text: 'Hands down the best jeweler!! Henry took stones from my wedding band and designed it just as I wanted it. I love it so much!',
      rating: 5,
    },
  ];

  return (
    <div>
      <section 
        className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
            </div>
          </div>
        ))}
        
        <div className="container relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans font-light mb-6 text-balance leading-tight tracking-tight">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-balance leading-relaxed font-light">
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              {heroSlides[currentSlide].primaryCta.isPhone ? (
                <a
                  href={heroSlides[currentSlide].primaryCta.link}
                  className="inline-block bg-[#2a2a2a] text-white px-5 py-2.5 sm:px-8 sm:py-3.5 rounded-md hover:bg-[#3a3a3a] border border-white/10 transition-all duration-300 font-medium tracking-wide shadow-md hover:shadow-xl text-sm sm:text-[15px] text-center"
                >
                  {heroSlides[currentSlide].primaryCta.text}
                </a>
              ) : (
                <Link
                  href={heroSlides[currentSlide].primaryCta.link}
                  className="inline-block bg-[#2a2a2a] text-white px-5 py-2.5 sm:px-8 sm:py-3.5 rounded-md hover:bg-[#3a3a3a] border border-white/10 transition-all duration-300 font-medium tracking-wide shadow-md hover:shadow-xl text-sm sm:text-[15px] text-center"
                >
                  {heroSlides[currentSlide].primaryCta.text}
                </Link>
              )}
              {heroSlides[currentSlide].secondaryCta.isPhone ? (
                <a
                  href={heroSlides[currentSlide].secondaryCta.link}
                  className="inline-block bg-white text-[#1a1a1a] px-5 py-2.5 sm:px-8 sm:py-3.5 rounded-md hover:bg-white/90 transition-all duration-300 font-medium tracking-wide shadow-md hover:shadow-lg text-sm sm:text-[15px] text-center"
                >
                  {heroSlides[currentSlide].secondaryCta.text}
                </a>
              ) : (
                <Link
                  href={heroSlides[currentSlide].secondaryCta.link}
                  className="inline-block bg-white text-[#1a1a1a] px-5 py-2.5 sm:px-8 sm:py-3.5 rounded-md hover:bg-white/90 transition-all duration-300 font-medium tracking-wide shadow-md hover:shadow-lg text-sm sm:text-[15px] text-center"
                >
                  {heroSlides[currentSlide].secondaryCta.text}
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
        <button
          onClick={prevSlide}
          className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white w-6 sm:w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustSignals.map((signal, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <signal.icon className="w-12 h-12 text-[#d4af37] mb-3" />
                <p className="font-medium text-white">{signal.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-sans text-4xl md:text-5xl mb-4 text-white font-light tracking-tight">
              Discover Our Collections
            </h2>
            <p className="text-lg text-[#6b7280] max-w-2xl mx-auto leading-relaxed">
              From timeless engagement rings to custom-designed masterpieces, find the perfect piece to celebrate your story
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/engagement-rings" className="group block">
              <div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-4">
                <img
                  src={`${basePath}images/hero-hands-rings.jpg`}
                  alt="Engagement Rings"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-8">
                  <h3 className="text-white font-sans text-3xl font-light tracking-tight">
                    Engagement Rings
                  </h3>
                </div>
              </div>
              <p className="text-[#6b7280] group-hover:text-white transition-colors flex items-center gap-2 font-medium text-[15px] tracking-wide">
                Explore Collection <ArrowRight className="w-4 h-4" />
              </p>
            </Link>

            <Link href="/custom-design" className="group block">
              <div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-4">
                <img
                  src={`${basePath}images/custom-design-process.jpg`}
                  alt="Custom Design"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-8">
                  <h3 className="text-white font-sans text-3xl font-light tracking-tight">
                    Custom Design
                  </h3>
                </div>
              </div>
              <p className="text-[#6b7280] group-hover:text-white transition-colors flex items-center gap-2 font-medium text-[15px] tracking-wide">
                Start Your Design <ArrowRight className="w-4 h-4" />
              </p>
            </Link>

            <a href="#" className="group block">
              <div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-4 bg-[#1a1a1a]">
                <img
                  src={`${basePath}images/fine-jewelry-collection.jpg`}
                  alt="Fine Jewelry"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-8">
                  <h3 className="text-white font-sans text-3xl font-light tracking-tight">
                    Fine Jewelry
                  </h3>
                </div>
              </div>
              <p className="text-[#6b7280] group-hover:text-white transition-colors flex items-center gap-2 font-medium text-[15px] tracking-wide">
                Browse Collection <ArrowRight className="w-4 h-4" />
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="diagonal-divider bg-[#1a1a1a] text-white py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-sans text-4xl md:text-5xl mb-4">
              Why Choose Henry's
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Family, it's who we are and how we treat our customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-sans text-xl mb-2">37 Years of Expertise</h3>
              <p className="text-white/80">
                Three generations of jewelry knowledge and craftsmanship
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-sans text-xl mb-2">Personal Service</h3>
              <p className="text-white/80">
                We take time to understand your vision and bring it to life
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-sans text-xl mb-2">Quality Guaranteed</h3>
              <p className="text-white/80">
                GIA certified diamonds and lifetime service on all pieces
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-sans text-xl mb-2">Local Presence</h3>
              <p className="text-white/80">
                Two convenient New Jersey locations to serve you
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-sans text-4xl md:text-5xl mb-4 text-white font-light tracking-tight">
              What Our Customers Say
            </h2>
            <p className="text-lg text-[#6b7280]">
              Over 300 5-star reviews on Google, Facebook, and Yelp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg card-hover">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#d4af37] text-[#d4af37]" />
                  ))}
                </div>
                <p className="text-white mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-light text-white">
                  — {testimonial.name}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.google.com/search?q=henry%27s+fine+jewelry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-[#d4af37] text-white px-8 py-3.5 rounded-md hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 font-medium tracking-wide text-[15px]"
            >
              Read More Reviews
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-sans text-4xl md:text-5xl mb-6 font-light text-white">
                Visit Our Showrooms
              </h2>
              <p className="text-lg text-[#6b7280] mb-8">
                Experience the warmth of our family-owned jewelry stores in Summit and Basking Ridge. Browse our collections, meet with our expert team, and discover why generations of New Jersey families trust Henry's for their most important jewelry purchases.
              </p>
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="font-sans text-xl font-light text-white mb-2">
                    Summit Location
                  </h3>
                  <p className="text-[#6b7280]">
                    419 Springfield Avenue, Summit, NJ 07901<br />
                    <a href="tel:9082733777" className="text-[#d4af37] hover:underline">
                      (908) 273-3777
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="font-sans text-xl font-light text-white mb-2">
                    Basking Ridge Location
                  </h3>
                  <p className="text-[#6b7280]">
                    665 Martinsville Road, Basking Ridge, NJ 07920<br />
                    <a href="tel:9089030390" className="text-[#d4af37] hover:underline">
                      (908) 903-0390
                    </a>
                  </p>
                </div>
              </div>
              <Link href="/locations" className="inline-block bg-[#2a2a2a] text-white px-8 py-3.5 rounded-md hover:bg-[#3a3a3a] border border-white/10 transition-all duration-300 font-medium tracking-wide shadow-md hover:shadow-xl text-[15px]">
                View Hours & Directions
              </Link>
            </div>
            <div>
              <img
                src={`${basePath}images/store-interior-welcoming.jpg`}
                alt="Henry's Fine Jewelry Store Interior"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1a1a1a] text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-sans text-3xl md:text-4xl mb-4">
              Stay Connected
            </h2>
            <p className="text-white/90 mb-8">
              Subscribe for exclusive promotions, new collection announcements, and jewelry care tips
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-3.5 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white shadow-sm border border-white/20"
              />
              <button type="submit" className="bg-[#d4af37] text-white px-8 py-3.5 rounded-md hover:bg-[#d4af37]/90 transition-all duration-300 font-medium tracking-wide shadow-md hover:shadow-lg text-[15px]">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
