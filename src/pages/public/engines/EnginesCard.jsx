import React from "react";
import CoreDescription from "../../../components/agents/CoreDescription";
import { useParse } from "../../../hooks/useParse";
import newImg from "../../../assets/images/extras/5a5a6d4914d8c4188e0b0893.png";
import { newEngine } from "../../../utils/gameVersion";

export const EnginesCard = ({ data }) => {
  const { name, rol, rank, advanced_stat, effect, img, stats } = data;
  const { parsedData } = useParse(stats);
  console.log(parsedData);

  const isNew = newEngine.some((newObj) => data.name.includes(newObj));

  const bgColor = (rank) => {
    switch (rank) {
      case "S":
        return "bg-gradient-to-b from-amber-600 to-amber-400";
      case "A":
        return "bg-gradient-to-b from-purple-600 to-purple-400";
      case "B":
        return "bg-gradient-to-b from-blue-600 to-blue-400";
      default:
        return "bg-white";
    }
  };

  return (
    <div className="shadow-xl h-full flex flex-col relative">
      {isNew && (
        <img
          src={newImg}
          className="absolute -top-2 -left-2 z-10 w-14"
          alt="New"
          loading="lazy"
        />
      )}
      <div className={`flex flex-col gap-2 p-2 bg-neutral-800`}>
        <div className="flex gap-2 items-center">
          <div className={`w-16 h-16 object-cover flex-none ${bgColor(rank)}`}>
            <img
              className="w-full h-full p-1"
              src={`https://i.imgur.com/${img}.png`}
              alt={name}
            />
          </div>
          <div className="flex flex-col justify-between text-gray-100 w-full">
            <h2
              className={`font-black ${
                rank === "S"
                  ? "text-amber-400"
                  : rank === "A"
                  ? "text-purple-400"
                  : "text-blue-400"
              }`}
            >
              {name}
            </h2>
            <p className="font-medium capitalize">
              Rol: <span className="text-neutral-400">{rol}</span> | Rank:{" "}
              <span
                className={`${
                  rank === "S"
                    ? "text-amber-400"
                    : rank === "A"
                    ? "text-purple-400"
                    : "text-blue-400"
                }`}
              >
                {rank}
              </span>
            </p>
            <p className="font-thin">Stats lvl. 60</p>
          </div>{" "}
        </div>
      </div>
      <div className="flex justify-between items-center text-sm text-white bg-neutral-700 p-1 px-5">
        <p className="font-thin">
          {" "}
          <span className="font-medium">Base attack: </span>
          {parsedData ? parsedData.base_attack : ""}{" "}
        </p>
        <p className="font-thin">
          {" "}
          <span className="font-medium">{advanced_stat}: </span>{" "}
          {parsedData ? parsedData.secondary_stat : ""}%
        </p>
      </div>
      <div className={`p-2 bg-neutral-600 rounded-b flex-1 text-white`}>
        <CoreDescription text={effect} />
      </div>
    </div>
  );
};
