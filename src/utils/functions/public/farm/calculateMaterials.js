import { switchLevel } from "./switchLevel";
import { switchCore } from "./switchCore";

export function calculateSigleMaterials(data) {
  const { lvl, core } = data;

  let lvlMaterial = switchLevel(lvl);
  let coreMaterial = switchCore(core);
  let skillMaterial = [];

  // Inicializar los contadores
  let totalExp = 0;
  const promotionTotals = {
    basic: { totalNumber: 0 },
    advanced: { totalNumber: 0 },
    buster: { totalNumber: 0 },
  };
  let totalDennies = 0;
  const totalCore = {
    weekly: 0,
    farmeable: 0,
  };

  // Iterar sobre los materiales de nivel para calcular los totales
  lvlMaterial.forEach((material) => {
    // Sumar experiencia
    totalExp += material.exp;

    // Sumar promociones según el tipo
    if (material.promotion && material.promotion.type) {
      const { type, number = 0 } = material.promotion;
      promotionTotals[type].totalNumber += number;
    }

    // Sumar dennies
    if (material.promotion.dennies) {
      totalDennies += material.promotion.dennies;
    }
  });

  // Iterar sobre los materiales del núcleo para calcular los totales
  coreMaterial.forEach((material) => {
    // Sumar dennies
    if (material.dennies) {
      totalDennies += material.dennies;
    }

    // Sumar materiales weekly
    if (material.weekly) {
      totalCore.weekly += material.weekly.number || 0;
    }

    // Sumar materiales farmeables
    if (material.farmeable) {
      totalCore.farmeable += material.farmeable.number || 0;
    }
  });
  return {
    totalExp,
    promotionTotals,
    totalDennies,
    totalCore
  };
}
