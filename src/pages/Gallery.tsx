import { motion } from 'motion/react';
import { useState } from 'react';
import { X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { url: 'https://picsum.photos/seed/travel1/800/1000', title: 'Mountain Peak' },
    { url: 'https://picsum.photos/seed/travel2/800/600', title: 'Crystal Lake' },
    { url: 'https://picsum.photos/seed/travel3/800/800', title: 'Desert Sunset' },
    { url: 'https://picsum.photos/seed/travel4/800/1200', title: 'Forest Path' },
    { url: 'https://picsum.photos/seed/travel5/800/600', title: 'Coastal Cliffs' },
    { url: 'https://picsum.photos/seed/travel6/800/1000', title: 'Ancient Ruins' },
    { url: 'https://picsum.photos/seed/travel7/800/800', title: 'City Lights' },
    { url: 'https://picsum.photos/seed/travel8/800/600', title: 'Tropical Beach' },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-serif font-bold mb-6"
          >
            Travel Gallery
          </motion.h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A visual journey through some of our most memorable destinations.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-3xl"
                onClick={() => setSelectedImage(img.url)}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-serif text-2xl font-bold">{img.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-slate-900/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-8 right-8 text-white hover:text-orange-500 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-10 h-10" />
          </button>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </div>
  );
}
