import React from "react";

export const Community = () => {
  const sections = [
    {
      title: "Meet the team on Discord",
      description:
        "Join the ever-growing community on our Discord (over 53000 members) and meet the team!",
      buttonLabel: "Join our community Discord",
      buttonLink: "https://discord.com/invite/yourdiscordlink",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      image:
        "https://www.prydwen.gg/static/6ff03b393215373ced073b8045c4a7e3/d66e1/community_discord.webp",
      linkText: "Discord",
      linkColor: "text-blue-400",
    },
    {
      title: "Support Prydwen on Ko-Fi",
      description:
        "If you love what we are doing and you would like to support us, you can do it via Ko-Fi and gain some unique benefits in return!",
      buttonLabel: "Support us on Ko-Fi",
      buttonLink: "https://ko-fi.com/yourkofilink",
      buttonColor: "bg-red-600 hover:bg-red-700",
      image:
        "https://www.prydwen.gg/static/6bf173ea46ee6a646f1544839af2a647/d66e1/community_patreon_alt.webp",
      linkText: "Ko-Fi",
      linkColor: "text-red-400",
    },
  ];

  return (
    <div className="bg-gray-900/80 p-4 mt-6 backdrop-blur-md rounded-lg">
      <h2 className="text-white text-xl font-semibold mb-4 border-b-2 border-blue-500 pb-1">
        COMMUNITY
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center bg-gray-800/80 p-4 rounded shadow-lg"
          >
            <img
              src={section.image}
              alt={section.title}
              className="w-full md:w-1/3 h-auto object-cover rounded-lg mb-4 md:mb-0 md:mr-4"
            />
            <div className="flex flex-col items-start">
              <h3 className="text-white text-lg font-semibold mb-2">
                {section.title.split(section.linkText)[0]}
                <a href={section.buttonLink} className={section.linkColor + " font-bold"}>
                  {section.linkText}
                </a>
              </h3>
              <p className="text-gray-300 mb-4">{section.description}</p>
              <a
                href={section.buttonLink}
                className={`text-white ${section.buttonColor} px-4 py-2 rounded shadow-md transition-transform transform hover:scale-105`}
              >
                {section.buttonLabel}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
