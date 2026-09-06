export interface SiteSocial {
  facebook: string;
  instagram: string;
  youtube: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  phone: string;
  phoneHref: string;
  whatsappHref: string;
  email: string;
  address: string;
  founded: string;
  founder: string;
  social: SiteSocial;
}

export interface CollectionItem {
  id: string;
  label: string;
  detail: string;
  copy: string;
  image: string;
}

export interface BespokeStep {
  step: string;
  title: string;
  subtitle: string;
  desc: string;
  detail: string;
  image: string;
}

export interface TrustItem {
  num: string;
  title: string;
  subtitle: string;
  desc: string;
}

export interface RealWorkItem {
  title: string;
  client: string;
  scope: string;
  image: string;
  featured?: boolean;
}

export interface SocialProofItem {
  quote: string;
  author: string;
  role: string;
  project: string;
}

export interface MilestoneItem {
  year: string;
  label: string;
  detail: string;
}

export interface NavMenuItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}
