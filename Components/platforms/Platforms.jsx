import { motion } from 'framer-motion';
import { BsTiktok } from 'react-icons/bs';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const platforms = [
  { id: 1, name: 'Facebook', description: 'Managing pages and ads.', icon: <FaFacebook className="text-blue-600 dark:text-blue-400" size={40} /> },
  { id: 2, name: 'Instagram', description: 'Aesthetic content creation.', icon: <FaInstagram className="text-pink-500 dark:text-pink-400" size={40} /> },
  { id: 3, name: 'LinkedIn', description: 'Professional branding.', icon: <FaLinkedin className="text-blue-700 dark:text-blue-500" size={40} /> },
  { id: 4, name: 'Tiktok', description: 'Aesthetic content creation.', icon: <BsTiktok className="dark:text-black text-slate-100" size={40} /> }
];

export const SocialMediaSection = () => {
  return (
    <section id="social-media" className="py-16 px-4 md:px-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-800 dark:from-gray-100 dark:via-gray-200 dark:to-gray-100 text-gray-100 dark:text-gray-900">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold">Social Media Platforms I Specialize In</h2>
        <p className="text-lg text-gray-200 dark:text-gray-700 pt-1">
          Harnessing the power of social media to create impactful strategies.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {platforms.map((platform, index) => (
          <motion.div
            key={platform.id}
            className="bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 dark:from-gray-200 dark:via-gray-300 dark:to-gray-200 rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:bg-gradient-to-r hover:from-slate-600 hover:via-slate-500 hover:to-slate-600 dark:hover:from-gray-300 dark:hover:via-gray-400 dark:hover:to-gray-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="mb-4">{platform.icon}</div>
            <h3 className="text-xl font-bold">{platform.name}</h3>
            <p className="text-gray-300 dark:text-gray-700 mt-2">{platform.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};