import React from "react";

const SelectFilter = ({ selector, filter, set}) => {
  const { title, options } = selector;
  return (
    <select className="p-2" value={filter} onChange={(e)=>set(e.target.value)}>
      <option value="">--{title}--</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectFilter;
