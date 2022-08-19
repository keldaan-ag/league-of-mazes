import { useAppSelector } from "../hooks";
import { MazeDisplay } from "./MazeDisplay";

export function Guess(){
    const players = useAppSelector(state=>state.game.players)
    if(players.length > 0){
        return <div style={{display:'flex', flexWrap:'wrap', margin:'10px', gap:'20px', justifyContent:'center'}}>
        {players.map(player=><MazeDisplay key={player.id} player={player}/>)}
    </div>
    }
    else{
        return null
    }
}