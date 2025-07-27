'use client';

import { motion } from 'framer-motion';

export default function NumberedFeatures() {
  const features = [
    {
      number: '01',
      title: 'Precision',
      description: 'Advanced drone technology delivers unmatched accuracy for property inspections and aerial photography.'
    },
    {
      number: '02', 
      title: 'Reliability',
      description: 'Professional-grade equipment and experienced pilots ensure consistent, high-quality results every time.'
    },
    {
      number: '03',
      title: 'Efficiency', 
      description: 'Complete inspections and surveys in a fraction of the time using cutting-edge aerial solutions.'
    },
    {
      number: '04',
      title: 'Safety',
      description: 'Reduce risk with remote inspections that eliminate the need for dangerous manual assessments.'
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-6">
                <span className="text-gray-500 text-sm font-medium tracking-wider">
                  {feature.number}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
