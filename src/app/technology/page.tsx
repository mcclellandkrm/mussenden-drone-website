import { Header, Footer, PageHeader, Card } from '@/components';

export default function TechnologyPage() {
  const technologies = [
    {
      title: 'Advanced Flight Control Systems',
      description: 'Our proprietary flight control algorithms ensure maximum stability and precision in all weather conditions.',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
        </svg>
      ),
      features: [
        'AI-Powered Autopilot',
        'Real-time Wind Compensation',
        'Obstacle Avoidance',
        'Precision Hovering',
        'Emergency Landing Protocols'
      ]
    },
    {
      title: 'Computer Vision & AI',
      description: 'Cutting-edge artificial intelligence for autonomous navigation, object tracking, and intelligent analysis.',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" />
        </svg>
      ),
      features: [
        'Object Recognition',
        'Automated Tracking',
        'Gesture Control',
        'Intelligent Flight Modes',
        'Real-time Image Processing'
      ]
    },
    {
      title: 'Camera & Gimbal Technology',
      description: 'Professional-grade imaging systems with mechanical stabilization for crystal-clear footage.',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L13.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
        </svg>
      ),
      features: [
        '8K Ultra HD Recording',
        '3-Axis Mechanical Gimbal',
        'HDR Photography',
        'Low-Light Performance',
        'Professional Color Profiles'
      ]
    },
    {
      title: 'Battery & Power Management',
      description: 'Advanced lithium polymer batteries with intelligent power management for extended flight times.',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
        </svg>
      ),
      features: [
        'Up to 70-minute Flight Time',
        'Quick Charge Technology',
        'Battery Health Monitoring',
        'Power Optimization',
        'Hot-Swappable Batteries'
      ]
    }
  ];

  const innovations = [
    {
      title: 'Quantum Sensor Array',
      description: 'Next-generation sensors providing unprecedented accuracy in positioning and environmental detection.',
      status: 'In Development'
    },
    {
      title: 'Neural Network Processing',
      description: 'On-board AI processing for real-time decision making and autonomous mission execution.',
      status: 'Beta Testing'
    },
    {
      title: 'Swarm Intelligence',
      description: 'Coordinated multi-drone operations for large-scale mapping and surveillance missions.',
      status: 'Research Phase'
    },
    {
      title: 'Hybrid Propulsion',
      description: 'Combining electric and hydrogen fuel cell technology for extended range and endurance.',
      status: 'Prototype'
    }
  ];

  const specifications = [
    {
      category: 'Flight Performance',
      specs: [
        'Max Speed: 72 km/h (45 mph)',
        'Max Altitude: 6,000m (19,685 ft)',
        'Wind Resistance: 15 m/s',
        'Operating Temperature: -10°C to 40°C',
        'Max Flight Time: 70 minutes'
      ]
    },
    {
      category: 'Camera System',
      specs: [
        'Sensor: 1" CMOS',
        'Video: 8K at 30fps, 4K at 120fps',
        'Photo: 48MP RAW/JPEG',
        'ISO Range: 100-12800',
        'Gimbal: 3-axis mechanical'
      ]
    },
    {
      category: 'Intelligence Features',
      specs: [
        'Obstacle Sensing: 6-directional',
        'GPS: Dual-band L1/L5',
        'Vision Systems: 8 cameras',
        'AI Processor: Custom neural chip',
        'Storage: 1TB internal'
      ]
    },
    {
      category: 'Connectivity',
      specs: [
        'Transmission Range: 15 km',
        '5G/LTE Support: Yes',
        'WiFi: 802.11ax (WiFi 6)',
        'Bluetooth: 5.2',
        'USB-C: Fast data transfer'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <PageHeader
        subtitle="Innovation & Technology"
        title="Cutting-Edge Drone Technology"
        description="Discover the advanced technologies that power our drones, from AI-driven flight control systems to professional-grade imaging capabilities."
      />

      {/* Core Technologies */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Core Technologies
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              The foundation of our drone technology, designed for reliability, performance, and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <Card
                key={index}
                title={tech.title}
                description={tech.description}
                icon={tech.icon}
                features={tech.features}
                buttonText="Learn More"
                buttonLink="/contact"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Future Innovations */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Future Innovations
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Pioneering the next generation of drone technology with groundbreaking research and development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {innovations.map((innovation, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white">{innovation.title}</h3>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full">
                    {innovation.status}
                  </span>
                </div>
                <p className="text-gray-300">{innovation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Technical Specifications
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Detailed specifications of our flagship drone technology platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specifications.map((spec, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-gray-600">
                  {spec.category}
                </h3>
                <ul className="space-y-2">
                  {spec.specs.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Benefits */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Technology Benefits
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Enhanced Safety',
                description: 'Advanced obstacle avoidance and fail-safe systems ensure safe operation in all conditions.',
                icon: '🛡️'
              },
              {
                title: 'Superior Performance',
                description: 'Optimized flight dynamics and power management deliver unmatched performance.',
                icon: '⚡'
              },
              {
                title: 'Professional Quality',
                description: 'Cinema-grade imaging and precision control for professional applications.',
                icon: '🎯'
              },
              {
                title: 'Intelligent Operation',
                description: 'AI-powered features that make complex operations simple and accessible.',
                icon: '🧠'
              },
              {
                title: 'Extended Range',
                description: 'Long-range transmission and extended battery life for comprehensive coverage.',
                icon: '📡'
              },
              {
                title: 'Future-Ready',
                description: 'Upgradeable software and modular hardware for evolving requirements.',
                icon: '🚀'
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
