import React from "react";

const Category = ({handleChange}) => {
  return (
    <div>
      <h4 className="">Category</h4>

      <div className="grid">
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="Necklaces" name="test" />
          <span className=""></span>Necklaces
        </label>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="Earrings" name="test" />
          <span className=""></span>Earrings
        </label>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="Rings" name="test" />
          <span className=""></span>Rings
        </label>
      </div>
    </div>
  );
};

export default Category;
