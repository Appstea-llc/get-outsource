
import { useEffect } from 'react';
import { Check, Code, Globe, Laptop, Database, Phone, AppWindow } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/ui/ContactForm';
import FadeIn from '@/components/animations/FadeIn';

const Development = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Web & Mobile Development - Get Outsource';
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
                  Web & Mobile Development
                </h1>
                <p className="text-go-neutral-600 text-lg mb-8">
                  Full-stack development services for web and mobile applications, using the latest technologies and frameworks.
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
                    Cutting-edge Development Services
                  </h2>
                  <p className="text-go-neutral-600 text-lg mb-6">
                    Our team of experienced developers creates custom web and mobile applications that are scalable, performant, and user-friendly. We use the latest technologies and frameworks to deliver solutions that meet your business needs.
                  </p>
                  
                  <ul className="space-y-4">
                    <li className="flex">
                      <div className="bg-go-blue-100 p-1 rounded-full inline-flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-go-blue-700" />
                      </div>
                      <div>
                        <p className="text-go-neutral-700">Expert development team with extensive experience</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="bg-go-blue-100 p-1 rounded-full inline-flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-go-blue-700" />
                      </div>
                      <div>
                        <p className="text-go-neutral-700">Scalable, high-performance applications</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="bg-go-blue-100 p-1 rounded-full inline-flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-go-blue-700" />
                      </div>
                      <div>
                        <p className="text-go-neutral-700">Modern tech stack and best practices</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="bg-go-blue-100 p-1 rounded-full inline-flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-go-blue-700" />
                      </div>
                      <div>
                        <p className="text-go-neutral-700">Dedicated support and maintenance</p>
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
                  Comprehensive Development Solutions
                </h2>
                <p className="text-go-neutral-600 text-lg">
                  From front-end to back-end, we offer a full spectrum of development services tailored to your specific needs.
                </p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <AppWindow className="w-6 h-6" />,
                  title: "Web Application Development",
                  description: "Custom web applications built with modern frameworks like React, Vue, and Angular, with a focus on performance and user experience."
                },
                {
                  icon: <Phone className="w-6 h-6" />,
                  title: "Mobile App Development",
                  description: "Native and cross-platform mobile applications for iOS and Android using React Native, Flutter, and Swift."
                },
                {
                  icon: <Database className="w-6 h-6" />,
                  title: "Backend Development",
                  description: "Robust and scalable backend systems using Node.js, Python, Java, and other modern technologies."
                },
                {
                  icon: <Laptop className="w-6 h-6" />,
                  title: "E-commerce Solutions",
                  description: "Custom e-commerce platforms with seamless payment integration, inventory management, and user-friendly interfaces."
                },
                {
                  icon: <Globe className="w-6 h-6" />,
                  title: "PWA Development",
                  description: "Progressive Web Applications that provide native-like experiences with offline capabilities and fast loading times."
                },
                {
                  icon: <Code className="w-6 h-6" />,
                  title: "API Development & Integration",
                  description: "RESTful and GraphQL APIs that connect your systems and enable seamless data exchange between different platforms."
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
        
        {/* Technology Stack */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <FadeIn direction="up">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="inline-block py-1 px-3 rounded-full bg-go-blue-100 text-go-blue-700 text-sm font-medium mb-4">
                  Our Tech Stack
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-go-neutral-900">
                  Technologies We Use
                </h2>
                <p className="text-go-neutral-600 text-lg">
                  We leverage the latest technologies to deliver high-quality solutions that meet your business needs.
                </p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {['React', 'Node.js', 'TypeScript', 'Python', 'React Native', 'Flutter', 'Angular', 'Vue.js', 'Java', 'GraphQL', 'MongoDB', 'PostgreSQL'].map((tech, index) => (
                <FadeIn key={index} direction="up" delay={index * 50}>
                  <div className="bg-go-neutral-50 rounded-lg p-6 text-center hover:shadow-md transition-all duration-300">
                    <div className="h-12 bg-go-neutral-200 rounded-md mb-4 mx-auto w-12"></div>
                    <h3 className="text-go-neutral-800 font-medium">{tech}</h3>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
        
        {/* Development Process */}
        <section className="py-20 bg-go-neutral-50">
          <div className="container-custom">
            <FadeIn direction="up">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="inline-block py-1 px-3 rounded-full bg-go-blue-100 text-go-blue-700 text-sm font-medium mb-4">
                  Our Process
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-go-neutral-900">
                  How We Work
                </h2>
                <p className="text-go-neutral-600 text-lg">
                  Our development process is designed to ensure quality, transparency, and successful project delivery.
                </p>
              </div>
            </FadeIn>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {[
                  { step: "01", title: "Discovery & Requirements", description: "We start by understanding your business goals, target audience, and specific requirements." },
                  { step: "02", title: "Planning & Architecture", description: "Our team designs the architecture and creates a detailed project plan with milestones and deliverables." }
                ].map((step, index) => (
                  <FadeIn key={index} direction="up" delay={index * 100}>
                    <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                      <div className="text-4xl font-bold text-go-blue-200 mb-4">{step.step}</div>
                      <h3 className="text-xl font-bold mb-3 text-go-neutral-900">{step.title}</h3>
                      <p className="text-go-neutral-600">{step.description}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {[
                  { step: "03", title: "Development & Iteration", description: "Our developers build your solution in sprints, with regular updates and feedback sessions." },
                  { step: "04", title: "Testing & Quality Assurance", description: "We perform comprehensive testing to ensure your application is bug-free and performs optimally." }
                ].map((step, index) => (
                  <FadeIn key={index} direction="up" delay={(index + 2) * 100}>
                    <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                      <div className="text-4xl font-bold text-go-blue-200 mb-4">{step.step}</div>
                      <h3 className="text-xl font-bold mb-3 text-go-neutral-900">{step.title}</h3>
                      <p className="text-go-neutral-600">{step.description}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { step: "05", title: "Deployment & Launch", description: "We handle the deployment process and ensure a smooth launch of your application." },
                  { step: "06", title: "Maintenance & Support", description: "Our team provides ongoing support and maintenance to keep your application running smoothly." }
                ].map((step, index) => (
                  <FadeIn key={index} direction="up" delay={(index + 4) * 100}>
                    <div className="bg-white p-8 rounded-xl shadow-sm h-full">
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
                    Ready to Start Your Development Project?
                  </h2>
                  <p className="text-go-neutral-300 text-lg max-w-2xl mx-auto">
                    Contact us today to discuss your project requirements and see how our development team can help bring your vision to life.
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

export default Development;
