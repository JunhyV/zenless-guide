export function handleSlot4(e, data, set) {
  set({
    ...data,
    build: {
      ...data.build,
      main_stats: { ...data.build.main_stats, fourth: e.target.value },
    },
  });
}
export function handleSlot5(e, data, set) {
    set({
        ...data,
        build: {
          ...data.build,
          main_stats: { ...data.build.main_stats, fifth: e.target.value },
        },
      });
}

export function handleSlot6(e, data, set) {
    set({
        ...data,
        build: {
          ...data.build,
          main_stats: { ...data.build.main_stats, sixth: e.target.value },
        },
      });
}

export function handleSecondaryStats(e, data, set) {
  set({
    ...data,
    build: { ...data.build, sub_stats: e.target.value },
  });
}
