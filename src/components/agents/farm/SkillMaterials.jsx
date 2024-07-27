import React, { useEffect, useState } from "react";
import { skillsMaterials } from "../../../utils/farm/skillMaterials";import FarmHeader from "./FarmHeader";
import FarmContent from "./FarmContent";

const SkillMaterials = ({element}) => {
  const [fromColor, setFromColor] = useState("");
  const [toColor, setToColor] = useState("");

  useEffect(() => {
    // Get bg color
    if (element) {
      switch (element) {
        case "ether":
          setFromColor("from-fuchsia-400");
          setToColor("to-fuchsia-100");
          break;
        case "electric":
          setFromColor("from-blue-400");
          setToColor("to-blue-100");
          break;
        case "fire":
          setFromColor("from-rose-400");
          setToColor("to-rose-100");
          break;
        case "physical":
          setFromColor("from-yellow-400");
          setToColor("to-yellow-100");
          break;
        case "ice":
          setFromColor("from-cyan-400");
          setToColor("to-cyan-100");
          break;
        default:
          break;
      }
    }
  }, [element]);
  return (
    <div
      role="skill-materials"
      className={`relative bg-gradient-to-b ${fromColor ? fromColor : ""} ${
        toColor ? toColor : ""
      } p-2`}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <h2 className="text-2xl mb-2 font-medium text-center text-white relative">
        Skill lvl materials{" "}
        <span className="font-thin text-sm">(per skill)</span>
      </h2>
      <div
        role="skill-materials-content"
        className="grid relative"
      >
        <div role="table">
          <FarmHeader/>
          <FarmContent materials={skillsMaterials} element={element}/>
        </div>
      </div>
    </div>
  );
};

export default SkillMaterials;
