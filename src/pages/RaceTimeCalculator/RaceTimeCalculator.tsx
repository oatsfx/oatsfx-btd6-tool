import raceImage from "images/game_types/race.webp";
import { Loading } from "components/Loading";
import { SelectionRow } from "components/SelectionRow";
import { TimeInput } from "components/TimeInput";
import { useLocalRoundData } from "hooks/useLocalRoundData";
import { useEffect, useState } from "react";
import {
  getRoundDurationFrameMs,
  getRoundDurationMs,
  Round,
} from "types/roundSet";
import { convertMsToTimeFormat } from "util/converters";
import { TileSelector } from "components/TileSelector";
import { useCtData } from "hooks/useCtData";
import { useCtEvents } from "hooks/useCtEvents";

const RaceTimeCalculator: React.FC = () => {
  const [startRound, setStartRound] = useState(1);
  const [endRound, setEndRound] = useState(2);
  const [roundSetPos, setRoundSetPos] = useState(0);
  const {
    data: roundData,
    roundSetsDefs: roundSets,
    loading: roundLoading,
  } = useLocalRoundData(roundSetPos);
  const [selectedCalc, setSelectedCalc] = useState<"goal" | "rtime">("rtime");
  const [inputMs, setInputMs] = useState(0);
  const [goalMs, setGoalMs] = useState(0);

  const { data: ctEventData, loading: ctEventLoading } = useCtEvents();
  const [eventNum, setEventNum] = useState<number>(ctEventData.length - 1);

  const { data: ctData, loading: ctLoading } = useCtData(eventNum);
  const [ctScore, setCtScore] = useState(0);
  const [ctMode, setCtMode] = useState(false);
  const [selectedTile, setSelectedTile] = useState("");

  const loading = ctLoading || roundLoading;
  const SEND_DELAY_MS = 200;

  const handleStartChange = (e: any) => {
    const value: number = parseInt(e.target.value, 10);

    if (value > roundData.rounds.length) {
      setStartRound(roundData.rounds.length);
    } else {
      setStartRound(value);
    }

    // End Round management.
    if (value >= endRound) {
      setEndRound(value);
    }
  };

  const handleEndChange = (e: any) => {
    const value: number = parseInt(e.target.value, 10);

    if (value > roundData.rounds.length) {
      setEndRound(roundData.rounds.length);
    } else {
      setEndRound(value);
    }

    // Start Round management.
    if (value <= startRound) {
      setStartRound(value);
    }
  };

  const changeTile = (tile: string) => {
    setSelectedTile(tile);
    console.log(tile);
    console.log(ctData[tile]);
    setEndRound(ctData[tile].GameData.dcModel.startRules.endRound);
  };

  const calculateTime = (start: number, end: number, delay: number): number => {
    const longestRound = calculateLongestRound(start, end);
    const longestRoundDuration = getRoundDurationFrameMs(longestRound);
    const timeToSend = SEND_DELAY_MS * (longestRound.roundNumber - start);

    const finalMs = longestRoundDuration + timeToSend + delay;

    return finalMs;
  };

  const addDelay = (time: number, sendDelay: number) => {
    //const delayFrame = Math.ceil((sendDelay * 60) / 1000) / (60 / 1000);
    return time + 1000 / 60;
    // return time + delayFrame + 1000 / 60;
  };

  const calculateLongestRound = (start: number, end: number): Round => {
    return roundData.rounds
      .filter((x) => x.roundNumber >= start && x.roundNumber <= end)
      .reduce((longestRound, round) => {
        const duration =
          getRoundDurationMs(round) +
          (round.roundNumber - start) * SEND_DELAY_MS;
        const longestDuration =
          getRoundDurationMs(longestRound) +
          (longestRound.roundNumber - start) * SEND_DELAY_MS;
        return longestDuration > duration ? longestRound : round;
      });
  };

  const calculateGoalTime = (
    start: number,
    end: number,
    goal: number,
    ctTime?: number
  ): number => {
    const longestRound = calculateLongestRound(start, end);
    const longestRoundDuration = getRoundDurationFrameMs(longestRound);
    const timeToSend = SEND_DELAY_MS * (longestRound.roundNumber - start);
    const finalMs = goal - (longestRoundDuration + timeToSend + 1000 / 60);

    if (ctTime && ctTime > finalMs && ctMode) {
      return ctTime - finalMs;
    }

    return finalMs < 0 ? 0 : finalMs;
  };

  const calcToString = () =>
    selectedCalc === "goal" ? "Goal Time" : "Race Time";

  const calculateMoreData = (goalTime: number) => {
    const restOfRounds = roundData.rounds
      .slice(calculateLongestRound(startRound, endRound).roundNumber, endRound)
      .sort((x, y) => getRoundDurationMs(y) - getRoundDurationMs(x));

    console.log(restOfRounds);

    let lastRound = calculateLongestRound(startRound, endRound);

    return restOfRounds.reduce((acc, round) => {
      if (round.roundNumber < lastRound.roundNumber) {
        return acc; // Skip this iteration (like continue)
      }

      const startRnd = lastRound;
      const endRnd = round;
      const time =
        goalTime -
        (getRoundDurationFrameMs(endRnd) +
          (endRnd.roundNumber - startRnd.roundNumber - 1) * SEND_DELAY_MS);

      console.log({
        start: startRnd.roundNumber,
        end: endRnd.roundNumber,
        time,
      });

      lastRound = endRnd;

      if (endRnd.roundNumber > startRnd.roundNumber) {
        acc.push({ startRound: startRnd, endRound: endRnd, time: time });
      }

      return acc;
    }, [] as { startRound: typeof lastRound; endRound: typeof lastRound; time: number }[]);
  };

  useEffect(() => {
    if (!roundLoading) {
      //setEndRound(80);
      setEndRound(roundData.rounds.length);
    }
  }, [roundLoading]);

  return (
    <div className="flex flex-col items-center align-center justify-center">
      <p className="font-bold text-2xl py-2 font-display tracking-tighter text-accent">
        Race Time Calculator
      </p>

      {roundLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col w-1/2 items-center justify-center align-center gap-2">
          <div className="flex items-center gap-2 w-3/4">
            <p className="w-1/2">Round Set:</p>
            <select
              id="tile-select"
              className="select select-bordered w-full max-w-xs my-4"
              onChange={(e) => {
                setRoundSetPos(e.target.options.selectedIndex);
                console.log(roundSetPos);
              }}
              value={roundSets[roundSetPos].name}
            >
              {roundSets.map((x, i) => (
                <option key={i} disabled={!x.isComplete}>
                  {x.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex w-full items-center gap-4 pt-4">
            <input
              type="range"
              min={1}
              max={roundData.rounds.length}
              value={startRound}
              onChange={handleStartChange}
              disabled={ctMode && selectedCalc === "goal"}
              className="range"
            />
            <label className="input input-bordered flex items-center gap-2">
              <input
                className="font-medium text-lg max-w-10"
                type="text"
                inputMode="numeric"
                placeholder="Start"
                value={startRound}
                onChange={handleStartChange}
                disabled={ctMode && selectedCalc === "goal"}
              />
            </label>
          </div>
          <div className="flex w-full items-center gap-4">
            <input
              type="range"
              min={1}
              max={roundData.rounds.length}
              value={endRound}
              onChange={handleEndChange}
              disabled={ctMode && selectedCalc === "goal"}
              className="range"
            />
            <label className="input input-bordered flex items-center gap-2">
              <input
                className="font-medium text-lg max-w-10"
                type="text"
                inputMode="numeric"
                placeholder="End"
                value={endRound}
                onChange={handleEndChange}
                disabled={ctMode && selectedCalc === "goal"}
              />
            </label>
          </div>
          <SelectionRow
            selectionId={selectedCalc}
            selectionName={calcToString()}
            selections={[
              {
                ids: ["rtime"],
                name: "Race Time",
                onClickFunction: () => {
                  setSelectedCalc("rtime");
                },
              },
              {
                ids: ["goal"],
                name: "Goal Time",
                onClickFunction: () => {
                  setSelectedCalc("goal");
                },
              },
            ]}
          />
          {selectedCalc === "goal" ? (
            <>
              <div className="pt-4">
                <label className="flex gap-4 cursor-pointer items-center">
                  <input
                    type="checkbox"
                    checked={ctMode}
                    className="checkbox"
                    onChange={() => setCtMode((p) => !p)}
                  />
                  <span className="label-text">CT Mode</span>
                </label>
              </div>
              {ctMode ? (
                <TileSelector
                  data={ctData}
                  loading={loading}
                  selectedTile={selectedTile}
                  gameType="race"
                  changeTile={changeTile}
                />
              ) : (
                <></>
              )}
              <div className="flex gap-6 items-center py-4">
                <div className="items-center text-center">
                  <p>Time you want to achieve:</p>
                  <TimeInput value={goalMs} onChange={setGoalMs} />
                </div>

                {ctMode ? (
                  <div className="items-center text-center">
                    <p>Time on the CT Tile:</p>
                    <TimeInput value={ctScore} onChange={setCtScore} />
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </>
          ) : (
            <div className="items-center text-center py-6">
              <p>
                Send from Round{" "}
                <span className="text-xl font-bold">{startRound}</span> to Round{" "}
                <span className="text-xl font-bold">
                  {calculateLongestRound(startRound, endRound).roundNumber}
                </span>{" "}
                at:
              </p>
              <TimeInput value={inputMs} onChange={setInputMs} />
            </div>
          )}
          <div className="flex flex-col gap-2 items-center outline outline-2 outline-white/50 p-4">
            {selectedCalc === "goal" ? (
              <>
                {goalMs <
                addDelay(
                  calculateTime(startRound, endRound, inputMs),
                  inputMs
                ) ? (
                  <p>Not possible.</p>
                ) : (
                  <>
                    <p className="text-center">
                      You need to send from Round{" "}
                      <span className="text-xl font-bold">{startRound}</span> to
                      Round{" "}
                      <span className="text-xl font-bold">
                        {
                          calculateLongestRound(startRound, endRound)
                            .roundNumber
                        }
                      </span>{" "}
                      before:
                    </p>
                    <div className="text-3xl font-semibold flex items-center gap-2">
                      <img src={raceImage} className="h-[32px]" />
                      {convertMsToTimeFormat(
                        calculateGoalTime(startRound, endRound, goalMs, ctScore)
                      )}
                      <img src={raceImage} className="h-[32px]" />
                    </div>
                    <p>
                      in order to get{" "}
                      <span className="text-xl font-bold">
                        {convertMsToTimeFormat(goalMs)}
                      </span>
                      , assuming you perfect clean.
                    </p>
                  </>
                )}
              </>
            ) : (
              <>
                <p className="text-center">You will get</p>
                <div className="text-3xl font-semibold flex items-center gap-2">
                  <img src={raceImage} className="h-[32px]" />
                  {convertMsToTimeFormat(
                    addDelay(
                      calculateTime(startRound, endRound, inputMs),
                      inputMs
                    )
                  )}
                  <img src={raceImage} className="h-[32px]" />
                </div>
                <p>
                  assuming you perfect clean Round{" "}
                  <span className="text-xl font-bold">
                    {calculateLongestRound(startRound, endRound).roundNumber}
                  </span>{" "}
                  (
                  <span className="text-lg font-medium">
                    {getRoundDurationMs(
                      calculateLongestRound(startRound, endRound)
                    ) / 1000}
                  </span>{" "}
                  seconds).
                </p>
              </>
            )}
          </div>
          <ul className="list-disc items-center">
            {goalMs <
            addDelay(calculateTime(startRound, endRound, inputMs), inputMs) ? (
              <></>
            ) : (
              calculateMoreData(
                selectedCalc === "rtime"
                  ? calculateTime(startRound, endRound, inputMs)
                  : goalMs
              ).map((x, i) => (
                <li key={i}>
                  then send from Round{" "}
                  <span className="text-xl font-bold">
                    {x.startRound.roundNumber}
                  </span>{" "}
                  to Round{" "}
                  <span className="text-xl font-bold">
                    {x.endRound.roundNumber}
                  </span>{" "}
                  before{" "}
                  <span className="text-xl font-bold">
                    {convertMsToTimeFormat(ctMode ? ctScore - x.time : x.time)}
                  </span>
                </li>
              ))
            )}
          </ul>
        </div>
      )}

      <div className="divider" />
    </div>
  );
};

export default RaceTimeCalculator;
