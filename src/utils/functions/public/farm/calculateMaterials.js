import { switchLevel } from "./switchLevel";
import { switchCore } from "./switchCore";
import { switchSkills } from "./switchSkills";

export function calculateSigleMaterials(data) {
  const { lvl, core, basic, dodge, assist, special, chain } = data;
  const skills = [basic, dodge, assist, special, chain];

  let lvlMaterial = switchLevel(lvl) || [];
  let coreMaterial = switchCore(core) || [];
  let skillMaterial = switchSkills(skills) || []; 
  
  // Start Counters
  let totalExp = 0;
  const promotionTotals = {
    basic: 0,
    advanced: 0,
    buster: 0,
  };
  let totalDennies = 0;
  const totalCore = {
    weekly: 0,
    farmeable: 0,
  };
  const totalSkillMaterials = {
    basic: 0,
    advanced: 0,
    specialized: 0,
  };

  // Count promotion materials
  lvlMaterial.forEach((material) => {
    totalExp += material.exp || 0;

    if (material.promotion && material.promotion.type) {
      const { type, number = 0 } = material.promotion;
      promotionTotals[type] += number;
    }

    if (material.promotion && material.promotion.dennies) {
      totalDennies += material.promotion.dennies;
    }
  });

  // Count core materials
  coreMaterial.forEach((material) => {
    if (material.dennies) {
      totalDennies += material.dennies;
    }

    if (material.weekly) {
      totalCore.weekly += material.weekly.number || 0;
    }

    if (material.farmeable) {
      totalCore.farmeable += material.farmeable.number || 0;
    }
  });

  // Count skill materials
  skillMaterial.forEach((material) => {
    totalDennies += material.dennies || 0;
    totalSkillMaterials.basic += material.materials.basic || 0;
    totalSkillMaterials.advanced += material.materials.advanced || 0;
    totalSkillMaterials.specialized += material.materials.specialized || 0;
  });

  // Set hamster
  let totalHamster = 0;
  skills.forEach(skill => skill === 12 ? totalHamster++ : null);

  return {
    totalExp,
    promotionTotals,
    totalDennies,
    totalCore,
    totalSkillMaterials,
    totalHamster,
  };
}
