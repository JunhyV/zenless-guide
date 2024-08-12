import basicEther from "../../assets/images/zzz-materials/skill-materials/AvatarSkillEther01.webp";
import advancedEther from "../../assets/images/zzz-materials/skill-materials/AvatarSkillEther02.webp";
import specializedEther from "../../assets/images/zzz-materials/skill-materials/RoleSkillExpEther01.webp";
import basicIce from "../../assets/images/zzz-materials/skill-materials/AvatarSkillIce01.webp";
import advancedIce from "../../assets/images/zzz-materials/skill-materials/AvatarSkillIce02.webp";
import specializedIce from "../../assets/images/zzz-materials/skill-materials/RoleSkillExpIce01.webp";
import basicFire from "../../assets/images/zzz-materials/skill-materials/AvatarSkillFire01.webp";
import advancedFire from "../../assets/images/zzz-materials/skill-materials/AvatarSkillFire02.webp";
import specializedFire from "../../assets/images/zzz-materials/skill-materials/RoleSkillExpFire01.webp";
import basicElectric from "../../assets/images/zzz-materials/skill-materials/AvatarSkillThunder01.webp";
import advancedElectric from "../../assets/images/zzz-materials/skill-materials/AvatarSkillThunder02.webp";
import specializedElectric from "../../assets/images/zzz-materials/skill-materials/RoleSkillExpThunder01.webp";
import basicPhysical from "../../assets/images/zzz-materials/skill-materials/AvatarSkillPhys01.webp";
import advancedPhysical from "../../assets/images/zzz-materials/skill-materials/AvatarSkillPhys02.webp";
import specializedPhysical from "../../assets/images/zzz-materials/skill-materials/RoleSkillExpPhysDmg01.webp";

export const skillImages = {
  basicElectric,
  advancedElectric,
  specializedElectric,
  basicFire,
  advancedFire,
  specializedFire,
  basicEther,
  advancedEther,
  specializedEther,
  basicIce,
  advancedIce,
  specializedIce,
  basicPhysical,
  advancedPhysical,
  specializedPhysical,
}

export const getAgentSkills = (element) => {
  let skillMaterials;
  switch (element) {
    case "electric":
      skillMaterials = [
        'basicElectric',
        'advancedElectric',
        'specializedElectric'
      ];
      break;
    case "fire":
      skillMaterials = [
        'basicFire',
        'advancedFire',
        'specializedFire'
      ];
      break;
    case "ether":
      skillMaterials = [
        'basicEther',
        'advancedEther',
        'specializedEther'
      ];
      break;
    case "ice":
      skillMaterials = [
        'basicIce',
        'advancedIce',
        'specializedIce'
      ];
      break;
    case "physical":
      skillMaterials = [
        'basicPhysical',
        'advancedPhysical',
        'specializedPhysical'
      ];
      break;
    default:
      break;
  }

  return skillMaterials;
};

export const skillsMaterials = [
  {
    lvl: "1",
    farm: [
      {
        type: "basic",
        img: {
          physical: basicPhysical,
          ether: basicEther,
          ice: basicIce,
          fire: basicFire,
          electric: basicElectric,
        },
        number: 0,
        hamster: false,
      },
    ],
    dennies: 0,
  },
  {
    lvl: "2",
    farm: [
      {
        type: "basic",
        img: {
          physical: basicPhysical,
          ether: basicEther,
          ice: basicIce,
          fire: basicFire,
          electric: basicElectric,
        },
        number: 2,
        hamster: false,
      },
    ],
    dennies: 2000,
  },
  {
    lvl: "3",
    farm: [{
      type: "basic",
      img: {
        physical: basicPhysical,
        ether: basicEther,
        ice: basicIce,
        fire: basicFire,
        electric: basicElectric,
      },
      number: 3,
      hamster: false,
    }],
    dennies: 3000,
  },
  {
    lvl: "4",
    farm: [{
      type: "advanced",
      img: {
        physical: advancedPhysical,
        ether: advancedEther,
        ice: advancedIce,
        fire: advancedFire,
        electric: advancedElectric,
      },
      number: 2,
      hamster: false,
    },],
    dennies: 6000,
  },
  {
    lvl: "5",
    farm: [{
      type: "advanced",
      img: {
        physical: advancedPhysical,
        ether: advancedEther,
        ice: advancedIce,
        fire: advancedFire,
        electric: advancedElectric,
      },
      number: 3,
      hamster: false,
    },],
    dennies: 9000,
  },
  {
    lvl: "6",
    farm: [{
      type: "advanced",
      img: {
        physical: advancedPhysical,
        ether: advancedEther,
        ice: advancedIce,
        fire: advancedFire,
        electric: advancedElectric,
      },
      number: 4,
      hamster: false,
    },],
    dennies: 12000,
  },
  {
    lvl: "7",
    farm: [{
      type: "advanced",
      img: {
        physical: advancedPhysical,
        ether: advancedEther,
        ice: advancedIce,
        fire: advancedFire,
        electric: advancedElectric,
      },
      number: 6,
      hamster: false,
    },],
    dennies: 18000,
  },
  {
    lvl: "8",
    farm: [{
      type: "specialized",
      img: {
        physical: specializedPhysical,
        ether: specializedEther,
        ice: specializedIce,
        fire: specializedFire,
        electric: specializedElectric,
      },
      number: 5,
      hamster: false,
    },],
    dennies: 45000,
  },
  {
    lvl: "9",
    farm: [{
      type: "specialized",
      img: {
        physical: specializedPhysical,
        ether: specializedEther,
        ice: specializedIce,
        fire: specializedFire,
        electric: specializedElectric,
      },
      number: 8,
      hamster: false,
    },],
    dennies: 67500,
  },
  {
    lvl: "10",
    farm: [{
      type: "specialized",
      img: {
        physical: specializedPhysical,
        ether: specializedEther,
        ice: specializedIce,
        fire: specializedFire,
        electric: specializedElectric,
      },
      number: 10,
      hamster: false,
    },],
    dennies: 90000,
  },
  {
    lvl: "11",
    farm: [{
      type: "specialized",
      img: {
        physical: specializedPhysical,
        ether: specializedEther,
        ice: specializedIce,
        fire: specializedFire,
        electric: specializedElectric,
      },
      number: 12,
      hamster: false,
    }],
    dennies: 112500,
  },
  {
    lvl: "12",
    farm: [{
      type: "specialized",
      img: {
        physical: specializedPhysical,
        ether: specializedEther,
        ice: specializedIce,
        fire: specializedFire,
        electric: specializedElectric,
      },
      number: 15,
      hamster: true,
    }],
    dennies: 135000,
  },
];
