'use client';

import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  price?: string;
  features?: string[];
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}

export default function Card({
  title,
  description,
  icon,
  image,
  price,
  features,
  buttonText = 'Learn More',
  buttonLink = '#',
  className = '',
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 ${className}`}
    >
      {/* Image */}
      {image && (
        <div className="h-48 bg-gray-700 bg-cover bg-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-800/80 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Icon and Price */}
        <div className="flex items-start justify-between mb-4">
          {icon && (
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white">
              {icon}
            </div>
          )}
          {price && (
            <div className="text-right">
              <span className="text-2xl font-bold text-white">{price}</span>
              <div className="text-gray-400 text-sm">Starting from</div>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>

        {/* Description */}
        <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>

        {/* Features */}
        {features && features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-300 text-sm">
                <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Button */}
        <motion.a
          href={buttonLink}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
        >
          {buttonText}
        </motion.a>
      </div>
    </motion.div>
  );
}
