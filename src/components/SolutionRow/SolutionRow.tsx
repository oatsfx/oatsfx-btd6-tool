import { TowerDisplay } from "components/TowerDisplay";
import { TowerPath } from "types/costs";
import { towerImages } from "util/formatters";

const SolutionRow = ({ solution }: { solution: TowerPath[] }) => {
  return (
    <div className="indicator gap-3 justify-center w-2/3 border-b border-white/25 py-4">
      {solution
        .sort((a, b) => b.cost - a.cost)
        .map((tower) => (
          <TowerDisplay
            name={`${tower.name}: $${tower.cost}`}
            image={towerImages[tower.name as keyof typeof towerImages]}
            indicator={tower.path}
            key={`${tower.path} ${tower.name}`}
          />
        ))}
      {/* <p>
        = $
        {solution
          .reduce((total, tower) => total + tower.cost, 0)
          .toLocaleString()}
      </p> */}
    </div>
  );
};

export default SolutionRow;
