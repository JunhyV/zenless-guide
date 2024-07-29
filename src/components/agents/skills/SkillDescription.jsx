import React, { useCallback, useEffect, useState } from "react";
import { skillImage } from "../../../utils/options";

const SkillDescription = ({description, actualSkill }) => {
  const [whatToReplace, setWhatToReplace] = useState("");

  useEffect(() => {
    const skillMap = {
      basic: "Basic Attack",
      dodge: "Dodge",
      assist: "Assist",
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

          return (
            <React.Fragment key={index}>
              {fragments}
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
  return (
    <p className="bg-neutral-700 p-2 lg:text-sm">
      {replaceText(description, skillImage[actualSkill], whatToReplace)}
    </p>
  );
};

export default SkillDescription;
