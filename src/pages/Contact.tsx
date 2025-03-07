
import { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/ui/ContactForm';
import FadeIn from '@/components/animations/FadeIn';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Contact Us - Get Outsource';
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
                  Get in Touch
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-go-neutral-900">
                  Contact Us
                </h1>
                <p className="text-go-neutral-600 text-lg mb-8">
                  Have questions or ready to start your project? Reach out to our team for assistance.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
        
        {/* Contact Information & Form */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <FadeIn direction="right" className="lg:col-span-4">
                <div className="bg-go-neutral-50 p-8 rounded-xl shadow-sm h-full">
                  <h2 className="text-2xl font-bold mb-6 text-go-neutral-900">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="bg-go-blue-100 p-3 rounded-lg inline-flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="w-5 h-5 text-go-blue-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-go-neutral-900">Our Location</h3>
                        <p className="text-go-neutral-600">
                          123 Business Ave, Prague,<br />
                          Czech Republic, EU
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="bg-go-blue-100 p-3 rounded-lg inline-flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone className="w-5 h-5 text-go-blue-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-go-neutral-900">Phone Number</h3>
                        <p className="text-go-neutral-600">
                          <a href="tel:+420123456789" className="hover:text-go-blue-600 transition-colors duration-300">
                            +420 123 456 789
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="bg-go-blue-100 p-3 rounded-lg inline-flex items-center justify-center mr-4 flex-shrink-0">
                        <Mail className="w-5 h-5 text-go-blue-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-go-neutral-900">Email Address</h3>
                        <p className="text-go-neutral-600">
                          <a href="mailto:info@getoutsource.com" className="hover:text-go-blue-600 transition-colors duration-300">
                            info@getoutsource.com
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="bg-go-blue-100 p-3 rounded-lg inline-flex items-center justify-center mr-4 flex-shrink-0">
                        <Clock className="w-5 h-5 text-go-blue-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-go-neutral-900">Business Hours</h3>
                        <p className="text-go-neutral-600">
                          Monday - Friday: 9:00 AM - 6:00 PM CET<br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-10">
                    <h3 className="font-semibold text-go-neutral-900 mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="bg-go-neutral-200 p-3 rounded-full text-go-neutral-700 hover:bg-go-blue-500 hover:text-white transition-all duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M22.23 0H1.77C.8 0 0 .8 0 1.77v20.46C0 23.2.8 24 1.77 24h20.46c.98 0 1.77-.8 1.77-1.77V1.77C24 .8 23.2 0 22.23 0zM7.27 20.45H3.65V8.98h3.62v11.47zM5.47 7.53a2.09 2.09 0 110-4.18 2.09 2.09 0 010 4.18zm14.98 12.92h-3.62v-5.66c0-1.35-.03-3.1-1.89-3.1-1.89 0-2.18 1.48-2.18 3v5.76H9.14V8.98h3.47v1.6h.05c.48-.92 1.67-1.89 3.43-1.89 3.67 0 4.36 2.42 4.36 5.57v6.19z"></path>
                        </svg>
                      </a>
                      <a href="#" className="bg-go-neutral-200 p-3 rounded-full text-go-neutral-700 hover:bg-go-blue-500 hover:text-white transition-all duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.16a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                        </svg>
                      </a>
                      <a href="#" className="bg-go-neutral-200 p-3 rounded-full text-go-neutral-700 hover:bg-go-blue-500 hover:text-white transition-all duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                        </svg>
                      </a>
                      <a href="#" className="bg-go-neutral-200 p-3 rounded-full text-go-neutral-700 hover:bg-go-blue-500 hover:text-white transition-all duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn direction="left" className="lg:col-span-8">
                <div className="bg-white rounded-xl overflow-hidden shadow-md border border-go-neutral-100">
                  <ContactForm 
                    title="Send Us a Message" 
                    subtitle="Fill out the form below and our team will get back to you as soon as possible."
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
        
        {/* Map */}
        <section className="py-16 bg-go-neutral-50">
          <div className="container-custom">
            <FadeIn direction="up">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-go-neutral-900">Our Location</h2>
                <p className="text-go-neutral-600 mt-2">
                  Visit our office in the heart of Prague
                </p>
              </div>
            </FadeIn>
            
            <FadeIn direction="up">
              <div className="bg-go-neutral-200 h-96 rounded-xl shadow-sm overflow-hidden relative">
                {/* Placeholder for map */}
                <div className="absolute inset-0 bg-gradient-to-br from-go-blue-600/10 to-go-blue-800/20"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-go-blue-500 w-6 h-6 rounded-full animate-pulse"></div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
