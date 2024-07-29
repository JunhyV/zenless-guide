import React from "react";
import { nextAgents } from "../../utils/gameVersion";
import { Link } from "react-router-dom";

const NextAgents = () => {
  const handleOpenGameplay = (e, url) => {
    e.preventDefault();
    window.open(url, "_blank");
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 justify-items-center">
      {nextAgents.map((nextAgent) => (
        <Link
          to={nextAgent.gameplay}
          key={nextAgent.name}
          className="bg-gradient-to-b from-neutral-600 to-neutral-400 overflow-hidden relative hover-grayscale flex items-center justify-center w-32 md:w-40 hover:cursor-pointer hover:from-purple-600 "
          onClick={(e) => handleOpenGameplay(e, nextAgent.gameplay)}
        >
          <img
            src={nextAgent.img}
            alt={nextAgent.name}
            className=" h-full object-cover scale-150 grayscale-image translate-y-3 translate-x-2"
          />
          <p className="bg-neutral-800 font-medium text-center absolute z-10 bottom-0 w-full text-xl">
            {nextAgent.name}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default NextAgents;
