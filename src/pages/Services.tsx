import { motion } from 'motion/react';
import { Plane, Hotel, Map, Camera, Coffee, Utensils } from 'lucide-react';

export default function Services() {
  const services = [
    { icon: Plane, title: 'Flight Booking', desc: 'Best rates for international and domestic flights with flexible options.' },
    { icon: Hotel, title: 'Luxury Stays', desc: 'Handpicked 5-star hotels and boutique resorts for ultimate comfort.' },
    { icon: Map, title: 'Guided Tours', desc: 'Immersive cultural experiences led by professional local guides.' },
    { icon: Camera, title: 'Photography Trips', desc: 'Specialized tours for capturing the world\'s most beautiful sights.' },
    { icon: Coffee, title: 'Bespoke Itineraries', desc: 'Custom-tailored travel plans designed around your specific interests.' },
    { icon: Utensils, title: 'Culinary Tours', desc: 'Explore global flavors with our curated food and wine experiences.' },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-orange-600 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-serif font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto leading-relaxed">
            From planning to execution, we handle every detail of your journey so you can focus on the adventure.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all group"
              >
                <div className="w-16 h-16 bg-white text-orange-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-all">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">Ready to Plan Your Next Trip?</h2>
              <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
                Our experts are standing by to help you craft the perfect itinerary. Let's make your dream vacation a reality.
              </p>
              <button className="bg-orange-600 text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-orange-700 transition-all active:scale-95">
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
