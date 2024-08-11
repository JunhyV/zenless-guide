import React from "react";
import { handleData3 } from "../../utils/functions/public/farm/agentCard";

const CoreOptions = ({ type, name, set, element}) => {
    
  return (
    <p
      className="bg-neutral-700 p-1 rounded-full w-10 h-10 flex items-center justify-center mx-auto border-2 border-neutral-600 hover:border-amber-400 hover:cursor-pointer font-black"
      onClick={(e) => handleData3(e, "core", name, set)}
    >
      {type}
    </p>
  );
};

export default CoreOptions;
