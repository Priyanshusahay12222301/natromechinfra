export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  completionDate: string;
  imageUrl: string;
  images: string[];
  featured: boolean;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  imageUrl: string;
  seoTitle?: string;
  seoDescription?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  imageUrl: string;
  projectName?: string;
}

export interface SEOSettings {
  homePage: PageSEO;
  servicesPage: PageSEO;
  projectsPage: PageSEO;
  aboutPage: PageSEO;
  contactPage: PageSEO;
  globalSettings: GlobalSEO;
}

export interface PageSEO {
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
}

export interface GlobalSEO {
  siteName: string;
  companyName: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  socialMedia: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
  businessSchema: {
    type: string;
    priceRange: string;
    areaServed: string;
  };
}
