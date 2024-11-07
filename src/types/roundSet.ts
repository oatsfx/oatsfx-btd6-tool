export type RoundSet = {
  rounds: Round[];
  scale?: number;
};

export type Round = {
  bloonGroups: BloonGroup[];
  roundNumber: number;
  addToRound: boolean;
};

export type BloonGroup = {
  bloon: Bloon;
  count: number;
  start: number;
  duration: number;
};

export type RoundSetDef = {
  name: string;
  path: string;
  isComplete: boolean;
};

export type Bloon =
  | "Bad"
  | "BadFortified"
  | "Bfb"
  | "BfbFortified"
  | "Black"
  | "BlackCamo"
  | "BlackRegrow"
  | "BlackRegrowCamo"
  | "Blue"
  | "BlueCamo"
  | "BlueRegrow"
  | "BlueRegrowCamo"
  | "Ceramic"
  | "CeramicCamo"
  | "CeramicFortified"
  | "CeramicFortifiedCamo"
  | "CeramicRegrow"
  | "CeramicRegrowCamo"
  | "CeramicRegrowFortified"
  | "CeramicRegrowFortifiedCamo"
  | "DdtCamo"
  | "DdtFortifiedCamo"
  | "Green"
  | "GreenCamo"
  | "GreenRegrow"
  | "GreenRegrowCamo"
  | "Lead"
  | "LeadCamo"
  | "LeadFortified"
  | "LeadFortifiedCamo"
  | "LeadRegrow"
  | "LeadRegrowCamo"
  | "LeadRegrowFortified"
  | "LeadRegrowFortifiedCamo"
  | "Moab"
  | "MoabFortified"
  | "Pink"
  | "PinkCamo"
  | "PinkRegrow"
  | "PinkRegrowCamo"
  | "Purple"
  | "PurpleCamo"
  | "PurpleRegrow"
  | "PurpleRegrowCamo"
  | "Rainbow"
  | "RainbowCamo"
  | "RainbowRegrow"
  | "RainbowRegrowCamo"
  | "Red"
  | "RedCamo"
  | "RedRegrow"
  | "RedRegrowCamo"
  | "White"
  | "WhiteCamo"
  | "WhiteRegrow"
  | "WhiteRegrowCamo"
  | "Yellow"
  | "YellowCamo"
  | "YellowRegrow"
  | "YellowRegrowCamo"
  | "Zebra"
  | "ZebraCamo"
  | "ZebraRegrow"
  | "ZebraRegrowCamo"
  | "Zomg"
  | "ZomgFortified";

export const bloonArray: Bloon[] = [
  "Red",
  "RedCamo",
  "RedRegrow",
  "RedRegrowCamo",
  "Blue",
  "BlueCamo",
  "BlueRegrow",
  "BlueRegrowCamo",
  "Green",
  "GreenCamo",
  "GreenRegrow",
  "GreenRegrowCamo",
  "Yellow",
  "YellowCamo",
  "YellowRegrow",
  "YellowRegrowCamo",
  "Pink",
  "PinkCamo",
  "PinkRegrow",
  "PinkRegrowCamo",
  "Black",
  "BlackCamo",
  "BlackRegrow",
  "BlackRegrowCamo",
  "White",
  "WhiteCamo",
  "WhiteRegrow",
  "WhiteRegrowCamo",
  "Purple",
  "PurpleCamo",
  "PurpleRegrow",
  "PurpleRegrowCamo",
  "Zebra",
  "ZebraCamo",
  "ZebraRegrow",
  "ZebraRegrowCamo",
  "Lead",
  "LeadCamo",
  "LeadFortified",
  "LeadFortifiedCamo",
  "LeadRegrow",
  "LeadRegrowCamo",
  "LeadRegrowFortified",
  "LeadRegrowFortifiedCamo",
  "Rainbow",
  "RainbowCamo",
  "RainbowRegrow",
  "RainbowRegrowCamo",
  "Ceramic",
  "CeramicCamo",
  "CeramicFortified",
  "CeramicFortifiedCamo",
  "CeramicRegrow",
  "CeramicRegrowCamo",
  "CeramicRegrowFortified",
  "CeramicRegrowFortifiedCamo",
  "Moab",
  "MoabFortified",
  "Bfb",
  "BfbFortified",
  "Zomg",
  "ZomgFortified",
  "DdtCamo",
  "DdtFortifiedCamo",
  "Bad",
  "BadFortified",
];

export const getRoundDurationMs = (round: Round): number => {
  const rawDuration = round.bloonGroups.reduce((maxEnd, group) => {
    const endTime = group.start + group.duration;
    return Math.max(maxEnd, endTime);
  }, 0);

  return Math.round(rawDuration * 100) * 10;
};

export const getRoundDurationFrameMs = (round: Round): number => {
  const rawDuration = round.bloonGroups.reduce((maxEnd, group) => {
    const endTime = group.start + group.duration;
    return Math.max(maxEnd, endTime);
  }, 0);

  return (Math.ceil(rawDuration * 60) / 60) * 1000;
};
