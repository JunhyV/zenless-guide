import { faBars, faChartSimple, faGear, faGhost, faHouse, faUsers } from "@fortawesome/free-solid-svg-icons";

export const navList = [
    {
        name: 'home',
        link: '/',
        icon: faHouse
    },
    {
        name: 'agents',
        link: '/agents',
        icon: faUsers
    },
    {
        name: 'tierlist',
        link: '/tierlist',
        icon: faChartSimple
    },
    {
        name: 'w-engines',
        link: '/engines',
        icon: faGear
    },
    {
        name: 'bangboos',
        link: '/bangboos',
        icon: faGhost
    },
]