// For sets
export const addSet = (id, data, set, actual) => {
  const highest = actual.sets.reduce(
    (a, current) => Math.max(a, current.id),
    0
  );

  const newSet = {
    id: highest + 1,
    name: "",
    img: "",
    quantity: 0,
  };

  set({
    ...data,
    build: {
      ...data.build,
      disksets: data.build.disksets.map((set) =>
        set.id === id ? { ...set, sets: [...set.sets, newSet] } : set
      ),
    },
  });
};

export const deleteSet = (id, data, set) => {
  const filterSet = data.build.disksets.map((diskset) => ({
    ...diskset,
    sets: diskset.sets.filter((set) => set.id !== id),
  }));

  set({
    ...data,
    build: {
      ...data.build,
      disksets: filterSet,
    },
  });
};

// For disksets
export const addSetList = (data, set, actual) => {
  const highest = actual.reduce((a, current) => Math.max(a, current.id), 0);

  const newDiskset = {
    id: highest + 1,
    title: "",
    sets: [
      {
        id: 0,
        name: "",
        img: "",
        quantity: 0,
      },
    ],
  };

  set({
    ...data,
    build: {
      ...data.build,
      disksets: [...data.build.disksets, newDiskset],
    },
  });
};

export const deleteSetList = (id, data, set) => {
  const filterSet = data.build.disksets.filter((diskset) => diskset.id !== id);

  set({
    ...data,
    build: {
      ...data.build,
      disksets: filterSet,
    },
  });
};

export function handleSaveTitle(e, data, set, id) {
  set({
    ...data,
    build: {
      ...data.build,
      disksets: data.build.disksets.map((diskset) =>
        diskset.id === id ? { ...diskset, title: e.target.value } : diskset
      ),
    },
  });
}

export function handleSaveQuantity(e, data, set, id, reference) {
  set({
    ...data,
    build: {
      ...data.build,
      disksets: data.build.disksets.map((diskset) =>
        diskset.id === reference
          ? {
              ...diskset,
              sets: diskset.sets.map((set) =>
                set.id === id ? { ...set, quantity: e.target.value } : set
              ),
            }
          : diskset
      ),
    },
  });
}

export function handleSaveDiskSet(e, data, set, id, reference, disks) {
  // Get img
  const drivedisk = disks.find(disk => disk.name === e.target.value);

  set({
    ...data,
    build: {
      ...data.build,
      disksets: data.build.disksets.map((diskset) =>
        diskset.id === reference
          ? {
              ...diskset,
              sets: diskset.sets.map((set) =>
                set.id === id ? { ...set, name: drivedisk.name, img: drivedisk.img } : set
              ),
            }
          : diskset
      ),
    },
  });
}
