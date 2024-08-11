export function handleMAX(name) {}

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
