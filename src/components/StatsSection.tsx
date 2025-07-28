'use client';

import { motion } from 'framer-motion';

export default function StatsSection() {
  const stats = [
    {
      value: 'Hi-resolution photography for video and stills'
    },
    {
      value: 'Fully insured and experiences'
    },
    {
      value: 'Using latest editing software'
    },
    {
      value: 'Emergency callout available'
    }
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Services For Producing Aerial Photography And Inspections
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-xl md:text-2xl font-semibold text-white">
                {stat.value}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/services"
            className="inline-block px-8 py-3 bg-white text-black font-semibold hover:bg-gray-100 transition-all duration-300 rounded-sm"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
}
