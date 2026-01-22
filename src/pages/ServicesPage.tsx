import { Building2, Home, Factory, Pencil, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { initialServices } from '../data/initialData';
import { Service } from '../types';

const iconMap: Record<string, any> = {
  Building2,
  Home,
  Factory,
  Pencil
};

export default function ServicesPage() {
  const [services] = useLocalStorage<Service[]>('services', initialServices);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 gradient-overlay">
        {/* SEO: Hero background image with descriptive aria-label */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1765378025255-5c2ff04563f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBibHVlcHJpbnQlMjBwbGFubmluZ3xlbnwxfHx8fDE3Njg5MzM1MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080)`
          }}
          role="img"
          aria-label="Construction blueprint and planning documents"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-amber-500 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold mb-6">
            WHAT WE DO
          </div>
          {/* SEO: H1 with primary service keywords */}
          <h1 className="text-5xl md:text-6xl text-white mb-8">
            Industrial Construction <span className="text-amber-500">Services India</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Steel structure fabrication, epoxy painting, and civil engineering solutions across India. Expert industrial construction from planning to completion.
          </p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Building2;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="bg-amber-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-gray-900" />
                    </div>
                    <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
                      {service.title}
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <div className="bg-amber-500 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <CheckCircle className="w-4 h-4 text-gray-900" />
                          </div>
                          <span className="text-lg text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-800 transition-all shadow-lg group"
                    >
                      Request Quote
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  
                  <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-strong group">
                      {/* SEO: Lazy loading service images with descriptive alt text */}
                      <img
                        src={service.imageUrl}
                        alt={`${service.title} - Industrial construction services in India by NATROMECH Infrasolutions`}
                        loading="lazy"
                        className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-amber-500 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              OUR PROCESS
            </div>
            <h2 className="text-4xl md:text-5xl mb-6">
              How We <span className="text-amber-500">Work</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach to delivering quality construction projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                step: '01', 
                title: 'Consultation', 
                description: 'Initial meeting to understand your vision, requirements, and budget constraints'
              },
              { 
                step: '02', 
                title: 'Planning & Design', 
                description: 'Detailed architectural design and project planning with accurate cost estimates'
              },
              { 
                step: '03', 
                title: 'Construction', 
                description: 'Professional execution with regular progress updates and quality checks'
              },
              { 
                step: '04', 
                title: 'Completion', 
                description: 'Final inspection, handover, and ongoing support for your satisfaction'
              }
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-gray-800 rounded-2xl p-8 h-full hover-lift">
                  <div className="text-6xl font-bold text-amber-500 mb-6 opacity-50">
                    {item.step}
                  </div>
                  <h3 className="text-2xl mb-4">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-800 mb-10">
            Contact us to discuss your unique construction requirements and get a tailored proposal
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-all shadow-strong group"
          >
            Start Your Project
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}