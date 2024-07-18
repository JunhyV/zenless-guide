import { faPen } from "@fortawesome/free-solid-svg-icons/faPen";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const DiskCard = ({ data }) => {
  const {_id, name, set2, set4, img } = data;
  return (
    <div className="grid grid-cols-4 gap-2 p-1 border-b border-b-blue-300 items-center justify-items-center">
      <p>{name}</p>
      <div className="justify-self-start w-full">
        <p className="border-b border-b-neutral-300 text-sm">{set2}</p>
        <p className="text-sm">{set4}</p>
      </div>
      <img
        src={`https://i.imgur.com/${img}.png`}
        alt="set-img"
        className="w-28"
      />
      <div className="flex gap-2">
        <Link to={`http://localhost:5173/admin-zzz/disks/${_id}`}>
          <button className=" bg-sky-500 w-8 h-8">
            <FontAwesomeIcon icon={faPen} className="text-white" />
          </button>
        </Link>
        <button className="bg-rose-500 w-8 h-8">
          <FontAwesomeIcon icon={faTrash} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default DiskCard;
