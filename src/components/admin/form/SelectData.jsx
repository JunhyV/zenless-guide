import React from "react";

const SelectData = ({ label, options, data, set }) => {
  return (
    <div className="flex items-center">
      <label
        htmlFor={label}
        className="min-w-20 capitalize font-medium text-md"
      >
        {label}:
      </label>
      <select
        id={label}
        className="w-full p-2 border border-neutral-400 rounded-md"
        value={data[label]}
        onChange={(e) => set({ ...data, [label]: e.target.value })}
      >
        <option value="">--Select {label}--</option>
        {options.map((option) => (
          <option
            key={option.name}
            value={option.name}
            className="capitalize p-0 m-0"
          >
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectData;
