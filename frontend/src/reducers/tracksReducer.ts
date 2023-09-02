import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PATH } from "../constants/environements";

export const searchTracks = createAsyncThunk(
  "tracks/searchTracks",
  async (query: string) => {
    const response = await axios.post(PATH.searchTracks, {
      query: query,
    });
    return response.data;
  }
);

const initialState = {
  data: [],
  loading: false,
  error: null as string | null,
};

const tracksSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchTracks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchTracks.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(searchTracks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      });
  },
});

export default tracksSlice.reducer;