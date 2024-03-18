import React from "react";
import SubTitle from "./SubTitle";

const Skills = () => {
  return (
    <div
      className="container mx-auto 
    
     flex flex-col justify-center items-center gap-12
      mb-10 sm:mb-0`
    "
    >
      {/* grid grid-cols-1 lg:grid-cols-3 justify-center glg:ap-x-8  */}
      <SubTitle title="Skills" />
      <main className="flex flex-col justify-center items-center gap-2 lg:flex-row lg:gap-16">
        <section
          className="flex flex-col justify-center items-center mr-4
        gap-2"
        >
          <div className="flex justify-start items-center gap-2 lg:gap-4">
            <span className="w-20 text-sm">Programming</span>
            <div 
            className="w-40 lg:w-56 h-4 lg:h-6 bg-slate-700 dark:bg-white rounded-3xl">
              <span
               className="block  w-36  lg:w-[200px]  h-4 lg:h-6  bg-gradient-to-r from-green-300 via-indigo-600-300 to-blue-300 dark:bg-slate-700 dark:text-white"></span>
            </div>
          </div>

          <div className="flex justify-start items-center gap-2 ">
            <span className="w-20 text-sm">graphic Design</span>
            <div className="w-40 lg:w-56 h-4 lg:h-6 bg-slate-700 dark:bg-white rounded-3xl">
              <span className="block  w-36  lg:w-[190px]  h-4 lg:h-6  bg-gradient-to-r from-green-300 via-indigo-600-300 to-blue-300 dark:bg-slate-700 dark:text-white"></span>
            </div>
          </div>

          <div className="flex justify-start items-center gap-2 ">
            <span className="w-20 text-sm">uiux Design</span>
            <div className="w-40 lg:w-56 h-4 lg:h-6 bg-slate-700 dark:bg-white rounded-3xl">
              <span className="block  w-36  lg:w-[200px]  h-4 lg:h-6  bg-gradient-to-r from-green-300 via-indigo-600-300 to-blue-300 dark:bg-slate-700 dark:text-white"></span>
            </div>
          </div>
          <div className="flex justify-start items-center gap-2">
            <span className="w-20 text-sm">Mangements Skills</span>
            <div className="w-40 lg:w-56 h-4 lg:h-6 bg-slate-700 dark:bg-white rounded-3xl">
              <span className="block  w-36  lg:w-[185px]  h-4 lg:h-6  bg-gradient-to-r from-green-300 via-indigo-600-300 to-blue-300 dark:bg-slate-700 dark:text-white"></span>
            </div>
          </div>
         
        </section>

        <section
          className="flex flex-col justify-center items-center mr-4
        gap-2"
        >
          <div className="flex justify-start items-center gap-2 lg:gap-4">
            <span className="w-20 text-sm">Content Writing Skills</span>
            <div 
            className="w-40 lg:w-56 h-4 lg:h-6 bg-slate-700 dark:bg-white rounded-3xl">
              <span className="block  w-36  lg:w-[185px]  h-4 lg:h-6  bg-gradient-to-r from-green-300 via-indigo-600-300 to-blue-300 dark:bg-slate-700 dark:text-white"></span>
            </div>
          </div>
          <div className="flex justify-start items-center gap-2 lg:gap-4">
            <span className="w-20 text-sm">Marketing Knowlage</span>
            <div   className="w-40 lg:w-56 h-4 lg:h-6 bg-slate-700 dark:bg-white rounded-3xl">
              <span className="block  w-36  lg:w-[185px]  h-4 lg:h-6  bg-gradient-to-r from-green-300 via-indigo-600-300 to-blue-300 dark:bg-slate-700 dark:text-white"></span>
            </div>
          </div>
          <div className="flex justify-start items-center gap-2 lg:gap-4">
            <span className="w-20 text-sm">Soft Skills</span>
            <div className="w-40 lg:w-56 h-4 lg:h-6 bg-slate-700 dark:bg-white rounded-3xl">
              <span className="block  w-36  lg:w-[185px]  h-4 lg:h-6  bg-gradient-to-r from-green-300 via-indigo-600-300 to-blue-300 dark:bg-slate-700 dark:text-white"></span>
            </div>
          </div>
          <div className="flex justify-start items-center gap-2 lg:gap-4">
            <span className="w-20 text-sm">English</span>
            <div className="w-40 lg:w-56 h-4 lg:h-6 bg-slate-700 dark:bg-white rounded-3xl">
              <span className="block  w-36  lg:w-[195px]  h-4 lg:h-6  bg-gradient-to-r from-green-300 via-indigo-600-300 to-blue-300 dark:bg-slate-700 dark:text-white"></span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Skills;
