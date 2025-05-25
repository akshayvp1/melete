// import React from 'react';
// import { motion } from 'framer-motion';
// import MeleteLogo1 from '../assets/Melete-logo-2.svg';
// import MeleteLogo from '../assets/Melete-logo.svg';

// const sectionVariants = {
//   hidden: { opacity: 0, y: 60 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
// };

// const HeroSection: React.FC = () => {
//   return (
//     <motion.section
//       className="py-28 text-center relative"
//       style={{
//         background: 'linear-gradient(to right, #F9F9F9, #F0F0F0)',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//       variants={sectionVariants}
//       initial="hidden"
//       animate="visible"
//     >
//       <div className="container mx-auto px-4 relative z-10">
//         <motion.img
//           src={MeleteLogo1}
//           alt="Melete Logo"
//           className="mx-auto mb-6 h-20 w-auto"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.8 }}
//           onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
//             e.currentTarget.src = MeleteLogo;
//           }}
//         />
//         <motion.blockquote
//           className="text-4xl md:text-6xl font-serif italic mb-8 max-w-4xl mx-auto"
//           style={{ color: '#015F4A' }}
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.4, duration: 0.9 }}
//         >
//           “Knowing yourself is the beginning of all wisdom.”
//         </motion.blockquote>
//         <motion.p
//           className="text-xl font-medium mb-10"
//           style={{ color: '#1F6F5F' }}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//         >
//           — Aristotle
//         </motion.p>
//         <motion.button
//           className="px-8 py-3 rounded-full font-semibold shadow-lg bg-[#31A382] text-white hover:bg-[#2F9B7A] transition-colors duration-300"
//           whileHover={{ scale: 1.1, boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Get Started
//         </motion.button>
//       </div>
//       <div className="absolute inset-0 bg-black opacity-20 z-0"></div>
//     </motion.section>
//   );
// };

// export default HeroSection;



import React from 'react';
import { motion } from 'framer-motion';
import MeleteLogo1 from '../assets/Melete-logo-2.svg';
import MeleteLogo from '../assets/Melete-logo.svg';

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

const HeroSection: React.FC = () => {
  return (
    <motion.section
      className="py-28 text-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #31A382 0%, #FFFFF 25%, #1F6F5F 50%, #015F4A 75%, #004A3A 100%)',
        backgroundSize: '200% 200%',
        animation: 'gradientShift 8s ease infinite',
      }}
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Add CSS animation for gradient movement */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.img
          src={MeleteLogo1}
          alt="Melete Logo"
          className="mx-auto mb-6 h-20 w-auto filter drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            e.currentTarget.src = MeleteLogo;
          }}
        />
        <motion.blockquote
          className="text-4xl md:text-6xl font-serif italic mb-8 max-w-4xl mx-auto text-black drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.9 }}
        >
          "Knowing yourself is the beginning of all wisdom."
        </motion.blockquote>
        <motion.p
          className="text-xl font-medium mb-10 text-balck-100 drop-shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          — Aristotle
        </motion.p>
        <motion.button
          className="px-8 py-3 rounded-full font-semibold shadow-xl bg-white text-[#015F4A] hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-white"
          whileHover={{ 
            scale: 1.05, 
            boxShadow: '0 10px 25px rgba(255,255,255,0.3)',
            y: -2
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Get Started
        </motion.button>
      </div>
    </motion.section>
  );
};

export default HeroSection;