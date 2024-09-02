import grip from "../../assets/images/zzz-materials/core-materials/Item_Ferocious_Grip.webp";
import drive from "../../assets/images/zzz-materials/core-materials/Item_Living_Drive.webp";
import shoes from "../../assets/images/zzz-materials/core-materials/Item_Finale_Dance_Shoes.webp";
import obitaury from "../../assets/images/zzz-materials/core-materials/Item_Higher_Dimensional_Data_Murderous_Obituary.webp";
import awe from "../../assets/images/zzz-materials/core-materials/Item_Higher_Dimensional_Data_Crimson_Awe.webp";
import pursuit from "../../assets/images/zzz-materials/core-materials/Item_Higher_Dimensional_Data_Ethereal_Pursuit.webp";
import malice from "../../assets/images/zzz-materials/core-materials/Item_Higher_Dimensional_Data_Steel_Malice.webp";
import advance from "../../assets/images/zzz-materials/core-materials/Item_Higher_Dimensional_Data_Destructive_Advance.webp";
import falling from "../../assets/images/zzz-materials/core-materials/falling-fist.png";
import moto from "../../assets/images/zzz-materials/core-materials/ExBigBoss004Big.png";
import jane from "../../assets/images/zzz-materials/core-materials/ExSmallBoss007Big.png";

export const farmMaterials = {
  useGrip: ['Anby', 'Billy', 'Ellen', 'Nicole', 'Lucy', 'Nekomata', 'Jane'],
  useDrive: ['Ben', 'Grace', 'Koleda', 'Zhu Yuan', 'Anton', 'Qingyi', 'Seth'],
  useShoes: ['Rina', 'Piper', 'Corin', 'Soldier 11', 'Lycaon', 'Soukaku'],
  useMoto: ['Burnice', 'Caesar'],
  useObitaury: ['Anby', 'Ellen', 'Nicole', 'Soukaku'],
  useAwe: ['Piper', 'Corin', 'Nekomata'],
  usePursuit: ['Zhu Yuan', 'Billy', 'Lycaon', 'Qingyi'],
  useMalice: ['Ben', 'Koleda', 'Lucy'],
  useAdvance: ['Rina', 'Grace', 'Soldier 11', 'Anton'],
  useFalling: ['Jane', 'Seth'],
  useJane: ['Burnice', 'Caesar'],
};

export const materialImages = {
  useGrip: grip,
  useDrive: drive,
  useShoes: shoes,
  useMoto: moto,
  useObitaury: obitaury,
  useAwe: awe,
  usePursuit: pursuit,
  useMalice: malice,
  useAdvance: advance,
  useFalling: falling,
  useJane: jane,
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