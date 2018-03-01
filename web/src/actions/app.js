import {
  ADD_TASK,
  RECEIVE_TASKS,
  REMOVE_TASK,
  REQUEST_TASKS
} from "../constants/app";

function requestTasks() {
  return {
    type: REQUEST_TASKS
  };
}

function receiveTasks(json) {
  return {
    type: RECEIVE_TASKS,
    payload: json
  };
}

export function fetchTasks() {
  return dispatch => {
    dispatch(requestTasks());

    return fetch("tasksData.json")
      .then(res => res.json())
      .then(json => dispatch(receiveTasks(json)))
      .catch(err => console.error("ERROR", err));
  };
}

export function addTask(task) {
  return {
    type: ADD_TASK,
    payload: task,
    succes: true
  };
}

export function removeTask(id) {
  return {
    type: REMOVE_TASK,
    payload: id,
    succes: true
  };
}
