// Rol Materials Imports
import stunPromotionBasic from "../../assets/images/zzz-materials/promotion-materials/AvatarRankStun01.webp";
import stunPromotionAdvanced from "../../assets/images/zzz-materials/promotion-materials/AvatarRankStun02.webp";
import stunPromotionBuster from "../../assets/images/zzz-materials/promotion-materials/AvatarRankStun03.webp";
import atkPromotionBasic from "../../assets/images/zzz-materials/promotion-materials/AvatarRankDamage01.webp";
import atkPromotionAdvanced from "../../assets/images/zzz-materials/promotion-materials/AvatarRankDamage02.webp";
import atkPromotionBuster from "../../assets/images/zzz-materials/promotion-materials/AvatarRankDamage03.webp";
import suppPromotionBasic from "../../assets/images/zzz-materials/promotion-materials/AvatarRankSupport01.webp";
import suppPromotionAdvanced from "../../assets/images/zzz-materials/promotion-materials/AvatarRankSupport02.webp";
import suppPromotionBuster from "../../assets/images/zzz-materials/promotion-materials/AvatarRankSupport03.webp";
import anomalyPromotionBasic from "../../assets/images/zzz-materials/promotion-materials/AvatarRankBuff01.webp";
import anomalyPromotionAdvanced from "../../assets/images/zzz-materials/promotion-materials/AvatarRankBuff02.webp";
import anomalyPromotionBuster from "../../assets/images/zzz-materials/promotion-materials/AvatarRankBuff03.webp";
import defensePromotionBasic from "../../assets/images/zzz-materials/promotion-materials/AvatarRankShield01.webp";
import defensePromotionAdvanced from "../../assets/images/zzz-materials/promotion-materials/AvatarRankShield02.webp";
import defensePromotionBuster from "../../assets/images/zzz-materials/promotion-materials/AvatarRankShield03.webp";

// Experience import
import exp from "../../assets/images/zzz-materials/lvl-materials/RoleExp03.webp";

export const levelMaterials = [
  {
    lvl: "Promotion lvl 10",
    farm: [
      {
        name: "Certification Seal",
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
    ],
    dennies: 24000,
  },
  {
    lvl: "Promotion lvl 20",
    farm: [
      {
        name: "Certification Seal",
        type: "advanced",
        img: {
          attack: atkPromotionAdvanced,
          stun: stunPromotionAdvanced,
          anomaly: anomalyPromotionAdvanced,
          support: suppPromotionAdvanced,
          defense: defensePromotionAdvanced,
        },
        number: 14,
      },
    ],
    dennies: 56000,
  },
  {
    lvl: "Promotion lvl 30",
    farm: [
      {
        name: "Certification Seal",
        type: "advanced",
        img: {
          attack: atkPromotionAdvanced,
          stun: stunPromotionAdvanced,
          anomaly: anomalyPromotionAdvanced,
          support: suppPromotionAdvanced,
          defense: defensePromotionAdvanced,
        },
        number: 20,
      },
    ],
    dennies: 120000,
  },
  {
    lvl: "Promotion lvl 40",
    farm: [
      {
        name: "Certification Seal",
        type: "buster",
        img: {
          attack: atkPromotionBuster,
          stun: stunPromotionBuster,
          anomaly: anomalyPromotionBuster,
          support: suppPromotionBuster,
          defense: defensePromotionBuster,
        },
        number: 10,
      },
    ],
    dennies: 200000,
  },
  {
    lvl: "Promotion lvl 50",
    farm: [
      {
        name: "Certification Seal",
        type: "buster",
        img: {
          attack: atkPromotionBuster,
          stun: stunPromotionBuster,
          anomaly: anomalyPromotionBuster,
          support: suppPromotionBuster,
          defense: defensePromotionBuster,
        },
        number: 20,
      },
    ],
    dennies: 400000,
  },
];

export const lvlUpMaterials = [
  {
    lvl: "1 - 10",
    farm: [
      {
        img: {
          exp: exp,
        },
        number: 2,
      },
    ],
  },
  {
    lvl: "10 - 20",
    farm: [
      {
        img: {
          exp: exp,
        },
        number: 8,
      },
    ],
  },
  {
    lvl: "20 - 30",
    farm: [
      {
        img: {
          exp: exp,
        },
        number: 20,
      },
    ],
  },
  {
    lvl: "30 - 40",
    farm: [
      {
        img: {
          exp: exp,
        },
        number: 45,
      },
    ],
  },
  {
    lvl: "40 - 50",
    farm: [
      {
        img: {
          exp: exp,
        },
        number: 75,
      },
    ],
  },
  {
    lvl: "50 - 60",
    farm: [
      {
        img: {
          exp: exp,
        },
        number: 150,
      },
    ],
  },
];
