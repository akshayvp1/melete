// import React from 'react';
// import { motion } from 'framer-motion';
// import ConsultantCard from './ConsultantCard';
// import ProfileImageOne from '../assets/alip.jpg';
// import ProfileImageTwo from '../assets/sandrap.jpg';
// import ProfileImageThree from '../assets/bincy.jpg';
// import { Consultant } from '../types/types';

// const consultants: Consultant[] = [
//   {
//     name: 'ALI P',
//     qualification: 'Msc psychology',
//     expertise: ['Stress & Anxiety Management',
//         "Relationship Issues",
//         "Family Counselling",
//         "Exam-Related Issues"
//       ],
//     languages: ['Malayalam', 'Tamil'],
//     counseling: ['Individual'],
//     image: ProfileImageOne,
//   },
//   {
//     name: 'BINCY VK ',
//     qualification: 'MSc Psychology ',
//     expertise: ['workplace stress', 'family therapy', 'Psycho education', 'Relationships', 'Anxiety management', 'Behavioural issues', 'Academic backwardness' ],
//     languages: ['Malayalam', 'English', 'Hindi'],
//     counseling: ['Individual'],
//     image: ProfileImageThree,
//   },
//   {
//     name: 'SANDRA P',
//     qualification: 'Msc Sports Psychology',
//     expertise: [ 'Adolescents &  Child Counselling' ,' Family Therapy',
//     ],
//     languages: ['Malayalam','English'],
//     counseling: ['Group and Individual'],
//     image: ProfileImageTwo,
//   },
//   {
//     name: 'SUHAIRA VP',
//     qualification: 'Msc.Psychology',
//     expertise: ['Adolescents &  Child Counselling ', 'Family Therapy'],
//     languages: ['Malayalam','English'],
//     counseling: ['Group and Individual'],
//     image: ProfileImageTwo,
//   },
//   {
//     name: 'SHIFANA SIDDIQ NV',
//     qualification: 'Msc.Psychology',
//     expertise: ['General Psychiatry',

//       'Child & Adolescent Cases',
      
//       'Developmental Disorders',
      
//       'Addiction & Substance Use Disorders',
      
//       'Family Therapy',
      
//       'Anxiety Management',
      
//       'Behavioural Issues',
      
//       'Sleep-Related Concerns',
//       ],
//     languages: ['Malayalam','English'],
//     counseling: ['Individual Therapy Sessions'],
//     image: ProfileImageTwo,
//   },
//   {
//     name: 'ANUPAMA SURENDRAN K',
//     qualification: 'Consultant Psychologist & Psychotherapist MSc Psychology',
//     expertise: ['Child & Adolescent Issues',

//       'Behavioral Therapy',
      
//      ' Family & Relationship Conflicts',
      
//       'Stress & Anxiety Management',
      
//      ' Identity Confusion & Emotional Difficulties',
      
//       'Academic and Developmental Challenges',
//       ],
//     languages: ['Malayalam','English','Hindi'],
//     counseling: ['Individual'],
//     image: ProfileImageTwo,
//   },
//   {
//     name: 'MINNA K',
//     qualification: 'M.Sc. in Counseling Psychology',
//     expertise: ['General Psychiatry',

//       'Child & Adolescent Cases',
      
//      ' Developmental Disorders',
      
//       'Addiction & Substance Use Disorders',
      
//       'Family Therapy',
      
//       'Anxiety Management',
      
//       'Behavioural Issues',
      
//      ' Sleep-Related Concerns',
//       ],
//     languages: ['Malayalam','English'],
//     counseling: ['Individual Therapy Sessions'],
//     image: ProfileImageTwo,
//   },
//   {
//     name: 'SWATHY KRISHNA T',
//     qualification: 'Msc.Psychology',
//     expertise: ['workplace stress', 'family therapy', 'Relationships', 'Anxiety management', 'Behavioural issues', 'Academic backwardness'],
//     languages: ['Malayalam','English'],
//     counseling: ['Individual'],
//     image: ProfileImageTwo,
//   },
  
// ];

// const sectionVariants = {
//   hidden: { opacity: 0, y: 60 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
// };


// const ConsultantsSection: React.FC = () => {
//   return (
//     <motion.section
//       className="py-24 text-center"
//       style={{ backgroundColor: 'white' }}
//       variants={sectionVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//     >
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#015F4A' }}>
//           Meet Our Certified Professionals
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {consultants.map((consultant, index) => (
//             <ConsultantCard key={consultant.name} consultant={consultant} index={index} />
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default ConsultantsSection;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ConsultantCard from './ConsultantCard';
import ProfileImageOne from '../assets/alip.jpg';
import ProfileImageTwo from '../assets/sandra.jpg';
import ProfileImageThree from '../assets/bincy.jpg';
import profileImageFour from '../assets/anupama.jpg'
import profileImageFive from '../assets/minnak.jpg'
import ProfileImageSix from '../assets/shifanasiddiqnv.jpg'
import ProfileImageSeven from '../assets/swathykrishna.jpg'
import ProfileImageNine from '../assets/suhairavp-1.png'

import { Consultant } from '../types/types';

const consultants: Consultant[] = [
  {
    name: 'ANUPAMA SURENDRAN K',
    qualification: 'Consultant Psychologist & Psychotherapist MSc Psychology',
    expertise: [
      'Child & Adolescent Issues',
      'Behavioral Therapy',
      'Family & Relationship Conflicts',
      'Stress & Anxiety Management',
      'Identity Confusion & Emotional Difficulties',
      'Academic and Developmental Challenges',
    ],
    languages: ['Malayalam', 'English', 'Hindi'],
    counseling: ['Individual'],
    image: profileImageFour,
    experience: '2 years',
  },
  {
    name: 'SWATHY KRISHNA T',
    qualification: 'Msc.Psychology',
    expertise: [
      'workplace stress',
      'family therapy',
      'Relationships',
      'Anxiety management',
      'Behavioural issues',
      'Academic backwardness',
    ],
    languages: ['Malayalam', 'English'],
    counseling: ['Individual'],
    image: ProfileImageSeven,
    experience: '2 years',
  },
  {
    name: 'SHIFANA SIDDIQ NV',
    qualification: 'Msc.Psychology',
    expertise: [
      'General Psychiatry',
      'Child & Adolescent Cases',
      'Developmental Disorders',
      'Addiction & Substance Use Disorders',
      'Family Therapy',
      'Anxiety Management',
      'Behavioural Issues',
      'Sleep-Related Concerns',
    ],
    languages: ['Malayalam', 'English'],
    counseling: ['Individual Therapy Sessions'],
    image: ProfileImageSix,
    experience: '1+ year',
  },
  {
    name: 'MINNA K',
    qualification: 'M.Sc. in Counseling Psychology',
    expertise: [
      'General Psychiatry',
      'Child & Adolescent Cases',
      'Developmental Disorders',
      'Addiction & Substance Use Disorders',
      'Family Therapy',
      'Anxiety Management',
      'Behavioural Issues',
      'Sleep-Related Concerns',
    ],
    languages: ['Malayalam', 'English'],
    counseling: ['Individual Therapy Sessions'],
    image: profileImageFive,
    experience: '1+ year',
  },
  {
    name: 'ALI P',
    qualification: 'Msc psychology',
    expertise: [
      'Stress & Anxiety Management',
      'Relationship Issues',
      'Family Counselling',
      'Exam-Related Issues',
    ],
    languages: ['Malayalam', 'Tamil'],
    counseling: ['Individual'],
    image: ProfileImageOne,
  },
  {
    name: 'BINCY VK',
    qualification: 'MSc Psychology',
    expertise: [
      'workplace stress',
      'family therapy',
      'Psycho education',
      'Relationships',
      'Anxiety management',
      'Behavioural issues',
      'Academic backwardness',
    ],
    languages: ['Malayalam', 'English', 'Hindi'],
    counseling: ['Individual'],
    image: ProfileImageThree,
  },
  {
    name: 'SANDRA P',
    qualification: 'Msc Sports Psychology',
    expertise: ['Adolescents & Child Counselling', 'Family Therapy'],
    languages: ['Malayalam', 'English'],
    counseling: ['Group and Individual'],
    image: ProfileImageTwo,
  },
  {
    name: 'SUHAIRA VP',
    qualification: 'Msc.Psychology',
    expertise: ['Adolescents & Child Counselling', 'Family Therapy'],
    languages: ['Malayalam', 'English'],
    counseling: ['Group and Individual'],
    image: ProfileImageNine,
  },
].sort((a, b) => {
  // Prioritize consultants with experience
  if (a.experience && !b.experience) {
    // Sort by experience: 2 years before 1+ year
    if (a.experience === '2 years' && b.experience !== '2 years') return -1;
    if (a.experience !== '2 years' && b.experience === '2 years') return 1;
    return 0;
  }
  if (!a.experience && b.experience) {
    return 1;
  }
  // For non-experienced, ensure Ali P comes first among them
  if (!a.experience && !b.experience) {
    if (a.name === 'ALI P') return -1;
    if (b.name === 'ALI P') return 1;
    // Sort by qualification
    if (a.qualification < b.qualification) return -1;
    if (a.qualification > b.qualification) return 1;
    // If qualifications are equal, sort by expertise count (descending)
    return b.expertise.length - a.expertise.length;
  }
  return 0;
});

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

const ConsultantsSection: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(3); // Initially show 3 consultants

  const handleShowMore = () => {
    setVisibleCount(consultants.length); // Show all consultants
  };

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
        <h2 className="text-3xl md:text-15xl font-bold mb-12" style={{ color: '#015F4A' }}>
          Meet Our Certified Professionals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {consultants.slice(0, visibleCount).map((consultant, index) => (
            <ConsultantCard key={consultant.name} consultant={consultant} index={index} />
          ))}
        </div>
        {visibleCount < consultants.length && (
          <motion.button
            className="mt-12 px-8 py-3 rounded-full font-semibold bg-[#31A382] text-white hover:bg-[#2F9B7A] transition-colors duration-300"
            whileHover={{ scale: 1.1, boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShowMore}
          >
            Show More
          </motion.button>
        )}
      </div>
    </motion.section>
  );
};

export default ConsultantsSection;