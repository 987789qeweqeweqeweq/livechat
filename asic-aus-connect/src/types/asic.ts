export interface NavItem {
  label: string;
  href: string;
}

export interface TaskLink {
  label: string;
  href: string;
}

export interface CarouselSlide {
  title: string;
  imgSrc: string;
  imgAlt: string;
  href: string;
  cta?: string;
  description?: string;
}

export interface NewsItem {
  type: string;
  date: string;
  title: string;
  excerpt?: string;
  imgSrc?: string;
  href: string;
}

export interface WhatWeDoCard {
  title: string;
  description: string;
  href: string;
}

export interface ResourceCard {
  title: string;
  description: string;
  href: string;
}

export interface EnforcementActivity {
  label: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links: NavItem[];
}
