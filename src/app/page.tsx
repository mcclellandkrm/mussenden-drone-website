import { 
  Header, 
  Footer, 
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
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-black">
        <img src="/drone-hero.png" alt="Drone Hero" className="absolute inset-0 w-full h-full object-cover opacity-80" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">Mussenden Drone Services</h1>
          <p className="text-xl text-blue-100 mb-6 drop-shadow">Professional aerial photography and surveying</p>
          <a href="/contact" className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300">Get Started</a>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
      </section>
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
      <FloatingCTA />
      <Footer />
    </div>
  );
}
