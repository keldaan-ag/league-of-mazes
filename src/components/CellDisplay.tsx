import { useAppDispatch, useAppSelector } from "../hooks";
import { Dungeon, ICell, Phase } from "../types";
import { cellClick } from "../stores/networkReducer";
import { useEffect } from "react";

export function CellDisplay(props:{id: string, cell: ICell, cellSize: number, tileCoord: { x: number; y: number; }, dungeon: Dungeon, image: HTMLImageElement}){
    const dispatch = useAppDispatch()
    const phase = useAppSelector(state=>state.game.phase)
    
    useEffect(()=>{
        const canvas = document.getElementById(`${props.cell.x}-${props.cell.y}`) as HTMLCanvasElement
        if(canvas){
            const ctx = canvas.getContext('2d')
            ctx!.drawImage(props.image, props.tileCoord.x * 25 + 1 , props.tileCoord.y * 25 + 1, 24, 24, 0, 0, props.cellSize, props.cellSize)
            if(props.cell.isEntry){
                ctx!.beginPath()
                ctx!.arc(props.cellSize/2,props.cellSize/2,props.cellSize/4,0,2*Math.PI,false)
                ctx!.fillStyle = 'green';
                ctx!.fill();
                ctx!.lineWidth = 1;
                ctx!.strokeStyle = '#003300';
                ctx!.stroke();
            }

            if(props.cell.isExit){
                ctx!.beginPath()
                ctx!.arc(props.cellSize/2,props.cellSize/2,props.cellSize/4,0,2*Math.PI,false)
                ctx!.fillStyle = 'red';
                ctx!.fill();
                ctx!.lineWidth = 1;
                ctx!.strokeStyle = '#330000';
                ctx!.stroke();
            }
  
            if(props.cell.isPath){
                ctx!.beginPath()
                ctx!.arc(props.cellSize/2,props.cellSize/2,props.cellSize/4,0,2*Math.PI,false)
                ctx!.fillStyle = 'blue';
                ctx!.fill();
                ctx!.lineWidth = 1;
                ctx!.strokeStyle = '#000033';
                ctx!.stroke();
            }
        }

    },[props.cell, props.cellSize, props.image, props.tileCoord.x, props.tileCoord.y])
    
    return <td className='cell' style={{
        height:`${props.cellSize}px`,
        width:`${props.cellSize}px`,
        maxHeight: `${props.cellSize}px`,
        maxWidth: `${props.cellSize}px`,
        lineHeight: '0px',
        cursor: props.cell.isHole || phase !== Phase.BUILD ? 'not-allowed' : 'pointer'
        }}

        onClick={()=>{dispatch(cellClick({id: props.id, x: props.cell.x, y: props.cell.y}))}}>
        <canvas width={props.cellSize} height={props.cellSize} id={`${props.cell.x}-${props.cell.y}`}></canvas>
        </td>
}