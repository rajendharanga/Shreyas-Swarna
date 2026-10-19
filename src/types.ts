export type UserCategory =
  | 'Jewellery Customer'
  | 'Retailer: In-Store Design Studio'
  | 'Retailer: Exclusive Showroom Partner'
  | 'Jewellery Master Artisan / Workshop'
  | 'Strategic Design Partner'
  | 'Investor / Business Enquiry'
  | 'Other';

export interface ContactFormData {
  fullName: string;
  mobileNumber: string;
  email: string;
  category: UserCategory;
  cityTown: string;
  message: string;
}

export interface DesignConcept {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  alt: string;
  karat: string;
  motifs: string[];
  philosophy: string;
}

export interface ProprietaryCollection {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  highlight: string;
  image: string;
}
