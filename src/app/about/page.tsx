import { Header, Footer, PageHeader } from '@/components';

export default function AboutPage() {
  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CEO & Founder',
      bio: 'Former aerospace engineer with 15 years of experience in autonomous flight systems.',
      image: '/team/sarah-chen.jpg'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO',
      bio: 'Expert in AI and computer vision with a PhD from MIT and multiple patents in drone technology.',
      image: '/team/marcus-rodriguez.jpg'
    },
    {
      name: 'Elena Kowalski',
      role: 'Head of Engineering',
      bio: 'Hardware design specialist with experience at leading aerospace and robotics companies.',
      image: '/team/elena-kowalski.jpg'
    },
    {
      name: 'James Wilson',
      role: 'Head of Operations',
      bio: 'Commercial pilot and operations expert ensuring safety and compliance in all our services.',
      image: '/team/james-wilson.jpg'
    }
  ];

  const milestones = [
    {
      year: '2018',
      title: 'Company Founded',
      description: 'Mussenden Drone & Aerial was established with a vision to revolutionize aerial technology.'
    },
    {
      year: '2019',
      title: 'First Product Launch',
      description: 'Released our inaugural consumer drone with advanced AI capabilities.'
    },
    {
      year: '2020',
      title: 'Professional Series',
      description: 'Launched professional-grade drones for commercial and industrial applications.'
    },
    {
      year: '2021',
      title: 'Global Expansion',
      description: 'Expanded operations to serve customers across North America and Europe.'
    },
    {
      year: '2022',
      title: 'AI Breakthrough',
      description: 'Developed proprietary neural network processing for autonomous flight.'
    },
    {
      year: '2023',
      title: 'Industry Recognition',
      description: 'Received multiple awards for innovation in drone technology and safety.'
    },
    {
      year: '2024',
      title: 'Service Excellence',
      description: 'Launched comprehensive service division with 24/7 global support.'
    },
    {
      year: '2025',
      title: 'Next Generation',
      description: 'Introducing quantum sensors and hybrid propulsion technology.'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible in aerial technology.',
      icon: '💡'
    },
    {
      title: 'Safety',
      description: 'Safety is our top priority in every design decision and operation.',
      icon: '🛡️'
    },
    {
      title: 'Quality',
      description: 'We deliver exceptional quality in every product and service.',
      icon: '⭐'
    },
    {
      title: 'Sustainability',
      description: 'Committed to environmentally responsible technology and practices.',
      icon: '🌱'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <PageHeader
        subtitle="About Mussenden Drone & Aerial"
        title="Pioneering the Future of Flight"
        description="We are passionate innovators dedicated to advancing drone technology and making aerial capabilities accessible to professionals and enthusiasts worldwide."
      />

      {/* Company Story */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Our Story
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Founded in 2018 by a team of aerospace engineers and AI specialists, Mussenden Drone & Aerial emerged from a simple yet ambitious vision: to democratize access to professional-grade aerial technology.
              </p>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                What started as a small research project in a garage has evolved into a leading force in the drone industry, serving customers across multiple sectors with innovative solutions that combine cutting-edge technology with practical reliability.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Today, we continue to push the boundaries of what&apos;s possible in aerial technology, developing next-generation drones that are smarter, safer, and more capable than ever before.
              </p>
            </div>
            <div className="bg-gray-800 h-96 rounded-xl flex items-center justify-center">
              <span className="text-gray-400 text-lg">Company Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To empower individuals and organizations with advanced aerial technology that enhances productivity, safety, and creativity. We believe that drone technology should be accessible, reliable, and transformative for every user.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be the global leader in intelligent drone systems, setting new standards for performance, safety, and innovation while contributing to a more connected and efficient world through aerial technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              The brilliant minds behind Mussenden Drone & Aerial&apos;s innovative technology and exceptional service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Photo</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-blue-400 mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Journey
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Key milestones in our mission to advance drone technology.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                      <span className="text-blue-400 font-semibold">{milestone.year}</span>
                      <h3 className="text-xl font-bold text-white mt-2 mb-2">{milestone.title}</h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border-4 border-gray-900"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            Whether you&apos;re looking for cutting-edge drone technology or want to be part of our innovative team, 
            we&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </a>
            <a
              href="/careers"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              View Careers
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
