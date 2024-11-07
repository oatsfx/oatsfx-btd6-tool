import { LeaderboardCard } from "components/LeaderboardCard";
import { SelectionRow } from "components/SelectionRow";
import { useLeaderboard } from "hooks/useLeaderboard";
import { useEffect, useState } from "react";
import { BossMode, EventType } from "types/events";
import { Alert } from "types/util";
import {
  appendOrdinalSuffix,
  placeToRaceMedal,
  prettyEventNames,
} from "util/converters";

const Leaderboard: React.FC = () => {
  const [alert, setAlert] = useState<Alert>({
    alertType: "alert",
    message: "",
  });

  const [leaderboardType, setLeaderboardType] = useState<EventType>("Race");
  const [eventPos, setEventPos] = useState(0);
  const [page, setPage] = useState(1);
  const [bossMode, setBossMode] = useState<BossMode>("Standard");
  const [firstPlaceScore, setFirstPlaceScore] = useState<number>(-1);

  const {
    data: leaderboardData,
    events: eventData,
    profileData,
    loading,
    error,
  } = useLeaderboard(leaderboardType, eventPos, page, bossMode);

  const handlePageInput = (e: any) => {
    const re = /^[0-9\b]*$/;

    // if value is not blank, then test the regex
    const value: string = e.target.value;

    if (value === "" || re.test(value)) {
      const numVal = Number(value) < 1 ? 1 : Number(value);
      setPage(numVal);
    }
  };

  const getTotalScores = (): number => {
    switch (leaderboardType) {
      case "Boss":
        return eventData[eventPos].totalScores_standard !== undefined
          ? (eventData[eventPos].totalScores_standard as number)
          : 0;
      case "CtPlayer":
        return eventData[eventPos].totalScores_player !== undefined
          ? (eventData[eventPos].totalScores_player as number)
          : 0;
      case "CtTeam":
        return eventData[eventPos].totalScores_team !== undefined
          ? (eventData[eventPos].totalScores_team as number)
          : 0;
      default:
        return eventData[eventPos].totalScores !== undefined
          ? (eventData[eventPos].totalScores as number)
          : 0;
    }
  };

  useEffect(() => {
    if (!loading && page === 1) {
      setFirstPlaceScore(leaderboardData.body[0].score);
    }
  }, [loading]);

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <p className="font-bold text-2xl py-2 font-display tracking-tighter text-accent">
        {prettyEventNames[leaderboardType]} Leaderboard
      </p>

      <div className="flex gap-4">
        <div className="flex flex-col gap-2 items-center">
          <SelectionRow
            selectionId={leaderboardType}
            selectionName={leaderboardType}
            selections={[
              {
                ids: ["Race"],
                name: "Race",
                onClickFunction: () => {
                  setLeaderboardType("Race");
                  setEventPos(0);
                  setAlert({
                    alertType: "alert",
                    message: "",
                  });
                  setPage(1);
                },
              },
              {
                ids: ["Boss", "Boss2", "Boss3", "Boss4"],
                name: "Boss",
                onClickFunction: () => {
                  setLeaderboardType("Boss");
                  setEventPos(0);
                  setAlert({
                    alertType: "alert",
                    message: "",
                  });
                  setPage(1);
                },
              },
              {
                ids: ["CtTeam", "CtPlayer"],
                name: "Contested Territory",
                onClickFunction: () => {
                  setLeaderboardType("CtTeam");
                  setEventPos(0);
                  setAlert({
                    alertType: "alert",
                    message: "",
                  });
                  setPage(1);
                },
              },
            ]}
          />

          {leaderboardType === "CtTeam" || leaderboardType === "CtPlayer" ? (
            <SelectionRow
              selectionId={leaderboardType}
              selectionName={leaderboardType}
              selections={[
                {
                  ids: ["CtTeam"],
                  name: "Team",
                  onClickFunction: () => {
                    setLeaderboardType("CtTeam");
                    setPage(1);
                  },
                },
                {
                  ids: ["CtPlayer"],
                  name: "Player",
                  onClickFunction: () => {
                    setLeaderboardType("CtPlayer");
                    setPage(1);
                  },
                },
              ]}
            />
          ) : (
            <></>
          )}

          {leaderboardType === "Boss" ||
          leaderboardType === "Boss2" ||
          leaderboardType === "Boss3" ||
          leaderboardType === "Boss4" ? (
            <>
              <SelectionRow
                selectionId={bossMode}
                selectionName={bossMode}
                selections={[
                  {
                    ids: ["Standard"],
                    name: "Standard",
                    onClickFunction: () => {
                      setBossMode("Standard");
                      setPage(1);
                    },
                  },
                  {
                    ids: ["Elite"],
                    name: "Elite",
                    onClickFunction: () => {
                      setBossMode("Elite");
                      setPage(1);
                    },
                  },
                ]}
              />
              <SelectionRow
                selectionId={leaderboardType}
                selectionName={leaderboardType}
                selections={[
                  {
                    ids: ["Boss"],
                    name: "Solo",
                    onClickFunction: () => {
                      setLeaderboardType("Boss");
                      setAlert({
                        alertType: "alert",
                        message: "",
                      });
                      setPage(1);
                    },
                  },
                  {
                    ids: ["Boss2"],
                    name: "Duo",
                    onClickFunction: () => {
                      setLeaderboardType("Boss2");
                      setAlert({
                        alertType: "alert-warning",
                        message:
                          "Co-op leaderboards aren't offically supported yet. Some values will be wrong, I can't fix that.",
                      });
                      setPage(1);
                    },
                  },
                  {
                    ids: ["Boss3"],
                    name: "Trio",
                    onClickFunction: () => {
                      setLeaderboardType("Boss3");
                      setAlert({
                        alertType: "alert-warning",
                        message:
                          "Co-op leaderboards aren't offically supported yet. Some values will be wrong, I can't fix that.",
                      });
                      setPage(1);
                    },
                  },
                  {
                    ids: ["Boss4"],
                    name: "Quad",
                    onClickFunction: () => {
                      setLeaderboardType("Boss4");
                      setAlert({
                        alertType: "alert-warning",
                        message:
                          "Co-op leaderboards aren't offically supported yet. Some values will be wrong, I can't fix that.",
                      });
                      setPage(1);
                    },
                  },
                ]}
              />
            </>
          ) : (
            <></>
          )}
        </div>

        <div className="divider divider-horizontal" />
        {!loading ? (
          <div className="flex items-center gap-4">
            <p className="text-nowrap">
              Select a {prettyEventNames[leaderboardType]} event:
            </p>
            <select
              id="tile-select"
              className="select select-bordered w-full max-w-xs"
              onChange={(e) => {
                console.log(e.target.options.selectedIndex);
                setEventPos(e.target.options.selectedIndex);
              }}
              value={
                eventData[eventPos].name
                  ? eventData[eventPos].name
                  : eventData[eventPos].id
              }
            >
              {eventData.map((x, index) => (
                <option key={index}>{x.name ? x.name : x.id}</option>
              ))}
            </select>
          </div>
        ) : (
          <span className="loading loading-spinner loading-lg"></span>
        )}
      </div>

      {!loading ? (
        <>
          <div className="join">
            <button
              className={
                "join-item btn" + (!leaderboardData.prev ? " btn-disabled" : "")
              }
              onClick={() => setPage(1)}
            >
              «
            </button>
            <button
              className={
                "join-item btn" + (!leaderboardData.prev ? " btn-disabled" : "")
              }
              onClick={() => setPage((prev) => prev - 1)}
            >
              ‹
            </button>
            <label className="input join-item bg-base-200 hover:bg-base-300 flex items-center gap-2 z-50">
              {/* <img src={leastCashImage} className="w-[28px]" /> */}
              <input
                className="font-medium text-lg max-w-40 text-center"
                type="text"
                inputMode="numeric"
                placeholder="Score"
                value={page}
                onChange={handlePageInput}
              />
            </label>
            <button
              className={
                "join-item btn" + (!leaderboardData.next ? " btn-disabled" : "")
              }
              onClick={() => setPage((prev) => prev + 1)}
            >
              ›
            </button>
            <button
              className={
                "join-item btn btn-disabled tooltip" +
                (!leaderboardData.next ? " btn-disabled" : "")
              }
              onClick={() => setPage(25)}
              data-tip="I don't know the max pages for this event."
            >
              »
            </button>
          </div>

          <p>
            Showing players{" "}
            {appendOrdinalSuffix((page - 1) * leaderboardData.body.length + 1)}-
            {appendOrdinalSuffix(page * leaderboardData.body.length)} of{" "}
            {getTotalScores().toLocaleString()} entries.
          </p>
        </>
      ) : (
        <></>
      )}

      {alert.message.length > 0 ? (
        <div role="alert" className={"alert w-2/3 " + alert.alertType}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{alert.message}</span>
        </div>
      ) : (
        <></>
      )}

      {error ? (
        <p>Failed to grab data.</p>
      ) : (
        <>
          {!loading ? (
            leaderboardData.body.map((entry, index) => (
              <LeaderboardCard
                profileData={profileData[entry.profile]}
                entry={entry}
                index={index + (page - 1) * leaderboardData.body.length}
                event={eventData[eventPos]}
                eventType={leaderboardType}
                delta={entry.score - firstPlaceScore}
                key={index}
                bossMode={bossMode}
              />
            ))
          ) : (
            <div className="flex flex-col gap-4 w-full py-2 items-center">
              <div className="skeleton h-14 w-2/3" />
              <div className="skeleton h-14 w-2/3" />
              <div className="skeleton h-14 w-2/3" />
              <div className="skeleton h-14 w-2/3" />
              <div className="skeleton h-14 w-2/3" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Leaderboard;
