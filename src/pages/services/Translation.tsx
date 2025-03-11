
import { useEffect } from 'react';
import { Check, Globe, FileText, MessageSquare, BookOpen, LayoutGrid, FileCode } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/ui/ContactForm';
import FadeIn from '@/components/animations/FadeIn';

const Translation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Translation Services - Get Outsource';
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
                  Translation Services
                </h1>
                <p className="text-go-neutral-600 text-lg mb-8">
                  Professional translation services for all your content needs, delivered by native-speaking professionals.
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
                    Connect with Global Audiences
                  </h2>
                  <p className="text-go-neutral-600 text-lg mb-6">
                    Our team of native-speaking translators helps businesses communicate effectively with international audiences. We provide high-quality translation services that preserve the meaning, context, and tone of your original content while adapting it for different cultural contexts.
                  </p>
                  
                  <ul className="space-y-4">
                    <li className="flex">
                      <div className="bg-go-blue-100 p-1 rounded-full inline-flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-go-blue-700" />
                      </div>
                      <div>
                        <p className="text-go-neutral-700">Native-speaking professional translators</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="bg-go-blue-100 p-1 rounded-full inline-flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-go-blue-700" />
                      </div>
                      <div>
                        <p className="text-go-neutral-700">Coverage of all major European languages</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="bg-go-blue-100 p-1 rounded-full inline-flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-go-blue-700" />
                      </div>
                      <div>
                        <p className="text-go-neutral-700">Culturally adapted content that resonates with local audiences</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="bg-go-blue-100 p-1 rounded-full inline-flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-go-blue-700" />
                      </div>
                      <div>
                        <p className="text-go-neutral-700">Industry-specific expertise</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
        
        {/* Languages */}
        <section className="py-20 bg-go-neutral-50">
          <div className="container-custom">
            <FadeIn direction="up">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="inline-block py-1 px-3 rounded-full bg-go-blue-100 text-go-blue-700 text-sm font-medium mb-4">
                  Languages
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-go-neutral-900">
                  Languages We Support
                </h2>
                <p className="text-go-neutral-600 text-lg">
                  Our network of professional translators covers all major European languages and many more worldwide.
                </p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8">
              {[
                'English', 'German', 'French', 'Spanish', 'Italian', 'Portuguese',
                'Dutch', 'Swedish', 'Norwegian', 'Danish', 'Finnish', 'Polish',
                'Czech', 'Hungarian', 'Romanian', 'Bulgarian', 'Greek', 'Russian'
              ].map((language, index) => (
                <FadeIn key={index} direction="up" delay={index * 50}>
                  <div className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-all duration-300">
                    <div className="h-6 w-10 bg-go-neutral-200 rounded-sm mb-2 mx-auto"></div>
                    <h3 className="text-go-neutral-800 font-medium">{language}</h3>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
        
        {/* Services Offered */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <FadeIn direction="up">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="inline-block py-1 px-3 rounded-full bg-go-blue-100 text-go-blue-700 text-sm font-medium mb-4">
                  Services We Offer
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-go-neutral-900">
                  Comprehensive Translation Solutions
                </h2>
                <p className="text-go-neutral-600 text-lg">
                  From website localization to technical documentation, we offer a full range of translation services.
                </p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <LayoutGrid className="w-6 h-6" />,
                  title: "Website Localization",
                  description: "Complete translation and cultural adaptation of websites to ensure they resonate with local audiences and perform well in local search engines."
                },
                {
                  icon: <MessageSquare className="w-6 h-6" />,
                  title: "Marketing Content",
                  description: "Translation of marketing materials, including brochures, advertisements, social media content, and email campaigns."
                },
                {
                  icon: <FileText className="w-6 h-6" />,
                  title: "Legal Translation",
                  description: "Precise translation of legal documents, contracts, and agreements with attention to legal terminology and context."
                },
                {
                  icon: <FileCode className="w-6 h-6" />,
                  title: "Technical Documentation",
                  description: "Translation of user manuals, specifications, and technical documents with accurate industry-specific terminology."
                },
                {
                  icon: <BookOpen className="w-6 h-6" />,
                  title: "E-learning & Training",
                  description: "Translation of educational materials, courses, and training programs to support global learning initiatives."
                },
                {
                  icon: <Globe className="w-6 h-6" />,
                  title: "Software Localization",
                  description: "Comprehensive localization of software interfaces, applications, and digital products for international markets."
                }
              ].map((service, index) => (
                <FadeIn key={index} direction="up" delay={index * 100}>
                  <div className="bg-go-neutral-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
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
        
        {/* Translation vs. Localization */}
        <section className="py-20 bg-go-neutral-50">
          <div className="container-custom">
            <FadeIn direction="up">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="inline-block py-1 px-3 rounded-full bg-go-blue-100 text-go-blue-700 text-sm font-medium mb-4">
                  Our Approach
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-go-neutral-900">
                  Translation vs. Localization
                </h2>
                <p className="text-go-neutral-600 text-lg">
                  Understanding the difference between translation and localization is crucial for successful global communications.
                </p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FadeIn direction="right">
                <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                  <h3 className="text-2xl font-bold mb-6 text-go-neutral-900">Translation</h3>
                  <p className="text-go-neutral-600 mb-6">
                    Translation is the process of converting text from one language to another while maintaining its meaning, style, and tone. It focuses on linguistic accuracy and fidelity to the source text.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex">
                      <div className="bg-go-blue-100 p-1 rounded-full inline-flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-go-blue-700" />
                      </div>
                      <div>
                        <p className="text-go-neutral-700">Word-for-word conversion between languages</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="bg-go-blue-100 p-1 rounded-full inline-flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-go-blue-700" />
                      </div>
                      <div>
                        <p className="text-go-neutral-700">Preserves original meaning and context</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="bg-go-blue-100 p-1 rounded-full inline-flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-go-blue-700" />
                      </div>
                      <div>
                        <p className="text-go-neutral-700">Focus on linguistic accuracy</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </FadeIn>
              
              <FadeIn direction="left">
                <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                  <h3 className="text-2xl font-bold mb-6 text-go-neutral-900">Localization</h3>
                  <p className="text-go-neutral-600 mb-6">
                    Localization goes beyond translation to adapt content for a specific culture or market. It includes adjusting cultural references, imagery, formats, and other elements to resonate with the target audience.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex">
                      <div className="bg-go-blue-100 p-1 rounded-full inline-flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-go-blue-700" />
                      </div>
                      <div>
                        <p className="text-go-neutral-700">Cultural adaptation beyond just words</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="bg-go-blue-100 p-1 rounded-full inline-flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-go-blue-700" />
                      </div>
                      <div>
                        <p className="text-go-neutral-700">Adjusts for cultural preferences and sensitivities</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="bg-go-blue-100 p-1 rounded-full inline-flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-go-blue-700" />
                      </div>
                      <div>
                        <p className="text-go-neutral-700">Modifies design, currency, date formats, etc.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </FadeIn>
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
                    Ready to Reach Global Audiences?
                  </h2>
                  <p className="text-go-neutral-300 text-lg max-w-2xl mx-auto">
                    Contact us today to discuss your translation needs and see how our team of professional translators can help you communicate effectively with international audiences.
                  </p>
                </div>
              </FadeIn>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
                <ContactForm 
                  title="Let's Discuss Your Translation Needs" 
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

export default Translation;
