import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Tier = ({ tier, agents }) => {
  const [bg, setBg] = useState("");
  const { rank, dmg_carry, anomaly_carry, stun, support } = tier;

  const dmg = agents.filter((agent) =>
    dmg_carry.some((core) => agent.name.includes(core))
  );
  const anomaly_dmg = agents.filter((agent) =>
    anomaly_carry.some((core) => agent.name.includes(core))
  );
  const stuner = agents.filter((agent) =>
    stun.some((core) => agent.name.includes(core))
  );
  const supports = agents.filter((agent) =>
    support.some((core) => agent.name.includes(core))
  );

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
  }, [rank]);

  return (
    <div className="flex">
      <div className={`${bg} w-10 flex items-center justify-center font-black`}>
        {rank}
      </div>
      <div className="w-full grid grid-cols-4">
        <div className="grid grid-cols-3 gap-2 p-2 bg-neutral-700">
          {dmg.map((onTier) => (
            <Link key={onTier.id}
            to={`/agents/${onTier.id}`}
              className={`bg-gradient-to-b ${
                onTier.rank === "S"
                  ? "from-amber-600 to-amber-400"
                  : " from-violet-600 to-violet-400"
              } w-fit hover:scale-105 transform transition-transform duration-300 overflow-hidden relative`}
            >
              <img
                src={`https://i.imgur.com/${onTier.img}.png`}
                alt="agent-img"
                className="w-32 h-full"
              />
              <p className="absolute bottom-0 w-full bg-neutral-800 text-xs font-medium text-center text-white">
                {onTier.name}
              </p>
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2 p-2 bg-neutral-600">
        {anomaly_dmg.map((onTier) => (
            <Link key={onTier.id}
            to={`/agents/${onTier.id}`}
              className={`bg-gradient-to-b ${
                onTier.rank === "S"
                  ? "from-amber-600 to-amber-400"
                  : " from-violet-600 to-violet-400"
              } w-fit hover:scale-105 transform transition-transform duration-300`}
            >
              <img
                src={`https://i.imgur.com/${onTier.img}.png`}
                alt="agent-img"
                className="w-32"
              />
              <p className="bg-neutral-800 text-xs font-medium text-center text-white">
                {onTier.name}
              </p>
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2 p-2 bg-neutral-700">
        {stuner.map((onTier) => (
            <Link key={onTier.id}
            to={`/agents/${onTier.id}`}
              className={`bg-gradient-to-b ${
                onTier.rank === "S"
                  ? "from-amber-600 to-amber-400"
                  : " from-violet-600 to-violet-400"
              } w-fit hover:scale-105 transform transition-transform duration-300`}
            >
              <img
                src={`https://i.imgur.com/${onTier.img}.png`}
                alt="agent-img"
                className="w-32"
              />
              <p className="bg-neutral-800 text-xs font-medium text-center text-white">
                {onTier.name}
              </p>
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2 p-2 bg-neutral-600">
        {supports.map((onTier) => (
            <Link key={onTier.id}
            to={`/agents/${onTier.id}`}
              className={`bg-gradient-to-b ${
                onTier.rank === "S"
                  ? "from-amber-600 to-amber-400"
                  : " from-violet-600 to-violet-400"
              } w-fit hover:scale-105 transform transition-transform duration-300`}
            >
              <img
                src={`https://i.imgur.com/${onTier.img}.png`}
                alt="agent-img"
                className="w-32"
              />
              <p className="bg-neutral-800 text-xs font-medium text-center text-white">
                {onTier.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tier;
