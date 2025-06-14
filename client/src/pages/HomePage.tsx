// import React from 'react';
// import Navbar from '../components/Navbar';
// import HeroSection from '../components/meleteProvide';
// // import MentalFitnessSection from '../components/MentalFitnessSection';
// import TherapyImprovementsSection from '../components/TherapyImprovementsSection';
// import BetterLYFCard from '../components/BetterLYFCard';
// import ConsultantsSection from '../components/counsellorsList';
// // import BooksSection from '../components/BooksSection';
// // import ContactSection from '../components/ContactSection';
// import WhatWeOffer from '../components/offer';
// import Footer from '../components/Footer';
// import SubscriptionPlans from '../components/planComponents';

// const Home: React.FC = () => {
//   const phoneNumber = '+918943175522';

//   const handleWhatsAppClick = () => {
//     const message = 'Hello, I would like to know more about your services.';
//     const encodedMessage = encodeURIComponent(message);
//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
//     window.open(whatsappUrl, '_blank');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#F9F9F9] to-white font-sans overflow-x-hidden text-gray-900">
//       <Navbar />
//       {/* Added padding-top to account for fixed Navbar height (adjust value based on actual Navbar height) */}
//       <main className="pt-16"> {/* Adjust pt-16 (64px) based on your Navbar's height */}
//         <HeroSection />
//         {/* <MentalFitnessSection /> */}
//         <TherapyImprovementsSection />
//         <BetterLYFCard />
//         <ConsultantsSection />
//         <WhatWeOffer />
//         <SubscriptionPlans/>
//         {/* <ContactSection /> */}
//       </main>
//       <Footer />
//       {/* WhatsApp Icon */}
//       <div
//         className="fixed bottom-6 right-6 z-50 cursor-pointer"
//         onClick={handleWhatsAppClick}
//         title="Chat with us on WhatsApp"
//       >
//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
//           alt="WhatsApp"
//           className="w-12 h-12 hover:scale-110 transition-transform duration-300"
//         />
//       </div>
//     </div>
//   );
// };

// export default Home;



import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/meleteProvide';
// import MentalFitnessSection from '../components/MentalFitnessSection';
import TherapyImprovementsSection from '../components/TherapyImprovementsSection';
import BetterLYFCard from '../components/BetterLYFCard';
import ConsultantsSection from '../components/counsellorsList';
// import BooksSection from '../components/BooksSection';
// import ContactSection from '../components/ContactSection';
import WhatWeOffer from '../components/offer';
import Footer from '../components/Footer';
import SubscriptionPlans from '../components/planComponents';

const Home: React.FC = () => {
  const phoneNumber = '+918943175522';

  const handleWhatsAppClick = () => {
    const message = 'Hello, I would like to know more about your services.';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

 const handleWhatsAppDownload = () => {
  const ua = navigator.userAgent || (navigator as any).vendor || (window as any).opera;

  if (/android/i.test(ua)) {
    window.open("https://play.google.com/store/apps/details?id=com.whatsapp", "_blank");
  } else if (/iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream) {
    window.open("https://apps.apple.com/app/whatsapp-messenger/id310633997", "_blank");
  } else {
    alert("Please open this link on your mobile device.");
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9F9F9] to-white font-sans overflow-x-hidden text-gray-900">
      <Navbar />
      {/* Added padding-top to account for fixed Navbar height */}
      <main className="pt-16">
        <HeroSection />
        {/* <MentalFitnessSection /> */}
        <TherapyImprovementsSection />
        <BetterLYFCard />
        <ConsultantsSection />
        <WhatWeOffer />
        <SubscriptionPlans />
        {/* <ContactSection /> */}
      </main>
      <Footer />

      {/* Download WhatsApp Button */}
      <div className="fixed bottom-20 right-6 z-50">
        <button
          onClick={handleWhatsAppDownload}
          className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
        >
          Download WhatsApp
        </button>
      </div>

      {/* WhatsApp Chat Icon */}
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
