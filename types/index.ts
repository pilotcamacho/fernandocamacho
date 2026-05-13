export interface Project {
  id: string;
  title: string;
  company?: string | null;
  description?: string | null;
  date?: string | null;
  tags?: (string | null)[] | null;
  order?: number | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface Publication {
  id: string;
  authors: string;
  title: string;
  venue?: string | null;
  year?: number | null;
  doi?: string | null;
  s3PdfKey?: string | null;
  order?: number | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  description?: string | null;
  achievements?: (string | null)[] | null;
  order?: number | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field?: string | null;
  startYear?: number | null;
  endYear?: number | null;
  thesis?: string | null;
  s3DiplomaKey?: string | null;
  s3DiplomaImageKey?: string | null;
  order?: number | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface Award {
  id: string;
  name: string;
  year?: number | null;
  issuer?: string | null;
  description?: string | null;
  order?: number | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  subject?: string | null;
  message: string;
  readAt?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface SiteSetting {
  id: string;
  key: string;
  value: string;
  createdAt?: string;
  updatedAt?: string;
}
