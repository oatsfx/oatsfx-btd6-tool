import { useEffect, useState } from "react";
import { Bloon, RoundSet, RoundSetDef } from "types/roundSet";

export const useLocalRoundData = (pos: number) => {
  const [data, setData] = useState<RoundSet>({} as RoundSet);

  const roundSetsDefs: RoundSetDef[] = [
    { name: "Regular", path: "data/OriginalRounds.json", isComplete: true },
    {
      name: "Alternate Bloons Rounds",
      path: "data/alternateRound140.json",
      isComplete: true,
    },
    { name: "Bloonarius", path: "data/bloonarius.json", isComplete: true },
    { name: "Lych", path: "data/lych.json", isComplete: true },
    { name: "Vortex", path: "data/vortex.json", isComplete: true },
    { name: "Dreadbloon", path: "data/dreadbloon.json", isComplete: true },
    { name: "Phayze", path: "data/phayze.json", isComplete: true },
    {
      name: "Race #291: Density Insanity",
      path: "data/raceExperiment.json",
      isComplete: true,
    },
  ];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(roundSetsDefs[pos].path);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        jsonData.rounds = jsonData.rounds.filter(
          (x: any) => x.roundNumber !== 0
        );
        const uniqueBloons: Bloon[] = [];
        for (let round of jsonData.rounds) {
          for (let group of round.bloonGroups) {
            if (!uniqueBloons.includes(group.bloon)) {
              uniqueBloons.push(group.bloon);
            }
          }
        }
        setData(jsonData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [pos]);

  return { data, roundSetsDefs, loading };
};
