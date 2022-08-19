import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { GameState, ICell, IBuildClick, Phase, Player, Transfer, Cell, Maze, IMaze } from './types';
import { ArraySchema, DataChange } from '@colyseus/schema';
import { Wait } from './components/Wait';
import { useAppDispatch, useAppSelector } from './hooks';
import { addPlayer, changeCell, changeMaze, setHeight, setPhase, setTime, setWidth } from './stores/gameReducer';
import { Header } from './components/Header';
import { joinGame } from './stores/networkReducer';
import { Room } from 'colyseus.js';

function App() {
  const client = useAppSelector(state=>state.network.client)
  let gameRoom = useAppSelector(state=>state.network.gameRoom)
  let connected = useRef<boolean>(false)
  const dispatch = useAppDispatch()
  
  useEffect(()=>{
    if(!gameRoom && !connected.current){
      connected.current = true
      joinOrCreate()
  }})

  async function joinOrCreate(){
    const room: Room<GameState> = await client.joinOrCreate('GameRoom')
    dispatch(joinGame(room))
    addStateListeners(room)
  }

  function addStateListeners(room: Room<GameState>){
    room.state.onChange = changes => {
      changes.forEach(change=>{
        if(change.field === 'time'){
          dispatch(setTime(change.value))
        }
        else if(change.field === 'phase'){
          dispatch(setPhase(change.value))
        }
        else if(change.field === 'width'){
          dispatch(setWidth(change.value))
        }
        else if(change.field === 'height'){
          dispatch(setHeight(change.value))
        }
        else if(change.field === 'phase'){
          dispatch(setPhase(change.value))
        }
      })
    }
    (room.state.players as ArraySchema<Player>).onAdd = (player: Player, playerIndex: number) =>{
      dispatch(addPlayer(player));

      (player.maze as Maze).onChange = (changes: DataChange<any>[])=>{
        changes.forEach(change=>{
          dispatch(changeMaze({id: player.id, field: change.field as keyof IMaze, value: change.value}))
          if(change.field==='data'){
            (player.maze.data as ArraySchema<ICell>).onAdd = (cell: ICell, cellIndex: number) => {
        
              (cell as Cell).onChange = (changes =>{
                changes.forEach(change=>{
                  dispatch(changeCell({id: player.id, x: cell.x, y:cell.y, field: change.field as keyof ICell, value: change.value}))
                })
              })
            }
          }
        })
      }
    }
  }
  
  return (
    <div className="App">
      <Header/>
      <Wait/>
    </div>
  );
}


export default App;
