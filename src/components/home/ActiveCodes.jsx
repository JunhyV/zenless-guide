export const ActiveCodes = () => {
  const codes = [
    {
      title: "ZENLESSLAUNCH",
      description: "60 Polychromes + Dennies",
      date: "04.07.2024",
    },
    {
      title: "ZENLESSGIFT",
      description: "50 Polychromes + materials",
      date: "04.07.2024",
    },
    {
      title: "ZZZ2024 / ZZZTVCM",
      description: "50 Polychromes + Dennies",
      date: "04.07.2024",
    },
    { title: "CATCHABOO", description: "30 Polychromes", date: "10.07.2024" },
    { title: "KANURBT5MQ8D", description: "40 Polychromes", date: "10.07.2024" },
  ];
  return (
    <div className="bg-gray-900/90 p-4 mt-6">
      <h2 className="text-white text-xl font-semibold">ACTIVE CODES</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {codes.map((code, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded shadow-lg">
            <h3 className="text-white text-lg font-semibold">{code.title}</h3>
            <p className="text-gray-300 mt-2">{code.description}</p>
            <p className="text-gray-500 mt-1 text-sm">Released on {code.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
