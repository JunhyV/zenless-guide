import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Tier = ({ rank }) => {
  const [bg, setBg] = useState("");

  useEffect(() => {
      switch (rank) {
        case "SS":
          setBg("bg-red-400");
          break;
        case "S":
          setBg("bg-orange-400");
          break;
        case "A":
          setBg("bg-amber-400");
          break;
        case "B":
          setBg("bg-yellow-400");
          break;
        case "C":
          setBg("bg-green-400");
          break;
    
        default:
          break;
      }
  }, [rank])
  return (
    <div className="flex">
      <div className={`${bg} w-10 flex items-center justify-center font-black`}>
        {rank}
      </div>
      <div className="w-full grid grid-cols-4">
        <div className="grid grid-cols-3 gap-2 p-2 bg-neutral-700">
          <Link className="bg-gradient-to-b from-violet-600 to-violet-400 w-fit hover:scale-105 transform transition-transform duration-300">
            <img
              src="https://i.imgur.com/h3sH0uF.png"
              alt="agent-img"
              className="w-32"
            />
            <p className="bg-neutral-800 text-xs font-medium text-center">
              Anby
            </p>
          </Link>
          <Link className="bg-gradient-to-b from-amber-600 to-amber-400 w-fit hover:scale-105 transform transition-transform duration-300">
            <img
              src="https://i.imgur.com/h3sH0uF.png"
              alt="agent-img"
              className="w-32"
            />
            <p className="bg-neutral-800 text-xs font-medium text-center">
              Anby
            </p>
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-2 p-2 bg-neutral-600"></div>
        <div className="grid grid-cols-3 gap-2 p-2 bg-neutral-700"></div>
        <div className="grid grid-cols-3 gap-2 p-2 bg-neutral-600"></div>
      </div>
    </div>
  );
};

export default Tier;
