import { getAllCoins } from "../../api";

const fetchRequest = () => {
  return {
    type: "FETCH_REQUEST",
  };
};
const fetchSuccess = (coins) => {
  return {
    type: "FETCH_SUCCESS",
    payload: coins,
  };
};
const fetchFailure = (error) => {
  return {
    type: "FETCH_FAILURE",
    payload: error,
  };
};

const fetchData = () => {
  return async (dispatch) => {
    await dispatch(fetchRequest());
    const result = await getAllCoins();
    await dispatch(fetchSuccess(result.data));
  };
};

export { fetchRequest, fetchSuccess, fetchFailure, fetchData };
