import axios from "axios";
import { URL } from "src/constants/environment";
import { GetArtistResponse } from "src/models/artist";

export const viewArtist = async (id: number) => {
  const url: string = `${URL.VIEW_ARTIST}${id}`;
  try {
    const response = await axios.get<GetArtistResponse>(url);
    return response.data;
  } catch (error) {
    return error;
  }
};
