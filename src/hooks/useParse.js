import { useEffect, useState } from "react";

export const useParse = (data) => {
  const [parsedData, setParsedData] = useState({});
  const [keys, setKeys] = useState([]);

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

  useEffect(()=> {
    const getKeys = Object.keys(parsedData);
    setKeys(getKeys);
  }, [parsedData])

  return { parsedData, keys};
};
