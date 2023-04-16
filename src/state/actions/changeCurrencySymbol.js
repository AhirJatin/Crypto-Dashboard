import { CHANGE_CURRENCY_SYMBOL } from "../../constants/actionTypes";

const changeCurrencySymbol = (currencySymbol) => {
  return {
    type: CHANGE_CURRENCY_SYMBOL,
    payload: currencySymbol,
  };
};

export { changeCurrencySymbol };
