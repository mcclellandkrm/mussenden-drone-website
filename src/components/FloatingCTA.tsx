'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingCTA() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl p-6 w-80 border border-gray-200"
          >
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Get Started Today!</h3>
              <p className="text-gray-600 text-sm mb-4">
                Free consultation & quote for your drone service needs
              </p>
              <div className="space-y-3">
                <a
                  href="/contact"
                  className="block w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  📞 Get Free Quote
                </a>
                <a
                  href="tel:+447960044486"
                  className="block w-full py-3 px-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  📱 Call Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          rotate: isExpanded ? 45 : 0,
          backgroundColor: isExpanded ? "#ef4444" : "#3b82f6"
        }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-16 h-16 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-blue-500/30 hover:shadow-2xl transition-all duration-300"
      >
        <motion.svg
          animate={{ rotate: isExpanded ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          {isExpanded ? (
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          ) : (
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
          )}
        </motion.svg>
      </motion.button>

      {/* Pulse Animation */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.6, 0, 0.6]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-blue-600 rounded-full"
      />
    </div>
  );
}
