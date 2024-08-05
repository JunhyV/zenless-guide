export const handleSaveEngineTitle = (e, data, set, id) => {
  set({
    ...data,
    build: {
      ...data.build,
      engines: data.build.engines.map((engine) =>
        engine.id === id ? { ...engine, title: e.target.value } : engine
      ),
    },
  });
};

export const handleSaveEngine = (e, data, set, id, reference, engines) => {
  // Get img
  const engineData = engines.find((engine) => engine.name === e.target.value);

  set({
    ...data,
    build: {
      ...data.build,
      engines: data.build.engines.map((engine) =>
        engine.id === reference
          ? {
              ...engine,
              engines: engine.engines.map((weapon) =>
                weapon.id === id
                  ? { ...weapon, name: engineData.name, img: engineData.img }
                  : weapon
              ),
            }
          : engine
      ),
    },
  });
};

export const deleteEngine = (id, data, set) => {
  const filterEngine = data.build.engines.map((engine) => ({
    ...engine,
    engines: engine.engines.filter((weapon) => weapon.id !== id),
  }));

  set({
    ...data,
    build: {
      ...data.build,
      engines: filterEngine,
    },
  });
};

export const addEngine = (id, data, set, actual) => {
  const highest = actual.engines.reduce(
    (a, current) => Math.max(a, current.id),
    0
  );

  const newWeapon = {
    id: highest + 1,
    name: "",
    img: "",
  };

  set({
    ...data,
    build: {
      ...data.build,
      engines: data.build.engines.map((weapon) =>
        weapon.id === id
          ? { ...weapon, engines: [...weapon.engines, newWeapon] }
          : weapon
      ),
    },
  });
};

export const deleteEngineList = (id, data, set) => {
    const filterSet = data.build.engines.filter((engineList) => engineList.id !== id);

    set({
      ...data,
      build: {
        ...data.build,
        engines: filterSet,
      },
    });
};

export const addEngineList = (data, set, actual) => {
  const highest = actual.reduce((a, current) => Math.max(a, current.id), 0);

  const newEngineList = {
    id: highest + 1,
    title: "",
    engines: [
      {
        id: 0,
        name: "",
        img: "",
      },
    ],
  };

  set({
    ...data,
    build: {
      ...data.build,
      engines: [...data.build.engines, newEngineList],
    },
  });
};
