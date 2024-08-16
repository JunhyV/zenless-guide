import React from "react";
import { nextAgents } from "../../../utils/gameVersion";
import { Link } from "react-router-dom";

const NextAgents = () => {
  const handleOpenGameplay = (e, url) => {
    e.preventDefault();
    window.open(url, "_blank");
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-5 justify-items-center">
      {nextAgents.map((version) =>
        version.agents.map((nextAgent) => (
          <Link
            to={nextAgent.gameplay}
            key={nextAgent.name}
            className="bg-gradient-to-b from-neutral-600 to-neutral-400 overflow-hidden relative hover-grayscale flex items-center justify-center max-w-40 md:h-40  hover:cursor-pointer hover:from-purple-600 "
            onClick={(e) => handleOpenGameplay(e, nextAgent.gameplay)}
          >
            <img
              src={nextAgent.img}
              alt={nextAgent.name}
              className=" h-full object-cover scale-150 grayscale-image translate-y-3 translate-x-2"
            />
            <div className="bg-neutral-800 font-medium text-center absolute z-10 bottom-0 w-full text-sm">
              <p className="text-center capitalize">{nextAgent.name} - <span className="font-black text-xs">{version.version}</span></p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default NextAgents;
