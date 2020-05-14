import React from "react";
import style from "./Results.module.css";

const Thumbnail = ({ laptop }) => {
  return (
    <div
      className={`
        ${style.thumbnail} 
        flex flex-col
        mb-8 bg-white shadow-lg rounded-lg overflow-hidden
      `}
    >
      <div className="h-48 mb-2">
        <h1 className="text-gray-900 font-bold text-3xl px-4 py-2 uppercase">
          {laptop.att_base_name}
        </h1>
        <p className="text-gray-600 px-4 py-2 text-sm mt-1">{laptop.name}</p>
      </div>
      <img
        src={laptop.image}
        alt="NIKE AIR"
        className="h-48 w-full object-cover mx-auto"
      />
      <div className="flex items-center mt-auto justify-between px-4 py-2 bg-gray-900">
        <h1 className="text-gray-200 font-bold text-lg">$ {laptop.price}</h1>
        <button className="px-2 py-1 bg-gray-200 text-xs text-gray-900 font-semibold rounded uppercase hover:bg-gray-400 focus:bg-gray-400">
          Add to cart
        </button>
      </div>
    </div>
  );
};

const Results = ({ laptops }) => {
  console.log(laptops);

  return (
    <div className={`${style.results} flex flex-row flex-wrap`}>
      {laptops.map((laptop) => (
        <Thumbnail laptop={laptop} />
      ))}
    </div>
  );
};

export default Results;
