import { Relic, Tower } from "types/ct";
import {
  bossEliteMedalImages,
  bossNormalMedalImages,
  ctPlayerMedalImages,
  ctTeamLocalMedalImages,
  ctTeamMedalImages,
  raceMedalImages,
} from "./formatters";
import { EventType } from "types/events";
import ctIds from "configs/ctIds.config";

export type TowerType = "primary" | "military" | "magic" | "support" | "hero";

export const roundEven5 = (num: number) => {
  if (num % 5 === 2.5) {
    return Math.floor(num / 5) * 5;
  }
  return Math.round(num / 5) * 5;
};

export const convertMsToTimeFormat = (ms: number): string => {
  // Calculate the hours, minutes, seconds, and milliseconds
  const hours = Math.floor(ms / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const milliseconds = Math.floor((ms % 1000) / 10); // Extract two digits of milliseconds

  // Format each part to ensure two digits
  const formattedHours = hours > 0 ? hours.toString().padStart(2, "0") : "";
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");
  const formattedMilliseconds = milliseconds.toString().padStart(2, "0");

  // Combine and return the formatted string
  return formattedHours
    ? `${formattedHours}:${formattedMinutes}:${formattedSeconds}.${formattedMilliseconds}`
    : `${formattedMinutes}:${formattedSeconds}.${formattedMilliseconds}`;
};

export const timeAgo = (timestamp: number): string => {
  const now = Date.now();
  const elapsed = now - timestamp;

  const msPerSecond = 1000;
  const msPerMinute = msPerSecond * 60;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;

  if (elapsed < msPerMinute) {
    const seconds = Math.floor(elapsed / msPerSecond);
    return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
  } else if (elapsed < msPerHour) {
    const minutes = Math.floor(elapsed / msPerMinute);
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  } else if (elapsed < msPerDay) {
    const hours = Math.floor(elapsed / msPerHour);
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  } else {
    const days = Math.floor(elapsed / msPerDay);
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  }
};

export const formatGameEntityName = (entity: string): string => {
  const wordsToExclude = ["or", "the", "a", "of"];

  return entity
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space before capitals
    .replace(/\b(Or|The|A|Of)\b/g, (match) => match.toLowerCase()); // Lowercase specific words
};

export const formatGoldenAppleDiscordEmote = (relic: Relic): string => {
  return `:z_${relic}:`;
};

export const formatToUpperCase = (entity: string): string => {
  return entity
    .split("_")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
};

export const placeToRaceMedal = (
  place: number,
  totalEntries: number
): string => {
  if (place < 1) {
    return "";
  }

  const percentile = (place / totalEntries) * 100;

  if (place === 1) {
    return raceMedalImages.black_diamond;
  } else if (place === 2) {
    return raceMedalImages.red_diamond;
  } else if (place === 3) {
    return raceMedalImages.diamond;
  } else if (place <= 50) {
    return raceMedalImages.gold_diamond;
  } else if (percentile <= 1) {
    return raceMedalImages.double_gold;
  } else if (percentile <= 10) {
    return raceMedalImages.gold_silver;
  } else if (percentile <= 25) {
    return raceMedalImages.double_silver;
  } else if (percentile <= 50) {
    return raceMedalImages.silver;
  } else if (percentile <= 75) {
    return raceMedalImages.bronze;
  } else {
    return "";
  }
};

export const placeToBossNormalMedal = (
  place: number,
  totalEntries: number
): string => {
  if (place < 1) {
    return "";
  }

  const percentile = (place / totalEntries) * 100;

  if (place === 1) {
    return bossNormalMedalImages.black_diamond;
  } else if (place === 2) {
    return bossNormalMedalImages.red_diamond;
  } else if (place === 3) {
    return bossNormalMedalImages.diamond;
  } else if (place <= 50) {
    return bossNormalMedalImages.gold_diamond;
  } else if (percentile <= 1) {
    return bossNormalMedalImages.double_gold;
  } else if (percentile <= 10) {
    return bossNormalMedalImages.gold_silver;
  } else if (percentile <= 25) {
    return bossNormalMedalImages.double_silver;
  } else if (percentile <= 50) {
    return bossNormalMedalImages.silver;
  } else if (percentile <= 75) {
    return bossNormalMedalImages.bronze;
  } else {
    return "";
  }
};

export const placeToBossEliteMedal = (
  place: number,
  totalEntries: number
): string => {
  if (place < 1) {
    return "";
  }

  const percentile = (place / totalEntries) * 100;

  if (place === 1) {
    return bossEliteMedalImages.black_diamond;
  } else if (place === 2) {
    return bossEliteMedalImages.red_diamond;
  } else if (place === 3) {
    return bossEliteMedalImages.diamond;
  } else if (place <= 50) {
    return bossEliteMedalImages.gold_diamond;
  } else if (percentile <= 1) {
    return bossEliteMedalImages.double_gold;
  } else if (percentile <= 10) {
    return bossEliteMedalImages.gold_silver;
  } else if (percentile <= 25) {
    return bossEliteMedalImages.double_silver;
  } else if (percentile <= 50) {
    return bossEliteMedalImages.silver;
  } else if (percentile <= 75) {
    return bossEliteMedalImages.bronze;
  } else {
    return "";
  }
};

export const placeToCtPlayerMedal = (
  place: number,
  totalEntries: number
): string => {
  if (place < 1) {
    return "";
  }

  const percentile = (place / totalEntries) * 100;

  if (place <= 25) {
    return ctPlayerMedalImages.diamond;
  } else if (place <= 100) {
    return ctPlayerMedalImages.gold_diamond;
  } else if (percentile <= 1) {
    return ctPlayerMedalImages.double_gold;
  } else if (percentile <= 10) {
    return ctPlayerMedalImages.gold_silver;
  } else if (percentile <= 25) {
    return ctPlayerMedalImages.double_silver;
  } else if (percentile <= 50) {
    return ctPlayerMedalImages.silver;
  } else if (percentile <= 75) {
    return ctPlayerMedalImages.bronze;
  } else {
    return "";
  }
};

export const placeToCtTeamMedal = (
  place: number,
  totalEntries: number
): string => {
  if (place < 1) {
    return "";
  }

  const percentile = (place / totalEntries) * 100;

  if (place === 1) {
    return ctTeamMedalImages.black_diamond;
  } else if (place === 2) {
    return ctTeamMedalImages.red_diamond;
  } else if (place === 3) {
    return ctTeamMedalImages.diamond;
  } else if (place <= 25) {
    return ctTeamMedalImages.gold_diamond;
  } else if (place <= 100) {
    return ctTeamMedalImages.double_gold;
  } else if (percentile <= 1) {
    return ctTeamMedalImages.gold_silver;
  } else if (percentile <= 10) {
    return ctTeamMedalImages.double_silver;
  } else if (percentile <= 25) {
    return ctTeamMedalImages.silver;
  } else if (percentile <= 75) {
    return ctTeamMedalImages.bronze;
  } else {
    return "";
  }
};

export const placeToCtHistoryEmote = (
  place: number,
  totalEntries: number
): string => {
  const percentile = (place / totalEntries) * 100;

  if (place === 1) {
    return ":GT1:";
  } else if (place === 2) {
    return ":GT2:";
  } else if (place === 3) {
    return ":GT3:";
  } else if (place <= 25) {
    return ":GT25";
  } else if (place <= 100) {
    return ":GT100:";
  } else {
    return "";
  }
};

export const placeToCtTeamLocalMedal = (place: number) => {
  switch (place) {
    case 1:
      return ctTeamLocalMedalImages.diamond;
    case 2:
      return ctTeamLocalMedalImages.double_gold;
    case 3:
      return ctTeamLocalMedalImages.silver;
    case 4:
      return ctTeamLocalMedalImages.bronze;
    default:
      return "";
  }
};

export const appendOrdinalSuffix = (number: number): string => {
  const j = number % 10;
  const k = number % 100;
  if (j === 1 && k !== 11) {
    return number + "st";
  }
  if (j === 2 && k !== 12) {
    return number + "nd";
  }
  if (j === 3 && k !== 13) {
    return number + "rd";
  }
  return number + "th";
};

export const convertGameTypeToString = (gameType: number): string => {
  switch (gameType) {
    case 2:
      return "Race";
    case 4:
      return "Boss";
    case 8:
      return "LeastCash";
    case 9:
      return "LeastTiers";
    default:
      return "";
  }
};

export const formatEpochToReadableDate = (epochMs: number): string => {
  const date = new Date(epochMs);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const formatDateToEventHighlightDate = (epochMs: number): string => {
  const date = new Date(epochMs);
  const day = date.getUTCDate();
  const month = date.toLocaleString("en-US", {
    month: "long",
    timeZone: "UTC",
  });
  const year = date.getUTCFullYear();
  return `${appendOrdinalSuffix(day)} ${month} ${year}`;
};

export const towerTypes: { [key in Tower]: TowerType } = {
  Alchemist: "magic",
  BananaFarm: "support",
  BeastHandler: "support",
  BoomerangMonkey: "primary",
  BombShooter: "primary",
  DartMonkey: "primary",
  DartlingGunner: "military",
  Druid: "magic",
  EngineerMonkey: "support",
  GlueGunner: "primary",
  HeliPilot: "military",
  IceMonkey: "primary",
  Mermonkey: "magic",
  MonkeyAce: "military",
  MonkeyBuccaneer: "military",
  MonkeySub: "military",
  MonkeyVillage: "support",
  MortarMonkey: "military",
  NinjaMonkey: "magic",
  SniperMonkey: "military",
  SpikeFactory: "support",
  SuperMonkey: "magic",
  TackShooter: "primary",
  WizardMonkey: "magic",
  // Heroes
  AdmiralBrickell: "hero",
  Adora: "hero",
  Benjamin: "hero",
  CaptainChurchill: "hero",
  Corvus: "hero",
  Etienne: "hero",
  Ezili: "hero",
  Geraldo: "hero",
  Gwendolin: "hero",
  ObynGreenfoot: "hero",
  PatFusty: "hero",
  Psi: "hero",
  Quincy: "hero",
  Rosalia: "hero",
  Sauda: "hero",
  StrikerJones: "hero",
  ChosenPrimaryHero: "hero",
};

export const prettyEventNames: { [key in EventType]: string } = {
  Race: "Race",
  Boss: "Boss",
  Boss2: "Boss",
  Boss3: "Boss",
  Boss4: "Boss",
  CtPlayer: "Contested Territory",
  CtTeam: "Contested Territory",
};

export const prettyNames: { [key in EventType]: string } = {
  Race: "Race",
  Boss: "Solo",
  Boss2: "Duo",
  Boss3: "Trio",
  Boss4: "Quad",
  CtPlayer: "Player",
  CtTeam: "Team",
};
