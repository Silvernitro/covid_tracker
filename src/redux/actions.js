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
  return (dispatch) => {
    dispatch(requestingData());
    return getData().then((data) => {
      dispatch(receiveData(data));
    });
  };
};

export { changeCountry, requestingData, receiveData, fetchData };
