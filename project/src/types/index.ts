export interface Job {
  id: string;
  title: string;
  titleKn: string;
  company: string;
  companyKn: string;
  location: string;
  locationKn: string;
  salary: string;
  salaryKn: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  experience: string;
  experienceKn: string;
  description: string;
  descriptionKn: string;
  requirements: string[];
  requirementsKn: string[];
  postedDate: string;
  applicationUrl: string;
  featured: boolean;
  category: string;
  categoryKn: string;
}

export interface AffiliateLink {
  id: string;
  title: string;
  titleKn: string;
  description: string;
  descriptionKn: string;
  url: string;
  image: string;
  category: 'resume' | 'course' | 'skill' | 'interview';
  price: string;
  originalPrice?: string;
  rating: number;
  reviews: number;
}

export type Language = 'en' | 'kn';

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  location?: string;
  skills?: string[];
  experience?: string;
  resume?: string;
  preferences: {
    jobTypes: string[];
    locations: string[];
    salaryRange: {
      min: number;
      max: number;
    };
  };
}