import { 
  Header, 
  Footer, 
  ParallaxHero, 
  NumberedFeatures,
  StatsSection,
  InteractiveServices, 
  RecentProjects, 
  ScrollStats,
  FloatingCTA
} from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <Header />
      
      {/* Hero Section with Parallax Effects */}
      <ParallaxHero />
      
      {/* Numbered Features Section */}
      <NumberedFeatures />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Interactive Services Section */}
      <InteractiveServices />
      
      {/* Recent Projects Section */}
      <RecentProjects />
      
      {/* Animated Statistics */}
      <ScrollStats />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Elevate Your Perspective?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for a free consultation and quote. Let&apos;s discuss how our advanced drone services can transform your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get Your Free Quote
            </a>
            <a 
              href="/services" 
              className="inline-block px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Explore All Services
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
      <FloatingCTA />
    </div>
  );
}
