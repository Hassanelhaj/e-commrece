import { TfiWrite } from "react-icons/tfi";
import Image from "next/image";
import serviceDesign from "./public/imgs/services/mediaDesign.svg";
import { GiEarthAmerica } from "react-icons/gi";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

import travo from "./public/imgs/projects/uiux/travo.png";
import natour from "./public/imgs/projects/uiux/natour.png";
import decor from "./public/imgs/projects/uiux/decor.png";
import cvCreator from "./public/imgs/projects/uiux/cv-creator.png";



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
  {
    id: 3,
    title: "Social Media Design ",
    description:
      "Profishinal And Modern Social Media Design Using Figma with Your Own Custmization",
    logo: <Image src={serviceDesign} width={32} />,
  },
  {
    id: 4,
    title: "Content Packages ",
    description:
      "Profishinal And Creative Work With Social Media Manegment Services In One Place",
    logo: <TfiWrite />,
  },
];
export const uiuxProjectsList = [
  {
    id: 1,
    title: "Travo Flight Booking App",
    description: "Application for Flight Agenicies",
    img: travo,
  },
  {
    id: 2,
    title: "Nator App",
    description: "Application for a Furniture Shop",
    img: natour,
  },
  {
    id: 3,
    title: "Natour App",
    description: "Application for Properties rent",
    img: decor,
  },
  {
    id: 4,
    title: "Cv Creator App",
    description: "Application for Creating Proficinal cv's",
    img: cvCreator,
  },
];
