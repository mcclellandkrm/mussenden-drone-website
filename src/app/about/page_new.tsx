import { Header, Footer, PageHeader } from '@/components';

export default function AboutPage() {
  const values = [
    {
      title: 'Safety First',
      description: 'Every flight is conducted with the highest safety standards and full insurance coverage.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L21 5V11C21 16.55 17.16 21.74 12 23C6.84 21.74 3 16.55 3 11V5L12 1M12 3.18L5 6.3V11.22C5 15.54 8.24 19.43 12 20.81C15.76 19.43 19 15.54 19 11.22V6.3L12 3.18Z" />
        </svg>
      )
    },
    {
      title: 'Professional Expertise',
      description: 'Certified drone pilots with years of experience in aerial inspections and photography.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" />
        </svg>
      )
    },
    {
      title: 'Customer Focus',
      description: 'We prioritize your needs and deliver personalized solutions for every project.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
        </svg>
      )
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Mussenden Aerial was established to provide professional drone services in Northern Ireland.'
    },
    {
      year: '2021',
      title: 'First Inspections',
      description: 'Completed our first property inspections, helping homeowners identify costly issues early.'
    },
    {
      year: '2022',
      title: 'Service Expansion',
      description: 'Added aerial photography and construction monitoring to our service offerings.'
    },
    {
      year: '2023',
      title: 'Growing Success',
      description: 'Hundreds of satisfied customers across Northern Ireland trust our services.'
    },
    {
      year: '2024',
      title: 'Continued Innovation',
      description: 'Continuously improving our services with the latest drone technology and techniques.'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <PageHeader
        subtitle="About Us"
        title="Your Trusted Aerial Service Provider"
        description="Professional drone services with a focus on safety, quality, and customer satisfaction. Based in Northern Ireland, serving homeowners and businesses."
      />

      {/* About Content */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Professional Drone Services You Can Trust
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                At Mussenden Aerial, we combine cutting-edge drone technology with professional expertise to deliver 
                exceptional results for our clients. Whether you need a property inspection, aerial photography, 
                or construction monitoring, we provide safe, efficient, and cost-effective solutions.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                Our team of certified pilots has years of experience in the industry, and we&apos;re fully insured 
                for your peace of mind. We understand that every project is unique, which is why we work closely 
                with our clients to deliver personalized solutions that meet their specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/contact" 
                  className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-center"
                >
                  Get In Touch
                </a>
                <a 
                  href="/services" 
                  className="px-6 py-3 border border-gray-300 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors text-center"
                >
                  View Services
                </a>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-300">Fully certified and insured operations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-300">Years of professional experience</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-300">Latest drone technology and equipment</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-300">Competitive pricing and fast turnaround</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-300">Local business serving Northern Ireland</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Our Values</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              These core principles guide everything we do and ensure we deliver the best possible service to our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-900 rounded-lg">
                <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-6 flex items-center justify-center text-white">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Our Journey</h2>
            <p className="text-gray-300 text-lg">
              From humble beginnings to becoming a trusted name in aerial services.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-500"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold z-10">
                    {milestone.year}
                  </div>
                  <div className="ml-8">
                    <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Experience the difference professional drone services can make for your project.
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
