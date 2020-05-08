import * as actionTypes from "./actionTypes";
import { getData } from "../api";

const changeCountry = (country) => ({
  type: actionTypes.CHANGE_COUNTRY,
  payload: { country },
});

const requestingData = () => ({
  type: actionTypes.REQUEST_DATA,
});

const receiveData = (data) => ({
  type: actionTypes.RECEIVED_DATA,
  payload: data,
});

const fetchData = () => {
  return async (dispatch) => {
    dispatch(requestingData());
    const data = await getData();
    dispatch(receiveData(data));
  };
};

export { changeCountry, requestingData, receiveData, fetchData };
