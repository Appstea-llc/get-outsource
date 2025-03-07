
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

const Footer = () => {
  return (
    <footer className="bg-go-neutral-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <FadeIn delay={100} direction="up">
            <div className="space-y-6">
              <Link to="/" className="inline-block">
                <span className="font-heading text-2xl font-bold tracking-tight text-white">
                  Get<span className="text-go-blue-400">Outsource</span>
                </span>
              </Link>
              <p className="text-go-neutral-300 max-w-xs">
                Need development, marketing or translation outsourced to a trusted partner in Europe?
              </p>
              <p className="text-go-neutral-300 max-w-xs italic">
                From Europe with skills
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-go-neutral-400 hover:text-go-blue-400 transition-colors duration-200" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-go-neutral-400 hover:text-go-blue-400 transition-colors duration-200" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-go-neutral-400 hover:text-go-blue-400 transition-colors duration-200" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-go-neutral-400 hover:text-go-blue-400 transition-colors duration-200" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200} direction="up">
            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/about" className="text-go-neutral-300 hover:text-go-blue-400 transition-colors duration-200">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="text-go-neutral-300 hover:text-go-blue-400 transition-colors duration-200">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/talent" className="text-go-neutral-300 hover:text-go-blue-400 transition-colors duration-200">
                    Talent
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-go-neutral-300 hover:text-go-blue-400 transition-colors duration-200">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-go-neutral-300 hover:text-go-blue-400 transition-colors duration-200">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={300} direction="up">
            <div>
              <h3 className="text-xl font-semibold mb-6">Services</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/services/web-development" className="text-go-neutral-300 hover:text-go-blue-400 transition-colors duration-200">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link to="/services/mobile-development" className="text-go-neutral-300 hover:text-go-blue-400 transition-colors duration-200">
                    Mobile Development
                  </Link>
                </li>
                <li>
                  <Link to="/services/digital-marketing" className="text-go-neutral-300 hover:text-go-blue-400 transition-colors duration-200">
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link to="/services/translation" className="text-go-neutral-300 hover:text-go-blue-400 transition-colors duration-200">
                    Translation Services
                  </Link>
                </li>
                <li>
                  <Link to="/services/consulting" className="text-go-neutral-300 hover:text-go-blue-400 transition-colors duration-200">
                    Consulting
                  </Link>
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={400} direction="up">
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin size={20} className="text-go-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-go-neutral-300">
                    123 Business Ave, Prague,<br />Czech Republic, EU
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone size={20} className="text-go-blue-400 mr-3 flex-shrink-0" />
                  <a href="tel:+420123456789" className="text-go-neutral-300 hover:text-go-blue-400 transition-colors duration-200">
                    +420 123 456 789
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail size={20} className="text-go-blue-400 mr-3 flex-shrink-0" />
                  <a href="mailto:info@getoutsource.com" className="text-go-neutral-300 hover:text-go-blue-400 transition-colors duration-200">
                    info@getoutsource.com
                  </a>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>

        <div className="border-t border-go-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-go-neutral-400 text-sm">
              &copy; {new Date().getFullYear()} GetOutsource. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-go-neutral-400 hover:text-go-blue-400 transition-colors duration-200 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-go-neutral-400 hover:text-go-blue-400 transition-colors duration-200 text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-go-neutral-400 hover:text-go-blue-400 transition-colors duration-200 text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
