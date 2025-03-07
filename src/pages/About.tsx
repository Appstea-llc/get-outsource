
import { useEffect } from 'react';
import { Check, Users, MapPin, Star } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/ui/ContactForm';
import FadeIn from '@/components/animations/FadeIn';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'About Us - Get Outsource';
  }, []);

  const benefits = [
    {
      title: 'European Expertise',
      description: 'Access high-quality talent from across Europe with diverse language and cultural understanding.',
      icon: <MapPin className="w-6 h-6" />,
    },
    {
      title: 'Vetted Professionals',
      description: 'Our rigorous selection process ensures you work with only the most qualified specialists.',
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: 'Quality Assurance',
      description: 'We maintain strict quality standards across all our services and deliverables.',
      icon: <Star className="w-6 h-6" />,
    },
    {
      title: 'Customer-Centric Approach',
      description: "We put our clients' needs first, delivering solutions tailored to their requirements.",
      icon: <Check className="w-6 h-6" />,
    },
  ];

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
                  Our Story
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-go-neutral-900">
                  Connecting European Talent with Global Opportunities
                </h1>
                <p className="text-go-neutral-600 text-lg mb-8">
                  Get Outsource is a premium European outsourcing studio providing development, marketing, and translation services to clients worldwide.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <FadeIn direction="right">
                <div className="bg-go-neutral-200 rounded-lg aspect-square relative overflow-hidden">
                  {/* Placeholder for image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-go-blue-600/20 to-go-blue-800/40"></div>
                </div>
              </FadeIn>
              
              <FadeIn direction="left">
                <div>
                  <span className="inline-block py-1 px-3 rounded-full bg-go-blue-100 text-go-blue-700 text-sm font-medium mb-4">
                    Our Mission
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-go-neutral-900">
                    Bridging Talent Gaps Across Borders
                  </h2>
                  <p className="text-go-neutral-600 mb-6">
                    Founded in 2018, Get Outsource was born from a vision to showcase the exceptional talent pool available throughout Europe. We believe businesses shouldn't have to compromise on quality when outsourcing their projects.
                  </p>
                  <p className="text-go-neutral-600 mb-6">
                    Our mission is to deliver world-class outsourcing solutions while maintaining the highest standards of quality, communication, and professionalism. We carefully select the best professionals from across Europe, ensuring our clients receive outstanding results every time.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-8">
                    <div className="px-4 py-2 bg-go-neutral-100 rounded-full text-go-neutral-700 font-medium">
                      20+ European Countries
                    </div>
                    <div className="px-4 py-2 bg-go-neutral-100 rounded-full text-go-neutral-700 font-medium">
                      100+ Skilled Professionals
                    </div>
                    <div className="px-4 py-2 bg-go-neutral-100 rounded-full text-go-neutral-700 font-medium">
                      500+ Completed Projects
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
                  Why Choose Us
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-go-neutral-900">
                  The Get Outsource Advantage
                </h2>
                <p className="text-go-neutral-600 text-lg">
                  We provide a unique combination of quality, expertise, and value that sets us apart from other outsourcing providers.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <FadeIn key={index} direction="up" delay={index * 100}>
                  <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                    <div className="bg-go-blue-100 p-3 rounded-lg inline-block mb-6 text-go-blue-700">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-go-neutral-900">{benefit.title}</h3>
                    <p className="text-go-neutral-600">{benefit.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <FadeIn direction="up">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="inline-block py-1 px-3 rounded-full bg-go-blue-100 text-go-blue-700 text-sm font-medium mb-4">
                  Our Team
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-go-neutral-900">
                  Meet the Leadership
                </h2>
                <p className="text-go-neutral-600 text-lg">
                  Our experienced team is committed to delivering excellence and driving your success.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((person, index) => (
                <FadeIn key={index} direction="up" delay={index * 100}>
                  <div className="bg-go-neutral-50 rounded-xl overflow-hidden shadow-sm">
                    <div className="aspect-[3/4] bg-go-neutral-200 relative">
                      {/* Placeholder for team member photo */}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-go-neutral-900">Jane Doe</h3>
                      <p className="text-go-blue-600 mb-4">Chief Executive Officer</p>
                      <p className="text-go-neutral-600 mb-4">
                        With over 15 years of experience in tech and outsourcing, Jane leads our vision and strategy.
                      </p>
                      <div className="flex space-x-4">
                        <a href="#" className="text-go-neutral-400 hover:text-go-blue-600">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M22.23 0H1.77C.8 0 0 .8 0 1.77v20.46C0 23.2.8 24 1.77 24h20.46c.98 0 1.77-.8 1.77-1.77V1.77C24 .8 23.2 0 22.23 0zM7.27 20.45H3.65V8.98h3.62v11.47zM5.47 7.53a2.09 2.09 0 110-4.18 2.09 2.09 0 010 4.18zm14.98 12.92h-3.62v-5.66c0-1.35-.03-3.1-1.89-3.1-1.89 0-2.18 1.48-2.18 3v5.76H9.14V8.98h3.47v1.6h.05c.48-.92 1.67-1.89 3.43-1.89 3.67 0 4.36 2.42 4.36 5.57v6.19z"></path>
                          </svg>
                        </a>
                        <a href="#" className="text-go-neutral-400 hover:text-go-blue-600">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.16a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                          </svg>
                        </a>
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
                    Get in Touch
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Ready to Work With Us?
                  </h2>
                  <p className="text-go-neutral-300 text-lg max-w-2xl mx-auto">
                    Have questions about our services or want to discuss a potential project? Contact our team today.
                  </p>
                </div>
              </FadeIn>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
                <ContactForm 
                  title="Contact Our Team" 
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

export default About;
