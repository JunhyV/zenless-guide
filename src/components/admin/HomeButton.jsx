import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const HomeButton = ({ url }) => {
  return (
    <Link
      to="/admin-zzz"
      className="absolute flex items-center gap-2 top-10 left-20 bg-neutral-900 font-medium p-2 px-4 text-white rounded-2xl hover:cursor-pointer hover:scale-105 transform transition-transform duration-300"
    >
      <FontAwesomeIcon icon={faHouse} />
      <p>Home</p>
    </Link>
  );
};

export default HomeButton;
