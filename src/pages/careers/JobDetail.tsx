
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Building, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/ui/ContactForm';
import FadeIn from '@/components/animations/FadeIn';
import { jobOpenings, JobOpening } from '@/data/jobOpenings';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const JobDetail = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const [job, setJob] = useState<JobOpening | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const foundJob = jobOpenings.find((job) => job.id === jobId);
    if (foundJob) {
      setJob(foundJob);
      document.title = `${foundJob.title} - Get Outsource Careers`;
    } else {
      document.title = 'Job Not Found - Get Outsource Careers';
    }
  }, [jobId]);
  
  if (!job) {
    return (
      <div className="page-transition-enter">
        <Navbar />
        <main className="py-32">
          <div className="container-custom text-center">
            <h1 className="text-3xl font-bold mb-6">Job Not Found</h1>
            <p className="mb-8">The job position you're looking for doesn't exist or has been removed.</p>
            <Link 
              to="/careers" 
              className="inline-flex items-center text-go-blue-600 font-medium hover:text-go-blue-700"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Careers
            </Link>
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
        {/* Header Section */}
        <section className="pt-32 pb-12 bg-go-neutral-100">
          <div className="container-custom">
            <FadeIn direction="up">
              <Link 
                to="/careers" 
                className="inline-flex items-center text-go-blue-600 font-medium hover:text-go-blue-700 mb-6"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Openings
              </Link>
              
              <div className="max-w-4xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-go-neutral-900">
                  {job.title}
                </h1>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="inline-flex items-center bg-white px-3 py-1.5 rounded-full text-go-neutral-700 text-sm">
                    <MapPin className="h-4 w-4 mr-1.5 text-go-blue-600" />
                    {job.location}
                  </div>
                  <div className="inline-flex items-center bg-white px-3 py-1.5 rounded-full text-go-neutral-700 text-sm">
                    <Clock className="h-4 w-4 mr-1.5 text-go-blue-600" />
                    {job.type}
                  </div>
                  <div className="inline-flex items-center bg-white px-3 py-1.5 rounded-full text-go-neutral-700 text-sm">
                    <Building className="h-4 w-4 mr-1.5 text-go-blue-600" />
                    {job.department}
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-go-neutral-200 mb-8">
                  <p className="text-go-neutral-700 leading-relaxed">
                    {job.description}
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="sm:w-auto bg-go-blue-600 hover:bg-go-blue-700">
                    Apply Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="sm:w-auto border-go-blue-200 text-go-blue-600 hover:bg-go-blue-50"
                    onClick={() => {
                      const shareData = {
                        title: `${job.title} at Get Outsource`,
                        text: `Check out this job opportunity: ${job.title} at Get Outsource!`,
                        url: window.location.href,
                      };
                      
                      if (navigator.share && navigator.canShare(shareData)) {
                        navigator.share(shareData);
                      } else {
                        navigator.clipboard.writeText(window.location.href);
                        alert('Link copied to clipboard!');
                      }
                    }}
                  >
                    Share Job
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
        
        {/* Job Details Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <FadeIn direction="up">
                  <div className="space-y-10">
                    {/* Responsibilities */}
                    <div>
                      <h2 className="text-2xl font-bold mb-6 text-go-neutral-900">Key Responsibilities</h2>
                      <ul className="space-y-3">
                        {job.responsibilities.map((item, index) => (
                          <li key={index} className="flex">
                            <CheckCircle2 className="h-5 w-5 mr-3 text-go-blue-600 flex-shrink-0 mt-0.5" />
                            <span className="text-go-neutral-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Requirements */}
                    <div>
                      <h2 className="text-2xl font-bold mb-6 text-go-neutral-900">Requirements</h2>
                      <ul className="space-y-3">
                        {job.requirements.map((item, index) => (
                          <li key={index} className="flex">
                            <CheckCircle2 className="h-5 w-5 mr-3 text-go-blue-600 flex-shrink-0 mt-0.5" />
                            <span className="text-go-neutral-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Application Process */}
                    <div>
                      <h2 className="text-2xl font-bold mb-4 text-go-neutral-900">Application Process</h2>
                      <p className="text-go-neutral-700 mb-6">{job.applicationProcess}</p>
                    </div>
                  </div>
                </FadeIn>
              </div>
              
              <div className="lg:col-span-1">
                <FadeIn direction="up" delay={200}>
                  <div className="sticky top-24">
                    <Card className="overflow-hidden">
                      <div className="bg-go-blue-600 px-6 py-5">
                        <h3 className="text-xl font-semibold text-white">Benefits & Perks</h3>
                      </div>
                      <CardContent className="p-6">
                        <ul className="space-y-4">
                          {job.benefits.map((benefit, index) => (
                            <li key={index} className="flex">
                              <CheckCircle2 className="h-5 w-5 mr-3 text-go-blue-600 flex-shrink-0" />
                              <span className="text-go-neutral-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
        
        {/* Application Form */}
        <section className="py-16 bg-go-neutral-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <FadeIn direction="up">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4 text-go-neutral-900">Apply for this Position</h2>
                  <p className="text-go-neutral-600">
                    Fill out the form below to apply for the {job.title} position. We'll review your application and get back to you soon.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <ContactForm 
                    title="Job Application" 
                    subtitle={`You are applying for: ${job.title}`}
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
        
        {/* Similar Positions */}
        <section className="py-16">
          <div className="container-custom">
            <FadeIn direction="up">
              <h2 className="text-2xl font-bold mb-8 text-go-neutral-900">Similar Positions</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobOpenings
                  .filter(otherJob => otherJob.id !== job.id && otherJob.department === job.department)
                  .slice(0, 3)
                  .map(similarJob => (
                    <Link key={similarJob.id} to={`/careers/${similarJob.id}`} className="group">
                      <Card className="h-full hover:shadow-md transition-shadow duration-300 border-go-neutral-200 group-hover:border-go-blue-200">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold mb-2 text-go-neutral-900 group-hover:text-go-blue-600 transition-colors duration-300">
                            {similarJob.title}
                          </h3>
                          <div className="flex flex-wrap gap-2 mb-4">
                            <span className="text-sm text-go-neutral-500">{similarJob.location}</span>
                            <span className="text-sm text-go-neutral-500">•</span>
                            <span className="text-sm text-go-neutral-500">{similarJob.type}</span>
                          </div>
                          <p className="text-go-neutral-600 line-clamp-3">
                            {similarJob.description}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
              </div>
              
              {jobOpenings.filter(otherJob => otherJob.id !== job.id && otherJob.department === job.department).length === 0 && (
                <div className="text-center py-8">
                  <p className="text-go-neutral-600">No similar positions available at the moment.</p>
                </div>
              )}
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JobDetail;
