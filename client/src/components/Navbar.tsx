import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import MeleteLogo from '../assets/Melete-logo.svg';
import MeleteLogo1 from '../assets/Melete-logo-2.svg';
import { NavItem } from '../types/types';

const navItems: NavItem[] = [
  { name: 'Who Joined With Melete', items: ['Child', 'Parent', 'Pregnant', 'Adult', 'Old Age'] },
  { name: 'Relaxation For', items: ['Anger Issues', 'Depression', 'Mood Swings', 'Stress', 'Anxiety'] },
  { name: 'Habit Vault', items: ['Todo-List', 'Goal Setting', 'Habit Formation', 'Wellness Activities'] },
  { name: 'Blog', href: '/blog' },
  { name: 'Login', href: '/login' },
  { name: 'Contact', href: '/contact' },
];

const navVariants = {
  hidden: { opacity: 0, y: -60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  return (
    <motion.nav
      className="p-6 sticky top-0 z-50 shadow-lg"
      style={{ backgroundColor: '#015F4A', color: 'white' }}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div className="flex items-center space-x-4" whileHover={{ scale: 1.1 }}>
          <NavLink to="/">
            <img
              src={MeleteLogo}
              alt="Melete Logo"
              className="h-14 w-auto"
              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                e.currentTarget.src = MeleteLogo1;
              }}
            />
          </NavLink>
        </motion.div>
        <div className="md:hidden">
          <button
            className="focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex space-x-10 items-center">
          {navItems.map((menu, idx) => (
            <div key={idx} className="group relative">
              {menu.items ? (
                <>
                  <span
                    className="cursor-pointer font-semibold hover:text-[#66BFA1] transition-colors duration-300 flex items-center"
                    style={{ color: 'white' }}
                  >
                    {menu.name}
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </span>
                  <motion.div
                    className="absolute hidden group-hover:flex flex-col rounded-lg shadow-2xl p-5 mt-3 min-w-[180px]"
                    style={{ backgroundColor: '#0A4F43', color: 'white' }}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {menu.items.map((item) => (
                      <NavLink
                        key={item}
                        to={`/${item.toLowerCase().replace(' ', '-')}`}
                        className="py-2 px-4 text-base hover:bg-[#1F6F5F] rounded-md transition-all duration-300"
                        style={{ color: 'white' }}
                      >
                        {item}
                      </NavLink>
                    ))}
                  </motion.div>
                </>
              ) : (
                <NavLink
                  to={menu.href || '#'}
                  className={({ isActive }) =>
                    `font-semibold transition-colors duration-300 ${
                      isActive ? 'text-[#66BFA1]' : 'text-white hover:text-[#66BFA1]'
                    }`
                  }
                >
                  {menu.name}
                </NavLink>
              )}
            </div>
          ))}
          <motion.button
            className="px-6 py-3 rounded-full font-semibold shadow-md hidden md:block"
            style={{ backgroundColor: '#31A382', color: 'white' }}
            whileHover={{ scale: 1.1, backgroundColor: '#2F9B7A' }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-[#0A4F43] z-50 flex flex-col"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center p-6 border-b border-[#1F6F5F]">
              <NavLink to="/">
                <img
                  src={MeleteLogo}
                  alt="Melete Logo"
                  className="h-12 w-auto"
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    e.currentTarget.src = MeleteLogo1;
                  }}
                />
              </NavLink>
              <button
                className="focus:outline-none"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close mobile menu"
              >
                <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              {navItems.map((menu, idx) => (
                <div key={idx} className="mb-4">
                  {menu.items ? (
                    <div>
                      <button
                        className="w-full flex justify-between items-center font-semibold text-lg text-white hover:text-[#66BFA1] transition-colors duration-300 py-2"
                        onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                      >
                        {menu.name}
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${
                            openDropdown === idx ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === idx && (
                          <motion.div
                            className="flex flex-col bg-[#1F6F5F] rounded-lg mt-2 p-4"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {menu.items.map((item) => (
                              <NavLink
                                key={item}
                                to={`/${item.toLowerCase().replace(' ', '-')}`}
                                className="py-2 text-base text-[#D1E8E2] hover:text-[#31A382] transition-colors duration-300 text-left"
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setOpenDropdown(null);
                                }}
                              >
                                {item}
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink
                      to={menu.href || '#'}
                      className={({ isActive }) =>
                        `block font-semibold text-lg transition-colors duration-300 py-2 ${
                          isActive ? 'text-[#66BFA1]' : 'text-white hover:text-[#66BFA1]'
                        }`
                      }
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setOpenDropdown(null);
                      }}
                    >
                      {menu.name}
                    </NavLink>
                  )}
                </div>
              ))}
              <motion.button
                className="w-full px-8 py-3 rounded-full font-semibold shadow-md mt-6"
                style={{ backgroundColor: '#31A382', color: 'white' }}
                whileHover={{ scale: 1.05, backgroundColor: '#2F9B7A' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setOpenDropdown(null);
                }}
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;