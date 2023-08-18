import React from "react";

const ServicesCard = ({ data }) => {
  return (
    <div
      className="w-56 bg-white rounded-lg shadow-lg p-2  pb-4
    flex flex-col justify-center items-center gap-3"
    >
      <p className="text-4xl font-medium text-slate-800 ">{data.logo}</p>
      <div className="flex flex-col justify-center items-center gap-3 ">
        <h2 className="text-center text-slate-800">{data.title}</h2>
        <h2 className=" font-light text-gray-400 text-center">
          {data.description}
        </h2>
      </div>
    </div>
  );
};

export default ServicesCard;
