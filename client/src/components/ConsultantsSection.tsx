import React from 'react';
import { motion } from 'framer-motion';
import ConsultantCard from './ConsultantCard';
import ProfileImageOne from '../assets/consultant1.jpg';
import ProfileImageTwo from '../assets/consultant2.jpg';
import ProfileImageThree from '../assets/consultant3.jpg';
import { Consultant } from '../types/types';

const consultants: Consultant[] = [
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

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

const ConsultantsSection: React.FC = () => {
  return (
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
            <ConsultantCard key={consultant.name} consultant={consultant} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ConsultantsSection;