import React from "react";

import "../css/submit.css";

const Submit = ({ onSubmit }) => {
  return <input type="text" onKeyPress={onSubmit} />;
};

export default Submit;
