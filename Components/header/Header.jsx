import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from 'next-themes';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <motion.header
      className="fixed w-full top-0 z-50 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-gray-100 dark:via-gray-200 dark:to-gray-100"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white dark:text-gray-900">Hassan</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-400 hover:text-white dark:text-gray-700 dark:hover:text-gray-900">About</a>
          <a href="#projects" className="text-gray-400 hover:text-white dark:text-gray-700 dark:hover:text-gray-900">Projects</a>
          <a href="#contact" className="text-gray-400 hover:text-white dark:text-gray-700 dark:hover:text-gray-900">Contact</a>
        </nav>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="text-gray-400 hover:text-white dark:text-gray-700 dark:hover:text-gray-900"
          >
            {theme === 'light' ? <FaMoon size={24} /> : <FaSun size={24} />}
          </button>
          <button
            className="md:hidden text-gray-400 hover:text-white dark:text-gray-700 dark:hover:text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaBars size={24} />
          </button>
        </div>
        {/* <div className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white dark:text-gray-700 dark:hover:text-gray-900"><FaGithub /></a>
          <a href="#" className="text-gray-400 hover:text-white dark:text-gray-700 dark:hover:text-gray-900"><FaLinkedin /></a>
          <a href="#" className="text-gray-400 hover:text-white dark:text-gray-700 dark:hover:text-gray-900"><FaEnvelope /></a>
        </div> */}
      </div>
      {isOpen && (
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-gray-100 dark:via-gray-200 dark:to-gray-100 md:hidden flex flex-col items-center space-y-4 py-4">
          <a href="#about" className="text-gray-400 hover:text-white dark:text-gray-700 dark:hover:text-gray-900">About</a>
          <a href="#projects" className="text-gray-400 hover:text-white dark:text-gray-700 dark:hover:text-gray-900">Projects</a>
          <a href="#contact" className="text-gray-400 hover:text-white dark:text-gray-700 dark:hover:text-gray-900">Contact</a>
        </div>
      )}
    </motion.header>
  );
};