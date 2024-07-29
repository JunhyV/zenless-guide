import React, { useEffect, useState } from "react";
import {
  levelMaterials,
  lvlUpMaterials,
} from "../../../utils/farm/levelMaterals";
import FarmTable from "./FarmTable";
import { skillsMaterials } from "../../../utils/farm/skillMaterials";
import {
  coreMaterials,
  farmMaterials,
} from "../../../utils/farm/coreMaterials";

const AgentFarm = ({ element, rol, name, img }) => {
  const [core, setCore] = useState({
    0: "",
    1: "",
  });

  useEffect(() => {
    if (name) {
      let updatedCore = { ...core };
      
      // Weekly boss
      if (farmMaterials.useGrip.some((n) => n === name)) {
        updatedCore[0] = "grip";
      }
      if (farmMaterials.useDrive.some((n) => n === name)) {
        console.log('usa drive');
        updatedCore[0] = "drive";
      }
      if (farmMaterials.useShoes.some((n) => n === name)) {
        console.log('usa shoes');
        updatedCore[0] = "shoes";
      }
      
      // Farmeable bosses
      if (farmMaterials.useObitaury.some((n) => n === name)) {
        updatedCore[1] = "obitaury";
      }
      if (farmMaterials.useAwe.some((n) => n === name)) {
        updatedCore[1] = "awe";
      }
      if (farmMaterials.usePursuit.some((n) => n === name)) {
        updatedCore[1] = "pursuit";
      }
      if (farmMaterials.useMalice.some((n) => n === name)) {
        updatedCore[1] = "malice";
      }
      if (farmMaterials.useAdvance.some((n) => n === name)) {
        updatedCore[1] = "advance";
      }
  
      setCore(updatedCore);
    }
  }, [name]);

  return (
    <div className="p-2 md:p-5 w-full min-h-full lg:w-5/6 2xl:w-full flex flex-col">
      <div className="grid lg:grid-cols-2 gap-5">
        <img
          src={`https://i.imgur.com/${img}.png`}
          alt={name}
          className="w-full h-full object-cover object-top aspect-square"
        />
        <div className="grid gap-5">
          <FarmTable materials={levelMaterials} element={element} rol={rol} />
          <FarmTable materials={lvlUpMaterials} element={element} rol={"exp"} />
        </div>
        <FarmTable materials={skillsMaterials} element={element} />
        <FarmTable materials={coreMaterials} element={element} rol={core} />
      </div>
    </div>
  );
};

export default AgentFarm;
