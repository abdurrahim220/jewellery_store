import React from 'react'

const Input = ({ handleChange, value, title, name, color }) => {
    return (
      <label className="sidebar-label-container space-x-1">
        <input onChange={handleChange} type="radio" value={value} name={name} />
        <span className="" style={{ backgroundColor: color }}></span>
        {title}
      </label>
    );
  };
  
  export default Input;