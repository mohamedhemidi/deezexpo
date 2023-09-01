import axios from "axios";
import { URL } from "src/constants/environment";
import { GetAlbumResponse } from "src/models/albums";

export const topAlbums = async (id: number) => {
  const url: string = `${URL.VIEW_ARTIST}${id}/albums`;
  try {
    const response = await axios.get<GetAlbumResponse>(url);
    return response.data;
  } catch (error) {
    return error;
  }
};
