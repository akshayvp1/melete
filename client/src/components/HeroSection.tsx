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
      className="py-28 text-center relative"
      style={{
        background: 'linear-gradient(to right, #F9F9F9, #F0F0F0)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.img
          src={MeleteLogo1}
          alt="Melete Logo"
          className="mx-auto mb-6 h-20 w-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            e.currentTarget.src = MeleteLogo;
          }}
        />
        <motion.blockquote
          className="text-4xl md:text-6xl font-serif italic mb-8 max-w-4xl mx-auto"
          style={{ color: '#015F4A' }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.9 }}
        >
          “Knowing yourself is the beginning of all wisdom.”
        </motion.blockquote>
        <motion.p
          className="text-xl font-medium mb-10"
          style={{ color: '#1F6F5F' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          — Aristotle
        </motion.p>
        <motion.button
          className="px-8 py-3 rounded-full font-semibold shadow-lg bg-[#31A382] text-white hover:bg-[#2F9B7A] transition-colors duration-300"
          whileHover={{ scale: 1.1, boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </div>
      <div className="absolute inset-0 bg-black opacity-20 z-0"></div>
    </motion.section>
  );
};

export default HeroSection;