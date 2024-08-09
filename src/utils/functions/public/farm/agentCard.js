export function handleMAX(name) {}

export const handleData = (e, type, name, set) => {
    console.log(e.target.value);
    
    
/*   set((prev) =>
    prev.map((agent) =>
      agent.name === name ? { ...agent, [type]: e.target.value } : agent
    )
  ); */
};

export function deleteSelected(name, list, set) {
  const filterObj = list.filter((obj) => obj.name !== name);
  set(filterObj);
}
