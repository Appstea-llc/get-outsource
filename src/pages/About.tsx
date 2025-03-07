import { useEffect } from 'react';
import { Check, Users, MapPin, Star } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/ui/ContactForm';
import FadeIn from '@/components/animations/FadeIn';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'About - Get Outsource';
  }, []);

  const values = [
    {
      title: 'Quality First',
      description: 'We never compromise on quality. Every project is delivered with the highest standards.',
      icon: <Star className="w-6 h-6" />,
    },
    {
      title: 'Transparent Communication',
      description: 'Clear and open communication is at the core of our working relationships.',
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: 'European Excellence',
      description: 'Our European-based team ensures compliance with the highest quality and ethical standards.',
      icon: <MapPin className="w-6 h-6" />,
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
        <section className="pt-32 pb-16 md:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-go-blue-100 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-go-blue-300 rounded-full blur-3xl opacity-10"></div>
          </div>
          
          <div className="container-custom">
            <FadeIn direction="up">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block py-1 px-3 rounded-full bg-go-blue-100 text-go-blue-700 text-sm font-medium mb-4">
                  About Us
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                  European Outsourcing Excellence
                </h1>
                <p className="text-xl text-go-neutral-600">
                  Get Outsource is a premier European outsourcing studio delivering high-quality development, marketing, and translation services.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={200}>
              <div className="relative mx-auto max-w-4xl rounded-xl overflow-hidden shadow-xl">
                {/* Placeholder for team image */}
                <div className="aspect-[16/7] bg-go-neutral-200">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <FadeIn direction="right" duration={800}>
                <div className="relative">
                  <div className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
                    {/* Placeholder for story image */}
                    <div className="h-full w-full bg-go-neutral-200"></div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                    <p className="font-medium text-go-blue-600">
                      "From Europe with skills - our commitment to excellence in every project we undertake."
                    </p>
                  </div>
                </div>
              </FadeIn>
              
              <div>
                <FadeIn direction="left" duration={800}>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                  <p className="text-go-neutral-700 mb-6">
                    Founded in 2018, Get Outsource was born from a vision to provide premium outsourcing services from Europe to global clients. 
                    We started as a small team of passionate developers and have since grown into a full-service studio offering development, 
                    marketing, and translation services.
                  </p>
                  <p className="text-go-neutral-700 mb-6">
                    Our European roots give us a unique advantage in delivering high-quality work that meets international standards. 
                    We combine the precision and reliability that European businesses are known for with innovation and creativity.
                  </p>
                  <p className="text-go-neutral-700">
                    Today, we're proud to serve clients worldwide, helping businesses of all sizes bring their visions to life through 
                    our expertise and commitment to excellence.
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-20 bg-go-neutral-50">
          <div className="container-custom">
            <FadeIn direction="up">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block py-1 px-3 rounded-full bg-go-blue-100 text-go-blue-700 text-sm font-medium mb-4">
                  Our Values
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  What Drives Us
                </h2>
                <p className="text-go-neutral-600 text-lg">
                  Our core values define who we are and guide every decision we make and every project we undertake.
                </p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <FadeIn key={index} direction="up" delay={index * 100}>
                  <div className="bg-white p-8 rounded-xl border border-go-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                    <div className="w-12 h-12 bg-go-blue-100 text-go-blue-600 rounded-lg flex items-center justify-center mb-6">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-go-neutral-600">{value.description}</p>
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
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block py-1 px-3 rounded-full bg-go-blue-100 text-go-blue-700 text-sm font-medium mb-4">
                  Our Team
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Meet Our Experts
                </h2>
                <p className="text-go-neutral-600 text-lg">
                  Our team consists of skilled professionals from across Europe, bringing diverse perspectives and expertise to every project.
                </p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {Array.from({ length: 8 }).map((_, index) => (
                <FadeIn key={index} direction="up" delay={index * 100}>
                  <div className="group">
                    <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white h-full">
                      <div className="aspect-square bg-go-neutral-200 relative overflow-hidden">
                        {/* Placeholder for team member image */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4 w-full">
                            <div className="flex justify-center space-x-3">
                              <a href="#" className="text-white hover:text-go-blue-300 transition-colors">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zM7.65 13.979H5.706V7.723H7.65v6.256zm-.984-7.024c-.614 0-1.011-.435-1.011-.973 0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973zm8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355-.537 0-.856.371-.997.728-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01 1.279 0 2.238.857 2.238 2.699v3.699z" />
                                </svg>
                              </a>
                              <a href="#" className="text-white hover:text-go-blue-300 transition-colors">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M15.969 3.058c1.56.94 2.502 2.662 2.502 4.532 0 3.819-3.098 6.917-6.917 6.917-3.819 0-6.917-3.098-6.917-6.917 0-1.87.942-3.592 2.502-4.532.147-.087.279-.17.409-.257.13-.087.259-.18.39-.268.193-.14.384-.299.59-.516.207-.216.415-.442.65-.716a4.36 4.36 0 0 0 .97-1.718c.027-.108.043-.219.057-.329.013-.109.022-.219.026-.328a7.498 7.498 0 0 0-.112-1.495c-.126-.801-.42-1.577-.877-2.22a7.67 7.67 0 0 0-1.136-1.313 6.639 6.639 0 0 0-1.606-1.111c-.61-.296-1.257-.499-1.927-.602a8.168 8.168 0 0 0-2.077-.052 7.99 7.99 0 0 0-1.912.36 7.445 7.445 0 0 0-1.758.762 7.096 7.096 0 0 0-1.527 1.236 6.532 6.532 0 0 0-1.07 1.497A6.977 6.977 0 0 0 .366 7.773a7.385 7.385 0 0 0-.051 2.057 7.48 7.48 0 0 0 .374 1.803 7.35 7.35 0 0 0 .717 1.495 6.413 6.413 0 0 0 1.027 1.331c.389.39.815.74 1.271 1.043a9.044 9.044 0 0 0 1.53.774c.554.22 1.14.376 1.761.45.631.072 1.28.074 1.92.01a9.18 9.18 0 0 0 1.753-.372 8.851 8.851 0 0 0 1.62-.76 10.102 10.102 0 0 0 1.235-.966c.194-.19.387-.384.57-.591.182-.207.357-.424.52-.651.308-.432.584-.9.806-1.382.231-.497.343-1.026.402-1.546.079-.522.086-1.039.028-1.55a4.1 4.1 0 0 0-.118-.65 7.932 7.932 0 0 0-.2-.9 6.309 6.309 0 0 0-.31-.916 5.34 5.34 0 0 0-.555-1.022 4.33 4.33 0 0 0-.64-.771.838.838 0 0 0-.585-.258.826.826 0 0 0-.585.258 4.33 4.33 0 0 0-.64.771 5.323 5.323 0 0 0-.555 1.022 6.309 6.309 0 0 0-.31.916 8.01 8.01 0 0 0-.2.9 4.1 4.1 0 0 0-.118.65c-.058.51-.051 1.027.028 1.55.059.52.17 1.05.402 1.546.222.483.498.95.806 1.382.163.227.338.444.52.651.183.207.376.401.57.591.382.375.802.697 1.235.966a8.837 8.837 0 0 0 1.62.76 9.174 9.174 0 0 0 1.753.372c.64.064 1.29.062 1.92-.01a9.043 9.043 0 0 0 1.76-.45 10.026 10.026 0 0 0 1.531-.773 6.388 6.388 0 0 0 1.271-1.043 5.87 5.87 0 0 0 1.027-1.331 7.246 7.246 0 0 0 .717-1.495 7.462 7.462 0 0 0 .374-1.803 7.37 7.37 0 0 0-.051-2.057 6.358 6.358 0 0 0-.618-1.989 6.723 6.723 0 0 0-1.069-1.497 6.52 6.52 0 0 0-1.527-1.236 7.673 7.673 0 0 0-1.759-.762 8.008 8.008 0 0 0-1.912-.36 8.174 8.174 0 0 0-2.077.052 8.107 8.107 0 0 0-1.927.602 6.639 6.639 0 0 0-1.606 1.111 7.67 7.67 0 0 0-1.136 1.313c-.456.643-.75 1.42-.877 2.22a7.509 7.509 0 0 0-.112 1.495c.004.11.013.219.026.328.014.11.03.221.057.329.134.535.324 1.084.97 1.718.235.274.443.5.65.716.206.217.397.376.59.516.131.088.26.181.39.268.13.087.262.17.409.257Z" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold">Team Member {index + 1}</h3>
                        <p className="text-go-neutral-500 text-sm">Position</p>
                      </div>
                    </div>
                  </div>
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
                    Get in Touch
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    Want to Learn More?
                  </h2>
                  <p className="text-go-neutral-300 text-lg max-w-2xl mx-auto">
                    Contact us to learn more about our team and how we can help with your next project.
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

export default About;
