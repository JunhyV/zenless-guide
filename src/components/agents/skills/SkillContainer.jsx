import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState, useCallback } from "react";
import { skillImage } from "../../../utils/options";
import SkillDescription from "./SkillDescription";

const SkillContainer = ({ data, rank, actualSkill, element }) => {
  const [multiplierToggle, setMultiplierToggle] = useState(false);
  const [bgColor, setBgColor] = useState('');
  const [textColor, setTextColor] = useState('');

  const handleToggle = useCallback(() => {
    setMultiplierToggle((prevState) => !prevState);
  }, []);

  const multiplierContent = () => {
    if (!multiplierToggle || data.data.length === 0) return null;
    return (
      <div>
        {data.data.map((multiplier, i) => (
          <p
            key={i}
            className={`flex justify-between p-1 ${
              i % 2 ? "bg-neutral-500" : "bg-neutral-600"
            }`}
          >
            {multiplier.type}{" "}
            <span className="text-thin">
              {multiplier.number}{" "}
              {multiplier.type.includes("Energy Cost") ? "" : "%"}
            </span>
          </p>
        ))}
      </div>
    );
  };

  useEffect(() => {
    if (element) {
      switch (element) {
        case "ether":
          setBgColor("from-fuchsia-600 to-fuchsia-300");
          setTextColor('text-fuchsia-400');
          break;
        case "electric":
          setBgColor("from-blue-600 to-blue-300");
          setTextColor('text-blue-400');
          break;
        case "fire":
          setBgColor("from-rose-600 to-rose-300");
          setTextColor('text-rose-400');
          break;
        case "physical":
          setBgColor("from-yellow-600 to-yellow-300");
          setTextColor('text-yellow-400');
          break;
        case "ice":
          setBgColor("from-cyan-600 to-cyan-300");
          setTextColor('text-cyan-400');
          break;
        default:
          break;
      }
    }
  }, [element]);

  return (
    <div className="w-full shadow-2xl h-fit">
      <div className="bg-neutral-800 flex items-center p-1 gap-2">
        <img
          src={`https://i.imgur.com/${skillImage[actualSkill]}.png`}
          alt="skill"
          className={`bg-gradient-to-b ${bgColor ? bgColor : ''} p-1 h-8 w-8`}
        />
        <p className={`${textColor ? textColor : ''} font-medium`}>{data.name}</p>
      </div>
      <SkillDescription actualSkill={actualSkill} description={data.description} />
      {data.data.length > 0 && (
        <div
          className="bg-neutral-800 hover:cursor-pointer"
          onClick={handleToggle}
        >
          <div className="flex justify-between items-center p-1">
            <p>Multipliers at {rank === "S" ? "+12" : "+16"}</p>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
          {multiplierContent()}
        </div>
      )}
    </div>
  );
};

export default SkillContainer;
