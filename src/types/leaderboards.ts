export type LeaderboardData<T> = {
  error: string | null;
  success: boolean;
  body: T;
  next: string | null;
  prev: string | null;
};

export type LeaderboardEntry = {
  displayName: string;
  score: number;
  scoreParts: ScorePart[];
  submissionTime?: number;
  profile: string;
  otherPlayers?: { displayName: string; profile: string }[];
};

export type ScorePart = {
  score: number;
  name: ScoreName;
};

export type ScoreName =
  | "Game Time"
  | "Time after event start"
  | "Tiers"
  | "Cash Spent";

export type ProfileData = {
  displayName: string;
  rank: number;
  veteranRank: number;
  avatarURL: string;
  bannerURL: string;
  _medalsRace: RaceMedals;
};

export type RaceMedals = {
  BlackDiamond: number | null;
  RedDiamond: number | null;
  Diamond: number | null;
  GoldDiamond: number | null;
  DoubleGold: number | null;
  GoldSilver: number | null;
  DoubleSilver: number | null;
  Silver: number | null;
  Bronze: number | null;
};

export type RaceMedal =
  | "black_diamond"
  | "red_diamond"
  | "diamond"
  | "gold_diamond"
  | "double_gold"
  | "gold_silver"
  | "double_silver"
  | "silver"
  | "bronze";