"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import heroImage from '../../public/imgs/hassan2.png';
import Writer from '../Writer';
import AnimatedBackground from '../utils/AnimatedBackground';

export const HeroSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="hero"
      ref={ref}
      className="h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-16 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 relative overflow-hidden"
    >
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Left Section */}
      <motion.div
        className="flex-1 text-center md:text-left mt-16 md:mt-0 z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
          I'm <span className="text-blue-500 dark:text-blue-600"><Writer /></span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg mb-8">
          A dedicated data analyst and social media manager with expertise in turning data into actionable insights and impactful content. I excel in data visualization, SQL analysis, and crafting compelling social media strategies. My work focuses on driving informed decisions and enhancing business growth. With a passion for creativity and analytics, I aim to deliver results that truly make a difference.
          <span className="block mt-2 font-semibold">Let’s collaborate to bring your vision to life!</span>
        </p>
        <motion.a
        target='_blank'
          href="https://drive.google.com/file/d/151H1dhmi_oZN690FPix6ciZf8Vv4JkfT/view?usp=drivesdk"
          className="inline-block px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download My CV
        </motion.a>
      </motion.div>

      {/* Right Section (Image) */}
      <motion.div
        className="flex-1 flex justify-center items-center max-w-full mt-8 md:mt-0 z-10"
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <Image
          src={heroImage}
          alt="Hero Image"
          width={400}
          height={400}
          className="rounded-full shadow-lg hover:scale-105 transition-transform duration-300 w-48 sm:w-64 md:w-96"
          priority
        />
      </motion.div>
    </section>
  );
};