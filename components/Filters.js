import React from "react";
import { connect } from "react-redux";

const Filters = ({ dispatch }) => {
  const handleSelect = (e) => {

    dispatch({
      type: 'TOGGLE_FILTER',
      filter: {
        id: e.target.id,
        checked: e.target.checked
      }
    })
  }

  return (
    <div className="filters flex-grow">
      <form>
        <fieldset className="flex flex-col">
          <legend>Filters</legend>

          <div>
            <input type="checkbox" id="Lenovo" name="brand" onClick={handleSelect} />
            <label htmlFor="Lenovo">Lenovo</label>
          </div>

          <div>
            <input type="checkbox" id="HP" name="brand" onClick={handleSelect}/>
            <label htmlFor="HP">HP</label>
          </div>

          <div>
            <input type="checkbox" id="Dell" name="brand" onClick={handleSelect}/>
            <label htmlFor="Dell">Dell</label>
          </div>

        </fieldset>
      </form>
    </div>
  );
};

export default connect()(Filters);
