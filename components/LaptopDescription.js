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
    <div className={`${style.description} w-9/10 md:w-2/5 flex flex-col justify-center py-6`}>
      {
        mapItems().map((item) => (
          <div className={`w-full flex flex-row py-4 px-12 justify-center text-2xl`}>
            <span className='type mx-auto flex-grow'>{item[0]}</span>
            <span className={`${style.value} w-9/10 block text-left`}>{item[1]}</span>
          </div>
        ))
      }
    </div>
  );
}

export default LaptopDescription;