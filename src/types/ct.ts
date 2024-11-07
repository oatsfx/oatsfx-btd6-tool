export type CTData = {
  size: number;
  event: number;
  tiles: { [key: string]: Tile };
};

export type Tile = {
  colour: null | string;
  tile_type: TileType;
  relic: Relic | null;
  game_type: GameType | null;
  boss: null | string;
  tiers: number | null;
  game_mode: GameMode | null;
  map: null | string;
  difficulty: Difficulty | null;
  cash: number | null;
  start_round: number | null;
  end_round: number | null;
  max_towers: number | null;
  monkey_knowledge: boolean | null;
  selling: boolean | null;
  ceramic_health: number;
  moab_health: number;
  bloon_speed: number;
  moab_speed: number;
  regrow_rate: number;
  heroes: Hero[];
  towers: TowerElement[];
};

export const emptyTile: Tile = {
  colour: null,
  tile_type: "regular",
  relic: null,
  game_type: null,
  boss: null,
  tiers: null,
  game_mode: null,
  map: null,
  difficulty: null,
  cash: null,
  start_round: null,
  end_round: null,
  max_towers: null,
  monkey_knowledge: null,
  selling: null,
  ceramic_health: 100,
  moab_health: 100,
  bloon_speed: 100,
  moab_speed: 100,
  regrow_rate: 100,
  heroes: [],
  towers: [],
};

export type Difficulty = "easy" | "medium" | "hard";

export type GameMode = "double_moab_health" | "reverse" | "standard";

export type GameType = "boss" | "least_cash" | "least_tiers" | "race";

export type Hero =
  | "admiral_brickell"
  | "adora"
  | "benjamin"
  | "captain_churchill"
  | "corvus"
  | "etienne"
  | "ezili"
  | "geraldo"
  | "gwendolin"
  | "obyn_greenfoot"
  | "pat_fusty"
  | "psi"
  | "quincy"
  | "sauda"
  | "striker_jones";

export const allHeroes: Hero[] = [
  "admiral_brickell",
  "adora",
  "benjamin",
  "captain_churchill",
  "corvus",
  "etienne",
  "ezili",
  "geraldo",
  "gwendolin",
  "obyn_greenfoot",
  "pat_fusty",
  "psi",
  "quincy",
  "sauda",
  "striker_jones",
];

export type TileType = "banner" | "regular" | "relic";

export type TowerElement = {
  tower: Tower;
  max: number;
};

export type Tower =
  | "alchemist"
  | "banana_farm"
  | "beast_handler"
  | "bomb_shooter"
  | "boomerang_monkey"
  | "dart_monkey"
  | "dartling_gunner"
  | "druid" // thanks cyber quincy...
  | "druid_monkey"
  | "engineer_monkey"
  | "glue_gunner"
  | "heli_pilot"
  | "ice_monkey"
  | "mermonkey"
  | "monkey_ace"
  | "monkey_buccaneer"
  | "monkey_sub"
  | "monkey_village"
  | "mortar_monkey"
  | "ninja_monkey"
  | "sniper_monkey"
  | "spike_factory"
  | "super_monkey"
  | "tack_shooter"
  | "wizard_monkey";

export type Relic =
  | "abilitized"
  | "air_and_sea"
  | "alchemist_touch"
  | "bigger_bloon_sabotage"
  | "box_of_chocolates"
  | "box_of_monkey"
  | "broken_heart"
  | "camo_flogged"
  | "camo_trap"
  | "deep_heat"
  | "durable_shots"
  | "el_dorado"
  | "extra_empowered"
  | "files"
  | "flint_tips"
  | "fortifried"
  | "glue_trap"
  | "going_the_distance"
  | "hard_baked"
  | "heartless"
  | "hero_boost"
  | "magic_monkeys"
  | "mana_bulwark"
  | "marching_boots"
  | "military_monkeys"
  | "moab_clash"
  | "moab_mine"
  | "monkey_boost"
  | "monkey_tycoon"
  | "primary_primates"
  | "regeneration"
  | "restoration"
  | "road_spikes"
  | "rounding_up"
  | "royal_treatment"
  | "sharpsplosion"
  | "starting_stash"
  | "super_monkey_storm"
  | "support_simians"
  | "techbot"
  | "thrive";
