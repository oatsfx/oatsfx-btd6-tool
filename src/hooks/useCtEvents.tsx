import { useEffect, useMemo, useState } from "react";
import { CTData, CTSeed, Tile } from "types/ct";

export const useCtEvents = () => {
  const url = "https://storage.googleapis.com/btd6-ct-map/event-seeds.json";

  const [data, setData] = useState<CTSeed[]>([]);
  const [loading, setLoading] = useState(true);

  useMemo(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData: string[] = await response.json();
        //jsonData.reverse();
        const newData: CTSeed[] = jsonData.flatMap((x, i) =>
          x ? [{ id: x, number: i }] : []
        );
        newData.reverse();
        setData(newData);
        console.log(jsonData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, loading };
};
