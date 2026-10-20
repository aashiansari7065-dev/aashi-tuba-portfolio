import {
  Share2,
  Search,
  Target,
  Megaphone,
  PenTool,
  MapPin,
  Mail,
  MessageCircle,
  Instagram,
  Linkedin,
} from 'lucide-react';

import type { LucideIcon } from 'lucide-react';
import instagramPost from '@/assets/Instagram Post.jpg';
import educationalPost from '@/assets/Educational Post.jpeg';
import promotionalPost from '@/assets/Promotional Post.jpeg';
import instagramFeed from '@/assets/Instagaram Feed.png';
import websiteHomePage from '@/assets/Website Home Page.png';
import smartViewCover from '@/assets/cover page.webp';
import offPageBacklinks from '@/assets/Off page seo project/Backlinks Sheet.png';
import offPageBlogSubmission from '@/assets/Off page seo project/Blog Submission.png';
import offPageCalendar from '@/assets/Off page seo project/Calender Sheet.png';
import offPageSocialBookmarking from '@/assets/Off page seo project/Social Bookmarking Submission.png';
import offPageCover from '@/assets/Off page seo project/Website Home Overview.png';
import attitudeAcademyPptCover from '@/assets/ppt submission/cover page ppt.png';
import attitudeAcademyInfographicCover from '@/assets/Infographic Submission/Infographic cover page.png';
import ecommerceCatalogInventory from '@/assets/E commerce/Catalog & Inventory Management.jpeg';
import ecommercePaymentSales from '@/assets/E commerce/Payment & Sales Tracking.jpeg';
import ecommerceCatalogQuality from '@/assets/E commerce/Catalog Upload & Quality Control.jpeg';
import ecommerceCover from '@/assets/E commerce/e commerce cover page.jpeg';

const attitudeAcademyPpt = new URL(
  '../assets/ppt submission/Smarter-Data-Analysis-Starts-with-Python.pptx',
  import.meta.url,
).href;

/* ============================================================
   EDIT THIS FILE to update text content across the entire site.
   ============================================================ */

/* ---------- Navigation ---------- */
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Why Me', href: '#why-me' },
  { label: 'Contact', href: '#contact' },
];

/* ---------- Contact details ---------- */
export const contact = {
  email: 'aashiansari7065@gmail.com',
  phone: '+91 70657 66747',
  phoneLink: '+917065766747',
  whatsapp: 'https://wa.me/917065766747',
  instagram: 'https://instagram.com/', // ← Replace with Aashi's Instagram URL
  linkedin: 'https://linkedin.com/', // ← Replace with Aashi's LinkedIn URL
};

/* ---------- About cards ---------- */
export const aboutCards = [
  { num: '01', title: 'Understand', desc: 'Business + Audience + Competition' },
  { num: '02', title: 'Plan', desc: 'Content + SEO + Advertising Strategy' },
  { num: '03', title: 'Grow', desc: 'Visibility + Leads + Better Online Presence' },
];

/* ---------- Services ---------- */
export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
}

export const services: Service[] = [
  {
    id: 'social-media',
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Building an engaged audience through consistent, strategic content.',
    details: [
      'Content planning',
      'Instagram / Facebook management',
      'Post & Reel strategy',
      'Engagement strategy',
    ],
  },
  {
    id: 'seo',
    icon: Search,
    title: 'SEO',
    description: 'Improving search visibility so the right people find your business.',
    details: [
      'Keyword research',
      'On-page SEO',
      'Off-page SEO',
      'Local SEO',
      'Content optimization',
      'Technical SEO basics',
    ],
  },
  {
    id: 'meta-ads',
    icon: Target,
    title: 'Meta Ads',
    description: 'Running Facebook & Instagram ad campaigns focused on real leads.',
    details: [
      'Facebook & Instagram Ads',
      'Lead generation campaigns',
      'Audience targeting',
      'Creative testing',
      'Campaign optimization',
    ],
  },
  {
    id: 'google-ads',
    icon: Megaphone,
    title: 'Google Ads',
    description: 'Capturing high-intent searches with focused, conversion-driven campaigns.',
    details: [
      'Search campaigns',
      'Lead generation',
      'Keyword targeting',
      'Conversion-focused campaigns',
    ],
  },
  {
    id: 'content',
    icon: PenTool,
    title: 'Content Strategy',
    description: 'Creating purposeful content that supports business goals, not just likes.',
    details: [
      'Content calendars',
      'Post ideas',
      'Reel concepts',
      'Captions',
      'Brand messaging',
    ],
  },
  {
    id: 'gbp',
    icon: MapPin,
    title: 'Google Business Profile',
    description: 'Optimizing local presence so nearby customers choose your business.',
    details: [
      'Profile optimization',
      'Local SEO',
      'Category optimization',
      'Posts and updates',
      'Review strategy',
    ],
  },
];

/* ---------- Why Me points ---------- */
export const whyMePoints = [
  { num: '01', title: 'Business First', desc: 'I understand your business before planning campaigns.' },
  { num: '02', title: 'Strategy Before Posting', desc: 'Every piece of content should have a purpose.' },
  { num: '03', title: 'Clear Communication', desc: 'You always know what is being worked on.' },
  { num: '04', title: 'Focus On Business Goals', desc: 'The goal is not only followers. It is better visibility, enquiries and growth.' },
];

/* ---------- Portfolio ---------- */
export const portfolioFilters = ['All', 'Social Media', 'SEO', 'Local SEO', 'Paid Ads', 'Content'];

export interface Project {
  id: string;
  title: string;
  type: string;
  category: string;
  services: string;
  challenge: string;
  strategy: string;
  contentApproach: string;
  seoApproach: string;
  adsApproach: string;
  expectedGoal: string;
  tags: string[];
  description?: string;
  coverImage?: string;
  gallery?: ProjectVisual[];
  offPageActivities?: OffPageActivity[];
  ecommerceActivities?: EcommerceActivity[];
  workShowcase?: ProjectVisual[];
  skills?: string[];
  platform?: string;
}

export interface ProjectVisual {
  num: string;
  label: string;
  description: string;
  image: string;
}

export interface OffPageActivity {
  num: string;
  name: string;
  image?: string;
  file?: string;
}

export interface EcommerceActivity {
  num: string;
  title: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: 'ecommerce-marketplace-management',
    title: 'E-Commerce Marketplace Management',
    type: 'Client Project',
    category: 'E-Commerce Management',
    services: 'Product Listing • Catalog Management • Inventory Management • Order & Payment Management',
    challenge: 'The goal was to efficiently manage e-commerce product catalogs, inventory, product variations, quality checks, orders, and payment-related activities while maintaining accurate and organized marketplace operations.',
    strategy: 'The work focused on managing product listings and catalogs, maintaining SKU-wise inventory, monitoring catalog quality, tracking orders and sales, and reviewing payment settlements to support smooth day-to-day e-commerce operations.',
    contentApproach: 'E-Commerce Management\n• Product Listing & Catalog Management\n• Inventory & Stock Management\n• SKU & Product Variation Management\n• Catalog Upload Management\n• Quality Control Monitoring\n• Order & Sales Tracking\n• Payment & Settlement Tracking\n• Product Data Management',
    seoApproach: '',
    adsApproach: '',
    expectedGoal: '',
    tags: ['E-Commerce Management'],
    description: 'E-commerce marketplace operations covering product catalogs, inventory, quality checks, orders, sales, and payment settlements.',
    coverImage: ecommerceCover,
    ecommerceActivities: [
      { num: '01', title: 'Catalog & Inventory Management', description: 'Managed product catalogs, SKUs, product variations, product details, and stock levels across marketplace listings.' },
      { num: '02', title: 'Payment & Sales Tracking', description: 'Monitored orders, sales and returns, platform costs, advertising costs, and payment settlements.' },
      { num: '03', title: 'Catalog Upload & Quality Control', description: 'Managed catalog uploads, monitored QC status, identified catalog errors, and handled catalog updates.' },
      { num: '04', title: 'Product Listing Management', description: 'Managed product information and marketplace listings to keep product data organized and up to date.' },
      { num: '05', title: 'SKU & Variation Management', description: 'Handled product SKUs and variations such as different sizes and product options for accurate inventory tracking.' },
      { num: '06', title: 'Inventory Monitoring', description: 'Monitored current stock levels and updated inventory information based on product variations and availability.' },
      { num: '07', title: 'Order & Sales Monitoring', description: 'Tracked order-related information, sales, returns, and marketplace transactions.' },
      { num: '08', title: 'Marketplace Operations', description: 'Supported day-to-day marketplace operations by monitoring catalogs, inventory, quality status, orders, and payments.' },
    ],
    workShowcase: [
      { num: '01', label: 'Catalog & Inventory Management', description: 'Managed product catalogs, SKUs, product variations, product details, and stock levels across marketplace listings.', image: ecommerceCatalogInventory },
      { num: '02', label: 'Payment & Sales Tracking', description: 'Monitored orders, sales and returns, platform costs, advertising costs, and payment settlements.', image: ecommercePaymentSales },
      { num: '03', label: 'Catalog Upload & Quality Control', description: 'Managed catalog uploads, monitored QC status, identified catalog errors, and handled catalog updates.', image: ecommerceCatalogQuality },
    ],
    skills: [
      'E-Commerce Management',
      'Product Listing',
      'Catalog Management',
      'Inventory Management',
      'SKU Management',
      'Quality Control',
      'Order Management',
      'Payment Tracking',
    ],
    platform: 'Meesho Supplier Hub',
  },
  {
    id: 'solar',
    title: 'Solar Business Marketing',
    type: 'Concept Project',
    category: 'Social Media + Website',
    services: 'Social Media Management + Website Development',
    challenge: 'The goal was to create a professional digital presence for a solar business and communicate its services in a clear and engaging way.',
    strategy: 'We focused on building a consistent social media presence through informative, educational and promotional content, supported by a professional business website.',
    contentApproach: 'Planned and created social media content covering solar awareness, benefits, customer education, services and promotional communication.',
    seoApproach: 'Designed and developed a professional website to present the solar business, its services and key information in a clear and user-friendly format.',
    adsApproach: 'Social Media Management\nContent Planning\nSocial Media Creative Design\nEducational & Promotional Content\nWebsite Design & Development\nWebsite Content Structuring',
    expectedGoal: 'Social Media → Customer Education → Brand Presence → Website',
    tags: ['Social Media', 'Content'],
    coverImage: websiteHomePage,
    gallery: [
      {
        num: '01',
        label: 'Instagram Post',
        description: 'Solar company ka main social media creative.',
        image: instagramPost,
      },
      {
        num: '02',
        label: 'Educational Content',
        description: 'Solar benefits, awareness aur customer education related post.',
        image: educationalPost,
      },
      {
        num: '03',
        label: 'Promotional Content',
        description: 'Offer/service-focused promotional creative.',
        image: promotionalPost,
      },
      {
        num: '04',
        label: 'Instagram Presence',
        description: 'Instagram profile/feed screenshot showing overall content consistency.',
        image: instagramFeed,
      },
      {
        num: '05',
        label: 'Website Design',
        description: 'Solar business website ka homepage screenshot.',
        image: websiteHomePage,
      },
    ],
  },
  {
    id: 'smart-view-tv-repair',
    title: 'SMART VIEW TV REPAIR',
    type: 'Concept Project',
    category: 'Local SEO + Website',
    services: 'Local SEO • Google Business Profile • Website Development',
    description: 'Professional online presence for a local TV repair business, combining Local SEO with a service-focused website.',
    challenge: 'The goal was to build a professional online presence for a local TV repair business and make it easier for potential customers to discover its services online.',
    strategy: "We focused on strengthening the business's local online presence through Google Business Profile optimization and a dedicated service-focused website.",
    contentApproach: 'Google Business Profile Optimization\nBusiness Information Optimization\nService Listing Optimization\nBusiness Category Optimization\nPhotos & Visual Content\nLocal Search-Focused Website Content',
    seoApproach: 'Designed and developed a professional website for Smart View TV Repair to showcase its TV repair services, service information and contact details in a clear and user-friendly format.\nWebsite Design & Development\nService Page Structuring\nWebsite Content Structuring\nMobile Responsive Design\nContact Information Integration',
    adsApproach: 'Local SEO\nGoogle Business Profile Optimization\nLocal Business Information Management\nWebsite Design & Development\nService Page Structuring\nWebsite Content Structuring\nMobile Responsive Website',
    expectedGoal: 'Google Business Profile → Local Search → Service Website → Customer Enquiries',
    tags: ['Local SEO'],
    coverImage: smartViewCover,
  },
  {
    id: 'attitude-academy',
    title: 'ATTITUDE ACADEMY',
    type: 'Client Project',
    category: 'Off-Page SEO',
    services: 'Off-Page SEO • Link Building • SEO Authority Building',
    description: "Off-page SEO work focused on strengthening Attitude Academy's online presence through link-building and external SEO activities.",
    challenge: "The goal was to strengthen Attitude Academy's online presence through off-page SEO activities and build a stronger backlink profile for its education and training website.",
    strategy: "The off-page SEO strategy focused on building relevant links and improving the website's overall authority through targeted link-building and external SEO activities.",
    contentApproach: 'Off-Page SEO\n• Backlink Research\n• Link Building\n• Off-Page SEO Activities\n• Link Quality & Relevance Research\n• Competitor Backlink Research\n• Anchor Text Planning',
    seoApproach: 'Backlink Research\nContent & Submission Activities\nLink Building\nAuthority Building\nSEO Growth',
    adsApproach: '',
    expectedGoal: 'Backlink Research → Content & Submission Activities → Link Building → Authority Building → SEO Growth',
    tags: ['Off-Page SEO', 'SEO'],
    coverImage: offPageCover,
    gallery: [
      { num: '01', label: 'Blog Submission', description: 'A blog submission record from the off-page SEO work.', image: offPageBlogSubmission },
      { num: '02', label: 'Social Bookmarking', description: 'A social bookmarking submission record.', image: offPageSocialBookmarking },
      { num: '03', label: 'Backlink Research', description: 'A backlink research sheet used to organize off-page SEO work.', image: offPageBacklinks },
      { num: '04', label: 'Submission Calendar', description: 'A calendar sheet supporting the planning of submission activities.', image: offPageCalendar },
    ],
    offPageActivities: [
      { num: '01', name: 'PPT Submission', image: attitudeAcademyPptCover, file: attitudeAcademyPpt },
      { num: '02', name: 'Blog Submission', image: offPageBlogSubmission },
      { num: '03', name: 'Social Bookmarking', image: offPageSocialBookmarking },
      { num: '04', name: 'Backlink Building', image: offPageBacklinks },
      { num: '05', name: 'Link Building', image: offPageBacklinks },
      { num: '06', name: 'PDF Submission' },
      { num: '07', name: 'Infographic Submission', image: attitudeAcademyInfographicCover },
    ],
  },
];

/* ---------- Process steps ---------- */
export const processSteps = [
  { num: '01', title: 'Understand', desc: 'Understand your business, audience and goals.' },
  { num: '02', title: 'Research', desc: 'Research competitors, keywords and audience behavior.' },
  { num: '03', title: 'Strategy', desc: 'Build the content, SEO and advertising strategy.' },
  { num: '04', title: 'Execute', desc: 'Create, publish, optimize and manage campaigns.' },
  { num: '05', title: 'Improve', desc: 'Review performance and continuously improve the strategy.' },
];

/* ---------- Tools ---------- */
export const tools = [
  'Canva',
  'Google Analytics',
  'Google Search Console',
  'Google Business Profile',
  'Meta Ads Manager',
  'Google Ads',
  'WordPress',
  'Google Keyword Planner',
];

/* ---------- FAQ ---------- */
export const faqs = [
  {
    q: 'Do you work with small businesses?',
    a: 'Yes. I can create a marketing approach based on the business size, goals and available budget.',
  },
  {
    q: 'Do you provide monthly social media management?',
    a: 'Yes, depending on the required platforms, content volume and scope.',
  },
  {
    q: 'Can you manage paid ads?',
    a: 'Yes. I can help with Meta Ads and Google Ads, including campaign setup, targeting, creative direction and optimization.',
  },
  {
    q: 'Do you provide SEO?',
    a: 'Yes. SEO work can include keyword research, on-page SEO, off-page SEO, technical SEO, content strategy, and local SEO depending on the website and business goals.',
  },
  {
    q: 'Can we start with a small project?',
    a: 'Yes. If you are trying my services for the first time, we can begin with a clearly defined small project.',
  },
];

/* ---------- Social links (for footer/contact) ---------- */
export const socialLinks = [
  { label: 'Instagram', icon: Instagram, href: contact.instagram },
  { label: 'LinkedIn', icon: Linkedin, href: contact.linkedin },
  { label: 'WhatsApp', icon: MessageCircle, href: contact.whatsapp },
  { label: 'Email', icon: Mail, href: `mailto:${contact.email}` },
];
