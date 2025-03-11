
import { useEffect } from 'react';
import { Check, Paintbrush, Monitor, Smartphone, Figma, Layers, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/ui/ContactForm';
import FadeIn from '@/components/animations/FadeIn';

const Design = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'UI/UX Design - Get Outsource';
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
                  UI/UX Design
                </h1>
                <p className="text-go-neutral-600 text-lg mb-8">
                  User-centered design services focused on creating beautiful, intuitive, and functional interfaces.
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
                    Design that Delights Users
                  </h2>
                  <p className="text-go-neutral-600 text-lg mb-6">
                    Our UI/UX design team creates intuitive, engaging, and user-centered digital experiences that help businesses connect with their customers. We focus on understanding user needs and business goals to design interfaces that are both beautiful and functional.
                  </p>
                  
                  <ul className="space-y-4">
                    <li className="flex">
                      <div className="bg-go-blue-100 p-1 rounded-full inline-flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-go-blue-700" />
                      </div>
                      <div>
                        <p className="text-go-neutral-700">User-centered design approach</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="bg-go-blue-100 p-1 rounded-full inline-flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-go-blue-700" />
                      </div>
                      <div>
                        <p className="text-go-neutral-700">Intuitive and accessible interfaces</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="bg-go-blue-100 p-1 rounded-full inline-flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-go-blue-700" />
                      </div>
                      <div>
                        <p className="text-go-neutral-700">Research-backed design decisions</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="bg-go-blue-100 p-1 rounded-full inline-flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-go-blue-700" />
                      </div>
                      <div>
                        <p className="text-go-neutral-700">Seamless collaboration with development teams</p>
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
                  Comprehensive Design Solutions
                </h2>
                <p className="text-go-neutral-600 text-lg">
                  From user research to visual design, we offer a full range of UI/UX design services.
                </p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Monitor className="w-6 h-6" />,
                  title: "Web UI/UX Design",
                  description: "User-friendly website and web application designs that provide seamless experiences across devices and platforms."
                },
                {
                  icon: <Smartphone className="w-6 h-6" />,
                  title: "Mobile App Design",
                  description: "Intuitive mobile app interfaces that engage users and meet platform-specific design guidelines for iOS and Android."
                },
                {
                  icon: <Layers className="w-6 h-6" />,
                  title: "User Research & Testing",
                  description: "In-depth user research and usability testing to validate design decisions and improve user experiences."
                },
                {
                  icon: <Figma className="w-6 h-6" />,
                  title: "Prototyping",
                  description: "Interactive prototypes that demonstrate functionality and flow, allowing for early testing and feedback."
                },
                {
                  icon: <PenTool className="w-6 h-6" />,
                  title: "Brand Identity Design",
                  description: "Cohesive brand identity systems including logos, typography, color palettes, and design guidelines."
                },
                {
                  icon: <Paintbrush className="w-6 h-6" />,
                  title: "Design Systems",
                  description: "Scalable design systems that ensure consistency across products and facilitate efficient collaboration between design and development."
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
        
        {/* Design Process */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <FadeIn direction="up">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="inline-block py-1 px-3 rounded-full bg-go-blue-100 text-go-blue-700 text-sm font-medium mb-4">
                  Our Process
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-go-neutral-900">
                  Our Design Process
                </h2>
                <p className="text-go-neutral-600 text-lg">
                  We follow a systematic approach to ensure our designs meet user needs and business goals.
                </p>
              </div>
            </FadeIn>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { 
                    step: "01", 
                    title: "Research", 
                    description: "We conduct user research, competitive analysis, and stakeholder interviews to understand the problem space." 
                  },
                  { 
                    step: "02", 
                    title: "Ideation", 
                    description: "Our team explores multiple design concepts and approaches through sketches, wireframes, and user flows." 
                  },
                  { 
                    step: "03", 
                    title: "Design", 
                    description: "We create high-fidelity designs and interactive prototypes that bring the concept to life." 
                  },
                  { 
                    step: "04", 
                    title: "Testing & Iteration", 
                    description: "We validate designs through user testing and iterate based on feedback to refine the user experience." 
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
        
        {/* Design Principles */}
        <section className="py-20 bg-go-neutral-50">
          <div className="container-custom">
            <FadeIn direction="up">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="inline-block py-1 px-3 rounded-full bg-go-blue-100 text-go-blue-700 text-sm font-medium mb-4">
                  Our Principles
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-go-neutral-900">
                  Design Principles We Live By
                </h2>
                <p className="text-go-neutral-600 text-lg">
                  These core principles guide our design decisions and ensure we create exceptional user experiences.
                </p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "User-Centered",
                  description: "We place users at the center of our design process, focusing on their needs, goals, and pain points to create solutions that truly work for them."
                },
                {
                  title: "Clear & Consistent",
                  description: "We design intuitive interfaces with consistent patterns and clear visual hierarchy to help users navigate and complete tasks effortlessly."
                },
                {
                  title: "Accessible & Inclusive",
                  description: "We create designs that are accessible to all users, including those with disabilities, ensuring everyone can use our digital products effectively."
                }
              ].map((principle, index) => (
                <FadeIn key={index} direction="up" delay={index * 100}>
                  <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                    <div className="bg-go-blue-100 p-3 rounded-lg inline-flex items-center justify-center mb-6 text-go-blue-700">
                      <span className="text-2xl font-bold">0{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-go-neutral-900">{principle.title}</h3>
                    <p className="text-go-neutral-600">{principle.description}</p>
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
                    Ready to Transform Your User Experience?
                  </h2>
                  <p className="text-go-neutral-300 text-lg max-w-2xl mx-auto">
                    Contact us today to discuss your design needs and see how our team can help create intuitive, engaging digital experiences for your users.
                  </p>
                </div>
              </FadeIn>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
                <ContactForm 
                  title="Let's Discuss Your Design Project" 
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

export default Design;
