import { skillsMaterials } from "../../../farm/skillMaterials";

export function switchSkills(skills) {
  return skills.map((skill) => {
    let accumulatedDennies = 0;
    let accumulatedMaterials = {
      basic: 0,
      advanced: 0,
      specialized: 0,
    };

    for (let i = 1; i <= skill; i++) {
      const skillMaterial = skillsMaterials.find((sm) => sm.lvl === i.toString());

      if (skillMaterial) {
        accumulatedDennies += skillMaterial.dennies;

        accumulatedMaterials.basic += skillMaterial.farm.some((f) => f.type === "basic")
          ? skillMaterial.farm.find((f) => f.type === "basic").number
          : 0;

        accumulatedMaterials.advanced += skillMaterial.farm.some((f) => f.type === "advanced")
          ? skillMaterial.farm.find((f) => f.type === "advanced").number
          : 0;

        accumulatedMaterials.specialized += skillMaterial.farm.some((f) => f.type === "specialized")
          ? skillMaterial.farm.find((f) => f.type === "specialized").number
          : 0;
      }
    }

    return {
      dennies: accumulatedDennies,
      materials: accumulatedMaterials,
    };
  });
}
