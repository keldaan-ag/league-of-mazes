import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import gameReducer from './gameReducer';
import networkReducer from './networkReducer';
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = configureStore({
  reducer: {
    game: gameReducer,
    network: networkReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false
  }),
  enhancers: composeWithDevTools({})
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
