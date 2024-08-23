export const gameVersion = "1.1";
export const nextVersion = "1.2";
export const lastUpdate = "2024.08.23";

//Next characters imports
import jane from "../assets/images/comming-soon/Agent_Jane_Doe_Portrait.webp";
import seth from "../assets/images/comming-soon/Agent_Seth_Portrait.webp";
import miyabi from "../assets/images/comming-soon/Agent_Hoshimi_Miyabi_Portrait.png";
import caesar from "../assets/images/comming-soon/Agent_Caesar_Portrait.webp";
import burnice from "../assets/images/comming-soon/Agent_Burnice_Portrait.webp";

export const newCharacters = ["Qingyi"];
export const newEngine = ["Ice-Jade Teapot",   "Iris Enigma"];
export const newBangboo = ["Officer Cui"];
export const newDisk = ["Qingyi"];


export const notReleased = ["Jane", "Seth"];
export const notReleasedEngine = [
  "Peacekeeper-Specialized",
  "Sharpened Stinger",
];
export const notReleasedBangboo = [];

export const nextAgents = [
  {
    id: 0,
    version: 1.1,
    agents: [
      {
        name: "Jane",
        img: jane,
        version: "1.1",
        gameplay: "https://www.youtube.com/watch?v=IoR7hWz4s8E",
      },
      {
        name: "Seth",
        img: seth,
        version: "1.1",
        gameplay: "https://www.youtube.com/watch?v=Un_DASd1w5w",
      },
    ],
  },
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
