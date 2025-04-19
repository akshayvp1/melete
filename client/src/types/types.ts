import { ReactNode } from 'react';

export interface Consultant {
  name: string;
  qualification: string;
  expertise: string[];
  languages: string[];
  counseling: string[];
  image: string;
}

export interface TherapyImprovement {
  title: string;
  desc: string;
  icon: string; // Use string for icon name
  bgImage: string;
}

export interface Book {
  title: string;
  desc: string;
  image: string;
}

export interface NavItem {
  name: string;
  items?: string[];
  href?: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}