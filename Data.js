import { GiEarthAmerica } from "react-icons/gi";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import mainMarkit from "./public/imgs/projects/markit/markit.jpg";
import MainSiddeg from "./public/imgs/projects/portfolio/MainSiddeg.jpg";
import MainFood from "./public/imgs/projects/mern/foodify/foodify.jpg";
import MainShopify from "./public/imgs/projects/mern/ecommerce/shopify.jpg";
import MainTnseeq from "./public/imgs/projects/tnsseq/tn1.jpg";
import mainHala from './public/imgs/projects/halaGallary/mainHala.jpg';
import mainTewnz from './public/imgs/projects/tewinz/twenz1.jpg';

import jobify from './public/imgs/projects/jobify/mainJobify.jpg';


export const servicesList = [
  {
    id: 1,
    title: "Web Development",
    description: "Amazing WebSites with Modern UiUX Design Using react js",
    logo: <GiEarthAmerica />,
  },
  {
    id: 2,
    title: "UiUx Design ",
    description:
      "Profishial And Modern UiUx Design Using Figma with Your Own Custmization",
    logo: <AiOutlineAppstoreAdd />,
  },
];
export const projects = [
  {
    id: 1,
    title: "e-commerce web App",
    description: "Tiny e-commrce website",
    img: mainMarkit,
  },
  {
    id: 2,
    title: "portfolio",
    description: "personal porfolio",
    img: MainSiddeg,
  },
  {
    id: 3,
    title: "shopify",
    description: "full featured e-commerce",
    img: MainShopify,
  },
  {
    id: 4,
    title: "foodify",
    description: "full featured food app",
    img: MainFood,
  },
  {
    id: 5,
    title: "tnsseq",
    description: " voulnteer website used during war",
    img: MainTnseeq,
  },
  {
  id: 6,
  title: "Hala-Gallary",
  description: " gallary website for a graphical designer ",
  img: mainHala,
},
{
  id: 7,
  title: "Tewinz",
  description: " landing page website for tweniz  ",
  img: mainTewnz,
},
{
  id: 8,
  title: "jobify",
  description: "website used  for job searching in sudan ",
  img: jobify,
},
];
