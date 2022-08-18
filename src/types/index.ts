import { ArraySchema, Schema, type } from "@colyseus/schema";

export enum Transfer {
    BUILD_CLICK='BUILD_CLICK'
}

export interface IBuildClick{
    x:number,
    y:number,
    id:string
}

export interface ICoordinate {
    x: number
    y: number
}

export interface IPlayer{
    id: string
    maze: IMaze 
}

export interface IMaze{
    data: ICell[],
    width: number,
    height: number,
    entry: ICoordinate,
    exit: ICoordinate
}

export interface ICell{
    x: number,
    y: number,
    isEntry: boolean,
    isExit: boolean,
    isWall: boolean
}

export interface IGame{
    width: number,
    height: number,
    buildTime: number,
    guessTime: number,
    waitTime: number,
    phase: Phase,
    players: IPlayer[],
    time: number
}

export enum Phase{
    BUILD='BUILD',
    GUESS='GUESS',
    DRAW='DRAW',
    WAIT='WAIT'
}


export class Cell extends Schema implements ICell{
    @type("number") x: number;
    @type("number") y: number;
    @type("boolean") isEntry: boolean;
    @type("boolean") isExit: boolean;
    @type("boolean") isWall: boolean;
    
    constructor(cell: ICell){
        super()
        this.x = cell.x
        this.y = cell.y
        this.isEntry = cell.isEntry
        this.isExit = cell.isExit
        this.isWall = cell.isWall
    }
}

export class Coordinate extends Schema implements ICoordinate{
    @type("number") x: number
    @type("number") y: number

    constructor(coordinate: ICoordinate){
        super()
        this.x = coordinate.x
        this.y = coordinate.y
    }
}

export class Maze extends Schema implements IMaze{
    @type([Cell]) data: ICell[]
    @type("number") width: number
    @type("number") height: number
    @type(Coordinate) entry: ICoordinate
    @type(Coordinate) exit: ICoordinate

    constructor(maze: IMaze){
        super()
        this.width = maze.width
        this.height = maze.height
        this.entry = new Coordinate(maze.entry)
        this.exit = new Coordinate(maze.exit)
        this.data = new ArraySchema<ICell>()
        maze.data.forEach(d=>{this.data.push(new Cell(d))})
    }
}

export class Player extends Schema implements IPlayer{
    @type("string") id: string
    @type(Maze) maze: Maze

    constructor(id: string, maze: IMaze){
        super()
        this.id = id
        this.maze = new Maze(maze)
    }
}

export class GameState extends Schema implements IGame{

    @type("number") width: number
    @type("number") height: number
    @type("number") buildTime: number
    @type("number") guessTime: number
    @type("number") waitTime: number
    @type("number") time: number
    @type("string") phase: Phase
    @type([Player]) players: Player[]
    
    constructor(width: number, height: number, buildTime: number, guessTime: number, waitTime: number){
        super()
        this.players = new ArraySchema<Player>()
        this.width = width
        this.height = height
        this.buildTime = buildTime
        this.guessTime = guessTime
        this.waitTime = waitTime
        this.phase = Phase.WAIT
        this.time = waitTime
    }
  }
  