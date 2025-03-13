
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Users, ExternalLink } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FadeIn from '@/components/animations/FadeIn';
import { projects } from '@/data/projects';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = project 
      ? `${project.title} - Portfolio - Get Outsource` 
      : 'Project - Get Outsource';
  }, [project]);

  if (!project) {
    return (
      <div className="page-transition-enter">
        <Navbar />
        <main className="py-32">
          <div className="container-custom">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
              <p className="text-go-neutral-600 mb-8">
                We couldn't find the project you're looking for.
              </p>
              <Link 
                to="/portfolio" 
                className="inline-flex items-center bg-go-blue-600 text-white hover:bg-go-blue-700 py-3 px-8 rounded-md font-medium transition-all duration-300"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Portfolio
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="page-transition-enter">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-go-neutral-900 text-white">
          <div className="container-custom">
            <FadeIn direction="up">
              <Link 
                to="/portfolio" 
                className="inline-flex items-center text-go-blue-300 hover:text-go-blue-200 mb-8 font-medium"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to All Projects
              </Link>
              
              <span className="inline-block py-1 px-3 rounded-full bg-go-blue-700/30 text-go-blue-300 text-sm font-medium mb-4">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-4 mb-8">
                {project.tags.map((tag, index) => (
                  <span key={index} className="inline-block px-3 py-1 bg-go-neutral-800 text-go-neutral-200 text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
        
        {/* Project Showcase */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <FadeIn direction="up">
                  <div className="aspect-video bg-go-neutral-200 rounded-xl overflow-hidden mb-8">
                    {/* Placeholder for project image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-go-blue-600/20 to-go-blue-800/40"></div>
                  </div>
                  
                  <div className="prose prose-lg max-w-none">
                    <h2>Project Overview</h2>
                    <p>{project.description}</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros 
                      elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut 
                      commodo diam libero vitae erat.
                    </p>
                    
                    <h2>The Challenge</h2>
                    <p>
                      Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus 
                      tristique posuere. Suspendisse potenti. Aenean lacinia bibendum nulla sed consectetur.
                    </p>
                    <ul>
                      <li>Etiam porta sem malesuada magna mollis euismod</li>
                      <li>Donec ullamcorper nulla non metus auctor fringilla</li>
                      <li>Aenean lacinia bibendum nulla sed consectetur</li>
                    </ul>
                    
                    <h2>Our Approach</h2>
                    <p>
                      Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor. 
                      Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies 
                      vehicula ut id elit.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-8">
                      <div className="bg-go-neutral-100 rounded-lg p-6">
                        <h4 className="font-bold text-lg mb-2">Research & Strategy</h4>
                        <p className="text-go-neutral-600">
                          Competitive analysis, user research, and strategic planning to ensure project success.
                        </p>
                      </div>
                      <div className="bg-go-neutral-100 rounded-lg p-6">
                        <h4 className="font-bold text-lg mb-2">Design & Development</h4>
                        <p className="text-go-neutral-600">
                          Collaborative design process and agile development to create an exceptional product.
                        </p>
                      </div>
                    </div>
                    
                    <h2>The Results</h2>
                    <p>
                      Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur 
                      purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus.
                    </p>
                    
                    <div className="bg-go-blue-50 border-l-4 border-go-blue-500 p-6 my-8 not-prose">
                      <blockquote className="text-lg font-medium text-go-neutral-800 italic">
                        "Get Outsource delivered an exceptional solution that exceeded our expectations. 
                        Their team's expertise and dedication made all the difference in our project's success."
                      </blockquote>
                      <div className="mt-4 font-medium">— Client Name, Position at Company</div>
                    </div>
                  </div>
                </FadeIn>
              </div>
              
              <div className="lg:col-span-1">
                <FadeIn direction="up" delay={100}>
                  <div className="bg-go-neutral-50 p-6 rounded-xl sticky top-24">
                    <h3 className="text-xl font-bold mb-6">Project Details</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm text-go-neutral-500 mb-1">Client</h4>
                        <p className="font-medium">Confidential</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm text-go-neutral-500 mb-1">Timeline</h4>
                        <p className="font-medium">3 months</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm text-go-neutral-500 mb-1">Services</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.tags.map((tag, index) => (
                            <span key={index} className="inline-block px-3 py-1 bg-go-neutral-200 text-go-neutral-700 text-xs rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t border-go-neutral-200">
                        <h4 className="text-sm text-go-neutral-500 mb-3">Share This Project</h4>
                        <div className="flex space-x-3">
                          <a href="#" className="p-2 bg-go-neutral-200 rounded-full text-go-neutral-700 hover:bg-go-blue-500 hover:text-white transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10zm-10-6a1 1 0 100 2 1 1 0 000-2zm-3 7a1 1 0 112 0v4a1 1 0 11-2 0v-4zm5.293-4.707a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </a>
                          <a href="#" className="p-2 bg-go-neutral-200 rounded-full text-go-neutral-700 hover:bg-go-blue-500 hover:text-white transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13a1 1 0 112 0v5.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L11 12.586V7z" clipRule="evenodd" />
                            </svg>
                          </a>
                          <a href="#" className="p-2 bg-go-neutral-200 rounded-full text-go-neutral-700 hover:bg-go-blue-500 hover:text-white transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-5-7a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
        
        {/* More Projects */}
        <section className="py-20 bg-go-neutral-50">
          <div className="container-custom">
            <FadeIn direction="up">
              <h2 className="text-3xl font-bold mb-12 text-center">More Projects</h2>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects
                .filter(p => p.id !== project.id)
                .slice(0, 3)
                .map((relatedProject, index) => (
                  <FadeIn key={relatedProject.id} direction="up" delay={index * 100}>
                    <Link to={`/portfolio/${relatedProject.id}`} className="group block">
                      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="aspect-video bg-go-neutral-200 relative overflow-hidden">
                          {/* Placeholder for project image */}
                          <div className="absolute inset-0 bg-gradient-to-br from-go-blue-600/20 to-go-blue-800/40 opacity-60"></div>
                        </div>
                        <div className="p-6">
                          <div className="text-sm text-go-blue-600 font-medium mb-2">
                            {relatedProject.category}
                          </div>
                          <h3 className="text-xl font-bold mb-3 text-go-neutral-900 group-hover:text-go-blue-600 transition-colors duration-300">
                            {relatedProject.title}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </FadeIn>
                ))}
            </div>
            
            <FadeIn direction="up" delay={300}>
              <div className="mt-12 text-center">
                <Link 
                  to="/portfolio" 
                  className="inline-flex items-center bg-go-blue-600 text-white hover:bg-go-blue-700 py-3 px-8 rounded-md font-medium transition-all duration-300"
                >
                  View All Projects
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
