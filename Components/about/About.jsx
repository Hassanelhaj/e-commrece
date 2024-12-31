"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaDatabase, BsFileExcelFill, SiPowerbi, SiPandas } from 'react-icons/all';
import Scene from './Cube'; // Import the 3D model component

export const AboutSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className="py-16 px-4 md:px-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-gray-100 dark:via-gray-200 dark:to-gray-100 text-white dark:text-gray-900"
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Left Side */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold">About Me</h2>
          <p className="text-lg text-gray-200 dark:text-gray-700">
          A dedicated data analyst and social media manager with expertise in turning data into actionable insights and impactful content. I excel in data visualization, SQL analysis, and crafting compelling social media strategies. My work focuses on driving informed decisions and enhancing business growth. With a passion for creativity and analytics, I aim to deliver results that truly make a difference. 
          Let’s collaborate to bring your vision to life
          </p>
          <div className="flex space-x-4">
            <FaDatabase size={40} className="text-blue-500 dark:text-blue-600" />
            <BsFileExcelFill size={40} className="text-green-500 dark:text-green-600" />
            <SiPowerbi size={40} className="text-yellow-500 dark:text-yellow-600" />
            <SiPandas size={40} className="text-white dark:text-gray-800" />
          </div>
        </div>

        {/* Right Side: 3D Model */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Scene />
        </motion.div>
      </motion.div>
    </section>
  );
};