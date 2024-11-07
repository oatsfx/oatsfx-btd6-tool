import { SolutionRow } from "components/SolutionRow";
import { TowerPath } from "types/costs";

const SolutionManager = ({
  solutions,
  solutionTile,
  disableClear,
  clearSolutions,
}: {
  solutions: TowerPath[][];
  solutionTile: string;
  disableClear: boolean;
  clearSolutions: () => void;
}) => {
  return (
    <div className="w-64">
      <p className="text-lg font-bold text-center">
        Possible Solutions{solutionTile ? ` for ${solutionTile}` : ""}
      </p>

      {solutions.length > 0 ? (
        <div className="overflow-y-scroll overflow-x-hidden max-h-96 h-96 my-4 py-4 flex flex-col items-center bg-base-200 rounded-xl">
          <p className="font-semibold">Solutions</p>
          {solutions.map((solution, index) => (
            <SolutionRow solution={solution} key={index} />
          ))}
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
