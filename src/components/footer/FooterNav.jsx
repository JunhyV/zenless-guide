import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navList } from "../../utils/footerNav";

const FooterNav = ({overlayToggle}) => {
  const [links, setLinks] = useState([]);
  useEffect(() => {
    setLinks(navList);
  }, []);

  return (
    <nav className="flex flex-col md:flex-row text-center text-white text-sm uppercase md:gap-10 md:justify-center">
      {links.map((link, i) => (
        <Link
          className=" hover:bg-white hover:text-neutral-900  p-3"
          key={i}
          to={`${link.link}`}
          onClick={overlayToggle}
        >
          <FontAwesomeIcon icon={link.icon} className="" />
          <p className="font-black">{link.name}</p>
        </Link>
      ))}
    </nav>
  );
};

export default FooterNav;
