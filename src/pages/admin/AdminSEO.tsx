import { useState } from 'react';
import { Save, Globe, Search } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { initialSEOSettings } from '../../data/initialData';
import { SEOSettings } from '../../types';
import { useToast } from '../../components/Toast';

export default function AdminSEO() {
  const [seoSettings, setSeoSettings] = useLocalStorage<SEOSettings>('seoSettings', initialSEOSettings);
  const [activeTab, setActiveTab] = useState<'pages' | 'global'>('pages');
  const [formData, setFormData] = useState(seoSettings);
  const { showToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSeoSettings(formData);
    showToast('SEO settings saved successfully', 'success');
  };

  const handlePageChange = (page: keyof Omit<SEOSettings, 'globalSettings'>, field: string, value: string) => {
    setFormData({
      ...formData,
      [page]: {
        ...formData[page],
        [field]: value
      }
    });
  };

  const handleGlobalChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      globalSettings: {
        ...formData.globalSettings,
        [field]: value
      }
    });
  };

  const handleSocialChange = (platform: string, value: string) => {
    setFormData({
      ...formData,
      globalSettings: {
        ...formData.globalSettings,
        socialMedia: {
          ...formData.globalSettings.socialMedia,
          [platform]: value
        }
      }
    });
  };

  const handleSchemaChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      globalSettings: {
        ...formData.globalSettings,
        businessSchema: {
          ...formData.globalSettings.businessSchema,
          [field]: value
        }
      }
    });
  };

  const pages = [
    { key: 'homePage', label: 'Home Page' },
    { key: 'servicesPage', label: 'Services Page' },
    { key: 'projectsPage', label: 'Projects Page' },
    { key: 'aboutPage', label: 'About Page' },
    { key: 'contactPage', label: 'Contact Page' }
  ];

  return (
    <AdminLayout>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl text-gray-900">SEO Settings</h1>
            <p className="text-gray-600">Optimize your website for search engines</p>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Save className="w-5 h-5" />
            Save Changes
          </button>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b">
            <div className="flex">
              <button
                type="button"
                onClick={() => setActiveTab('pages')}
                className={`px-6 py-4 font-medium transition-colors flex items-center gap-2 ${
                  activeTab === 'pages'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Search className="w-5 h-5" />
                Page SEO
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('global')}
                className={`px-6 py-4 font-medium transition-colors flex items-center gap-2 ${
                  activeTab === 'global'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Globe className="w-5 h-5" />
                Global Settings
              </button>
            </div>
          </div>

          {/* Page SEO Tab */}
          {activeTab === 'pages' && (
            <div className="p-6 space-y-8">
              {pages.map((page) => {
                const pageData = formData[page.key as keyof Omit<SEOSettings, 'globalSettings'>];
                return (
                  <div key={page.key} className="border-b pb-8 last:border-0">
                    <h2 className="text-xl mb-4 text-gray-900">{page.label}</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm mb-2 text-gray-700">Meta Title</label>
                        <input
                          type="text"
                          value={pageData.title}
                          onChange={(e) => handlePageChange(page.key as any, 'title', e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                          placeholder="Page title for search engines"
                        />
                        <p className="text-xs text-gray-500 mt-1">Recommended: 50-60 characters</p>
                      </div>
                      <div>
                        <label className="block text-sm mb-2 text-gray-700">Meta Description</label>
                        <textarea
                          rows={3}
                          value={pageData.description}
                          onChange={(e) => handlePageChange(page.key as any, 'description', e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none"
                          placeholder="Brief description of the page content"
                        />
                        <p className="text-xs text-gray-500 mt-1">Recommended: 150-160 characters</p>
                      </div>
                      <div>
                        <label className="block text-sm mb-2 text-gray-700">Keywords</label>
                        <input
                          type="text"
                          value={pageData.keywords}
                          onChange={(e) => handlePageChange(page.key as any, 'keywords', e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                          placeholder="keyword1, keyword2, keyword3"
                        />
                        <p className="text-xs text-gray-500 mt-1">Comma-separated keywords</p>
                      </div>
                      <div>
                        <label className="block text-sm mb-2 text-gray-700">Open Graph Image URL</label>
                        <input
                          type="url"
                          value={pageData.ogImage || ''}
                          onChange={(e) => handlePageChange(page.key as any, 'ogImage', e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                          placeholder="https://example.com/image.jpg"
                        />
                        <p className="text-xs text-gray-500 mt-1">Image shown when shared on social media (1200x630px recommended)</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Global Settings Tab */}
          {activeTab === 'global' && (
            <div className="p-6 space-y-8">
              {/* Company Information */}
              <div>
                <h2 className="text-xl mb-4 text-gray-900">Company Information</h2>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2 text-gray-700">Site Name</label>
                      <input
                        type="text"
                        value={formData.globalSettings.siteName}
                        onChange={(e) => handleGlobalChange('siteName', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2 text-gray-700">Company Name</label>
                      <input
                        type="text"
                        value={formData.globalSettings.companyName}
                        onChange={(e) => handleGlobalChange('companyName', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">Tagline</label>
                    <input
                      type="text"
                      value={formData.globalSettings.tagline}
                      onChange={(e) => handleGlobalChange('tagline', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2 text-gray-700">Phone</label>
                      <input
                        type="tel"
                        value={formData.globalSettings.phone}
                        onChange={(e) => handleGlobalChange('phone', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2 text-gray-700">Email</label>
                      <input
                        type="email"
                        value={formData.globalSettings.email}
                        onChange={(e) => handleGlobalChange('email', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">Address</label>
                    <input
                      type="text"
                      value={formData.globalSettings.address}
                      onChange={(e) => handleGlobalChange('address', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h2 className="text-xl mb-4 text-gray-900">Social Media</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">Facebook URL</label>
                    <input
                      type="url"
                      value={formData.globalSettings.socialMedia.facebook || ''}
                      onChange={(e) => handleSocialChange('facebook', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">Instagram URL</label>
                    <input
                      type="url"
                      value={formData.globalSettings.socialMedia.instagram || ''}
                      onChange={(e) => handleSocialChange('instagram', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">LinkedIn URL</label>
                    <input
                      type="url"
                      value={formData.globalSettings.socialMedia.linkedin || ''}
                      onChange={(e) => handleSocialChange('linkedin', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">Twitter URL</label>
                    <input
                      type="url"
                      value={formData.globalSettings.socialMedia.twitter || ''}
                      onChange={(e) => handleSocialChange('twitter', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Business Schema */}
              <div>
                <h2 className="text-xl mb-4 text-gray-900">Structured Data (Schema.org)</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">Business Type</label>
                    <select
                      value={formData.globalSettings.businessSchema.type}
                      onChange={(e) => handleSchemaChange('type', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    >
                      <option value="GeneralContractor">General Contractor</option>
                      <option value="ConstructionCompany">Construction Company</option>
                      <option value="HomeBuilder">Home Builder</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">Price Range</label>
                    <select
                      value={formData.globalSettings.businessSchema.priceRange}
                      onChange={(e) => handleSchemaChange('priceRange', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    >
                      <option value="$">$</option>
                      <option value="$$">$$</option>
                      <option value="$$$">$$$</option>
                      <option value="$$$$">$$$$</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">Area Served</label>
                    <input
                      type="text"
                      value={formData.globalSettings.businessSchema.areaServed}
                      onChange={(e) => handleSchemaChange('areaServed', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                      placeholder="e.g., Metro City and surrounding areas"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* SEO Tips */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg mb-3 text-gray-900">SEO Best Practices</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Keep meta titles under 60 characters for optimal display in search results</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Write compelling meta descriptions (150-160 characters) that encourage clicks</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Use relevant keywords naturally in your titles and descriptions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Ensure all social media URLs are complete and accurate</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Open Graph images should be 1200x630 pixels for best social media display</span>
            </li>
          </ul>
        </div>
      </form>
    </AdminLayout>
  );
}