export const RenderStats = (stats) => {
  // Convierte la cadena JSON de stats en un objeto
  const statsObj = JSON.parse(stats);

  return (
    <div className="grid grid-cols-2 gap-4">
      {Object.entries(statsObj).map(([key, value]) => (
        <div key={key} className="flex gap-2">
          <strong>{key}:</strong>
          <span>{value}</span>
        </div>
      ))}
    </div>
  );
};
