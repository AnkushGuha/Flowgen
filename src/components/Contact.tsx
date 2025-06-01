import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

interface FormValues {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to your backend
    console.log('Form submitted:', formValues);
    
    // Simulate submission success
    setTimeout(() => {
      setIsSubmitted(true);
      setFormValues({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <section id="contact" className="bg-black py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to <span className="text-[#00FFFF]">Transform</span> Your Customer Service?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Contact us today to learn how our AI call agents can revolutionize your business communication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-black p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-[#00FFFF]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email Us</h4>
                    <a href="mailto:flowgenarc@gmail.com" className="text-gray-400 hover:text-[#00FFFF] transition-colors">
                      flowgenarc@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-black p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-[#00FFFF]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Call Us</h4>
                    <a href="tel:+18005551234" className="text-gray-400 hover:text-[#00FFFF] transition-colors">
                      +1 (800) 555-1234
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-black p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-[#00FFFF]" />
                  </div>
                
                </div>
              </div>
              
              <div className="mt-8 bg-black bg-opacity-50 rounded-lg p-6 border border-gray-800">
                <h4 className="text-white font-medium mb-4">Want a Demo?</h4>
                <p className="text-gray-400 mb-4">
                  Contact us at flowgenarc@gmail.com
                </p>
                
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <CheckCircle className="h-16 w-16 text-[#00FFFF] mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                <p className="text-gray-400 mb-6">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)} 
                  className="text-[#00FFFF] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formValues.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-[#00FFFF]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formValues.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-[#00FFFF]"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-white mb-2">
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formValues.company}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-[#00FFFF]"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-white mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formValues.phone}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-[#00FFFF]"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formValues.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-[#00FFFF]"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-[#00FFFF] hover:bg-[#00CCCC] text-black font-medium py-3 px-6 rounded-md transition-colors inline-flex items-center"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
