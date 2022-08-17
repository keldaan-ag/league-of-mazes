import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import * as Colyseus from "colyseus.js";
import { IGame } from './types';

function App() {
  let client = useRef(new Colyseus.Client('ws://localhost:4000'))
  let room = useRef<Colyseus.Room<IGame>>()
  let connected = useRef<boolean>(false)
  let [gameState, setGameState] = useState<IGame|undefined>(undefined)
  
  useEffect(()=>{
    if(!room.current && !connected.current){
      connected.current = true
      joinOrCreate()
  }})

  async function joinOrCreate(){
    room.current = await client.current.joinOrCreate('GameRoom')
    room.current.onStateChange((state) => {
      setGameState(state as IGame)
    });
  }
  
  return (
    <div className="App">
      <p>{gameState?.time} {JSON.stringify(gameState?.players)}</p>
    </div>
  );
}


export default App;
