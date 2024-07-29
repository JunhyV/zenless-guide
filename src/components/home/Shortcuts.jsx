import React from "react";

export const Shortcuts = () => {
  const sections = [
    {
      title: "Newbie Corner",
      items: [
        {
          name: "Introduction to the game",
          image:
            "https://www.prydwen.gg/static/c33dede1e2d99fccb1610469dcc10ce8/d8057/category_intro.webp",
          link: "/intro",
        },
        {
          name: "Reroll guide",
          image:
            "https://www.prydwen.gg/static/28e791adbb4273658bdb21ce60ffa4a9/d8057/category_reroll.webp",
          link: "/reroll",
        },
        {
          name: "Beginner guide",
          image:
            "https://www.prydwen.gg/static/7a0e2f5560721c4e5e72e88dac310670/d8057/category_beginner.webp",
          link: "/beginner",
        },
        {
          name: "Tips and Tricks",
          image:
            "https://www.prydwen.gg/static/d19c4aefc5a8092970cae8b698279e96/d8057/category_tips.webp",
          link: "/tips",
        },
        {
          name: "Free Characters",
          image:
            "https://www.prydwen.gg/static/66518e3ced1ce5673cf898e741f1262e/d8057/category_free.webp",
          link: "/free-characters",
        },
        {
          name: "Tier List",
          image:
            "https://www.prydwen.gg/static/4efbd4a0e4412f6545894b6aeb89c72d/d8057/category_tier.webp",
          link: "/tier-list",
        },
      ],
    },
    {
      title: "Database",
      items: [
        {
          name: "Agents",
          image:
            "https://www.prydwen.gg/static/f4cf322b954e334067b5ce50efabf6af/d8057/category_characters.webp",
          link: "/agents",
        },
        {
          name: "Bangboo",
          image:
            "https://www.prydwen.gg/static/1b169239f763dc0d1e18d8e13d3a2f1e/d8057/category_bangboo.webp",
          link: "/bangboo",
        },
        {
          name: "Drive Disks",
          image:
            "https://www.prydwen.gg/static/808dc877d8ed04b8f22b9e4b3b535ca9/d8057/category_disk.webp",
          link: "/drive-disks",
        },
        {
          name: "W-Engines",
          image:
            "https://www.prydwen.gg/static/7dfb4b016f1ed621e048111c924314fd/d8057/category_engines.webp",
          link: "/w-engines",
        },
      ],
    },
    {
      title: "Guides",
      items: [
        {
          name: "Combat system",
          image:
            "https://www.prydwen.gg/static/da3a98e291ba6d934eff480d76798470/d8057/category_combat.webp",
          link: "/combat-system",
        },
        {
          name: "Attributes & Specialties",
          image:
            "https://www.prydwen.gg/static/0c45d329afdfd4852181d31d7d9592c5/d8057/category_attributes.webp",
          link: "/attributes",
        },
        {
          name: "Agents Progression",
          image:
            "https://www.prydwen.gg/static/0f8ae29a33405aa3eee43c150215c593/d8057/category_agents.webp",
          link: "/agents-progression",
        },
        {
          name: "Gacha system",
          image:
            "https://www.prydwen.gg/static/6e0a44f1cf2402f729239f4f5f583ce2/d8057/category_gacha.webp",
          link: "/gacha-system",
        },
        {
          name: "Game Modes",
          image:
            "https://www.prydwen.gg/static/016bf1a81f8888072090a6c7c8568c88/d8057/category_modes.webp",
          link: "/game-modes",
        },
        {
          name: "Drive Disks Stats",
          image:
            "https://www.prydwen.gg/static/7a5ba2e04ccde0fd8cb316b523165ce4/d8057/category_2.webp",
          link: "/drive-disks-stats",
        },
        {
          name: "Drive Disks Sets",
          image:
            "https://www.prydwen.gg/static/3b9fae70d7716325b31a55debad5003d/d8057/category_disk2.webp",
          link: "/drive-disks-sets",
        },
        {
          name: "W-Engines system",
          image:
            "https://www.prydwen.gg/static/5d6514a63cfe6fb7cc007c808bd7be33/d8057/category_engine2.webp",
          link: "/w-engines-system",
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-900/80 p-4 mt-6 backdrop-blur-md rounded-lg">
      <h2 className="text-white text-xl font-semibold mb-4">SHORTCUTS</h2>
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-6">
          <h3 className="text-white text-lg font-semibold mb-2">{section.title}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {section.items.map((item, itemIndex) => (
              <a
                key={itemIndex}
                href={item.link}
                className="flex flex-col items-center bg-gray-800/80 p-4 rounded shadow-lg transition-transform transform hover:scale-105"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-32 object-cover rounded"
                />
                <p className="text-white mt-2 text-center">{item.name}</p>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
