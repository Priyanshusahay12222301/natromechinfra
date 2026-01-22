import { Briefcase, Wrench, MessageSquare, TrendingUp, Eye, Users } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { initialProjects, initialServices, initialTestimonials } from '../../data/initialData';
import { Project, Service, Testimonial } from '../../types';

export default function AdminDashboard() {
  const [projects] = useLocalStorage<Project[]>('projects', initialProjects);
  const [services] = useLocalStorage<Service[]>('services', initialServices);
  const [testimonials] = useLocalStorage<Testimonial[]>('testimonials', initialTestimonials);

  const stats = [
    { label: 'Total Projects', value: projects.length, icon: Briefcase, color: 'bg-blue-100 text-blue-600' },
    { label: 'Active Services', value: services.length, icon: Wrench, color: 'bg-green-100 text-green-600' },
    { label: 'Testimonials', value: testimonials.length, icon: MessageSquare, color: 'bg-purple-100 text-purple-600' },
    { label: 'Featured Projects', value: projects.filter(p => p.featured).length, icon: TrendingUp, color: 'bg-yellow-100 text-yellow-600' },
  ];

  const recentProjects = projects.slice(0, 5);

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-white">
          <h1 className="text-2xl mb-2">Welcome to NATROMECH Infrasolutions Admin</h1>
          <p className="text-blue-100">Manage your construction portfolio website content and SEO settings</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                    <p className="text-3xl text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl mb-4 text-gray-900">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="/admin/projects"
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-colors"
            >
              <Briefcase className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-gray-900 mb-1">Manage Projects</h3>
              <p className="text-sm text-gray-600">Add, edit, or delete portfolio projects</p>
            </a>
            <a
              href="/admin/services"
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-colors"
            >
              <Wrench className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-gray-900 mb-1">Update Services</h3>
              <p className="text-sm text-gray-600">Manage your service offerings</p>
            </a>
            <a
              href="/admin/seo"
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-colors"
            >
              <TrendingUp className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="text-gray-900 mb-1">SEO Settings</h3>
              <p className="text-sm text-gray-600">Optimize for search engines</p>
            </a>
          </div>
        </div>

        {/* Recent Projects */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl text-gray-900">Recent Projects</h2>
            <a href="/admin/projects" className="text-blue-600 hover:text-blue-700 text-sm">
              View All
            </a>
          </div>
          <div className="space-y-4">
            {recentProjects.map((project) => (
              <div key={project.id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-gray-900 mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-600">{project.category} • {project.location}</p>
                </div>
                <div className="flex items-center gap-2">
                  {project.featured && (
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">Featured</span>
                  )}
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">{project.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Website Analytics (Mock Data) */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl mb-4 text-gray-900">Website Traffic</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Page Views</span>
                  <span className="text-gray-900">12,543</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Unique Visitors</span>
                  <span className="text-gray-900">8,234</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Contact Form Submissions</span>
                  <span className="text-gray-900">127</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl mb-4 text-gray-900">Content Status</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-green-600" />
                  <span className="text-gray-900">SEO Optimized</span>
                </div>
                <span className="text-green-600">Active</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-900">Projects Published</span>
                </div>
                <span className="text-blue-600">{projects.length}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-900">Client Reviews</span>
                </div>
                <span className="text-purple-600">{testimonials.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
