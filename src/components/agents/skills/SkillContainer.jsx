import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState, useCallback } from "react";
import { skillImage } from "../../../utils/options";

const SkillContainer = ({ data, rank, actualSkill }) => {
  const [multiplierToggle, setMultiplierToggle] = useState(false);
  const [whatToReplace, setWhatToReplace] = useState("");
  const { name, description } = data;

  useEffect(() => {
    const skillMap = {
      basic: "Basic Attack",
      dodge: "Dodge",
      assist: "Assist", // Corregido el typo
      special: "Special Attack",
      chain: "Ultimate",
    };
    setWhatToReplace(skillMap[actualSkill] || "");
  }, [actualSkill]);

  const replaceText = useCallback((text, imageUrl, replace) => {
    if (!replace) return text;

    const keyword = [
      "Physical DMG",
      "Ether DMG",
      "Fire DMG",
      "Ice DMG",
      "Electric DMG",
    ];

    const keywordStyles = {
      "Physical DMG": "text-yellow-400",
      "Ether DMG": "text-fuchsia-400",
      "Fire DMG": "text-rose-400",
      "Ice DMG": "text-cyan-400",
      "Electric DMG": "text-blue-400",
    };

    const regex = new RegExp(keyword.join("|"), "g");

    const parts = text.split(replace);
    return (
      <>
        {parts.flatMap((part, index) => {
          const getDMG = part.split(regex);
          const matches = [...part.matchAll(regex)];

          // New array to change
          const fragments = getDMG.map((fragment, i) => (
            <React.Fragment key={`${index}-${i}`}>
              {fragment}
              {i < getDMG.length - 1 && (
                <span
                  className={
                    matches[i] && keyword.includes(matches[i][0])
                      ? `highlighted ${keywordStyles[matches[i][0]] || ""}`
                      : ""
                  }
                >
                  {matches[i] ? matches[i][0] : ""}
                </span>
              )}
            </React.Fragment>
          ));
          // Devolver los fragmentos procesados para cada parte
          return (
            <React.Fragment key={index}>
              {fragments}
              {/* Añadir imagen después de cada parte, excepto el último */}
              {index < parts.length - 1 && (
                <img
                  src={`https://i.imgur.com/${imageUrl}.png`}
                  alt={replace}
                  className="inline w-6 h-6"
                  style={{ opacity: 1, transition: "opacity 0.5s ease-in" }}
                />
              )}
            </React.Fragment>
          );
        })}
      </>
    );
  }, []);

  const handleToggle = useCallback(() => {
    setMultiplierToggle((prevState) => !prevState);
  }, []);

  const multiplierContent = React.useMemo(() => {
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
  }, [multiplierToggle, data.data]);

  return (
    <div className="w-full shadow-2xl h-fit">
      <div className="bg-neutral-800 flex items-center p-1 gap-2">
        <img
          src={`https://i.imgur.com/${skillImage[actualSkill]}.png`}
          alt="skill"
          className="bg-neutral-600 p-1 h-8 w-8"
        />
        <p>{name}</p>
      </div>
      <p className="bg-neutral-700 p-2 lg:text-sm">
        {replaceText(description, skillImage[actualSkill], whatToReplace)}
      </p>
      {data.data.length > 0 && (
        <div
          className="bg-neutral-800 hover:cursor-pointer"
          onClick={handleToggle}
        >
          <div className="flex justify-between items-center p-1">
            <p>Multipliers at {rank === "S" ? "+12" : "+16"}</p>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
          {multiplierContent}
        </div>
      )}
    </div>
  );
};

export default SkillContainer;
