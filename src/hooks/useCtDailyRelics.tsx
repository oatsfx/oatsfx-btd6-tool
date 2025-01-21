import { useMemo, useState } from "react";
import { Relic } from "types/ct";

export const useCtDailyRelics = (eventId: number) => {
  const url =
    "https://storage.googleapis.com/btd6-ct-map/events/" +
    eventId +
    "/daily_powers.json";
  const [data, setData] = useState<Relic[]>([]);
  const [loading, setLoading] = useState(true);

  useMemo(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData: Relic[] = await response.json();
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
