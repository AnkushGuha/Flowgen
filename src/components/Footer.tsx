import React from 'react';
import { Phone, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Phone className="h-8 w-8 text-[#00FFFF]" />
              <span className="ml-2 text-2xl font-bold text-white">FlowgenArc</span>
            </div>
            <p className="text-gray-400 mb-6">
              Revolutionizing customer service with advanced AI call agents. 
              Seamless conversations, amazing results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#00FFFF] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00FFFF] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00FFFF] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00FFFF] transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Features', 'How It Works', 'Pricing', 'Testimonials', 'FAQ'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-gray-400 hover:text-[#00FFFF] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {['Blog', 'Case Studies', 'Documentation', 'Guides', 'Support'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-[#00FFFF] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <span className="block">Email:</span>
                <a href="mailto:info@horizonai.com" className="text-[#00FFFF]">flowgenarc@gmail.com</a>
              </li>
              <li>
                <span className="block">Phone:</span>
                <a href="tel:+18005551234" className="text-[#00FFFF]">+1 (800) 555-1234</a>
              </li>
              
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()}FlowgenArc. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-[#00FFFF] transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-[#00FFFF] transition-colors">Terms of Service</a>
            <button 
              onClick={scrollToTop}
              className="text-gray-500 hover:text-[#00FFFF] transition-colors flex items-center"
            >
              <span className="mr-1">Back to Top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
