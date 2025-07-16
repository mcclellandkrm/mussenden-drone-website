import { Header, Footer, PageHeader, Card } from '@/components';

export default function DronesPage() {
  const droneCategories = [
    {
      title: 'Professional Cinematography',
      description: 'High-end drones designed for film and photography professionals.',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
        </svg>
      ),
      price: '$2,999',
      features: [
        '8K Ultra HD Recording',
        '3-Axis Mechanical Gimbal',
        '45-minute Flight Time',
        'Obstacle Avoidance System',
        'Professional Color Grading'
      ],
      buttonText: 'View Details',
      buttonLink: '/drones/professional'
    },
    {
      title: 'Consumer & Hobby',
      description: 'Perfect for enthusiasts and beginners looking to explore aerial photography.',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" />
        </svg>
      ),
      price: '$599',
      features: [
        '4K Video Recording',
        'GPS Auto-Return',
        '30-minute Flight Time',
        'Smartphone Control',
        'Beginner-Friendly Mode'
      ],
      buttonText: 'Explore Models',
      buttonLink: '/drones/consumer'
    },
    {
      title: 'Industrial & Commercial',
      description: 'Robust solutions for surveying, inspection, and commercial applications.',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L13.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
        </svg>
      ),
      price: '$4,999',
      features: [
        'Thermal Imaging Camera',
        '60-minute Flight Time',
        'Weather Resistant',
        'Real-time Data Transmission',
        'Professional Software Suite'
      ],
      buttonText: 'Get Quote',
      buttonLink: '/contact'
    }
  ];

  const featuredDrones = [
    {
      title: 'Mussen Pro X1',
      description: 'Our flagship professional drone with cutting-edge technology for the most demanding shoots.',
      price: '$3,499',
      features: [
        '8K/60fps Video Recording',
        '55-minute Flight Time',
        'Advanced AI Tracking',
        'Professional Cinema Modes'
      ]
    },
    {
      title: 'Mussen Air 4K',
      description: 'Compact and powerful, perfect for content creators and photography enthusiasts.',
      price: '$899',
      features: [
        '4K/30fps Video',
        '35-minute Flight Time',
        'Intelligent Flight Modes',
        'Compact Foldable Design'
      ]
    },
    {
      title: 'Mussen Industrial M2',
      description: 'Built for commercial applications with enterprise-grade reliability and performance.',
      price: '$6,999',
      features: [
        'Dual Camera System',
        '70-minute Flight Time',
        'IP65 Weather Rating',
        'Advanced Mapping Software'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <PageHeader
        subtitle="Our Drone Collection"
        title="Advanced Aerial Solutions"
        description="Discover our complete range of professional-grade drones designed for every application, from cinematic masterpieces to industrial inspections."
      />

      {/* Drone Categories */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Choose Your Perfect Drone
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              From professional cinematography to industrial applications, we have the right drone for your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {droneCategories.map((category, index) => (
              <Card
                key={index}
                title={category.title}
                description={category.description}
                icon={category.icon}
                price={category.price}
                features={category.features}
                buttonText={category.buttonText}
                buttonLink={category.buttonLink}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Drones */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Featured Models
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Our most popular and innovative drone models, trusted by professionals worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredDrones.map((drone, index) => (
              <Card
                key={index}
                title={drone.title}
                description={drone.description}
                price={drone.price}
                features={drone.features}
                buttonText="Learn More"
                buttonLink="/contact"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Drones */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Mussenden Drone & Aerial?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Premium Quality',
                description: 'Built with aerospace-grade materials for maximum durability.',
                icon: '🏆'
              },
              {
                title: 'Advanced Technology',
                description: 'Latest AI and sensor technology for superior performance.',
                icon: '🚀'
              },
              {
                title: 'Global Support',
                description: '24/7 technical support and worldwide service network.',
                icon: '🌍'
              },
              {
                title: 'Professional Training',
                description: 'Comprehensive training programs for all skill levels.',
                icon: '🎓'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
