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