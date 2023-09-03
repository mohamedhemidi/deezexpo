const ENV : ObjectKey = import.meta.env.VITE_APP_ENV;

const BASE_URL  = {
  dev: "https://tiyir074yf.execute-api.eu-west-1.amazonaws.com/dev",
  test: "",
  prod: "",
};

type ObjectKey = keyof typeof BASE_URL;

export const PATH  = {
    searchTracks : `${BASE_URL[ENV]}/searchtracks`,
    trendingTracks : `${BASE_URL[ENV]}/trendingtracks`
}