import { Difficulty, Tower } from "./ct";

export type TowerCostsData = { [key in Tower]: TowerCost };

export type HeroCostsData = { [key in Tower]: HeroCost };

export type TowerCost = {
  cost: number;
  upgrades: {
    top_path: { [key: number]: number };
    middle_path: { [key: number]: number };
    bottom_path: { [key: number]: number };
  };
};

export type HeroCost = {
  cost: number;
  levelModifier: number;
};

export type TowerPath = {
  name: Tower;
  path: string;
  cost: number;
  boxOfMonkey?: boolean;
  isHero?: boolean;
};

export const emptyCost = {
  cost: -1,
  upgrades: {
    topPath: {},
    middlePath: {},
    bottomPath: {},
  },
};

export const difficultyMultiplers: Record<Difficulty, number> = {
  Easy: 0.85,
  Medium: 1,
  Hard: 1.08,
  // Impoppable: 1.2,
};
