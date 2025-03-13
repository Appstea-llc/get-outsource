
export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: 'e-commerce-platform',
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=80',
    description: 'A comprehensive e-commerce solution for a European fashion retailer with multi-language support and integrated payment processing.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'i18n'],
    link: '/portfolio/e-commerce-platform',
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Dashboard',
    category: 'UI/UX Design & Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=80',
    description: 'An intuitive dashboard interface for a SaaS project management tool used by teams across 15+ countries.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Data Visualization', 'UX Design'],
    link: '/portfolio/saas-dashboard',
  },
  {
    id: 'multilingual-mobile-app',
    title: 'Multilingual Mobile App',
    category: 'Mobile Development & Translation',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=80',
    description: 'A travel companion app available in 8 European languages with offline capabilities and local recommendations.',
    tags: ['React Native', 'Firebase', 'i18n', 'Content Translation', 'Offline Support'],
    link: '/portfolio/multilingual-mobile-app',
  },
  {
    id: 'marketing-campaign',
    title: 'Marketing Campaign',
    category: 'Digital Marketing',
    image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=80',
    description: 'A full-scale marketing campaign for a software product launch targeting the German, French, and Spanish markets.',
    tags: ['SEO', 'Content Strategy', 'Analytics', 'Email Marketing', 'Social Media'],
    link: '/portfolio/marketing-campaign',
  },
  {
    id: 'corporate-website-localization',
    title: 'Corporate Website Localization',
    category: 'Translation & Development',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=80',
    description: 'Complete localization of a corporate website into 12 European languages with SEO optimization for each market.',
    tags: ['Website Translation', 'SEO', 'Content Adaptation', 'CMS Integration', 'Multilingual SEO'],
    link: '/portfolio/corporate-website-localization',
  },
  {
    id: 'fintech-mobile-application',
    title: 'Fintech Mobile Application',
    category: 'App Development',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=80',
    description: 'A secure mobile banking application with advanced features and compliance with European financial regulations.',
    tags: ['Flutter', 'Financial APIs', 'Security', 'UX Design', 'Compliance'],
    link: '/portfolio/fintech-mobile-application',
  },
];
