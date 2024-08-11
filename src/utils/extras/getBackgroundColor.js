export const getBackgroundColor = (rank) => {
  let bg;
  switch (rank) {
    case "S":
      bg = "bg-gradient-to-b from-yellow-600 to-yellow-400";
    case "A":
      bg = "bg-gradient-to-b from-purple-600 to-purple-400";
    default:
      break;
  }

  return bg;
};
