
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, AlertCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Page Not Found - Get Outsource";
    
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="page-transition-enter">
      <Navbar />
      <main className="min-h-screen flex flex-col">
        <div className="flex-grow flex items-center justify-center py-20">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 rounded-full bg-go-neutral-100 flex items-center justify-center">
                  <AlertCircle size={48} className="text-go-blue-500" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-go-neutral-900">
                404 - Page Not Found
              </h1>
              
              <p className="text-go-neutral-600 text-lg mb-8">
                The page you're looking for doesn't exist or has been moved.
                Let's get you back on track.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto flex items-center gap-2"
                  asChild
                >
                  <Link to="/">
                    <Home className="w-4 h-4" />
                    Return to Home
                  </Link>
                </Button>
                
                <Button 
                  variant="default"
                  className="w-full sm:w-auto flex items-center gap-2"
                  asChild
                >
                  <Link to="/contact">
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
