import React from 'react';
import style from './LaptopDescription.module.css';

const LaptopDescription = ({items}) => {
  console.log(items);
  
  const propNames = (obj) => Object.getOwnPropertyNames(obj);
  const mapItems = () => {
    return propNames(items).map((key) => {
      return [key, items[key]]
    });
  }

  

  return (
    <div className={`${style.description} w-3/5 flex flex-col justify-center`}>
      {
        mapItems().map((item) => (
          <div className={`w-full flex flex-row py-4 px-2 justify-center text-2xl`}>
            <span className='type mr-auto'>{item[0]}</span>
            <span className={`${style.value} w-9/10 block text-left`}>{item[1]}</span>
          </div>
        ))
      }
    </div>
  );
}

export default LaptopDescription;