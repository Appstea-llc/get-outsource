
import { useEffect } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/ui/ContactForm';
import FadeIn from '@/components/animations/FadeIn';

const projects = [
  {
    id: 'e-commerce-platform',
    title: 'E-commerce Platform',
    category: 'Web Development',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    description: 'A comprehensive e-commerce solution for a European fashion retailer with multi-language support and integrated payment processing.',
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Dashboard',
    category: 'UI/UX Design & Development',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Data Visualization'],
    description: 'An intuitive dashboard interface for a SaaS project management tool used by teams across 15+ countries.',
  },
  {
    id: 'multilingual-mobile-app',
    title: 'Multilingual Mobile App',
    category: 'Mobile Development & Translation',
    tags: ['React Native', 'i18n', 'Firebase', 'Content Translation'],
    description: 'A travel companion app available in 8 European languages with offline capabilities and local recommendations.',
  },
  {
    id: 'marketing-campaign',
    title: 'Marketing Campaign',
    category: 'Digital Marketing',
    tags: ['SEO', 'Content Strategy', 'Analytics', 'Email Marketing'],
    description: 'A full-scale marketing campaign for a software product launch targeting the German, French, and Spanish markets.',
  },
  {
    id: 'corporate-website-localization',
    title: 'Corporate Website Localization',
    category: 'Translation & Development',
    tags: ['Website Translation', 'SEO', 'Content Adaptation', 'CMS Integration'],
    description: 'Complete localization of a corporate website into 12 European languages with SEO optimization for each market.',
  },
  {
    id: 'fintech-mobile-application',
    title: 'Fintech Mobile Application',
    category: 'App Development',
    tags: ['Flutter', 'Financial APIs', 'Security', 'UX Design'],
    description: 'A secure mobile banking application with advanced features and compliance with European financial regulations.',
  },
];

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Portfolio - Get Outsource';
  }, []);
  
  return (
    <div className="page-transition-enter">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-go-neutral-100">
          <div className="container-custom">
            <FadeIn direction="up">
              <div className="max-w-3xl mx-auto text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-go-blue-100 text-go-blue-700 text-sm font-medium mb-4">
                  Our Work
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-go-neutral-900">
                  Portfolio of Excellence
                </h1>
                <p className="text-go-neutral-600 text-lg mb-8">
                  Explore our diverse portfolio of successful projects across development, marketing, and translation services.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
        
        {/* Portfolio Grid */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <FadeIn key={project.id} direction="up" delay={index * 100}>
                  <Link to={`/portfolio/${project.id}`} className="group block h-full">
                    <div className="bg-go-neutral-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                      <div className="aspect-video bg-go-neutral-200 relative overflow-hidden">
                        {/* Placeholder for project image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-go-blue-600/20 to-go-blue-800/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="text-sm text-go-blue-600 font-medium mb-2">
                          {project.category}
                        </div>
                        <h2 className="text-xl font-bold mb-3 text-go-neutral-900 group-hover:text-go-blue-600 transition-colors duration-300">
                          {project.title}
                        </h2>
                        <p className="text-go-neutral-600 mb-4 flex-grow">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, i) => (
                            <span key={i} className="inline-block px-3 py-1 bg-go-neutral-100 text-go-neutral-700 text-xs rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center text-go-blue-600 font-medium">
                          View Case Study
                          <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
        
        {/* Client Logos */}
        <section className="py-16 bg-go-neutral-50">
          <div className="container-custom">
            <FadeIn direction="up">
              <div className="text-center mb-12">
                <span className="inline-block py-1 px-3 rounded-full bg-go-blue-100 text-go-blue-700 text-sm font-medium mb-4">
                  Our Clients
                </span>
                <h2 className="text-3xl font-bold text-go-neutral-900">
                  Trusted by Companies Across Europe
                </h2>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {[...Array(6)].map((_, i) => (
                <FadeIn key={i} direction="up" delay={i * 100}>
                  <div className="h-12 bg-go-neutral-200 rounded-md mx-auto w-32"></div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-24 bg-go-neutral-900">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <FadeIn direction="up">
                <div className="text-center mb-16">
                  <span className="inline-block py-1 px-3 rounded-full bg-go-blue-700/30 text-go-blue-300 text-sm font-medium mb-4">
                    Start a Project
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Ready to Create Something Amazing?
                  </h2>
                  <p className="text-go-neutral-300 text-lg max-w-2xl mx-auto">
                    Tell us about your project needs and let's discuss how we can help bring your vision to life.
                  </p>
                </div>
              </FadeIn>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
                <ContactForm 
                  title="Let's Discuss Your Project" 
                  subtitle="Fill out the form below and our team will get back to you within 24 hours."
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
