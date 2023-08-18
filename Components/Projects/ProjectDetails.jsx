import Image from "next/image";
import React, { useState } from "react";

const ProjectDetails = ({ data }) => {
  console.log(data);
  

  return (
    <div className="flex justify-center items-center gap-x-96 capitalize gap-y-4 p-4 lg:pt-8 flex-wrap-reverse ">
      <section className="flex flex-col items-center justify-center gap-3">
        <div className="flex flex-col items-center justify-center gap-3 text-lg">
          <h1 className="text-2xl font-bold ">{data.title}</h1>
         
          <p className="text-lg text-slate-600 dark:text-slate-100 font-medium">
            {data.description}
          </p>
         <section className="capitalize ">
          <p>development tools :</p>
          <ul className="flex flex-col ml-4 mt-2 text-sm">
            <li>figma for uiux</li>
            <li>nextjs</li>
            <li>tailwindcss</li>

          </ul>
         </section>
        </div>
        <div className="">
          <a
            href=""
            className=" mt-3 px-4 text-lg font-semibold py-1  rounded-lg bg-gradient-to-r from-green-300 via-indigo-600-300 to-blue-300
             text-white  cursor-pointer"
          >
        Visit
          </a>
        </div>
      </section>
      <section>
        <Image src={data.img} alt="detail-img" 
         className=" w-72 h-72 object-fill rounded-lg"  />
      </section> 
    </div>
  );
};

export default ProjectDetails;
