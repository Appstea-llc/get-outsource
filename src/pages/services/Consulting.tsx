
import { useEffect } from 'react';
import { Check, BrainCircuit, LightbulbIcon, Target, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/ui/ContactForm';
import FadeIn from '@/components/animations/FadeIn';

const Consulting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Consulting Services - Get Outsource';
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
                  Consulting Services
                </h1>
                <p className="text-go-neutral-600 text-lg mb-8">
                  Expert consulting services to help you navigate complex business and technical challenges.
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
                    Strategic Guidance for Your Business
                  </h2>
                  <p className="text-go-neutral-600 text-lg mb-6">
                    Our consulting team offers expert advice and strategic guidance to help businesses solve complex challenges, optimize operations, and achieve their growth objectives. With deep industry knowledge and practical experience, we provide insights and recommendations that drive tangible results.
                  </p>
                  
                  <ul className="space-y-4">
                    <li className="flex">
                      <div className="bg-go-blue-100 p-1 rounded-full inline-flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-go-blue-700" />
                      </div>
                      <div>
                        <p className="text-go-neutral-700">Expert consultants with deep industry knowledge</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="bg-go-blue-100 p-1 rounded-full inline-flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-go-blue-700" />
                      </div>
                      <div>
                        <p className="text-go-neutral-700">Data-driven insights and recommendations</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="bg-go-blue-100 p-1 rounded-full inline-flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-go-blue-700" />
                      </div>
                      <div>
                        <p className="text-go-neutral-700">Practical solutions to complex challenges</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="bg-go-blue-100 p-1 rounded-full inline-flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-go-blue-700" />
                      </div>
                      <div>
                        <p className="text-go-neutral-700">European and global market expertise</p>
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
                  Comprehensive Consulting Solutions
                </h2>
                <p className="text-go-neutral-600 text-lg">
                  From business strategy to technical implementation, we offer a wide range of consulting services.
                </p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Target className="w-6 h-6" />,
                  title: "Business Strategy",
                  description: "Development of comprehensive business strategies aligned with your goals, market conditions, and competitive landscape."
                },
                {
                  icon: <BrainCircuit className="w-6 h-6" />,
                  title: "Digital Transformation",
                  description: "Guidance on leveraging technology to transform your business operations, customer experience, and business models."
                },
                {
                  icon: <TrendingUp className="w-6 h-6" />,
                  title: "Market Expansion",
                  description: "Expert advice on entering new markets, including market research, localization strategies, and regulatory compliance."
                },
                {
                  icon: <LightbulbIcon className="w-6 h-6" />,
                  title: "Innovation Consulting",
                  description: "Support for fostering innovation within your organization, from idea generation to implementation and scaling."
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Organizational Development",
                  description: "Strategies for building high-performing teams, optimizing organizational structure, and fostering a positive company culture."
                },
                {
                  icon: <BrainCircuit className="w-6 h-6" />,
                  title: "Technology Advisory",
                  description: "Expert guidance on technology selection, implementation, and optimization to support your business objectives."
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
        
        {/* How We Work */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <FadeIn direction="up">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="inline-block py-1 px-3 rounded-full bg-go-blue-100 text-go-blue-700 text-sm font-medium mb-4">
                  Our Approach
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-go-neutral-900">
                  How We Work With Clients
                </h2>
                <p className="text-go-neutral-600 text-lg">
                  Our consulting approach is collaborative, transparent, and focused on delivering tangible results.
                </p>
              </div>
            </FadeIn>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { 
                    step: "01", 
                    title: "Discover", 
                    description: "We begin by understanding your business, challenges, and objectives through in-depth discussions and research." 
                  },
                  { 
                    step: "02", 
                    title: "Analyze", 
                    description: "Our team conducts comprehensive analysis to identify opportunities, challenges, and potential solutions." 
                  },
                  { 
                    step: "03", 
                    title: "Recommend", 
                    description: "We deliver actionable recommendations and a clear implementation roadmap based on our analysis." 
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
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                {[
                  { 
                    step: "04", 
                    title: "Implement", 
                    description: "We work alongside your team to implement solutions and provide guidance throughout the process." 
                  },
                  { 
                    step: "05", 
                    title: "Measure", 
                    description: "Our team establishes metrics and tracking mechanisms to measure the impact of implemented solutions." 
                  },
                  { 
                    step: "06", 
                    title: "Optimize", 
                    description: "We continuously refine and optimize solutions based on performance data and changing business needs." 
                  }
                ].map((step, index) => (
                  <FadeIn key={index} direction="up" delay={(index + 3) * 100}>
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
        
        {/* Testimonials Section */}
        <section className="py-20 bg-go-neutral-50">
          <div className="container-custom">
            <FadeIn direction="up">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="inline-block py-1 px-3 rounded-full bg-go-blue-100 text-go-blue-700 text-sm font-medium mb-4">
                  Client Success
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-go-neutral-900">
                  What Our Clients Say
                </h2>
                <p className="text-go-neutral-600 text-lg">
                  Hear from businesses that have transformed their operations and achieved significant results with our consulting services.
                </p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote: "The strategic guidance provided by Get Outsource's consulting team helped us navigate a complex market entry into Western Europe. Their insights were invaluable to our success.",
                  name: "Sarah Johnson",
                  title: "CEO, TechStart GmbH",
                  company: "Technology"
                },
                {
                  quote: "Working with the consulting team at Get Outsource transformed our approach to digital transformation. They provided clear, actionable recommendations that delivered tangible results.",
                  name: "Marco Bianchi",
                  title: "Chief Innovation Officer, EuroRetail",
                  company: "Retail"
                }
              ].map((testimonial, index) => (
                <FadeIn key={index} direction="up" delay={index * 100}>
                  <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                    <div className="mb-6 text-go-blue-500">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.032a2.65 2.65 0 0 1 1.296-.97c.346-.078.636-.167.762-.267l.326-.267c.209-.182.28-.418.211-.699a.675.675 0 0 0-.188-.352 3.576 3.576 0 0 1-.348-.305 3.617 3.617 0 0 0-.347-.306c-.292-.224-.654-.27-1.077-.138-.495.154-.893.41-1.185.766a3.646 3.646 0 0 0-.554 1 4.633 4.633 0 0 0-.162 1.26c0 .45.035.934.105 1.447.07.513.243 1.087.519 1.723s.71 1.143 1.133 1.533c.424.39.995.585 1.712.585.496 0 .914-.12 1.253-.364.34-.242.631-.594.874-1.054.242-.46.363-.985.363-1.573zm6.484 0c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.032a2.65 2.65 0 0 1 1.296-.97c.346-.078.636-.167.762-.267l.326-.267c.209-.182.28-.418.211-.699a.675.675 0 0 0-.188-.352 3.576 3.576 0 0 1-.348-.305 3.617 3.617 0 0 0-.347-.306c-.292-.224-.654-.27-1.077-.138-.495.154-.893.41-1.185.766a3.646 3.646 0 0 0-.554 1 4.633 4.633 0 0 0-.162 1.26c0 .45.035.934.105 1.447.07.513.243 1.087.519 1.723s.71 1.143 1.133 1.533c.424.39.995.585 1.712.585.496 0 .914-.12 1.253-.364.34-.242.631-.594.874-1.054.242-.46.363-.985.363-1.573z" />
                      </svg>
                    </div>
                    <p className="text-go-neutral-700 text-lg italic mb-6">{testimonial.quote}</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-go-neutral-200 rounded-full mr-4"></div>
                      <div>
                        <h4 className="font-bold text-go-neutral-900">{testimonial.name}</h4>
                        <p className="text-go-neutral-600 text-sm">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
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
                    Get Started
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Ready to Transform Your Business?
                  </h2>
                  <p className="text-go-neutral-300 text-lg max-w-2xl mx-auto">
                    Contact us today to discuss your business challenges and see how our consulting team can help you achieve your goals.
                  </p>
                </div>
              </FadeIn>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
                <ContactForm 
                  title="Let's Discuss Your Business Needs" 
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

export default Consulting;
