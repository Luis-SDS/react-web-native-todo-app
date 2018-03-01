import React from "react";

import "../css/task.css";

const Task = ({ task, onClick }) => {
  return <li onClick={onClick}>{task.description}</li>;
};

export default Task;
