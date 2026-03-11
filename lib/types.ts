export interface NavItem {
  label: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface ClassSession {
  time: string;
  name: string;
  duration: string;
  intensity: string;
  coach: string;
  spots: number;
}

export interface DaySchedule {
  day: string;
  classes: ClassSession[];
}

export interface Trainer {
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  certifications: string[];
  signatureSession: string;
  imageAlt: string;
}

export interface PricingTier {
  name: string;
  price: string;
  billingPeriod: string;
  badge?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: CtaLink;
}

export interface Testimonial {
  name: string;
  title: string;
  quote: string;
  rating: number;
}
