import React from "react";
import SkillMaterials from "./SkillMaterials";
import LevelMaterials from "./LevelMaterials";
import CoreMaterials from "./CoreMaterials";

const AgentFarm = ({ element, rol, name, img }) => {
  return (
    <div className="p-2 md:p-5 w-full min-h-full lg:w-5/6 2xl:w-full flex flex-col">
      <h1 className="text-4xl font-black text-center mb-5 text-white">
        Farm materials
      </h1>
      <div className="grid gap-5">
        <LevelMaterials element={element} name={name} img={img} rol={rol} />
        <div className="grid gap-5 lg:grid-cols-2">
          <SkillMaterials element={element} />
          <CoreMaterials element={element} name={name}/>
        </div>
      </div>
    </div>
  );
};

export default AgentFarm;
