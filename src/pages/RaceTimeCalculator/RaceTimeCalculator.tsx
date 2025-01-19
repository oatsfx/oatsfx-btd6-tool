import { Loading } from "components/Loading";
import { useLocalRoundData } from "hooks/useLocalRoundData";
import { useEffect, useState } from "react";
import {
  getRoundDurationFrameMs,
  getRoundDurationMs,
  Round,
  RoundSetDef,
} from "types/roundSet";
import { convertMsToTimeFormat } from "util/converters";

const RaceTimeCalculator: React.FC = () => {
  const [startRound, setStartRound] = useState(1);
  const [endRound, setEndRound] = useState(2);
  const [roundSetPos, setRoundSetPos] = useState(0);
  const {
    data: roundData,
    roundSetsDefs: roundSets,
    loading: roundLoading,
  } = useLocalRoundData(roundSetPos);

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

  const calculateTime = (start: number, end: number): number => {
    let longestRoundCalc = calculateLongestRound(start, end);
    const longestRoundDuration = getRoundDurationFrameMs(longestRoundCalc);
    const longestRoundTimeSentAt =
      SEND_DELAY_MS * (longestRoundCalc.roundNumber - start);
    return Math.ceil(longestRoundTimeSentAt + longestRoundDuration + 1000 / 60);
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
          <select
            id="tile-select"
            className="select select-bordered w-full max-w-xs"
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
          <div className="flex w-full items-center gap-4">
            <input
              type="range"
              min={1}
              max={roundData.rounds.length}
              value={startRound}
              onChange={handleStartChange}
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
              />
            </label>
          </div>
          <p className="text-lg font-medium text-center">
            Result:
            <br />
            <span className="text-3xl font-semibold">
              {convertMsToTimeFormat(calculateTime(startRound, endRound))}
            </span>
          </p>
          <p>
            assuming you perfect clean Round{" "}
            {calculateLongestRound(startRound, endRound).roundNumber} (
            {getRoundDurationMs(calculateLongestRound(startRound, endRound)) /
              1000}{" "}
            seconds).
          </p>
        </div>
      )}

      <div className="divider font-display pt-[15rem]">FAQ</div>
      <div className="w-2/3 flex flex-col gap-3">
        <p className="text-center">
          Q: What is "min time"?
          <br />
          <span className="font-semibold">
            A: "Min time" is the lowest possible score on a race, that's what
            we're calculating. Any score lower than the "min time" is impossible
            to achieve legitimately.
          </span>
        </p>
        <p className="text-center">
          Q: What is a "perfect clean"?
          <br />
          <span className="font-semibold">
            A: A "perfect clean" is when the last bloon is popped as it spawns
            -- which is the short answer.
          </span>
        </p>
      </div>

      {/* <div className="divider font-display">Notes</div>
      <p className="text-center w-2/3">
        The math behind this is simple:
        <br />
        LONGEST_ROUND_DURATION + (END_ROUND - START_ROUND) * SEND_DELAY
        <br />
        The send delay is a constant and is currently 200 milliseconds, as it is
        in-game.
        <br />
        There is an interesting mechanic with timing and durations with specific
        rounds that adds an extra 10 or 30 milliseconds to the time. I do not
        yet understand how that is created in the game.
      </p> */}

      <div className="divider" />
    </div>
  );
};

export default RaceTimeCalculator;
