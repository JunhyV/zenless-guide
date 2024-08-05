import React from "react";
import { skillImage } from "../../utils/options";
import { getBorder, getHoverBorder, getHoverTxtColor, getTxtColor } from "../../utils/functions/general/get";

const SkillsNav = ({ set, actual, element}) => {
  const skills = ["basic", "dodge", "assist", "special", "chain"];
  
  return (
    <nav className="grid grid-cols-3 md:grid-cols-5 mb-5">
      {skills.map((skill) => (
        <button
          key={skill}
          className={`${actual === skill ? getTxtColor(element) : ''} capitalize p-1 bg-neutral-800 border-2 ${actual === skill ? getBorder(element) : 'border-neutral-800'} font-medium flex items-center justify-around ${getHoverBorder(element)} ${getHoverTxtColor(element)}`}
          onClick={() => set(skill)}
        >
          <img
            src={`https://i.imgur.com/${skillImage[skill]}.png`}
            alt="basic"
            className="w-8 h-8"
          />
          <p>{skill}</p>
        </button>
      ))}
    </nav>
  );
};

export default SkillsNav;
