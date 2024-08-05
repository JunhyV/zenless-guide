import { useEffect, useState } from "react";

export const useParse = (data) => {
  const [parsedData, setParsedData] = useState({});

  useEffect(() => {
    if (data) {
      try {
        const parsed = JSON.parse(data);
        setParsedData(parsed);
      } catch (e) {
        console.error("Failed to parse JSON", e);
        setParsedData({});
      }
    }
  }, [data]);

  return { parsedData };
};
