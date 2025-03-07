import { group } from "console";
import { useLocalRoundData } from "hooks/useLocalRoundData";
import { useEffect, useState } from "react";
import {
  Bloon,
  bloonArray,
  getRoundDurationFrameMs,
  getRoundDurationMs,
  Round,
} from "types/roundSet";
import {
  convertMsToSecondsFormat,
  convertMsToTimeFormat,
} from "util/converters";
import { bloonImage, bloonStyle } from "util/formatters";
import { FaFilter } from "react-icons/fa";
import { Loading } from "components/Loading";

const Rounds: React.FC = () => {
  const [roundSetPos, setRoundSetPos] = useState(0);

  const [selectedBloons, setSelectedBloons] = useState<Bloon[]>([]);
  const [ignoredBloons, setIgnoredBloons] = useState<Bloon[]>([]);

  const [showMissing, setShowMissing] = useState(false);

  const {
    data: roundData,
    roundSetsDefs: roundSets,
    loading: roundLoading,
  } = useLocalRoundData(roundSetPos);

  const handleSelection = (bloon: Bloon) => {
    const newSelectedBloons = [...selectedBloons];
    const newIgnoredBloons = [...ignoredBloons];

    if (newSelectedBloons.includes(bloon)) {
      const index = newSelectedBloons.indexOf(bloon);
      newSelectedBloons.splice(index, 1);
      newIgnoredBloons.push(bloon);
    } else if (newIgnoredBloons.includes(bloon)) {
      const index = newIgnoredBloons.indexOf(bloon);
      newIgnoredBloons.splice(index, 1);
    } else {
      newSelectedBloons.push(bloon);
    }
    setSelectedBloons(newSelectedBloons);
    setIgnoredBloons(newIgnoredBloons);
  };

  useEffect(() => {
    const newSelectedBloons = selectedBloons.reduce((acc: Bloon[], bloon) => {
      console.log(bloon);
      if (
        roundData.rounds.some((round) => {
          return round.bloonGroups.some((group) => {
            return group.bloon === bloon;
          });
        })
      ) {
        acc.push(bloon);
      }
      return acc;
    }, []);
    const newIgnoredBloons = ignoredBloons.reduce((acc: Bloon[], bloon) => {
      console.log(bloon);
      if (
        roundData.rounds.some((round) => {
          return round.bloonGroups.some((group) => {
            return group.bloon === bloon;
          });
        })
      ) {
        acc.push(bloon);
      }
      return acc;
    }, []);
    setSelectedBloons(newSelectedBloons);
    setIgnoredBloons(newIgnoredBloons);
  }, [roundData]);

  return (
    <div className="flex flex-col items-center align-center justify-center">
      <p className="font-bold text-2xl py-2 font-display tracking-tighter text-accent">
        Rounds Utility
      </p>

      {roundLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col w-5/6 items-center justify-center align-center gap-2">
          <div className="flex items-center justify-center gap-6 w-full">
            <div className="flex items-center justify-center gap-6">
              <p>Round Set: </p>
              <select
                id="tile-select"
                className="select select-bordered max-w-xs"
                onChange={(e) => {
                  setRoundSetPos(e.target.options.selectedIndex);
                }}
                value={roundSets[roundSetPos].name}
              >
                {roundSets.map((x, index) => (
                  <option key={index}>{x.name}</option>
                ))}
              </select>
            </div>
            <button
              className={"btn"}
              onClick={() =>
                (
                  document.getElementById("tower-modal") as HTMLFormElement
                ).showModal()
              }
            >
              <FaFilter size={18} />
              Filters
            </button>
          </div>
          <dialog id="tower-modal" className="modal">
            <div className="modal-box max-w-3xl">
              <h3 className="font-bold text-lg flex gap-2 items-center">
                <FaFilter size={14} />
                Filters
              </h3>
              <p className="py-4">
                Add or remove Bloon types when displaying Rounds.
              </p>

              <div className="flex items-center justify-center gap-6">
                <p>Show Missing Bloons: </p>
                <input
                  type="checkbox"
                  className="checkbox"
                  onClick={() => setShowMissing((x) => !x)}
                />
                <button
                  className="btn btn-sm outline outline-1 outline-error text-error"
                  onClick={() => {
                    setIgnoredBloons([]);
                    setSelectedBloons([]);
                  }}
                >
                  Reset Filters
                </button>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex w-full gap-4">
                  <div className="overflow-x-hidden w-full max-h-56 h-56 my-2 py-4 flex flex-col items-center bg-base-200">
                    <p className="font-semibold">Included Bloons</p>
                    <div className="flex w-full px-12 py-4 gap-2 flex-wrap items-center justify-center">
                      {selectedBloons.map((bloon) => (
                        <button
                          className={
                            "py-2 px-2 transition outline outline-0 ease-in-out bg-opacity-20 border-b" +
                            (selectedBloons.includes(bloon)
                              ? " bg-success bg-opacity-25 border-success outline-success"
                              : ignoredBloons.includes(bloon)
                              ? " bg-error bg-opacity-25 border-error outline-error"
                              : " bg-black") +
                            (!roundData.rounds.some((round) => {
                              return round.bloonGroups.some((group) => {
                                return group.bloon === bloon;
                              });
                            })
                              ? " cursor-not-allowed hover:outline-white/25 hover:border-b"
                              : " hover:cursor-pointer hover:bg-opacity-70 hover:outline-1")
                          }
                          onClick={() => {
                            handleSelection(bloon);
                          }}
                          disabled={
                            !roundData.rounds.some((round) => {
                              return round.bloonGroups.some((group) => {
                                return group.bloon === bloon;
                              });
                            })
                          }
                          key={bloon}
                        >
                          <img
                            className={
                              "h-7" +
                              (roundData.rounds.some((round) => {
                                return round.bloonGroups.some((group) => {
                                  return group.bloon === bloon;
                                });
                              })
                                ? ""
                                : " opacity-25")
                            }
                            src={bloonImage[bloon]}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="overflow-x-hidden w-full max-h-56 h-56 my-2 py-4 flex flex-col items-center bg-base-200">
                    <p className="font-semibold">Excluded Bloons</p>
                    <div className="flex w-full px-12 py-4 gap-2 flex-wrap items-center justify-center">
                      {ignoredBloons.map((bloon) => (
                        <button
                          className={
                            "py-2 px-2 transition outline outline-0 ease-in-out bg-opacity-20 border-b" +
                            (selectedBloons.includes(bloon)
                              ? " bg-success bg-opacity-25 border-success outline-success"
                              : ignoredBloons.includes(bloon)
                              ? " bg-error bg-opacity-25 border-error outline-error"
                              : " bg-black") +
                            (!roundData.rounds.some((round) => {
                              return round.bloonGroups.some((group) => {
                                return group.bloon === bloon;
                              });
                            })
                              ? " cursor-not-allowed hover:outline-white/25 hover:border-b"
                              : " hover:cursor-pointer hover:bg-opacity-70 hover:outline-1")
                          }
                          onClick={(e) => {
                            handleSelection(bloon);
                          }}
                          disabled={
                            !roundData.rounds.some((round) => {
                              return round.bloonGroups.some((group) => {
                                return group.bloon === bloon;
                              });
                            })
                          }
                          key={bloon}
                        >
                          <img
                            className={
                              "h-7" +
                              (roundData.rounds.some((round) => {
                                return round.bloonGroups.some((group) => {
                                  return group.bloon === bloon;
                                });
                              })
                                ? ""
                                : " opacity-25")
                            }
                            src={bloonImage[bloon]}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {bloonArray
                    .filter((x) =>
                      !showMissing
                        ? roundData.rounds.some((round) => {
                            return round.bloonGroups.some((group) => {
                              return group.bloon === x;
                            });
                          })
                        : true
                    )
                    .filter(
                      (x) =>
                        !selectedBloons.includes(x) &&
                        !ignoredBloons.includes(x)
                    )
                    .map((bloon) => (
                      <button
                        className={
                          "py-2 px-2 transition outline outline-0 ease-in-out bg-opacity-20 border-b" +
                          (selectedBloons.includes(bloon)
                            ? " bg-success bg-opacity-25 border-success outline-success"
                            : ignoredBloons.includes(bloon)
                            ? " bg-error bg-opacity-25 border-error outline-error"
                            : " bg-black") +
                          (!roundData.rounds.some((round) => {
                            return round.bloonGroups.some((group) => {
                              return group.bloon === bloon;
                            });
                          })
                            ? " cursor-not-allowed hover:outline-white/25 hover:border-b"
                            : " hover:cursor-pointer hover:bg-opacity-70 hover:outline-1")
                        }
                        onClick={(e) => {
                          handleSelection(bloon);
                        }}
                        disabled={
                          !roundData.rounds.some((round) => {
                            return round.bloonGroups.some((group) => {
                              return group.bloon === bloon;
                            });
                          })
                        }
                        key={bloon}
                      >
                        <img
                          className={
                            "h-7" +
                            (roundData.rounds.some((round) => {
                              return round.bloonGroups.some((group) => {
                                return group.bloon === bloon;
                              });
                            })
                              ? ""
                              : " opacity-25")
                          }
                          src={bloonImage[bloon]}
                        />
                      </button>
                    ))}
                </div>
                <i>
                  Clicking a bloon includes it. Click it again to exclude it.
                </i>
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
          <p>
            Showing{" "}
            {
              roundData.rounds.filter((round) => {
                if (
                  ignoredBloons.some((bloon) =>
                    round.bloonGroups.some((group) => group.bloon === bloon)
                  )
                ) {
                  return false;
                }
                if (
                  selectedBloons.every((bloon) =>
                    round.bloonGroups.some((group) => group.bloon === bloon)
                  )
                ) {
                  return true;
                }
              }).length
            }{" "}
            round
            {roundData.rounds.filter((round) => {
              if (
                ignoredBloons.some((bloon) =>
                  round.bloonGroups.some((group) => group.bloon === bloon)
                )
              ) {
                return false;
              }
              if (
                selectedBloons.every((bloon) =>
                  round.bloonGroups.some((group) => group.bloon === bloon)
                )
              ) {
                return true;
              }
            }).length === 1
              ? ""
              : "s"}{" "}
            of {roundData.rounds.length}
          </p>
          {roundData.rounds
            .filter((round) => {
              if (
                ignoredBloons.some((bloon) =>
                  round.bloonGroups.some((group) => group.bloon === bloon)
                )
              ) {
                return false;
              }
              if (
                selectedBloons.every((bloon) =>
                  round.bloonGroups.some((group) => group.bloon === bloon)
                )
              ) {
                return true;
              }
            })
            .map((round) => (
              <div
                className="flex flex-col bg-black/25 p-4 gap-2 w-full"
                id={"round-" + round.roundNumber}
                key={round.roundNumber}
              >
                <div className="flex justify-between gap-4 bg-black/25 px-2">
                  <p className="text-xl font-semibold">
                    Round {round.roundNumber}
                  </p>
                  <p className="text-lg font-semibold">
                    {convertMsToSecondsFormat(getRoundDurationMs(round))}s
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  {round.bloonGroups
                    .sort((x, y) =>
                      x.start !== y.start
                        ? x.start - y.start
                        : x.start + x.duration - (y.start + y.duration)
                    )
                    .map((group, i) => (
                      <div className="flex gap-4" key={i}>
                        <div
                          className="flex items-center justify-center gap-2 text-nowrap w-[5rem] tooltip"
                          data-tip={group.bloon}
                        >
                          <img
                            className="h-6"
                            style={{
                              left: `${
                                ((group.start * 1000) /
                                  getRoundDurationMs(round)) *
                                100
                              }%`,
                            }}
                            src={bloonImage[group.bloon]}
                          />
                          <p className="text-sm">x{group.count}</p>
                        </div>
                        <div className="flex w-full">
                          <div
                            className={
                              "flex rounded-sm items-center justify-center relative tooltip " +
                              bloonStyle[group.bloon]
                            }
                            style={{
                              width: `${
                                ((group.duration * 1000) /
                                  getRoundDurationMs(round)) *
                                100
                              }%`,
                              left: `${
                                ((group.start * 1000) /
                                  getRoundDurationMs(round)) *
                                100
                              }%`,
                            }}
                            data-tip={group.bloon}
                          >
                            <p className="text-nowrap text-sm text-white font-semibold drop-shadow-[0_1px_1px_rgba(0,0,0,1)]">
                              {Math.round(group.start * 100) / 100}s -{" "}
                              {Math.round(
                                (group.start + group.duration) * 100
                              ) / 100}
                              s
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
        </div>
      )}
      <div className="divider" />
    </div>
  );
};

export default Rounds;
