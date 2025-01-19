import { useState } from "react";
import { GuildProfileData, PlayerProfileData } from "types/leaderboards";

export const useProfileData = (url: string) => {
  const [data, setData] = useState<PlayerProfileData | GuildProfileData>(
    {} as PlayerProfileData
  );
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      console.log(url);
      if (jsonData.model.name === "_btd6userprofile") {
        setData(jsonData.body as PlayerProfileData);
      } else {
        setData(jsonData.body as GuildProfileData);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    setFetched(true);
  };

  return { data, loading, fetchData, fetched };
};
