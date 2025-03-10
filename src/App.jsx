import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CompanyLogo from './components/CompanyLogo';
import PurposeSection from './components/PurposeSection';
import FeatureSection from './components/FeatureSection';
import SechduelSection from './components/SechduelSection';
import MonitarSection from './components/MonitarSection';
import PricingSection from './components/PricingSection';
import ServicesSection from './components/ServicesSection';
import Testimonial from './components/Testimonial';
import Newslettersection from './components/Newslettersection';
import Footer from './components/Footer';

function App() {
  
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className='-top-28 -left-28 absolute w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] z-10'></div>
      <div className='overflow-hidden'>
        <Navbar />
        <Hero />
        <CompanyLogo />
        <PurposeSection />
        <FeatureSection />
        <SechduelSection />
        <MonitarSection />
        <PricingSection />
        <ServicesSection />
        <Testimonial />
        <Newslettersection />
        <Footer />
      </div>
    </main>
  );
}

export default App
