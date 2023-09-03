import axios from "axios";
import { URL } from "src/constants/environment";
import { GetTracksResponse } from "src/models/tracks";

export const getTrendedTracks = async () => {
  const url: string = `${URL.TRENDING_TRACKS}`;
  try {
    const response = await axios.get<GetTracksResponse>(url);
    return response.data;
  } catch (error) {
    return error;
  }
};
