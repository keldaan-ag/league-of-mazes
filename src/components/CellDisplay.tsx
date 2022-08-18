import { ICell } from "../types";

export function CellDisplay(props:{id: string, cell: ICell, cellClick(id: string, x: number, y: number): void}){
    return <td style={{
        border:'1px solid black',
        height:'30px',
        width:'30px',
        backgroundColor:props.cell.isEntry ? 'green': props.cell.isExit ? 'red' : props.cell.isWall ? 'black': 'white'  
        }}
        onClick={()=>{props.cellClick(props.id, props.cell.x, props.cell.y)}}></td>
}