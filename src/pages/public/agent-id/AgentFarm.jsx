import React, { useEffect, useState } from "react";
import {
  levelMaterials,
  lvlUpMaterials,
} from "../../../utils/farm/levelMaterals";
import { skillsMaterials } from "../../../utils/farm/skillMaterials";
import {
  coreMaterials,
  farmMaterials,
} from "../../../utils/farm/coreMaterials";
import FarmTable from "../../../components/agents/FarmTable";
import AgentTitle from "../../../components/titles/AgentTitles";

const AgentFarm = ({ data }) => {
  const { element, rol, nickname } = data;
  const [core, setCore] = useState({
    0: "",
    1: "",
  });

  useEffect(() => {
    if (nickname) {
      let updatedCore = { ...core };

      // Weekly boss
      if (farmMaterials.useGrip.some((n) => n === nickname)) {
        updatedCore[0] = "grip";
      }
      if (farmMaterials.useDrive.some((n) => n === nickname)) {
        console.log("usa drive");
        updatedCore[0] = "drive";
      }
      if (farmMaterials.useShoes.some((n) => n === nickname)) {
        console.log("usa shoes");
        updatedCore[0] = "shoes";
      }

      // Farmeable bosses
      if (farmMaterials.useObitaury.some((n) => n === nickname)) {
        updatedCore[1] = "obitaury";
      }
      if (farmMaterials.useAwe.some((n) => n === nickname)) {
        updatedCore[1] = "awe";
      }
      if (farmMaterials.usePursuit.some((n) => n === nickname)) {
        updatedCore[1] = "pursuit";
      }
      if (farmMaterials.useMalice.some((n) => n === nickname)) {
        updatedCore[1] = "malice";
      }
      if (farmMaterials.useAdvance.some((n) => n === nickname)) {
        updatedCore[1] = "advance";
      }

      setCore(updatedCore);
    }
  }, [nickname]);

  return (
    <div>
      <AgentTitle title={"Farm materials"} />
      <div className="grid gap-5 mb-5">
        <FarmTable materials={levelMaterials} element={element} rol={rol} />
        <FarmTable materials={lvlUpMaterials} element={element} rol={"exp"} />
        <FarmTable materials={skillsMaterials} element={element} />
        <FarmTable materials={coreMaterials} element={element} rol={core} />
      </div>
    </div>
  );
};

export default AgentFarm;
