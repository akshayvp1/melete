import React from 'react';
import Navbar from '../components/Navbar';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9F9F9] to-white font-sans overflow-x-hidden text-gray-900">
      <Navbar />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default ContactPage;