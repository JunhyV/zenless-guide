export function addSynergy(data, set) {
  const highest = data.build.synergy.reduce(
    (a, current) => Math.max(a, current.id),
    0
  );

  const newObject = {
    id: highest + 1,
    name: "",
    description: "",
    img: "",
  };

  set({
    ...data,
    build: {
      ...data.build,
      synergy: [...data.build.synergy, newObject],
    },
  });
}
export function deleteSynergy(id, data, set) {
  const filterSet = data.build.synergy.filter(
    (synergyList) => synergyList.id !== id
  );

  set({
    ...data,
    build: {
      ...data.build,
      synergy: filterSet,
    },
  });
}
export function handleSaveSynergy(e, data, set, id, agents) {
  // Get img
  const agentData = agents.find((agent) => agent.nickname === e.target.value);

  set({
    ...data,
    build: {
      ...data.build,
      synergy: data.build.synergy.map((synergyList) =>
        synergyList.id === id
          ? { ...synergyList, name: agentData.nickname, img: agentData.full_img }
          : synergyList
      ),
    },
  });
}
export function handleDescription(e, data, set, id) {
  set({
    ...data,
    build: {
      ...data.build,
      synergy: data.build.synergy.map((synergyItem) =>
        synergyItem.id === id
          ? { ...synergyItem, description: e.target.value }
          : synergyItem
      ),
    },
  });
}
