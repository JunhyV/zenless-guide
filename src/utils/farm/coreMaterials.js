import grip from "../../assets/images/zzz-materials/core-materials/Item_Ferocious_Grip.webp";
import drive from "../../assets/images/zzz-materials/core-materials/Item_Living_Drive.webp";
import shoes from "../../assets/images/zzz-materials/core-materials/Item_Finale_Dance_Shoes.webp";
import obitaury from "../../assets/images/zzz-materials/core-materials/Item_Higher_Dimensional_Data_Murderous_Obituary.webp";
import awe from "../../assets/images/zzz-materials/core-materials/Item_Higher_Dimensional_Data_Crimson_Awe.webp";
import pursuit from "../../assets/images/zzz-materials/core-materials/Item_Higher_Dimensional_Data_Ethereal_Pursuit.webp";
import malice from "../../assets/images/zzz-materials/core-materials/Item_Higher_Dimensional_Data_Steel_Malice.webp";
import advance from "../../assets/images/zzz-materials/core-materials/Item_Higher_Dimensional_Data_Destructive_Advance.webp";

export const farmMaterials = {
  useGrip: ['Anby', 'Billy', 'Ellen', 'Nicole', 'Lucy', 'Nekomata', 'Jane'],
  useDrive: ['Ben', 'Grace', 'Koleda', 'Zhu Yuan', 'Anton', 'Qingyi', 'Seth'],
  useShoes: ['Rina', 'Piper', 'Corin', 'Soldier 11', 'Lycaon', 'Soukaku'],
  useObitaury: ['Anby', 'Ellen', 'Nicole', 'Soukaku'],
  useAwe: ['Piper', 'Corin', 'Nekomata'],
  usePursuit: ['Zhu Yuan', 'Billy', 'Lycaon', 'Qingyi'],
  useMalice: ['Ben', 'Koleda', 'Lucy'],
  useAdvance: ['Rina', 'Grace', 'Soldier 11', 'Anton'],
};

export const materialImages = {
  useGrip: grip,
  useDrive: drive,
  useShoes: shoes,
  useObitaury: obitaury,
  useAwe: awe,
  usePursuit: pursuit,
  useMalice: malice,
  useAdvance: advance,
};

export const getAgentMaterials = (agentName) => {
  const materialsUsed = [];

  for (const [materialType, agents] of Object.entries(farmMaterials)) {
    if (agents.includes(agentName)) {
      materialsUsed.push(materialType);
    }
  }

  return materialsUsed;
};