import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update page title
    document.title = "FlowgenArc - Revolutionizing Customer Service with AI Call Agents";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
