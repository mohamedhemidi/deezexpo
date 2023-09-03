const ENV: ObjectKey = import.meta.env.VITE_APP_ENV;

const BASE_URL = {
  dev: "https://tiyir074yf.execute-api.eu-west-1.amazonaws.com/dev",
  test: "",
  prod: "",
};

type ObjectKey = keyof typeof BASE_URL;

export const PATH = {
  // Tracks
  searchTracks: `${BASE_URL[ENV]}/searchtracks`,
  trendingTracks: `${BASE_URL[ENV]}/trendingtracks`,
  // Artist
  viewartist: `${BASE_URL[ENV]}/viewartist`,
  toptracks: `${BASE_URL[ENV]}/toptracks`,
  topalbums: `${BASE_URL[ENV]}/topalbums`,
};
