export const gameVersion = '1.0';
export const nextVersion = parseInt(gameVersion) + 0.1; 
export const lastUpdate = '2024.07.22';

//Next characters imports
import jane from "../assets/images/comming-soon/Agent_Jane_Doe_Portrait.webp";
import qingyi from "../assets/images/comming-soon/Agent_Qingyi_Portrait.webp";
import seth from "../assets/images/comming-soon/Agent_Seth_Portrait.webp";
import miyabi from "../assets/images/comming-soon/Agent_Hoshimi_Miyabi_Portrait.png";

export const newCharacters = ['Zhu Yuan'];

export const nextAgents = [
    {
        name: "Jane",
        img: jane,
        version: '1.1',
        gameplay: 'https://www.youtube.com/watch?v=IoR7hWz4s8E'
    },
    {
        name: "Qingyi",
        img: qingyi,
        version: '1.1',
        gameplay: 'https://www.youtube.com/watch?v=oX9Upd3diqo'
    },
    {
        name: "Seth",
        img: seth,
        version: '1.1',
        gameplay: 'https://www.youtube.com/watch?v=Un_DASd1w5w'
    },
    {
        name: "Miyabi",
        img: miyabi,
        version: 'Unknow',
        gameplay: 'https://www.youtube.com/shorts/XF_d5cPdRJ4'
    },
]