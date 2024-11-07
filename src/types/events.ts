export type EventType =
  | "Race"
  | "CtPlayer"
  | "CtTeam"
  | "Boss"
  | "Boss2"
  | "Boss3"
  | "Boss4";

export type BossMode = "Standard" | "Elite";

export type ScoringType = "GameTime" | "LeastCash" | "LeastTiers";

export type Event = {
  id: string;
  name: string;
  start: number;
  end: number;
  totalScores?: number;
  totalScores_player?: number;
  totalScores_team?: number;
  totalScores_standard?: number;
  totalScores_elite?: number;
  leaderboard: string;
  metadata: string;
  scoringType?: ScoringType;
  leaderboard_standard_players_1?: string;
  leaderboard_elite_players_1?: string;
  leaderboard_player?: string;
  leaderboard_team?: string;
};
