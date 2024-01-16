import { SET_JOBS } from "../actions";
const jobsInitialState = {
  jobs: [],
};

const jobsReducer = (state = jobsInitialState, action) => {
  switch (action.type) {
    case SET_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };
    default:
      return state;
  }
};

export default jobsReducer;
