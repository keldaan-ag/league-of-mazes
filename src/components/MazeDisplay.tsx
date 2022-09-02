import { useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from "../hooks";
import { guessClick } from "../stores/networkReducer";
import { Dungeon, ICell, IPlayer, Mask, Phase } from "../types";
import Tileset from '../types/tileset'
import { CellDisplay } from "./CellDisplay";

export function MazeDisplay(props:{player: IPlayer}){
    const dispatch = useAppDispatch()
    const phase = useAppSelector(state=>state.game.phase)
    const id = useAppSelector(state=>state.game.id)
    const guessId = useAppSelector(state=>state.game.guessId)
    const betNames = useAppSelector(state=>state.game.players.map((p,index,array)=>p.guessId === props.player.id ? p.displayName: '')).filter(s=>s!=='')
    const tileset = useRef<Tileset>(new Tileset(props.player.dungeon));
    let structuredData: ICell[][] = []
    const [img, setImg] = useState<HTMLImageElement|undefined>(undefined)
    const [imgLoaded, setImgLoaded] = useState<boolean>(false)

    if(!imgLoaded)
    {
        setImgLoaded(true)
        const image = new Image()
        image.src = `${process.env.PUBLIC_URL}/tilesets/${tileset.current.id}.png`;
        image.onload = ()=>{setImg(image)}
    }

    if(img === undefined){
        return null
    }
    else{
        for (let xi = 0; xi < props.player.maze.width; xi++) {
            const column = [];
            for (let yi = 0; yi < props.player.maze.height; yi++) {
              column.push({x: -1, y: -1, isHole: false, isWall: false, isPath: false, isEntry: false, isExit: false, mask :Mask.A});
            }
            structuredData.push(column);
        }
    
        props.player.maze.data.forEach(d=>{
            structuredData[d.x][d.y] = d
        })
    
        const cellSize = phase === Phase.BUILD ? 50: 25
    
        return <div 
            style={{
                backgroundColor:id === props.player.id ? 'lightyellow':'white',
                border:guessId === props.player.id ? '2px solid red':'1px solid black',
                padding:'10px',
                cursor: phase === Phase.GUESS? 'pointer': 'auto'
            }}
            onClick={()=>{if(phase === Phase.GUESS){dispatch(guessClick(props.player.id))}}}
        >
            <p style={{margin:'0px'}}>
                {props.player.displayName} {id === props.player.id ? '(You)' : ''}
            </p>
            <div>
                {<table border={0} cellSpacing={0} cellPadding={0}>
                    <tbody>
                        {structuredData.map((column,index) => <tr key={`column-${index}`}>{
                            column.map(cell=><CellDisplay 
                                id={props.player.id}
                                key={`cell-${cell.x}-${cell.y}`}
                                cell={cell}
                                cellSize={cellSize}
                                tileCoord = {tileset.current.getTilemapId(cell)}
                                dungeon = {tileset.current.id}
                                image = {img!}
                                />)
                            }</tr>)}
                    </tbody>
                </table>}
                {props.player.maze.score > 0 ? <div style={{fontSize:'1.5em'}}>{props.player.maze.score}</div>: null}
                {props.player.rank ? <div style={{width:'100%', textAlign:'center', fontSize:'2em'}}>Rank #{props.player.rank}</div>: null}
                {betNames.length > 0 && (phase === Phase.DRAW || phase === Phase.GUESS)? <div>{betNames.map(name => name + ' ')}</div>: null}
            </div>
        </div>
    }

}