import React from "react";
import { getImages } from "./getImage";
import { Link } from "react-router-dom";

const AgentCard = ({ agent }) => {
  const { name, rol, element, faction, grade, img} = agent;
  const images = getImages(rol, element, faction, grade);
  return (
    <Link to={`/agents/${name}`} className="w-fit bg-neutral-800 flex transition-colors duration-300 cursor-pointer hover:bg-yellow-500 rounded-md">
      <div className="flex flex-col bg-neutral-900 justify-between p-1">
        <div>
          <img src={images[3]} alt="rank-img" className="w-6" />
        </div>
        <div>
          <img src={images[0]} alt="rol-img" className="w-6" />
          <img src={images[1]} alt="element-img" className="w-6" />
        </div>
      </div>
      <div className="relative w-28 h-28">
        <img src={img} alt="agent-img" className="absolute top-2.5  mx-auto transform transition-transform hover:scale-110" />
        <p className="absolute top-3/4 left-1/2 -translate-x-1/2 uppercase text-white text-sm bg-neutral-600 px-1 rounded-2xl">{name}</p>
      </div>
    </Link>
  );
};

export default AgentCard;
