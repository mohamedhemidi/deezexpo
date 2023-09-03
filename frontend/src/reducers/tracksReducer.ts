import { createSlice } from "@reduxjs/toolkit";
import { getTrendingTracks, searchTracks } from "../services/tracks.services";

const initialState = {
  data: {
    trending: [],
    search: []
  },
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
        state.data.search = action.payload.data;
      })
      .addCase(searchTracks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      })
      .addCase(getTrendingTracks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTrendingTracks.fulfilled, (state, action) => {
        state.loading = false;
        state.data.trending = action.payload.data;
      })
      .addCase(getTrendingTracks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      })
      ;
  },
});

export default tracksSlice.reducer;
