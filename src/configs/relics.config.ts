import airAndSeaImage from "images/relics/air_and_sea.webp";
import boxOfMonkeyImage from "images/relics/box_of_monkey.webp";
import magicMonkeysImage from "images/relics/magic_monkeys.webp";
import marchingBootsImage from "images/relics/marching_boots.webp";
import militaryMonkeysImage from "images/relics/military_monkeys.webp";
import monkeyTycoonImage from "images/relics/monkey_tycoon.webp";
import primaryPrimatesImage from "images/relics/primary_primates.webp";
import supportSimiansImages from "images/relics/support_simians.webp";
import startingStashImage from "images/relics/starting_stash.webp";
import { RelicData } from "types/relic";

const costInfluencingRelics: RelicData[] = [
  {
    name: "Air and Sea",
    id: "AirAndSea",
    image: airAndSeaImage,
    description:
      "Ace, Heli, Buccaneer and Sub have their placement and upgrade costs reduced by 5%, and their reload improved by 5% ",
  },
  {
    name: "Box of Monkey",
    id: "BoxOfMonkey",
    image: boxOfMonkeyImage,
    description:
      "Start each game with one free Monkey costing $400 or less for unmodified initial placement.",
  },
  {
    name: "Magic Monkeys",
    id: "MagicMonkeys",
    image: magicMonkeysImage,
    description: "Reduces cost of all Magic Monkeys by 8%.",
  },
  {
    name: "Marching Boots",
    id: "MarchingBoots",
    image: marchingBootsImage,
    description:
      "In restricted count games, give players +1 max count of each tower in their loadout or +4 total max count per game.",
  },
  {
    name: "Military Monkeys",
    id: "MilitaryMonkeys",
    image: militaryMonkeysImage,
    description: "Reduces cost of all Military Monkeys by 8%.",
  },
  {
    name: "Monkey Tycoon",
    id: "MonkeyTycoon",
    image: monkeyTycoonImage,
    description:
      "Get +1 of all Monkey Towers in your loadout and their base price is reduced by 4%.",
  },
  {
    name: "Primary Primates",
    id: "PrimaryPrimates",
    image: primaryPrimatesImage,
    description: "Reduces cost of all Primary Monkeys by 8%.",
  },
  {
    name: "Support Simians",
    id: "SupportSimians",
    image: supportSimiansImages,
    description: "Reduces cost of all Support Monkeys by 8%.",
  },
  {
    name: "Starting Stash",
    id: "StartingStash",
    image: startingStashImage,
    description:
      "Start each game with an extra 250 cash (stacks with More Cash on Regular Tiles).",
  },
];

export default costInfluencingRelics;
