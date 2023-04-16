import { SET_EXCHANGERATES } from "../../constants/actionTypes";

const setExchangeRates = (exchangeRates) => {
  return {
    type: SET_EXCHANGERATES,
    payload: exchangeRates,
  };
};

export { setExchangeRates };
