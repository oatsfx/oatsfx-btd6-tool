import { useEffect, useState } from "react";
import { TowerCostsData } from "types/costs";

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
        setData(jsonData);
        console.log(jsonData);
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
