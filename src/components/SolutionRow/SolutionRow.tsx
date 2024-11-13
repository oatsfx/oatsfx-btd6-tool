import { TowerDisplay } from "components/TowerDisplay";
import { TowerPath } from "types/costs";
import { towerImages } from "util/formatters";

const SolutionRow = ({ solution }: { solution: TowerPath[] }) => {
  return (
    <div className="indicator gap-3 items-center px-12 justify-center border-b border-white/25 py-4">
      {solution
        .sort((a, b) => b.cost - a.cost)
        .map((tower, i) => (
          <TowerDisplay
            name={`${tower.name}: $${tower.cost.toLocaleString()}${
              tower.boxOfMonkey ? "*" : ""
            }`}
            image={towerImages[tower.name as keyof typeof towerImages]}
            indicator={tower.path}
            boxOfMonkey={tower.boxOfMonkey}
            key={i}
          />
        ))}
      {/* <span className="indicator indicator-item indicator-bottom indicator-center font-light text-sm">
        $
        {solution
          .reduce((total, tower) => total + tower.cost, 0)
          .toLocaleString()}
      </span> */}
    </div>
  );
};

export default SolutionRow;
