import { IPlayer } from "../types";
import { MazeDisplay } from "./MazeDisplay";

export function Wait(props: {players: IPlayer[] | undefined, cellClick(id: string, x: number, y: number): void}){
    if(props.players){
        return <div style={{display:'flex', flexWrap:'wrap'}}>
        {props.players.map(player=><MazeDisplay key={player.id} player={player} cellClick={props.cellClick}/>)}
    </div>
    }
    else{
        return null
    }
}