import React from "react";
import style from "./SearchContainer.module.css";

const SearchContainer = () => {
  return (
    <div className="w-full flex flex-row">
      <div className={`${style.filters} flex-grow
       h-16`}>
        <h3 className='text-center text-3xl'>Filters</h3>
      </div>
      <div
        className={`${style.search} ml-auto h-16 flex flex-row items-center`}
      >
        <h2 className={`${style.search__title} text-center text-3xl`}>
          Find your next laptop
        </h2>
      </div>
    </div>
  );
};

export default SearchContainer;
