import { useEffect, useMemo, useState } from "react";
import { CTData, Tile, emptyTile } from "types/ct";

export const useCtData = () => {
  const url = "https://sciplypandora.github.io/static/json/configs/CT55.json";
  const [data, setData] = useState<CTData>({
    size: -1,
    event: -1,
    tiles: { [""]: emptyTile },
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        for (let key in jsonData.tiles) {
          if (!jsonData.tiles[key].map) {
            delete jsonData.tiles[key];
          }
        }
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
