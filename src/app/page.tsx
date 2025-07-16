import { Header, HeroSection, Footer } from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection
        title="Advanced Drone Solutions"
        subtitle="Mussenden Drone & Aerial"
        description="Experience the future of aerial innovation with our cutting-edge drone technology. From professional cinematography to industrial inspections, we deliver precision and reliability in every flight."
        ctaText="Explore Drones"
        ctaLink="/drones"
      />
      
      {/* Additional sections can be added here */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Why Choose Mussenden Drone & Aerial?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg">
              <div className="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Professional Grade</h3>
              <p className="text-gray-300">Industry-leading technology for professional applications.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.17L10.58 10.76C10.21 10.88 9.84 11 9.5 11C8.12 11 7 9.88 7 8.5C7 7.12 8.12 6 9.5 6C9.84 6 10.21 6.12 10.58 6.24L12.93 3.89L11.75 2.71L5.04 9.42C4.42 10.04 4.42 11.06 5.04 11.68L8.32 14.96C8.94 15.58 9.96 15.58 10.58 14.96L17.29 8.25L21 9Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Precision Control</h3>
              <p className="text-gray-300">Advanced flight control systems for maximum precision.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg">
              <div className="w-12 h-12 bg-green-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Reliable Support</h3>
              <p className="text-gray-300">24/7 technical support and maintenance services.</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
