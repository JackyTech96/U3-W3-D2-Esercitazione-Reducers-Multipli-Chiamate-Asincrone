// ./actions.fetch.js
import { setJobs } from ".";

// Action Types
export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

// Action Creators
export const fetchDataRequest = () => ({ type: FETCH_DATA_REQUEST });
export const fetchDataSuccess = (data) => ({ type: FETCH_DATA_SUCCESS, payload: data });
export const fetchDataFailure = (error) => ({ type: FETCH_DATA_FAILURE, payload: error });

// Async Action Creator
export const fetchJobs = (query) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());

    try {
      const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${query}&limit=20`);
      if (response.ok) {
        const data = await response.json();
        dispatch(fetchDataSuccess(data));
        dispatch(setJobs(data)); // Aggiorna lo stato dei lavori dopo il fetch
      } else {
        throw new Error("Error fetching results");
      }
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};
