import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Client, Room } from 'colyseus.js';
import { GameState, IBuildClick, Transfer } from '../types';

interface INetwork {
    client: Client;
    gameRoom: Room<GameState> | undefined;
}

const localEndpoint = 'ws://localhost:4000'
const colyseusEndpoint = 'wss://e3zymu.colyseus.de'

const endpoint = localEndpoint

const initialState: INetwork = {
    client: new Client(endpoint),
    gameRoom: undefined
}

export const gameSlice = createSlice({
  name: 'network',
  initialState,
  reducers: {
    joinGame: (state, action: PayloadAction<Room<GameState>>) => {
        state.gameRoom = action.payload
    },
    cellClick: (state, action: PayloadAction<{id: string,x: number,y: number}>) => {
        state.gameRoom?.send(Transfer.BUILD_CLICK,action.payload as IBuildClick)
    },
    guessClick: (state, action: PayloadAction<string>)=>{
        state.gameRoom?.send(Transfer.GUESS_CLICK, action.payload)
    }
  }
});


export const { joinGame, cellClick, guessClick } = gameSlice.actions;

export default gameSlice.reducer;
