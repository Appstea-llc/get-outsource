
import { Link } from 'react-router-dom';
import FadeIn from '../animations/FadeIn';
import { projects } from '@/data/projects';

const FeaturedWork = () => {
  // Get first 4 projects from our centralized projects data
  const featuredProjects = projects.slice(0, 4);

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div className="max-w-2xl mb-6 md:mb-0">
              <span className="inline-block py-1 px-3 rounded-full bg-go-blue-100 text-go-blue-700 text-sm font-medium mb-4">
                Featured Projects
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Recent Work
              </h2>
              <p className="text-go-neutral-600">
                Explore some of our latest projects that showcase our expertise and commitment to delivering exceptional results.
              </p>
            </div>
            <Link 
              to="/portfolio" 
              className="inline-flex items-center font-medium text-go-blue-600 hover:text-go-blue-700 transition-colors duration-300"
            >
              View All Projects
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <FadeIn key={index} direction="up" delay={index * 100}>
              <Link to={`/portfolio/${project.id}`} className="group block">
                <div className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500">
                  <div className="relative">
                    {/* Project image with overlay */}
                    <div className="aspect-video bg-go-neutral-200 relative overflow-hidden">
                      {project.image && (
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out-expo"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-br from-go-blue-600/20 to-go-blue-800/40 opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    
                    {/* Project info - now always visible */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                      <div className="text-sm uppercase tracking-wider font-semibold mb-2 text-go-blue-300">
                        {project.category}
                      </div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn direction="up" delay={200}>
          <div className="mt-16 text-center">
            <Link 
              to="/portfolio" 
              className="inline-flex items-center bg-go-blue-600 text-white hover:bg-go-blue-700 py-3 px-8 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-xl"
            >
              Explore All Projects
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FeaturedWork;
