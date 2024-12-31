"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaChartLine, FaPalette, FaRocket } from 'react-icons/fa';

const services = [
  {
    icon: <FaChartLine size={40} />,
    title: 'Data Analysis',
    description: 'Uncover insights and make data-driven decisions with advanced analytics.',
  },
  {
    icon: <FaRocket size={40} />,
    title: 'Social Media Marketing',
    description: 'Boost your brand’s presence with strategic social media campaigns.',
  },
  {
    icon: <FaPalette size={40} />,
    title: 'UI/UX Design',
    description: 'Design user-friendly and visually appealing interfaces.',
  },
  {
    icon: <FaCode size={40} />,
    title: 'Web Development',
    description: 'Build modern and responsive websites using the latest technologies.',
  }
  
 
  
];

export const ServicesSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="services"
      ref={ref}
      className="py-16 px-4 md:px-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-800 dark:from-gray-100 dark:via-gray-200 dark:to-gray-100 text-gray-100 dark:text-gray-900"
    >
      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          My Services
        </h2>
        <p className="text-lg text-gray-200 dark:text-gray-700">
          I provide a wide range of professional services to meet your needs.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 dark:from-gray-200 dark:via-gray-300 dark:to-gray-200 rounded-lg shadow-lg p-6 text-center hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:bg-gradient-to-r hover:from-slate-600 hover:via-slate-500 hover:to-slate-600 dark:hover:from-gray-300 dark:hover:via-gray-400 dark:hover:to-gray-300"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="text-blue-500 dark:text-blue-600 text-center flex justify-center items-center mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-300 dark:text-gray-700">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};