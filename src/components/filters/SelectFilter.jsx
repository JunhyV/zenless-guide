import React from "react";

const SelectFilter = ({ selector }) => {
  const { title, options } = selector;
  return (
    <select name="" id="" className="p-2">
      <option value="">{title}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectFilter;
