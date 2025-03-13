
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from '../animations/FadeIn';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-go-blue-100 rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-go-blue-300 rounded-full blur-3xl opacity-10 animate-float"></div>
      </div>
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <FadeIn direction="up" duration={800}>
              <span className="bg-go-blue-100 text-go-blue-700 py-1 px-3 rounded-full text-sm font-medium inline-block mb-6">
                European Outsourcing Studio
              </span>
            </FadeIn>
            
            <FadeIn direction="up" delay={200} duration={800}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight text-balance">
                Need development, marketing or translation <span className="text-go-blue-600">outsourced</span>?
              </h1>
            </FadeIn>
            
            <FadeIn direction="up" delay={400} duration={800}>
              <p className="text-lg md:text-xl mb-8 text-go-neutral-700 max-w-xl">
                A trusted partner in Europe delivering exceptional quality with our skilled team of professionals.
                <span className="italic text-go-blue-600 font-medium block mt-2">From Europe with skills</span>
              </p>
            </FadeIn>
            
            <FadeIn direction="up" delay={600} duration={800}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/portfolio" className="relative overflow-hidden group bg-go-blue-600 text-white py-3 px-8 rounded-md font-medium inline-flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-xl hover:bg-go-blue-700">
                  <span className="relative z-10">View Our Work</span>
                  <span className="absolute inset-0 bg-go-blue-700 transform scale-x-0 origin-left transition-transform duration-500 ease-out-expo group-hover:scale-x-100"></span>
                </Link>
                
                <Link to="/about" className="relative overflow-hidden group border border-go-neutral-300 text-go-neutral-900 py-3 px-8 rounded-md font-medium inline-flex items-center justify-center transition-all duration-300 hover:border-go-blue-600 hover:text-go-blue-600">
                  Learn More
                  <ArrowRight size={16} className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={800} duration={800}>
              <div className="mt-12">
                <p className="text-sm text-go-neutral-500 mb-4">Trusted by top companies worldwide</p>
                <div className="flex flex-wrap gap-8 items-center opacity-60">
                  {/* Company logos with subtle branding */}
                  <div className="h-8 w-auto">
                    <div className="h-full w-24 bg-go-neutral-400 rounded-md opacity-50"></div>
                  </div>
                  <div className="h-8 w-auto">
                    <div className="h-full w-20 bg-go-neutral-400 rounded-md opacity-40"></div>
                  </div>
                  <div className="h-8 w-auto">
                    <div className="h-full w-28 bg-go-neutral-400 rounded-md opacity-30"></div>
                  </div>
                  <div className="h-8 w-auto">
                    <div className="h-full w-24 bg-go-neutral-400 rounded-md opacity-50"></div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <FadeIn delay={500} direction="left" duration={1000}>
              <div className="relative">
                <div className="w-[320px] md:w-[480px] h-[450px] md:h-[580px] relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-go-blue-600/40 to-go-blue-700/60 mix-blend-multiply"></div>
                  {/* Hero image */}
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                    alt="Professional working remotely" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -left-16 top-10 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-xl animate-float">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-go-blue-100 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-go-blue-500"></div>
                    </div>
                    <div className="ml-3">
                      <div className="font-medium">Web Development</div>
                      <div className="text-sm text-go-neutral-500">Full-stack solutions</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -right-10 top-40 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-go-blue-100 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-go-blue-500"></div>
                    </div>
                    <div className="ml-3">
                      <div className="font-medium">Digital Marketing</div>
                      <div className="text-sm text-go-neutral-500">Results-driven</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -left-10 bottom-20 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-xl animate-float" style={{ animationDelay: '2s' }}>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-go-blue-100 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-go-blue-500"></div>
                    </div>
                    <div className="ml-3">
                      <div className="font-medium">Translation</div>
                      <div className="text-sm text-go-neutral-500">Native speakers</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
