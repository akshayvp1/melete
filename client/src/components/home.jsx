


import React, { useState } from 'react';
import { Star, Moon, Heart, Sun, Users, Award, Clock, Users as UsersIcon, Monitor, Target, HeartHandshake, Link2, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MeleteLogo from '../../src/assets/Melete-logo.svg'; // Ensure paths are correct
import MeleteLogo1 from '../../src/assets/Melete-logo-2.svg';
import Background from '../../src/assets/Melete-logo-3.png';
import SelfImage from '../../src/assets/Self-Confidence.jpg';
import StressImage from '../../src/assets/stress.jpg';
import AnxietyImage from '../../src/assets/Anxiety.jpg';
import DepressionImage from '../../src/assets/Depression.jpg';
import SleepImage from '../../src/assets/Sleep-hygine.jpg';
import UnhealthyImage from '../../src/assets/Unhealthy-diet.jpg';
import LackImage from '../../src/assets/Lack-of-Physical-activity.jpg';
import Substance from '../../src/assets/Substance-abuse.jpg';
import WorkImage from '../../src/assets/Worklife-balance.jpg';
import SocialImage from '../../src/assets/Social-connection.jpg';
import DigitalImage from '../../src/assets/Digital-overloaded.jpg';
import GoalImage from '../../src/assets/Goal-direction.jpg';
import EmotionalImage from '../../src/assets/Emotional-need.jpg';
import RelationshipImage from '../../src/assets/Relationship.jpg';
import YogaImage from '../../src/assets/yoga.png';
import MindfulImage from '../../src/assets/mindfulGuide.jpg';
import EmotionalWellImage from '../../src/assets/emotional.jpg';
import ProfileImageOne from '../../src/assets/consultant1.jpg';
import ProfileImageTwo from '../../src/assets/consultant2.jpg';
import ProfileImageThree from '../../src/assets/consultant3.jpg';

export default function MeleteHomepage() {
  // Sample consultant data
  const consultants = [
    {
      name: 'Rajeev P',
      qualification: 'MSc Clinical Psychology & Diploma in Art Therapy',
      expertise: ['Workplace Stress', 'Family Therapy', 'Relationships', 'Anxiety Management'],
      languages: ['Malayalam', 'English', 'Hindi'],
      counseling: ['Individual'],
      image: ProfileImageThree,
    },
    {
      name: 'Sapna Sharma',
      qualification: 'MA in Psychology',
      expertise: ['Emotional Regulation', 'Depression', 'Stress Management', 'Confidence Building'],
      languages: ['English', 'Hindi'],
      counseling: ['Individual'],
      image: ProfileImageTwo,
    },
    {
      name: 'Varsha Patel',
      qualification: 'MPhil Clinical Psychology & MDMP',
      expertise: ['ADHD', 'Addiction Recovery', 'Depression', 'Grief Counseling'],
      languages: ['English', 'Tamil', 'Hindi'],
      counseling: ['Individual', 'Couple'],
      image: ProfileImageOne,
    },
  ];

  // What Improves With Therapy data
  const therapyImprovements = [
    { title: 'Self Confidence', desc: 'Self-confidence means believing in yourself...', icon: <Star style={{ color: '#31A382' }} />, bgImage: SelfImage },
    { title: 'Stress', desc: 'Psychological stress is the way our mind...', icon: <Moon style={{ color: '#31A382' }} />, bgImage: StressImage },
    { title: 'Anxiety', desc: 'Anxiety is a common emotion...', icon: <Heart style={{ color: '#31A382' }} />, bgImage: AnxietyImage },
    { title: 'Depression', desc: 'Depression is a common and serious...', icon: <Sun style={{ color: '#31A382' }} />, bgImage: DepressionImage },
    { title: 'Sleep Hygiene', desc: 'Sleep hygiene means having good habits...', icon: <Clock style={{ color: '#31A382' }} />, bgImage: SleepImage },
    { title: 'Unhealthy Diet', desc: 'An unhealthy diet is when someone eats...', icon: <Heart style={{ color: '#31A382' }} />, bgImage: UnhealthyImage },
    { title: 'Lack of Physical Activity', desc: 'Lack of physical activity refers to...', icon: <UsersIcon style={{ color: '#31A382' }} />, bgImage: LackImage },
    { title: 'Substance Abuse', desc: 'The use of illegal drugs or...', icon: <Award style={{ color: '#31A382' }} />, bgImage: Substance },
    { title: 'Work Life Balance', desc: 'Work-life balance means finding...', icon: <Clock style={{ color: '#31A382' }} />, bgImage: WorkImage },
    { title: 'Social Connection', desc: 'Social connection refers to...', icon: <UsersIcon style={{ color: '#31A382' }} />, bgImage: SocialImage },
    { title: 'Digital Overload', desc: 'Digital overload describes the feeling...', icon: <Monitor style={{ color: '#31A382' }} />, bgImage: DigitalImage },
    { title: 'Goal Direction', desc: 'Goal direction means having a clear...', icon: <Target style={{ color: '#31A382' }} />, bgImage: GoalImage },
    { title: 'Emotional Need', desc: 'Emotional needs are the feelings...', icon: <Heart style={{ color: '#31A382' }} />, bgImage: EmotionalImage },
    { title: 'Relationship', desc: 'Relationships play a crucial role...', icon: <HeartHandshake style={{ color: '#31A382' }} />, bgImage: RelationshipImage },
  ];

  // Books data
  const books = [
    { title: 'Mindfulness Guide', desc: 'Live in the moment.', image: MindfulImage },
    { title: 'Yoga for Peace', desc: 'Find calm through movement.', image: YogaImage },
    { title: 'Emotional Wellness', desc: 'Understand your emotions.', image: EmotionalWellImage },
  ];

  // Navigation menu items
  const navItems = [
    { name: 'How to Join', items: ['Child', 'Parent', 'Pregnant', 'Adult', 'Old Age'] },
    { name: 'Relaxation For', items: ['Anger Issues', 'Depression', 'Mood Swings', 'Stress', 'Anxiety'] },
    { name: 'My Diary', href: '#diary' },
    { name: 'Blog', href: '#blog' },
    { name: 'Login', href: '#login' },
    { name: 'Contact', href: '#contact' }, // Added Contact to nav
  ];

  // Variants for animations
  const navVariants = {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };
  const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotate: -5 },
    visible: (i) => ({ opacity: 1, y: 0, rotate: 0, transition: { delay: i * 0.1, duration: 0.7 } }),
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  // State for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // State for contact form
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate form
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log('Form submitted:', formData);
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setFormErrors({});
    } else {
      setFormErrors(errors);
    }
  };

  // Function to copy code to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => alert('Code copied: ' + text));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9F9F9] to-white font-sans overflow-x-hidden text-gray-900">
      {/* Navigation */}
      <motion.nav
        className="p-6 sticky top-0 z-50 shadow-lg"
        style={{ backgroundColor: '#015F4A', color: 'white' }}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto flex justify-between items-center">
          <motion.div className="flex items-center space-x-4" whileHover={{ scale: 1.1 }}>
            <img src={MeleteLogo} alt="Melete Logo" className="h-14 w-auto" />
            {MeleteLogo ? null : <span style={{ fontSize: '28px', fontWeight: 'bold', color: '#31A382' }}>Melete</span>}
          </motion.div>
          <div className="md:hidden">
            <button
              className="focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex space-x-10 items-center">
            {navItems.map((menu, idx) => (
              <div key={idx} className="group relative">
                {menu.items ? (
                  <>
                    <span
                      className="cursor-pointer font-semibold hover:text-[#66BFA1] transition-colors duration-300"
                      style={{ color: 'white' }}
                    >
                      {menu.name}
                    </span>
                    <motion.div
                      className="absolute hidden group-hover:flex flex-col rounded-lg shadow-2xl p-5 mt-3 min-w-[180px]"
                      style={{ backgroundColor: '#0A4F43', color: 'white' }}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      {menu.items.map((item) => (
                        <a
                          key={item}
                          href={`#${item.toLowerCase().replace(' ', '-')}`}
                          className="py-2 px-4 text-base hover:bg-[#1F6F5F] rounded-md transition-all duration-300"
                          style={{ color: 'white' }}
                        >
                          {item}
                        </a>
                      ))}
                    </motion.div>
                  </>
                ) : (
                  <a
                    href={menu.href}
                    className="font-semibold hover:text-[#66BFA1] transition-colors duration-300"
                    style={{ color: 'white' }}
                  >
                    {menu.name}
                  </a>
                )}
              </div>
            ))}
          </div>
          <motion.button
            className="px-6 py-3 rounded-full font-semibold shadow-md hidden md:block"
            style={{ backgroundColor: '#31A382', color: 'white' }}
            whileHover={{ scale: 1.1, backgroundColor: '#2F9B7A' }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden fixed inset-0 bg-[#0A4F43] z-40 flex flex-col items-center justify-center"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center space-y-6">
                {navItems.map((menu, idx) => (
                  <div key={idx} className="w-full text-center">
                    {menu.items ? (
                      <div className="group">
                        <span
                          className="font-semibold text-xl hover:text-[#66BFA1] transition-colors duration-300"
                          style={{ color: 'white' }}
                        >
                          {menu.name}
                        </span>
                        <div className="flex flex-col mt-2 space-y-2">
                          {menu.items.map((item) => (
                            <a
                              key={item}
                              href={`#${item.toLowerCase().replace(' ', '-')}`}
                              className="py-2 text-base hover:text-[#31A382] transition-all duration-300"
                              style={{ color: '#D1E8E2' }}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {item}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <a
                        href={menu.href}
                        className="font-semibold text-xl hover:text-[#66BFA1] transition-colors duration-300"
                        style={{ color: 'white' }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {menu.name}
                      </a>
                    )}
                  </div>
                ))}
                <motion.button
                  className="px-8 py-3 rounded-full font-semibold shadow-md mt-6"
                  style={{ backgroundColor: '#31A382', color: 'white' }}
                  whileHover={{ scale: 1.1, backgroundColor: '#2F9B7A' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        className="py-28 text-center relative"
        style={{ background: 'linear-gradient(to right, #F9F9F9, #F0F0F0)', backgroundImage: 'url(https://via.placeholder.com/1920x600)', backgroundSize: 'cover', backgroundPosition: 'center' }}
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
            className="px-8 py-3 rounded-full font-semibold shadow-lg"
            style={{ backgroundColor: '#31A382', color: 'white' }}
            whileHover={{ scale: 1.1, backgroundColor: '#2F9B7A' }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
        <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
      </motion.section>

      {/* Mental Fitness Section */}
      <motion.section
        className="py-24 text-center relative"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-[#015F4A] opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ color: '#666' }}>
            How Can You Become Mentally Fit?
          </h2>
          <motion.div
            className="relative w-full max-w-lg mx-auto h-72 mb-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <svg className="w-full h-full" viewBox="0 0 200 200">
              <motion.circle
                cx="100"
                cy="100"
                r="60"
                fill="none"
                stroke="#31A382"
                strokeWidth="6"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
              />
              <motion.path
                d="M70 100 C70 120 130 120 130 100"
                fill="none"
                stroke="#31A382"
                strokeWidth="6"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.g initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse' }}>
                <Heart style={{ color: '#31A382' }} className="w-12 h-12" x="90" y="90" />
              </motion.g>
            </svg>
          </motion.div>
          <p className="text-lg max-w-3xl mx-auto mb-12 leading-relaxed" style={{ color: '#666' }}>
            Mental fitness is about cultivating resilience, balance, and clarity through mindfulness, self-reflection, and healthy habits...
          </p>
          <motion.button
            className="px-10 py-4 rounded-full font-semibold shadow-xl"
            style={{ backgroundColor: '#31A382', color: 'white' }}
            whileHover={{ scale: 1.1, backgroundColor: '#2F9B7A' }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
      </motion.section>

      {/* What Improves With Therapy */}
      <motion.section
        className="py-24 text-center"
        style={{ backgroundColor: '#F9F9F9' }}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#015F4A' }}>
            What You Can Improve With Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {therapyImprovements.map((item, index) => (
              <motion.div
                key={item.title}
                className="p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                style={{ minHeight: '300px', backgroundImage: `url(${item.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover="hover"
              >
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                  <div className="mb-5">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-3 text-center">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-center max-w-xs">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* BetterLYF Card */}
      {/* BetterLYF Card */}
<motion.section
  className="py-10 text-center"
  variants={sectionVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <div className="container mx-auto px-4">
    <motion.div
      className="p-6 rounded-xl flex flex-col items-center justify-center"
      style={{ backgroundColor: '#015F4A', color: 'white', minHeight: '150px', border: '2px dashed #31A382', position: 'relative' }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h3 className="text-xl font-bold mb-2">“Crush Goals, Collect Rewards.”
      Your habit Just became your hustle</h3>
      <p className="text-md mb-4">Complete Your Daily Target And Achieve Your Coins</p>
      <div className="flex space-x-4">
        <span className="px-4 py-2 bg-white text-[#015F4A] rounded-md font-semibold">Refer Your Friends</span>
      </div>
      <div className="absolute top-0 left-4 w-4 h-4 bg-white rounded-full transform -translate-y-1/2"></div>
      <div className="absolute top-0 right-4 w-4 h-4 bg-white rounded-full transform -translate-y-1/2"></div>
    </motion.div>
  </div>
</motion.section>

      {/* Consultant Cards */}
      <motion.section
        className="py-24 text-center"
        style={{ backgroundColor: 'white' }}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#015F4A' }}>
            Meet Our Certified Professionals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {consultants.map((consultant, index) => (
              <motion.div
                key={consultant.name}
                className="p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                style={{ backgroundColor: '#F9F9F9', border: '1px solid #F0F0F0' }}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover="hover"
              >
                <motion.img
                  src={consultant.image}
                  alt={consultant.name}
                  className="w-36 h-36 rounded-full mx-auto mb-5 object-cover"
                  style={{ border: '4px solid #66BFA1' }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />
                <h3 className="text-xl font-bold mb-3" style={{ color: '#015F4A' }}>
                  {consultant.name}
                </h3>
                <p className="text-gray-600 mb-2 text-sm">{consultant.qualification}</p>
                <p className="text-gray-600 mb-2 text-sm">
                  <strong>Expertise:</strong> {consultant.expertise.join(', ')}
                </p>
                <p className="text-gray-600 mb-2 text-sm">
                  <strong>Languages:</strong> {consultant.languages.join(', ')}
                </p>
                <p className="text-gray-600 mb-5 text-sm">
                  <strong>Counseling:</strong> {consultant.counseling.join(', ')}
                </p>
                <motion.button
                  className="px-6 py-2 rounded-full font-semibold"
                  style={{ backgroundColor: '#31A382', color: 'white' }}
                  whileHover={{ scale: 1.1, backgroundColor: '#2F9B7A' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => alert(`Booking session with ${consultant.name}`)}
                >
                  Book Session
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Books Section */}
      <motion.section
        className="py-24 text-center"
        style={{ backgroundColor: '#F0F0F0' }}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#015F4A' }}>
            Explore Our Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {books.map((book, index) => (
              <motion.div
                key={book.title}
                className="p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                style={{ backgroundColor: 'white', border: '1px solid #F0F0F0' }}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover="hover"
              >
                <motion.img
                  src={book.image}
                  alt={book.title}
                  className="w-28 h-28 rounded-full mx-auto mb-5 object-cover"
                  style={{ border: '2px solid #66BFA1' }}
                  initial={{ rotate: -10 }}
                  animate={{ rotate: 0 }}
                  transition={{ duration: 0.6 }}
                />
                <h3 className="text-lg font-semibold mb-3" style={{ color: '#015F4A' }}>
                  {book.title}
                </h3>
                <p className="text-gray-600 text-sm">{book.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-24 text-center"
        style={{ backgroundColor: '#F9F9F9' }}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#015F4A' }}>
            Get in Touch
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-12 leading-relaxed" style={{ color: '#666' }}>
            Have a question or need support? Reach out to us, and we’ll get back to you as soon as possible.
          </p>
          <motion.form
            className="max-w-lg mx-auto p-6 rounded-xl shadow-md"
            style={{ backgroundColor: 'white', border: '1px solid #F0F0F0' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-left text-sm font-semibold mb-2" style={{ color: '#015F4A' }}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2"
                style={{ borderColor: '#D1E8E2', focusRingColor: '#31A382' }}
                placeholder="Your Name"
              />
              {formErrors.name && (
                <p className="text-red-500 text-sm mt-1 text-left">{formErrors.name}</p>
              )}
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-left text-sm font-semibold mb-2" style={{ color: '#015F4A' }}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2"
                style={{ borderColor: '#D1E8E2', focusRingColor: '#31A382' }}
                placeholder="Your Email"
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-1 text-left">{formErrors.email}</p>
              )}
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-left text-sm font-semibold mb-2" style={{ color: '#015F4A' }}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2"
                style={{ borderColor: '#D1E8E2', focusRingColor: '#31A382', minHeight: '120px' }}
                placeholder="Your Message"
              ></textarea>
              {formErrors.message && (
                <p className="text-red-500 text-sm mt-1 text-left">{formErrors.message}</p>
              )}
            </div>
            <motion.button
              type="submit"
              className="w-full px-6 py-3 rounded-full font-semibold flex items-center justify-center space-x-2"
              style={{ backgroundColor: '#31A382', color: 'white' }}
              whileHover={{ scale: 1.05, backgroundColor: '#2F9B7A' }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Submit</span>
              <Send size={18} />
            </motion.button>
          </motion.form>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="py-12 text-center"
        style={{ backgroundColor: '#015F4A', color: 'white' }}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.img
            src={MeleteLogo}
            alt="Melete Logo"
            className="mx-auto mb-8 h-16 w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          />
          <motion.div
            className="flex justify-center space-x-10 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {[
              { href: '#facebook', icon: <Heart style={{ color: '#66BFA1' }} className="w-8 h-8" /> },
              { href: '#twitter', icon: <Sun style={{ color: '#66BFA1' }} className="w-8 h-8" /> },
              { href: '#instagram', icon: <Star style={{ color: '#66BFA1' }} className="w-8 h-8" /> },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                whileHover={{ scale: 1.3, rotate: 15 }}
                transition={{ duration: 0.4 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
          <p className="text-gray-300 mb-6">© {new Date().getFullYear()} Melete Wellness Private Limited. All rights reserved.</p>
          <div className="flex justify-center space-x-10 mb-6">
            {[
              { href: '#privacy', text: 'Privacy Policy' },
              { href: '#terms', text: 'Terms' },
              { href: '#refund', text: 'Refund Policy' },
            ].map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="hover:text-[#66BFA1] transition-colors duration-300"
                style={{ color: 'gray' }}
              >
                {link.text}
              </a>
            ))}
          </div>
         
        </div>
      </motion.footer>
    </div>
  );
}