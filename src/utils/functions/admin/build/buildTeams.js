export const handleSaveTeamTitle = (e, data, set, id) => {
  set({
    ...data,
    build: {
      ...data.build,
      team_comps: data.build.team_comps.map((team) =>
        team.id === id ? { ...team, title: e.target.value } : team
      ),
    },
  });
};

export const handleSaveTeamMember = (e, data, set, id, reference, agents) => {
  // Get img
  const agentData = agents.find((agent) => agent.nickname === e.target.value);

  set({
    ...data,
    build: {
      ...data.build,
      team_comps: data.build.team_comps.map((team) =>
        team.id === reference
          ? {
              ...team,
              members: team.members.map((agent) =>
                agent.id === id
                  ? {
                      ...agent,
                      name: agentData.nickname,
                      img: agentData.short_img,
                    }
                  : agent
              ),
            }
          : team
      ),
    },
  });
};
export const handleSaveMemberRol = (e, data, set, id, reference) => {
  set({
    ...data,
    build: {
      ...data.build,
      team_comps: data.build.team_comps.map((team) =>
        team.id === reference
          ? {
              ...team,
              members: team.members.map((agent) =>
                agent.id === id ? { ...agent, rol: e.target.value } : agent
              ),
            }
          : team
      ),
    },
  });
};
export const handleSaveTeamBangboo = (
  e,
  data,
  set,
  id,
  reference,
  bangboos
) => {
  // Get img
  const bangbooData = bangboos.find(
    (bangboo) => bangboo.name === e.target.value
  );

  set({
    ...data,
    build: {
      ...data.build,
      team_comps: data.build.team_comps.map((team) =>
        team.id === reference
          ? {
              ...team,
              bangboos: team.bangboos.map((bangboo) =>
                bangboo.id === id
                  ? {
                      ...bangboo,
                      name: bangbooData.name,
                      img: bangbooData.img,
                    }
                  : bangboo
              ),
            }
          : team
      ),
    },
  });
};

export const deleteAgent = (id, data, set) => {
  const filterAgent = data.build.team_comps.map((team) => ({
    ...team,
    members: team.members.filter((agent) => agent.id !== id),
  }));

  set({
    ...data,
    build: {
      ...data.build,
      team_comps: filterAgent,
    },
  });
};

export const addAgent = (id, data, set, actual) => {
  const highest = actual.members.reduce(
    (a, current) => Math.max(a, current.id),
    0
  );

  const newObject = {
    id: highest + 1,
    rol: "",
    name: "",
    img: "",
  };

  set({
    ...data,
    build: {
      ...data.build,
      team_comps: data.build.team_comps.map((team) =>
        team.id === id
          ? { ...team, members: [...team.members, newObject] }
          : team
      ),
    },
  });
};
export const deleteBangboo = (id, data, set) => {
  const filterBangboo = data.build.team_comps.map((team) => ({
    ...team,
    bangboos: team.bangboos.filter((bangboo) => bangboo.id !== id),
  }));

  set({
    ...data,
    build: {
      ...data.build,
      team_comps: filterBangboo,
    },
  });
};

export const addBangboo = (id, data, set, actual) => {
  const highest = actual.bangboos.reduce(
    (a, current) => Math.max(a, current.id),
    0
  );

  const newObject = {
    id: highest + 1,
    rol: "",
    name: "",
    img: "",
  };

  set({
    ...data,
    build: {
      ...data.build,
      team_comps: data.build.team_comps.map((team) =>
        team.id === id
          ? { ...team, bangboos: [...team.bangboos, newObject] }
          : team
      ),
    },
  });
};

export const deleteTeamList = (id, data, set) => {
  const filterSet = data.build.team_comps.filter(
    (teamList) => teamList.id !== id
  );

  set({
    ...data,
    build: {
      ...data.build,
      team_comps: filterSet,
    },
  });
};

export const addTeamList = (data, set, actual) => {
  const highest = actual.reduce((a, current) => Math.max(a, current.id), 0);

  const newTeamList = {
    id: highest + 1,
    title: "",
    members: [
      {
        id: 0,
        rol: "",
        name: "",
        img: "",
      },
      {
        id: 1,
        rol: "",
        name: "",
        img: "",
      },
    ],
    bangboos: [
      {
        id: 0,
        name: "",
        img: "",
      },
      {
        id: 1,
        name: "",
        img: "",
      },
    ],
  };

  set({
    ...data,
    build: {
      ...data.build,
      team_comps: [...data.build.team_comps, newTeamList],
    },
  });
};
