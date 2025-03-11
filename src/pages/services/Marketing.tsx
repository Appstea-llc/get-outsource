
import { useEffect } from 'react';
import { Check, BarChart, LineChart, TrendingUp, Share, Mail, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/ui/ContactForm';
import FadeIn from '@/components/animations/FadeIn';

const Marketing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Digital Marketing - Get Outsource';
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
                  Our Services
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-go-neutral-900">
                  Digital Marketing
                </h1>
                <p className="text-go-neutral-600 text-lg mb-8">
                  Result-driven digital marketing strategies to help your business grow online and reach new customers.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
        
        {/* Service Overview */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FadeIn direction="right">
                <div className="bg-go-neutral-200 rounded-lg aspect-video relative overflow-hidden">
                  {/* Placeholder for image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-go-blue-600/20 to-go-blue-800/40"></div>
                </div>
              </FadeIn>
              
              <FadeIn direction="left">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-go-neutral-900">
                    Grow Your Business Online
                  </h2>
                  <p className="text-go-neutral-600 text-lg mb-6">
                    Our digital marketing experts create and implement strategies that connect your brand with your target audience, drive engagement, and generate measurable results. We take a data-driven approach to optimize your marketing efforts and maximize ROI.
                  </p>
                  
                  <ul className="space-y-4">
                    <li className="flex">
                      <div className="bg-go-blue-100 p-1 rounded-full inline-flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-go-blue-700" />
                      </div>
                      <div>
                        <p className="text-go-neutral-700">Targeted campaigns that reach your ideal customers</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="bg-go-blue-100 p-1 rounded-full inline-flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-go-blue-700" />
                      </div>
                      <div>
                        <p className="text-go-neutral-700">Multi-channel marketing strategies</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="bg-go-blue-100 p-1 rounded-full inline-flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-go-blue-700" />
                      </div>
                      <div>
                        <p className="text-go-neutral-700">Data-driven approach with regular reporting</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="bg-go-blue-100 p-1 rounded-full inline-flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-go-blue-700" />
                      </div>
                      <div>
                        <p className="text-go-neutral-700">Continuous optimization for maximum ROI</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
        
        {/* Services Offered */}
        <section className="py-20 bg-go-neutral-50">
          <div className="container-custom">
            <FadeIn direction="up">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="inline-block py-1 px-3 rounded-full bg-go-blue-100 text-go-blue-700 text-sm font-medium mb-4">
                  Services We Offer
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-go-neutral-900">
                  Comprehensive Marketing Solutions
                </h2>
                <p className="text-go-neutral-600 text-lg">
                  From search engine optimization to social media management, we offer a full range of digital marketing services.
                </p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Search className="w-6 h-6" />,
                  title: "Search Engine Optimization",
                  description: "Improve your website's visibility in search engine results and drive organic traffic with our comprehensive SEO strategies."
                },
                {
                  icon: <BarChart className="w-6 h-6" />,
                  title: "Paid Advertising",
                  description: "Targeted pay-per-click campaigns across Google, Bing, and social media platforms to drive immediate traffic and conversions."
                },
                {
                  icon: <Share className="w-6 h-6" />,
                  title: "Social Media Marketing",
                  description: "Engage with your audience and build brand awareness through effective social media strategies across all major platforms."
                },
                {
                  icon: <Mail className="w-6 h-6" />,
                  title: "Email Marketing",
                  description: "Build relationships with your customers and drive repeat business with targeted, personalized email campaigns."
                },
                {
                  icon: <LineChart className="w-6 h-6" />,
                  title: "Analytics & Reporting",
                  description: "Track and measure the performance of your marketing campaigns with comprehensive analytics and regular reporting."
                },
                {
                  icon: <TrendingUp className="w-6 h-6" />,
                  title: "Content Marketing",
                  description: "Create valuable, relevant content that attracts and engages your target audience while establishing your brand as an industry authority."
                }
              ].map((service, index) => (
                <FadeIn key={index} direction="up" delay={index * 100}>
                  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                    <div className="bg-go-blue-100 p-3 rounded-lg inline-block mb-6 text-go-blue-700">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-go-neutral-900">
                      {service.title}
                    </h3>
                    <p className="text-go-neutral-600">
                      {service.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
        
        {/* Marketing Process */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <FadeIn direction="up">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="inline-block py-1 px-3 rounded-full bg-go-blue-100 text-go-blue-700 text-sm font-medium mb-4">
                  Our Process
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-go-neutral-900">
                  How We Approach Marketing
                </h2>
                <p className="text-go-neutral-600 text-lg">
                  Our marketing process is designed to deliver consistent results and continuous improvement.
                </p>
              </div>
            </FadeIn>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { 
                    step: "01", 
                    title: "Research & Strategy", 
                    description: "We analyze your business, competitors, and target audience to develop a tailored marketing strategy aligned with your goals." 
                  },
                  { 
                    step: "02", 
                    title: "Implementation", 
                    description: "Our team executes the strategy across all relevant channels, creating compelling content and campaigns that resonate with your audience." 
                  },
                  { 
                    step: "03", 
                    title: "Analysis & Optimization", 
                    description: "We continuously monitor performance, analyze data, and optimize campaigns to maximize results and return on investment." 
                  }
                ].map((step, index) => (
                  <FadeIn key={index} direction="up" delay={index * 100}>
                    <div className="bg-go-neutral-50 p-8 rounded-xl shadow-sm h-full">
                      <div className="text-4xl font-bold text-go-blue-200 mb-4">{step.step}</div>
                      <h3 className="text-xl font-bold mb-3 text-go-neutral-900">{step.title}</h3>
                      <p className="text-go-neutral-600">{step.description}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Case Study Highlight */}
        <section className="py-20 bg-go-neutral-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 bg-white rounded-2xl overflow-hidden shadow-md">
              <div className="lg:col-span-2 bg-go-neutral-200 min-h-[300px] lg:min-h-full relative">
                {/* Placeholder for case study image */}
                <div className="absolute inset-0 bg-gradient-to-br from-go-blue-600/20 to-go-blue-800/40"></div>
              </div>
              <div className="lg:col-span-3 p-8 md:p-12">
                <span className="inline-block py-1 px-3 rounded-full bg-go-blue-100 text-go-blue-700 text-sm font-medium mb-4">
                  Case Study
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-go-neutral-900">
                  How We Increased E-commerce Sales by 150% in 6 Months
                </h2>
                <p className="text-go-neutral-600 mb-6">
                  Learn how our comprehensive digital marketing strategy helped a European online retailer dramatically increase their sales and market presence across multiple countries.
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex">
                    <div className="bg-go-blue-100 p-1 rounded-full inline-flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-go-blue-700" />
                    </div>
                    <div>
                      <p className="text-go-neutral-700">150% increase in online sales within 6 months</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-go-blue-100 p-1 rounded-full inline-flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-go-blue-700" />
                    </div>
                    <div>
                      <p className="text-go-neutral-700">200% increase in organic search traffic</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-go-blue-100 p-1 rounded-full inline-flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-go-blue-700" />
                    </div>
                    <div>
                      <p className="text-go-neutral-700">75% improvement in conversion rate</p>
                    </div>
                  </li>
                </ul>
                <Link 
                  to="/portfolio/marketing-campaign" 
                  className="inline-flex items-center text-go-blue-600 font-medium hover:text-go-blue-700 transition-colors duration-300"
                >
                  Read Full Case Study
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
                </Link>
              </div>
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
                    Get Started
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Ready to Grow Your Business Online?
                  </h2>
                  <p className="text-go-neutral-300 text-lg max-w-2xl mx-auto">
                    Contact us today to discuss your marketing goals and see how our team can help you reach more customers and drive business growth.
                  </p>
                </div>
              </FadeIn>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
                <ContactForm 
                  title="Let's Discuss Your Marketing Needs" 
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

export default Marketing;
