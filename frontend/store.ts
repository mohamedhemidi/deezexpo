import { configureStore } from "@reduxjs/toolkit";
import tracksReducer from "./src/reducers/tracksReducer";
import thunkMiddleware from 'redux-thunk';
import artistReducer from "./src/reducers/artistReducer";

export const store = configureStore({
  reducer: {
    tracks: tracksReducer,
    artist: artistReducer
  },
  middleware: [thunkMiddleware],
})