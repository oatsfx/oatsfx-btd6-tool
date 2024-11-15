import { useEffect, useState } from "react";
import { HeroCostsData, TowerCostsData } from "types/costs";

export const useTowerCostData = () => {
  const url =
    "https://raw.githubusercontent.com/hemisemidemipresent/cyberquincy/master/jsons/costs.json";
  const [data, setData] = useState<TowerCostsData>({} as TowerCostsData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        Object.entries(jsonData).forEach((obj) => {
          jsonData[
            obj[0]
              .replace("druid_monkey", "Druid")
              .replace("engineer", "EngineerMonkey")
              .replace(/(_\w)/g, (match) => match[1].toUpperCase()) // Capitalize letters after underscores
              .replace(/^./, (match) => match.toUpperCase())
          ] = jsonData[obj[0]];
          delete jsonData[obj[0]];
        });
        setData(jsonData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading };
};
