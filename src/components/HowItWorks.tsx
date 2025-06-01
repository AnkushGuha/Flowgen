import React from 'react';
import { PhoneIncoming, Cpu, Database, HeadphonesIcon } from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon }) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
      <div className="flex-shrink-0 w-16 h-16 bg-gray-900 rounded-full border border-[#00FFFF] flex items-center justify-center text-[#00FFFF] font-bold text-xl">
        {number}
      </div>
      <div className="flex-1">
        <div className="flex items-center mb-2">
          <div className="mr-3 text-[#00FFFF]">{icon}</div>
          <h3 className="text-xl text-white font-semibold">{title}</h3>
        </div>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      icon: <PhoneIncoming size={24} />,
      title: 'Call Received',
      description: 'Customer calls are instantly routed to our AI system, which answers immediately with a personalized greeting.'
    },
    {
      number: 2,
      icon: <Cpu size={24} />,
      title: 'AI Processing',
      description: `Our advanced natural language processing analyzes the customer's intent and context in real-time.`
    },
    {
      number: 3,
      icon: <Database size={24} />,
      title: 'Data Integration',
      description: 'The AI accesses your knowledge base and CRM data to provide accurate, personalized responses.'
    },
    {
      number: 4,
      icon: <HeadphonesIcon size={24} />,
      title: 'Resolution or Handoff',
      description: 'The AI resolves standard inquiries or seamlessly transfers complex issues to human agents with full context.'
    }
  ];

  return (
    <section id="how-it-works" className="bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How It <span className="text-[#00FFFF]">Works</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our streamlined process makes implementing AI call agents simple and effective.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={step.number}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default HowItWorks;
