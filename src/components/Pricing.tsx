import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

interface PlanFeature {
  feature: string;
  starter: boolean;
  business: boolean;
  enterprise: boolean;
}

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      monthlyPrice: 500,
      annualPrice: 425,
      features: ['Up to 500 call minutes/month', '24/7 AI call handling', 'Basic analytics dashboard', 'Email support']
    },
    {
      name: 'Business',
      description: 'Ideal for growing companies with moderate call volume',
      monthlyPrice: 800,
      annualPrice: 660,
      features: ['Unlimited minutes', '24/7 AI call handling', 'Basic analytics', 'Priority support']
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with high call volumes',
      monthlyPrice: 1200,
      annualPrice: 1020,
      features: ['Unlimited call minutes', '24/7 AI call handling', 'Custom AI training', 'Full CRM & API integrations', 'Dedicated support team', 'Custom reporting']
    }
  ];

  const featureComparison: PlanFeature[] = [
    { feature: '24/7 AI call handling', starter: true, business: true, enterprise: true },
    { feature: 'Natural language processing', starter: true, business: true, enterprise: true },
    { feature: 'Call recording', starter: true, business: true, enterprise: true },
    { feature: 'Basic analytics', starter: true, business: true, enterprise: true },
    { feature: 'CRM integration', starter: false, business: true, enterprise: true },
    { feature: 'Multi-language support', starter: false, business: true, enterprise: true },
    { feature: 'Custom AI training', starter: false, business: false, enterprise: true },
    { feature: 'API access', starter: false, business: false, enterprise: true },
    { feature: 'Dedicated account manager', starter: false, business: false, enterprise: true },
  ];

  return (
    <section id="pricing" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Simple, Transparent <span className="text-[#00FFFF]">Pricing</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your business needs with no hidden fees.
          </p>
          
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gray-800 p-1 rounded-full inline-flex">
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  isAnnual ? 'bg-[#00FFFF] text-black' : 'text-white'
                }`}
                onClick={() => setIsAnnual(true)}
              >
                Annual (Save 15%)
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  !isAnnual ? 'bg-[#00FFFF] text-black' : 'text-white'
                }`}
                onClick={() => setIsAnnual(false)}
              >
                Monthly
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] ${
                index === 1 ? 'border-2 border-[#00FFFF] transform md:-translate-y-4' : 'border border-gray-700'
              }`}
            >
              {index === 1 && (
                <div className="bg-[#00FFFF] text-black text-center py-1 font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-[#00FFFF] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-md font-medium transition-colors ${
                  index === 1 
                    ? 'bg-[#00FFFF] text-black hover:bg-[#00CCCC]' 
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Feature Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="pb-4 text-left text-gray-400 font-medium">Features</th>
                  <th className="pb-4 text-center text-white font-medium">Starter</th>
                  <th className="pb-4 text-center text-white font-medium">Business</th>
                  <th className="pb-4 text-center text-white font-medium">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {featureComparison.map((item, index) => (
                  <tr key={index} className="border-b border-gray-800">
                    <td className="py-4 text-gray-300">{item.feature}</td>
                    <td className="py-4 text-center">
                      {item.starter ? 
                        <Check className="h-5 w-5 text-[#00FFFF] mx-auto" /> : 
                        <X className="h-5 w-5 text-gray-500 mx-auto" />
                      }
                    </td>
                    <td className="py-4 text-center">
                      {item.business ? 
                        <Check className="h-5 w-5 text-[#00FFFF] mx-auto" /> : 
                        <X className="h-5 w-5 text-gray-500 mx-auto" />
                      }
                    </td>
                    <td className="py-4 text-center">
                      {item.enterprise ? 
                        <Check className="h-5 w-5 text-[#00FFFF] mx-auto" /> : 
                        <X className="h-5 w-5 text-gray-500 mx-auto" />
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
