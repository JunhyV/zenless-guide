import React from "react";
import { handleData3 } from "../../utils/functions/public/farm/agentCard";

const LevelOptions = ({ type, name, set}) => {
  const e = type;
  return (
    <p
      className="bg-neutral-600 p-1 rounded-full w-8 h-8 md:w-6 md:h-6 flex items-center justify-center border-2 border-neutral-600 hover:border-amber-400 hover:cursor-pointer font-thin md:text-sm"
      onClick={(e) => handleData3(e, "lvl", name, set)}
    >
      {type}
    </p>
  );
};

export default LevelOptions;
