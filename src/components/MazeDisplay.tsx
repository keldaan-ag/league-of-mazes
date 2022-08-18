import { ReactElement } from "react";
import { ICell, IPlayer } from "../types";
import { CellDisplay } from "./CellDisplay";

export function MazeDisplay(props:{player: IPlayer, cellClick(id: string, x: number, y: number): void}){
    let structuredData: ICell[][] = []
    for (let i = 0; i < props.player.maze.width; i++) {
        let column: ICell[] = []
        for (let j = 0; j < props.player.maze.height; j++) {
            column.push(props.player.maze.data[i*props.player.maze.height + j])
        }
        structuredData.push(column)
    }
    return <div>
        <p>Player #{props.player.id}</p>
        <div style={{width:'300px', height:'300px'}}>
            {<table>
                <tbody>
                    {structuredData.map((column,index) => <tr key={`column-${index}`}>{
                        column.map(cell=><CellDisplay id={props.player.id} key={`cell-${cell.x}-${cell.y}`} cell={cell} cellClick={props.cellClick}/>)
                        }</tr>)}
                </tbody>
            </table>}
        </div>
    </div>
}