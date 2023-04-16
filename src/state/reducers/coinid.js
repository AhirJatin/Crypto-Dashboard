import { SET_COINID } from "../../constants/actionTypes";

const INIT_STATE = "";

const setCoinIdReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_COINID:
      return `${action.payload}`;
    default:
      return state;
  }
};

export default setCoinIdReducer;
