// import React from 'react';
// import { motion, Variants } from 'framer-motion';
// import { Link } from 'react-router-dom';

// // Interface for SVG icon props
// interface IconProps extends React.SVGProps<SVGSVGElement> {}

// // Placeholder SVG icons (replace with actual icons in your project)
// const ChildIcon: React.FC<IconProps> = (props) => (
//   <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
//   </svg>
// );

// const AdultIcon: React.FC<IconProps> = (props) => (
//   <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//   </svg>
// );

// const ParentIcon: React.FC<IconProps> = (props) => (
//   <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
//   </svg>
// );

// const PregnantIcon: React.FC<IconProps> = (props) => (
//   <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//   </svg>
// );

// const OlderAdultIcon: React.FC<IconProps> = (props) => (
//   <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//   </svg>
// );

// // Animation variants
// const sectionVariants: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
// };

// const cardVariants: Variants = {
//   hidden: { opacity: 0, scale: 0.95 },
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
// };

// // Interface for support group items
// interface SupportGroup {
//   title: string;
//   description: string;
//   image: string;
//   icon: React.FC<IconProps>;
// }

// const SupportGroups: React.FC = () => {
//   // Placeholder images (replace with actual URLs in your project)
//   const groupImages = {
//     children: 'https://via.placeholder.com/400x300?text=Children',
//     adults: 'https://via.placeholder.com/400x300?text=Adults',
//     parents: 'https://via.placeholder.com/400x300?text=Parents',
//     pregnant: 'https://via.placeholder.com/400x300?text=Pregnant+Individuals',
//     olderAdults: 'https://via.placeholder.com/400x300?text=Older+Adults',
//   };

//   const groups: SupportGroup[] = [
//     {
//       title: 'Children',
//       description:
//         'Specialized programs to help children manage anxiety, behavioral challenges, and academic stress, fostering emotional resilience.',
//       image: groupImages.children,
//       icon: ChildIcon,
//     },
//     {
//       title: 'Adults',
//       description:
//         'Tailored support for work-life balance, stress management, and personal growth to thrive in a fast-paced world.',
//       image: groupImages.adults,
//       icon: AdultIcon,
//     },
//     {
//       title: 'Parents',
//       description:
//         'Guidance to navigate parenting stress, improve family dynamics, and foster healthy communication with children.',
//       image: groupImages.parents,
//       icon: ParentIcon,
//     },
//     {
//       title: 'Pregnant Individuals',
//       description:
//         'Compassionate care for prenatal and postpartum mental health, supporting emotional well-being during this transformative journey.',
//       image: groupImages.pregnant,
//       icon: PregnantIcon,
//     },
//     {
//       title: 'Older Adults',
//       description:
//         'Dedicated support for addressing loneliness, aging-related concerns, and maintaining cognitive and emotional vitality.',
//       image: groupImages.olderAdults,
//       icon: OlderAdultIcon,
//     },
//   ];

//   return (
//     <motion.section
//       className="py-20 bg-gray-100"
//       variants={sectionVariants}
//       initial="hidden"
//       animate="visible"
//       aria-labelledby="support-groups-heading"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 id="support-groups-heading" className="text-3xl md:text-4xl font-bold text-[#015F4A] mb-6">
//             How Melete Supports You
//           </h2>
//           <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Melete offers personalized mental health solutions for every stage of life, from childhood to older adulthood,
//             with expert care, guided wellness practices, and compassionate support.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {groups.map((group, index) => (
//             <motion.article
//               key={group.title}
//               className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
//               variants={cardVariants}
//               initial="hidden"
//               animate="visible"
//               transition={{ delay: index * 0.2 }}
//               aria-labelledby={`group-${index}`}
//             >
//               <div className="h-56 overflow-hidden">
//                 <img
//                   src={group.image}
//                   alt={`${group.title} support`}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//               </div>
//               <div className="p-6">
//                 <div className="flex items-center mb-4">
//                   <group.icon className="w-8 h-8 text-[#015F4A] mr-3" aria-hidden="true" />
//                   <h3 id={`group-${index}`} className="text-xl font-semibold text-[#015F4A]">
//                     {group.title}
//                   </h3>
//                 </div>
//                 <p className="text-gray-600 text-base leading-relaxed mb-6">
//                   {group.description}
//                 </p>
//                 <Link
//                   to="/services"
//                   className="inline-block px-6 py-2 rounded-full bg-[#015F4A] text-white font-medium hover:bg-[#014a3a] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#015F4A] focus:ring-offset-2"
//                   aria-label={`Explore services for ${group.title}`}
//                 >
//                   Explore Services
//                 </Link>
//               </div>
//             </motion.article>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <Link
//             to="/services"
//             className="inline-block px-8 py-3 rounded-full bg-transparent border-2 border-[#015F4A] text-[#015F4A] font-semibold hover:bg-[#015F4A] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#015F4A] focus:ring-offset-2"
//             aria-label="Discover all Melete services"
//           >
//             Discover All Services
//           </Link>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default SupportGroups;

import React from 'react';
import { User, Users, Heart, Baby, UserCheck, ArrowRight } from 'lucide-react';

// Interface for support group items
interface SupportGroup {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
}

// Animation hook for scroll-triggered animations
const useIntersectionObserver = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [element, setElement] = React.useState<HTMLElement | null>(null);

  React.useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [element, threshold]);

  return [setElement, isVisible] as const;
};

const SupportGroups: React.FC = () => {
  const [sectionRef, isSectionVisible] = useIntersectionObserver(0.1);

  const groups: SupportGroup[] = [
    {
      id: 'children',
      title: 'Children & Adolescents',
      description: 'Specialized therapeutic programs designed to help children and teenagers navigate emotional challenges, academic stress, and developmental milestones with confidence.',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop&crop=center',
      icon: Baby,
      features: ['Behavioral Therapy', 'Academic Support', 'Family Counseling', 'Social Skills Development']
    },
    {
      id: 'adults',
      title: 'Adults',
      description: 'Comprehensive mental health services tailored for working professionals, addressing stress management, career transitions, and relationship challenges.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop&crop=faces',
      icon: User,
      features: ['Stress Management', 'Career Counseling', 'Anxiety Treatment', 'Life Coaching']
    },
    {
      id: 'parents',
      title: 'Parents & Families',
      description: 'Expert guidance for parents navigating the complexities of family dynamics, parenting challenges, and creating healthy communication patterns.',
      image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=400&h=300&fit=crop&crop=faces',
      icon: Users,
      features: ['Parenting Strategies', 'Family Therapy', 'Communication Skills', 'Conflict Resolution']
    },
    {
      id: 'maternal',
      title: 'Maternal Health',
      description: 'Specialized support for expecting and new mothers, addressing prenatal anxiety, postpartum depression, and the emotional journey of motherhood.',
      image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&h=300&fit=crop&crop=faces',
      icon: Heart,
      features: ['Prenatal Support', 'Postpartum Care', 'Anxiety Management', 'Support Groups']
    },
    {
      id: 'seniors',
      title: 'Senior Adults',
      description: 'Dedicated mental health services for older adults, focusing on maintaining cognitive health, managing life transitions, and addressing age-related concerns.',
      image: 'https://images.unsplash.com/photo-1544717301-9cdcb1f5940f?w=400&h=300&fit=crop&crop=faces',
      icon: UserCheck,
      features: ['Cognitive Support', 'Grief Counseling', 'Social Connection', 'Wellness Programs']
    }
  ];

  const handleServiceClick = (groupId: string) => {
    // Navigate to service page
    window.location.href = '/service';
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-gradient-to-br from-white via-emerald-50 to-teal-50"
      aria-labelledby="support-groups-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div 
          className={`text-center mb-12 transform transition-all duration-1000 ${
            isSectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 
            id="support-groups-heading" 
            className="text-4xl md:text-5xl font-bold text-slate-800 mb-6"
          >
            Comprehensive Mental Health
            <span className="block text-[#015F4A]">
              Support Services
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Our evidence-based approach provides personalized mental health solutions for every stage of life, 
            delivered by licensed professionals with expertise in diverse therapeutic modalities.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {groups.map((group, index) => (
            <article
              key={group.id}
              className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer border border-slate-200 hover:border-[#015F4A] relative ${
                isSectionVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-12 opacity-0'
              }`}
              style={{ 
                transitionDelay: isSectionVisible ? `${index * 150}ms` : '0ms' 
              }}
              aria-labelledby={`group-${group.id}-title`}
              onClick={() => handleServiceClick(group.id)}
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-emerald-50 to-[#015F4A]/10">
                <img
                  src={group.image}
                  alt={`${group.title} support services`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/400x300/0f766e/ffffff?text=${encodeURIComponent(group.title)}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#015F4A]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon Overlay */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <group.icon className="w-6 h-6 text-[#015F4A]" aria-hidden="true" />
                </div>

                {/* Arrow Button Overlay */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <button
                    type="button"
                    className="w-10 h-10 bg-[#015F4A] text-white rounded-full hover:bg-[#014136] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:scale-110 active:scale-95"
                    aria-label={`View ${group.title} services`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleServiceClick(group.id);
                    }}
                  >
                    <ArrowRight className="w-5 h-5 mx-auto transition-transform duration-200" />
                  </button>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 
                  id={`group-${group.id}-title`}
                  className="text-xl font-bold text-slate-800 mb-3 group-hover:text-[#015F4A] transition-colors duration-300"
                >
                  {group.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {group.description}
                </p>

                {/* Features List */}
                <div className="space-y-2" aria-label={`Services for ${group.title}`}>
                  {group.features.slice(0, 3).map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-center text-xs text-slate-500"
                    >
                      <div className="w-1.5 h-1.5 bg-[#015F4A] rounded-full mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action Section */}
        <div 
          className={`text-center mt-12 transform transition-all duration-1000 delay-700 ${
            isSectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200 p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Ready to Begin Your Mental Health Journey?
            </h3>
            <p className="text-slate-600 mb-6">
              Our team of licensed professionals is here to provide personalized care tailored to your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                className="px-8 py-3 bg-[#015F4A] text-white font-semibold rounded-lg hover:bg-[#014136] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#015F4A] focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Download App
              </button>
              <button
                type="button"
                className="px-8 py-3 bg-transparent border-2 border-[#015F4A] text-[#015F4A] font-semibold rounded-lg hover:bg-[#015F4A] hover:text-white hover:border-[#015F4A] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#015F4A] focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                View All Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportGroups;