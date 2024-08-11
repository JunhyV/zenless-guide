// Core Materials
import grip from "../../../../assets/images/zzz-materials/core-materials/Item_Ferocious_Grip.webp";
import drive from "../../../../assets/images/zzz-materials/core-materials/Item_Living_Drive.webp";
import shoes from "../../../../assets/images/zzz-materials/core-materials/Item_Finale_Dance_Shoes.webp";
import obitaury from "../../../../assets/images/zzz-materials/core-materials/Item_Higher_Dimensional_Data_Murderous_Obituary.webp";
import awe from "../../../../assets/images/zzz-materials/core-materials/Item_Higher_Dimensional_Data_Crimson_Awe.webp";
import pursuit from "../../../../assets/images/zzz-materials/core-materials/Item_Higher_Dimensional_Data_Ethereal_Pursuit.webp";
import malice from "../../../../assets/images/zzz-materials/core-materials/Item_Higher_Dimensional_Data_Steel_Malice.webp";
import advance from "../../../../assets/images/zzz-materials/core-materials/Item_Higher_Dimensional_Data_Destructive_Advance.webp";

export function switchCore(core) {
  let coreMaterial = [];
  switch (core) {
    case "A":
      coreMaterial = [
        {
          weekly: {},
          farmeable: {},
          dennies: 5000,
        },
      ];
      break;
    case "B":
      coreMaterial = [
        {
          weekly: {},
          farmeable: {},
          dennies: 5000,
        },
        {
          weekly: {},
          farmeable: {
            number: 2,
            img: {
              obitaury,
              awe,
              pursuit,
              malice,
              advance,
            },
          },
          dennies: 12000,
        },
      ];
      break;
    case "C":
      coreMaterial = [
        {
          weekly: {},
          farmeable: {},
          dennies: 5000,
        },
        {
          weekly: {},
          farmeable: {
            number: 2,
            img: {
              obitaury,
              awe,
              pursuit,
              malice,
              advance,
            },
          },
          dennies: 12000,
        },
        {
          weekly: {},
          farmeable: {
            number: 4,
            img: {
              obitaury,
              awe,
              pursuit,
              malice,
              advance,
            },
          },
          dennies: 28000,
        },
      ];
      break;
    case "D":
      coreMaterial = [
        {
          weekly: {},
          farmeable: {},
          dennies: 5000,
        },
        {
          weekly: {},
          farmeable: {
            number: 2,
            img: {
              obitaury,
              awe,
              pursuit,
              malice,
              advance,
            },
          },
          dennies: 12000,
        },
        {
          weekly: {},
          farmeable: {
            number: 4,
            img: {
              obitaury,
              awe,
              pursuit,
              malice,
              advance,
            },
          },
          dennies: 28000,
        },
        {
          weekly: {
            number: 2,
            img: {
              grip,
              drive,
              shoes,
            },
          },
          farmeable: {
            number: 9,
            img: {
              obitaury,
              awe,
              pursuit,
              malice,
              advance,
            },
          },
          dennies: 60000,
        },
      ];
      break;
    case "E":
      coreMaterial = [
        {
          weekly: {},
          farmeable: {},
          dennies: 5000,
        },
        {
          weekly: {},
          farmeable: {
            number: 2,
            img: {
              obitaury,
              awe,
              pursuit,
              malice,
              advance,
            },
          },
          dennies: 12000,
        },
        {
          weekly: {},
          farmeable: {
            number: 4,
            img: {
              obitaury,
              awe,
              pursuit,
              malice,
              advance,
            },
          },
          dennies: 28000,
        },
        {
          weekly: {
            number: 2,
            img: {
              grip,
              drive,
              shoes,
            },
          },
          farmeable: {
            number: 9,
            img: {
              obitaury,
              awe,
              pursuit,
              malice,
              advance,
            },
          },
          dennies: 60000,
        },
        {
          weekly: {
            number: 3,
            img: {
              grip,
              drive,
              shoes,
            },
          },
          farmeable: {
            number: 15,
            img: {
              obitaury,
              awe,
              pursuit,
              malice,
              advance,
            },
          },
          dennies: 100000,
        },
      ];
      break;
    case "F":
      coreMaterial = [
        {
          weekly: {},
          farmeable: {},
          dennies: 5000,
        },
        {
          weekly: {},
          farmeable: {
            number: 2,
            img: {
              obitaury,
              awe,
              pursuit,
              malice,
              advance,
            },
          },
          dennies: 12000,
        },
        {
          weekly: {},
          farmeable: {
            number: 4,
            img: {
              obitaury,
              awe,
              pursuit,
              malice,
              advance,
            },
          },
          dennies: 28000,
        },
        {
          weekly: {
            number: 2,
            img: {
              grip,
              drive,
              shoes,
            },
          },
          farmeable: {
            number: 9,
            img: {
              obitaury,
              awe,
              pursuit,
              malice,
              advance,
            },
          },
          dennies: 60000,
        },
        {
          weekly: {
            number: 3,
            img: {
              grip,
              drive,
              shoes,
            },
          },
          farmeable: {
            number: 15,
            img: {
              obitaury,
              awe,
              pursuit,
              malice,
              advance,
            },
          },
          dennies: 100000,
        },
        {
          weekly: {
            number: 4,
            img: {
              grip,
              drive,
              shoes,
            },
          },
          farmeable: {
            number: 30,
            img: {
              obitaury,
              awe,
              pursuit,
              malice,
              advance,
            },
          },
          dennies: 200000,
        },
      ];
      break;

    default:
      break;
  }

  return coreMaterial;
}
