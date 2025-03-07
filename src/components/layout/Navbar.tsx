
import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { title: 'About', path: '/about' },
    { title: 'Portfolio', path: '/portfolio' },
    { title: 'Talent', path: '/talent' },
    { title: 'Blog', path: '/blog' },
    { title: 'Careers', path: '/careers' },
  ];

  // Close mobile menu when navigating
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Change navbar appearance on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 py-4 transition-all duration-300 ease-out-expo',
        {
          'bg-white/80 backdrop-blur-md shadow-sm py-3': isScrolled,
          'bg-transparent': !isScrolled
        }
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="relative z-50 group"
          aria-label="Get Outsource - Home"
        >
          <div className="flex items-center">
            <span className="font-heading text-2xl font-bold tracking-tight text-go-neutral-900 group-hover:text-go-blue-600 transition-colors duration-300">
              Get<span className="text-go-blue-600">Outsource</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) => cn(
                'text-go-neutral-800 hover:text-go-blue-600 transition-colors duration-200 font-medium link-hover',
                {
                  'text-go-blue-600 after:w-full': isActive
                }
              )}
            >
              {item.title}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="bg-go-blue-500 hover:bg-go-blue-600 text-white py-2 px-5 rounded-md transition-all duration-300 shadow-sm hover:shadow-md font-medium"
          >
            Get in Touch
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 md:hidden z-50 relative"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-go-neutral-900" />
          ) : (
            <Menu className="w-6 h-6 text-go-neutral-900" />
          )}
        </button>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'fixed inset-0 bg-white z-40 transition-transform duration-500 ease-out-expo md:hidden',
            isOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex flex-col h-full justify-center items-center">
            <nav className="flex flex-col space-y-6 text-center">
              {navItems.map((item) => (
                <NavLink
                  key={item.title}
                  to={item.path}
                  className={({ isActive }) => cn(
                    'text-2xl font-heading font-medium text-go-neutral-900 transition-colors duration-300 hover:text-go-blue-600',
                    {
                      'text-go-blue-600': isActive
                    }
                  )}
                >
                  {item.title}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="text-2xl font-heading font-medium text-go-blue-600 transition-colors duration-300 hover:text-go-blue-800"
              >
                Get in Touch
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
