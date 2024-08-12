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

export const promotionImages = {
  stunPromotionBasic,
  stunPromotionAdvanced,
  stunPromotionBuster,
  suppPromotionBasic,
  suppPromotionAdvanced,
  suppPromotionBuster,
  atkPromotionBasic,
  atkPromotionAdvanced,
  atkPromotionBuster,
  anomalyPromotionBasic,
  anomalyPromotionAdvanced,
  anomalyPromotionBuster,
  defensePromotionBasic,
  defensePromotionAdvanced,
  defensePromotionBuster,
}

export const getAgentPromotion = (rol) => {
  let promMaterials;
  switch (rol) {
    case "stun":
      promMaterials = [
        'stunPromotionBasic',
        'stunPromotionAdvanced',
        'stunPromotionBuster',
      ];
      break;
    case "support":
      promMaterials = [
        'suppPromotionBasic',
        'suppPromotionAdvanced',
        'suppPromotionBuster',
      ];
      break;
    case "attack":
      promMaterials = [
        'atkPromotionBasic',
        'atkPromotionAdvanced',
        'atkPromotionBuster',
      ];
      break;
    case "anomaly":
      promMaterials = [
        'anomalyPromotionBasic',
        'anomalyPromotionAdvanced',
        'anomalyPromotionBuster',
      ];
      break;
    case "defense":
      promMaterials = [
        'defensePromotionBasic',
        'defensePromotionAdvanced',
        'defensePromotionBuster',
      ];
      break;
    default:
      break;
  }

  return promMaterials;
};