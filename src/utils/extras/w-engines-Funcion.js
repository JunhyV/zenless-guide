export function extractStats(statsString) {
  try {
    const statsObject = JSON.parse(statsString);
    const baseAttack = statsObject.base_attack;
    const secondaryStat = statsObject.secondary_stat;
    return { baseAttack, secondaryStat };
  } catch (error) {
    console.error("Error parsing stats string:", error);
    return { baseAttack: null, secondaryStat: null };
  }
}
