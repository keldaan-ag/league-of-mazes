import {
  Dungeon,
  DungeonData,
  Header,
  ICell,
  Mask,
  MaskCoordinate,
  TerrainType,
} from "../types";

export default class Tileset {
  id: Dungeon;
  headers: Header[];
  img: any;
  ground: Map<Mask, { x: number; y: number }[]> = new Map();
  groundAlt: Map<Mask, { x: number; y: number }[]> = new Map();
  water: Map<Mask, { x: number; y: number }[]> = new Map();
  wall: Map<Mask, { x: number; y: number }[]> = new Map();
  wallAlt: Map<Mask, { x: number; y: number }[]> = new Map();

  constructor(id: Dungeon) {
    this.id = id;
    this.headers = DungeonData[id].tileset;
    this.computeMapping();
  }

  computeMapping() {
    (Object.values(Mask) as Mask[]).forEach((v) => {
      this.ground.set(v, [this.getId(v, Header.GROUND)]);
      this.water.set(v, [this.getId(v, Header.WATER)]);
      this.wall.set(v, [this.getId(v, Header.WALL)]);
      [
        Header.GROUND_ALT_1,
        Header.GROUND_ALT_2,
        Header.GROUND_ALT_3,
        Header.GROUND_ALT_4,
      ].forEach((h) => {
        if (this.headers.includes(h)) {
          const t = this.groundAlt.get(v);
          if (t) {
            this.groundAlt.set(v, t.concat([this.getId(v, h)]));
          } else {
            this.groundAlt.set(v, [this.getId(v, h)]);
          }
        }
      });

      [Header.WALL_ALT_1, Header.WALL_ALT_2, Header.WALL_ALT_3].forEach((h) => {
        if (this.headers.includes(h)) {
          const t = this.wallAlt.get(v);
          if (t) {
            this.wallAlt.set(v, t.concat([this.getId(v, h)]));
          } else {
            this.wallAlt.set(v, [this.getId(v, h)]);
          }
        }
      });
    });
  }

  getId(maskId: Mask, header: Header) {
    let headerIndex = this.headers.indexOf(header);
    if (headerIndex === -1) {
      headerIndex = this.headers.indexOf(Header.ABYSS);
    }
    const maskCoordinate = MaskCoordinate[maskId];
    const x = maskCoordinate.x + headerIndex * 3;
    const y = maskCoordinate.y;
    return { x: x, y: y };
  }

  getTilemapId(cell: ICell): { x: number; y: number } {
    let terrain = TerrainType.GROUND;
    if (cell.isHole) {
      terrain = TerrainType.WATER;
    } else if (cell.isWall) {
      terrain = TerrainType.WALL;
    }
    const maskId = cell.mask;
    switch (terrain) {
      case TerrainType.GROUND:
        return this.ground.get(maskId)![0];
      case TerrainType.WATER:
        return this.water.get(maskId)![0];
      case TerrainType.WALL:
        return this.wall.get(maskId)![0];
    }
  }
}
