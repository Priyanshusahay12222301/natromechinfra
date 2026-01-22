import { useState } from 'react';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { initialServices } from '../../data/initialData';
import { Service } from '../../types';
import { useToast } from '../../components/Toast';

export default function AdminServices() {
  const [services, setServices] = useLocalStorage<Service[]>('services', initialServices);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const { showToast } = useToast();
  const [formData, setFormData] = useState<Partial<Service>>({
    title: '',
    description: '',
    icon: 'Building2',
    features: [''],
    imageUrl: '',
    seoTitle: '',
    seoDescription: ''
  });

  const iconOptions = ['Building2', 'Home', 'Factory', 'Pencil', 'Wrench', 'HardHat'];

  const handleOpenModal = (service?: Service) => {
    if (service) {
      setEditingService(service);
      setFormData(service);
    } else {
      setEditingService(null);
      setFormData({
        title: '',
        description: '',
        icon: 'Building2',
        features: [''],
        imageUrl: '',
        seoTitle: '',
        seoDescription: ''
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingService(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const filteredFeatures = formData.features?.filter(f => f.trim() !== '') || [];
    
    if (editingService) {
      setServices(services.map(s => s.id === editingService.id ? { ...formData, id: editingService.id, features: filteredFeatures } as Service : s));
      showToast('Service updated successfully', 'success');
    } else {
      const newService: Service = {
        ...formData,
        id: Date.now().toString(),
        features: filteredFeatures
      } as Service;
      setServices([...services, newService]);
      showToast('Service added successfully', 'success');
    }
    
    handleCloseModal();
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      setServices(services.filter(s => s.id !== id));
      showToast('Service deleted successfully', 'success');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFeatureChange = (index: number, value: string) => {
    const newFeatures = [...(formData.features || [])];
    newFeatures[index] = value;
    setFormData({ ...formData, features: newFeatures });
  };

  const addFeature = () => {
    setFormData({
      ...formData,
      features: [...(formData.features || []), '']
    });
  };

  const removeFeature = (index: number) => {
    const newFeatures = formData.features?.filter((_, i) => i !== index) || [];
    setFormData({ ...formData, features: newFeatures });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl text-gray-900">Services</h1>
            <p className="text-gray-600">Manage your service offerings</p>
          </div>
          <button
            onClick={() => handleOpenModal()}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add Service
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>
                <div className="mb-4">
                  <p className="text-sm text-gray-700 mb-2">Features:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="truncate">• {feature}</li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-blue-600">+ {service.features.length - 3} more</li>
                    )}
                  </ul>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleOpenModal(service)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <Pencil className="w-4 h-4" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(service.id)}
                    className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
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
              <h2 className="text-xl text-gray-900">{editingService ? 'Edit Service' : 'Add New Service'}</h2>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-sm mb-2 text-gray-700">Service Title *</label>
                  <input
                    type="text"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm mb-2 text-gray-700">Description *</label>
                  <textarea
                    name="description"
                    required
                    rows={3}
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-gray-700">Icon *</label>
                  <select
                    name="icon"
                    required
                    value={formData.icon}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  >
                    {iconOptions.map(icon => (
                      <option key={icon} value={icon}>{icon}</option>
                    ))}
                  </select>
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
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm text-gray-700">Features</label>
                    <button
                      type="button"
                      onClick={addFeature}
                      className="text-sm text-blue-600 hover:text-blue-700"
                    >
                      + Add Feature
                    </button>
                  </div>
                  <div className="space-y-2">
                    {formData.features?.map((feature, index) => (
                      <div key={index} className="flex gap-2">
                        <input
                          type="text"
                          value={feature}
                          onChange={(e) => handleFeatureChange(index, e.target.value)}
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                          placeholder={`Feature ${index + 1}`}
                        />
                        {formData.features && formData.features.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeFeature(index)}
                            className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
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
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {editingService ? 'Update Service' : 'Add Service'}
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