import React from "react";
import { connect } from "react-redux";

const Filters = ({ dispatch }) => {
  const handleSelect = (e) => {
    dispatch({
      type: "TOGGLE_FILTER",
      filter: {
        id: e.target.id,
        checked: e.target.checked,
      },
    });
  };

  return (
    <div className="filters flex-grow">
      <form>
        <fieldset className="flex flex-col mt-8 pl-8">
          <legend className='text-3xl mb-4'>Brands</legend>

          <div className='pl-4'>
            <input
              type="checkbox"
              id="Lenovo"
              name="brand"
              onClick={handleSelect}
              className="form-checkbox h-8 w-8 mr-4"
            />
            <label htmlFor="Lenovo" className='text-2xl align-middle'>Lenovo</label>
          </div>

          <div className='pl-4'>
            <input
              type="checkbox"
              id="HP"
              name="brand"
              onClick={handleSelect}
              className="form-checkbox h-8 w-8 mr-4"
            />
            <label htmlFor="HP" className='text-2xl align-middle'>HP</label>
          </div>

          <div className='pl-4'>
            <input
              type="checkbox"
              id="Dell"
              name="brand"
              onClick={handleSelect}
              className="form-checkbox h-8 w-8 mr-4"
            />
            <label htmlFor="Dell" className='text-2xl align-middle'>Dell</label>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default connect()(Filters);
