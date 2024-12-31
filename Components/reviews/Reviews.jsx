import { motion } from 'framer-motion';
import Image from 'next/image';
import ahmed from '../../public/imgs/reivews/ahmed.jpg';
import omar from '../../public/imgs/reivews/omar.jpg';
import yousif from '../../public/imgs/reivews/yousif.jpg';
import wo1 from '../../public/imgs/reivews/1.jpg' ;
import wo2 from '../../public/imgs/reivews/2.jpg' ;
import wo3 from '../../public/imgs/reivews/3.jpg' ;




const reviews = [
  {
    name: 'Ahmed Ali',
    review: 'Hassan’s data analysis skills are exceptional. He helped us uncover insights that transformed our business strategy.',
    date: 'Jan 10, 2024',
    image: ahmed,
  },
  {
    name: 'Fatima Mohammed',
    review: 'Working with Hassan on our social media marketing was a game-changer. Our engagement and reach have skyrocketed!',
    date: 'Jan 5, 2024',
    image: wo1,
  },
  {
    name: 'Omar Khalid',
    review: 'Hassan’s web development expertise is top-notch. He delivered a modern, responsive website that exceeded our expectations.',
    date: 'Dec 30, 2023',
    image: omar,
  },
  {
    name: 'Layla Ahmed',
    review: 'Hassan’s UI/UX designs are both beautiful and functional. Our users love the new interface!',
    date: 'Dec 25, 2023',
    image: wo2,
  },
  {
    name: 'Yousef Ibrahim',
    review: 'Hassan’s data analysis reports are incredibly detailed and actionable. He’s a true professional.',
    date: 'Dec 20, 2023',
    image: yousif,
  },
  {
    name: 'Aisha Hassan',
    review: 'Hassan’s social media strategies are innovative and effective. We’ve seen a significant increase in our online presence.',
    date: 'Dec 15, 2023',
    image: wo3,
  },
];

const Reviews = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-gray-100 dark:via-gray-200 dark:to-gray-100 text-gray-100 dark:text-gray-900">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold">What Clients Say</h2>
        <p className="text-lg text-gray-300 dark:text-gray-700">
          Here's what my clients have to say about working with me.
        </p>
      </motion.div>

      <div className="overflow-hidden">
        <motion.div
          className="flex space-x-8"
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="bg-slate-800 dark:bg-gray-200 p-6 rounded-lg shadow-lg flex-shrink-0 w-80"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {review.image && (
                <Image
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full mb-4 mx-auto"
                />
              )}
              <p className="text-lg md:text-xl text-gray-100 dark:text-gray-900 mb-2">
                "{review.review}"
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-gray-200 dark:text-gray-700 font-semibold">
                  {review.name}
                </span>
                <span className="text-gray-300 dark:text-gray-600">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;