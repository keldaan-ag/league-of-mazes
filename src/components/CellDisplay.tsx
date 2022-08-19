import { useAppDispatch } from "../hooks";
import { ICell } from "../types";
import { cellClick } from "../stores/networkReducer";
import { useEffect, useState } from "react";

export function CellDisplay(props:{id: string, cell: ICell}){
    const dispatch = useAppDispatch()
    const [color, setColor] = useState<string>(getColor())
    
    useEffect(()=>{setColor(getColor())},[props.cell])

    function getColor(){
        return props.cell.isEntry ? 'green': props.cell.isExit ? 'red' : props.cell.isWall ? 'black': 'white'
    }
    
    return <td className='cell' style={{
        border:'1px solid black',
        height:'30px',
        width:'30px',
        cursor: props.cell.isWall ? 'not-allowed' : 'pointer',
        backgroundColor: color
        }}
        onMouseEnter={(e)=>{if(color === 'white') setColor('yellow')}}
        onMouseLeave={(e)=>{setColor(getColor())}}
        onClick={()=>{dispatch(cellClick({id: props.id, x: props.cell.x, y: props.cell.y}))}}></td>
}