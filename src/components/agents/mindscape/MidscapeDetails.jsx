import React from "react";

const MidscapeDetails = ({ data }) => {
  const { id, name, description } = data;

  return (
    <div className={`flex justify-center w-full`}>
      <h2 className="bg-neutral-300 p-1 h-10 font-black flex items-center">
        M{id}
      </h2>
      <div className="w-full">
        <h3 className="font-medium min-h-10 p-1 bg-neutral-800 flex justify-between items-center text-white">
          {name}
        </h3>
        <div
          className={`bg-neutral-600 text-white transition-max-height duration-500 ease-in-out overflow-hidden`}
        >
          <p className="p-1 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MidscapeDetails;
