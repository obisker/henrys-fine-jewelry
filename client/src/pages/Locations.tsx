import { MapPin, Clock, Phone } from 'lucide-react';

export default function Locations() {
  const locations = [
    { name: 'Summit Location', address: '419 Springfield Avenue', city: 'Summit, NJ 07901', phone: '(908) 273-3777', phoneLink: 'tel:9082733777', hours: ['Monday - Friday: 10:00 AM - 5:30 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed'] },
    { name: 'Basking Ridge Location', address: '665 Martinsville Road', city: 'Basking Ridge, NJ 07920', phone: '(908) 903-0390', phoneLink: 'tel:9089030390', hours: ['Monday - Friday: 10:00 AM - 5:30 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed'] },
  ];

  return (
    <div>
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="font-sans text-5xl md:text-6xl mb-6 font-light text-white">Visit Our Showrooms</h1>
            <p className="text-xl text-[#6b7280] max-w-2xl mx-auto">Two convenient New Jersey locations to serve you</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {locations.map((location, index) => (
              <div key={index} className="bg-[#fafaf8] p-8 rounded-xl shadow-lg">
                <h2 className="font-sans text-3xl font-light text-white mb-6">{location.name}</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-lg text-white">{location.address}</p>
                      <p className="text-lg text-white">{location.city}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-1" />
                    <a href={location.phoneLink} className="text-lg text-white hover:underline">{location.phone}</a>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-1" />
                    <div>
                      {location.hours.map((hour, idx) => (
                        <p key={idx} className="text-white">{hour}</p>
                      ))}
                    </div>
                  </div>
                </div>
                <a href={location.phoneLink} className="btn-primary w-full text-center mt-8 block">Call This Location</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="diagonal-divider-bottom bg-[#1a1a1a] text-white py-20">
        <div className="container text-center">
          <h2 className="font-sans text-4xl md:text-5xl mb-6 font-light">We Look Forward to Seeing You</h2>
          <p className="text-xl max-w-2xl mx-auto">Walk-ins welcome, or call ahead to schedule a private consultation</p>
        </div>
      </section>
    </div>
  );
}
