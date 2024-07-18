import { faPen } from "@fortawesome/free-solid-svg-icons/faPen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import DeleteDisk from "../DeleteDisk";

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
        <Link to={`/admin-zzz/disks/${_id}`}>
          <button className=" bg-sky-500 hover:bg-sky-600 w-8 h-8">
            <FontAwesomeIcon icon={faPen} className="text-white" />
          </button>
        </Link>
        <DeleteDisk id={_id} item={'Disk Set'} url={`https://zzzapi.onrender.com/disks/${_id}`}/>
      </div>
    </div>
  );
};

export default DiskCard;
