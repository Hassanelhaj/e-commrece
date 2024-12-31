import { motion } from 'framer-motion';
import Image from 'next/image';
import project1 from '../../public/imgs/projects/anlysis.jpg'; // Replace with your actual images
import project2 from '../../public/imgs/projects/anlysis.jpg';
import project3 from '../../public/imgs/projects/anlysis.jpg';
import project4 from '../../public/imgs/projects/anlysis.jpg';
import project5 from '../../public/imgs/projects/anlysis.jpg';


const projects = [
  {
    id: 1,
    title: 'Bike Store Data Analysis (SQL Project)',
    description: 'Dive into a comprehensive SQL analysis of a bike store dataset, uncovering insights into sales, inventory, and customer behavior.',
    image: project1,
    link: 'https://github.com/Hassan-Alhaj/sql-data-analysis-projects/tree/main/sql_prjects/pike-store-data',
  },
  {
    id: 2,
    title: 'Sales Data Exploration (Pandas Project)',
    description: 'Explore sales data using Python’s Pandas library, showcasing data cleaning, transformation, and visualization techniques to derive actionable insights.',
    image: project2,
    link: 'https://github.com/Hassan-Alhaj/pandas-data-analysis-projects/tree/main/sales-data',
  },
  {
    id: 3,
    title: 'Financial Data Dashboard (Power BI Project)',
    description: 'A dynamic Power BI dashboard analyzing financial data, providing insights into revenue, expenses, and profitability trends for informed decision-making.',
    image: project3,
    link: 'https://github.com/Hassan-Alhaj/power-bi-data-anlysis-projects/tree/main/finace_data',
  },
  {
    id: 4,
    title: 'Healthcare Data Insights (Power BI Project)',
    description: 'Visualize and analyze healthcare data with this Power BI project, highlighting patient demographics, treatment outcomes, and operational efficiency.',
    image: project1,
    link: 'https://github.com/Hassan-Alhaj/power-bi-data-anlysis-projects/tree/main/health_care-data',
  },
  {
    id: 5,
    title: 'Pizza Sales Analysis (Power BI Project)',
    description: 'Slice into pizza sales data with this interactive Power BI dashboard, uncovering trends in orders, popular toppings, and revenue streams.',
    image: project2,
    link: 'https://github.com/Hassan-Alhaj/power-bi-data-anlysis-projects/tree/main/pizza-sales-data',
  },
  {
    id: 6,
    title: 'Sales Performance Dashboard (Power BI Project)',
    description: 'A comprehensive Power BI dashboard analyzing sales performance, identifying key metrics, and providing actionable insights for business growth.',
    image: project3,
    link: 'https://github.com/Hassan-Alhaj/power-bi-data-anlysis-projects',
  },
  {
    id: 7,
    title: 'Shopping Trends Analysis (Power BI Project)',
    description: 'Explore shopping trends and consumer behavior with this Power BI project, offering insights into purchasing patterns and product popularity.',
    image: project4,
    link: 'https://github.com/Hassan-Alhaj/power-bi-data-anlysis-projects/tree/main/shopping-data',
  },
  {
    id: 8,
    title: 'Student Performance Analysis (Power BI Project)',
    description: 'Analyze student performance data with this Power BI dashboard, highlighting academic trends, strengths, and areas for improvement.',
    image: project5,
    link: 'https://github.com/Hassan-Alhaj/power-bi-data-anlysis-projects/tree/main/students-performance-data',
  },
  {
    id: 9,
    title: 'YouTube Subscribers Analysis 2024 (Power BI Project)',
    description: 'Dive into YouTube subscriber data for 2024 with this Power BI project, analyzing channel growth, engagement metrics, and content performance.',
    image: project3,
    link: 'https://github.com/Hassan-Alhaj/power-bi-data-anlysis-projects/tree/main/youtube%20subscripers%202024',
  },
  {
    id: 10,
    title: 'Real Estate Market Insights (Power BI Project)',
    description: 'Gain valuable insights into the real estate market with this Power BI dashboard, analyzing property trends, pricing, and investment opportunities.',
    image: project1,
    link: 'https://github.com/Hassan-Alhaj/power-bi-data-anlysis-projects/tree/main/real%20state%20data',
  },
];
export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 px-4 md:px-16 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold">My Projects</h2>
        <p className="text-lg text-gray-400 dark:text-gray-600 pt-1">
          Take a look at some of my recent work.
        </p>
      </motion.div>

      <div className="overflow-x-auto">
        <motion.div
          className="flex space-x-6 snap-x snap-mandatory"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="min-w-[300px] md:min-w-[400px] bg-gray-800 dark:bg-gray-200 rounded-lg shadow-lg snap-center hover:scale-105 transition-transform duration-300 pb-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="rounded-t-lg"
                  width={400}
                  layout="responsive"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-400 dark:text-gray-600">{project.description}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};