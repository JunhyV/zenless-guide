import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  elementOptions,
  factionOptions,
  rolOptions,
} from "../../../utils/options";
import { newCharacters } from "../../../utils/gameVersion";
import newImg from '../../../assets/images/extras/5a5a6d4914d8c4188e0b0893.png'

const AgentSelection = ({ data }) => {
  const [bgByRank, setBgByRank] = useState("");
  const { name, rol, element, faction, rank, img, id } = data;

  const factionImg = factionOptions.find((core) => core.name === faction)?.img;
  const elementImg = elementOptions.find((core) => core.name === element)?.img;
  const rolImg = rolOptions.find((core) => core.name === rol)?.img;

  const isNew = newCharacters.some(newAgent => name.includes(newAgent));

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
      className={`text-white font-medium ${bgByRank} hover:from-yellow-400 hover-grayscale relative overflow-hidden`}
    >
      {isNew ? <img src={newImg} className="absolute -top-2 -left-2 z-10 w-14"/> : null}
      <div className="relative overflow-hidden">
        <img
          src={`https://i.imgur.com/${img}.png`}
          alt={name}
          className="w-32 md:w-28 h-36 grayscale-image object-cover"
        />
        <div className="p-0.5 absolute bottom-0">
          <img
            src={`https://i.imgur.com/${rolImg}.png`}
            alt="rol"
            className="w-8"
          />
        </div>
        <div className="absolute top-0 right-0">
          <img
            src={`https://i.imgur.com/${factionImg}.png`}
            alt="element"
            className="w-10"
          />
        </div>
      </div>
      <div className="bg-neutral-800 flex items-center justify-center gap-2">
        <p className="">{name}</p>
        <img
          src={`https://i.imgur.com/${elementImg}.png`}
          alt="element"
          className="w-4 h-4"
        />
      </div>
    </Link>
  );
};

export default AgentSelection;
