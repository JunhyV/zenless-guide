import React from "react";

const CoreDescription = ({ text }) => {
  const percentageRegex = /(\d+(\.\d+)?(\/\d+(\.\d+)?)+)/g;
  const dmgRegex = /\b(Physical DMG|Ether DMG|Electric DMG|Ice DMG|Fire DMG|Physical Anomaly|Ether Anomaly|Electric Anomaly|Ice Anomaly|Fire Anomaly|Shock|Burning|Corruption|Assault|Freezing)\b/g;

  const dmgStyles = {
    "Physical DMG": "text-yellow-400",
    "Ether DMG": "text-fuchsia-400",
    "Electric DMG": "text-blue-400",
    "Ice DMG": "text-cyan-400",
    "Fire DMG": "text-rose-400",
    "Physical Anomaly": "text-yellow-400",
    "Ether Anomaly": "text-fuchsia-400",
    "Electric Anomaly": "text-blue-400",
    "Ice Anomaly": "text-cyan-400",
    "Fire Anomaly": "text-rose-400",
    "Assault": "text-yellow-400",
    "Corruption": "text-fuchsia-400",
    "Shock": "text-blue-400",
    "Freezing": "text-cyan-400",
    "Burning": "text-rose-400",
  };

  const wrapText = (text) => {
    // Primero, envuelve los porcentajes
    let updatedText = text.replace(percentageRegex, (match) => (
      `<span class="text-amber-400 font-medium">${match}</span>`
    ));

    // Luego, envuelve los tipos de daño
    updatedText = updatedText.replace(dmgRegex, (match) => {
      const className = dmgStyles[match] || "";
      return `<span class="${className}">${match}</span>`;
    });

    return updatedText;
  };

  const htmlContent = wrapText(text);

  return (
    <p className="bg-neutral-600 p-2 lg:text-sm" dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

export default CoreDescription;
