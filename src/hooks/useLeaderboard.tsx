import { useMemo, useState } from "react";
import { BossMode, EventType } from "types/events";
import { LeaderboardData, LeaderboardEntry } from "types/leaderboards";
import { Event } from "types/events";

export const useLeaderboard = (
  eventType: EventType,
  eventPos: number,
  page: number,
  bossMode?: BossMode,
  numOfPages: number = 1
) => {
  const [data, setData] = useState<LeaderboardData<LeaderboardEntry[]>>(
    {} as LeaderboardData<LeaderboardEntry[]>
  );
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useMemo(() => {
    const raceUrl = "https://data.ninjakiwi.com/btd6/races/";
    const bossUrl = "https://data.ninjakiwi.com/btd6/bosses/";
    const ctUrl = "https://data.ninjakiwi.com/btd6/ct/";

    const headers: RequestInit = { mode: "cors" };

    const fetchData = async () => {
      setLoading(true);
      setError(false);
      console.log("fetching leaderboards");
      try {
        let url = "";
        if (eventType === "Race") {
          const racesResponse = await fetch(raceUrl);
          const raceData = await racesResponse.json();
          setEvents(raceData.body);

          url = raceData.body[eventPos].leaderboard;
        } else if (eventType === "Boss") {
          const bossesResponse = await fetch(bossUrl);
          const bossData = await bossesResponse.json();
          setEvents(bossData.body);

          if (bossMode === "Elite") {
            url = bossData.body[eventPos].leaderboard_elite_players_1;
          } else {
            url = bossData.body[eventPos].leaderboard_standard_players_1;
          }
        } else if (eventType === "Boss2") {
          const bossesResponse = await fetch(bossUrl);
          const bossData = await bossesResponse.json();
          setEvents(bossData.body);

          if (bossMode === "Elite") {
            url =
              bossData.body[eventPos].leaderboard_elite_players_1.slice(0, -1) +
              "2";
          } else {
            url =
              bossData.body[eventPos].leaderboard_standard_players_1.slice(
                0,
                -1
              ) + "2";
          }
        } else if (eventType === "Boss3") {
          const bossesResponse = await fetch(bossUrl);
          const bossData = await bossesResponse.json();
          setEvents(bossData.body);

          if (bossMode === "Elite") {
            url =
              bossData.body[eventPos].leaderboard_elite_players_1.slice(0, -1) +
              "3";
          } else {
            url =
              bossData.body[eventPos].leaderboard_standard_players_1.slice(
                0,
                -1
              ) + "3";
          }
        } else if (eventType === "Boss4") {
          const bossesResponse = await fetch(bossUrl);
          const bossData = await bossesResponse.json();
          setEvents(bossData.body);

          if (bossMode === "Elite") {
            url =
              bossData.body[eventPos].leaderboard_elite_players_1.slice(0, -1) +
              "4";
          } else {
            url =
              bossData.body[eventPos].leaderboard_standard_players_1.slice(
                0,
                -1
              ) + "4";
          }
        } else if (eventType === "CtTeam") {
          const ctResponse = await fetch(ctUrl);
          const ctData = await ctResponse.json();
          setEvents(ctData.body);

          url = ctData.body[eventPos].leaderboard_team;
        } else {
          const ctResponse = await fetch(ctUrl);
          const ctData = await ctResponse.json();
          setEvents(ctData.body);
          console.log(ctData);

          url = ctData.body[eventPos].leaderboard_player;
        }

        const response = await fetch(url + "?page=" + page, headers);

        const jsonData: LeaderboardData<LeaderboardEntry[]> =
          await response.json();

        if (!jsonData.success) {
          throw new Error("Unsuccessful: " + jsonData.error);
        }

        // Add additional pages to the original JSON.
        // Start at 1 since we already did the 1st page.
        // This starts us at page 2, assuming page = 1.
        console.log(numOfPages);
        for (let i = 1; i < numOfPages; i++) {
          const response = await fetch(url + "?page=" + (page + i), headers);

          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }

          const newJsonData: LeaderboardData<LeaderboardEntry[]> =
            await response.json();

          jsonData.body = jsonData.body.concat(newJsonData.body);
          console.log("got page: ", i);
        }

        if (
          eventType === "Boss2" ||
          eventType === "Boss3" ||
          eventType === "Boss4"
        ) {
          let nextPlayersToCheck = 0;
          switch (eventType) {
            case "Boss2":
              nextPlayersToCheck = 1;
              break;
            case "Boss3":
              nextPlayersToCheck = 2;
              break;
            case "Boss4":
              nextPlayersToCheck = 3;
              break;
            default:
              break;
          }
          const players: { displayName: string; profile: string }[][] = [];
          const indecesToSplice: number[] = [];
          for (let i = 0; i < jsonData.body.length; i++) {
            const playersEntry: { displayName: string; profile: string }[] = [];
            // playersEntry.push({
            //   displayName: jsonData.body[i].displayName,
            //   profile: jsonData.body[i].profile,
            // });
            const currentPlayerIndex = i;
            for (
              let j = currentPlayerIndex + 1;
              j <= currentPlayerIndex + nextPlayersToCheck;
              j++
            ) {
              if (j >= jsonData.body.length) {
                break;
              }
              if (
                jsonData.body[i].scoreParts[0].score ===
                jsonData.body[j].scoreParts[0].score
              ) {
                playersEntry.push({
                  displayName: jsonData.body[j].displayName,
                  profile: jsonData.body[j].profile,
                });
                indecesToSplice.push(j);
                i++;
              }
              players.push(playersEntry);
              jsonData.body[currentPlayerIndex].otherPlayers = playersEntry;
            }
          }
          indecesToSplice.reverse().map((x) => {
            jsonData.body.splice(x, 1);
          });
        }

        setData(jsonData);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [eventType, eventPos, page, bossMode]);

  return { data, events, loading, error };
};
