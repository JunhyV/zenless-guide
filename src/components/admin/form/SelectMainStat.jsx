import React from "react";

const SelectMainStat = ({ data, set, options, title, action, value}) => {
  return (
    <div>
      <p className="text-center">{title}</p>
      <select className="w-full p-2 border border-neutral-400 rounded-md text-center" onChange={(e)=>action(e, data, set)} value={value}>
        <option value="">--Main Stat--</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectMainStat;
