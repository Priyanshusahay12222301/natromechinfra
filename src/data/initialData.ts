import { Project, Service, Testimonial, SEOSettings } from '../types';

export const initialProjects: Project[] = [
  {
    id: '1',
    title: 'Industrial Steel Structure Epoxy Coating',
    description: 'Complete grit blasting and epoxy painting solution for industrial steel structures. Applied high-performance epoxy coating system ensuring long-term corrosion protection and durability.',
    category: 'Industrial',
    location: 'Bihar, India',
    completionDate: '2025-12',
    imageUrl: 'https://images.unsplash.com/photo-1563174761-62892315819b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwY29uc3RydWN0aW9uJTIwc2l0ZXxlbnwxfHx8fDE3NjkwMDU5MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1563174761-62892315819b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwY29uc3RydWN0aW9uJTIwc2l0ZXxlbnwxfHx8fDE3NjkwMDU5MjN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    featured: true,
    seoTitle: 'Industrial Steel Epoxy Coating - Grit Blasting & Painting Services Bihar',
    seoDescription: 'Professional grit blasting and epoxy painting for industrial steel structures in Bihar, India.',
    seoKeywords: 'epoxy painting, grit blasting, steel structure coating, industrial painting Bihar'
  },
  {
    id: '2',
    title: 'Civil & Mechanical Maintenance Project',
    description: 'Comprehensive civil and mechanical maintenance work including structural repairs, equipment installation, and facility upgrades. Delivered with precision and quality standards.',
    category: 'Industrial',
    location: 'Begusarai, Bihar',
    completionDate: '2025-11',
    imageUrl: 'https://images.unsplash.com/photo-1768956463507-f7274a5ba2b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb24lMjBidWlsZGluZ3xlbnwxfHx8fDE3Njg5OTIxNzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1768956463507-f7274a5ba2b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb24lMjBidWlsZGluZ3xlbnwxfHx8fDE3Njg5OTIxNzd8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    featured: true,
    seoTitle: 'Civil & Mechanical Maintenance Services - Industrial Projects Begusarai',
    seoDescription: 'Expert civil and mechanical maintenance services for industrial facilities in Begusarai, Bihar.',
    seoKeywords: 'civil maintenance, mechanical work, industrial repairs, facility maintenance Bihar'
  }
];

export const initialServices: Service[] = [
  {
    id: '1',
    title: 'Commercial Construction',
    description: 'Expert commercial building services for offices, retail spaces, and mixed-use developments. We deliver projects on time and within budget.',
    icon: 'Building2',
    features: [
      'Office buildings and corporate headquarters',
      'Retail and shopping centers',
      'Mixed-use developments',
      'Renovations and fit-outs'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1768956463507-f7274a5ba2b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb24lMjBidWlsZGluZ3xlbnwxfHx8fDE3Njg5OTIxNzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    seoTitle: 'Commercial Construction Services - Office & Retail Buildings',
    seoDescription: 'Professional commercial construction for offices, retail spaces, and mixed-use developments. Quality workmanship guaranteed.'
  },
  {
    id: '2',
    title: 'Residential Construction',
    description: 'Quality home building services from single-family homes to large residential developments. Creating dream homes with precision and care.',
    icon: 'Home',
    features: [
      'Custom home construction',
      'Residential developments',
      'Home renovations and extensions',
      'Energy-efficient building'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1724113595861-93b16bc264a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGhvdXNlJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2ODk4ODIzNnww&ixlib=rb-4.1.0&q=80&w=1080',
    seoTitle: 'Residential Construction Services - Custom Homes & Developments',
    seoDescription: 'Expert home building from custom houses to residential developments. Quality craftsmanship and attention to detail.'
  },
  {
    id: '3',
    title: 'Industrial Construction',
    description: 'Specialized industrial construction for warehouses, manufacturing facilities, and distribution centers. Built for durability and efficiency.',
    icon: 'Factory',
    features: [
      'Warehouse and distribution centers',
      'Manufacturing facilities',
      'Cold storage and climate-controlled buildings',
      'Heavy industrial structures'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1563174761-62892315819b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwY29uc3RydWN0aW9uJTIwc2l0ZXxlbnwxfHx8fDE3NjkwMDU5MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    seoTitle: 'Industrial Construction - Warehouses & Manufacturing Facilities',
    seoDescription: 'Specialized industrial building services for warehouses, manufacturing plants, and distribution centers.'
  },
  {
    id: '4',
    title: 'Design & Planning',
    description: 'Comprehensive architectural design and project planning services. We bring your vision to life with innovative solutions.',
    icon: 'Pencil',
    features: [
      'Architectural design',
      'Project planning and management',
      'Permit acquisition',
      '3D modeling and visualization'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1721244653757-b76cc4679dfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBibHVlcHJpbnQlMjBkZXNpZ258ZW58MXx8fHwxNzY4OTI2MjMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    seoTitle: 'Architectural Design & Construction Planning Services',
    seoDescription: 'Professional architectural design, project planning, and 3D visualization for construction projects.'
  }
];

export const initialTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'John Morrison',
    company: 'TechCorp Industries',
    role: 'CEO',
    content: 'Outstanding work on our new headquarters. The team was professional, efficient, and delivered beyond our expectations. The project was completed on time and the quality is exceptional.',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1765378025264-ca795700291f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY4OTAyMzM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    projectName: 'Downtown Commercial Complex'
  },
  {
    id: '2',
    name: 'Sarah Williams',
    company: 'Green Valley Developers',
    role: 'Project Director',
    content: 'We have worked with many construction companies, but this team stands out for their attention to detail and commitment to quality. Highly recommended for any construction project.',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1765378025264-ca795700291f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY4OTAyMzM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    projectName: 'Luxury Residential Estate'
  },
  {
    id: '3',
    name: 'Michael Chen',
    company: 'Harbor Logistics',
    role: 'Operations Manager',
    content: 'The industrial facility they built for us exceeded all specifications. Professional team, transparent communication, and excellent project management throughout.',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1765378025264-ca795700291f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY4OTAyMzM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    projectName: 'Industrial Warehouse Facility'
  }
];

// SEO Settings - Optimized for NATROMECH Infrasolutions (India)
export const initialSEOSettings: SEOSettings = {
  homePage: {
    title: 'NATROMECH Infrasolutions | Industrial & Civil Construction Company in India',
    description: 'NATROMECH Infrasolutions provides industrial construction, steel structures, epoxy painting, and civil maintenance services across India.',
    keywords: 'industrial construction India, steel structure construction, epoxy painting India, civil construction, infrastructure company India, NATROMECH Infrasolutions',
    ogImage: '/images/Gemini_Generated_Image_30qgtf30qgtf30qg (1).png'
  },
  servicesPage: {
    title: 'Industrial Construction Services India | Steel Structure & Epoxy Painting - NATROMECH',
    description: 'Expert industrial construction services including steel structures, epoxy painting, civil works, and infrastructure maintenance across India by NATROMECH Infrasolutions.',
    keywords: 'industrial construction services India, steel fabrication India, epoxy painting services, civil engineering India, infrastructure construction, factory construction India',
    ogImage: '/images/Gemini_Generated_Image_30qgtf30qgtf30qg (1).png'
  },
  projectsPage: {
    title: 'Industrial Construction Projects India | NATROMECH Infrasolutions Portfolio',
    description: 'Explore NATROMECH Infrasolutions completed industrial and civil construction projects across India, featuring steel structures and infrastructure works.',
    keywords: 'industrial projects India, construction portfolio India, steel structure projects, infrastructure projects India, civil construction projects, factory construction portfolio',
    ogImage: '/images/Gemini_Generated_Image_30qgtf30qgtf30qg (1).png'
  },
  aboutPage: {
    title: 'About NATROMECH Infrasolutions | Leading Industrial Construction Company India',
    description: 'NATROMECH Infrasolutions is a trusted industrial and civil construction company in India, specializing in steel structures, epoxy painting, and infrastructure services.',
    keywords: 'NATROMECH Infrasolutions, industrial construction company India, construction contractor India, steel structure company, infrastructure company India',
    ogImage: '/images/Gemini_Generated_Image_30qgtf30qgtf30qg (1).png'
  },
  contactPage: {
    title: 'Contact NATROMECH Infrasolutions | Get Industrial Construction Quote India',
    description: 'Contact NATROMECH Infrasolutions for industrial construction, steel structures, and civil engineering services in India. Request a free project consultation.',
    keywords: 'construction quote India, industrial construction inquiry, steel structure quote India, civil construction contact, NATROMECH contact',
    ogImage: '/images/Gemini_Generated_Image_30qgtf30qgtf30qg (1).png'
  },
  globalSettings: {
    siteName: 'NATROMECH Infrasolutions',
    companyName: 'NATROMECH Infrasolutions',
    tagline: 'Industrial & Civil Construction Excellence in India',
    phone: '',
    email: 'info@natromech.in',
    address: 'New colony, Bagha Rd, near Gandhi chowk, Gandhi Nagar, Subhash Nagar, Begusarai, Harrakh, Bihar 851218',
    socialMedia: {
      facebook: 'https://facebook.com/natromech',
      instagram: 'https://instagram.com/natromech',
      linkedin: 'https://linkedin.com/company/natromech',
      twitter: 'https://twitter.com/natromech'
    },
    businessSchema: {
      type: 'ConstructionCompany',
      priceRange: '$$$',
      areaServed: 'India'
    }
  }
};
