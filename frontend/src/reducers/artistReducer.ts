import { createSlice } from "@reduxjs/toolkit";
import { topAlbums, topTracks, viewArtist } from "../services/artist.services";

const initialState = {
  data: {
    info: [],
    top_tracks: [],
    top_albums: [],
  },
  loading: false,
  error: null as string | null,
};

const artistSlice = createSlice({
  name: "artist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(viewArtist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(viewArtist.fulfilled, (state, action) => {
        state.loading = false;
        state.data.info = action.payload.data;
      })
      .addCase(viewArtist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      })
      .addCase(topTracks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(topTracks.fulfilled, (state, action) => {
        state.loading = false;
        state.data.top_tracks = action.payload.data;
      })
      .addCase(topTracks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      })
      .addCase(topAlbums.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(topAlbums.fulfilled, (state, action) => {
        state.loading = false;
        state.data.top_albums = action.payload.data;
      })
      .addCase(topAlbums.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      });
  },
});

export default artistSlice.reducer;
