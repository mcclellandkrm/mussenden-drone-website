import { Header, Footer, PageHeader, Card } from '@/components';

export default function ServicesPage() {
  const services = [
    {
      title: 'Aerial Photography & Videography',
      description: 'Professional aerial content creation for real estate, events, marketing, and entertainment industries.',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
        </svg>
      ),
      features: [
        '4K/8K Video Production',
        'Professional Photo Editing',
        'Real Estate Photography',
        'Event Coverage',
        'Marketing Content Creation'
      ],
      price: 'From $299',
      buttonText: 'Book Service',
      buttonLink: '/contact'
    },
    {
      title: 'Mapping & Surveying',
      description: 'Precision mapping and surveying services for construction, agriculture, and land development projects.',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" />
        </svg>
      ),
      features: [
        'Topographic Mapping',
        '3D Model Generation',
        'Land Survey Reports',
        'Progress Monitoring',
        'GIS Data Integration'
      ],
      price: 'From $599',
      buttonText: 'Get Quote',
      buttonLink: '/contact'
    },
    {
      title: 'Industrial Inspections',
      description: 'Safe and efficient inspection services for infrastructure, energy, and industrial facilities.',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L13.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
        </svg>
      ),
      features: [
        'Thermal Imaging Analysis',
        'Infrastructure Assessment',
        'Power Line Inspection',
        'Wind Turbine Maintenance',
        'Detailed Inspection Reports'
      ],
      price: 'From $899',
      buttonText: 'Schedule Inspection',
      buttonLink: '/contact'
    },
    {
      title: 'Search & Rescue',
      description: 'Emergency response and search operations using advanced thermal and optical imaging technology.',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
        </svg>
      ),
      features: [
        '24/7 Emergency Response',
        'Thermal Imaging Search',
        'Wide Area Coverage',
        'Real-time Coordination',
        'Professional SAR Team'
      ],
      price: 'Contact Us',
      buttonText: 'Emergency Contact',
      buttonLink: '/contact'
    },
    {
      title: 'Training & Certification',
      description: 'Comprehensive drone pilot training programs for recreational and commercial operators.',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
        </svg>
      ),
      features: [
        'Part 107 Certification Prep',
        'Hands-on Flight Training',
        'Safety Protocols',
        'Equipment Familiarization',
        'Ongoing Support'
      ],
      price: 'From $399',
      buttonText: 'Enroll Now',
      buttonLink: '/contact'
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored drone solutions for unique business requirements and specialized applications.',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
        </svg>
      ),
      features: [
        'Custom Hardware Development',
        'Software Integration',
        'Specialized Sensors',
        'Industry-specific Solutions',
        'Ongoing Technical Support'
      ],
      price: 'Custom Quote',
      buttonText: 'Discuss Project',
      buttonLink: '/contact'
    }
  ];

  const industries = [
    {
      name: 'Real Estate',
      description: 'Stunning aerial photography for property listings and development marketing.',
      icon: '🏠'
    },
    {
      name: 'Construction',
      description: 'Progress monitoring, site surveys, and safety inspections for construction projects.',
      icon: '🏗️'
    },
    {
      name: 'Agriculture',
      description: 'Crop monitoring, field mapping, and precision agriculture solutions.',
      icon: '🌾'
    },
    {
      name: 'Energy',
      description: 'Infrastructure inspection for solar farms, wind turbines, and power lines.',
      icon: '⚡'
    },
    {
      name: 'Film & Media',
      description: 'Cinematic aerial footage for movies, commercials, and documentaries.',
      icon: '🎬'
    },
    {
      name: 'Emergency Services',
      description: 'Search and rescue operations, disaster response, and public safety support.',
      icon: '🚁'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <PageHeader
        subtitle="Professional Services"
        title="Comprehensive Drone Solutions"
        description="From aerial photography to industrial inspections, our expert team delivers professional drone services tailored to your specific needs."
      />

      {/* Services Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Professional drone services designed to meet the unique challenges of modern industries.
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

      {/* Industries We Serve */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Our expertise spans across multiple industries, delivering specialized solutions for each sector.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-gray-300">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              From initial consultation to final delivery, we ensure a seamless experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We discuss your project requirements and objectives in detail.'
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Our team creates a detailed flight plan and project timeline.'
              },
              {
                step: '03',
                title: 'Execution',
                description: 'Professional pilots execute the mission with precision and safety.'
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'Processed data and reports delivered in your preferred format.'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
