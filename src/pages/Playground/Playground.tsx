import { useEffect, useState } from "react";
import { convertMsToTimeFormat, roundEven5 } from "util/converters";

const RaceTimeCalculator: React.FC = () => {
  const [playgroundInput, setPlaygroundInput] = useState<number>(0);

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
    </div>
  );
};

export default RaceTimeCalculator;
