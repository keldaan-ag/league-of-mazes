import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICell, IGame, IMaze, IPlayer, Phase, Player } from '../types';

const initialState: IGame = {
  width: 0,
  height: 0,
  buildTime: 0,
  guessTime: 0,
  waitTime: 0,
  phase: Phase.BUILD,
  players: [],
  time: 0
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addPlayer: (state, action: PayloadAction<Player>) => {
      const u: IPlayer = JSON.parse(JSON.stringify(action.payload))
      state.players.push(u)
    },
    changePlayer: (state, action: PayloadAction<{id: string, field: keyof IPlayer, value: any}>) => {
        const index = state.players.findIndex(u => u.id == action.payload.id)

        if(index != -1) {
          state.players[index][action.payload.field] = JSON.parse(JSON.stringify(action.payload.value))
        }
    },
    changeCell: (state, action: PayloadAction<{id: string, x: number, y: number, field: keyof ICell, value: any}>) => {
      const index = state.players.findIndex(u => u.id == action.payload.id)
      const cellIndex = state.height * action.payload.x + action.payload.y
      if(index != -1) {
        (state.players[index].maze.data[cellIndex][action.payload.field] as any) = JSON.parse(JSON.stringify(action.payload.value))
      }

    },
    changeMaze: (state, action: PayloadAction<{id: string, field: keyof IMaze, value: any}>)=>{
      const index = state.players.findIndex(u => u.id === action.payload.id)

      if(index != -1) {
        state.players[index].maze[action.payload.field] = JSON.parse(JSON.stringify(action.payload.value))
      }
    },
    removePlayer: (state, action: PayloadAction<string>) => {
        state.players.splice(state.players.findIndex(u => u.id == action.payload), 1)
    },
    setTime: (state, action: PayloadAction<number>) => {
      state.time = action.payload
    },
    setWidth: (state, action: PayloadAction<number>) => {
      state.width = action.payload
    },
    setHeight: (state, action: PayloadAction<number>) => {
      state.height = action.payload
    },
    setPhase: (state, action: PayloadAction<Phase>) => {
      state.phase = action.payload
    }
  }
});


export const { addPlayer, changePlayer, setTime, setWidth, setHeight, setPhase, changeCell, changeMaze } = gameSlice.actions;

export default gameSlice.reducer;
