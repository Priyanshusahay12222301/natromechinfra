import { useState } from 'react';
import { Plus, Pencil, Trash2, Star } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { initialTestimonials } from '../../data/initialData';
import { Testimonial } from '../../types';
import { useToast } from '../../components/Toast';

export default function AdminTestimonials() {
  const [testimonials, setTestimonials] = useLocalStorage<Testimonial[]>('testimonials', initialTestimonials);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const { showToast } = useToast();
  const [formData, setFormData] = useState<Partial<Testimonial>>({
    name: '',
    company: '',
    role: '',
    content: '',
    rating: 5,
    imageUrl: '',
    projectName: ''
  });

  const handleOpenModal = (testimonial?: Testimonial) => {
    if (testimonial) {
      setEditingTestimonial(testimonial);
      setFormData(testimonial);
    } else {
      setEditingTestimonial(null);
      setFormData({
        name: '',
        company: '',
        role: '',
        content: '',
        rating: 5,
        imageUrl: '',
        projectName: ''
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingTestimonial(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingTestimonial) {
      setTestimonials(testimonials.map(t => t.id === editingTestimonial.id ? { ...formData, id: editingTestimonial.id } as Testimonial : t));
      showToast('Testimonial updated successfully', 'success');
    } else {
      const newTestimonial: Testimonial = {
        ...formData,
        id: Date.now().toString()
      } as Testimonial;
      setTestimonials([...testimonials, newTestimonial]);
      showToast('Testimonial added successfully', 'success');
    }
    
    handleCloseModal();
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      setTestimonials(testimonials.filter(t => t.id !== id));
      showToast('Testimonial deleted successfully', 'success');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'number' ? parseInt(value) : value
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl text-gray-900">Testimonials</h1>
            <p className="text-gray-600">Manage client reviews and testimonials</p>
          </div>
          <button
            onClick={() => handleOpenModal()}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add Testimonial
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                  <img
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-gray-600">{testimonial.company}</div>
                </div>
              </div>
              {testimonial.projectName && (
                <p className="text-sm text-gray-600 mb-4">Project: {testimonial.projectName}</p>
              )}
              <div className="flex gap-2">
                <button
                  onClick={() => handleOpenModal(testimonial)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <Pencil className="w-4 h-4" />
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(testimonial.id)}
                  className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-lg max-w-2xl w-full my-8">
            <div className="p-6 border-b">
              <h2 className="text-xl text-gray-900">{editingTestimonial ? 'Edit Testimonial' : 'Add New Testimonial'}</h2>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2 text-gray-700">Client Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-gray-700">Company *</label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-gray-700">Role/Title *</label>
                  <input
                    type="text"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-gray-700">Rating *</label>
                  <select
                    name="rating"
                    required
                    value={formData.rating}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  >
                    <option value={5}>5 Stars</option>
                    <option value={4}>4 Stars</option>
                    <option value={3}>3 Stars</option>
                    <option value={2}>2 Stars</option>
                    <option value={1}>1 Star</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="block text-sm mb-2 text-gray-700">Testimonial Content *</label>
                  <textarea
                    name="content"
                    required
                    rows={4}
                    value={formData.content}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm mb-2 text-gray-700">Client Photo URL *</label>
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
                  <label className="block text-sm mb-2 text-gray-700">Related Project (Optional)</label>
                  <input
                    type="text"
                    name="projectName"
                    value={formData.projectName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  />
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {editingTestimonial ? 'Update Testimonial' : 'Add Testimonial'}
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