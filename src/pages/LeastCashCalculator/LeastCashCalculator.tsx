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
import { useLeaderboard } from "hooks/useLeaderboard";
import ctIds from "configs/ctIds.config";
import { useCtEventRelics } from "hooks/useCtEventRelics";
import { useHeroCostData } from "hooks/useHeroCostData";
import { Loading } from "components/Loading";

const LeastCashCalculator: React.FC = () => {
  const [eventNum, setEventNum] = useState<number>(ctIds[0].number);

  const { data: ctData, loading: ctLoading } = useCtData(eventNum);
  const { data: eventRelics, loading: eventRelicsLoading } =
    useCtEventRelics(eventNum);

  const { data: costData, loading: costLoading } = useTowerCostData();
  const { data: heroCostData, loading: heroCostLoading } = useHeroCostData();
  const [selectedTile, setSelectedTile] = useState("");
  const [selectedRelics, setSelectedRelics] = useState<Relic[]>([]);

  const [targetScore, setTargetScore] = useState(0);
  const [towerLimit, setTowerLimit] = useState(2);
  const [limitExclusive, setLimitExclusive] = useState(false);
  const [hideUnaffordable, setHideUnaffordable] = useState(true);
  const [showHeroSolutions, setShowHeroSolutions] = useState(false);

  const [solutions, setSolutions] = useState<TowerPath[][]>([]);
  const [solutionTile, setSolutionTile] = useState("");
  const [solutionCtNum, setSolutionCtNum] = useState(0);
  const [calculating, setCalculating] = useState(false);

  const [includedTowers, setIncludedTowers] = useState<Tower[]>([]);
  const [excludedTowers, setExcludedTowers] = useState<Tower[]>([]);

  const [includedHeroes, setIncludedHeroes] = useState<Tower[]>([]);
  const [excludedHeroes, setExcludedHeroes] = useState<Tower[]>([]);

  const [towerFilters, setTowerFilters] = useState<TowerPath[]>([]);

  const SOLUTION_HARD_CAP = 2000;

  const loading =
    ctLoading || costLoading || heroCostLoading || eventRelicsLoading;

  const changeTile = (tile: string) => {
    setSelectedTile(tile);
    console.log(tile);
    console.log(ctData[tile]);
    if (
      ctData[tile].GameData.dcModel.towers._items
        .filter((x) => !x.isHero && x.max !== 0)
        .find((x) => x.tower === "MonkeyVillage")
    ) {
      console.log(
        "uh oh... a village tile! that'll cause issues with calculations"
      );
    }

    if (
      ctData[tile].GameData.dcModel.towers._items
        .filter((x) => x.isHero && x.max !== 0)
        .find((x) => x.tower === "Geraldo")
    ) {
      console.log(
        "uh oh... a geraldo tile! that bozo has a bunch of items that cost cash! luckily all of his things cost the same at every level. HOWEVER, i am too lazy to implement that atm"
      );
    }

    setTowerFilters([]);
    setIncludedTowers([]);
    setExcludedTowers([]);
    setIncludedHeroes([]);
    setExcludedHeroes([]);
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

  const addIncludedHero = (hero: Tower) => {
    const newIncludedHeroes = [...includedHeroes];

    if (newIncludedHeroes.includes(hero)) {
      return;
    }

    newIncludedHeroes.push(hero);
    console.log(newIncludedHeroes);
    setIncludedHeroes(newIncludedHeroes);
  };

  const removeIncludedHero = (index: number) => {
    const newIncludedHeroes = [...includedHeroes];
    console.log(index);
    if (index >= 0) {
      newIncludedHeroes.splice(index, 1);
    }
    console.log(newIncludedHeroes);
    setIncludedHeroes(newIncludedHeroes);
  };

  const addExcludedHero = (hero: Tower) => {
    const newExcludedHeroes = [...excludedHeroes];

    if (newExcludedHeroes.includes(hero)) {
      return;
    }

    newExcludedHeroes.push(hero);
    console.log(newExcludedHeroes);
    setExcludedHeroes(newExcludedHeroes);
  };

  const removeExcludedHero = (index: number) => {
    const newExcludedHeroes = [...excludedHeroes];
    console.log(index);
    if (index >= 0) {
      newExcludedHeroes.splice(index, 1);
    }
    console.log(newExcludedHeroes);
    setExcludedHeroes(newExcludedHeroes);
  };

  const addExcludedTower = (tower: Tower) => {
    const newExcludedTowers = [...excludedTowers];

    if (newExcludedTowers.includes(tower)) {
      return;
    }

    newExcludedTowers.push(tower);
    console.log(newExcludedTowers);
    setExcludedTowers(newExcludedTowers);
  };

  const removeExcludedTower = (index: number) => {
    const newExcludedTowers = [...excludedTowers];
    console.log(index);
    if (index >= 0) {
      newExcludedTowers.splice(index, 1);
    }
    console.log(newExcludedTowers);
    setExcludedTowers(newExcludedTowers);
  };

  const addTowerFilter = (tower: Tower) => {
    const newTowerFilters = [...towerFilters];
    const path = (document.getElementById(`${tower}-path`) as HTMLSelectElement)
      .value;

    const pathNums: number[] = path.split("").map(Number);

    if (!path) {
      const newIncludedTowers = [...includedTowers];

      if (newIncludedTowers.includes(tower)) {
        return;
      }

      newIncludedTowers.push(tower);
      console.log(newIncludedTowers);
      setIncludedTowers(newIncludedTowers);
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

  const removeIncludedTower = (index: number) => {
    const newIncludedTowers = [...includedTowers];
    console.log(index);
    if (index >= 0) {
      newIncludedTowers.splice(index, 1);
    }
    console.log(newIncludedTowers);
    setIncludedTowers(newIncludedTowers);
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
    const tileTowers = ctData[
      selectedTile
    ].GameData.dcModel.towers._items.filter((x) => !x.isHero && x.max !== 0);
    const tileHeroes = ctData[
      selectedTile
    ].GameData.dcModel.towers._items.filter((x) => x.isHero && x.max !== 0);
    console.log(tileTowers);

    // Cost, upgrade, and limit count modifications.
    const monkeyTycoonMod = selectedRelics.includes("MonkeyTycoon") ? 1 : 0;
    const marchingBootsMod = selectedRelics.includes("MarchingBoots") ? 1 : 0;
    const startingStashMod = selectedRelics.includes("StartingStash") ? 250 : 0;

    const relicMod = monkeyTycoonMod + marchingBootsMod;
    // Initialize with difficulty multiplier.
    const priceMults: [
      { towerType: TowerType | "all"; costMultipiler: number }
    ] = [
      {
        towerType: "all",
        costMultipiler:
          difficultyMultiplers[
            ctData[selectedTile].GameData
              .selectedDifficulty as keyof typeof difficultyMultiplers
          ],
      },
    ];

    // Relic price reductions.
    if (selectedRelics.includes("AirAndSea")) {
      priceMults.push({ towerType: "military", costMultipiler: 0.95 });
    }

    if (selectedRelics.includes("MilitaryMonkeys")) {
      priceMults.push({ towerType: "military", costMultipiler: 0.92 });
    }

    if (selectedRelics.includes("MagicMonkeys")) {
      priceMults.push({ towerType: "magic", costMultipiler: 0.92 });
    }

    if (selectedRelics.includes("MonkeyTycoon")) {
      priceMults.push({ towerType: "all", costMultipiler: 0.96 });
    }

    if (selectedRelics.includes("PrimaryPrimates")) {
      priceMults.push({ towerType: "primary", costMultipiler: 0.92 });
    }

    if (selectedRelics.includes("SupportSimians")) {
      priceMults.push({ towerType: "support", costMultipiler: 0.92 });
    }

    console.log(priceMults);
    console.log(heroCostData);

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
      setSolutionCtNum(eventNum);
      const purchasables: TowerPath[] = validPaths
        .flatMap((path) => {
          return Object.entries(costData).flatMap(([name, prices]) => {
            if (!tileTowers.find((tower) => name.includes(tower.tower))) {
              return { name: name as Tower, path: "", cost: -1 };
            }
            const towerType = towerTypes[name as keyof typeof towerTypes];
            const [top, mid, bot] = path;
            // Assumed that index 0 is always difficulty multiplier.
            const initialCost = roundEven5(
              prices.cost * priceMults[0].costMultipiler
            );
            let cost =
              initialCost +
              Array.from({ length: top + 1 }, (_, i) => {
                let total = 0;
                for (let j = 0; j < priceMults.length; j++) {
                  if (
                    priceMults[j].towerType === "all" ||
                    towerType === priceMults[j].towerType
                  )
                    total +=
                      roundEven5(
                        prices.upgrades.top_path[i] *
                          priceMults[j].costMultipiler
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

            // Apply a Box of Monkey purchasable, if selected.
            // The idea here is to make a duplicate tower entry with a modified cost and add a "boxOfMonkey" flag to it.
            // This way a designer can add a visual flag to any tower with a Box of Monkey application.
            if (selectedRelics.includes("BoxOfMonkey") && initialCost <= 400) {
              return [
                {
                  name: name as Tower,
                  path: path.join(""),
                  cost: cost,
                },
                {
                  name: name as Tower,
                  path: path.join(""),
                  cost: cost - initialCost,
                  boxOfMonkey: true,
                },
              ];
            } else {
              return [
                {
                  name: name as Tower,
                  path: path.join(""),
                  cost: cost,
                },
              ];
            }
          });
        })
        .concat(
          tileHeroes.map((x) => {
            return {
              name: x.tower,
              path: "",
              cost: heroCostData[x.tower].cost,
              isHero: true,
            };
          })
        )
        .filter((a) => {
          // Remove any undefined towers and towers that cost more than the target score.
          return a.cost > 0 && a.cost <= targetScore;
        })
        // Sort in descending order of cost to hopefully get high power tower combinations first.
        .sort((a, b) => b.cost - a.cost);

      console.log(purchasables);
      const newSolutions: TowerPath[][] = [];
      // Push any of the applied tower filters to the solution, then check if the price works.
      // For the price, calculate the filter(s) price, subtract from the provided score, run the calculator on that subtracted score.
      const startTowers: TowerPath[] = [];
      towerFilters.map((tower) => {
        const pathWithCost = purchasables.find(
          (p) => p.name === tower.name && p.path === tower.path
        );

        if (pathWithCost) startTowers.push(pathWithCost);
      });

      const startPrice = startTowers.reduce((a, b) => a + b.cost, 0);
      findTowers({
        targetPrice: targetScore - startPrice,
        potentialTowers: purchasables,
        towerLimit:
          towerLimit -
          (startTowers.length > towerLimit ? towerLimit : startTowers.length),
        perTowerLimits: tileTowers
          .map((tileTower) => {
            return {
              name: tileTower.tower,
              remaining:
                tileTower.max +
                relicMod -
                startTowers.filter((x) => x.name === tileTower.tower).length,
              isHero: false,
            };
          })
          .concat(
            tileHeroes.map((tileHero) => {
              return {
                name: tileHero.tower,
                remaining: tileHero.max,
                isHero: true,
              };
            })
          ),
        block: (solution: TowerPath[]) => {
          if (solution.length >= 0) {
            newSolutions.push(startTowers.concat(solution));
          }
        },
      });
      console.log(newSolutions);

      // The filter removes any towers that cannot be afforded at the start.
      // Potentially add this as a toggle for relics like SMS and Road Spikes.
      if (hideUnaffordable) {
        setSolutions(
          newSolutions
            .filter(
              (x) =>
                x.filter((x) => {
                  const cost =
                    costData[x.name]?.cost ?? heroCostData[x.name]?.cost;
                  return (
                    cost <
                    ctData[selectedTile].GameData.dcModel.startRules.cash +
                      startingStashMod
                  );
                }).length !== 0
            )
            .sort((a, b) => a.length - b.length)
        );
      } else {
        setSolutions(newSolutions.sort((a, b) => a.length - b.length));
      }
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
      isHero: boolean;
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

    // End cases.
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

    const { name, cost, boxOfMonkey } = tower;

    // Handle tower limits.
    const towerLimitIndex = perTowerLimits.findIndex((a) =>
      name.includes(a.name)
    );

    if (
      perTowerLimits[towerLimitIndex].remaining !== 0 &&
      !excludedTowers.includes(name) &&
      !excludedHeroes.includes(name)
    ) {
      findTowers({
        targetPrice: targetPrice - cost,
        // Once we find a Box of Monkey tower, remove it, because we don't want other
        // Box of Monkey towers in the solution. That's not how the relic works :).
        potentialTowers: potentialTowers.filter((x) =>
          boxOfMonkey ? !x.boxOfMonkey : true
        ),
        towerLimit: towerLimit - 1,
        perTowerLimits: perTowerLimits.map((a) =>
          // No more heroes after one.
          a.isHero && tower.isHero
            ? { ...a, remaining: 0 }
            : a.name === name
            ? { ...a, remaining: a.remaining - 1 }
            : a
        ),
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
      <div className="flex flex-col gap-4 items-center">
        <label className="input input-bordered flex items-center gap-2">
          <img src={leastCashImage} className="w-[24px]" />
          <input
            className="font-semibold text-2xl max-w-40"
            type="text"
            inputMode="numeric"
            placeholder="Score"
            value={targetScore}
            onChange={handleScoreChange}
          />
        </label>
        <div className="flex items-center gap-4">
          <p className="text-nowrap">Select a CT event:</p>
          <select
            id="ct-select"
            className="select select-bordered w-full max-w-xs"
            onChange={(e) => {
              console.log(e.target.options.selectedIndex);
            }}
            value={eventNum}
          >
            {ctIds.map((x) => (
              <option
                key={x.number}
                value={x.number}
                onClick={() => setEventNum(x.number)}
              >
                {x.number} ({x.id})
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-4 items-center">
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className={"btn w-24" + (!selectedTile ? " btn-disabled" : "")}
            onClick={() =>
              (
                document.getElementById("hero-modal") as HTMLFormElement
              ).showModal()
            }
            // disabled={
            //   ctData[selectedTile].GameData.dcModel.towers._items.filter(
            //     (x) => x.isHero && x.max !== 0
            //   ).length === 0
            // }
          >
            Heroes
          </button>
          <dialog id="hero-modal" className="modal">
            <div className="modal-box max-w-3xl">
              <h3 className="font-bold text-lg text-primary">Hero Filters</h3>
              <p className="py-4">
                Add any heroes you want the calculation to <u>ALWAYS</u>{" "}
                consider.{" "}
                <i>Note that bought hero levels are not calculated in this.</i>
              </p>
              <div className="">
                <div className="flex w-full gap-4">
                  <div className="overflow-x-hidden w-full max-h-56 h-56 my-2 py-4 flex flex-col items-center bg-base-200 rounded-xl">
                    <p className="font-semibold">Included Heroes</p>
                    <div className="indicator items-center w-full px-12 py-4 gap-6 flex-wrap">
                      {includedHeroes.map((tower, index) => (
                        <a
                          className="btn hover:outline hover:outline-error hover:cursor-pointer"
                          onClick={() => removeIncludedHero(index)}
                        >
                          <TowerDisplay
                            name={`Delete`}
                            image={
                              towerImages[tower as keyof typeof towerImages]
                            }
                            key={`${tower}`}
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="overflow-x-hidden w-full max-h-56 h-56 my-2 py-4 flex flex-col items-center bg-base-200 rounded-xl">
                    <p className="font-semibold">Excluded Heroes</p>
                    <div className="indicator items-center w-full px-12 py-4 gap-6 flex-wrap">
                      {excludedHeroes.map((tower, index) => (
                        <a
                          className="btn hover:outline hover:outline-error hover:cursor-pointer"
                          onClick={() => removeExcludedHero(index)}
                        >
                          <TowerDisplay
                            name={`Delete`}
                            image={
                              towerImages[tower as keyof typeof towerImages]
                            }
                            key={`${tower}`}
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="gap-y-2 flex flex-wrap my-4 w-full">
                  {selectedTile
                    ? Object.entries(
                        ctData[
                          selectedTile
                        ].GameData.dcModel.towers._items.filter(
                          (x) => x.isHero && x.max !== 0
                        )
                      ).map((tower) => (
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
                            <button
                              className="btn outline outline-1"
                              onClick={() => addIncludedHero(tower[1].tower)}
                              disabled={excludedHeroes.includes(tower[1].tower)}
                            >
                              +
                            </button>
                            <button
                              className="btn outline outline-1 outline-error text-error"
                              onClick={() => addExcludedHero(tower[1].tower)}
                              disabled={includedHeroes.includes(tower[1].tower)}
                            >
                              x
                            </button>
                          </div>
                        </div>
                      ))
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
              <h3 className="font-bold text-lg text-primary">Tower Filters</h3>
              <p className="py-4">
                Add any towers and paths you want the calculation to{" "}
                <u>ALWAYS</u> consider.
              </p>
              <div className="">
                <div className="flex w-full gap-4">
                  <div className="overflow-x-hidden w-full max-h-56 h-56 my-2 py-4 flex flex-col items-center bg-base-200 rounded-xl">
                    <p className="font-semibold">Included Towers</p>
                    <div className="indicator items-center w-full px-12 py-4 gap-6 flex-wrap">
                      {includedTowers.map((tower, index) => (
                        <a
                          className="btn hover:outline hover:outline-error hover:cursor-pointer"
                          onClick={() => removeIncludedTower(index)}
                        >
                          <TowerDisplay
                            name={`Delete`}
                            image={
                              towerImages[tower as keyof typeof towerImages]
                            }
                            key={`${tower}`}
                          />
                        </a>
                      ))}
                      {towerFilters.map((tower, index) => (
                        <a
                          className="btn hover:outline hover:outline-error hover:cursor-pointer"
                          onClick={() => removeTowerFilter(index)}
                        >
                          <TowerDisplay
                            name={`Delete`}
                            image={
                              towerImages[
                                tower.name as keyof typeof towerImages
                              ]
                            }
                            indicator={tower.path}
                            key={`${tower.path} ${tower.name}`}
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="overflow-x-hidden w-full max-h-56 h-56 my-2 py-4 flex flex-col items-center bg-base-200 rounded-xl">
                    <p className="font-semibold">Excluded Towers</p>
                    <div className="indicator items-center w-full px-12 py-4 gap-6 flex-wrap">
                      {excludedTowers.map((tower, index) => (
                        <a
                          className="btn hover:outline hover:outline-error hover:cursor-pointer"
                          onClick={() => removeExcludedTower(index)}
                        >
                          <TowerDisplay
                            name={`Delete`}
                            image={
                              towerImages[tower as keyof typeof towerImages]
                            }
                            key={`${tower}`}
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="gap-y-2 flex flex-wrap my-4 w-full">
                  {selectedTile
                    ? Object.entries(
                        ctData[
                          selectedTile
                        ].GameData.dcModel.towers._items.filter(
                          (x) => !x.isHero && x.max !== 0
                        )
                      ).map((tower) => (
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
                              disabled={excludedTowers.includes(tower[1].tower)}
                            >
                              +
                            </button>
                            <button
                              className="btn outline outline-1 outline-error text-error"
                              onClick={() => addExcludedTower(tower[1].tower)}
                              disabled={
                                includedTowers.includes(tower[1].tower) ||
                                towerFilters.some(
                                  (x) => x.name === tower[1].tower
                                )
                              }
                            >
                              x
                            </button>
                          </div>
                        </div>
                      ))
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
            <ul className="py-4 shadow-xl menu dropdown-content z-[51] bg-base-100 rounded-box w-64 outline outline-white/25 outline-1">
              <li className="pointer-events-none">
                <p className="justify-center font-semibold text-lg text-primary">
                  Hero
                </p>
              </li>
              <li>
                <a
                  onClick={() => {
                    setShowHeroSolutions((old) => !old);
                  }}
                >
                  <p className="font-medium text-sm">
                    Only show solutions with heroes.
                  </p>
                  <input
                    type="checkbox"
                    checked={showHeroSolutions}
                    className="checkbox checkbox-sm"
                    readOnly
                  />
                </a>
              </li>
              <li className="pointer-events-none">
                <p className="justify-center font-semibold text-lg text-primary">
                  Tower
                </p>
              </li>
              <div className="flex flex-col gap-2 items-center justify-center mx-4">
                <div className="flex gap-2 items-center justify-center mx-4 w-full">
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
                <i className="text-xs text-accent">Requires recalculation</i>
              </div>
              <li>
                <a
                  onClick={() => {
                    setLimitExclusive((old) => !old);
                  }}
                >
                  <p className="font-medium text-sm">
                    Show solutions with exactly {towerLimit} towers.{" "}
                    <i className="text-xs text-accent">
                      Requires recalculation
                    </i>
                  </p>
                  <input
                    type="checkbox"
                    checked={limitExclusive}
                    className="checkbox checkbox-sm"
                    readOnly
                  />
                </a>
              </li>
              <li className="pointer-events-none">
                <p className="justify-center font-semibold text-lg text-primary">
                  Miscellaneous
                </p>
              </li>
              <li>
                <a
                  onClick={() => {
                    setHideUnaffordable((old) => !old);
                  }}
                >
                  <p className="font-medium text-sm">
                    Hide initially unaffordable solutions.{" "}
                    <i className="text-xs text-accent">
                      Requires recalculation
                    </i>
                  </p>
                  <input
                    type="checkbox"
                    checked={hideUnaffordable}
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
      </div>

      {!loading ? (
        <div className="flex gap-2 py-5 w-full">
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
            eventRelics={eventRelics}
            loading={loading}
            relics={selectedRelics}
            handleRelicFilterClick={handleRelicFilterClick}
          />
        </div>
      ) : (
        <Loading />
      )}
      <div className="divider">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10.605"
          height="15.555"
          className="fill-neutral-content overflow-visible rotate-90"
        >
          <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
        </svg>
      </div>
      <SolutionManager
        solutions={solutions.filter(
          (solution) =>
            solution.some(
              (path) =>
                (includedTowers.length === 0 ||
                  includedTowers.includes(path.name)) &&
                (towerFilters.length === 0 ||
                  towerFilters.some(
                    (x) => x.name === path.name && x.path === path.path
                  ))
            ) &&
            solution.every(
              (path) =>
                !excludedTowers.includes(path.name) &&
                !excludedHeroes.includes(path.name)
            ) &&
            solution.some(
              (path) =>
                includedHeroes.length === 0 ||
                includedHeroes.includes(path.name)
            ) &&
            (!showHeroSolutions || solution.some((path) => path.isHero))
        )}
        solutionTile={solutionTile}
        solutionNum={solutionCtNum}
        disableClear={selectedTile === ""}
        clearSolutions={() => {
          setSolutionTile("");
          setSolutions([]);
        }}
      />
      <div className="divider font-display">Notes</div>
      <p className="text-center">
        This calculator is experimental! It's not guaranteed to work and things
        could be broken.
        <br />
        Thanks Josh Cheek (Spike Factory) for the base algorithm. Originally
        written in Ruby, then converted to TypeScript by me.
        <br />
        It's possible that the site crashes while doing calculations. All I can
        say right now is be nice with your parameters.
        <br />
        There is a hard cap of 2000 solutions.
        <br />
      </p>
      <div className="divider font-display">Nerdy Stuff</div>
      <p className="text-center"></p>
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
