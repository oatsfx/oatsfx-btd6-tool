import { useState, useEffect } from "react";
import raceImage from "images/game_types/race.webp";
import { convertMsToTimeFormat } from "util/converters";

interface TimeInputProps {
  value: number;
  onChange: (milliseconds: number) => void;
}

const TimeInput = ({ value = 0, onChange }: TimeInputProps) => {
  const [time, setTime] = useState(convertMsToTimeFormat(value));

  useEffect(() => {
    setTime(convertMsToTimeFormat(value)); // Update time when prop changes
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
    const [min, left] = e.target.value.split(":");
    if (!left) {
      return;
    }
    const [sec, ms] = left.split(".");
    if (sec.length > 2) {
      return;
    }
    if (!ms) {
      return;
    }

    console.log(e.target.value);

    const milliseconds = ms
      ? parseInt(ms, 10) * (ms.length === 1 ? 100 : ms.length === 2 ? 10 : 1)
      : 0;
    const seconds = sec ? parseInt(sec, 10) * (sec.length === 1 ? 10 : 1) : 0;

    const rounded = Math.ceil((milliseconds % 1000) / 10) * 10;

    const totalMs =
      (min === null ? 0 : parseInt(min) * 60 * 1000) + seconds * 1000 + rounded;

    console.log(totalMs);
    onChange(totalMs);
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /(\d{1,2}):(\d{1,2})\.(\d{1,3})/; // Matches MM:SS.MSS format
    const match = e.target.value.match(regex);

    console.log(e.target.value);
    console.log(match);

    if (!match) {
      return;
    }

    const min = match[1];
    const sec = match[2];
    const ms = match[3];
    console.log(`${min}:${sec}.${ms}`);

    const totalMs =
      parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(ms);
    console.log(totalMs);
    const formattedTime = convertMsToTimeFormat(totalMs);
    onChange(totalMs);
  };

  return (
    <label className="input input-bordered flex items-center gap-2">
      <img src={raceImage} className="w-[24px]" />
      <input
        type="text"
        value={time}
        onChange={handleChange}
        placeholder="00:00.00"
        className="text-xl max-w-40"
      />
    </label>
  );
};

export default TimeInput;
