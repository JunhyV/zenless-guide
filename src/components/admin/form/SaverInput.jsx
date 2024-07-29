import React from "react";

const SaverInput = ({ title, type }) => {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor={title} className="capitalize font-medium text-md">
        {title}:{" "}
      </label>
      <input
        type={type}
        id={title}
        className="w-full p-2 border border-neutral-400 rounded-md"
      />
    </div>
  );
};

export default SaverInput;
