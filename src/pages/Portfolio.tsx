
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/ui/ContactForm';
import FadeIn from '@/components/animations/FadeIn';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Portfolio - Get Outsource';
  }, []);

  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: '1',
      title: 'E-commerce Platform',
      category: 'web-development',
      description: 'A full-featured e-commerce platform with multiple payment gateways and inventory management.',
      image: '',
    },
    {
      id: '2',
      title: 'SaaS Dashboard',
      category: 'ui-ux-design',
      description: 'User-friendly dashboard for a SaaS company with intuitive analytics visualizations.',
      image: '',
    },
    {
      id: '3',
      title: 'Mobile Banking App',
      category: 'mobile-development',
      description: 'Secure and intuitive mobile banking application with biometric authentication.',
      image: '',
    },
    {
      id: '4',
      title: 'Digital Marketing Campaign',
      category: 'digital-marketing',
      description: 'Comprehensive digital marketing campaign that increased client conversion by 40%.',
      image: '',
    },
    {
      id: '5',
      title: 'Multilingual Corporate Website',
      category: 'translation',
      description: 'Corporate website translated into 12 languages with localized content for each market.',
      image: '',
    },
    {
      id: '6',
      title: 'Healthcare Management System',
      category: 'web-development',
      description: 'Comprehensive healthcare management system for hospitals and clinics.',
      image: '',
    },
    {
      id: '7',
      title: 'Travel Booking Platform',
      category: 'ui-ux-design',
      description: 'User-centered design for a travel booking platform focused on experience and conversion.',
      image: '',
    },
    {
      id: '8',
      title: 'Social Media Strategy',
      category: 'digital-marketing',
      description: 'Comprehensive social media strategy that increased brand engagement by 60%.',
      image: '',
    },
  ];

  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'web-development', label: 'Web Development' },
    { value: 'mobile-development', label: 'Mobile Development' },
    { value: 'ui-ux-design', label: 'UI/UX Design' },
    { value: 'digital-marketing', label: 'Digital Marketing' },
    { value: 'translation', label: 'Translation' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="page-transition-enter">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-go-blue-100 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-go-blue-300 rounded-full blur-3xl opacity-10"></div>
          </div>
          
          <div className="container-custom">
            <FadeIn direction="up">
              <div className="text-center max-w-3xl mx-auto mb-0">
                <span className="inline-block py-1 px-3 rounded-full bg-go-blue-100 text-go-blue-700 text-sm font-medium mb-4">
                  Our Portfolio
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                  Our Successful Projects
                </h1>
                <p className="text-xl text-go-neutral-600">
                  Explore our diverse portfolio of projects across various industries and technologies.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
        
        {/* Filters */}
        <section className="py-4 bg-white sticky top-20 z-30 border-b border-go-neutral-200 backdrop-blur-sm bg-white/90">
          <div className="container-custom">
            <div className="flex justify-center flex-wrap gap-4">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  className={`py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter.value 
                      ? 'bg-go-blue-500 text-white shadow-md' 
                      : 'bg-go-neutral-100 text-go-neutral-700 hover:bg-go-neutral-200'
                  }`}
                  onClick={() => setActiveFilter(filter.value)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Projects */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <FadeIn key={project.id} direction="up" delay={index * 100}>
                  <Link to={`/portfolio/${project.id}`} className="group">
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                      <div className="aspect-[4/3] bg-go-neutral-200 relative overflow-hidden">
                        {/* Project image placeholder */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <span className="text-sm font-medium text-go-blue-600 mb-2">
                          {filters.find(f => f.value === project.category)?.label || project.category}
                        </span>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-go-blue-600 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-go-neutral-600 mb-4 flex-grow">
                          {project.description}
                        </p>
                        <div className="flex items-center font-medium text-go-blue-600 group-hover:text-go-blue-700 transition-colors duration-300">
                          View Case Study
                          <svg
                            className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Form */}
        <section className="py-20 bg-go-neutral-900">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <FadeIn direction="up">
                <div className="text-center mb-12">
                  <span className="inline-block py-1 px-3 rounded-full bg-go-blue-700/30 text-go-blue-300 text-sm font-medium mb-4">
                    Start a Project
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    Ready to Build Something Amazing?
                  </h2>
                  <p className="text-go-neutral-300 text-lg max-w-2xl mx-auto">
                    Let's discuss how we can help bring your vision to life with our expertise and experience.
                  </p>
                </div>
              </FadeIn>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
                <ContactForm variant="light" />
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
