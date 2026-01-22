import { Link } from 'react-router';
import { Building2, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { initialSEOSettings } from '../data/initialData';
import { SEOSettings } from '../types';

export default function Footer() {
  const [seoSettings] = useLocalStorage<SEOSettings>('seoSettings', initialSEOSettings);
  const { globalSettings } = seoSettings;

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      {/* Top Section */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl text-gray-900 mb-2">Ready to Build Your Vision?</h3>
              <p className="text-gray-800">Get a free consultation and project estimate today</p>
            </div>
            <Link
              to="/contact"
              className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all shadow-lg inline-flex items-center gap-2 group"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img 
                src="/images/WhatsApp Image 2026-01-22 at 10.04.48 PM.jpeg" 
                alt="NATROMECH Infrasolutions Logo" 
                className="h-12 w-auto"
              />
              <div>
                <span className="font-bold text-xl text-white block">{globalSettings.siteName}</span>
                <span className="text-xs text-amber-500 uppercase tracking-wider">INFRASOLUTIONS</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              {globalSettings.tagline}. Delivering excellence in commercial, residential, and industrial construction projects.
            </p>
            <div className="flex gap-3">
              {globalSettings.socialMedia.facebook && (
                <a
                  href={globalSettings.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-amber-500 hover:text-gray-900 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {globalSettings.socialMedia.instagram && (
                <a
                  href={globalSettings.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-amber-500 hover:text-gray-900 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {globalSettings.socialMedia.linkedin && (
                <a
                  href={globalSettings.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-amber-500 hover:text-gray-900 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {globalSettings.socialMedia.twitter && (
                <a
                  href={globalSettings.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-amber-500 hover:text-gray-900 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/services', label: 'Services' },
                { to: '/projects', label: 'Projects' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-gray-400 hover:text-amber-500 transition-colors inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-amber-500" />
                <div>
                  <a href={`mailto:${globalSettings.email}`} className="text-gray-400 hover:text-white transition-colors break-all">
                    {globalSettings.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-amber-500" />
                <div>
                  <p className="text-gray-400">{globalSettings.address}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} {globalSettings.companyName}. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="#" className="hover:text-amber-500 transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-amber-500 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}