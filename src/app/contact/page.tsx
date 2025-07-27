import { Header, Footer, PageHeader } from '@/components';

export default function ContactPage() {
  const contactInfo = [
    {
      title: 'General Inquiries',
      email: 'info@mussenden.co.uk',
      phone: '+44 7960 044 486',
      description: 'For general questions about our drone services and inspections.'
    },
    {
      title: 'Service Booking',
      email: 'info@mussenden.co.uk',
      phone: '+44 7960 044 486',
      description: 'Ready to book an inspection or aerial photography service?'
    },
    {
      title: 'Emergency Services',
      email: 'info@mussenden.co.uk',
      phone: '+44 7960 044 486',
      description: 'Urgent property inspection needs and emergency services.'
    }
  ];

  const offices = [
    {
      location: 'Belfast, Northern Ireland',
      address: 'Mount Vernon House, Second Floor, Belfast, BT15 4BA',
      phone: '+44 7960 044 486',
      type: 'Headquarters'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <PageHeader
        subtitle="Get in Touch"
        title="Contact Us"
        description="Ready to get started with professional drone services? We're here to help with all your aerial inspection and photography needs."
      />

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
              <p className="text-gray-300 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales Question</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="media">Media Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
              <p className="text-gray-300 mb-8">
                Choose the best way to reach us based on your needs.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                    <h3 className="text-lg font-semibold text-white mb-2">{contact.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{contact.description}</p>
                    <div className="space-y-2">
                      <a href={`mailto:${contact.email}`} className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        {contact.email}
                      </a>
                      <a href={`tel:${contact.phone}`} className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Location
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Based in Belfast, serving all of Northern Ireland and beyond.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center max-w-md w-full">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded-full mb-3">
                {offices[0].type}
              </span>
              <h3 className="text-xl font-semibold text-white mb-2">{offices[0].location}</h3>
              <p className="text-gray-300 text-sm mb-3">{offices[0].address}</p>
              <a href={`tel:${offices[0].phone.replace(/\s/g, '')}`} className="text-blue-400 hover:text-blue-300 transition-colors">
                {offices[0].phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-300 text-lg">
              Quick answers to common questions about our products and services.
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: 'What is the warranty on Mussen drones?',
                answer: 'All Mussen drones come with a comprehensive 2-year warranty covering manufacturing defects and hardware failures. Extended warranty options are also available.'
              },
              {
                question: 'Do you offer pilot training programs?',
                answer: 'Yes, we offer comprehensive training programs for all skill levels, including Part 107 certification preparation and specialized commercial operation training.'
              },
              {
                question: 'Can I customize a drone for my specific needs?',
                answer: 'Absolutely! We offer custom drone solutions for specialized applications. Contact our engineering team to discuss your specific requirements.'
              },
              {
                question: 'What kind of support do you provide?',
                answer: 'We provide 24/7 technical support, regular software updates, comprehensive documentation, and access to our global service network.'
              },
              {
                question: 'Do you offer international shipping?',
                answer: 'Yes, we ship worldwide. Shipping costs and delivery times vary by location. Please contact our sales team for specific international shipping information.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
