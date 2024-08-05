export function handleSlot(e, data, set, type) {
    set({
        ...data,
        build: {
          ...data.build,
          main_stats: { ...data.build.main_stats, [type]: e.target.value },
        },
      });
}
export function handlePior(e, data, set, type) {
    set({
        ...data,
        build: {
          ...data.build,
          skill_priority: { ...data.build.skill_priority, [type]: e.target.value },
        },
      });
}
export function handleCore(e, data, set) {
    set({
        ...data,
        build: {
          ...data.build,
          core: e.target.value ,
        },
      });
}

export function handleSecondaryStats(e, data, set) {
  set({
    ...data,
    build: { ...data.build, sub_stats: e.target.value },
  });
}
