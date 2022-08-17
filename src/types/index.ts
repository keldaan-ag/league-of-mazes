export interface IPlayer{
    id: string
    maze: IMaze 
}

export interface IMaze{
    data: number[],
    width: number,
    height: number
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