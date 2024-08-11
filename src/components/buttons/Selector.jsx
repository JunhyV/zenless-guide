import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Selector = ({ data, type, set }) => {
  data.sort((a, b) => a.nickname.localeCompare(b.nickname));
  const [selectToggle, setSelectToggle] = useState(false);

  function handleSelection(data) {
    const newObject = {
      name: data.nickname,
      img: data.full_img,
      element: data.element,
      rol: data.rol,
      rank: data.rank,
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

    setSelectToggle(false);
  }
  return (
    <div className="w-80 relative">
      <div
        className="bg-white text-black text-xl text-center font-medium p-2 flex justify-between"
        onClick={() => setSelectToggle(!selectToggle)}
      >
        <p>
          Select your <span className="capitalize">{type}</span>
        </p>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      {selectToggle ? (
        <div className="h-96 bg-white overflow-auto text-black fixed w-80">
          {data.map((agent, li) => {
            const last = li + 1 === data.length;

            return (
              <div
                key={agent.nickname}
                className={`flex items-center gap-2 p-2 ${
                  last ? "" : "border-b-2 border-neutral-400"
                }  hover:bg-neutral-400`}
                onClick={() => handleSelection(agent)}
                role="button"
              >
                <img
                  src={`https://imgur.com/${agent.short_img}.jpg`}
                  alt={`${agent.nickname} image`}
                  className="w-10 rounded-full"
                />
                <p className="text-xl font-medium">{agent.nickname}</p>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Selector;
