import React, { useEffect, useState } from "react";
import { skillImage } from "../../../utils/options";
import SkillContainer from "./SkillContainer";

const ShowSkills = ({ data, element, rank }) => {
  const [skills, setSkills] = useState({});
  const [listSkill, setListSkill] = useState([]);
  const [actualSkill, setActualSkill] = useState("");
  const [textColor, setTextColor] = useState("");
  const [borderColor, setBorderColor] = useState("");
  const [hoverColor, setHoverColor] = useState("");

  useEffect(() => {
    if (data) {
      // Parse data
      const parsedData = JSON.parse(data);
      setSkills(parsedData);

      // Get list items
      const getList = Object.keys(parsedData);
      setListSkill(getList);

      // Set skill content
      setActualSkill(getList[0]);
    }

    // Get color
    switch (element) {
      case "ether":
        setTextColor("text-fuchsia-400");
        setBorderColor("hover:border-fuchsia-400");
        setHoverColor("hover:text-fuchsia-400");
        break;
      case "electric":
        setTextColor("text-blue-400");
        setBorderColor("hover:border-blue-400");
        setHoverColor("hover:text-blue-400");
        break;
      case "fire":
        setTextColor("text-rose-400");
        setBorderColor("hover:border-rose-400");
        setHoverColor("hover:text-rose-400");
        break;
      case "physical":
        setTextColor("text-yellow-400");
        setBorderColor("hover:border-yellow-400");
        setHoverColor("hover:text-physical-400");
        break;
      case "ice":
        setTextColor("text-cyan-400");
        setBorderColor("hover:border-cyan-400");
        setHoverColor("hover:text-cyan-400");
        break;
      default:
        break;
    }
  }, [data]);

  return (
    <div className="m-2 p-2 lg:flex-1 no-scrollbar h-full">
      <nav className="flex flex-col md:flex-row justify-between min-w-full">
        {listSkill.map((li) => (
          <button
            key={li}
            className={`${
              actualSkill === li ? textColor : "text-white"
            } ${borderColor} ${hoverColor} capitalize border-2 border-neutral-800 bg-neutral-800 p-1 font-medium flex gap-2 justify-center items-center md:w-full`}
            onClick={() => setActualSkill(li)}
          >
            <p>{li}</p>
            <img
              src={`https://i.imgur.com/${skillImage[li]}.png`}
              alt={li}
              className="w-8 h-8"
            />
          </button>
        ))}
      </nav>
      <div className="text-white mt-2 grid gap-5 lg:grid-cols-2">
        {skills[actualSkill] && (
          <>
            {skills[actualSkill].map((skillContent) => (
              <SkillContainer
                key={skillContent.name + skillContent.id}
                data={skillContent}
                rank={rank}
                actualSkill={actualSkill}
                element={element}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ShowSkills;
