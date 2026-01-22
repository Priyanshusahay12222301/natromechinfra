import { Award, Target, Users, TrendingUp, CheckCircle, Shield, Clock, Heart, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 gradient-overlay">
        {/* SEO: Hero background image with descriptive aria-label */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1758798349125-5c297b18b8b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB0ZWFtJTIwd29ya2Vyc3xlbnwxfHx8fDE3Njg5OTEyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080)`
          }}
          role="img"
          aria-label="Professional construction team workers on industrial site"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-amber-500 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold mb-6">
            ABOUT US
          </div>
          {/* SEO: H1 with company branding */}
          <h1 className="text-5xl md:text-6xl text-white mb-8">
            About <span className="text-amber-500">NATROMECH Infrasolutions</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            An innovative industrial construction startup in India - Building the future with cutting-edge solutions
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-amber-500 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold mb-6">
                OUR STORY
              </div>
              <h2 className="text-4xl md:text-5xl text-gray-900 mb-8">
                From Vision to <span className="text-amber-500">Reality</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  NATROMECH Infrasolutions is an emerging industrial construction startup in India, bringing fresh innovation to steel structures, epoxy painting, and infrastructure solutions. We're revolutionizing the construction industry with modern approaches and cutting-edge technology.
                </p>
                <p>
                  As a young and dynamic company, we combine technical expertise with agile execution to deliver exceptional results. Our team of skilled engineers and construction professionals is passionate about transforming industrial construction through innovation and quality craftsmanship.
                </p>
                <p>
                  We're building our reputation project by project, focusing on excellence, client satisfaction, and sustainable growth. Join us on our journey as we establish new standards in India's industrial construction sector.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {/* SEO: Lazy loading images with descriptive alt text */}
                <img
                  src="https://images.unsplash.com/photo-1758798349125-5c297b18b8b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB0ZWFtJTIwd29ya2Vyc3xlbnwxfHx8fDE3Njg5OTEyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="NATROMECH construction team working on industrial project in India"
                  loading="lazy"
                  className="rounded-2xl shadow-strong h-72 w-full object-cover hover-lift"
                />
                <img
                  src="https://images.unsplash.com/photo-1694522362256-6c907336af43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzYWZldHklMjBoZWxtZXR8ZW58MXx8fHwxNzY5MDA2NTY1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Industrial construction safety equipment and worker helmets"
                  loading="lazy"
                  className="rounded-2xl shadow-strong h-72 w-full object-cover hover-lift mt-12"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-amber-500 text-gray-900 p-8 rounded-2xl shadow-strong max-w-xs">
                <div className="text-5xl font-bold mb-2">15+</div>
                <div className="text-lg font-semibold">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-amber-500 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              OUR VALUES
            </div>
            <h2 className="text-4xl md:text-5xl mb-6">
              What <span className="text-amber-500">Drives Us</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'Excellence', desc: 'Striving for the highest quality in every project, no matter the size or scope.' },
              { icon: Shield, title: 'Integrity', desc: 'Honest communication and transparent practices in all our business dealings.' },
              { icon: TrendingUp, title: 'Innovation', desc: 'Embracing new technologies and methods to deliver better results.' },
              { icon: Heart, title: 'Commitment', desc: 'Dedicated to client satisfaction and long-term relationships.' }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-gray-800 rounded-2xl p-8 hover-lift">
                  <div className="bg-amber-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-gray-900" />
                  </div>
                  <h3 className="text-2xl mb-4">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-white hover-lift">
              <div className="bg-amber-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-gray-900" />
              </div>
              <h2 className="text-3xl md:text-4xl mb-6">Our Mission</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                To deliver exceptional construction services that transform visions into reality, while maintaining the highest standards of safety, quality, and professionalism. We are committed to building lasting relationships with our clients based on trust and outstanding results.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl p-12 text-gray-900 hover-lift">
              <div className="bg-gray-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-amber-500" />
              </div>
              <h2 className="text-3xl md:text-4xl mb-6">Our Vision</h2>
              <p className="text-xl text-gray-800 leading-relaxed">
                To be the most trusted and preferred construction partner in the region, recognized for our innovation, sustainability practices, and unwavering commitment to excellence. We envision a future where every project we undertake sets new standards in the construction industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-amber-500 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              OUR CAPABILITIES
            </div>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
              What We <span className="text-amber-500">Bring</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '100%', label: 'Quality Focus' },
              { value: '24/7', label: 'Support Available' },
              { value: '5+', label: 'Core Services' },
              { value: 'ISO', label: 'Standard Compliant' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift">
                  <div className="text-5xl md:text-6xl font-bold text-amber-500 mb-3">
                    {stat.value}
                  </div>
                  <div className="text-gray-700 font-semibold">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-amber-500 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              CREDENTIALS
            </div>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
              Official <span className="text-amber-500">Certifications</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Government verified and recognized startup in India
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Startup India Certified', desc: 'Official recognition from Government of India under Startup India initiative' },
              { title: 'MSME Registered', desc: 'Registered with Ministry of Micro, Small & Medium Enterprises' },
              { title: 'Government Verified', desc: 'Verified and recognized by Government of India for construction services' }
            ].map((cert, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover-lift">
                <div className="bg-amber-500 w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Award className="w-10 h-10 text-gray-900" />
                </div>
                <h3 className="text-2xl text-gray-900 mb-4">{cert.title}</h3>
                <p className="text-gray-600 leading-relaxed">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
            Join Our Success Story
          </h2>
          <p className="text-xl text-gray-800 mb-10">
            Partner with us for your next construction project and experience the NATROMECH Infrasolutions difference
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-all shadow-strong"
          >
            Get in Touch
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}