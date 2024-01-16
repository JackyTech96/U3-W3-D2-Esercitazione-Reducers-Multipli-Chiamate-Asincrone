export const SET_JOBS = "SET_JOBS";
export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";

export const setJobs = (jobs) => ({
  type: SET_JOBS,
  payload: jobs,
});
export const addToFavorite = (payload) => ({ type: ADD_TO_FAVOURITE, payload });
export const removeFromFavorite = (payload) => ({ type: REMOVE_FROM_FAVOURITE, payload });
