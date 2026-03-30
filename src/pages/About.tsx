import { motion } from 'motion/react';
import { Users, Award, Heart, History } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Users, label: 'Happy Travelers', value: '50k+' },
    { icon: Award, label: 'Awards Won', value: '15' },
    { icon: Heart, label: 'Destinations', value: '200+' },
    { icon: History, label: 'Years Experience', value: '12' },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-serif font-bold mb-6"
          >
            Our Story
          </motion.h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We believe that travel is more than just visiting places; it's about creating memories that last a lifetime.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-serif font-bold text-slate-900">Redefining the Way You Explore</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Founded in 2010, Wanderlust started with a simple mission: to make luxury travel accessible and authentic. We've spent over a decade building relationships with local communities and discovering the world's most breathtaking corners.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our team of travel experts works tirelessly to ensure every itinerary is perfectly balanced, offering both iconic sights and hidden gems that you won't find in any guidebook.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://picsum.photos/seed/about-team/800/600"
                alt="Our Team"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 bg-orange-600 text-white p-8 rounded-3xl hidden md:block">
                <p className="text-3xl font-serif font-bold">12+</p>
                <p className="text-sm uppercase tracking-widest">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center space-y-4"
              >
                <stat.icon className="w-10 h-10 text-orange-500 mx-auto" />
                <div className="text-4xl font-serif font-bold">{stat.value}</div>
                <div className="text-slate-400 text-sm uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Meet the Visionaries</h2>
            <p className="text-slate-600">The passionate people behind your adventures.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'Alex Rivera', role: 'Founder & CEO', img: 'https://picsum.photos/seed/alex/400/400' },
              { name: 'Elena Chen', role: 'Head of Destinations', img: 'https://picsum.photos/seed/elena/400/400' },
              { name: 'James Wilson', role: 'Lead Travel Expert', img: 'https://picsum.photos/seed/james/400/400' },
            ].map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="text-center space-y-4"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-orange-50"
                  referrerPolicy="no-referrer"
                />
                <h4 className="text-2xl font-serif font-bold">{member.name}</h4>
                <p className="text-orange-600 font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
