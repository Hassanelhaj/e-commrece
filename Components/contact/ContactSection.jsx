"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLinkedin, FaGithub, FaEnvelope, FaFacebook } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';

export const ContactSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 px-4 md:px-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-gray-100 dark:via-gray-200 dark:to-gray-100 text-white dark:text-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          {/* Left Side: Call to Action and Social Links */}
          <motion.div
            className="space-y-8 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Let’s Build Something <span className='text-blue-600'>Amazing</span> Together!
            </h2>
            <p className="text-lg text-gray-300 dark:text-gray-700">
              Whether you have a project in mind or just want to connect,
               I’d love to hear from you. Let’s turn your ideas into reality!
            </p>
            <div className="flex justify-center md:justify-start space-x-6">
              <motion.a
                href="https://www.linkedin.com/in/hassan--alhaj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 dark:text-gray-700 hover:text-blue-500 dark:hover:text-blue-600 transition duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin size={32} />
              </motion.a>
              <motion.a
                href="https://wa.me/249903471724"
                target='_blank'
                className="text-gray-300 dark:text-gray-700 hover:text-blue-500 dark:hover:text-blue-600 transition duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaFacebook size={32} />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/profile.php?id=61556904485171"
                target='_blank'
                className="text-gray-300 dark:text-gray-700 hover:text-blue-500 dark:hover:text-blue-600 transition duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <BsWhatsapp size={32} />
              </motion.a>
              <motion.a
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 dark:text-gray-700 hover:text-blue-500 dark:hover:text-blue-600 transition duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub size={32} />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            className="bg-slate-800 dark:bg-gray-200 rounded-lg shadow-lg p-6 md:p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <form>
              {/* Name Input */}
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-xl bg-slate-700 dark:bg-gray-100 border-gray-300 dark:border-gray-400 shadow-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-300 ease-in-out hover:border-blue-600 py-3 px-4"
                  placeholder="Your Name"
                />
              </div>
              {/* Email Input */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-xl bg-slate-700 dark:bg-gray-100 border-gray-300 dark:border-gray-400 shadow-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-300 ease-in-out hover:border-blue-600 py-3 px-4"
                  placeholder="Your Email"
                />
              </div>

              {/* Message Textarea */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  className="mt-1 block w-full rounded-xl bg-slate-700 dark:bg-gray-100 border-gray-300 dark:border-gray-400 shadow-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-300 ease-in-out hover:border-blue-600 py-3 px-4"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <motion.button
                  type="submit"
                  className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-lg text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};