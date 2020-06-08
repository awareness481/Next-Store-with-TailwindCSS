import React from 'react';
import style from './Banner.module.css';

const Banner = () => {
  return (
    <div className={`${style.banner} mt-32 mb-0 md:my-0 mx-auto bg-red-600`}>
      Template banner
    </div>
  )
};

export default Banner;