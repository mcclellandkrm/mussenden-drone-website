import { Header, Footer, PageHeader, Card } from '@/components';

export default function ServicesPage() {
  const services = [
    {
      title: 'Property Inspections',
      description: 'Comprehensive roof, gutter, and structural inspections to identify issues before they become costly problems.',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 21V7l9-6 9 6v14h-6v-6h-6v6H3z" />
        </svg>
      ),
      features: [
        'Roof Condition Assessment',
        'Gutter & Drainage Inspection',
        'Structural Damage Detection',
        'Thermal Imaging Analysis',
        'Detailed Inspection Reports'
      ],
      price: 'From £150',
      buttonText: 'Book Inspection',
      buttonLink: '/contact'
    },
    {
      title: 'Aerial Photography & Videography',
      description: 'Stunning aerial photos and videos for property marketing, real estate listings, and personal keepsakes.',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: [
        'Professional 4K/8K Video',
        'High-Resolution Photography',
        'Real Estate Marketing',
        'Property Showcases',
        'Event Documentation'
      ],
      price: 'From £200',
      buttonText: 'Book Photography',
      buttonLink: '/contact'
    },
    {
      title: 'Construction Monitoring',
      description: 'Track progress, document conditions, and ensure quality throughout your construction or renovation project.',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      features: [
        'Progress Documentation',
        'Site Safety Monitoring',
        'Quality Assurance Checks',
        'Time-lapse Creation',
        'Regular Progress Reports'
      ],
      price: 'From £250',
      buttonText: 'Book Monitoring',
      buttonLink: '/contact'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <PageHeader
        subtitle="Our Services"
        title="Professional Drone Services"
        description="From routine inspections to stunning aerial photography, we provide safe, efficient, and cost-effective drone solutions for homeowners and businesses."
      />

      {/* Services Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Core Services
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Professional drone services designed to meet your specific needs with safety and precision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                price={service.price}
                features={service.features}
                buttonText={service.buttonText}
                buttonLink={service.buttonLink}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Why Choose Our Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-900 rounded-lg">
              <div className="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Fully Certified & Insured</h3>
              <p className="text-gray-300">Professional operations with comprehensive insurance coverage for your peace of mind.</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Fast & Efficient</h3>
              <p className="text-gray-300">Complete inspections in minutes, not hours. Quick results without compromising quality.</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg">
              <div className="w-12 h-12 bg-green-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Cost-Effective</h3>
              <p className="text-gray-300">Save money compared to traditional methods while getting superior detail and accuracy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for a free consultation and quote. Let's discuss how our drone services can help you.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
          >
            Get Your Free Quote
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
