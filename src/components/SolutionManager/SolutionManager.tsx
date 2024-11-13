import { SolutionRow } from "components/SolutionRow";
import { TowerPath } from "types/costs";
import { Tower } from "types/ct";

const SolutionManager = ({
  solutions,
  solutionTile,
  solutionNum,
  disableClear,
  clearSolutions,
}: {
  solutions: TowerPath[][];
  solutionTile: string;
  solutionNum: number;
  disableClear: boolean;
  clearSolutions: () => void;
}) => {
  return (
    <div className="w-full">
      <p className="text-lg font-bold text-center">
        Possible Solutions
        {solutionTile ? ` for ${solutionTile} in CT${solutionNum}` : ""}
      </p>

      {solutions.length > 0 ? (
        <div className="overflow-y-scroll max-h-96 h-96 my-4 py-4 px-12 flex flex-col items-center bg-base-200 rounded-xl">
          <p className="font-semibold">Solutions</p>
          <div className="flex flex-wrap w-full gap-x-2 px-2 items-center justify-center">
            {solutions.map((solution, index) => (
              <SolutionRow solution={solution} key={index} />
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center">Solutions will appear here.</p>
      )}
      <p className="text-center italic">
        Showing {solutions.length} total solution
        {solutions.length === 1 ? "" : "s"}.
      </p>
      <div className="flex gap-4 items-center justify-center py-2">
        <button
          className="btn min-w-24 outline outline-1 outline-error text-error"
          disabled={disableClear}
          onClick={clearSolutions}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default SolutionManager;
