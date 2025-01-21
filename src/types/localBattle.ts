export type LocalBattle = {
  teams: LocalTeam[];
};

export type LocalTeam = {
  name: string;
  globalPosition: number;
  truce: boolean;
  isAyo: boolean;
};
