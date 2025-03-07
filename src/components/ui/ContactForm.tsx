
import { useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from 'sonner';
import FadeIn from '../animations/FadeIn';

interface ContactFormProps {
  variant?: 'light' | 'dark';
  title?: string;
  subtitle?: string;
}

const ContactForm = ({ 
  variant = 'light', 
  title = 'Get in Touch', 
  subtitle = "We'd love to hear from you. Fill out the form below to start the conversation."
}: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Show success message
    toast.success('Your message has been sent successfully!', {
      description: 'We will get back to you as soon as possible.',
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <div className={variant === 'dark' ? 'bg-go-neutral-900 text-white' : 'bg-white text-go-neutral-900'}>
      <div className="max-w-3xl mx-auto p-6 md:p-8 lg:p-10">
        {title && (
          <FadeIn direction="up">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">{title}</h3>
          </FadeIn>
        )}
        {subtitle && (
          <FadeIn delay={100} direction="up">
            <p className={`${variant === 'dark' ? 'text-go-neutral-300' : 'text-go-neutral-600'} mb-8`}>
              {subtitle}
            </p>
          </FadeIn>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn delay={200} direction="up">
              <div>
                <label 
                  htmlFor="name" 
                  className={`block text-sm font-medium mb-2 ${variant === 'dark' ? 'text-go-neutral-300' : 'text-go-neutral-700'}`}
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-md border ${variant === 'dark' 
                    ? 'bg-go-neutral-800 border-go-neutral-700 text-white focus:border-go-blue-500' 
                    : 'bg-white border-go-neutral-200 text-go-neutral-900 focus:border-go-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-go-blue-500/20 transition-all duration-300`}
                  placeholder="John Doe"
                />
              </div>
            </FadeIn>

            <FadeIn delay={300} direction="up">
              <div>
                <label 
                  htmlFor="email" 
                  className={`block text-sm font-medium mb-2 ${variant === 'dark' ? 'text-go-neutral-300' : 'text-go-neutral-700'}`}
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-md border ${variant === 'dark' 
                    ? 'bg-go-neutral-800 border-go-neutral-700 text-white focus:border-go-blue-500' 
                    : 'bg-white border-go-neutral-200 text-go-neutral-900 focus:border-go-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-go-blue-500/20 transition-all duration-300`}
                  placeholder="john@example.com"
                />
              </div>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn delay={400} direction="up">
              <div>
                <label 
                  htmlFor="company" 
                  className={`block text-sm font-medium mb-2 ${variant === 'dark' ? 'text-go-neutral-300' : 'text-go-neutral-700'}`}
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md border ${variant === 'dark' 
                    ? 'bg-go-neutral-800 border-go-neutral-700 text-white focus:border-go-blue-500' 
                    : 'bg-white border-go-neutral-200 text-go-neutral-900 focus:border-go-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-go-blue-500/20 transition-all duration-300`}
                  placeholder="ACME Inc."
                />
              </div>
            </FadeIn>

            <FadeIn delay={500} direction="up">
              <div>
                <label 
                  htmlFor="subject" 
                  className={`block text-sm font-medium mb-2 ${variant === 'dark' ? 'text-go-neutral-300' : 'text-go-neutral-700'}`}
                >
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-md border ${variant === 'dark' 
                    ? 'bg-go-neutral-800 border-go-neutral-700 text-white focus:border-go-blue-500' 
                    : 'bg-white border-go-neutral-200 text-go-neutral-900 focus:border-go-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-go-blue-500/20 transition-all duration-300`}
                >
                  <option value="" disabled>Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Development Services">Development Services</option>
                  <option value="Marketing Services">Marketing Services</option>
                  <option value="Translation Services">Translation Services</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Career">Career</option>
                </select>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={600} direction="up">
            <div>
              <label 
                htmlFor="message" 
                className={`block text-sm font-medium mb-2 ${variant === 'dark' ? 'text-go-neutral-300' : 'text-go-neutral-700'}`}
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={`w-full px-4 py-3 rounded-md border ${variant === 'dark' 
                  ? 'bg-go-neutral-800 border-go-neutral-700 text-white focus:border-go-blue-500' 
                  : 'bg-white border-go-neutral-200 text-go-neutral-900 focus:border-go-blue-500'
                } focus:outline-none focus:ring-2 focus:ring-go-blue-500/20 transition-all duration-300`}
                placeholder="Tell us about your project or inquiry..."
              />
            </div>
          </FadeIn>

          <FadeIn delay={700} direction="up">
            <div className="flex justify-start">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex items-center justify-center space-x-2 py-3 px-8 rounded-md ${
                  variant === 'dark' 
                    ? 'bg-go-blue-500 text-white hover:bg-go-blue-600' 
                    : 'bg-go-blue-500 text-white hover:bg-go-blue-600'
                } transition-all duration-300 font-medium shadow-md hover:shadow-lg ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </div>
          </FadeIn>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
