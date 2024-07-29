import { ActiveCodes } from "../../../components/home/ActiveCodes";
import { Bluestacks } from "../../../components/home/Bluestacks";
import { Community } from "../../../components/home/Community";
import { NavSidebar } from "../../../components/home/NavSidebar";
import { Shortcuts } from "../../../components/home/Shortcuts";

const Home = () => {
  return (
    <div className="w-full h-screen ">
      <NavSidebar />
      <div className="flex-1 ml-[250px] p-6 overflow-auto ">
        <p className="mb-6 text-gray-900">
          Prydwen.gg - Zenless Zone Zero (ZZZ) wiki and tier list. Prydwen.gg is a wiki
          for Zenless Zone Zero (ZZZ). Check our guides, tier lists, and reviews for
          characters available in the game.
        </p>
        <Bluestacks />
        <ActiveCodes />
        <Shortcuts />
        <Community />
      </div>
    </div>
  );
};

export default Home;
