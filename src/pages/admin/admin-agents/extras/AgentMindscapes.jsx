import React from "react";

const AgentMindscapes = ({ mindscape, data, set }) => {
  return (
    <div className="grid gap-2 mb-2">
      {mindscape.map((mind, i) => (
        <div key={`m${mind.id}`} className="flex items-center gap-2">
          <div className="flex items-center gap-2 w-full">
            <label
              htmlFor={`m${mind.id}`}
              className="capitalize font-medium text-md"
            >
              {`m${mind.id}`}:
            </label>
            <input
              type="text"
              value={mind.name}
              onChange={(e) =>
                set({
                  ...data,
                  mindscape: {
                    ...data.mindscape,
                    mindscapes: data.mindscape.mindscapes.map((core) =>
                      core.id === mind.id
                        ? { ...core, name: e.target.value }
                        : core
                    ),
                  },
                })
              }
              id={`m${i + 1}`}
              className="w-full p-2 border border-neutral-400 rounded-md"
            />
          </div>
          <div className="flex items-center gap-2 w-full">
            <label
              htmlFor={"description"}
              className="min-w-20 capitalize font-medium text-md"
            >
              {"description"}:
            </label>
            <textarea
              id={mind}
              value={mind.description}
              onChange={(e) =>
                set({
                  ...data,
                  mindscape: {
                    ...data.mindscape,
                    mindscapes: data.mindscape.mindscapes.map((core) =>
                      core.id === mind.id
                        ? { ...core, description: e.target.value }
                        : core
                    ),
                  },
                })
              }
              className="w-full p-2 border border-neutral-400 rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AgentMindscapes;
