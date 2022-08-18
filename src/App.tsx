import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import * as Colyseus from "colyseus.js";
import { GameState, ICell, IBuildClick, Phase, Player, Transfer } from './types';
import { ArraySchema } from '@colyseus/schema';
import { Wait } from './components/Wait';

function App() {
  let client = useRef(new Colyseus.Client('ws://localhost:4000'))
  let room = useRef<Colyseus.Room<GameState>>()
  let connected = useRef<boolean>(false)
  let [time, setTime] = useState<number>(0)
  let [phase, setPhase] = useState<Phase>(Phase.WAIT)
  let [players, setPlayers] = useState<Player[]>()
  
  useEffect(()=>{
    if(!room.current && !connected.current){
      connected.current = true
      joinOrCreate()
  }})

  async function joinOrCreate(){
    room.current = await client.current.joinOrCreate('GameRoom')
    addStateListeners()
  }

  function cellClick(id: string,x: number,y: number){
    room.current?.send(Transfer.BUILD_CLICK,{id,x,y} as IBuildClick)
  }

  function addStateListeners(){
    if(room.current){
      room.current.state.onChange = changes => {
        changes.forEach(change=>{
          if(change.field === 'time'){
            setTime(change.value)
          }
          if(change.field === 'phase'){
            setPhase(change.value)
          }
        })
      }
      (room.current.state.players as ArraySchema<Player>).onAdd = (player: Player, key: number) =>{
        setPlayers(room.current!.state.players);
        /*
        player.onChange = (changes=>{
          changes.forEach(change=>{
            console.log(change.field)
          })
        });

        player.maze.onChange = (changes =>{
          changes.forEach(change=>{
            console.log(change.field)
          })
        });
        */
        (player.maze.data as ArraySchema<ICell>).onChange = (cell) => {
          setPlayers(room.current!.state.players)
        }
      }
    }
  }
  
  return (
    <div className="App">
      <p>Time {time} Phase {phase}</p>
      <Wait players={players} cellClick={cellClick}/>
    </div>
  );
}


export default App;
