import React from 'react';
import { PhoneCall, MessageSquare, BarChart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-black min-h-screen flex items-center pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#00FFFF] opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#00FFFF] opacity-5 blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0iIzAwRkZGRiIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSI+PHBhdGggZD0iTTMwIDBWNjBNNjAgMzBIME0wIDAgTDYwIDYwTTYwIDAgTDAgNjAiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">Transform Your</span>
              <span className="text-[#00FFFF]">Customer Support</span>
              <span className="block">With AI Call Agents</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Our intelligent AI call agents handle customer inquiries 24/7, 
              increasing satisfaction while reducing operational costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#00FFFF] hover:bg-[#00CCCC] text-black font-medium py-3 px-6 rounded-md transition-colors">
                Get Started
              </button>
              <button className="border border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF] hover:bg-opacity-10 font-medium py-3 px-6 rounded-md transition-colors">
                Watch Demo
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-black bg-opacity-50 backdrop-blur-sm border border-[#00FFFF] border-opacity-20 rounded-xl p-6 md:p-8 shadow-[0_0_30px_rgba(0,255,255,0.2)]">
              <div className="flex justify-between items-center mb-6">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-[#00FFFF] text-xs">AI CALL AGENT</div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#00FFFF] bg-opacity-20 flex items-center justify-center">
                    <PhoneCall className="h-5 w-5 text-[#00FFFF]" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-800 p-3 rounded-lg rounded-tl-none">
                      <p className="text-white">Hello, I'm your AI assistant. How can I help you today?</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-700 p-3 rounded-lg rounded-tl-none">
                      <p className="text-white">I'd like to check the status of my recent order.</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#00FFFF] bg-opacity-20 flex items-center justify-center">
                    <BarChart className="h-5 w-5 text-[#00FFFF]" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-800 p-3 rounded-lg rounded-tl-none">
                      <p className="text-white">I can help with that. Your order #A12345 is currently being processed and will ship within 24 hours.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-700">
                <div className="flex items-center">
                  <div className="h-1 w-1 rounded-full bg-[#00FFFF] animate-pulse"></div>
                  <p className="ml-2 text-[#00FFFF] text-xs">AI agent is listening...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;