import { REQUEST_DATA, RECEIVED_DATA } from "../actionTypes";

export default function (state = {}, action) {
  switch (action.type) {
    case REQUEST_DATA:
      return state;
    case RECEIVED_DATA:
      return action.payload;
    default:
      return state;
  }
}
