
import { useEffect } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/ui/ContactForm';
import FadeIn from '@/components/animations/FadeIn';

const openPositions = [
  {
    id: 'senior-react-developer',
    title: 'Senior React Developer',
    location: 'Prague / Remote',
    type: 'Full-time',
    department: 'Development',
  },
  {
    id: 'ux-designer',
    title: 'UX Designer',
    location: 'Warsaw / Remote',
    type: 'Full-time',
    department: 'Design',
  },
  {
    id: 'project-manager',
    title: 'Project Manager',
    location: 'Berlin / Remote',
    type: 'Full-time',
    department: 'Operations',
  },
  {
    id: 'content-strategist',
    title: 'Content Strategist',
    location: 'Remote (EU)',
    type: 'Full-time',
    department: 'Marketing',
  },
  {
    id: 'english-german-translator',
    title: 'English-German Translator',
    location: 'Remote (EU)',
    type: 'Contract / Part-time',
    department: 'Translation',
  },
  {
    id: 'business-development',
    title: 'Business Development Representative',
    location: 'Prague / Remote',
    type: 'Full-time',
    department: 'Sales',
  },
];

const benefits = [
  {
    title: 'Remote-First Culture',
    description: 'Work from anywhere in Europe with flexible hours that suit your lifestyle.',
  },
  {
    title: 'Professional Growth',
    description: 'Continuous learning opportunities, mentorship, and career advancement paths.',
  },
  {
    title: 'Competitive Compensation',
    description: 'Above-market salary packages with performance bonuses and profit sharing.',
  },
  {
    title: 'Work-Life Balance',
    description: 'Generous paid time off, mental health days, and flexible working hours.',
  },
  {
    title: 'Learning Budget',
    description: 'Annual budget for courses, books, conferences, and professional development.',
  },
  {
    title: 'Team Events',
    description: 'Regular virtual team events and in-person meetups across Europe.',
  },
];

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Careers - Get Outsource';
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
                  Join Our Team
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-go-neutral-900">
                  Build Your Career With Us
                </h1>
                <p className="text-go-neutral-600 text-lg mb-8">
                  Join our diverse team of professionals and help deliver exceptional services to clients worldwide.
                </p>
                <Link 
                  to="#open-positions" 
                  className="bg-go-blue-500 hover:bg-go-blue-600 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 inline-block shadow-md hover:shadow-lg"
                >
                  View Open Positions
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FadeIn direction="right">
                <div className="bg-go-neutral-200 rounded-lg aspect-square relative overflow-hidden">
                  {/* Placeholder for image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-go-blue-600/20 to-go-blue-800/40"></div>
                </div>
              </FadeIn>
              
              <FadeIn direction="left">
                <div>
                  <span className="inline-block py-1 px-3 rounded-full bg-go-blue-100 text-go-blue-700 text-sm font-medium mb-4">
                    Why Join Us
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-go-neutral-900">
                    We're Building Something Special
                  </h2>
                  <p className="text-go-neutral-600 mb-6">
                    At Get Outsource, we're proud of the collaborative, innovative culture we've built. Our team spans across Europe, bringing together diverse perspectives and skills to deliver exceptional work for our clients.
                  </p>
                  <p className="text-go-neutral-600 mb-8">
                    We believe in empowering our people with the flexibility, resources, and support they need to do their best work, develop their skills, and advance their careers.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex">
                      <div className="bg-go-blue-100 p-1 rounded-full inline-flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-go-blue-700" />
                      </div>
                      <p className="text-go-neutral-700">Remote-first company with team members across Europe</p>
                    </div>
                    <div className="flex">
                      <div className="bg-go-blue-100 p-1 rounded-full inline-flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-go-blue-700" />
                      </div>
                      <p className="text-go-neutral-700">Challenging projects for global clients</p>
                    </div>
                    <div className="flex">
                      <div className="bg-go-blue-100 p-1 rounded-full inline-flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-go-blue-700" />
                      </div>
                      <p className="text-go-neutral-700">Continuous learning and professional development</p>
                    </div>
                    <div className="flex">
                      <div className="bg-go-blue-100 p-1 rounded-full inline-flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-go-blue-700" />
                      </div>
                      <p className="text-go-neutral-700">Supportive environment focused on work-life balance</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-go-neutral-50">
          <div className="container-custom">
            <FadeIn direction="up">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="inline-block py-1 px-3 rounded-full bg-go-blue-100 text-go-blue-700 text-sm font-medium mb-4">
                  Our Benefits
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-go-neutral-900">
                  What We Offer
                </h2>
                <p className="text-go-neutral-600 text-lg">
                  We provide more than just a job — we offer a career with comprehensive benefits to support your growth and wellbeing.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <FadeIn key={index} direction="up" delay={index * 100}>
                  <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                    <h3 className="text-xl font-bold mb-3 text-go-neutral-900">{benefit.title}</h3>
                    <p className="text-go-neutral-600">{benefit.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-20 bg-white">
          <div className="container-custom">
            <FadeIn direction="up">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="inline-block py-1 px-3 rounded-full bg-go-blue-100 text-go-blue-700 text-sm font-medium mb-4">
                  Open Roles
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-go-neutral-900">
                  Current Opportunities
                </h2>
                <p className="text-go-neutral-600 text-lg">
                  Explore our current job openings and find the perfect role for your skills and career goals.
                </p>
              </div>
            </FadeIn>

            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <FadeIn key={position.id} direction="up" delay={index * 100}>
                  <Link to={`/careers/${position.id}`} className="group block">
                    <div className="bg-go-neutral-50 p-6 rounded-xl border border-go-neutral-100 hover:border-go-blue-200 hover:bg-go-blue-50/30 transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-go-neutral-900 group-hover:text-go-blue-600 transition-colors duration-300">
                            {position.title}
                          </h3>
                          <div className="flex flex-wrap gap-4 mt-2">
                            <span className="text-go-neutral-500 text-sm flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {position.location}
                            </span>
                            <span className="text-go-neutral-500 text-sm flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {position.type}
                            </span>
                            <span className="text-go-neutral-500 text-sm flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                              {position.department}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center mt-4 md:mt-0">
                          <span className="text-go-blue-600 font-medium group-hover:text-go-blue-700 transition-colors duration-300 flex items-center">
                            View Position
                            <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>

            <FadeIn direction="up" delay={300}>
              <div className="text-center mt-12">
                <p className="text-go-neutral-600 mb-6">
                  Don't see a position that matches your skills? We're always looking for talented individuals to join our team.
                </p>
                <a 
                  href="#general-application" 
                  className="inline-flex items-center text-go-blue-600 font-medium hover:text-go-blue-700 transition-colors duration-300"
                >
                  Submit a General Application
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Application Form */}
        <section id="general-application" className="py-24 bg-go-neutral-900">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <FadeIn direction="up">
                <div className="text-center mb-16">
                  <span className="inline-block py-1 px-3 rounded-full bg-go-blue-700/30 text-go-blue-300 text-sm font-medium mb-4">
                    Apply Now
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Join Our Talented Team
                  </h2>
                  <p className="text-go-neutral-300 text-lg max-w-2xl mx-auto">
                    Ready to take the next step in your career? Fill out the form below to apply for a position or express general interest in joining our team.
                  </p>
                </div>
              </FadeIn>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
                <ContactForm 
                  title="Application Form" 
                  subtitle="Tell us about yourself and how you can contribute to our team."
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

export default Careers;
