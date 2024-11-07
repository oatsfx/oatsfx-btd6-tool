import { Tower } from "./ct";

export type TowerCostsData = { [key in Tower]: TowerCost };

export type TowerCost = {
  cost: number;
  upgrades: {
    top_path: { [key: number]: number };
    middle_path: { [key: number]: number };
    bottom_path: { [key: number]: number };
  };
};

export type TowerPath = {
  name: Tower;
  path: string;
  cost: number;
};

export const emptyCost = {
  cost: -1,
  upgrades: {
    topPath: {},
    middlePath: {},
    bottomPath: {},
  },
};

export const difficultyMultiplers = {
  easy: 0.85,
  medium: 1,
  hard: 1.08,
  impoppable: 1.2,
};
