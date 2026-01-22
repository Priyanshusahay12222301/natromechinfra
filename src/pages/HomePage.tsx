import { Link } from 'react-router';
import { ArrowRight, CheckCircle, Star, Award, Users, TrendingUp, Shield, Clock, Target } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { initialProjects, initialServices, initialTestimonials } from '../data/initialData';
import { Project, Service, Testimonial } from '../types';

export default function HomePage() {
  const [projects] = useLocalStorage<Project[]>('projects', initialProjects);
  const [services] = useLocalStorage<Service[]>('services', initialServices);
  const [testimonials] = useLocalStorage<Testimonial[]>('testimonials', initialTestimonials);

  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section - Full Width with Overlay */}
      <section className="relative min-h-screen flex items-center gradient-overlay">
        {/* SEO: Hero background image - construction crane at sunset */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url("/images/Gemini_Generated_Image_30qgtf30qgtf30qg (1).png")`
          }}
          role="img"
          aria-label="Industrial construction site with tower crane at sunset - NATROMECH Infrasolutions"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-block bg-amber-500 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Emerging Industrial Construction Startup in India
            </div>
            {/* SEO: H1 tag with primary keywords for Industrial Construction Services */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-8 max-w-4xl mx-auto font-bold" style={{ textShadow: '2px 2px 8px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.6)' }}>
              Industrial Construction Services by <span className="text-amber-500" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.7)' }}>NATROMECH Infrasolutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-900 mb-12 max-w-3xl mx-auto font-medium" style={{ textShadow: '1px 1px 6px rgba(255,255,255,0.8), 0 0 15px rgba(255,255,255,0.6)' }}>
              Expert industrial construction, steel structures, and epoxy painting services across India. Quality engineering solutions delivered on time, every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-amber-500 text-gray-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-amber-400 transition-all shadow-strong inline-flex items-center justify-center gap-2 group"
              >
                Get Free Quote
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/projects"
                className="bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transition-all border-2 border-white/50 inline-flex items-center justify-center gap-2"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gray-900 py-12 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Award, value: '100%', label: 'Quality Commitment', color: 'text-amber-500' },
              { icon: Users, value: '24/7', label: 'Support Available', color: 'text-blue-500' },
              { icon: Star, value: '5+', label: 'Core Services', color: 'text-amber-500' },
              { icon: TrendingUp, value: 'Fast', label: 'Project Delivery', color: 'text-blue-500' }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <Icon className={`w-10 h-10 mx-auto mb-3 ${stat.color} group-hover:scale-110 transition-transform`} />
                  <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section - Card Based */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-amber-500 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              OUR SERVICES
            </div>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
              Comprehensive Construction <span className="text-amber-500">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to completion, we deliver exceptional results across all construction sectors
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover-lift">
                <div className="relative h-64 overflow-hidden">
                  {/* SEO: Lazy loading service images with descriptive alt text */}
                  <img
                    src={service.imageUrl}
                    alt={`${service.title} - Industrial construction services by NATROMECH Infrasolutions`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center mb-2">
                      <div className="w-6 h-6 bg-gray-900 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  {/* SEO: H3 heading for service card */}
                  <h3 className="text-2xl text-gray-900 mb-3 group-hover:text-amber-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/services"
                    className="text-amber-500 font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects - Image Heavy Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-amber-500 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              PORTFOLIO
            </div>
            {/* SEO: H2 heading for Featured Projects */}
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
              Featured Industrial <span className="text-amber-500">Construction Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of completed steel structure and industrial construction projects across India
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="group relative rounded-2xl overflow-hidden shadow-strong hover-lift">
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* SEO: Lazy loading project images with descriptive alt text */}
                  <img
                    src={project.imageUrl}
                    alt={`${project.title} - Industrial construction project in ${project.location} by NATROMECH Infrasolutions`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-amber-500 text-gray-900 px-4 py-2 rounded-full text-sm font-bold">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    {/* SEO: H3 heading for project card */}
                    <h3 className="text-2xl text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.location}</p>
                    <p className="text-gray-400 line-clamp-2">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="bg-gray-900 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-all shadow-lg inline-flex items-center gap-2 group"
            >
              View All Projects
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Split Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-amber-500 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold mb-6">
                WHY CHOOSE US
              </div>
              {/* SEO: H2 heading for Why Choose Us section */}
              <h2 className="text-4xl md:text-5xl mb-8">
                Building Trust Through <span className="text-amber-500">Excellence</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                We combine cutting-edge technology with time-tested craftsmanship to deliver projects that exceed expectations.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Shield, title: 'Quality Guaranteed', desc: 'Premium materials & expert builders' },
                  { icon: Clock, title: 'On-Time Delivery', desc: 'Projects completed on schedule' },
                  { icon: Target, title: 'Safety First', desc: 'Strict safety protocols' },
                  { icon: Award, title: 'Licensed & Insured', desc: 'Fully certified professionals' }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-gray-900" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* SEO: Lazy loading team images with descriptive alt text */}
                <img
                  src="https://images.unsplash.com/photo-1758798349125-5c297b18b8b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB0ZWFtJTIwd29ya2Vyc3xlbnwxfHx8fDE3Njg5OTEyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Professional construction team working on industrial site in India"
                  loading="lazy"
                  className="rounded-2xl shadow-strong h-64 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1694522362256-6c907336af43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzYWZldHklMjBoZWxtZXR8ZW58MXx8fHwxNzY5MDA2NTY1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Construction safety equipment and helmets for industrial projects"
                  loading="lazy"
                  className="rounded-2xl shadow-strong h-64 object-cover mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-amber-500 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              TESTIMONIALS
            </div>
            {/* SEO: H2 heading for Testimonials section */}
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
              What Our <span className="text-amber-500">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-lg hover-lift">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-8 text-lg italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                  <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                    {/* SEO: Lazy loading testimonial images */}
                    <img
                      src={testimonial.imageUrl}
                      alt={`${testimonial.name}, ${testimonial.role} at ${testimonial.company}`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Bold */}
      <section className="relative py-32 gradient-overlay">
        {/* SEO: CTA background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1741021632650-162065ae2b0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza3lzY3JhcGVyJTIwY29uc3RydWN0aW9uJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY5MDA2NTYzfDA&ixlib=rb-4.1.0&q=80&w=1080)`
          }}
          role="img"
          aria-label="Modern skyscraper under construction"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* SEO: H2 heading for CTA section */}
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Ready to Start Your <span className="text-amber-500">Project?</span>
          </h2>
          <p className="text-xl text-gray-200 mb-12">
            Get in touch with our expert team for a free consultation and detailed quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-amber-500 text-gray-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-amber-400 transition-all shadow-strong inline-flex items-center justify-center gap-2 group"
            >
              Get Free Consultation
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}