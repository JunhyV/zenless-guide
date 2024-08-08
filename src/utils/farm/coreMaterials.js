import grip from "../../assets/images/zzz-materials/core-materials/Item_Ferocious_Grip.webp";
import drive from "../../assets/images/zzz-materials/core-materials/Item_Living_Drive.webp";
import shoes from "../../assets/images/zzz-materials/core-materials/Item_Finale_Dance_Shoes.webp";
import obitaury from "../../assets/images/zzz-materials/core-materials/Item_Higher_Dimensional_Data_Murderous_Obituary.webp";
import awe from "../../assets/images/zzz-materials/core-materials/Item_Higher_Dimensional_Data_Crimson_Awe.webp";
import pursuit from "../../assets/images/zzz-materials/core-materials/Item_Higher_Dimensional_Data_Ethereal_Pursuit.webp";
import malice from "../../assets/images/zzz-materials/core-materials/Item_Higher_Dimensional_Data_Steel_Malice.webp";
import advance from "../../assets/images/zzz-materials/core-materials/Item_Higher_Dimensional_Data_Destructive_Advance.webp";

export const coreMaterials = [
  {
    lvl: "A",
    farm: [],
    dennies: 5000,
  },
  {
    lvl: "B",
    farm: [
      {
        type: "",
        img: {
          grip,
          drive,
          shoes,
          obitaury,
          awe,
          pursuit,
          malice,
          advance,
        },
        number: 2,
      },
    ],
    dennies: 12000,
  },
  {
    lvl: "C",
    farm: [
      {
        type: "",
        img: {
          grip,
          drive,
          shoes,
          obitaury,
          awe,
          pursuit,
          malice,
          advance,
        },
        number: 4,
      },
    ],
    dennies: 28000,
  },
  {
    lvl: "D",
    farm: [
      {
        type: "",
        img: {
          grip,
          drive,
          shoes,
          obitaury,
          awe,
          pursuit,
          malice,
          advance,
        },
        number: 9,
      },
      {
        type: "",
        img: {
          grip,
          drive,
          shoes,
          obitaury,
          awe,
          pursuit,
          malice,
          advance,
        },
        number: 2,
      },
    ],
    dennies: 60000,
  },
  {
    lvl: "E",
    farm: [
      {
        type: "",
        img: {
          grip,
          drive,
          shoes,
          obitaury,
          awe,
          pursuit,
          malice,
          advance,
        },
        number: 15,
      },
      {
        type: "",
        img: {
          grip,
          drive,
          shoes,
          obitaury,
          awe,
          pursuit,
          malice,
          advance,
        },
        number: 3,
      },
    ],
    dennies: 100000,
  },
  {
    lvl: "F",
    farm: [
      {
        type: "",
        img: {
          grip,
          drive,
          shoes,
          obitaury,
          awe,
          pursuit,
          malice,
          advance,
        },
        number: 30,
      },
      {
        type: "",
        img: {
          grip,
          drive,
          shoes,
          obitaury,
          awe,
          pursuit,
          malice,
          advance,
        },
        number: 4,
      },
    ],
    dennies: 200000,
  },
];

export const farmMaterials = {
  useGrip: ['Anby', 'Billy', 'Ellen', 'Nicole', 'Lucy', 'Nekomata'],
  useDrive: ['Ben', 'Grace', 'Koleda', 'Zhu Yuan', 'Anton'],
  useShoes: ['Rina', 'Piper', 'Corin', 'Soldier 11', 'Lycaon', 'Soukaku'],
  useObitaury: ['Anby', 'Ellen', 'Nicole', 'Soukaku'],
  useAwe: ['Piper', 'Corin', 'Nekomata'],
  usePursuit: ['Zhu Yuan', 'Billy', 'Lycaon'],
  useMalice: ['Ben', 'Koleda', 'Lucy'],
  useAdvance: ['Rina', 'Grace', 'Soldier 11', 'Anton'],
};