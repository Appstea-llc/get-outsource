
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FadeIn from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const BlogPost = () => {
  const { postId } = useParams<{ postId: string }>();
  const { toast } = useToast();
  
  const post = blogPosts.find(p => p.id === postId);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = post ? `${post.title} - Get Outsource Blog` : 'Blog Post - Get Outsource';
  }, [post]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post?.title,
        text: post?.excerpt,
        url: window.location.href,
      })
      .catch(() => {
        // Fallback if sharing fails or is cancelled
        copyToClipboard();
      });
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "The article link has been copied to your clipboard.",
    });
  };
  
  if (!post) {
    return (
      <div>
        <Navbar />
        <div className="container-custom pt-40 pb-20 min-h-[70vh] flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-go-neutral-600 mb-8">The article you're looking for doesn't exist or has been moved.</p>
          <Link 
            to="/blog" 
            className="inline-flex items-center text-go-blue-600 font-medium hover:text-go-blue-700"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="page-transition-enter">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-12 bg-go-neutral-100">
          <div className="container-custom">
            <FadeIn direction="up">
              <Link 
                to="/blog" 
                className="inline-flex items-center text-go-blue-600 font-medium hover:text-go-blue-700 mb-6"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
              
              <div className="max-w-4xl mx-auto">
                <span className="inline-block py-1 px-3 rounded-full bg-go-blue-100 text-go-blue-700 text-sm font-medium mb-4">
                  {post.category}
                </span>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 text-go-neutral-900">
                  {post.title}
                </h1>
                
                <div className="flex flex-wrap items-center text-go-neutral-600 mb-8 gap-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    <span>By {post.author}</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
        
        {/* Article Content */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                <FadeIn direction="up">
                  {/* Featured Image */}
                  {post.coverImage && (
                    <div className="rounded-xl overflow-hidden mb-8 max-h-[500px]">
                      <img 
                        src={post.coverImage} 
                        alt={post.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  {/* Content */}
                  <div 
                    className="prose prose-lg max-w-none mb-12 prose-headings:text-go-neutral-900 prose-p:text-go-neutral-700"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                  
                  {/* Share */}
                  <div className="border-t border-go-neutral-200 pt-8 mt-8">
                    <Button 
                      variant="outline"
                      onClick={handleShare}
                      className="flex items-center gap-2"
                    >
                      <Share2 className="h-4 w-4" />
                      Share This Article
                    </Button>
                  </div>
                </FadeIn>
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <FadeIn direction="up" delay={100}>
                  <div className="bg-go-neutral-50 rounded-xl p-6 sticky top-32">
                    {/* Author Info */}
                    <div className="text-center mb-6">
                      {post.authorImage && (
                        <div className="inline-block rounded-full overflow-hidden w-20 h-20 mb-4">
                          <img 
                            src={post.authorImage} 
                            alt={post.author} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <h3 className="font-bold text-go-neutral-900">{post.author}</h3>
                      {post.authorTitle && (
                        <p className="text-go-neutral-600 text-sm">{post.authorTitle}</p>
                      )}
                    </div>
                    
                    {/* Related Categories */}
                    <div>
                      <h4 className="font-medium text-go-neutral-900 mb-3">Categories</h4>
                      <div className="flex flex-wrap gap-2">
                        <Link 
                          to={`/blog?category=${post.category}`}
                          className="inline-block py-1 px-3 rounded-full bg-go-blue-100 text-go-blue-700 text-sm"
                        >
                          {post.category}
                        </Link>
                        <Link 
                          to="/blog"
                          className="inline-block py-1 px-3 rounded-full bg-go-neutral-200 text-go-neutral-700 text-sm"
                        >
                          All Articles
                        </Link>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
        
        {/* Related Posts */}
        <section className="py-16 bg-go-neutral-50">
          <div className="container-custom">
            <FadeIn direction="up">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-go-neutral-900">
                Related Articles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {blogPosts
                  .filter(p => p.id !== post.id && p.category === post.category)
                  .slice(0, 3)
                  .map((relatedPost, index) => (
                    <Link 
                      key={relatedPost.id} 
                      to={`/blog/${relatedPost.id}`}
                      className="group block"
                    >
                      <div className="bg-white border border-go-neutral-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                        <div className="p-6 flex flex-col flex-grow">
                          <span className="inline-block py-1 px-3 rounded-full bg-go-blue-50 text-go-blue-700 text-xs font-medium mb-4">
                            {relatedPost.category}
                          </span>
                          <h3 className="text-xl font-bold mb-3 text-go-neutral-900 group-hover:text-go-blue-600 transition-colors duration-300">
                            {relatedPost.title}
                          </h3>
                          <p className="text-go-neutral-600 mb-6 flex-grow line-clamp-3">
                            {relatedPost.excerpt}
                          </p>
                          <div className="text-go-neutral-500 text-sm mt-auto">
                            {relatedPost.date} · {relatedPost.readTime}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
              
              <div className="flex justify-center mt-8">
                <Link 
                  to="/blog" 
                  className="inline-flex items-center text-go-blue-600 font-medium hover:text-go-blue-700"
                >
                  View All Articles
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

export default BlogPost;
