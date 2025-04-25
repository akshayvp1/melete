import React from 'react';
import { motion } from 'framer-motion';
import ConsultantCard from './ConsultantCard';
import ProfileImageOne from '../assets/alip.jpg';
import ProfileImageTwo from '../assets/sandrap.jpg';
import ProfileImageThree from '../assets/bincyKV.jpg';
import { Consultant } from '../types/types';

const consultants: Consultant[] = [
  {
    name: 'ALI P',
    qualification: 'Msc psychology',
    expertise: ['Stress & Anxiety Management',
        "Relationship Issues",
        "Family Counselling",
        "Exam-Related Issues"
      ],
    languages: ['Malayalam', 'Tamil'],
    counseling: ['Individual'],
    image: ProfileImageOne,
  },
  {
    name: 'BiNCY KV ',
    qualification: 'MSc Psychology ',
    expertise: ['workplace stress', 'family therapy', 'Psycho education', 'Relationships', 'Anxiety management', 'Behavioural issues', 'Academic backwardness' ],
    languages: ['Malayalam', 'English', 'Hindi'],
    counseling: ['Individual'],
    image: ProfileImageThree,
  },
  {
    name: 'SANDRA P',
    qualification: 'Msc.Psychology',
    expertise: ['Anxiety' , 'Depression' ,'Stress management','psychoeducation'],
    languages: ['Malayalam'],
    counseling: ['Group and Individual'],
    image: ProfileImageTwo,
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