import { motion } from 'motion/react';
import { ArrowRight, Globe, Map, Shield, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const destinations = [
    { title: 'Santorini, Greece', image: 'https://picsum.photos/seed/santorini/800/600', price: '$1,200' },
    { title: 'Bali, Indonesia', image: 'https://picsum.photos/seed/bali/800/600', price: '$900' },
    { title: 'Swiss Alps', image: 'https://picsum.photos/seed/alps/800/600', price: '$1,500' },
  ];

  const testimonials = [
    { name: 'Sarah Johnson', text: 'The best travel experience of my life! Everything was perfectly organized.', role: 'Adventure Enthusiast' },
    { name: 'Mark Thompson', text: 'Wanderlust made our honeymoon truly magical. Highly recommended!', role: 'Happy Traveler' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/travel-hero/1920/1080"
            alt="Travel Hero"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
              Escape the Ordinary, <br />
              <span className="text-orange-500 italic">Explore the World</span>
            </h1>
            <p className="text-xl text-slate-100 mb-10 leading-relaxed">
              Discover hidden gems and iconic landmarks with our curated travel experiences. Your next adventure starts here.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/gallery"
                className="bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition-all flex items-center gap-2 group"
              >
                Start Exploring
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Globe, title: 'Global Reach', desc: 'Destinations across 50+ countries worldwide.' },
              { icon: Shield, title: 'Safe Travel', desc: 'Comprehensive insurance and 24/7 support.' },
              { icon: Star, title: 'Expert Guides', desc: 'Local experts to show you the real culture.' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-4">Featured Destinations</h2>
              <p className="text-slate-600">Handpicked spots for your next getaway.</p>
            </div>
            <Link to="/gallery" className="text-orange-600 font-semibold hover:underline flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((dest, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200/50"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-serif font-bold mb-2">{dest.title}</h4>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Starting from</span>
                    <span className="text-orange-600 font-bold text-lg">{dest.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <Map className="w-full h-full scale-150" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">What Our Travelers Say</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg p-10 rounded-3xl border border-white/10"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />)}
                </div>
                <p className="text-xl italic mb-8 text-slate-300">"{t.text}"</p>
                <div>
                  <h5 className="font-bold text-lg">{t.name}</h5>
                  <p className="text-orange-500 text-sm">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
