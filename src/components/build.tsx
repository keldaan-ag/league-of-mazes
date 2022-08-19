import { useAppSelector } from "../hooks";
import { MazeDisplay } from "./MazeDisplay";

export function Build(){
    const id = useAppSelector(state=>state.game.id)
    const player = useAppSelector(state=>state.game.players.find(p=>p.id === id))
    if(player){
        return <div style={{display:'flex', flexWrap:'wrap', margin:'10px', gap:'20px', justifyContent:'center'}}>
       <MazeDisplay key={player.id} player={player}/>
    </div>
    }
    else{
        return null
    }
}