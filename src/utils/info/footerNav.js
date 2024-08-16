import { faCalculator, faChartSimple, faCompactDisc, faGear, faGhost, faHouse, faUser, faUsers, faUsersViewfinder } from "@fortawesome/free-solid-svg-icons";

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
/*     {
        name: 'teams',
        link: '/best-teams',
        icon: faUsersViewfinder
    }, */
    {
        name: 'w-engines',
        link: '/engines',
        icon: faGear
    },
    {
        name: 'drive disk',
        link: '/disk-sets',
        icon: faCompactDisc
    },
    {
        name: 'bangboos',
        link: '/bangboos',
        icon: faGhost
    },
    {
        name: 'calculator',
        link: '/calculator',
        icon: faCalculator
    },
]