import React from "react";

const AgentCore = ({ id, data, set, global }) => {
  const createMultiplier = () => {
    const highestId = data.data.reduce((maxId, item) => {
      return parseInt(item.id) > maxId ? parseInt(item.id) : maxId;
    }, 0);
    const multiplier = { id: highestId + 1, type: "", number: "" };
    const newData = { ...data, data: [...data.data, multiplier] };
    set({
      ...global,
      core_skill: global.core_skill.map((skill) =>
        skill.id === data.id ? { ...skill, data: newData.data } : skill
      ),
    });
  };

  const deleteMultiplier = (multiplierId) => {
    const filteredMultipliers = data.data.filter(
      (multiplier) => multiplier.id !== multiplierId
    );

    set({
      ...global,
      core_skill: global.core_skill.map((skill) =>
        skill.id === data.id ? { ...skill, data: filteredMultipliers } : skill
      ),
    });
  };

  const deleteSkill = () => {
    const filtredSkills = global.core_skill.filter(
      (core) => core.id !== data.id
    );
    set({ ...global, core_skill: filtredSkills });
  };

  return (
    <div className="flex">
      <div className="flex flex-col gap-5 border border-neutral-400 p-2 w-full">
        <div className="flex items-center">
          <label
            htmlFor={`${id}-skill`}
            className="min-w-24 capitalize font-medium text-md"
          >
            Skill name:
          </label>
          <input
            type="text"
            id={`${id}-skill`}
            value={data.name}
            className="flex-1 p-2 border border-neutral-400 rounded-md"
            onChange={(e) =>
              set({
                ...global,
                core_skill: global.core_skill.map((core) =>
                  core.id === data.id ? { ...core, name: e.target.value } : core
                ),
              })
            }
          />
        </div>
        <div className="flex">
          <label
            htmlFor={`${id}-description`}
            className="min-w-24 capitalize font-medium text-md"
          >
            Description:
          </label>
          <textarea
            id={`${id}-description`}
            className="flex-1 p-2 h-20 border border-neutral-400 rounded-md"
            value={data.description}
            onChange={(e) =>
              set({
                ...global,
                core_skill: global.core_skill.map((core) =>
                  core.id === data.id
                    ? { ...core, description: e.target.value }
                    : core
                ),
              })
            }
          />
        </div>
        {data.data.length > 0 && (
          <div className="flex flex-col">
            <h3 className="font-medium mb-2">Multipliers</h3>
            <div className=" flex flex-col gap-5 mb-2">
              {data.data.map((multiplier) => (
                <div key={`multiplier-${multiplier.id}`} className="flex gap-2">
                  <div className="flex items-center">
                    <label
                      htmlFor={`type-${multiplier.id}`}
                      className="min-w-24 capitalize font-medium text-md"
                    >
                      Type:
                    </label>
                    <input
                      type="text"
                      id={`type-${multiplier.id}`}
                      value={multiplier.type}
                      className="w-full border border-neutral-400 rounded-md p-1 text-end"
                      onChange={(e) =>
                        set({
                          ...global,
                          core_skill: global.core_skill.map((core) =>
                            core.id === data.id
                              ? {
                                  ...core,
                                  data: core.data.map((newCore) =>
                                    newCore.id === multiplier.id
                                      ? { ...newCore, type: e.target.value }
                                      : newCore
                                  ),
                                }
                              : core
                          ),
                        })
                      }
                    />
                  </div>
                  <div className="flex items-center">
                    <label
                      htmlFor={`number-${multiplier.id}`}
                      className="min-w-24 capitalize font-medium text-md"
                    >
                      Number:
                    </label>
                    <input
                      type="number"
                      id={`number-${multiplier.id}`}
                      placeholder="Flat or %"
                      className="w-full border border-neutral-400 rounded-md p-1 text-end"
                      value={multiplier.number}
                      onChange={(e) =>
                        set({
                          ...global,
                          core_skill: global.core_skill.map((core) =>
                            core.id === data.id
                              ? {
                                  ...core,
                                  data: core.data.map((newCore) =>
                                    newCore.id === multiplier.id
                                      ? { ...newCore, number: e.target.value }
                                      : newCore
                                  ),
                                }
                              : core
                          ),
                        })
                      }
                    />
                  </div>
                  <button
                    className="text-rose-400 font-medium border-2 border-rose-400 rounded-full min-w-8 h-8 mx-auto hover:text-rose-600 hover:border-rose-600 transition-colors duration-500"
                    onClick={() => deleteMultiplier(multiplier.id)}
                  >
                    -
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        <button
          className="text-violet-400 font-medium border-2 border-violet-400 rounded-full w-8 h-8 mx-auto hover:text-violet-600 hover:border-violet-600 transition-colors duration-500"
          onClick={createMultiplier}
        >
          +
        </button>
      </div>
      <button
        className="p-1 bg-rose-400 text-white font-black border border-rose-400 hover:bg-rose-600 min-h-full"
        onClick={deleteSkill}
      >
        x
      </button>
    </div>
  );
};

export default AgentCore;
