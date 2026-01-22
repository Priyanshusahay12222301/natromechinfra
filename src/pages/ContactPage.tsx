import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { initialSEOSettings } from '../data/initialData';
import { SEOSettings } from '../types';
import { useToast } from '../components/Toast';

export default function ContactPage() {
  const [seoSettings] = useLocalStorage<SEOSettings>('seoSettings', initialSEOSettings);
  const { globalSettings } = seoSettings;
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    const formDataObj = new FormData(formElement);
    formDataObj.append("access_key", "5225dabf-73c2-484b-b83c-d9d3db462d6c");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj
      });

      const data = await response.json();

      if (data.success) {
        showToast('Thank you! Your message has been sent successfully.', 'success');
        setFormData({
          name: '',
          email: '',
          projectType: '',
          message: ''
        });
      } else {
        showToast('Failed to send message. Please try again.', 'error');
      }
    } catch (error) {
      showToast('An error occurred. Please try again later.', 'error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 gradient-overlay">
        {/* SEO: Hero background image with descriptive aria-label */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1650630718105-497674381f3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwY3JhbmUlMjBtb2Rlcm58ZW58MXx8fHwxNzY5MDA2NTYzfDA&ixlib=rb-4.1.0&q=80&w=1080)`
          }}
          role="img"
          aria-label="Modern construction site with crane equipment"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-amber-500 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold mb-6">
            GET IN TOUCH
          </div>
          {/* SEO: H1 with contact keywords */}
          <h1 className="text-5xl md:text-6xl text-white mb-8">
            Contact <span className="text-amber-500">NATROMECH Infrasolutions</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Ready to start your industrial construction project in India? Get in touch for a free consultation and detailed quote
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="inline-block bg-amber-500 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold mb-6">
                SEND MESSAGE
              </div>
              <h2 className="text-4xl md:text-5xl text-gray-900 mb-8">
                Let's Build <span className="text-amber-500">Together</span>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-3 text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-3 text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold mb-3 text-gray-700">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                  >
                    <option value="">Select type</option>
                    <option value="commercial">Commercial</option>
                    <option value="residential">Residential</option>
                    <option value="industrial">Industrial</option>
                    <option value="renovation">Renovation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-3 text-gray-700">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none resize-none transition-all"
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-amber-500 text-gray-900 px-8 py-5 rounded-xl font-bold text-lg hover:bg-amber-400 transition-all shadow-lg flex items-center justify-center gap-3 group"
                >
                  Send Message
                  <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="inline-block bg-amber-500 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold mb-6">
                CONTACT INFO
              </div>
              <h2 className="text-4xl md:text-5xl text-gray-900 mb-8">
                Reach <span className="text-amber-500">Out</span>
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Have questions? We're here to help. Contact us through any of the following channels and our team will respond promptly.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: 'Email',
                    content: globalSettings.email,
                    subtitle: 'We\'ll respond within 24 hours',
                    href: `mailto:${globalSettings.email}`
                  },
                  {
                    icon: MapPin,
                    title: 'Office Location',
                    content: globalSettings.address,
                    subtitle: 'Visit us during business hours'
                  },
                  {
                    icon: Clock,
                    title: 'Business Hours',
                    content: 'Monday - Friday: 8:00 AM - 6:00 PM',
                    subtitle: 'Saturday: 9:00 AM - 2:00 PM'
                  }
                ].map((item, index) => {
                  const Icon = item.icon;
                  const Wrapper = item.href ? 'a' : 'div';
                  return (
                    <Wrapper
                      key={index}
                      {...(item.href ? { href: item.href } : {})}
                      className="flex gap-6 bg-gray-50 p-6 rounded-2xl hover-lift group"
                    >
                      <div className="bg-amber-500 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-gray-900" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-700 mb-1">{item.content}</p>
                        <p className="text-sm text-gray-500">{item.subtitle}</p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>

              {/* Google Maps Embed */}
              <div className="mt-8 rounded-2xl overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.7980246205348!2d86.12510907484494!3d25.428258122304072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f205e651c6bf1f%3A0x7993bf5786790d42!2sNATROMECH%20INFRASOLUTIONS%20PRIVATE%20LIMITED!5e1!3m2!1sen!2sin!4v1769102196104!5m2!1sen!2sin" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }}
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NATROMECH Infrasolutions Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-amber-500 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              FAQ
            </div>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
              Frequently Asked <span className="text-amber-500">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: 'How do I get a quote for my project?',
                answer: 'Simply fill out the contact form above with your project details, and our team will get back to you within 24 hours with a comprehensive, no-obligation quote tailored to your specific requirements.'
              },
              {
                question: 'What types of construction projects do you handle?',
                answer: 'We handle all types of construction projects including commercial buildings, residential homes, industrial facilities, renovations, and custom developments. No project is too big or too small for our experienced team.'
              },
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary based on scope, complexity, and size. During our initial consultation, we provide a detailed project timeline specific to your requirements, ensuring transparency from start to finish.'
              },
              {
                question: 'Are you licensed and insured?',
                answer: 'Yes, we are fully licensed, bonded, and insured. We maintain all necessary certifications, comply with local building codes and regulations, and carry comprehensive liability insurance for your peace of mind.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover-lift">
                <h3 className="text-2xl text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-800 mb-10">
            Schedule a free consultation with our construction experts today
          </p>
          <a
            href="mailto:info@natromech.in"
            className="inline-flex items-center gap-3 bg-gray-900 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all shadow-strong group"
          >
            <Mail className="w-6 h-6" />
            Email Us: info@natromech.in
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}