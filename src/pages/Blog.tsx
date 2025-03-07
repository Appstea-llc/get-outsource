
import { useEffect } from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FadeIn from '@/components/animations/FadeIn';

const blogPosts = [
  {
    id: 'outsourcing-benefits',
    title: 'The Top 10 Benefits of Outsourcing to Europe in 2023',
    excerpt: 'Discover why European outsourcing is becoming the preferred choice for businesses worldwide and how it can benefit your company.',
    category: 'Business',
    date: 'May 15, 2023',
    author: 'Jane Doe',
    readTime: '8 min read',
  },
  {
    id: 'digital-marketing-trends',
    title: 'Emerging Digital Marketing Trends for European Markets',
    excerpt: 'Stay ahead of the competition with these cutting-edge digital marketing strategies specifically tailored for European audiences.',
    category: 'Marketing',
    date: 'June 2, 2023',
    author: 'John Smith',
    readTime: '6 min read',
  },
  {
    id: 'multilingual-development',
    title: 'Best Practices for Multilingual Software Development',
    excerpt: 'Learn how to effectively design and develop software that seamlessly supports multiple languages from the ground up.',
    category: 'Development',
    date: 'June 28, 2023',
    author: 'Maria Garcia',
    readTime: '10 min read',
  },
  {
    id: 'remote-team-management',
    title: 'Managing Remote Development Teams Across Different Time Zones',
    excerpt: 'Practical tips and strategies for effectively coordinating and leading distributed development teams across Europe.',
    category: 'Management',
    date: 'July 12, 2023',
    author: 'Alex Johnson',
    readTime: '7 min read',
  },
  {
    id: 'translation-localization',
    title: 'Translation vs. Localization: What's the Difference?',
    excerpt: 'Understand the critical differences between translation and localization and why both matter for global business success.',
    category: 'Translation',
    date: 'August 5, 2023',
    author: 'Sophie Martin',
    readTime: '5 min read',
  },
  {
    id: 'tech-talent-shortage',
    title: 'Addressing the Tech Talent Shortage Through European Outsourcing',
    excerpt: 'How European outsourcing provides a solution to the growing global shortage of qualified technology professionals.',
    category: 'Industry',
    date: 'September 18, 2023',
    author: 'Thomas Weber',
    readTime: '9 min read',
  },
];

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Blog - Get Outsource';
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
                  Our Blog
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-go-neutral-900">
                  Insights & Expertise
                </h1>
                <p className="text-go-neutral-600 text-lg mb-8">
                  Expert articles, guides, and industry insights from our team of European professionals.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
        
        {/* Featured Post */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <FadeIn direction="up">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 bg-go-neutral-50 rounded-2xl overflow-hidden shadow-sm">
                <div className="lg:col-span-2 bg-go-neutral-200 min-h-[300px] lg:min-h-full relative">
                  {/* Placeholder for featured image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-go-blue-600/20 to-go-blue-800/40"></div>
                </div>
                <div className="lg:col-span-3 p-8 md:p-12">
                  <span className="inline-block py-1 px-3 rounded-full bg-go-blue-100 text-go-blue-700 text-sm font-medium mb-4">
                    Featured Post
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-go-neutral-900">
                    Why European Outsourcing is the Future of Global Business Operations
                  </h2>
                  <div className="flex items-center text-go-neutral-500 mb-6">
                    <div className="flex items-center mr-4">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="text-sm">April 25, 2023</span>
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span className="text-sm">By Emma Wilson</span>
                    </div>
                  </div>
                  <p className="text-go-neutral-600 mb-6">
                    As businesses increasingly look for reliable, high-quality outsourcing partners, European 
                    providers are emerging as the preferred choice. This comprehensive article explores why 
                    European outsourcing studios offer unique advantages in terms of quality, communication, 
                    cultural alignment, and technical expertise.
                  </p>
                  <Link 
                    to="/blog/european-outsourcing-future" 
                    className="inline-flex items-center text-go-blue-600 font-medium hover:text-go-blue-700 transition-colors duration-300"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
        
        {/* Blog Posts Grid */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <FadeIn direction="up">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
                <h2 className="text-3xl font-bold text-go-neutral-900 mb-4 sm:mb-0">
                  Latest Articles
                </h2>
                <div className="flex space-x-2">
                  <select className="px-4 py-2 border border-go-neutral-200 rounded-md text-go-neutral-700 focus:outline-none focus:ring-2 focus:ring-go-blue-500/20">
                    <option value="">All Categories</option>
                    <option value="business">Business</option>
                    <option value="development">Development</option>
                    <option value="marketing">Marketing</option>
                    <option value="translation">Translation</option>
                  </select>
                </div>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <FadeIn key={post.id} direction="up" delay={index * 100}>
                  <Link to={`/blog/${post.id}`} className="group block h-full">
                    <div className="bg-white border border-go-neutral-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                      <div className="aspect-[16/9] bg-go-neutral-200 relative overflow-hidden">
                        {/* Placeholder for post image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-go-blue-600/20 to-go-blue-800/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <span className="inline-block py-1 px-3 rounded-full bg-go-blue-50 text-go-blue-700 text-xs font-medium mb-4">
                          {post.category}
                        </span>
                        <h3 className="text-xl font-bold mb-3 text-go-neutral-900 group-hover:text-go-blue-600 transition-colors duration-300">
                          {post.title}
                        </h3>
                        <p className="text-go-neutral-600 mb-6 flex-grow">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-go-neutral-500 text-sm mt-auto">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{post.date}</span>
                          </div>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
            
            <FadeIn direction="up" delay={300}>
              <div className="flex justify-center mt-12">
                <button className="bg-go-blue-500 hover:bg-go-blue-600 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 shadow-sm hover:shadow-md">
                  Load More Articles
                </button>
              </div>
            </FadeIn>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="py-20 bg-go-neutral-50">
          <div className="container-custom">
            <FadeIn direction="up">
              <div className="max-w-3xl mx-auto text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-go-blue-100 text-go-blue-700 text-sm font-medium mb-4">
                  Stay Updated
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-go-neutral-900">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-go-neutral-600 text-lg mb-8">
                  Get the latest industry insights, company news, and expert articles delivered straight to your inbox.
                </p>
                
                <form className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="flex-grow px-4 py-3 rounded-md border border-go-neutral-200 focus:outline-none focus:ring-2 focus:ring-go-blue-500/20"
                    required
                  />
                  <button 
                    type="submit"
                    className="bg-go-blue-500 hover:bg-go-blue-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-go-neutral-500 text-sm mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
