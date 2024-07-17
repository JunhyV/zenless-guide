// Rol imports
import stun from "../../../assets/images/elements/stun.webp";
import attack from "../../../assets/images/elements/attack.webp";
import support from "../../../assets/images/elements/support.webp";
import defence from "../../../assets/images/elements/defense.webp";
import anomaly from "../../../assets/images/elements/anomaly.webp";

// Element imports
import physical from "../../../assets/images/elements/ele_physical.webp";
import fire from "../../../assets/images/elements/ele_fire.webp";
import ice from "../../../assets/images/elements/ele_ice.webp";
import electric from "../../../assets/images/elements/ele_electric.webp";
import ether from "../../../assets/images/elements/ele_ether.webp";

// Faction imports
import hares from "../../../assets/images/factions/Gentle-House-AKA-Cunning-Hares.png";
import belogob from "../../../assets/images/factions/Belobog-Heavy-Industries.png";
import neps from "../../../assets/images/factions/Criminal-Investigation-Special-Response-Team.webp";
import obols from "../../../assets/images/factions/OBOLS-Squad.webp";
import section6 from "../../../assets/images/factions/Section-6.png";
import calydon from "../../../assets/images/factions/Sons-of-Calydon.webp";
import housekeeping from "../../../assets/images/factions/Victoria-Housekeeping-Co.png";

// Rank imports
import SRank from "../../../assets/images/ranks/rarity_s.webp";
import ARank from "../../../assets/images/ranks/rarity_a.webp";

export function getImages(rol, element, faction, rank) {
  let rolImg;
  let elementImg;
  let factionImg;
  let rankImg;

  if (rank === "S") {
    rankImg = SRank;
  } else if(rank === "A"){
    rankImg = ARank;
  }

  switch (rol) {
    case "anomaly":
      rolImg = anomaly;
      break;
    case "attack":
      rolImg = attack;
      break;
    case "support":
      rolImg = support;
      break;
    case "defence":
      rolImg = defence;
      break;
    case "stun":
      rolImg = stun;
      break;
    default:
      break;
  }

  switch (element) {
    case "physical":
      elementImg = physical;
      break;
    case "fire":
      elementImg = fire;
      break;
    case "ice":
      elementImg = ice;
      break;
    case "electric":
      elementImg = electric;
      break;
    case "ether":
      elementImg = ether;
      break;
    default:
      break;
  }

  switch (faction) {
    case "Cunning Hares":
      factionImg = hares;
      break;
    case "Belobog Heavy Industries":
      factionImg = belogob;
      break;
    case "N.E.P.S.":
      factionImg = neps;
      break;
    case "OBOLS Squad":
      factionImg = obols;
      break;
    case "Section 6":
      factionImg = section6;
      break;
    case "Sons of Calydon":
      factionImg = sons;
      break;
    case "Victoria Housekeeping Co.":
      factionImg = housekeeping;
      break;
    default:
      break;
  }

  return [rolImg, elementImg, factionImg, rankImg];
}

export function getElements() {
  return [
    {
      name: "physical",
      img: physical,
    },
    {
      name: "fire",
      img: fire,
    },
    {
      name: "ice",
      img: ice,
    },
    {
      name: "electric",
      img: electric,
    },
    {
      name: "ether",
      img: ether,
    },
  ];
}
export function getRol() {
  return [
    {
      name: "anomaly",
      img: anomaly,
    },
    {
      name: "attack",
      img: attack,
    },
    {
      name: "support",
      img: support,
    },
    {
      name: "defence",
      img: defence,
    },
    {
      name: "stun",
      img: stun,
    },
  ];
}
export function getfaction() {
  return [
    {
      name: "Cunning Hares",
      img: hares,
    },
    {
      name: "Belobog Heavy Industries",
      img: belogob,
    },
    {
      name: "N.E.P.S.",
      img: neps,
    },
    {
      name: "OBOLS Squad",
      img: obols,
    },
    {
      name: "Section 6",
      img: section6,
    },
    {
      name: "Sons of Calydon",
      img: calydon,
    },
    {
      name: "Victoria Housekeeping Co.",
      img: housekeeping,
    },
  ];
}
export function getRanks() {
  return [
    {
      name: "S",
      img: SRank,
    },
    {
      name: "A",
      img: ARank,
    },
  ];
}
