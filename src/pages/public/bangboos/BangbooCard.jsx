import React, { useEffect, useState } from "react";
import { newBangboo } from "../../../utils/gameVersion.js";
import newImg from '../../../assets/images/extras/5a5a6d4914d8c4188e0b0893.png';

const BangbooCard = ({ data, openModal }) => {
  const { _id, img, name, rank } = data;
  
  const [bgByRank, setBgByRank] = useState("");

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

  const isNew = newBangboo.some(newObj => data.name.includes(newObj));

  return (
    <div
      key={_id}
      className={`shadow-xl cursor-pointer object-scale-down transform transition-transform duration-300 ease-in-out hover:scale-105 relative`}
      onClick={() => openModal(data)}
    >
      {isNew ? <img
          src={newImg}
          className="absolute -top-2 -left-2 z-10 w-14"
          alt="New"
          loading="lazy"
        /> : null}
      <img
        src={`https://i.imgur.com/${img}.png`}
        alt={name}
        className={`${bgByRank ? bgByRank : ''} w-36`}
      />
      <p className="bg-neutral-800 text-white text-center font-medium text-sm">{name}</p>
    </div>
  );
};

export default BangbooCard;
