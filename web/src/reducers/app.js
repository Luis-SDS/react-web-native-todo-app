import mapKeys from "lodash/mapKeys";
import omit from "lodash/omit";

import {
  ADD_TASK,
  RECEIVE_TASKS,
  REMOVE_TASK,
  REQUEST_TASKS
} from "../constants/app";

const initialState = {
  tasks: {},
  isFetching: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.payload.id]: action.payload
        }
      };

    case RECEIVE_TASKS:
      return {
        ...state,
        tasks: mapKeys(action.payload, "id"),
        isFetching: false
      };

    case REMOVE_TASK:
      return {
        ...state,
        tasks: omit(state.tasks, action.payload)
      };

    case REQUEST_TASKS:
      return {
        ...state,
        isFetching: true
      };

    default:
      return state;
  }
};
