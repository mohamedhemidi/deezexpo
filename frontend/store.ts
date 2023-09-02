import { configureStore } from "@reduxjs/toolkit";
import tracksReducer from "./src/reducers/tracksReducer";
import thunkMiddleware from 'redux-thunk';

export const store = configureStore({
  reducer: {
    tracks: tracksReducer
  },
  middleware: [thunkMiddleware],
})