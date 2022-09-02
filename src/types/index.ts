import { ArraySchema, Schema, type } from "@colyseus/schema";

export enum Dungeon {
  FOURTH_STATION_PATH = "FOURTH_STATION_PATH",
  SEVEN_STATION_PATH = "SEVEN_STATION_PATH",
  BARREN_VALLEY = "BARREN_VALLEY",
  DARK_ICE_MOUNTAIN_PEAK = "DARK_ICE_MOUNTAIN_PEAK",
  DARK_WASTELAND = "DARK_WASTELAND",
  DEEP_BOULDER_QUARRY = "DEEP_BOULDER_QUARRY",
  LIMESTONE_CAVERN = "LIMESTONE_CAVERN",
  DEEP_LIMESTONE_CAVERN = "DEEP_LIMESTONE_CAVERN",
  ICICLE_FOREST = "ICICLE_FOREST",
  MURKY_FOREST = "MURKY_FOREST",
  SPACIAL_CLIFFS = "SPACIAL_CLIFFS",
  TEMPORAL_SPIRE_FUTURE = "TEMPORAL_SPIRE_FUTURE",
  TEMPORAL_TOWER_FUTURE = "TEMPORAL_TOWER_FUTURE",
  VAST_ICE_MOUNTAIN_PEAK = "VAST_ICE_MOUNTAIN_PEAK",
  VAST_ICE_MOUNTAIN = "VAST_ICE_MOUNTAIN",
  AMP_PLAINS = "AMP_PLAINS",
  FAR_AMP_PLAINS = "FAR_AMP_PLAINS",
  FINAL_MAZE_B23F = "FINAL_MAZE_B23F",
  FOGGY_FOREST = "FOGGY_FOREST",
  FOREST_PATH = "FOREST_PATH",
  GOLD_CHAMBER = "GOLD_CHAMBER",
  HIDDEN_HIGHLAND = "HIDDEN_HIGHLAND",
  MYSTERY_JUNGLE_01F_15F = "MYSTERY_JUNGLE_01F_15F",
  MYSTERY_JUNGLE_16F_30F = "MYSTERY_JUNGLE_16F_30F",
  MYSTIFYING_FOREST = "MYSTIFYING_FOREST",
  BEACH_CAVE = "BEACH_CAVE",
  BOTTOMLESS_SEA = "BOTTOMLESS_SEA",
  BRINE_CAVE = "BRINE_CAVE",
  CONCEALED_RUINS = "CONCEALED_RUINS",
  CRAGGY_COAST = "CRAGGY_COAST",
  CRYSTAL_CAVE_01F_05F = "CRYSTAL_CAVE_01F_05F",
  CRYSTAL_CAVE_06F_11F = "CRYSTAL_CAVE_06F_11F",
  CRYSTAL_CROSSING = "CRYSTAL_CROSSING",
  DARK_CRATER = "DARK_CRATER",
  DEEP_DARK_CRATER = "DEEP_DARK_CRATER",
  DARK_HILL_01F_06F = "DARK_HILL_01F_06F",
  DARK_HILL_07F_15F = "DARK_HILL_07F_15F",
  DEEP_DUSK_FOREST_01F_06F = "DEEP_DUSK_FOREST_01F_06F",
  DEEP_DUSK_FOREST_07F_12F = "DEEP_DUSK_FOREST_07F_12F",
  DEEP_SEALED_RUIN = "DEEP_SEALED_RUIN",
  DRENCHED_BLUFF = "DRENCHED_BLUFF",
  DUSK_FOREST_01F_04F = "DUSK_FOREST_01F_04F",
  DUSK_FOREST_05F_08F = "DUSK_FOREST_05F_08F",
  NORTHERN_DESERT_01F_07F = "NORTHERN_DESERT_01F_07F",
  QUICKSAND_CAVE = "QUICKSAND_CAVE",
  QUICKSAND_PIT = "QUICKSAND_PIT",
  ROCK_AEGIS_CAVE = "ROCK_AEGIS_CAVE",
  SURROUNDED_SEA = "SURROUNDED_SEA",
  TEMPORAL_SPIRE = "TEMPORAL_SPIRE",
  TEMPORAL_TOWER = "TEMPORAL_TOWER",
  TEST_DUNGEON = "TEST_DUNGEON",
  THE_NIGHTMARE = "THE_NIGHTMARE",
  TINY_MEADOW = "TINY_MEADOW",
  TREESHROUD_FOREST_01F_08F = "TREESHROUD_FOREST_01F_08F",
  TREESHROUD_FOREST_09F_21F = "TREESHROUD_FOREST_09F_21F",
  STEAM_CAVE = "STEAM_CAVE",
  QUICKSAND_PIT_2 = "QUICKSAND_PIT_2",
  LOWER_BRINE_CAVE = "LOWER_BRINE_CAVE",
  TEMPORAL_TOWER_2 = "TEMPORAL_TOWER_2",
  CRYSTAL_CAVE_2 = "CRYSTAL_CAVE_2",
  WATERFALL_CAVE = "WATERFALL_CAVE",
  WORLD_ABYSS = "WORLD_ABYSS",
  ZERO_ISLE_EAST_15F_25F = "ZERO_ISLE_EAST_15F_25F",
  ZERO_ISLE_EAST_26F_40F = "ZERO_ISLE_EAST_26F_40F",
  ZERO_ISLE_SOUTH_04F_08F = "ZERO_ISLE_SOUTH_04F_08F",
  ZERO_ISLE_SOUTH_01F_03F = "ZERO_ISLE_SOUTH_01F_03F",
  BURIED_RELIC_1F_20F = "BURIED_RELIC_1F_20F",
  BURIED_RELIC_21F_50F = "BURIED_RELIC_21F_50F",
  BURIED_RELIC_51F_99F = "BURIED_RELIC_51F_99F",
  DARKNIGHT_RELIC = "DARKNIGHT_RELIC",
  SHIMMER_DESERT = "SHIMMER_DESERT",
  UNOWN_RELIC = "UNOWN_RELIC",
  FROSTY_FOREST = "FROSTY_FOREST",
  GREAT_CANYON = "GREAT_CANYON",
  HOWLING_FOREST_01F_06F = "HOWLING_FOREST_01F_06F",
  HOWLING_FOREST_07F_15F = "HOWLING_FOREST_07F_15F",
  MT_FARAWAY = "MT_FARAWAY",
  MT_FARAWAY_10F_20F = "MT_FARAWAY_10F_20F",
  MT_FARAWAY_30F_39F = "MT_FARAWAY_30F_39F",
  JOYOUS_TOWER = "JOYOUS_TOWER",
  LAPIS_CAVE = "LAPIS_CAVE",
  LIGHTNING_FIELD = "LIGHTNING_FIELD",
  MAGMA_CAVERN_08F_17F = "MAGMA_CAVERN_08F_17F",
  MAGMA_CAVERN_18F_23F = "MAGMA_CAVERN_18F_23F",
  METEOR_CAVE = "METEOR_CAVE",
  MT_BLAZE = "MT_BLAZE",
  MT_STEEL_01F_05F = "MT_STEEL_01F_05F",
  MT_STEEL_06F_08F = "MT_STEEL_06F_08F",
  MT_FREEZE = "MT_FREEZE",
  MT_THUNDER_PEAK = "MT_THUNDER_PEAK",
  MT_THUNDER = "MT_THUNDER",
  MURKY_CAVE = "MURKY_CAVE",
  NORMAL_MAZE = "NORMAL_MAZE",
  NORTHERN_RANGE_01F_07F = "NORTHERN_RANGE_01F_07F",
  NORTHERN_RANGE_08F_16F = "NORTHERN_RANGE_08F_16F",
  NORTHWIND_FIELD = "NORTHWIND_FIELD",
  PITFALL_VALLEY = "PITFALL_VALLEY",
  POISON_MAZE = "POISON_MAZE",
  PURITY_FOREST_04F_07F = "PURITY_FOREST_04F_07F",
  PURITY_FOREST_13F_20F = "PURITY_FOREST_13F_20F",
  PURITY_FOREST_30F_43F = "PURITY_FOREST_30F_43F",
  PURITY_FOREST_44F_60F = "PURITY_FOREST_44F_60F",
  PURITY_FOREST_61F_79F = "PURITY_FOREST_61F_79F",
  PURITY_FOREST_80F_99F = "PURITY_FOREST_80F_99F",
  RESCUE_TEAM_MAZE = "RESCUE_TEAM_MAZE",
  ROCK_PATH = "ROCK_PATH",
  SILENT_CHASM = "SILENT_CHASM",
  SILVER_TRENCH = "SILVER_TRENCH",
  SINISTER_WOODS = "SINISTER_WOODS",
  SKY_TOWER = "SKY_TOWER",
  SNOW_PATH = "SNOW_PATH",
  SOLAR_CAVE = "SOLAR_CAVE",
  SOUTHERN_CAVERN_01F_23F = "SOUTHERN_CAVERN_01F_23F",
  SOUTHERN_CAVERN_24F_50F = "SOUTHERN_CAVERN_24F_50F",
  STORMY_SEA_01F_16F = "STORMY_SEA_01F_16F",
  STORMY_SEA_16F_39F = "STORMY_SEA_16F_39F",
  THUNDERWAVE_CAVE = "THUNDERWAVE_CAVE",
  TINY_WOODS = "TINY_WOODS",
  UPROAR_FOREST = "UPROAR_FOREST",
  SERENITY_RIVER = "SERENITY_RIVER",
  WATERFALL_POND = "WATERFALL_POND",
  WESTERN_CAVE_B01F_B27F = "WESTERN_CAVE_B01F_B27F",
  WESTERN_CAVE_B28F_B39F = "WESTERN_CAVE_B28F_B39F",
  WISH_CAVE_01F_13F = "WISH_CAVE_01F_13F",
  WISH_CAVE_90F_99F = "WISH_CAVE_90F_99F",
  WYVERN_HILL = "WYVERN_HILL",
}

export enum Header {
  WALL = "WALL",
  WALL_ALT_1 = "WALL_ALT_1",
  WALL_ALT_2 = "WALL_ALT_2",
  WALL_ALT_3 = "WALL_ALT_3",
  GROUND = "GROUND",
  GROUND_ALT_1 = "GROUND_ALT_1",
  GROUND_ALT_2 = "GROUND_ALT_2",
  GROUND_ALT_3 = "GROUND_ALT_3",
  GROUND_ALT_4 = "GROUND_ALT_4",
  WATER = "WATER",
  ABYSS = "ABYSS",
  ABYSS_ALT_1 = "ABYSS_ALT_1",
  ABYSS_ALT_2 = "ABYSS_ALT_2",
}

export type DungeonInfo = {
  id: string;
  name: string;
  tileset: Header[];
};

export enum Mask {
  X = "X",
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  AB = "AB",
  AC = "AC",
  AD = "AD",
  BC = "BC",
  BD = "BD",
  CD = "CD",
  ABC = "ABC",
  ABD = "ABD",
  ACD = "ACD",
  BCD = "BCD",
  ABCD = "ABCD",
  A1B = "A1B",
  B2C = "B2C",
  C3D = "C3D",
  AD4 = "AD4",
  A1BC = "A1BC",
  AB2C = "AB2C",
  B2CD = "B2CD",
  BC3D = "BC3D",
  AC3D = "AC3D",
  ACD4 = "ACD4",
  A1BD = "A1BD",
  ABD4 = "ABD4",
  A1B2C = "A1B2C",
  B2C3D = "B2C3D",
  AC3D4 = "AC3D4",
  A1BD4 = "A1BD4",
  A1BCD = "A1BCD",
  AB2CD = "AB2CD",
  ABC3D = "ABC3D",
  ABCD4 = "ABCD4",
  A1B2CD = "A1B2CD",
  AB2C3D = "AB2C3D",
  ABC3D4 = "ABC3D4",
  A1BCD4 = "A1BCD4",
  A1B2C3D = "A1B2C3D",
  AB2C3D4 = "AB2C3D4",
  A1BC3D4 = "A1BC3D4",
  A1B2CD4 = "A1B2CD4",
  A1BC3D = "A1BC3D",
  AB2CD4 = "AB2CD4",
  A1B2C3D4 = "A1B2C3D4",
}

export enum TerrainType {
  GROUND,
  WALL,
  WATER,
}

export const IdTable: { [key: number]: Mask } = {
  0: Mask.X,
  1: Mask.A,
  2: Mask.B,
  4: Mask.C,
  8: Mask.D,
  3: Mask.AB,
  5: Mask.AC,
  9: Mask.AD,
  6: Mask.BC,
  10: Mask.BD,
  12: Mask.CD,
  7: Mask.ABC,
  11: Mask.ABD,
  13: Mask.ACD,
  14: Mask.BCD,
  15: Mask.ABCD,
  19: Mask.A1B,
  38: Mask.B2C,
  76: Mask.C3D,
  137: Mask.AD4,
  23: Mask.A1BC,
  39: Mask.AB2C,
  46: Mask.B2CD,
  78: Mask.BC3D,
  77: Mask.AC3D,
  141: Mask.ACD4,
  27: Mask.A1BD,
  139: Mask.ABD4,
  55: Mask.A1B2C,
  110: Mask.B2C3D,
  205: Mask.AC3D4,
  155: Mask.A1BD4,
  31: Mask.A1BCD,
  47: Mask.AB2CD,
  79: Mask.ABC3D,
  143: Mask.ABCD4,
  63: Mask.A1B2CD,
  111: Mask.AB2C3D,
  207: Mask.ABC3D4,
  159: Mask.A1BCD4,
  127: Mask.A1B2C3D,
  239: Mask.AB2C3D4,
  223: Mask.A1BC3D4,
  191: Mask.A1B2CD4,
  95: Mask.A1BC3D,
  175: Mask.AB2CD4,
  255: Mask.A1B2C3D4,
};

export const DungeonData: { [key in Dungeon]: DungeonInfo } = Object.freeze({
  FOURTH_STATION_PATH: {
    id: "FOURTH_STATION_PATH",
    name: "4th Station Path",
    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.WATER,
    ],
  },
  SEVEN_STATION_PATH: {
    id: "SEVEN_STATION_PATH",
    name: "7th Station Path",
    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.WATER,
    ],
  },
  BARREN_VALLEY: {
    id: "BARREN_VALLEY",
    name: "Barren Valley",
    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  DARK_ICE_MOUNTAIN_PEAK: {
    id: "DARK_ICE_MOUNTAIN_PEAK",
    name: "Dark Ice Mountain Peak",
    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  DARK_ICE_MOUNTAIN: {
    id: "DARK_ICE_MOUNTAIN",
    name: "Dark Ice Mountain",
    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  DARK_WASTELAND: {
    id: "DARK_WASTELAND",
    name: "Dark Wasteland",
    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  DEEP_BOULDER_QUARRY: {
    id: "DEEP_BOULDER_QUARRY",
    name: "Deep Boulder Quarry",
    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.WATER,
    ],
  },
  LIMESTONE_CAVERN: {
    id: "LIMESTONE_CAVERN",
    name: "Limestone Cavern",
    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.WATER,
    ],
  },
  DEEP_LIMESTONE_CAVERN: {
    id: "DEEP_LIMESTONE_CAVERN",
    name: "Deep Limestone Cavern",
    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.WATER,
    ],
  },
  ICICLE_FOREST: {
    id: "ICICLE_FOREST",
    name: "Icicle Forest",
    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  MURKY_FOREST: {
    id: "MURKY_FOREST",
    name: "Murky Forest",
    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  SPACIAL_CLIFFS: {
    id: "SPACIAL_CLIFFS",
    name: "Spacial Cliffs",
    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  TEMPORAL_SPIRE_FUTURE: {
    id: "TEMPORAL_SPIRE_FUTURE",
    name: "Temporal Spire Future",
    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  TEMPORAL_TOWER_FUTURE: {
    id: "TEMPORAL_TOWER_FUTURE",
    name: "Temporal Tower Future",
    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  VAST_ICE_MOUNTAIN_PEAK: {
    id: "VAST_ICE_MOUNTAIN_PEAK",
    name: "Vast Ice Mountain Peak",
    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  VAST_ICE_MOUNTAIN: {
    id: "VAST_ICE_MOUNTAIN",
    name: "Vast Ice Mountain",
    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  AMP_PLAINS: {
    id: "AMP_PLAINS",
    name: "Amp Plains",
    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  FAR_AMP_PLAINS: {
    id: "FAR_AMP_PLAINS",
    name: "Far Amp Plains",
    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  FINAL_MAZE_B23F: {
    id: "FINAL_MAZE_B23F",
    name: "Final Maze",
    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.WATER,
    ],
  },
  FOGGY_FOREST: {
    id: "FOGGY_FOREST",
    name: "Foggy Forest",
    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  FOREST_PATH: {
    id: "FOREST_PATH",
    name: "Forest Path",
    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  GOLD_CHAMBER: {
    id: "GOLD_CHAMBER",
    name: "Gold Chamber",
    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  HIDDEN_HIGHLAND: {
    id: "HIDDEN_HIGHLAND",
    name: "Hidden Highland",
    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  MYSTERY_JUNGLE_01F_15F: {
    id: "MYSTERY_JUNGLE_01F_15F",
    name: "Mystery Jungle",
    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.WALL_ALT_3,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  MYSTERY_JUNGLE_16F_30F: {
    id: "MYSTERY_JUNGLE_16F_30F",
    name: "Mystery Jungle",
    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  MYSTIFYING_FOREST: {
    id: "MYSTIFYING_FOREST",
    name: "Mystifying Forest",
    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  BEACH_CAVE: {
    id: "BEACH_CAVE",
    name: "Beach Cave",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.GROUND_ALT_4,
      Header.WATER,
    ],
  },
  BOTTOMLESS_SEA: {
    id: "BOTTOMLESS_SEA",
    name: "Bottomless Sea",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.WATER,
    ],
  },
  BRINE_CAVE: {
    id: "BRINE_CAVE",
    name: "Brine Cave",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  CONCEALED_RUINS: {
    id: "CONCEALED_RUINS",
    name: "Concealed Ruins",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  CRAGGY_COAST: {
    id: "CRAGGY_COAST",
    name: "Craggy Coast",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  CRYSTAL_CAVE_01F_05F: {
    id: "CRYSTAL_CAVE_01F_05F",
    name: "Crystal Cave",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  CRYSTAL_CAVE_06F_11F: {
    id: "CRYSTAL_CAVE_06F_11F",
    name: "Crystal Cave",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  CRYSTAL_CROSSING: {
    id: "CRYSTAL_CROSSING",
    name: "Crystal Crossing",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  DARK_CRATER: {
    id: "DARK_CRATER",
    name: "Dark Crater",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  DEEP_DARK_CRATER: {
    id: "DEEP_DARK_CRATER",
    name: "Deep Dark Crater",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  DARK_HILL_01F_06F: {
    id: "DARK_HILL_01F_06F",
    name: "Dark Hill",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  DARK_HILL_07F_15F: {
    id: "DARK_HILL_07F_15F",
    name: "Dark Hill",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  DEEP_DUSK_FOREST_01F_06F: {
    id: "DEEP_DUSK_FOREST_01F_06F",
    name: "Deep Dusk Forest",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  DEEP_DUSK_FOREST_07F_12F: {
    id: "DEEP_DUSK_FOREST_07F_12F",
    name: "Deep Dusk Forest",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  DEEP_SEALED_RUIN: {
    id: "DEEP_SEALED_RUIN",
    name: "Deep Sealed Ruin",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  DRENCHED_BLUFF: {
    id: "DRENCHED_BLUFF",
    name: "Drenched Bluff",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  DUSK_FOREST_01F_04F: {
    id: "DUSK_FOREST_01F_04F",
    name: "Dusk Forest",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  DUSK_FOREST_05F_08F: {
    id: "DUSK_FOREST_05F_08F",
    name: "Dusk Forest",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  NORTHERN_DESERT_01F_07F: {
    id: "NORTHERN_DESERT_01F_07F",
    name: "Northern Desert",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  QUICKSAND_CAVE: {
    id: "QUICKSAND_CAVE",
    name: "Quicksand Cave",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  QUICKSAND_PIT: {
    id: "QUICKSAND_PIT",
    name: "Quicksand Pit",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  ROCK_AEGIS_CAVE: {
    id: "ROCK_AEGIS_CAVE",
    name: "Rock Aegis Cave",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  SURROUNDED_SEA: {
    id: "SURROUNDED_SEA",
    name: "Surrounded Sea",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.WATER,
    ],
  },
  TEMPORAL_SPIRE: {
    id: "TEMPORAL_SPIRE",
    name: "Temporal Spire",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  TEMPORAL_TOWER: {
    id: "TEMPORAL_TOWER",
    name: "Temporal Tower",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  TEST_DUNGEON: {
    id: "TEST_DUNGEON",
    name: "Test Dungeon",

    tileset: [Header.WALL, Header.WALL_ALT_1, Header.GROUND, Header.WATER],
  },
  THE_NIGHTMARE: {
    id: "THE_NIGHTMARE",
    name: "The Nightmare",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  TINY_MEADOW: {
    id: "TINY_MEADOW",
    name: "Tiny Meadow",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  TREESHROUD_FOREST_01F_08F: {
    id: "TREESHROUD_FOREST_01F_08F",
    name: "Treeshroud Forest",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  TREESHROUD_FOREST_09F_21F: {
    id: "TREESHROUD_FOREST_09F_21F",
    name: "Treeshroud Forest",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  STEAM_CAVE: {
    id: "STEAM_CAVE",
    name: "Steam Cave",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  QUICKSAND_PIT_2: {
    id: "QUICKSAND_PIT_2",
    name: "Quicksand Pit",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  LOWER_BRINE_CAVE: {
    id: "LOWER_BRINE_CAVE",
    name: "Lower Brine Cave",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  HIDDEN_LAND: {
    id: "HIDDEN_LAND",
    name: "Hidden land",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  TEMPORAL_TOWER_2: {
    id: "TEMPORAL_TOWER_2",
    name: "Temporal Tower",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  CRYSTAL_CAVE_2: {
    id: "CRYSTAL_CAVE_2",
    name: "Crystal Cave",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.WATER,
    ],
  },
  WATERFALL_CAVE: {
    id: "WATERFALL_CAVE",
    name: "Waterfall Cave",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  WORLD_ABYSS: {
    id: "WORLD_ABYSS",
    name: "World Abyss",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  ZERO_ISLE_EAST_15F_25F: {
    id: "ZERO_ISLE_EAST_15F_25F",
    name: "Zero Isle East",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  ZERO_ISLE_EAST_26F_40F: {
    id: "ZERO_ISLE_EAST_26F_40F",
    name: "Zero Isle East",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  ZERO_ISLE_SOUTH_01F_03F: {
    id: "ZERO_ISLE_SOUTH_01F_03F",
    name: "Zero Isle South",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  ZERO_ISLE_SOUTH_04F_08F: {
    id: "ZERO_ISLE_SOUTH_04F_08F",
    name: "Zero Isle East",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  BURIED_RELIC_1F_20F: {
    id: "BURIED_RELIC_1F_20F",
    name: "Buried Relic",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.WATER,
    ],
  },
  BURIED_RELIC_21F_50F: {
    id: "BURIED_RELIC_21F_50F",
    name: "Buried Relic",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  BURIED_RELIC_51F_99F: {
    id: "BURIED_RELIC_51F_99F",
    name: "Buried Relic",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  DARKNIGHT_RELIC: {
    id: "DARKNIGHT_RELIC",
    name: "Darknight Relic",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.WATER,
    ],
  },
  SHIMMER_DESERT: {
    id: "SHIMMER_DESERT",
    name: "Shimmer Desert",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  UNOWN_RELIC: {
    id: "UNOWN_RELIC",
    name: "Unown Relic",
    pokemons: [],
    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.WATER,
    ],
  },
  FROSTY_FOREST: {
    id: "FROSTY_FOREST",
    name: "Frosty Forest",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.WATER,
    ],
  },
  GREAT_CANYON: {
    id: "GREAT_CANYON",
    name: "Great Canyon",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.WATER,
    ],
  },
  HOWLING_FOREST_01F_06F: {
    id: "HOWLING_FOREST_01F_06F",
    name: "Howling Forest",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.WATER,
    ],
  },
  HOWLING_FOREST_07F_15F: {
    id: "HOWLING_FOREST_07F_15F",
    name: "Howling Forest",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.WATER,
    ],
  },
  MT_FARAWAY: {
    id: "MT_FARAWAY",
    name: "Mt Faraway",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.WATER,
    ],
  },
  MT_FARAWAY_10F_20F: {
    id: "MT_FARAWAY_10F_20F",
    name: "Mt Faraway",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.WATER,
    ],
  },
  MT_FARAWAY_30F_39F: {
    id: "MT_FARAWAY_30F_39F",
    name: "Mt Faraway",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  JOYOUS_TOWER: {
    id: "JOYOUS_TOWER",
    name: "Joyous Tower",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.WATER,
    ],
  },
  LAPIS_CAVE: {
    id: "LAPIS_CAVE",
    name: "Lapis Cave",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.WATER,
    ],
  },
  LIGHTNING_FIELD: {
    id: "LIGHTNING_FIELD",
    name: "Lightning Field",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.WATER,
    ],
  },
  MAGMA_CAVERN_08F_17F: {
    id: "MAGMA_CAVERN_08F_17F",
    name: "Magma Cavern",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.WATER,
    ],
  },
  MAGMA_CAVERN_18F_23F: {
    id: "MAGMA_CAVERN_18F_23F",
    name: "Magma Cavern",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.WATER,
    ],
  },
  METEOR_CAVE: {
    id: "METEOR_CAVE",
    name: "Meteor Cave",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.WATER,
    ],
  },
  MT_BLAZE: {
    id: "MT_BLAZE",
    name: "Mt Blaze",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.WATER,
    ],
  },
  MT_STEEL_01F_05F: {
    id: "MT_STEEL_01F_05F",
    name: "Mt Steel",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.WATER,
    ],
  },
  MT_STEEL_06F_08F: {
    id: "MT_STEEL_06F_08F",
    name: "Mt Steel",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.WATER,
    ],
  },
  MT_FREEZE: {
    id: "MT_FREEZE",
    name: "Mt Freeze",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.WATER,
    ],
  },
  MT_THUNDER_PEAK: {
    id: "MT_THUNDER_PEAK",
    name: "Mt Thunder Peak",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.WATER,
    ],
  },
  MT_THUNDER: {
    id: "MT_THUNDER",
    name: "Mt Thunder",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.WATER,
    ],
  },
  MURKY_CAVE: {
    id: "MURKY_CAVE",
    name: "Murky Cave",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.WATER,
    ],
  },
  NORMAL_MAZE: {
    id: "NORMAL_MAZE",
    name: "Normal Maze",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.WATER,
    ],
  },
  NORTHERN_RANGE_01F_07F: {
    id: "NORTHERN_RANGE_01F_07F",
    name: "Northern Range",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.WATER,
    ],
  },
  NORTHERN_RANGE_08F_16F: {
    id: "NORTHERN_RANGE_08F_16F",
    name: "Northern Range",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.WATER,
    ],
  },
  NORTHWIND_FIELD: {
    id: "NORTHWIND_FIELD",
    name: "Northwind Field",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.WATER,
    ],
  },
  PITFALL_VALLEY: {
    id: "PITFALL_VALLEY",
    name: "Pitfall Valley",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.WATER,
    ],
  },
  POISON_MAZE: {
    id: "POISON_MAZE",
    name: "Poison Maze",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  PURITY_FOREST_04F_07F: {
    id: "PURITY_FOREST_04F_07F",
    name: "Purity Forest",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.WATER,
    ],
  },
  PURITY_FOREST_13F_20F: {
    id: "PURITY_FOREST_13F_20F",
    name: "Purity Forest",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.WATER,
    ],
  },
  PURITY_FOREST_30F_43F: {
    id: "PURITY_FOREST_30F_43F",
    name: "Purity Forest",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.WATER,
    ],
  },
  PURITY_FOREST_44F_60F: {
    id: "PURITY_FOREST_44F_60F",
    name: "Purity Forest",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.WATER,
    ],
  },
  PURITY_FOREST_61F_79F: {
    id: "PURITY_FOREST_61F_79F",
    name: "Purity Forest",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.WATER,
    ],
  },
  PURITY_FOREST_80F_99F: {
    id: "PURITY_FOREST_80F_99F",
    name: "Purity Forest",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  RESCUE_TEAM_MAZE: {
    id: "RESCUE_TEAM_MAZE",
    name: "Rescue Team Maze",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.WATER,
    ],
  },
  ROCK_PATH: {
    id: "ROCK_PATH",
    name: "Rock Path",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.WATER,
    ],
  },
  SILENT_CHASM: {
    id: "SILENT_CHASM",
    name: "Silent Chasm",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  SILVER_TRENCH: {
    id: "SILVER_TRENCH",
    name: "Silver Trench",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.WATER,
    ],
  },
  SINISTER_WOODS: {
    id: "SINISTER_WOODS",
    name: "Sinister Woods",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.WATER,
    ],
  },
  SKY_TOWER: {
    id: "SKY_TOWER",
    name: "Sky Tower",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.WATER,
    ],
  },
  SNOW_PATH: {
    id: "SNOW_PATH",
    name: "Snow Path",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.WATER,
    ],
  },
  SOLAR_CAVE: {
    id: "SOLAR_CAVE",
    name: "Solar Cave",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  SOUTHERN_CAVERN_01F_23F: {
    id: "SOUTHERN_CAVERN_01F_23F",
    name: "Southern Cavern",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  SOUTHERN_CAVERN_24F_50F: {
    id: "SOUTHERN_CAVERN_24F_50F",
    name: "Southern Cavern",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.WATER,
    ],
  },
  STORMY_SEA_01F_16F: {
    id: "STORMY_SEA_01F_16F",
    name: "Stormy Sea",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.WATER,
    ],
  },
  STORMY_SEA_16F_39F: {
    id: "STORMY_SEA_16F_39F",
    name: "Stormy Sea",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.WATER,
    ],
  },
  THUNDERWAVE_CAVE: {
    id: "THUNDERWAVE_CAVE",
    name: "Thunderwave Cave",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  TINY_WOODS: {
    id: "TINY_WOODS",
    name: "Tiny Woods",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.WATER,
    ],
  },
  UPROAR_FOREST: {
    id: "UPROAR_FOREST",
    name: "Uproar Forest",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.WATER,
    ],
  },
  SERENITY_RIVER: {
    id: "SERENITY_RIVER",
    name: "Serenity River",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  WATERFALL_POND: {
    id: "WATERFALL_POND",
    name: "Waterfall Pond",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.WATER,
    ],
  },
  WESTERN_CAVE_B01F_B27F: {
    id: "WESTERN_CAVE_B01F_B27F",
    name: "Western Cave",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  WESTERN_CAVE_B28F_B39F: {
    id: "WESTERN_CAVE_B28F_B39F",
    name: "Western Cave",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  WISH_CAVE_01F_13F: {
    id: "WISH_CAVE_01F_13F",
    name: "Wish Cave",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.GROUND_ALT_3,
      Header.WATER,
    ],
  },
  WISH_CAVE_90F_99F: {
    id: "WISH_CAVE_90F_99F",
    name: "Wish Cave",

    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.WATER,
    ],
  },
  WYVERN_HILL: {
    id: "WYVERN_HILL",
    name: "Wyvern Hill",
    tileset: [
      Header.WALL,
      Header.WALL_ALT_1,
      Header.WALL_ALT_2,
      Header.GROUND,
      Header.GROUND_ALT_1,
      Header.GROUND_ALT_2,
      Header.WATER,
    ],
  },
});

export const MaskCoordinate: { [key in Mask]: { x: number; y: number } } =
  Object.freeze({
    X: { x: 1, y: 4 },
    A: { x: 1, y: 8 },
    B: { x: 0, y: 7 },
    C: { x: 1, y: 6 },
    D: { x: 2, y: 7 },
    AB: { x: 0, y: 5 },
    AC: { x: 0, y: 4 },
    AD: { x: 2, y: 5 },
    BC: { x: 0, y: 3 },
    BD: { x: 1, y: 3 },
    CD: { x: 2, y: 3 },
    ABC: { x: 0, y: 10 },
    ABD: { x: 1, y: 11 },
    ACD: { x: 2, y: 10 },
    BCD: { x: 1, y: 9 },
    ABCD: { x: 1, y: 7 },
    A1B: { x: 0, y: 2 },
    B2C: { x: 0, y: 0 },
    C3D: { x: 2, y: 0 },
    AD4: { x: 2, y: 2 },
    A1BC: { x: 0, y: 17 },
    AB2C: { x: 0, y: 18 },
    B2CD: { x: 1, y: 19 },
    BC3D: { x: 0, y: 19 },
    AC3D: { x: 1, y: 18 },
    ACD4: { x: 1, y: 17 },
    A1BD: { x: 1, y: 20 },
    ABD4: { x: 0, y: 20 },
    A1B2C: { x: 0, y: 1 },
    B2C3D: { x: 1, y: 0 },
    AC3D4: { x: 2, y: 1 },
    A1BD4: { x: 1, y: 2 },
    A1BCD: { x: 0, y: 22 },
    AB2CD: { x: 0, y: 21 },
    ABC3D: { x: 1, y: 21 },
    ABCD4: { x: 1, y: 22 },
    A1B2CD: { x: 2, y: 13 },
    AB2C3D: { x: 1, y: 14 },
    ABC3D4: { x: 0, y: 13 },
    A1BCD4: { x: 1, y: 12 },
    A1B2C3D: { x: 1, y: 16 },
    AB2C3D4: { x: 0, y: 16 },
    A1BC3D4: { x: 0, y: 15 },
    A1B2CD4: { x: 1, y: 15 },
    A1BC3D: { x: 0, y: 23 },
    AB2CD4: { x: 1, y: 23 },
    A1B2C3D4: { x: 1, y: 1 },
  });

export enum Transfer {
  BUILD_CLICK = "BUILD_CLICK",
  GUESS_CLICK = "GUESS_CLICK",
}

export interface IBuildClick {
  x: number;
  y: number;
  id: string;
}

export interface INode {
  id: string;
  edges: string[];
  x: number;
  y: number;
  visited: boolean;
}

export interface IGraph {
  nodes: Map<string, INode>;
  entry: ICoordinate;
  exit: ICoordinate;
}

export interface ICoordinate {
  x: number;
  y: number;
}

export interface IPlayer {
  id: string;
  maze: IMaze;
  guessId: string;
  points: number;
  rank: number;
  displayName: string;
  dungeon: Dungeon;
}

export interface IMaze {
  data: ICell[];
  width: number;
  height: number;
  entry: ICoordinate;
  exit: ICoordinate;
  score: number;
}

export interface ICell {
  x: number;
  y: number;
  isEntry: boolean;
  isExit: boolean;
  isWall: boolean;
  isHole: boolean;
  isPath: boolean;
  mask: Mask;
}

export interface IGame {
  width: number;
  height: number;
  buildTime: number;
  guessTime: number;
  waitTime: number;
  phase: Phase;
  players: IPlayer[];
  time: number;
}

export enum Phase {
  BUILD = "BUILD",
  GUESS = "GUESS",
  DRAW = "DRAW",
  WAIT = "WAIT",
}

export class Cell extends Schema implements ICell {
  @type("number") x: number;
  @type("number") y: number;
  @type("boolean") isEntry: boolean;
  @type("boolean") isExit: boolean;
  @type("boolean") isWall: boolean;
  @type("boolean") isPath: boolean;
  @type("boolean") isHole: boolean;
  @type("string") mask: Mask;

  constructor(cell: ICell) {
    super();
    this.x = cell.x;
    this.y = cell.y;
    this.isEntry = cell.isEntry;
    this.isExit = cell.isExit;
    this.isWall = cell.isWall;
    this.isHole = cell.isHole;
    this.isPath = cell.isPath;
    this.mask = Mask.A;
  }
}

export class Coordinate extends Schema implements ICoordinate {
  @type("number") x: number;
  @type("number") y: number;

  constructor(coordinate: ICoordinate) {
    super();
    this.x = coordinate.x;
    this.y = coordinate.y;
  }
}

export class Maze extends Schema implements IMaze {
  @type([Cell]) data: ICell[];
  @type("number") width: number;
  @type("number") height: number;
  @type(Coordinate) entry: ICoordinate;
  @type(Coordinate) exit: ICoordinate;
  @type("number") score: number;

  constructor(maze: IMaze) {
    super();
    this.width = maze.width;
    this.height = maze.height;
    this.entry = new Coordinate(maze.entry);
    this.exit = new Coordinate(maze.exit);
    this.data = new ArraySchema<ICell>();
    this.score = 0;
    maze.data.forEach((d) => {
      this.data.push(new Cell(d));
    });
  }

  getEdges(x: number, y: number) {
    const edges = new Array<string>();

    [
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1],
    ].forEach((c) => {
      const v = this.getValue(c[0], c[1]);
      if (v && !v.isWall) {
        edges.push(`${c[0]}-${c[1]}`);
      }
    });
    return edges;
  }

  getValue(x: number, y: number): undefined | ICell {
    if (x >= 0 && y >= 0 && x < this.width && y < this.height) {
      return this.data[this.height * x + y];
    } else {
      return undefined;
    }
  }
}

export class Player extends Schema implements IPlayer {
  @type("string") id: string;
  @type(Maze) maze: Maze;
  @type("string") guessId: string;
  @type("number") points: number;
  @type("number") rank: number;
  @type("string") displayName: string;
  @type("string") dungeon: Dungeon;

  constructor(id: string, maze: IMaze) {
    super();
    this.id = id;
    this.guessId = "";
    this.maze = new Maze(maze);
    this.points = 0;
    this.rank = 0;
    this.displayName = "";
    this.dungeon = (Object.keys(Dungeon) as Dungeon[])[
      Math.floor(Math.random() * Object.keys(Dungeon).length)
    ];
  }
}

export class GameState extends Schema implements IGame {
  @type("number") width: number;
  @type("number") height: number;
  @type("number") buildTime: number;
  @type("number") guessTime: number;
  @type("number") waitTime: number;
  @type("number") time: number;
  @type("string") phase: Phase;
  @type([Player]) players: Player[];

  constructor(
    width: number,
    height: number,
    buildTime: number,
    guessTime: number,
    waitTime: number
  ) {
    super();
    this.players = new ArraySchema<Player>();
    this.width = width;
    this.height = height;
    this.buildTime = buildTime;
    this.guessTime = guessTime;
    this.waitTime = waitTime;
    this.phase = Phase.WAIT;
    this.time = waitTime;
  }
}
