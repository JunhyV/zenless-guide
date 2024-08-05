import React from "react";

const SaverInput = ({ title, type, action, value}) => {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor={title} className="capitalize font-medium text-md min-w-fit">
        {title}:{" "}
      </label>
      <input
        type={type}
        id={title}
        value={value}
        className="w-full p-2 border border-neutral-400 rounded-md"
        onChange={(e) => action(e)}
      />
    </div>
  );
};

export default SaverInput;
