import { Loading } from "components/Loading";
import ctIds from "configs/ctIds.config";
import { useCtDailyRelics } from "hooks/useCtDailyRelics";
import { useCtData } from "hooks/useCtData";
import { useCtEventRelics } from "hooks/useCtEventRelics";
import { useLeaderboard } from "hooks/useLeaderboard";
import { useEffect, useState } from "react";
import { LocalBattle, LocalTeam } from "types/localBattle";
import {
  formatDateToEventHighlightDate,
  formatGameEntityName,
  formatGoldenAppleDiscordEmote,
  placeToCtHistoryEmote,
  placeToCtTeamLocalMedal,
  placeToCtTeamMedal,
  roundEven5,
} from "util/converters";

const Playground: React.FC = () => {
  const [playgroundInput, setPlaygroundInput] = useState<number>(0);

  const [eventNum, setEventNum] = useState<number>(ctIds[0].number);

  const { data: ctData, loading: ctLoading } = useCtData(eventNum);
  const { data: eventRelics, loading: eventRelicsLoading } =
    useCtEventRelics(eventNum);
  const { data: dailyRelics, loading: dailyRelicsLoading } =
    useCtDailyRelics(eventNum);

  const [localBattles, setLocalBattles] = useState<LocalBattle[]>([]);

  const createDefaultTeam = (): LocalTeam => ({
    name: "",
    globalPosition: -1,
    truce: false,
    isAyo: false,
  });

  const [inProgressLocalBattle, setInProgressLocalBattle] =
    useState<LocalBattle>({
      teams: Array.from({ length: 6 }, createDefaultTeam),
    });

  const [page, setPage] = useState(1);

  const {
    data: leaderboardData,
    events: eventData,
    loading,
    error,
  } = useLeaderboard("CtTeam", ctIds.length - eventNum, page, undefined, 4);

  const totalLoading =
    loading || ctLoading || eventRelicsLoading || dailyRelicsLoading;
  const isError = error;

  const addLocalBattle = () => {
    const newLocalBattles = [...localBattles];
    const trimmedLocalBattle = inProgressLocalBattle;
    trimmedLocalBattle.teams = trimmedLocalBattle.teams.filter((x) => x.name);

    if (trimmedLocalBattle.teams.length <= 1) {
      return;
    }

    if (newLocalBattles.includes(inProgressLocalBattle)) {
      return;
    }

    newLocalBattles.push(inProgressLocalBattle);
    console.log(newLocalBattles);
    setLocalBattles(newLocalBattles);
    setInProgressLocalBattle({
      teams: Array.from({ length: 6 }, createDefaultTeam),
    });
  };

  const addLocalTeam = (battle: LocalBattle) => {
    if (battle.teams.length === 6) {
      return battle;
    }
    const newTeams = [...battle.teams];
    newTeams.push(createDefaultTeam());
    battle.teams = newTeams;
    console.log(battle);
    return battle;
  };

  const updateInProg = () => {
    const localBattle: LocalBattle = { teams: [] };
    console.log(inProgressLocalBattle.teams.length);
    inProgressLocalBattle.teams.map((x, index) => {
      const teamName = document.getElementById(
        `team-${index}-name`
      ) as HTMLSelectElement;
      const ayo = document.getElementById(
        `team-${index}-ayo`
      ) as HTMLInputElement;
      const truce = document.getElementById(
        `team-${index}-truce`
      ) as HTMLInputElement;

      const globalPosition = leaderboardData.body.findIndex(
        (team) => team.displayName === teamName.value.toUpperCase()
      );

      localBattle.teams.push({
        name: teamName.value,
        globalPosition: globalPosition,
        truce: truce.checked,
        isAyo: ayo.checked,
      });
    });
    console.log(localBattle);
    setInProgressLocalBattle(localBattle);
  };

  const getMedalNum = (pos: number): number => {
    if (pos >= 1 && pos <= 3) return pos;
    if (pos > 3 && pos <= 25) return 25;
    if (pos > 25 && pos <= 100) return 100;
    return -1;
  };

  return (
    <div className="flex flex-col items-center align-center justify-center">
      <p className="font-bold text-2xl py-2 font-display tracking-tighter text-accent">
        Playground
      </p>
      <div className="flex items-center gap-4 py-2">
        <label className="input input-bordered flex items-center gap-2">
          <input
            className="font-medium text-lg max-w-40"
            type="text"
            inputMode="numeric"
            placeholder="roundEven5 Playground"
            onChange={(e: any) => {
              setPlaygroundInput(Number(e.target.value));
            }}
          />
        </label>
        <p id="roundEven5-result">
          {roundEven5(playgroundInput * 0.85)} ({playgroundInput * 0.85})
        </p>
      </div>
      <div className="divider" />
      <div className="flex flex-col items-center gap-4 py-2">
        <div className="flex items-center gap-4">
          <p className="text-nowrap">Select a CT event:</p>
          <select
            id="ct-select"
            className="select select-bordered w-full max-w-xs"
            onChange={(e) => {
              console.log(e.target.options.selectedIndex);
            }}
            value={eventNum}
          >
            {ctIds.map((x) => (
              <option
                key={x.number}
                value={x.number}
                onClick={() => setEventNum(x.number)}
              >
                {x.number} ({x.id})
              </option>
            ))}
          </select>
        </div>
        <p>Click the text you want to copy.</p>
        <div className="divider" />

        {totalLoading ? (
          <Loading />
        ) : (
          <>
            <div
              className="hover:cursor-pointer"
              onClick={() => {
                const stringToCopy =
                  `Event ${eventNum} (${formatDateToEventHighlightDate(
                    eventData[ctIds.length - eventNum].start
                  )}-${formatDateToEventHighlightDate(
                    eventData[ctIds.length - eventNum].end
                  )})`
                    .split("\n")
                    .map((line) => line.trim())
                    .join("\n");
                navigator.clipboard.writeText(stringToCopy);
                console.log(`copied: ${stringToCopy}`);
              }}
            >
              <p className="font-bold text-2xl">
                Event {eventNum} (
                {formatDateToEventHighlightDate(
                  eventData[ctIds.length - eventNum].start
                )}
                -
                {formatDateToEventHighlightDate(
                  eventData[ctIds.length - eventNum].end
                )}
                )
              </p>
            </div>
            <div className="divider" />
            <div
              className="hover:cursor-pointer"
              onClick={() => {
                const stringToCopy = `## Event ID: \`${
                  eventData[ctIds.length - eventNum].id
                }\`

                ## Event Timeline:
                <t:${eventData[ctIds.length - eventNum].start / 1000}> - <t:${
                  eventData[ctIds.length - eventNum].end / 1000
                }>
                
                ### Event Relics:
                ${eventRelics
                  .map(
                    (x) =>
                      `- ${formatGameEntityName(
                        x
                      )} ${formatGoldenAppleDiscordEmote(x)}`
                  )
                  .join("\n")}
                  
                ### Daily Relics:
                ${dailyRelics
                  .map(
                    (x) =>
                      `- ${formatGameEntityName(
                        x
                      )} ${formatGoldenAppleDiscordEmote(x)}`
                  )
                  .join("\n")}`
                  .split("\n")
                  .map((line) => line.trim())
                  .join("\n");
                navigator.clipboard.writeText(stringToCopy.replace("\t", ""));
                console.log(`copied: ${stringToCopy}`.replace("\t", ""));
              }}
            >
              <p className="font-bold text-xl flex">
                Event ID: {eventData[ctIds.length - eventNum].id}
              </p>
              <p className="font-bold text-xl">Event Timeline:</p>
              <p className="">
                {"<"}t:
                {eventData[ctIds.length - eventNum].start / 1000}
                {">"} - {"<"}t:
                {eventData[ctIds.length - eventNum].end / 1000}
                {">"}
              </p>
              <p className="font-bold text-xl">Event Relics:</p>
              <ul className="list-disc">
                {eventRelics.map((x) => (
                  <li>
                    {formatGameEntityName(x)} {formatGoldenAppleDiscordEmote(x)}
                  </li>
                ))}
              </ul>
              <p className="font-bold text-xl">Daily Relics:</p>
              <ul className="list-disc">
                {dailyRelics.map((x) => (
                  <li>
                    {formatGameEntityName(x)} {formatGoldenAppleDiscordEmote(x)}
                  </li>
                ))}
              </ul>
            </div>

            <div className="divider" />

            {isError ? (
              <>Failed to load data. {error}</>
            ) : (
              <>
                <button
                  className={"btn"}
                  onClick={() =>
                    (
                      document.getElementById(
                        "local-battle-modal"
                      ) as HTMLFormElement
                    ).showModal()
                  }
                >
                  Add Local Battle
                </button>
                <dialog id="local-battle-modal" className="modal">
                  <div className="modal-box max-w-3xl">
                    <h3 className="font-bold text-lg text-primary">
                      Add Local Battle
                    </h3>
                    <p>Add a local battle that appeared this week.</p>
                    <p className="py-4">
                      This tool will attempt to find the team's name in the top
                      100 global leaderboard when you create the local battle.
                      For it to do that, enter it as it appears in-game. Not
                      case sensitive.
                    </p>
                    <div className="flex flex-col items-center gap-2">
                      <p>{inProgressLocalBattle.teams.length}</p>
                      {inProgressLocalBattle.teams.map((x, index) => (
                        <div className="w-2/3 flex flex-col items-center gap-1">
                          <label className="input input-bordered flex items-center gap-2 w-full">
                            <img
                              src={placeToCtTeamLocalMedal(index + 1)}
                              className="w-[24px]"
                            />
                            <img
                              src={placeToCtTeamMedal(
                                x.globalPosition + 1,
                                eventData[ctIds.length - eventNum].totalScores!
                              )}
                              className="w-[24px]"
                            />
                            <input
                              className="font-semibold w-full"
                              type="text"
                              placeholder="Team Name"
                              value={x.name}
                              id={"team-" + index + "-name"}
                              onChange={(x) => {
                                updateInProg();
                              }}
                            />
                          </label>
                          <div className="flex gap-4">
                            <label className="flex gap-4 cursor-pointer items-center">
                              <input
                                type="checkbox"
                                className="checkbox"
                                id={"team-" + index + "-truce"}
                                onChange={(x) => {
                                  updateInProg();
                                }}
                              />
                              <span className="label-text">Truce</span>
                            </label>
                            <label className="flex gap-4 cursor-pointer items-center">
                              <input
                                type="checkbox"
                                className="checkbox"
                                id={"team-" + index + "-ayo"}
                                onChange={(x) => {
                                  updateInProg();
                                }}
                              />
                              <span className="label-text">👀</span>
                            </label>
                          </div>
                        </div>
                      ))}
                      <button
                        className="btn btn-success"
                        onClick={() => {
                          addLocalBattle();
                        }}
                      >
                        Add Battle
                      </button>
                    </div>
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn outline outline-1 outline-error text-error">
                          Close
                        </button>
                      </form>
                    </div>
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                <div
                  className="hover:cursor-pointer"
                  onClick={() => {
                    const stringToCopy = `# Event Leaderboard:
                      ${leaderboardData.body
                        .slice(0, 3)
                        .map(
                          (x, index) =>
                            `${placeToCtHistoryEmote(
                              index + 1,
                              eventData[ctIds.length - eventNum].totalScores!
                            )} **${x.displayName}** | :CTPoints: \`${
                              x.score
                            }\` ${
                              leaderboardData.body[0].score - x.score > 0
                                ? `(:small_red_triangle_down: \`${
                                    leaderboardData.body[0].score - x.score
                                  }\`)`
                                : ""
                            }`
                        )
                        .join("\n")}`
                      .split("\n")
                      .map((line) => line.trim())
                      .join("\n");
                    navigator.clipboard.writeText(
                      stringToCopy.replace("\t", "")
                    );
                    console.log(`copied: ${stringToCopy}`.replace("\t", ""));
                  }}
                >
                  <p className="font-bold text-xl">Event Leaderboard:</p>
                  {leaderboardData.body.slice(0, 3).map((x, index) => (
                    <p>
                      {placeToCtHistoryEmote(
                        index + 1,
                        eventData[ctIds.length - eventNum].totalScores!
                      )}{" "}
                      <span className="font-bold">{x.displayName}</span> |
                      :CTPoints: {x.score}{" "}
                      {leaderboardData.body[0].score - x.score > 0
                        ? `(:small_red_triangle_down: ${
                            leaderboardData.body[0].score - x.score
                          })`
                        : ""}
                    </p>
                  ))}
                  <p className="font-bold text-xl">Local Battles:</p>
                  {localBattles.map((battle, index) => (
                    <div>
                      {battle.teams.map((team, teamIndex) => (
                        <p>
                          {teamIndex <= 3 ? `:LT${teamIndex + 1}:` : ":x:"}
                          {team.isAyo ? ":eyes:" : ""}:GT
                          {getMedalNum(team.globalPosition + 1)}: {team.name}
                          {team.truce ? " :handshake:" : ""}
                        </p>
                      ))}
                      <button
                        className={"btn"}
                        onClick={() =>
                          (
                            document.getElementById(
                              "edit-local-battle-modal-" + index
                            ) as HTMLFormElement
                          ).showModal()
                        }
                      >
                        Edit Local Battle
                      </button>
                      <dialog
                        id={"edit-local-battle-modal-" + index}
                        className="modal"
                      >
                        <div className="modal-box max-w-3xl">
                          <h3 className="font-bold text-lg text-primary">
                            Edit Local Battle
                          </h3>
                          <p>Edit a local battle that appeared this week.</p>
                          <p className="py-4">
                            This tool will attempt to find the team's name in
                            the top 100 global leaderboard when you create the
                            local battle. For it to do that, enter it as it
                            appears in-game. Not case sensitive.
                          </p>
                          <div className="flex flex-col items-center gap-2">
                            {battle.teams.map((x, index) => (
                              <div className="w-2/3 flex flex-col items-center gap-1">
                                <label className="input input-bordered flex items-center gap-2 w-full">
                                  <img
                                    src={placeToCtTeamLocalMedal(index + 1)}
                                    className="w-[24px]"
                                  />
                                  <img
                                    src={placeToCtTeamMedal(
                                      x.globalPosition + 1,
                                      eventData[ctIds.length - eventNum]
                                        .totalScores!
                                    )}
                                    className="w-[24px]"
                                  />
                                  <input
                                    className="font-semibold w-full"
                                    type="text"
                                    placeholder="Team Name"
                                    value={x.name}
                                    id={"team-" + index + "-name"}
                                    onChange={(x) => {
                                      updateInProg();
                                    }}
                                  />
                                </label>
                                <div className="flex gap-4">
                                  <label className="flex gap-4 cursor-pointer items-center">
                                    <input
                                      type="checkbox"
                                      className="checkbox"
                                      id={"team-" + index + "-truce"}
                                      onChange={(x) => {
                                        updateInProg();
                                      }}
                                    />
                                    <span className="label-text">Truce</span>
                                  </label>
                                  <label className="flex gap-4 cursor-pointer items-center">
                                    <input
                                      type="checkbox"
                                      className="checkbox"
                                      id={"team-" + index + "-ayo"}
                                      onChange={(x) => {
                                        updateInProg();
                                      }}
                                    />
                                    <span className="label-text">👀</span>
                                  </label>
                                </div>
                              </div>
                            ))}
                            <button
                              className="btn btn-success"
                              onClick={() => {
                                addLocalBattle();
                              }}
                            >
                              Add Battle
                            </button>
                          </div>
                          <div className="modal-action">
                            <form method="dialog">
                              {/* if there is a button in form, it will close the modal */}
                              <button className="btn outline outline-1 outline-error text-error">
                                Close
                              </button>
                            </form>
                          </div>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                          <button>close</button>
                        </form>
                      </dialog>
                      <button
                        className={"btn"}
                        onClick={() =>
                          (
                            document.getElementById("") as HTMLFormElement
                          ).showModal()
                        }
                      >
                        x
                      </button>
                    </div>
                  ))}

                  <p className="font-bold text-xl">Other Events:</p>
                </div>
              </>
            )}
          </>
        )}
      </div>
      <div className="divider" />
    </div>
  );
};

export default Playground;
