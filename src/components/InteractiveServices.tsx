'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  price: string;
  icon: string;
  color: string;
  gradient: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Aerial Photography",
    description: "Stunning aerial photos, 360 panospheres and videos of your property for sales, marketing, presentation or personal use.",
    features: ["High-quality video", "Professional editing", "Creative angles", "Fast delivery"],
    price: "From £350",
    icon: "📸",
    color: "purple",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 2,
    title: "Property Inspections",
    description: "Comprehensive aerial inspections for roofs, gutters, and structural assessments.",
    features: ["Photo and video documentation", "Detailed report", "Insurance claim assistance", "Advice and recommendations"],
    price: "From £350",
    icon: "🏠",
    color: "blue",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    title: "Construction / Commercial",
    description: "Site planning, construction monitoring and progress tracking for commercial projects.",
    features: ["Details aerial photography and/or video", "Site plan assistance", "Detailed reporting", "Safety compliance", "Weekly or monthly updates possible"],
    price: "From £750",
    icon: "🏗️",
    color: "green",
    gradient: "from-green-500 to-emerald-500"
  }
];

export default function InteractiveServices() {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 bg-opacity-10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 bg-opacity-10 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Premium</span> Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional drone services tailored to meet your specific needs with cutting-edge technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
              className="relative cursor-pointer"
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  relative bg-gradient-to-br ${service.gradient} p-[1px] rounded-2xl overflow-hidden
                  ${selectedService === service.id ? 'ring-2 ring-white ring-opacity-50' : ''}
                `}
              >
                <div className="bg-gray-900 bg-opacity-90 backdrop-blur-xl rounded-2xl p-8 h-full">
                  {/* Service Icon */}
                  <motion.div
                    animate={{
                      scale: hoveredService === service.id ? 1.2 : 1,
                      rotate: hoveredService === service.id ? 10 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-6xl mb-6 text-center"
                  >
                    {service.icon}
                  </motion.div>

                  {/* Service Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-gray-300 mb-6 text-center leading-relaxed">
                    {service.description}
                  </p>

                  {/* Price */}
                  <div className={`text-center mb-6 text-2xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.price}
                  </div>

                  {/* Features List */}
                  <AnimatePresence>
                    {(selectedService === service.id || hoveredService === service.id) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mb-6"
                      >
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <motion.li
                              key={featureIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                              className="flex items-center text-gray-300"
                            >
                              <svg className="w-4 h-4 mr-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300
                      bg-gradient-to-r ${service.gradient} text-white
                      hover:shadow-lg hover:shadow-${service.color}-500/30
                    `}
                  >
                    Get Quote
                  </motion.button>

                  {/* Expand Indicator */}
                  <motion.div
                    animate={{ rotate: selectedService === service.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-4 right-4 text-white opacity-50"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6 text-lg">
            Not sure which service is right for you?
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full text-lg hover:bg-gray-100 transition-all duration-300"
          >
            Schedule Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
