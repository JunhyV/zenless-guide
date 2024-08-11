import React, { useEffect, useState } from "react";

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

  return (
    <div
      key={_id}
      className={`shadow-xl cursor-pointer object-scale-down transform transition-transform duration-300 ease-in-out hover:scale-105`}
      onClick={() => openModal(data)}
    >
      <img
        src={`https://i.imgur.com/${img}.png`}
        alt={name}
        className={`${bgByRank ? bgByRank : ''}`}
      />
      <p className="bg-neutral-800 text-white text-center font-medium text-sm">{name}</p>
    </div>
  );
};

export default BangbooCard;
