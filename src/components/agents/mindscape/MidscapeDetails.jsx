import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const MidscapeDetails = ({ data }) => {
  const [detailsToggle, setDetailsToggle] = useState(false);
  const { id, name, description } = data;

  return (
    <div className={`flex justify-center w-full`}>
      <h2 className="bg-neutral-300 p-1 h-10 font-black flex items-center">M{id}</h2>
      <div className="w-full hover:cursor-pointer">
        <div
          className="min-h-10 p-1 bg-neutral-800 flex justify-between items-center text-white "
          onClick={() => setDetailsToggle(!detailsToggle)}
        >
          <h3 className="font-medium">{name}</h3>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <div
          className={`bg-neutral-600 text-white transition-max-height duration-500 ease-in-out overflow-hidden ${
            detailsToggle ? "max-h-screen" : "max-h-0"
          }`}
        >
          <p className="p-1 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MidscapeDetails;
