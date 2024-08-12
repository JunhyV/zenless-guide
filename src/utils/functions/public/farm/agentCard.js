export const handleData = (e, type, name, set) => {
  set((prev) =>
    prev.map((agent) =>
      agent.name === name ? { ...agent, [type]: e.target.value } : agent
    )
  );
};
export const handleData2 = (e, type, name, set) => {
  set((prev) =>
    prev.map((agent) =>
      agent.name === name
        ? { ...agent, [type]: parseInt(e.target.innerText) }
        : agent
    )
  );
};
export const handleData3 = (e, type, name, set) => {
  set((prev) =>
    prev.map((agent) =>
      agent.name === name ? { ...agent, [type]: e.target.innerText } : agent
    )
  );
};

export function deleteSelected(name, list, set) {
  const filterObj = list.filter((obj) => obj.name !== name);
  set(filterObj);
}

export const handleMAX = (name, set) => {
  set((prev) =>
    prev.map((agent) =>
      agent.name === name
        ? {
            ...agent,
            lvl: "60",
            core: "F",
            basic: 12,
            dodge: 12,
            assist: 12,
            special: 12,
            chain: 12,
          }
        : agent
    )
  );
};

export const handleRecommended = (name, set, rol) => {
  switch (rol) {
    case "defense":
      set((prev) =>
        prev.map((agent) =>
          agent.name === name
            ? {
                ...agent,
                lvl: "50",
                core: "D",
                basic: 9,
                dodge: 1,
                assist: 9,
                special: 9,
                chain: 1,
              }
            : agent
        )
      );
      break;
    case "stun":
      set((prev) =>
        prev.map((agent) =>
          agent.name === name
            ? {
                ...agent,
                lvl: "50",
                core: "D",
                basic: 9,
                dodge: 1,
                assist: 9,
                special: 9,
                chain: 1,
              }
            : agent
        )
      );
      break;
    case "attack":
      set((prev) =>
        prev.map((agent) =>
          agent.name === name
            ? {
                ...agent,
                lvl: "60",
                core: "F",
                basic: 12,
                dodge: 1,
                assist: 1,
                special: 12,
                chain: 12,
              }
            : agent
        )
      );
      break;
    case "anomaly":
      set((prev) =>
        prev.map((agent) =>
          agent.name === name
            ? {
                ...agent,
                lvl: "60",
                core: "F",
                basic: 1,
                dodge: 1,
                assist: 1,
                special: 1,
                chain: 1,
              }
            : agent
        )
      );
      break;
    case "support":
      set((prev) =>
        prev.map((agent) =>
          agent.name === name
            ? {
                ...agent,
                lvl: "50",
                core: "D",
                basic: 1,
                dodge: 1,
                assist: 1,
                special: 9,
                chain: 1,
              }
            : agent
        )
      );
      break;

    default:
      break;
  }
};
