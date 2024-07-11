import React from "react";
import { getImages } from "./getImage";

const AgentCard = ({ agent }) => {
  const { name, rol, element, faction, rank, img} = agent;
  const images = getImages(rol, element, faction, rank);
  return (
    <div className="relative w-fit bg-neutral-800 ">
      <img src={images[3]} alt="rank-img" className="absolute w-6"/>
      <img src={img} alt="agent-img" className="w-32 scale-90 transform transition-transform duration-300 hover:scale-100 cursor-pointer" />
      <div className="absolute right-0 top-0 flex">
        <img src={images[0]} alt="rol-img" className="w-6" />
        <img src={images[1]} alt="element-img" className="w-6" />
      </div>
      <div className="text-center">
        <p className="uppercase font-black text-white">{name}</p>
      </div>
    </div>
  );
};

export default AgentCard;
