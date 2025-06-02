export interface NavLink {
  title: string;
  path: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  details: string;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  link?: string;
  client?: string;
  completion?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  quote: string;
  image: string;
  rating: number;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorImage: string;
  date: string;
  image: string;
  category: string;
  readTime: number;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}