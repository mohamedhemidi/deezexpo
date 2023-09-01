import axios from "axios";
import { URL } from "src/constants/environment";
import { GetTracksResponse } from "src/models/tracks";

export const topAlbums = async (id: number) => {
  const url: string = `${URL.VIEW_ARTIST}${id}/albums`;
  try {
    const response = await axios.get<GetTracksResponse>(url);
    return response.data;
  } catch (error) {
    return error;
  }
};
