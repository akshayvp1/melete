import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import MentalFitnessSection from '../components/MentalFitnessSection';
import TherapyImprovementsSection from '../components/TherapyImprovementsSection';
import BetterLYFCard from '../components/BetterLYFCard';
import ConsultantsSection from '../components/ConsultantsSection';
import BooksSection from '../components/BooksSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9F9F9] to-white font-sans overflow-x-hidden text-gray-900">
      <Navbar />
      <HeroSection />
      <MentalFitnessSection />
      <TherapyImprovementsSection />
      <BetterLYFCard />
      <ConsultantsSection />
      <BooksSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;