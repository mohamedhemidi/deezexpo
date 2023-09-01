import axios from "axios";
import { GetTracksResponse } from "src/models/tracks";

export const getTracksList = async (query: string) => {
  const url: string = `${process.env.SEARCH_URL}/track/?q=${query}&limit=${process.env.SEARCH_LIMIT}`;
  try {
    const response = await axios.get<GetTracksResponse>(url);
    return response.data;
  } catch (error) {
    return error;
  }
};
