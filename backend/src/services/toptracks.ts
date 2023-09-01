import axios from "axios";
import { URL } from "src/constants/environment";
import { GetTracksResponse } from "src/models/tracks";

export const topTracks = async (id: number) => {
  const url: string = `${URL.VIEW_ARTIST}${id}/top`;
  try {
    const response = await axios.get<GetTracksResponse>(url);
    return response.data;
  } catch (error) {
    return error;
  }
};
