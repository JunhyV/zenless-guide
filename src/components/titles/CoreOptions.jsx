import React from "react";

const CoreOptions = ({ type, name, set }) => {
    
  return (
    <p
      className="bg-neutral-600 p-1 rounded-full w-10 h-10 flex items-center justify-center mx-auto border-2 border-neutral-600 hover:border-amber-400 hover:cursor-pointer font-black"
      onClick={(e) => handleData(type, "core", name, set)}
    >
      {type}
    </p>
  );
};

export default CoreOptions;
