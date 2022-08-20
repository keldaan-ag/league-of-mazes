import { useAppDispatch, useAppSelector } from "../hooks";
import { ICell, Phase } from "../types";
import { cellClick } from "../stores/networkReducer";
import { useEffect, useState } from "react";

export function CellDisplay(props:{id: string, cell: ICell, cellSize: string}){
    const dispatch = useAppDispatch()
    const phase = useAppSelector(state=>state.game.phase)
    const [color, setColor] = useState<string>(getColor())
    
    useEffect(()=>{setColor(getColor())},[props.cell])

    function getColor(){
        return props.cell.isPath ? '#60f542': props.cell.isEntry ? 'green': props.cell.isExit ? 'red' : props.cell.isWall ? 'black': 'white'
    }
    
    return <td className='cell' style={{
        border:'1px solid black',
        height:props.cellSize,
        width:props.cellSize,
        cursor: props.cell.isWall || phase !== Phase.BUILD ? 'not-allowed' : 'pointer',
        backgroundColor: color
        }}
        onMouseEnter={(e)=>{if(color === 'white'&& phase === Phase.BUILD) setColor('yellow')}}
        onMouseLeave={(e)=>{setColor(getColor())}}
        onClick={()=>{dispatch(cellClick({id: props.id, x: props.cell.x, y: props.cell.y}))}}>
        </td>
}