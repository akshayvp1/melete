// import React from 'react';
// import { motion } from 'framer-motion';
// import { Consultant } from '../types/types';

// const cardVariants = {
//   hidden: { opacity: 0, y: 50, rotate: -5 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     rotate: 0,
//     transition: { delay: i * 0.1, duration: 0.7 },
//   }),
//   hover: {
//     scale: 1.05,
//     boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
//     transition: { duration: 0.3 },
//   },
// };

// interface ConsultantCardProps {
//   consultant: Consultant;
//   index: number;
// }

// const ConsultantCard: React.FC<ConsultantCardProps> = ({ consultant, index }) => {
//   return (
//     <motion.div
//       className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-[#F9F9F9] border border-[#F0F0F0]"
//       variants={cardVariants}
//       initial="hidden"
//       animate="visible"
//       custom={index}
//       whileHover="hover"
//     >
//       <motion.img
//         src={consultant.image}
//         alt={consultant.name}
//         className="w-36 h-36 rounded-full mx-auto mb-5 object-cover border-4 border-[#66BFA1]"
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.6 }}
//       />
//       <h3 className="text-xl font-bold mb-3" style={{ color: '#015F4A' }}>
//         {consultant.name}
//       </h3>
//       <p className="text-gray-600 mb-2 text-sm">{consultant.qualification}</p>
//       <p className="text-gray-600 mb-2 text-sm">
//         <strong>Expertise:</strong> {consultant.expertise.join(', ')}
//       </p>
//       <p className="text-gray-600 mb-2 text-sm">
//         <strong>Languages:</strong> {consultant.languages.join(', ')}
//       </p>
//       <p className="text-gray-600 mb-5 text-sm">
//         <strong>Counseling:</strong> {consultant.counseling.join(', ')}
//       </p>
//       <motion.button
//         className="px-6 py-2 rounded-full font-semibold bg-[#31A382] text-white hover:bg-[#2F9B7A] transition-colors duration-300"
//         whileHover={{ scale: 1.1, boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
//         whileTap={{ scale: 0.95 }}
//         onClick={() => alert(`Booking session with ${consultant.name}`)}
//       >
//         Book Session
//       </motion.button>
//     </motion.div>
//   );
// };

// export default ConsultantCard;




import React from 'react';
import { motion } from 'framer-motion';
import { Consultant } from '../types/types';

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotate: -5 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { delay: i * 0.1, duration: 0.7 },
  }),
  hover: {
    scale: 1.05,
    boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
    transition: { duration: 0.3 },
  },
};

const badgeVariants = {
  initial: { y: 0 },
  animate: {
    y: [-2, 2, -2],
    transition: {
      duration: 1.5,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'loop' as const,
    },
  },
  hover: {
    scale: 1.1,
    boxShadow: '0 6px 16px rgba(49, 163, 130, 0.5)',
    transition: { duration: 0.2 },
  },
};

interface ConsultantCardProps {
  consultant: Consultant;
  index: number;
}

const ConsultantCard: React.FC<ConsultantCardProps> = ({ consultant, index }) => {
  const phoneNumber = '+918943175522'; // Include country code here

  const handleBookSession = () => {
    const message = `Hello, I'm interested in booking a session with ${consultant.name}.\n\nDetails:\n- Qualification: ${consultant.qualification}\n- Expertise: ${consultant.expertise.join(', ')}\n- Languages: ${consultant.languages.join(', ')}\n- Counseling: ${consultant.counseling.join(', ')}${consultant.experience ? `\n- Experience: ${consultant.experience}` : ''}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-[#F9F9F9] border border-[#F0F0F0] relative"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      whileHover="hover"
    >
      <motion.img
        src={consultant.image}
        alt={consultant.name}
        className="w-36 h-36 rounded-full mx-auto mb-5 object-cover border-4 border-[#66BFA1]"
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
        className="px-6 py-2 rounded-full font-semibold bg-[#31A382] text-white hover:bg-[#2F9B7A] transition-colors duration-300"
        whileHover={{ scale: 1.1, boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
        whileTap={{ scale: 0.95 }}
        onClick={handleBookSession}
      >
        Book Session
      </motion.button>
      {consultant.experience && (
        <motion.div
          className="absolute top-4 right-4 flex items-center bg-gradient-to-r from-[#31A382] to-[#2F9B7A] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
          style={{ boxShadow: '0 0 10px rgba(49, 163, 130, 0.4)' }}
          variants={badgeVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <svg
            className="w-4 h-4 mr-1"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            <path d="M12 8v6m-3-3h6" />
          </svg>
          {consultant.experience}
        </motion.div>
      )}
    </motion.div>
  );
};

export default ConsultantCard;