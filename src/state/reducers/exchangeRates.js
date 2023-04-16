import { SET_EXCHANGERATES } from "../../constants/actionTypes";

const INIT_STATE = {};

const setExchangeRatesReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_EXCHANGERATES:
      return { ...action.payload };
    default:
      return state;
  }
};

export default setExchangeRatesReducer;
