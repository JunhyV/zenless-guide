export const gameVersion = "1.1";
export const nextVersion = "1.2";
export const lastUpdate = "2024.09.02";

//Next characters imports
import miyabi from "../assets/images/comming-soon/Agent_Hoshimi_Miyabi_Portrait.png";
import caesar from "../assets/images/comming-soon/Agent_Caesar_Portrait.webp";
import burnice from "../assets/images/comming-soon/Agent_Burnice_Portrait.webp";

export const newCharacters = ["Jane", "Seth",];
export const newEngine = [  "Peacekeeper-Specialized", 
  "Sharpened Stinger",];
export const newBangboo = [];
export const newDisk = [];


export const notReleased = [ "Caesar", "Burnice"];
export const notReleasedEngine = [

];
export const notReleasedBangboo = [];

export const nextAgents = [
  {
    id: 1,
    version: 1.2,
    agents: [
      {
        name: "caesar",
        img: caesar,
        version: "1.2",
        gameplay: "https://www.youtube.com/watch?v=dHTG_xvdJcU",
      },
      {
        name: "burnice",
        img: burnice,
        version: "1.2",
        gameplay: "https://www.youtube.com/watch?v=BVI2HXi5_IU",
      },
    ],
  },
  {
    id: 2,
    version: "unknown",
    agents: [
      {
        name: "Miyabi",
        img: miyabi,
        version: "Unknow",
        gameplay: "https://www.youtube.com/shorts/XF_d5cPdRJ4",
      },
    ],
  },
];
