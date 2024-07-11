import React from "react";

const ButtonFilter = ({options}) => {
  return (
    <div className="flex">
      {options.map((option) => (
        <button className="bg-neutral-800 h-full hover:bg-neutral-600">
          <img src={option.img} alt="opt-img" className="w-8 mx-4"/>
        </button>
      ))}
    </div>
  );
};

export default ButtonFilter;
