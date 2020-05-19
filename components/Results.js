import React from "react";
import { connect } from "react-redux";
import Link from "next/link";

import { ADD_TO_CART } from "../actions/index";
import style from "./Results.module.css";

const Thumbnail = ({ laptop, dispatch }) => {
  const addToCart = () => {
    const item = {
      id: laptop.id,
      name: laptop.att_base_name,
      image: laptop.image,
    };

    dispatch({
      type: ADD_TO_CART,
      item,
    });
  };

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
          <Link href={`/laptop/${laptop.id}`}>
            <a>{laptop.att_base_name}</a>
          </Link>
        </h1>
        <p className="text-gray-600 px-4 py-2 text-sm mt-1">{laptop.name}</p>
      </div>
      <Link href={`/laptop/${laptop.id}`}>
        <a>
          <img
            src={laptop.image}
            alt="NIKE AIR"
            className="h-48 w-full object-cover mx-auto"
          />
        </a>
      </Link>
      <div className="flex items-center mt-auto justify-between px-4 py-2 bg-gray-900">
        <h1 className="text-gray-200 font-bold text-lg">$ {laptop.price}</h1>
        <button
          className={`px-2 py-1 bg-gray-200 text-xs text-gray-900 font-semibold rounded uppercase hover:bg-gray-400 focus:bg-gray-400`}
          onClick={addToCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

const Results = ({ laptops, dispatch }) => {
  console.log(laptops);

  return (
    <div className={`${style.results} flex flex-row flex-wrap`}>
      {laptops.map((laptop) => (
        <Thumbnail laptop={laptop} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default connect()(Results);
