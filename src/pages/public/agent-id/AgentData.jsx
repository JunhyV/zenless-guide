import React, { useState, useEffect } from "react";
import {
  getFaction,
  getBorder,
  getBg,
  getOptions,
} from "../../../utils/functions/general/get";
import { useParse } from "../../../hooks/useParse";
import AgentFull from "../../../components/img/AgentFull";
import { elementOptions, rolOptions } from "../../../utils/options";

const AgentData = ({ data }) => {
  const { full_img, nickname, stats, rol, element, faction } = data;

  const [statsList, setStatsList] = useState([]);
  const { parsedData } = useParse(stats);

  useEffect(() => {
    if (parsedData) {
      const getList = Object.keys(parsedData);

      setStatsList(getList);
    }
  }, [parsedData]);

  const percentage = ["crit_rate", "crit_dmg", "pen_ratio", "anomaly_p"];

  return (
    <div className="grid md:grid-cols-2 landscape:grid-cols-2 md:items-center landscape:items-center gap-5 mb-5">
      <div role="agent-look" className="relative">
        <AgentFull name={nickname} img={full_img} />
        <div className="grid gap-2 absolute top-2 left-2">
          <div
            className={`bg-gradient-to-r from-neutral-800 to-neutral-600 border-2 ${getBorder(
              element
            )} w-40 p-1 rounded-br-full capitalize font-medium lg:text-lg flex gap-2`}
          >
            <img
              src={`https://i.imgur.com/${getOptions(rol, rolOptions).img}.png`}
              alt={rol}
              className="w-8 h-8"
            />
            <p>{rol}</p>
          </div>
          <div
            className={`bg-gradient-to-r from-neutral-800 to-neutral-600 border-2 ${getBorder(
              element
            )} w-32 p-1 rounded-br-full capitalize font-medium lg:text-lg flex gap-2`}
          >
            <img
              src={`https://i.imgur.com/${
                getOptions(element, elementOptions).img
              }.png`}
              alt={element}
              className="w-8 h-8"
            />
            <p>{element}</p>
          </div>
        </div>
        <div
          className={`bg-gradient-to-r from-neutral-800 to-neutral-600 border-2 ${getBorder(
            element
          )} p-1 rounded-lg flex gap-5 w-fit absolute bottom-2 right-2`}
        >
          <img
            src={`https://i.imgur.com/${getFaction(faction).img}.png`}
            alt={faction}
            className="w-14 lg:w-20"
          />
          <div className="grid items-center">
            <h2 className="font-medium text-xl lg:text-4xl">{nickname}</h2>
            <p className="font-thin text-lg lg:text-2xl">{faction}</p>
          </div>
        </div>
      </div>

      <div
        role="agent-stats"
        className={`${getBg(
          element
        )} text-white p-1 landscape:h-fit lg:items-center shadow-xl lg:w-1/2 lg:mx-auto`}
      >
        <h2 className="text-center font-medium text-xl bg-neutral-800 p-1">
          Stats at lvl 60
        </h2>
        {statsList.map((stat, i) => (
          <div
            key={stat}
            className={`flex justify-between w-full p-1 ${
              i % 2 ? "bg-neutral-700" : "bg-neutral-600"
            }`}
          >
            <p className="capitalize">
              {stat
                .replace("_", " ")
                .replace(" m", " mastery")
                .replace(" p", " proficiency")}{" "}
            </p>
            <p>
              {parsedData[stat]}{" "}
              <span>{percentage.includes(stat) ? "%" : ""}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentData;
