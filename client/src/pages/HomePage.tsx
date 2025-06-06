


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
  const phoneNumber = '+918943175522';

  const handleWhatsAppClick = () => {
    const message = 'Hello, I would like to know more about your services.';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

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
      {/* WhatsApp Icon */}
      <div
        className="fixed bottom-6 right-6 z-50 cursor-pointer"
        onClick={handleWhatsAppClick}
        title="Chat with us on WhatsApp"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-12 h-12 hover:scale-110 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default Home;