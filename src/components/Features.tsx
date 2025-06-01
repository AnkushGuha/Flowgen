import React from 'react';
import { 
  Clock, 
  UserCheck, 
  TrendingUp, 
  Award, 
  Globe, 
  MessageSquare 
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-[#00FFFF] hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] transition-all duration-300">
      <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
        <div className="text-[#00FFFF]">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Clock size={24} />,
      title: '24/7 Availability',
      description: 'Our AI agents are always available to assist your customers, any time of day or night.'
    },
    {
      icon: <UserCheck size={24} />,
      title: 'Human-Like Interactions',
      description: 'Natural language processing creates conversational experiences that feel personal.'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Scalable Support',
      description: 'Handle hundreds of simultaneous calls during peak times without increasing costs.'
    },
    {
      icon: <Award size={24} />,
      title: 'Consistent Quality',
      description: 'Every customer receives the same high-quality experience with every interaction.'
    },
    {
      icon: <Globe size={24} />,
      title: 'Multilingual Support',
      description: 'Communicate with customers in multiple languages to serve global audiences.'
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'Seamless Integration',
      description: 'Easily integrates with your existing CRM and customer support systems.'
    }
  ];

  return (
    <section id="features" className="bg-black py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Revolutionary <span className="text-[#00FFFF]">AI Features</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our AI call agents leverage cutting-edge technology to deliver exceptional customer experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;