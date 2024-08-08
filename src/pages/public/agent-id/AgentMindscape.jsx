import React, { useEffect, useState } from "react";
import { useParse } from "../../../hooks/useParse";
import AgentTitles from "./../../../components/titles/AgentTitles";
import { skillImage } from "../.././../utils/options";
import {
  getBorder,
} from "../../../utils/functions/general/get";

const AgentMindscape = ({ data }) => {
  const { mindscape, element } = data;
  const { parsedData } = useParse(mindscape);
  const [bgGradient, setBgGradient] = useState("");

  useEffect(() => {
    if (element) {
      switch (element) {
        case "fire":
          setBgGradient("bg-gradient-to-b from-rose-600 to-rose-400");
          break;
        case "ether":
          setBgGradient("bg-gradient-to-b from-fuchsia-600 to-fuchsia-400");
          break;
        case "ice":
          setBgGradient("bg-gradient-to-b from-cyan-600 to-cyan-400");
          break;
        case "electric":
          setBgGradient("bg-gradient-to-b from-blue-600 to-blue-400");
          break;
        case "physical":
          setBgGradient("bg-gradient-to-b from-yellow-600 to-yellow-400");
          break;
        default:
          setBgGradient("bg-gradient-to-b from-neutral-600 to-neutral-400");
          break;
      }
    }
  }, [element]);

  return (
    <div className="mb-5">
      <AgentTitles title={"Mindscape"} />
      <div className="grid gap-5">
        <img
          src={`https://i.imgur.com/${parsedData.img}.png`}
          alt="mindscape"
          className={`mx-auto border-4 ${getBorder(
            element
          )} rounded-3xl lg:w-8/12`}
        />
        <div className="grid gap-5">
          {parsedData.mindscapes
            ? parsedData.mindscapes.map((mind, i) => (
                <div key={mind.name} className="flex">
                  <div className="flex items-center p-1 bg-neutral-200 text-black font-black">
                    M{i + 1}
                  </div>
                  <div className="w-full">
                    <div className="flex items-center p-1 gap-5 bg-neutral-800">
                      <img
                        src={`https://i.imgur.com/${skillImage["core_skill"]}.png`}
                        alt="core_skill"
                        className={`w-8 h-8 p-1 bg-gradient-to-b ${bgGradient ? bgGradient : ''}`}
                      />
                      <p className="font-medium">{mind.name}</p>
                    </div>
                    <div className="bg-neutral-600 p-2 text-sm">
                      {mind.description}
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default AgentMindscape;
