import { CHANGE_CURRENCY_SYMBOL } from "../../constants/actionTypes";

const INIT_STATE = "₹";

const changeCurrencySymbolReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY_SYMBOL:
      return `${action.payload}`;
    default:
      return state;
  }
};

export default changeCurrencySymbolReducer;
