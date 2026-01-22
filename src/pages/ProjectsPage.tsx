import { Link } from 'react-router';
import { useState } from 'react';
import { MapPin, Calendar, ArrowRight, Building2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { initialProjects } from '../data/initialData';
import { Project } from '../types';

export default function ProjectsPage() {
  const [projects] = useLocalStorage<Project[]>('projects', initialProjects);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 gradient-overlay">
        {/* SEO: Hero background image with descriptive aria-label */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1694702702714-a48c5fabdaf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc2ODkxNzIxNnww&ixlib=rb-4.1.0&q=80&w=1080)`
          }}
          role="img"
          aria-label="Modern commercial office building exterior"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-amber-500 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold mb-6">
            OUR WORK
          </div>
          {/* SEO: H1 with project keywords */}
          <h1 className="text-5xl md:text-6xl text-white mb-8">
            Industrial Construction <span className="text-amber-500">Projects India</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Explore our portfolio of completed steel structure, epoxy painting, and civil construction projects across India.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-20 z-40 bg-white border-y border-gray-200 py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-amber-500 text-gray-900 shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <div className="bg-gray-200 w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Building2 className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl text-gray-900 mb-2">No Projects Found</h3>
              <p className="text-gray-600">No projects match the selected category.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover-lift">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {/* SEO: Lazy loading project images with descriptive alt text */}
                    <img
                      src={project.imageUrl}
                      alt={`${project.title} - ${project.category} construction project in ${project.location}, India`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent"></div>
                    
                    {/* Badges */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      <span className="bg-amber-500 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl text-white mb-2 group-hover:text-amber-500 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 line-clamp-3">{project.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-gray-700">
                        <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <Calendar className="w-5 h-5 text-amber-500 flex-shrink-0" />
                        <span>Completed: {new Date(project.completionDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all flex items-center justify-center gap-2 group"
                    >
                      View Details
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                className="w-full h-80 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white text-gray-900 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-all"
              >
                ✕
              </button>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-amber-500 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                  {selectedProject.category}
                </span>
                {selectedProject.featured && (
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                )}
              </div>
              <h2 className="text-4xl text-gray-900 mb-4">{selectedProject.title}</h2>
              <p className="text-lg text-gray-600 mb-6">{selectedProject.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin className="w-6 h-6 text-amber-500 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-semibold">{selectedProject.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Calendar className="w-6 h-6 text-amber-500 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">Completed</p>
                    <p className="font-semibold">{new Date(selectedProject.completionDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className="bg-amber-500 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 transition-all inline-flex items-center gap-2"
              >
                Start Similar Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">
              Our <span className="text-amber-500">Promise</span>
            </h2>
            <p className="text-xl text-gray-300">
              Commitment to quality and innovation in every project
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '15+', label: 'Projects Delivered', suffix: '' },
              { value: '100', label: 'Quality Guarantee', suffix: '%' },
              { value: '2025', label: 'Founded', suffix: '' },
              { value: '24/7', label: 'Support Available', suffix: '' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-5xl md:text-6xl font-bold text-amber-500 mb-3 group-hover:scale-110 transition-transform">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
            Start Your Project Today
          </h2>
          <p className="text-xl text-gray-800 mb-10">
            Let us bring your construction vision to life with our expertise and dedication
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-all shadow-strong group"
          >
            Request a Quote
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}