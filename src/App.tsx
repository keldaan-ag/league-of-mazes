import React, { useEffect, useState } from 'react';
import './App.css';
import * as Colyseus from "colyseus.js"; 

function App() {
  let [client] = useState(new Colyseus.Client('ws://localhost:4000'))
  let [room, setRoom] = useState<Colyseus.Room<unknown>|undefined>(undefined)
  
  useEffect(()=>{
    if(!room){
      joinOrCreate()
  }})

  async function joinOrCreate(){
    setRoom(await client.joinOrCreate('my_room'))
  }
  
  return (
    <div className="App">
      <p>{room?.name}, {room?.id}, {room?.sessionId}</p>
    </div>
  );
}


export default App;
