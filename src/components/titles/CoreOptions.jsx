import React from "react";
import { handleData3 } from "../../utils/functions/public/farm/agentCard";

const CoreOptions = ({ type, name, set, data }) => {
  return (
    <p
      className={` p-1 rounded-full w-10 h-10 flex items-center justify-center mx-auto border-2 hover:border-amber-400 hover:cursor-pointer font-black ${
        data === type
          ? "bg-amber-400 text-black border-amber-400"
          : "bg-neutral-700 border-neutral-600"
      }`}
      onClick={(e) => handleData3(e, "core", name, set)}
    >
      {type}
    </p>
  );
};

export default CoreOptions;
