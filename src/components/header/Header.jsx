import { Link } from "react-router-dom";
import { gameVersion, lastUpdate } from "../../utils/gameVersion";

export const Header = ({ pages, link }) => {
  let linkTo;
  if (typeof link === "undefined") {
    linkTo = pages;
  } else {
    linkTo = link;
  }

  return (
    <header className="mb-8">
      <div className="text-white px-5 h-full">
        <h1 className="font-black text-3xl md:text-5xl text-center">
          Zenless Zone Zero || <span className="capitalize">{pages}</span>
        </h1>
        <p className="mb-2">
          <Link to={"/"} className="hover:text-yellow-500">
            Home
          </Link>{" "}
          /{" "}
          <Link to={`/${linkTo}`} className="hover:text-yellow-500 capitalize">
            {pages}
          </Link>
        </p>
        <hr className="border-yellow-500" />
        <p className="mt-2">
          Characters (Agents) available in{" "}
          <span className="font-black">Zenless Zone Zero </span>
          (ZZZ) - Find them in version{" "}
          <span className="font-black">{gameVersion}.</span>
        </p>
        <p>
          <span className="font-thin">Last updated: </span>
          {lastUpdate}
        </p>
      </div>
    </header>
  );
};
