import React from "react";

const Selector = ({ data, type, set }) => {
  data.sort((a, b) => a.nickname.localeCompare(b.nickname));

  function handleSelection(data) {
    const newObject = {
      name: data.nickname,
      img: data.full_img,
      element: data.element,
      rol: data.rol,
      lvl: 1,
      core: "",
      basic: 0,
      dodge: 0,
      assist: 0,
      special: 0,
      chain: 0,
    };

    set((prev) => {
      const exists = prev.find((obj) => obj.name === newObject.name);
      if (exists) {
        return prev;
      } else {
        return [...prev, newObject];
      }
    });
  }
  return (
    <div>
      <p className="text-xl font-medium">
        --Select your <span className="capitalize">{type}</span>--
      </p>
      <div>
        {data.map((agent) => (
          <div
            key={agent.nickname}
            className="flex items-center gap-2"
            onClick={() => handleSelection(agent)}
          >
            <img
              src={`https://imgur.com/${agent.short_img}.jpg`}
              alt={agent.nickname}
              className="w-12 rounded-full "
            />
            <p className="text-xl font-medium">{agent.nickname}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Selector;
