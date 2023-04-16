import { SET_COINID } from "../../constants/actionTypes";

const setCoinId = (coinid) => {
  return {
    type: SET_COINID,
    payload: coinid,
  };
};

export { setCoinId };
