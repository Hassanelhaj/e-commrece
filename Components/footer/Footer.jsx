import { motion } from 'framer-motion';
import { BsWhatsapp } from 'react-icons/bs';
import { FaTwitter, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-gray-100 dark:via-gray-200 dark:to-gray-100 text-white dark:text-gray-900 py-10">
      <motion.div
        className="max-w-7xl mx-auto px-4 md:px-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Footer Logo and Tagline */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-gray-100 dark:text-gray-900 mb-4">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                Hassan
              </motion.span>
            </h2>
            <p className="text-lg text-gray-300 dark:text-gray-700">
              Planning the future, one project at a time.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-8">
            
            <motion.a
              href="https://www.linkedin.com/in/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-400 dark:hover:text-blue-600 transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/profile.php?id=61556904485171"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-400 dark:hover:text-blue-600 transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFacebook />
            </motion.a>
            <motion.a
              href="https://wa.me/249903471724"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-400 dark:hover:text-blue-600 transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <BsWhatsapp />
            </motion.a>
            <motion.a
              href="https://github.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-400 dark:hover:text-blue-600 transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
            </motion.a>
          </div>
        </div>

        {/* Copyright Section */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <p className="text-sm text-gray-300 dark:text-gray-700">
            &copy; 2024 Hassan. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};