import { factionOptions } from "../../options";

export function getFaction(faction) {
    const factionData = factionOptions.find(li => li.name === faction);

    return factionData;
}

export function getBorder(element) {
    let border;
    switch (element) {
        case 'fire':
            return border = 'border-rose-400'
        case 'ether':
            return border = 'border-fuchsia-400'
        case 'ice':
            return border = 'border-cyan-400'
        case 'electric':
            return border = 'border-blue-400'
        case 'physical':
            return border = 'border-yellow-400'
        default:
             return border = 'border-white'
    }
}

export function getHoverBorder(element) {
    let border;
    switch (element) {
        case 'fire':
            return border = 'hover:border-rose-400'
        case 'ether':
            return border = 'hover:border-fuchsia-400'
        case 'ice':
            return border = 'hover:border-cyan-400'
        case 'electric':
            return border = 'hover:border-blue-400'
        case 'physical':
            return border = 'hover:border-yellow-400'
        default:
             return border = 'hover:border-white'
    }
}
export function getTxtColor(element) {
    let border;
    switch (element) {
        case 'fire':
            return border = 'text-rose-400'
        case 'ether':
            return border = 'text-fuchsia-400'
        case 'ice':
            return border = 'text-cyan-400'
        case 'electric':
            return border = 'text-blue-400'
        case 'physical':
            return border = 'text-yellow-400'
        default:
             return border = 'text-white'
    }
}
export function getHoverTxtColor(element) {
    let border;
    switch (element) {
        case 'fire':
            return border = 'hover:text-rose-400'
        case 'ether':
            return border = 'hover:text-fuchsia-400'
        case 'ice':
            return border = 'hover:text-cyan-400'
        case 'electric':
            return border = 'hover:text-blue-400'
        case 'physical':
            return border = 'hover:text-yellow-400'
        default:
             return border = 'hover:text-white'
    }
}
export function getBg(element) {
    let bg;
    switch (element) {
        case 'fire':
            return bg = 'bg-rose-400'
        case 'ether':
            return bg = 'bg-fuchsia-400'
        case 'ice':
            return bg = 'bg-cyan-400'
        case 'electric':
            return bg = 'bg-blue-400'
        case 'physical':
            return bg = 'bg-yellow-400'
        default:
             return bg = 'bg-white'
    }
}

export function getBgGradient(element) {
    let bgGradient;
    switch (element) {
        case 'fire':
            return bgGradient = 'bg-gradient-to-b from-rose-600 to-rose-400'
        case 'ether':
            return bgGradient = 'bg-gradient-to-b from-fuchsia-600 to-fuchsia-400'
        case 'ice':
            return bgGradient = 'bg-gradient-to-b from-cyan-600 to-cyan-400'
        case 'electric':
            return bgGradient = 'bg-gradient-to-b from-blue-600 to-blue-400'
        case 'physical':
            return bgGradient = 'bg-gradient-to-b from-yellow-600 to-yellow-400'
        default:
             return bgGradient = 'bg-white'
    }
}