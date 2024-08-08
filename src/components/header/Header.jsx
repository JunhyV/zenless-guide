import { Link } from "react-router-dom";

export const Header = ({ pages }) => {
  return (
    <header className="mb-8">
      <div className="text-white px-5 h-full">
        <h1 className="font-black text-3xl md:text-5xl text-center">
          Zenless Zone Zero Agents List
        </h1>
        <p className="mb-2">
          <Link to="/" className="hover:text-yellow-500">
            Home
          </Link>{" "}
          / <Link className="hover:text-yellow-500">{pages}</Link>
        </p>
        <hr className="border-yellow-500" />
        <span className="block mt-4 mb-2">
          W-Engines (Weapons) available in Zenless Zone Zero (ZZZ) - Find them in
          version 1.0.
        </span>
        <span className="block">Last updated: 2024.07.15</span>
      </div>
    </header>
  );
};
