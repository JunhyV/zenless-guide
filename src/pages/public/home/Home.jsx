import React from "react";
import { Link } from "react-router-dom";

import home from "../../../assets/home.svg";
import agents from "../../../assets/agents.svg";
import bangboo from "../../../assets/bangboo.svg";
import drivedisk from "../../../assets/drivedisk.svg";
import guides from "../../../assets/guides.svg";
import shiyudefense from "../../../assets/shiyudefense.svg";
import tierlist from "../../../assets/tierlist.svg";
import wengine from "../../../assets/w-engines.svg";
import blog from "../../../assets/blog.svg";
import playpc from "../../../assets/playpc.svg";
const Home = () => {
  let logo =
    "https://www.prydwen.gg/static/e5cca805ee22a6a5327c633bbab70f48/c5628/prydwen_logo_small.webp";
  return (
    <div className="w-[250px] h-screen bg-[#1c1c1e] text-white fixed flex flex-col">
      <div className="flex flex-col items-center p-[15px] border-b-[#333] border-b border-solid">
        <img src={logo} alt="Logo" />
        <span>Zenless Zone Zero</span>
      </div>

      <ul className="sidebar-nav">
        <li className="flex gap-2.5 p-[15px]">
          <img src={home} alt="home" />
          <Link
            className="no-underline block transition-[background-color] duration-[0.3s] ease-[ease] hover:bg-[#333] text-[hsla(0,0%,100%,0.75)]"
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="flex gap-2.5 p-[15px]">
          <img src={agents} alt="agents" />
          <Link
            className="no-underline block transition-[background-color] duration-[0.3s] ease-[ease] hover:bg-[#333] text-[hsla(0,0%,100%,0.75)]"
            to="/agents"
          >
            Agents
          </Link>
        </li>
        <li className="flex gap-2.5 p-[15px]">
          <img src={tierlist} alt="tierlist" />
          <Link
            className="no-underline block transition-[background-color] duration-[0.3s] ease-[ease] hover:bg-[#333] text-[hsla(0,0%,100%,0.75)]"
            to="/tierlist"
          >
            Tier List
          </Link>
        </li>
        <li className="flex gap-2.5 p-[15px]  border-b-[hsla(0,0%,40%,0.75)] border-b border-solid">
          <img src={shiyudefense} alt="shiyudefense" />
          <Link
            className="no-underline block transition-[background-color] duration-[0.3s] ease-[ease] hover:bg-[#333] text-[hsla(0,0%,100%,0.75)]"
            to="/"
          >
            Shiyu Defense
          </Link>
        </li>
        <li className="flex gap-2.5 p-[15px]">
          <img src={bangboo} alt="bangboo" />
          <Link
            className="no-underline block transition-[background-color] duration-[0.3s] ease-[ease] hover:bg-[#333] text-[hsla(0,0%,100%,0.75)]"
            to="/bangboos"
          >
            Bangboo
          </Link>
        </li>
        <li className="flex gap-2.5 p-[15px]">
          <img src={wengine} alt="wengine" />
          <Link
            className="no-underline block transition-[background-color] duration-[0.3s] ease-[ease] hover:bg-[#333] text-[hsla(0,0%,100%,0.75)]"
            to="/engines"
          >
            W-Engines
          </Link>
        </li>
        <li className="flex gap-2.5 p-[15px]  border-b-[hsla(0,0%,40%,0.75)] border-b border-solid">
          <img src={drivedisk} alt="drivedisk" />
          <Link
            className="no-underline block transition-[background-color] duration-[0.3s] ease-[ease] hover:bg-[#333] text-[hsla(0,0%,100%,0.75)]"
            to="/"
          >
            Drive Disks
          </Link>
        </li>
        <li className="flex gap-2.5 p-[15px]  border-b-[hsla(0,0%,40%,0.75)] border-b border-solid">
          <img src={guides} alt="guides" />
          <Link
            className="no-underline block transition-[background-color] duration-[0.3s] ease-[ease] hover:bg-[#333] text-[hsla(0,0%,100%,0.75)]"
            to="/"
          >
            Guides
          </Link>
        </li>
        <li className="flex gap-2.5 p-[15px]  border-b-[hsla(0,0%,40%,0.75)] border-b border-solid">
          <img src={blog} alt="blog" />
          <Link
            className="no-underline block transition-[background-color] duration-[0.3s] ease-[ease] hover:bg-[#333] text-[hsla(0,0%,100%,0.75)]"
            to="/"
          >
            Blog
          </Link>
        </li>
        <li className="flex gap-2.5 p-[15px]">
          <img src={playpc} alt="playpc" />
          <Link
            className="no-underline block transition-[background-color] duration-[0.3s] ease-[ease] hover:bg-[#333] text-[hsla(0,0%,100%,0.75)]"
            to="/"
          >
            Play on PC
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
