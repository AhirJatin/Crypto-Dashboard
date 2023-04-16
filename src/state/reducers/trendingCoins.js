import { SET_TRENDINGCOINS } from "../../constants/actionTypes";

const INIT_STATE = {};

const setTrendingCoinsReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_TRENDINGCOINS:
      return { ...action.payload };
    default:
      return state;
  }
};

export default setTrendingCoinsReducer;
