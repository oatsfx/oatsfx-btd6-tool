export type CTData = { [code: string]: Tile };

export type Tile = {
  EventNumber: number;
  Code: string;
  TileType: TileType;
  RelicType: Relic;
  GameData: GameData;
};

export type GameData = {
  selectedMap: string;
  selectedMode: Mode;
  // 2 - Race; 8 - LC; 9 - LT
  subGameType: number;
  selectedDifficulty: Difficulty;
  dcModel: DcModel;
  bossData?: BossData;
};

export type DcModel = {
  startRules: StartRules;
  map: string;
  mode: Mode;
  difficulty: Difficulty;
  maxTowers: number;
  disableMK: boolean;
  disableSelling: boolean;
  bloonModifiers: BloonModifiers;
  towers: Towers;
};

export type BloonModifiers = {
  healthMultipliers: HealthMultipliers;
  speedMultiplier: number;
  moabSpeedMultiplier: number;
  regrowRateMultiplier: number;
};

export type HealthMultipliers = {
  bloons: number;
  moabs: number;
};

export type BossData = {
  bossBloon: number;
  tierCount: number;
};

export type Difficulty = "Easy" | "Hard" | "Medium";

export type Mode = "Standard" | "Reverse" | "DoubleMoabHealth";

export type StartRules = {
  lives: number;
  cash: number;
  round: number;
  endRound: number;
};

export type Towers = {
  _items: Item[];
};

export type Item = {
  tower: Tower;
  isHero: boolean;
  max: number;
};

export type Tower =
  | "DartMonkey"
  | "BoomerangMonkey"
  | "BombShooter"
  | "TackShooter"
  | "IceMonkey"
  | "GlueGunner"
  | "Desperado"
  | "SniperMonkey"
  | "MonkeySub"
  | "MonkeyBuccaneer"
  | "MonkeyAce"
  | "HeliPilot"
  | "MortarMonkey"
  | "DartlingGunner"
  | "WizardMonkey"
  | "SuperMonkey"
  | "NinjaMonkey"
  | "Alchemist"
  | "Druid"
  | "Mermonkey"
  | "BananaFarm"
  | "SpikeFactory"
  | "MonkeyVillage"
  | "EngineerMonkey"
  | "BeastHandler"
  | "Quincy"
  | "Gwendolin"
  | "StrikerJones"
  | "ObynGreenfoot"
  | "CaptainChurchill"
  | "Benjamin"
  | "Ezili"
  | "PatFusty"
  | "Adora"
  | "AdmiralBrickell"
  | "Etienne"
  | "Sauda"
  | "Psi"
  | "Geraldo"
  | "Corvus"
  | "Rosalia"
  | "ChosenPrimaryHero";

export type TileType = "TeamFirstCapture" | "Relic" | "Regular" | "Banner";

export type GameType = "boss" | "least_cash" | "least_tiers" | "race";

export type TowerElement = {
  tower: Tower;
  max: number;
};

export type Relic =
  | "Abilitized"
  | "AirAndSea"
  | "AlchemistTouch"
  | "BiggerBloonSabotage"
  | "BoxOfChocolates"
  | "BoxOfMonkey"
  | "BrokenHeart"
  | "CamoFlogged"
  | "CamoTrap"
  | "DeepHeat"
  | "DurableShots"
  | "ElDorado"
  | "ExtraEmpowered"
  | "Files"
  | "FlintTips"
  | "Fortifried"
  | "GlueTrap"
  | "GoingTheDistance"
  | "HardBaked"
  | "Heartless"
  | "HeroBoost"
  | "MagicMonkeys"
  | "ManaBulwark"
  | "MarchingBoots"
  | "MilitaryMonkeys"
  | "MoabClash"
  | "MoabMine"
  | "MonkeyBoost"
  | "MonkeyTycoon"
  | "PrimaryPrimates"
  | "Regeneration"
  | "Restoration"
  | "RoadSpikes"
  | "RoundingUp"
  | "RoyalTreatment"
  | "Sharpsplosion"
  | "StartingStash"
  | "SuperMonkeyStorm"
  | "SupportSimians"
  | "Techbot"
  | "Thrive";
