import React from "react";
import exp from "../../../assets/images/zzz-materials/lvl-materials/RoleExp03.webp";
import dennies from "../../../assets/images/zzz-materials/dannies.webp";
import hamster from "../../../assets/images/zzz-materials/skill-materials/UltimateSkill.webp";
import {
  getAgentMaterials,
  materialImages,
} from "../../../utils/farm/coreMaterials";
import {
  getAgentPromotion,
  promotionImages,
} from "../../../utils/farm/levelMaterals";
import {
  getAgentSkills,
  skillImages,
} from "../../../utils/farm/skillMaterials";

const FarmMaterials = ({ data, name, element, rol }) => {
  const useMaterials = getAgentMaterials(name);
  const usePromotion = getAgentPromotion(rol);
  const useSkills = getAgentSkills(element);

  const {
    promotionTotals,
    totalCore,
    totalDennies,
    totalExp,
    totalSkillMaterials,
    totalHamster,
  } = data;

  return (
    <>
      {totalDennies === 0 &&
      totalExp === 0 &&
      promotionTotals.basic === 0 &&
      promotionTotals.advanced === 0 &&
      promotionTotals.buster === 0 &&
      totalCore.farmeable === 0 &&
      totalCore.weekly === 0 &&
      totalSkillMaterials.basic === 0 &&
      totalSkillMaterials.advanced === 0 &&
      totalSkillMaterials.specialized === 0 &&
      totalHamster === 0 ? (
        <p className="text-center font-thin">No materials needed yet.</p>
      ) : (
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {totalDennies !== 0 ? (
            <div className="text-center">
              <img src={dennies} alt="dennies" className="w-12 h-12 mx-auto bg-gradient-to-b from-sky-600 to-sky-400 p-1" />
              <p className="font-thin">x{totalDennies.toLocaleString("en-US")}</p>
            </div>
          ) : null}
          {totalExp !== 0 ? (
            <div className="text-center">
              <img src={exp} alt="exp" className="w-12 h-12 mx-auto bg-gradient-to-b from-purple-600 to-purple-400 p-1" />
              <p className="font-thin">x{totalExp.toLocaleString("en-US")}</p>
            </div>
          ) : null}
          {promotionTotals.basic !== 0 ? (
            <div className="text-center">
              <img
                src={promotionImages[usePromotion[0]]}
                alt={usePromotion[0]}
                className="w-12 h-12 mx-auto bg-gradient-to-b from-emerald-600 to-emerald-400 p-1"
              />
              <p className="font-thin">x{promotionTotals.basic.toLocaleString("en-US")}</p>
            </div>
          ) : null}
          {promotionTotals.advanced !== 0 ? (
            <div className="text-center">
              <img
                src={promotionImages[usePromotion[1]]}
                alt={usePromotion[1]}
                className="w-12 h-12 mx-auto bg-gradient-to-b from-sky-600 to-sky-400 p-1"
              />
              <p className="font-thin">x{promotionTotals.advanced.toLocaleString("en-US")}</p>
            </div>
          ) : null}
          {promotionTotals.buster !== 0 ? (
            <div className="text-center">
              <img
                src={promotionImages[usePromotion[2]]}
                alt={usePromotion[2]}
                className="w-12 h-12 mx-auto bg-gradient-to-b from-purple-600 to-purple-400 p-1"
              />
              <p className="font-thin">x{promotionTotals.buster.toLocaleString("en-US")}</p>
            </div>
          ) : null}
          {totalCore.farmeable !== 0 ? (
            <div className="text-center">
              <img
                src={materialImages[useMaterials[1]]}
                alt={useMaterials[1]}
                className="w-12 h-12 mx-auto"
              />
              <p className="font-thin">x{totalCore.farmeable.toLocaleString("en-US")}</p>
            </div>
          ) : null}
          {totalCore.weekly !== 0 ? (
            <div className="text-center">
              <img
                src={materialImages[useMaterials[0]]}
                alt={useMaterials[0]}
                className="w-12 h-12 mx-auto"
              />
              <p className="font-thin">x{totalCore.weekly.toLocaleString("en-US")}</p>
            </div>
          ) : null}
          {totalSkillMaterials.basic !== 0 ? (
            <div className="text-center">
              <img
                src={skillImages[useSkills[0]]}
                alt={useSkills[0]}
                className="w-12 h-12 mx-auto bg-gradient-to-b from-emerald-600 to-emerald-400 p-1"
              />
              <p className="font-thin">x{totalSkillMaterials.basic.toLocaleString("en-US")}</p>
            </div>
          ) : null}
          {totalSkillMaterials.advanced !== 0 ? (
            <div className="text-center">
              <img
                src={skillImages[useSkills[1]]}
                alt={useSkills[1]}
                className="w-12 h-12 mx-auto bg-gradient-to-b from-sky-600 to-sky-400 p-1"
              />
              <p className="font-thin">x{totalSkillMaterials.advanced.toLocaleString("en-US")}</p>
            </div>
          ) : null}
          {totalSkillMaterials.specialized !== 0 ? (
            <div className="text-center">
              <img
                src={skillImages[useSkills[2]]}
                alt={useSkills[2]}
                className="w-12 h-12 mx-auto bg-gradient-to-b from-purple-600 to-purple-400 p-1"
              />
              <p className="font-thin">x{totalSkillMaterials.specialized.toLocaleString("en-US")}</p>
            </div>
          ) : null}
          {totalHamster !== 0 ? (
            <div className="text-center">
              <img
                src={hamster}
                alt={"hamster"}
                className="w-12 h-12 mx-auto bg-gradient-to-b from-amber-600 to-amber-400 p-1"
              />
              <p className="font-thin">x{totalHamster.toLocaleString("en-US")}</p>
            </div>
          ) : null}
        </div>
      )}
    </>
  );
};

export default FarmMaterials;
