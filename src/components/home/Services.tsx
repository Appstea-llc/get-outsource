
import { useState } from 'react';
import { Code, BarChart, Globe, MessagesSquare, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from '../animations/FadeIn';

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  link: string;
}

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services: Service[] = [
    {
      icon: <Code size={32} />,
      title: 'Web & Mobile Development',
      description: 'Full-stack development services for web and mobile applications, using the latest technologies and frameworks.',
      link: '/services/development',
    },
    {
      icon: <BarChart size={32} />,
      title: 'Digital Marketing',
      description: 'Result-driven digital marketing strategies to help your business grow online and reach new customers.',
      link: '/services/marketing',
    },
    {
      icon: <Globe size={32} />,
      title: 'Translation Services',
      description: 'Professional translation services for all your content needs, delivered by native-speaking professionals.',
      link: '/services/translation',
    },
    {
      icon: <Layers size={32} />,
      title: 'UI/UX Design',
      description: 'User-centered design services focused on creating beautiful, intuitive, and functional interfaces.',
      link: '/services/design',
    },
    {
      icon: <MessagesSquare size={32} />,
      title: 'Consulting',
      description: 'Expert consulting services to help you navigate complex business and technical challenges.',
      link: '/services/consulting',
    },
  ];

  return (
    <section className="py-24 bg-go-neutral-50">
      <div className="container-custom">
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-go-blue-100 text-go-blue-700 text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Outsourcing Solutions
            </h2>
            <p className="text-go-neutral-600 text-lg">
              We provide a wide range of services to meet all your outsourcing needs with our team of skilled professionals from Europe.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} direction="up" delay={index * 100}>
              <div
                className="p-6 md:p-8 rounded-xl bg-white border border-go-neutral-200 transition-all duration-300 hover:shadow-xl h-full flex flex-col relative group overflow-hidden"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-go-blue-600 to-go-blue-700 opacity-0 transition-opacity duration-500 ease-out-expo group-hover:opacity-100 -z-10"></div>
                <div className="mb-5 flex justify-start">
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-go-blue-100 text-go-blue-600 transition-colors duration-300 group-hover:bg-white/20 group-hover:text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-white">
                  {service.title}
                </h3>
                <p className="text-go-neutral-600 mb-5 flex-grow transition-colors duration-300 group-hover:text-white/90">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="font-medium inline-flex items-center text-go-blue-600 transition-colors duration-300 group-hover:text-white"
                >
                  Learn more
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
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
