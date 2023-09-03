import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PATH } from "../constants/environements";

export const viewArtist = createAsyncThunk(
  "tracks/viewArtist",
  async (id: number| string) => {
    const response = await axios.post(PATH.viewartist, {
      id,
    });
    return response.data;
  }
);
export const topTracks = createAsyncThunk(
  "tracks/toptracks",
  async (id: number| string) => {
    const response = await axios.post(PATH.toptracks, {
      id,
    });
    return response.data;
  }
);
export const topAlbums = createAsyncThunk(
  "tracks/topalbums",
  async (id: number | string) => {
    const response = await axios.post(PATH.topalbums, {
      id,
    });
    return response.data;
  }
);
