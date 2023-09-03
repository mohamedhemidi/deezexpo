import { createAsyncThunk } from "@reduxjs/toolkit";
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
export const getTrendingTracks = createAsyncThunk(
  "tracks/getTrendingTracks",
  async () => {
    const response = await axios.get(PATH.trendingTracks);
    return response.data;
  }
);
