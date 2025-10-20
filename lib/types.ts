export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  date: string
  readTime: string
  image: string
  author: string
  featured?: boolean
  tags?: string[]
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
  consent: boolean
}

export interface SchedulingFormData {
  name: string
  email: string
  phone: string
  service: string
  preferredDate: string
  preferredTime: string
  message: string
  consent: boolean
}

export interface NewsletterFormData {
  email: string
}

export interface FormResponse {
  success: boolean
  message: string
  error?: string
}

export interface Service {
  id: string
  icon: string
  title: string
  shortDescription: string
  fullDescription: string
  benefits: string[]
  techniques: string[]
  idealFor: string[]
  duration: string
  color: string
  featured?: boolean // Added optional featured field for specialty services
}
