// Rol Materials Imports
import stunPromotionBasic from "../../../../assets/images/zzz-materials/promotion-materials/AvatarRankStun01.webp";
import stunPromotionAdvanced from "../../../../assets/images/zzz-materials/promotion-materials/AvatarRankStun02.webp";
import stunPromotionBuster from "../../../../assets/images/zzz-materials/promotion-materials/AvatarRankStun03.webp";
import atkPromotionBasic from "../../../../assets/images/zzz-materials/promotion-materials/AvatarRankDamage01.webp";
import atkPromotionAdvanced from "../../../../assets/images/zzz-materials/promotion-materials/AvatarRankDamage02.webp";
import atkPromotionBuster from "../../../../assets/images/zzz-materials/promotion-materials/AvatarRankDamage03.webp";
import suppPromotionBasic from "../../../../assets/images/zzz-materials/promotion-materials/AvatarRankSupport01.webp";
import suppPromotionAdvanced from "../../../../assets/images/zzz-materials/promotion-materials/AvatarRankSupport02.webp";
import suppPromotionBuster from "../../../../assets/images/zzz-materials/promotion-materials/AvatarRankSupport03.webp";
import anomalyPromotionBasic from "../../../../assets/images/zzz-materials/promotion-materials/AvatarRankBuff01.webp";
import anomalyPromotionAdvanced from "../../../../assets/images/zzz-materials/promotion-materials/AvatarRankBuff02.webp";
import anomalyPromotionBuster from "../../../../assets/images/zzz-materials/promotion-materials/AvatarRankBuff03.webp";
import defensePromotionBasic from "../../../../assets/images/zzz-materials/promotion-materials/AvatarRankShield01.webp";
import defensePromotionAdvanced from "../../../../assets/images/zzz-materials/promotion-materials/AvatarRankShield02.webp";
import defensePromotionBuster from "../../../../assets/images/zzz-materials/promotion-materials/AvatarRankShield03.webp";

export function switchLevel(lvl) {
  let lvlMaterial = [];

  switch (lvl) {
    case "10":
      lvlMaterial = [
        {
          exp: 2,
          promotion: {},
        },
      ];
      break;
    case "20":
      lvlMaterial = [
        {
          exp: 2,
          promotion: {},
        },
        {
          exp: 8,
          promotion: {
            type: "basic",
            img: {
              attack: atkPromotionBasic,
              stun: stunPromotionBasic,
              anomaly: anomalyPromotionBasic,
              support: suppPromotionBasic,
              defense: defensePromotionBasic,
            },
            number: 4,
          },
        },
      ];
      break;
    case "30":
      lvlMaterial = [
        {
          exp: 2,
          promotion: {},
        },
        {
          exp: 8,
          promotion: {
            type: "basic",
            img: {
              attack: atkPromotionBasic,
              stun: stunPromotionBasic,
              anomaly: anomalyPromotionBasic,
              support: suppPromotionBasic,
              defense: defensePromotionBasic,
            },
            number: 4,
          },
        },
        {
          exp: 20,
          promotion: {
            type: "advanced",
            img: {
              attack: atkPromotionAdvanced,
              stun: stunPromotionAdvanced,
              anomaly: anomalyPromotionAdvanced,
              support: suppPromotionAdvanced,
              defense: defensePromotionAdvanced,
            },
            number: 14,
            dennies: 56000,
          },
        },
      ];
      break;
    case "40":
      lvlMaterial = [
        {
          exp: 2,
          promotion: {},
        },
        {
          exp: 8,
          promotion: {
            type: "basic",
            img: {
              attack: atkPromotionBasic,
              stun: stunPromotionBasic,
              anomaly: anomalyPromotionBasic,
              support: suppPromotionBasic,
              defense: defensePromotionBasic,
            },
            number: 4,
          },
        },
        {
          exp: 20,
          promotion: {
            type: "advanced",
            img: {
              attack: atkPromotionAdvanced,
              stun: stunPromotionAdvanced,
              anomaly: anomalyPromotionAdvanced,
              support: suppPromotionAdvanced,
              defense: defensePromotionAdvanced,
            },
            number: 14,
            dennies: 56000,
          },
        },
        {
          exp: 45,
          promotion: {
            type: "advanced",
            img: {
              attack: atkPromotionAdvanced,
              stun: stunPromotionAdvanced,
              anomaly: anomalyPromotionAdvanced,
              support: suppPromotionAdvanced,
              defense: defensePromotionAdvanced,
            },
            number: 20,
            dennies: 120000,
          },
        },
      ];
      break;
    case "50":
      lvlMaterial = [
        {
          exp: 2,
          promotion: {},
        },
        {
          exp: 8,
          promotion: {
            type: "basic",
            img: {
              attack: atkPromotionBasic,
              stun: stunPromotionBasic,
              anomaly: anomalyPromotionBasic,
              support: suppPromotionBasic,
              defense: defensePromotionBasic,
            },
            number: 4,
          },
        },
        {
          exp: 20,
          promotion: {
            type: "advanced",
            img: {
              attack: atkPromotionAdvanced,
              stun: stunPromotionAdvanced,
              anomaly: anomalyPromotionAdvanced,
              support: suppPromotionAdvanced,
              defense: defensePromotionAdvanced,
            },
            number: 14,
            dennies: 56000,
          },
        },
        {
          exp: 45,
          promotion: {
            type: "advanced",
            img: {
              attack: atkPromotionAdvanced,
              stun: stunPromotionAdvanced,
              anomaly: anomalyPromotionAdvanced,
              support: suppPromotionAdvanced,
              defense: defensePromotionAdvanced,
            },
            number: 20,
            dennies: 120000,
          },
        },
        {
          exp: 75,
          promotion: {
            type: "buster",
            img: {
              attack: atkPromotionBuster,
              stun: stunPromotionBuster,
              anomaly: anomalyPromotionBuster,
              support: suppPromotionBuster,
              defense: defensePromotionBuster,
            },
            number: 10,
            dennies: 200000,
          },
        },
      ];
      break;
    case "60":
      lvlMaterial = [
        {
          exp: 2,
          promotion: {},
        },
        {
          exp: 8,
          promotion: {
            type: "basic",
            img: {
              attack: atkPromotionBasic,
              stun: stunPromotionBasic,
              anomaly: anomalyPromotionBasic,
              support: suppPromotionBasic,
              defense: defensePromotionBasic,
            },
            number: 4,
          },
        },
        {
          exp: 20,
          promotion: {
            type: "advanced",
            img: {
              attack: atkPromotionAdvanced,
              stun: stunPromotionAdvanced,
              anomaly: anomalyPromotionAdvanced,
              support: suppPromotionAdvanced,
              defense: defensePromotionAdvanced,
            },
            number: 14,
            dennies: 56000,
          },
        },
        {
          exp: 45,
          promotion: {
            type: "advanced",
            img: {
              attack: atkPromotionAdvanced,
              stun: stunPromotionAdvanced,
              anomaly: anomalyPromotionAdvanced,
              support: suppPromotionAdvanced,
              defense: defensePromotionAdvanced,
            },
            number: 20,
            dennies: 120000,
          },
        },
        {
          exp: 75,
          promotion: {
            type: "buster",
            img: {
              attack: atkPromotionBuster,
              stun: stunPromotionBuster,
              anomaly: anomalyPromotionBuster,
              support: suppPromotionBuster,
              defense: defensePromotionBuster,
            },
            number: 10,
            dennies: 200000,
          },
        },
        {
          exp: 150,
          promotion: {
            type: "buster",
            img: {
              attack: atkPromotionBuster,
              stun: stunPromotionBuster,
              anomaly: anomalyPromotionBuster,
              support: suppPromotionBuster,
              defense: defensePromotionBuster,
            },
            number: 20,
            dennies: 400000,
          },
        },
      ];
      break;
    default:
      break;
  }

  return lvlMaterial;
}
