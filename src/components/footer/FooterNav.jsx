import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navList } from "../../utils/info/footerNav";
import zzz from "../../assets/images/extras/51296d07ef153ca7dd744dc31874d548_4734072724131588175.png";

const FooterNav = ({ overlayToggle }) => {
  const [links, setLinks] = useState([]);
  useEffect(() => {
    setLinks(navList);
  }, []);

  return (
    <nav className="flex flex-col min-h-[calc(100%-5rem)] md:flex-row text-center text-white text-sm uppercase md:gap-10 md:justify-center ">
      <div className="font-black text-2xl flex justify-between p-5 items-center gap-5 w-full md:hidden mb-10 landscape:mb-0 landscape:p-2 landscape:px-10">
        <img src={zzz} alt="logo" className="w-20" />
        <p>Menu</p>
      </div>
      <div className="grid grid-cols-3 md:flex md:justify-center gap-5 md:gap-2 landscape-grid-5 lg:gap-5">
        {links.map((link, i) => (
          <Link
            className=" hover:bg-white hover:text-neutral-900  p-3"
            key={i}
            to={`${link.link}`}
            onClick={overlayToggle}
          >
            <FontAwesomeIcon icon={link.icon} className="" />
            <p className="font-black md:text-xs lg:text-sm">{link.name}</p>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default FooterNav;
