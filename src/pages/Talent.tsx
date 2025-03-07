import { useEffect } from 'react';
import { ArrowRight, Code, Paintbrush, Globe, PenTool, Users, BarChart, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/ui/ContactForm';
import FadeIn from '@/components/animations/FadeIn';

const specialties = [
  {
    id: 'developers',
    title: 'Developers',
    description: 'Expert software developers specialized in web, mobile, and backend development.',
    icon: <Code className="w-6 h-6" />,
    skills: ['React', 'Node.js', 'PHP', 'Python', 'Java', 'React Native', 'Flutter'],
  },
  {
    id: 'designers',
    title: 'Designers',
    description: 'Creative UI/UX and graphic designers with a keen eye for detail and user experience.',
    icon: <Paintbrush className="w-6 h-6" />,
    skills: ['UI/UX Design', 'Brand Identity', 'Prototyping', 'User Research', 'Figma', 'Adobe Creative Suite'],
  },
  {
    id: 'translators',
    title: 'Translators',
    description: 'Native language professionals covering all European languages for perfect localization.',
    icon: <Globe className="w-6 h-6" />,
    skills: ['Content Translation', 'Technical Translation', 'SEO Translation', 'Legal Translation', 'Medical Translation'],
  },
  {
    id: 'content-creators',
    title: 'Content Creators',
    description: 'Expert copywriters and content strategists who craft compelling messages.',
    icon: <PenTool className="w-6 h-6" />,
    skills: ['Copywriting', 'Blog Writing', 'Technical Writing', 'SEO Content', 'Content Strategy'],
  },
  {
    id: 'project-managers',
    title: 'Project Managers',
    description: 'Skilled project coordinators who ensure smooth execution and delivery.',
    icon: <Users className="w-6 h-6" />,
    skills: ['Agile Methodology', 'Scrum', 'Resource Management', 'Risk Management', 'Client Communication'],
  },
  {
    id: 'marketing-specialists',
    title: 'Marketing Specialists',
    description: 'Digital marketing experts who help businesses grow their online presence.',
    icon: <BarChart className="w-6 h-6" />,
    skills: ['SEO', 'SEM', 'Social Media Marketing', 'Email Marketing', 'Analytics', 'Content Marketing'],
  },
];

const Talent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Talent - Get Outsource';
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
                  Our Talent
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-go-neutral-900">
                  European Expertise at Your Service
                </h1>
                <p className="text-go-neutral-600 text-lg mb-8">
                  Discover our diverse pool of European professionals ready to bring their skills and expertise to your projects.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Talent Process */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <FadeIn direction="up">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="inline-block py-1 px-3 rounded-full bg-go-blue-100 text-go-blue-700 text-sm font-medium mb-4">
                  Our Process
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-go-neutral-900">
                  How We Find the Best Talent
                </h2>
                <p className="text-go-neutral-600 text-lg">
                  Our rigorous talent acquisition and vetting process ensures we connect you with only the most qualified professionals.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Screening', description: "We carefully screen each applicant's skills, experience, and background." },
                { step: '02', title: 'Testing', description: 'Candidates complete practical assessments to verify their technical proficiency.' },
                { step: '03', title: 'Interviews', description: 'Multiple interview rounds evaluate communication, problem-solving, and culture fit.' },
                { step: '04', title: 'Continuous Evaluation', description: 'Ongoing performance reviews ensure our talent maintains excellence.' },
              ].map((item, index) => (
                <FadeIn key={index} direction="up" delay={index * 100}>
                  <div className="bg-go-neutral-50 p-8 rounded-xl relative h-full">
                    <div className="text-4xl font-bold text-go-blue-200 mb-4">{item.step}</div>
                    <h3 className="text-xl font-bold mb-3 text-go-neutral-900">{item.title}</h3>
                    <p className="text-go-neutral-600">{item.description}</p>
                    {index < 3 && (
                      <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                        <ArrowRight className="w-8 h-8 text-go-blue-300" />
                      </div>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Talent Specialties */}
        <section className="py-20 bg-go-neutral-50">
          <div className="container-custom">
            <FadeIn direction="up">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="inline-block py-1 px-3 rounded-full bg-go-blue-100 text-go-blue-700 text-sm font-medium mb-4">
                  Our Specialties
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-go-neutral-900">
                  Expertise Across Disciplines
                </h2>
                <p className="text-go-neutral-600 text-lg">
                  Our talent network includes a wide range of specialists to support your business needs.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specialties.map((specialty, index) => (
                <FadeIn key={specialty.id} direction="up" delay={index * 100}>
                  <Link to={`/talent/${specialty.id}`} className="group block h-full">
                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                      <div className="bg-go-blue-100 p-3 rounded-lg inline-block mb-6 text-go-blue-700">
                        {specialty.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-go-neutral-900 group-hover:text-go-blue-600 transition-colors duration-300">
                        {specialty.title}
                      </h3>
                      <p className="text-go-neutral-600 mb-6 flex-grow">
                        {specialty.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {specialty.skills.slice(0, 4).map((skill, i) => (
                          <span key={i} className="inline-block px-3 py-1 bg-go-neutral-100 text-go-neutral-700 text-xs rounded-full">
                            {skill}
                          </span>
                        ))}
                        {specialty.skills.length > 4 && (
                          <span className="inline-block px-3 py-1 bg-go-neutral-100 text-go-neutral-700 text-xs rounded-full">
                            +{specialty.skills.length - 4} more
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center text-go-blue-600 font-medium">
                        View Talent
                        <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Why European Talent */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FadeIn direction="right">
                <div className="bg-go-neutral-200 rounded-lg aspect-video relative overflow-hidden">
                  {/* Placeholder for image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-go-blue-600/20 to-go-blue-800/40"></div>
                </div>
              </FadeIn>
              
              <FadeIn direction="left">
                <div>
                  <span className="inline-block py-1 px-3 rounded-full bg-go-blue-100 text-go-blue-700 text-sm font-medium mb-4">
                    Why European Talent
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-go-neutral-900">
                    The European Advantage
                  </h2>
                  <ul className="space-y-4">
                    <li className="flex">
                      <div className="bg-go-blue-100 p-1 rounded-full inline-flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-go-blue-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-go-neutral-900">Quality Education</h3>
                        <p className="text-go-neutral-600">Access to professionals educated at Europe{"'"}s top technical universities and institutions.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="bg-go-blue-100 p-1 rounded-full inline-flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-go-blue-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-go-neutral-900">Cultural Compatibility</h3>
                        <p className="text-go-neutral-600">Easier collaboration with professionals who understand Western business practices and work culture.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="bg-go-blue-100 p-1 rounded-full inline-flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-go-blue-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-go-neutral-900">Multilingual Skills</h3>
                        <p className="text-go-neutral-600">Most European professionals speak multiple languages, facilitating global project work.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="bg-go-blue-100 p-1 rounded-full inline-flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-go-blue-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-go-neutral-900">Favorable Time Zones</h3>
                        <p className="text-go-neutral-600">Convenient time zone overlap with both North American and Asian markets.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </FadeIn>
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
                    Find Your Specialist
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Looking for Specific Skills?
                  </h2>
                  <p className="text-go-neutral-300 text-lg max-w-2xl mx-auto">
                    Tell us what expertise you're seeking, and we'll match you with the ideal specialists for your project.
                  </p>
                </div>
              </FadeIn>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
                <ContactForm 
                  title="Request Talent" 
                  subtitle="Fill out the form below to inquire about specific skills or roles you need for your project."
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

export default Talent;
