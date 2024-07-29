import React, { useEffect, useState } from "react";
import {
  elementOptions,
  factionOptions,
  rolOptions,
} from "../../../utils/options";

const AgentView = ({ data }) => {
  const { full_img, nickname, full_name, faction, rol, rank, element } = data;
  const [fromColor, setFromColor] = useState("");
  const [toColor, setToColor] = useState("");
  const [borderColor, setBorderColor] = useState("");
  const [screenHeight, setScreenHeight] = useState("");
  const [screenHeight2, setScreenHeight2] = useState("");

  useEffect(() => {
    if (window.innerHeight < 450) {
      setScreenHeight("top-2 right-5");
      setScreenHeight2("-translate-y-4 -translate-x-14");
    }
    if (window.innerHeight >= 450) {
      setScreenHeight("bottom-2 right-5 md:bottom-5 md:right-10");
      setScreenHeight2("");
    }
  }, [window.innerHeight]);

  const factionImg = factionOptions
    .filter((fact) => fact.name === faction)
    .shift();

  const elementImg = elementOptions
    .filter((ele) => ele.name === element)
    .shift();
  const rolImg = rolOptions.filter((r) => r.name === rol).shift();

  useEffect(() => {
    const fromElementColor = {
      fire: "from-neutral-800",
      physical: "from-neutral-800",
      electric: "from-neutral-800",
      ice: "from-neutral-800",
      ether: "from-neutral-800",
    };
    const toElementColor = {
      fire: "to-rose-400",
      physical: "to-yellow-400",
      electric: "to-blue-400",
      ice: "to-cyan-400",
      ether: "to-fuchsia-400",
    };
    const borderElementColor = {
      fire: "border-rose-400",
      physical: "border-yellow-400",
      electric: "border-blue-400",
      ice: "border-cyan-400",
      ether: "border-fuchsia-400",
    };
    setFromColor(fromElementColor[element] || "");
    setToColor(toElementColor[element] || "");
    setBorderColor(borderElementColor[element] || "");
  }, [element]);
  return (
<div className="lg:w-1/2 min-h-full relative overflow-hidden">
  <img
    src={`https://i.imgur.com/${full_img}.png`}
    alt={nickname}
    className={`min-w-full object-cover object-top ${screenHeight2} h-[calc(100vh-6.5rem)] md:h-[calc(100vh-8rem)] lg:h-[calc(100vh-4rem)] landscape:h-[calc(100vh+2rem)] fade-edges`}
  />
  <div
    className={`border-2 ${borderColor} bg-gradient-to-r ${fromColor} ${toColor} text-white absolute flex gap-5 p-1 md:p-2 rounded-xl ${screenHeight}`}
  >
    <img
      src={`https://i.imgur.com/${factionImg.img}.png`}
      alt={faction}
      className="w-10 md:w-16"
    />
    <div className="w-fit my-auto">
      <p className="text-xl md:text-4xl font-medium font-serif">
        {full_name}
      </p>
      <p className="text-lg md:text-xlxl">{faction}</p>
    </div>
  </div>

  <div className="absolute top-2 left-2 md:top-5 md:left-5 flex flex-col gap-2">
    <div
      className={`border-2 ${borderColor} bg-gradient-to-r ${fromColor} ${toColor} p-1 w-40 md:w-52 rounded-br-full flex gap-5 items-center`}
    >
      <img
        src={`https://i.imgur.com/${rolImg.img}.png`}
        alt={rol}
        className="w-6 h-6 md:w-8 md:h-8"
      />
      <p className="text-lg md:text-2xl text-white capitalize font-medium font-serif">
        {rol}
      </p>
    </div>
    <div
      className={`border-2 ${borderColor} bg-gradient-to-r ${fromColor} ${toColor} p-1 w-36 md:w-44 rounded-br-full flex gap-5 items-center`}
    >
      <img
        src={`https://i.imgur.com/${elementImg.img}.png`}
        alt={element}
        className="w-6 h-6 md:w-8 md:h-8"
      />
      <p className="text-lg md:text-2xl text-white capitalize font-medium font-serif">
        {element}
      </p>
    </div>
  </div>
</div>

  );
};

export default AgentView;
