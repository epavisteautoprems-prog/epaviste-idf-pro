import type { Metadata } from "next";

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  author: string;
  city: string;
  text: string;
  date: string;
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface DeptSummary {
  name: string;
  code: string;
  slug: string;
  cities: string[];
}

export interface CitySummary {
  name: string;
  slug: string;
  dept: string;
  population: number;
  description: string;
  neighborhoods: string[];
}

export interface GeoDeptData {
  name: string;
  code: string;
  slug: string;
  routePath: string;
  description: string;
  longDescription: string;
  cities: string[];
  citySlugs: string[];
  landmarks: string[];
  defaultPostal: string;
  specificFAQs: FAQ[];
  testimonials: Testimonial[];
}

export interface GeoCityData {
  name: string;
  slug: string;
  deptCode: string;
  deptName: string;
  deptSlug: string;
  deptRoutePath: string;
  population: number;
  description: string;
  neighborhoods: string[];
  roads: string[];
  longDescription: string;
  specificFAQs: FAQ[];
  testimonials: Testimonial[];
  defaultPostal: string;
}

export interface ServiceInfo {
  slug: string;
  title: string;
  shortDesc: string;
  keyword: string;
}

export interface ArticleFrontmatter {
  title: string;
  description: string;
  keywords: string[];
  publishedAt: string;
  updatedAt: string;
  author: string;
  authorRole: string;
  readingTime: string;
  category: string;
  image: string;
  imageAlt: string;
}

export interface ArticleData extends ArticleFrontmatter {
  slug: string;
  content: string;
}

export interface Article extends ArticleData {
  url: string;
}

export interface Service {
  name: string;
  description: string;
  url: string;
  areaServed?: string;
}

export type PageMetadataInput = {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  ogImage?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

export type { Metadata };
