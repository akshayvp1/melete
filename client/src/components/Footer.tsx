import React from 'react';
import { motion } from 'framer-motion';
import MeleteLogo from '../assets/Melete-logo.svg';
import MeleteLogo1 from '../assets/Melete-logo-2.svg';

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="py-12 text-center"
      style={{ backgroundColor: '#015F4A', color: 'white' }}
      variants={footerVariants}
      initial="hidden"
      animate="visible"
      // Ensure footer is always in viewport
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <img
          src={MeleteLogo}
          alt="Melete Logo"
          className="h-12 w-auto mx-auto mb-6"
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            e.currentTarget.src = MeleteLogo1;
          }}
        />
        <p className="text-sm mb-4">
          &copy; {new Date().getFullYear()} Melete Wellness. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="#privacy"
            className="hover:text-[#66BFA1] transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#terms"
            className="hover:text-[#66BFA1] transition-colors duration-300"
          >
            Terms of Service
          </a>
          <a
            href="/contact"
            className="hover:text-[#66BFA1] transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;