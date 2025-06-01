import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Flowgen Arc revolutionized our customer service. The AI handles calls with precision, reducing wait times and boosting satisfaction. Nemesis recommends it for any company aiming for efficiency and innovation.",
      author: "Aditya",
      position: "Founder",
      company: "Nemesis Technologies Ltd.",
      
    },
    {
      quote: "The AI agents are incredibly natural in conversation. Our customers often don't realize they're speaking with an AI until we tell them.",
      author: "Michael Chen",
      position: "CTO",
      company: "Crescent tech",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      quote: "We deployed FlowgenArc across our global support team and saw ROI within the first month. The scalability during peak seasons is invaluable.",
      author: "Jessica Rodriguez",
      position: "VP of Operations",
      company: "Cosmos",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="bg-black py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our <span className="text-[#00FFFF]">Clients Say</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear from businesses that have transformed their customer service with our AI call agents.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-12 left-0 transform -translate-x-1/2 text-[#00FFFF] opacity-10">
            <Quote size={160} />
          </div>
          
          <div className="relative z-10 bg-gray-900 rounded-xl p-8 md:p-12 border border-gray-800">
            <div className="md:flex items-center gap-8">
              <div className="mb-6 md:mb-0 md:w-1/3 flex justify-center">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].author} 
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-[#00FFFF]"
                />
              </div>
              <div className="md:w-2/3">
                <blockquote className="text-white text-lg md:text-xl leading-relaxed mb-6">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
                <div>
                  <p className="text-[#00FFFF] font-semibold">{testimonials[activeIndex].author}</p>
                  <p className="text-gray-400">{testimonials[activeIndex].position}, {testimonials[activeIndex].company}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="bg-gray-800 text-white hover:bg-[#00FFFF] hover:text-black p-2 rounded-full transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex ? 'bg-[#00FFFF] w-8' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="bg-gray-800 text-white hover:bg-[#00FFFF] hover:text-black p-2 rounded-full transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
