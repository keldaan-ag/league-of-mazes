import { useAppSelector } from "../hooks";

export function Leaderboard(){
    const pointsArray = useAppSelector(state=>state.game.players.map(p=>{return {id:p.id, points:p.points}}))
    return <div style={{position:'absolute', top:'10px', right:'10px'}}>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
            {pointsArray.map(v=>
                <tr key={v.id}>
                    <td>{v.id}</td>
                    <td>{v.points}</td>
                </tr>
            )}
            </tbody>
        </table>
    </div>
}