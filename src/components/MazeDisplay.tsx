import { ICell, IPlayer } from "../types";
import { CellDisplay } from "./CellDisplay";

export function MazeDisplay(props:{player: IPlayer}){
    let structuredData: ICell[][] = []
    for (let i = 0; i < props.player.maze.width; i++) {
        let column: ICell[] = []
        for (let j = 0; j < props.player.maze.height; j++) {
            column.push(props.player.maze.data[j*props.player.maze.width + i])
        }
        structuredData.push(column)
    }
    return <div style={{border:'1px solid black', padding:'10px'}}>
        <p>Player #{props.player.id}</p>
        <div>
            {<table>
                <tbody>
                    {structuredData.map((column,index) => <tr key={`column-${index}`}>{
                        column.map(cell=><CellDisplay id={props.player.id} key={`cell-${cell.x}-${cell.y}`} cell={cell}/>)
                        }</tr>)}
                </tbody>
            </table>}
        </div>
    </div>
}