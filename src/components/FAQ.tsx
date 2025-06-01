import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItem & { isOpen: boolean; toggle: () => void }> = ({ 
  question, 
  answer, 
  isOpen, 
  toggle 
}) => {
  return (
    <div className="border-b border-gray-800">
      <button
        className="flex justify-between items-center w-full py-5 text-left"
        onClick={toggle}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-white">{question}</h3>
        <span className="text-[#00FFFF]">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      {isOpen && (
        <div className="pb-5 text-gray-400">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "How accurate is the AI in understanding customer requests?",
      answer: "Our AI system has a 95%+ accuracy rate in understanding customer intent. It's trained on millions of customer service interactions and continuously improves through machine learning. For complex or ambiguous requests, the AI can ask clarifying questions or smoothly transfer to a human agent."
    },
    {
      question: "Can the AI call agents integrate with our existing systems?",
      answer: "Yes, our AI call agents are designed to integrate seamlessly with most popular CRM systems, helpdesk software, and customer service platforms. We provide APIs and pre-built integrations for Salesforce, Zendesk, Hubspot, and many others. Our team can work with you to ensure smooth integration with your existing tech stack."
    },
    {
      question: "How quickly can we implement the AI call solution?",
      answer: "Most businesses can be up and running with our standard implementation in 2-4 weeks. This includes integration, initial training of the AI on your specific products and services, and testing. For enterprise solutions with extensive customization, implementation may take 6-8 weeks. We provide a dedicated implementation team to ensure a smooth transition."
    },
    {
      question: "How does the AI handle sensitive customer information?",
      answer: "Security and privacy are our top priorities. Our systems are GDPR and CCPA compliant, and we use enterprise-grade encryption for all data. The AI is designed to collect only necessary information and can be configured to automatically redact sensitive data like credit card numbers. All data storage and processing follows industry best practices for security."
    },
    {
      question: "What languages do the AI call agents support?",
      answer: "Our AI call agents currently support over 20 languages including English, Spanish, French, German, Mandarin, Japanese, Arabic, Portuguese, and many others. The AI maintains high comprehension rates across all supported languages and can even handle callers who switch between languages during a conversation."
    },
    {
      question: "What happens if the AI cannot resolve a customer issue?",
      answer: "If the AI determines it cannot resolve an issue (based on complexity or customer preference), it seamlessly transfers the call to a human agent. During transfer, the AI provides the human agent with a complete transcript and summary of the conversation so the customer doesn't have to repeat information. This handoff is designed to be smooth and non-disruptive."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked <span className="text-[#00FFFF]">Questions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about our AI call agent technology.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggle={() => toggleFAQ(index)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Don't see your question here? Contact our team for more information.
          </p>
          <button className="bg-[#00FFFF] hover:bg-[#00CCCC] text-black font-medium py-3 px-8 rounded-md transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;