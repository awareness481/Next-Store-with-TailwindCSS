import React from "react";

const Filters = () => {
  return (
    <div className="filters flex-grow">
      <form>
        <fieldset className="flex flex-col">
          <legend>Filters</legend>

          <div>
            <input type="checkbox" id="Lenovo" name="brand" />
            <label for="Lenovo">Lenovo</label>
          </div>

          <div>
            <input type="checkbox" id="HP" name="brand" />
            <label for="HP">HP</label>
          </div>

          <div>
            <input type="checkbox" id="Dell" name="brand" />
            <label for="Dell">Dell</label>
          </div>
          
        </fieldset>
      </form>
    </div>
  );
};

export default Filters;
