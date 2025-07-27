'use client';

import React, { useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

interface Stat {
  id: number;
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: string;
  color: string;
}

const stats: Stat[] = [
  {
    id: 1,
    value: 500,
    suffix: "+",
    label: "Projects Completed",
    description: "Successfully delivered projects across Northern Ireland",
    icon: "✈️",
    color: "blue"
  },
  {
    id: 2,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Consistently exceeding client expectations",
    icon: "⭐",
    color: "yellow"
  },
  {
    id: 3,
    value: 24,
    suffix: "hr",
    label: "Response Time",
    description: "Quick turnaround for urgent inspections",
    icon: "⚡",
    color: "green"
  },
  {
    id: 4,
    value: 5,
    suffix: "+",
    label: "Years Experience",
    description: "Professional drone operations and aerial photography",
    icon: "🏆",
    color: "purple"
  }
];

function AnimatedNumber({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const springValue = useSpring(0, { stiffness: 100, damping: 30 });
  const display = useTransform(springValue, (current) => 
    Math.round(current) + suffix
  );

  React.useEffect(() => {
    if (inView) {
      springValue.set(value);
    }
  }, [springValue, value, inView]);

  return <motion.span>{display}</motion.span>;
}

export default function ScrollStats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-72 h-72 bg-blue-500 bg-opacity-20 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 bg-opacity-20 rounded-full filter blur-3xl"
        />
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
            Proven <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Results</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Numbers that speak to our commitment to excellence and client satisfaction
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 80, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              <div className="bg-white bg-opacity-5 backdrop-blur-xl rounded-2xl p-8 border border-white border-opacity-10 hover:border-opacity-20 transition-all duration-300 text-center h-full">
                {/* Animated Icon */}
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-6xl mb-6"
                >
                  {stat.icon}
                </motion.div>

                {/* Animated Number */}
                <div className="mb-4">
                  <div className={`text-4xl sm:text-5xl font-bold text-${stat.color}-400 mb-2`}>
                    <AnimatedNumber 
                      value={stat.value} 
                      suffix={stat.suffix} 
                      inView={isInView} 
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {stat.label}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {stat.description}
                </p>

                {/* Hover Effect */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-600 opacity-5 rounded-2xl`}
                />
              </div>

              {/* Floating Particles */}
              <motion.div
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
                className={`absolute -top-2 -right-2 w-4 h-4 bg-${stat.color}-400 rounded-full opacity-30`}
              />
              <motion.div
                animate={{
                  y: [20, -20, 20],
                  opacity: [0.2, 0.6, 0.2]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3
                }}
                className={`absolute -bottom-2 -left-2 w-3 h-3 bg-${stat.color}-300 rounded-full opacity-20`}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white bg-opacity-5 backdrop-blur-xl rounded-2xl p-8 border border-white border-opacity-10 max-w-4xl mx-auto">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <motion.svg
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="w-6 h-6 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </motion.svg>
              ))}
            </div>
            <blockquote className="text-xl text-gray-300 italic mb-4">
              &quot;Mussenden Aerial exceeded all our expectations. Their professionalism and attention to detail is unmatched in the industry.&quot;
            </blockquote>
            <p className="text-gray-400">- Michael Thompson, Property Developer</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
