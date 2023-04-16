import { CHANGE_CURRENCY } from "../../constants/actionTypes";

const changeCurrency = (currency) => {
  return {
    type: CHANGE_CURRENCY,
    payload: currency,
  };
};

export { changeCurrency };
