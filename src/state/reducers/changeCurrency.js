import { CHANGE_CURRENCY } from "../../constants/actionTypes";

const INIT_STATE = "inr";

const changeCurrencyReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY:
      return `${action.payload}`;
    default:
      return state;
  }
};

export default changeCurrencyReducer;
