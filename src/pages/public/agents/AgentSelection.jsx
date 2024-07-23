import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  elementOptions,
  factionOptions,
  rolOptions,
} from "../../../utils/options";

const AgentSelection = ({ data }) => {
  const [bgByRank, setBgByRank] = useState("");
  const { name, rol, element, faction, rank, img, id } = data;

  const factionImg = factionOptions.find((core) => core.name === faction)?.img;
  const elementImg = elementOptions.find((core) => core.name === element)?.img;
  const rolImg = rolOptions.find((core) => core.name === rol)?.img;

  useEffect(() => {
    switch (rank) {
      case "S":
        setBgByRank("bg-gradient-to-b from-amber-600 to-amber-400");
        break;
      case "A":
        setBgByRank("bg-gradient-to-b from-violet-600 to-violet-400");
        break;

      default:
        break;
    }
  }, [rank]);

  return (
    <Link
      to={`/agents/${id}`}
      className={`text-white font-medium ${bgByRank} hover:from-yellow-400 hover-grayscale rounded-xl`}
    >
      <div className="relative">
        <img
          src={`https://i.imgur.com/${img}.png`}
          alt={name}
          className="w-32 h-108 hover:grayscale grayscale-image"
        />
        <div className="flex w-full justify-between p-0.5 absolute bottom-0">
          <img
            src={`https://i.imgur.com/${rolImg}.png`}
            alt="rol"
            className="w-6"
          />
          <img
            src={`https://i.imgur.com/${elementImg}.png`}
            alt="element"
            className="w-6"
          />
        </div>
        <div className="absolute w-full flex justify-end top-0 p-0.5">
          <img
            src={`https://i.imgur.com/${factionImg}`}
            alt="element"
            className="w-8 h-8"
          />
        </div>
      </div>
      <p className="bg-neutral-800 text-center hover:bg-amber">{name}</p>
    </Link>
  );
};

export default AgentSelection;
