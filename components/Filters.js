import React from "react";

const Filters = () => {
  return (
    <div className="filters flex-grow">
      <form>
        <fieldset className="flex flex-col">
          <legend>Filters</legend>

          <div>
            <input type="checkbox" id="Lenovo" name="brand" />
            <label htmlFor="Lenovo">Lenovo</label>
          </div>

          <div>
            <input type="checkbox" id="HP" name="brand" />
            <label htmlFor="HP">HP</label>
          </div>

          <div>
            <input type="checkbox" id="Dell" name="brand" />
            <label htmlFor="Dell">Dell</label>
          </div>

        </fieldset>
      </form>
    </div>
  );
};

export default Filters;
