import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons/faPen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { deleteRegister } from "../../../utils/deleteRegister";

const TableOptions = ({ id, url}) => {
  return (
    <div className="flex gap-5">
      <Link to={`${window.location.pathname}/${id}`}>
        <FontAwesomeIcon icon={faPen} className="text-white bg-sky-500 p-2 hover:bg-sky-600 " />
      </Link>
      <button onClick={() => deleteRegister(id, url)}>
        <FontAwesomeIcon icon={faTrash} className="text-white bg-rose-400 p-2 hover:bg-rose-600" />
      </button>
    </div>
  );
};

export default TableOptions;
