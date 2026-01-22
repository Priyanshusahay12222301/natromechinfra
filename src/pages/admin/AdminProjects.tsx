import { useState } from 'react';
import { Plus, Pencil, Trash2, Star } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { initialProjects } from '../../data/initialData';
import { Project } from '../../types';
import { useToast } from '../../components/Toast';

export default function AdminProjects() {
  const [projects, setProjects] = useLocalStorage<Project[]>('projects', initialProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const { showToast } = useToast();
  const [formData, setFormData] = useState<Partial<Project>>({
    title: '',
    description: '',
    category: 'Commercial',
    location: '',
    completionDate: '',
    imageUrl: '',
    images: [],
    featured: false,
    seoTitle: '',
    seoDescription: '',
    seoKeywords: ''
  });

  const handleOpenModal = (project?: Project) => {
    if (project) {
      setEditingProject(project);
      setFormData(project);
    } else {
      setEditingProject(null);
      setFormData({
        title: '',
        description: '',
        category: 'Commercial',
        location: '',
        completionDate: '',
        imageUrl: '',
        images: [],
        featured: false,
        seoTitle: '',
        seoDescription: '',
        seoKeywords: ''
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingProject(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingProject) {
      // Update existing project
      setProjects(projects.map(p => p.id === editingProject.id ? { ...formData, id: editingProject.id } as Project : p));
      showToast('Project updated successfully', 'success');
    } else {
      // Add new project
      const newProject: Project = {
        ...formData,
        id: Date.now().toString(),
        images: formData.imageUrl ? [formData.imageUrl] : []
      } as Project;
      setProjects([newProject, ...projects]);
      showToast('Project added successfully', 'success');
    }
    
    handleCloseModal();
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(p => p.id !== id));
      showToast('Project deleted successfully', 'success');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl text-gray-900">Projects</h1>
            <p className="text-gray-600">Manage your portfolio projects</p>
          </div>
          <button
            onClick={() => handleOpenModal()}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add Project
          </button>
        </div>

        {/* Projects List */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs text-gray-700 uppercase tracking-wider">Project</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-700 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-700 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-700 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-700 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {projects.map((project) => (
                  <tr key={project.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div>
                          <div className="text-gray-900">{project.title}</div>
                          <div className="text-sm text-gray-500">{new Date(project.completionDate).toLocaleDateString()}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">{project.category}</td>
                    <td className="px-6 py-4 text-gray-700">{project.location}</td>
                    <td className="px-6 py-4">
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">
                          <Star className="w-3 h-3 fill-yellow-800" />
                          Featured
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleOpenModal(project)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(project.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-lg max-w-2xl w-full my-8">
            <div className="p-6 border-b">
              <h2 className="text-xl text-gray-900">{editingProject ? 'Edit Project' : 'Add New Project'}</h2>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-sm mb-2 text-gray-700">Project Title *</label>
                  <input
                    type="text"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-gray-700">Category *</label>
                  <select
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  >
                    <option value="Commercial">Commercial</option>
                    <option value="Residential">Residential</option>
                    <option value="Industrial">Industrial</option>
                    <option value="Renovation">Renovation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-2 text-gray-700">Location *</label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm mb-2 text-gray-700">Completion Date *</label>
                  <input
                    type="month"
                    name="completionDate"
                    required
                    value={formData.completionDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm mb-2 text-gray-700">Description *</label>
                  <textarea
                    name="description"
                    required
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm mb-2 text-gray-700">Image URL *</label>
                  <input
                    type="url"
                    name="imageUrl"
                    required
                    value={formData.imageUrl}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  />
                </div>
                <div className="col-span-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="featured"
                      checked={formData.featured}
                      onChange={handleChange}
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                    <span className="text-sm text-gray-700">Featured Project</span>
                  </label>
                </div>
                <div className="col-span-2">
                  <h3 className="mb-3 text-gray-900">SEO Settings</h3>
                </div>
                <div className="col-span-2">
                  <label className="block text-sm mb-2 text-gray-700">SEO Title</label>
                  <input
                    type="text"
                    name="seoTitle"
                    value={formData.seoTitle}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm mb-2 text-gray-700">SEO Description</label>
                  <textarea
                    name="seoDescription"
                    rows={2}
                    value={formData.seoDescription}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm mb-2 text-gray-700">SEO Keywords</label>
                  <input
                    type="text"
                    name="seoKeywords"
                    value={formData.seoKeywords}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    placeholder="keyword1, keyword2, keyword3"
                  />
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {editingProject ? 'Update Project' : 'Add Project'}
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}