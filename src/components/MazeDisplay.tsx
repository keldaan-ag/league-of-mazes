import { useAppDispatch, useAppSelector } from "../hooks";
import { guessClick } from "../stores/networkReducer";
import { ICell, IPlayer, Phase } from "../types";
import { CellDisplay } from "./CellDisplay";

export function MazeDisplay(props:{player: IPlayer}){
    const dispatch = useAppDispatch()
    const phase = useAppSelector(state=>state.game.phase)
    const id = useAppSelector(state=>state.game.id)
    const guessId = useAppSelector(state=>state.game.guessId)
    let structuredData: ICell[][] = []
    for (let i = 0; i < props.player.maze.width; i++) {
        let column: ICell[] = []
        for (let j = 0; j < props.player.maze.height; j++) {
            column.push(props.player.maze.data[j*props.player.maze.width + i])
        }
        structuredData.push(column)
    }
    return <div 
        style={{
            backgroundColor:id === props.player.id ? 'lightyellow':'white',
            border:guessId === props.player.id ? '2px solid red':'1px solid black',
            padding:'10px'
        }}
        onClick={()=>{if(phase === Phase.GUESS){dispatch(guessClick(props.player.id))}}}
    >
        <p style={{margin:'0px'}}>Player #{props.player.id} {id === props.player.id ? '(You)' : ''}</p>
        <div>
            {<table>
                <tbody>
                    {structuredData.map((column,index) => <tr key={`column-${index}`}>{
                        column.map(cell=><CellDisplay 
                            id={props.player.id}
                            key={`cell-${cell.x}-${cell.y}`}
                            cell={cell}
                            cellSize={phase === Phase.BUILD ? '6vh': '3vh'}
                            />)
                        }</tr>)}
                </tbody>
            </table>}
        </div>
    </div>
}