import { SET_TRENDINGCOINS } from "../../constants/actionTypes";

const setTrendingCoins = (trendingCoins) => {
  return {
    type: SET_TRENDINGCOINS,
    payload: trendingCoins,
  };
};

export { setTrendingCoins };
