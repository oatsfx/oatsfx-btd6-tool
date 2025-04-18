import { useEffect, useMemo, useState } from "react";
import { CTData, Tile } from "types/ct";

export const useCtData = (eventId: number) => {
  const url =
    "https://storage.googleapis.com/btd6-ct-map/events/" +
    eventId +
    "/tiles.json";

  const [data, setData] = useState<CTData>({});
  const [loading, setLoading] = useState(true);

  useMemo(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData: CTData = await response.json();
        setData(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [eventId]);

  return { data, loading };
};
