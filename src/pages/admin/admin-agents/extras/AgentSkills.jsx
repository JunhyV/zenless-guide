import React from "react";

const AgentSkills = ({ skills, data, set }) => {
  const deleteMultiplier = (skill, cardIndex, multiplierIndex) => {
    const newData = { ...data };
    newData.skills[skill][cardIndex].data.splice(multiplierIndex, 1);
    set(newData);
  };

  const createMultiplier = (skill, cardIndex) => {
    const newData = { ...data };
    const newMultiplier = {
      i: newData.skills[skill][cardIndex].data.length,
      type: "",
      number: 0
    };
    newData.skills[skill][cardIndex].data.push(newMultiplier);
    set(newData);
  };

  return (
    <div>
      {skills.map((skill, i) => {
        const skillInfo = data.skills[skill];

        return (
          <div key={`${skill}-${i}`}>
            <h3 className="font-thin text-center mb-5 text-3xl capitalize">{skill}</h3>
            <div className="grid gap-5 mb-5">
              {skillInfo.map((card, cardIndex) => (
                <div
                  key={`${skill}-card-${cardIndex}`}
                  className="grid gap-5 border border-neutral-400 p-2 w-full"
                >
                  <div className="flex items-center">
                    <label
                      htmlFor={`${cardIndex}-skill`}
                      className="min-w-24 capitalize font-medium text-md"
                    >
                      Skill name:
                    </label>
                    <input
                      type="text"
                      id={`${cardIndex}-skill`}
                      value={card.name}
                      onChange={(e)=>{set({...data, skills: {...data.skills, [skill]: [...data.skills[skill].map(core => core.id === card.id ? {...core, name: e.target.value} : core)]}})}}
                      className="flex-1 p-2 border border-neutral-400 rounded-md"
                    />
                  </div>
                  <div className="flex">
                    <label
                      htmlFor={`${cardIndex}-description`}
                      className="min-w-24 capitalize font-medium text-md"
                    >
                      Description:
                    </label>
                    <textarea
                      id={`${cardIndex}-description`}
                      value={card.description}
                      onChange={(e)=>{set({...data, skills: {...data.skills, [skill]: [...data.skills[skill].map(core => core.id === card.id ? {...core, description: e.target.value} : core)]}})}}
                      className="flex-1 p-2 h-20 border border-neutral-400 rounded-md"
                    />
                  </div>
                  {card.data.length > 0 && (
                    <div className="grid">
                      <h3 className="font-medium mb-2">Multipliers</h3>
                      <div className="grid gap-5 mb-2">
                        {card.data.map((multiplier, multiplierIndex) => (
                          <div
                            key={`${skill}-multiplier-${multiplierIndex}`}
                            className="flex justify-between gap-2 items-center"
                          >
                            <div className="flex items-center">
                              <label
                                htmlFor={`type-${multiplier.i}`}
                                className="min-w-24 capitalize font-medium text-md"
                              >
                                Type:
                              </label>
                              <input
                                type="text"
                                id={`type-${multiplier.i}`}
                                value={multiplier.type}
                                onChange={(e)=>{set({...data, skills: {...data.skills, [skill]: [...data.skills[skill].map(core => core.id === card.id ? {...core, data: core.data.map(newCore => newCore.id === multiplier.id ? {...newCore, type: e.target.value} : newCore)} : core)]}})}}
                                className="flex-1 p-2 border border-neutral-400 rounded-md"
                              />
                            </div>
                            <div className="flex items-center">
                              <label
                                htmlFor={`number-${multiplier.i}`}
                                className="min-w-24 capitalize font-medium text-md"
                              >
                                Number:
                              </label>
                              <input
                                type="number"
                                id={`number-${multiplier.i}`}
                                value={multiplier.number}
                                onChange={(e)=>{set({...data, skills: {...data.skills, [skill]: [...data.skills[skill].map(core => core.id === card.id ? {...core, data: core.data.map(newCore => newCore.id === multiplier.id ? {...newCore, number: e.target.value} : newCore)} : core)]}})}}
                                placeholder="Flat or %"
                                className="flex-1 p-2 border border-neutral-400 rounded-md"
                              />
                            </div>
                            <button
                              className="text-rose-400 font-medium border-2 border-rose-400 rounded-full w-8 h-8 mx-auto hover:text-rose-600 hover:border-rose-600 transition-colors duration-500"
                              onClick={() => deleteMultiplier(skill, cardIndex, multiplierIndex)}
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
                    onClick={() => createMultiplier(skill, cardIndex)}
                  >
                    +
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AgentSkills;
