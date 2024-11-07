import leastCashImage from "images/misc/least_cash_s.webp";
import { RelicList } from "components/RelicList";
import { TileSelector } from "components/TileSelector";
import { useCtData } from "hooks/useCtData";
import { useEffect, useState } from "react";
import { useTowerCostData } from "hooks/useTowerCostData";
import { TowerPath, difficultyMultiplers } from "types/costs";
import { towerImages } from "util/formatters";
import { Relic, Tower } from "types/ct";
import {
  TowerType,
  formatGameEntityName,
  roundEven5,
  towerTypes,
} from "util/converters";
import { SolutionManager } from "components/SolutionManager";
import { TowerDisplay } from "components/TowerDisplay";

const LeastCashCalculator: React.FC = () => {
  const { data: ctData, loading: ctLoading } = useCtData();
  const { data: costData, loading: costLoading } = useTowerCostData();
  const [selectedTile, setSelectedTile] = useState("");
  const [selectedRelics, setSelectedRelics] = useState<Relic[]>([]);

  const [targetScore, setTargetScore] = useState(0);
  const [towerLimit, setTowerLimit] = useState(2);
  const [limitExclusive, setLimitExclusive] = useState(false);

  const [solutions, setSolutions] = useState<TowerPath[][]>([]);
  const [solutionTile, setSolutionTile] = useState("");
  const [calculating, setCalculating] = useState(false);

  const [excludedTowers, setExcludedTowers] = useState<Tower[]>([]);

  const [towerFilters, setTowerFilters] = useState<TowerPath[]>([]);

  const SOLUTION_HARD_CAP = 2000;

  const loading = ctLoading || costLoading;

  const changeTile = (tile: string) => {
    setSelectedTile(tile);
    if (ctData.tiles[tile].towers.find((x) => x.tower === "monkey_village")) {
      console.log(
        "uh oh... a village tile! that'll cause issues with calculations"
      );
    }
  };

  const handleRelicFilterClick = (relic: Relic) => {
    const newRelics = [...selectedRelics];
    if (newRelics.includes(relic)) {
      newRelics.splice(newRelics.indexOf(relic), 1);
    } else {
      newRelics.push(relic);
    }
    console.log(newRelics);
    setSelectedRelics(newRelics);
  };

  const addTowerFilter = (tower: Tower) => {
    const newTowerFilters = [...towerFilters];
    const path = (document.getElementById(`${tower}-path`) as HTMLSelectElement)
      .value;

    const pathNums: number[] = path.split("").map(Number);

    if (!path) {
      console.log("PATH EMPTY");
      return;
    }

    // Reject invalid paths. e.g. 530, 444, 522, etc.
    const validPath = [pathNums]
      .filter((ps) => ps.filter((p) => p > 2).length <= 1) // more than one primary path
      .filter((ps) => ps.filter((p) => p === 0).length > 0) // all three paths upgraded
      .filter((ps) => ps.filter((p) => p > 5).length === 0) // higher than tier 5
      .flatMap((p) => p);

    console.log(validPath);
    if (validPath.length === 0) {
      console.log("INVALID PATH");
      return;
    }

    newTowerFilters.push({ name: tower, path: path, cost: -1 });
    console.log(newTowerFilters);
    setTowerFilters(newTowerFilters);
  };

  const removeTowerFilter = (index: number) => {
    const newTowerFilters = [...towerFilters];
    console.log(index);
    if (index >= 0) {
      newTowerFilters.splice(index, 1);
    }
    console.log(newTowerFilters);
    setTowerFilters(newTowerFilters);
  };

  const handleCalculateClick = async () => {
    setCalculating(true);
  };

  useEffect(() => {
    if (calculating) {
      setTimeout(() => {
        calculateReverseCash();
      }, 1);
    }
  }, [calculating]);

  const handleScoreChange = (e: any) => {
    const re = /^[0-9\b]*$/;

    // if value is not blank, then test the regex
    const value: string = e.target.value;

    if (value === "" || re.test(value)) {
      setTargetScore(Number(value));
    }
  };

  const handleLimitChange = (e: any) => {
    const value: number = e.target.value;
    setTowerLimit(value);
  };

  // Thanks Josh Cheek (Spike Factory) for assistance with this.
  const calculateReverseCash = () => {
    const upgradePaths = [];
    const tileTowers = ctData.tiles[selectedTile].towers;

    // Cost, upgrade, and limit count modifications.
    const marchingBootsMod = selectedRelics.includes("marching_boots") ? 1 : 0;
    // Initialize with difficulty multiplier.
    const priceMults: [
      { towerType: TowerType | "all"; costMultipiler: number }
    ] = [
      {
        towerType: "all",
        costMultipiler:
          difficultyMultiplers[
            ctData.tiles[selectedTile]
              .difficulty as keyof typeof difficultyMultiplers
          ],
      },
    ];

    if (selectedRelics.includes("air_and_sea")) {
      priceMults.push({ towerType: "military", costMultipiler: 0.95 });
    }

    if (selectedRelics.includes("magic_monkeys")) {
      priceMults.push({ towerType: "magic", costMultipiler: 0.95 });
    }

    console.log(priceMults);

    // Push a combination of ways to produce tower upgrades.
    // Oh boy! 3 Nested for loops, I'm cooked!
    for (let t = 0; t < 6; t++) {
      for (let m = 0; m < 6; m++) {
        for (let b = 0; b < 6; b++) {
          upgradePaths.push([t, m, b]);
        }
      }
    }

    // Reject the duplicates.
    const uniquePaths = upgradePaths.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

    // Reject invalid paths. e.g. 530, 444, 522, etc.
    const validPaths = uniquePaths
      .filter((ps) => ps.filter((p) => p > 2).length <= 1) // more than one primary path
      .filter((ps) => ps.filter((p) => p === 0).length > 0) // all three paths upgraded
      .sort();

    if (selectedTile !== "") {
      setSolutionTile(selectedTile);
      const purchasables: TowerPath[] = validPaths
        .flatMap((path) => {
          return Object.entries(costData).map(([name, prices]) => {
            if (!tileTowers.find((tower) => name.includes(tower.tower))) {
              return { name: name as Tower, path: "", cost: -1 };
            }
            const towerType = towerTypes[name as keyof typeof towerTypes];
            const [top, mid, bot] = path;
            // Assumed that index 0 is always difficulty multiplier.
            let cost = roundEven5(prices.cost * priceMults[0].costMultipiler);
            cost += Array.from({ length: top + 1 }, (_, i) => {
              let total = 0;
              for (let j = 0; j < priceMults.length; j++) {
                if (
                  priceMults[j].towerType === "all" ||
                  towerType === priceMults[j].towerType
                )
                  total +=
                    roundEven5(
                      prices.upgrades.top_path[i] * priceMults[j].costMultipiler
                    ) || 0;
              }
              return total;
            }).reduce((a, b) => a + b, 0);
            cost += Array.from({ length: mid + 1 }, (_, i) => {
              let total = 0;
              for (let j = 0; j < priceMults.length; j++) {
                if (
                  priceMults[j].towerType === "all" ||
                  towerType === priceMults[j].towerType
                )
                  total +=
                    roundEven5(
                      prices.upgrades.middle_path[i] *
                        priceMults[j].costMultipiler
                    ) || 0;
              }
              return total;
            }).reduce((a, b) => a + b, 0);
            cost += Array.from({ length: bot + 1 }, (_, i) => {
              let total = 0;
              for (let j = 0; j < priceMults.length; j++) {
                if (
                  priceMults[j].towerType === "all" ||
                  towerType === priceMults[j].towerType
                )
                  total +=
                    roundEven5(
                      prices.upgrades.bottom_path[i] *
                        priceMults[j].costMultipiler
                    ) || 0;
              }

              return total;
            }).reduce((a, b) => a + b, 0);

            return {
              name: name as Tower,
              path: path.join(""),
              cost: cost,
            };
          });
        })
        .filter((a) => {
          // Remove any undefined towers and towers that cost more than the target score.
          return a.cost > 0 && a.cost <= targetScore;
        })
        // Sort in descending order of cost to hopefully get high power tower combinations first.
        .sort((a, b) => b.cost - a.cost);

      console.log(
        purchasables.filter((tower) => tower.name === "druid_monkey")
      );

      const newSolutions: TowerPath[][] = [];
      // Push any tower filters to the solution, then check if the price works.
      // For the price, calculate the filter(s) price, subtract from the provided score, run the calculator on that subtracted score.
      const startTowers: TowerPath[] = [];
      towerFilters.map((tower) => {
        const pathWithCost = purchasables.find(
          (p) => p.name === tower.name && p.path === tower.path
        );

        if (pathWithCost) startTowers.push(pathWithCost);
      });

      console.log(startTowers);
      const startPrice = startTowers.reduce((a, b) => a + b.cost, 0);
      console.log(startPrice);
      console.log(
        tileTowers.map((tileTower) => {
          return {
            name: tileTower.tower,
            remaining: tileTower.max + marchingBootsMod,
          };
        })
      );
      console.log(
        tileTowers.map((tileTower) => {
          return {
            name: tileTower.tower,
            remaining: tileTower.max + marchingBootsMod,
          };
        })
      );
      findTowers({
        targetPrice: targetScore - startPrice,
        potentialTowers: purchasables,
        towerLimit:
          towerLimit -
          (startTowers.length > towerLimit ? towerLimit : startTowers.length),
        perTowerLimits: tileTowers.map((tileTower) => {
          return {
            name: tileTower.tower,
            remaining: tileTower.max + marchingBootsMod,
          };
        }),
        block: (solution: TowerPath[]) => {
          if (solution.length > 0) {
            newSolutions.push(startTowers.concat(solution));
          }
        },
      });
      console.log(newSolutions);

      setSolutions(newSolutions.sort((a, b) => a.length - b.length));
      setCalculating(false);
    }
  };

  type findTowersProps = {
    targetPrice: number;
    potentialTowers: TowerPath[];
    towerLimit: number;
    perTowerLimits: {
      name: string;
      remaining: number;
    }[];
    block: (solution: TowerPath[]) => void;
  };

  let solutionsFound = 0;
  const findTowers = ({
    targetPrice,
    potentialTowers,
    towerLimit,
    perTowerLimits,
    block,
  }: findTowersProps) => {
    if (!block) {
      return;
    }

    if (targetPrice === 0) {
      // We found the solution.
      if (limitExclusive && towerLimit !== 0) {
        // Our solution had below the desired number of towers in the solution.
        return;
      }
      solutionsFound++;
      // Need to add the starter towers to this solution array.
      block([]);
      return;
    } else if (targetPrice < 0) {
      // We went too far, quit.
      return;
    } else if (towerLimit === 0) {
      // We used too many towers, quit.
      return;
    } else if (potentialTowers.length === 0) {
      // We ran out of towers to place, quit.
      return;
    } else if (solutionsFound >= SOLUTION_HARD_CAP) {
      // We hit the hard cap of solutions to generate.
      return;
    }

    const [tower, ...remainingTowers] = potentialTowers;
    const { name, path, cost } = tower;

    // Handle tower limits.
    const towerLimitIndex = perTowerLimits.findIndex((element) =>
      tower.name.includes(element.name)
    );

    if (perTowerLimits[towerLimitIndex].remaining === 0) {
      remainingTowers.filter((a) => a.name !== name);
    }

    if (
      perTowerLimits[towerLimitIndex].remaining !== 0 &&
      !excludedTowers.includes(tower.name)
    ) {
      findTowers({
        targetPrice: targetPrice - cost,
        potentialTowers: remainingTowers,
        towerLimit: towerLimit - 1,
        perTowerLimits: perTowerLimits.map((a) => {
          if (a.name === name) {
            return { name: a.name, remaining: a.remaining - 1 };
          } else {
            return a;
          }
        }),
        block: (solution: TowerPath[]) => {
          block([tower, ...solution]);
        },
      });
    }

    findTowers({
      targetPrice: targetPrice,
      potentialTowers: remainingTowers,
      towerLimit: towerLimit,
      perTowerLimits,
      block: (solution: TowerPath[]) => {
        block([...solution]);
      },
    });
  };

  return (
    <div className="flex w-full flex-col items-center">
      <p className="font-bold text-2xl py-2 font-display tracking-tighter text-accent">
        Least Cash Reverse Calculator
      </p>

      <div className="flex gap-4 items-center">
        <label className="input input-bordered flex items-center gap-2">
          <img src={leastCashImage} className="w-[28px]" />
          <input
            className="font-medium text-lg max-w-40"
            type="text"
            inputMode="numeric"
            placeholder="Score"
            value={targetScore}
            onChange={handleScoreChange}
          />
        </label>
        <details className="dropdown">
          <summary
            className={"btn w-24" + (!selectedTile ? " btn-disabled" : "")}
          >
            Heroes
          </summary>
          <ul className="p-2 pb-6 shadow-xl menu dropdown-content z-[51] bg-base-100 rounded-box w-56">
            <li className="pointer-events-none">
              <p className="divider justify-center px-2">Misc.</p>
            </li>
            <div className="flex gap-2 items-center justify-center mx-2">
              <p className="font-medium whitespace-nowrap">Max Towers:</p>
              <input
                type="range"
                min={1}
                max={10}
                value={towerLimit}
                onChange={handleLimitChange}
                className="range range-xs"
              />
              <p className="text-lg font-medium">{towerLimit}</p>
            </div>
            <li>
              <a
                onClick={() => {
                  setLimitExclusive((old) => !old);
                }}
              >
                <p className="font-medium text-sm">
                  Only solutions with {towerLimit} towers?
                </p>
                <input
                  type="checkbox"
                  checked={limitExclusive}
                  className="checkbox checkbox-sm"
                  readOnly
                />
              </a>
            </li>
          </ul>
        </details>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className={"btn w-24" + (!selectedTile ? " btn-disabled" : "")}
          onClick={() =>
            (
              document.getElementById("tower-modal") as HTMLFormElement
            ).showModal()
          }
        >
          Towers
        </button>
        <dialog id="tower-modal" className="modal">
          <div className="modal-box max-w-3xl">
            <h3 className="font-bold text-lg">Tower Filters</h3>
            <p className="py-4">
              Add any towers and paths you want the calculation to <u>ALWAYS</u>{" "}
              consider.
            </p>
            <div className="">
              <div className="overflow-x-hidden overflow-y-scroll max-h-56 h-56 my-2 py-4 flex flex-col items-center bg-base-200 rounded-xl">
                <p className="font-semibold">Applied Tower Filters</p>
                <div className="indicator w-full px-12 py-4 gap-2 flex-wrap">
                  {towerFilters.map((tower, index) => (
                    <a
                      className="btn hover:outline hover:outline-error hover:cursor-pointer"
                      onClick={() => removeTowerFilter(index)}
                    >
                      <TowerDisplay
                        name={`Delete`}
                        image={
                          towerImages[tower.name as keyof typeof towerImages]
                        }
                        indicator={tower.path}
                        key={`${tower.path} ${tower.name}`}
                      />
                    </a>
                  ))}
                </div>
              </div>
              <div className="gap-y-2 flex flex-wrap my-4 w-full">
                {selectedTile
                  ? Object.entries(ctData.tiles[selectedTile].towers).map(
                      (tower) => (
                        <div className={"basis-1/2 px-4"} key={tower[0]}>
                          <div className="flex items-center gap-2">
                            <img
                              src={
                                towerImages[
                                  tower[1].tower as keyof typeof towerImages
                                ]
                              }
                              className="w-[28px]"
                            />

                            <span className="label-text grow">
                              {formatGameEntityName(tower[1].tower as string)}
                            </span>
                            <label className="input input-bordered flex max-w-16">
                              <input
                                className="font-normal w-full"
                                placeholder="000"
                                maxLength={3}
                                id={`${tower[1].tower}-path`}
                              />
                            </label>
                            <button
                              className="btn outline outline-1"
                              onClick={() => addTowerFilter(tower[1].tower)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      )
                    )
                  : null}
              </div>
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
        <details className="dropdown">
          <summary
            className={"btn w-24" + (!selectedTile ? " btn-disabled" : "")}
          >
            Filters
          </summary>
          <ul className="p-2 pb-6 shadow-xl menu dropdown-content z-[51] bg-base-100 rounded-box w-56">
            <li className="pointer-events-none">
              <p className="divider justify-center px-2">Misc.</p>
            </li>
            <div className="flex gap-2 items-center justify-center mx-2">
              <p className="font-medium whitespace-nowrap">Max Towers:</p>
              <input
                type="range"
                min={1}
                max={10}
                value={towerLimit}
                onChange={handleLimitChange}
                className="range range-xs"
              />
              <p className="text-lg font-medium">{towerLimit}</p>
            </div>
            <li>
              <a
                onClick={() => {
                  setLimitExclusive((old) => !old);
                }}
              >
                <p className="font-medium text-sm">
                  Only solutions with {towerLimit} towers?
                </p>
                <input
                  type="checkbox"
                  checked={limitExclusive}
                  className="checkbox checkbox-sm"
                  readOnly
                />
              </a>
            </li>
          </ul>
        </details>
        <button
          className={
            "btn min-w-24 outline outline-1" +
            (calculating
              ? " outline-warning text-warning"
              : " outline-success text-success")
          }
          disabled={selectedTile === ""}
          onClick={() => {
            setCalculating(true);
            handleCalculateClick();
          }}
        >
          {calculating ? "Loading..." : "Calculate"}
        </button>
      </div>

      <div className="flex gap-2 py-5">
        <TileSelector
          data={ctData}
          loading={loading}
          selectedTile={selectedTile}
          changeTile={changeTile}
          relics={selectedRelics}
        />
        <div className="divider divider-horizontal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10.605"
            height="15.555"
            className="fill-neutral-content overflow-visible"
          >
            <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
          </svg>
        </div>
        <RelicList
          data={ctData}
          loading={loading}
          relics={selectedRelics}
          handleRelicFilterClick={handleRelicFilterClick}
        />
        <div className="divider divider-horizontal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10.605"
            height="15.555"
            className="fill-neutral-content overflow-visible"
          >
            <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
          </svg>
        </div>
        <SolutionManager
          solutions={solutions}
          solutionTile={solutionTile}
          disableClear={selectedTile === ""}
          clearSolutions={() => {
            setSolutionTile("");
            setSolutions([]);
          }}
        />
      </div>
      <div className="divider font-display">Notes</div>
      <p className="text-center">
        This calculator is experimental! It's not guaranteed to work.
        <br />
        Thanks Josh Cheek (Spike Factory) for the base algorithm.
        <br />
        Suggestions regarding: UI/UX, solution ordering, filters, and such, are
        always welcome.
      </p>
      <div className="divider font-display">Nerdy Stuff</div>
      <p className="text-center">
        It's possible that the site crashes while doing calculations. All I can
        say right now is be nice with your parameters.
        <br />
        If your goal is to crash the site, you're in the wrong place.
        <br />
      </p>
      <p className="font-semibold">The algorithm works as follows:</p>
      <ul>
        <li>
          - Build data structure (an array) with all possible upgrade paths
          (000, 203, 051, etc.)
        </li>
        <li>
          - Apply prices of available towers to possible upgrade paths, removing
          ones greater than the target score (user input)
        </li>
        <li>- Apply any relic modifers and tower count restrictions</li>
        <li>
          - Generate a ton of combinations (the computation heavy portion)
        </li>
        <li>
          - Display solutions; hopefully ones with 1 or more high power towers
          (tiers 4-5; if applicable)
        </li>
      </ul>
      <div className="divider font-display" />
    </div>
  );
};

export default LeastCashCalculator;
