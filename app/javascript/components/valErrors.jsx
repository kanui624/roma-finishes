import React from "react";

const Error = ({ touched, message }) => {
  if (!touched) {
    return <div className="form-message invalid text-center">&nbsp;</div>;
  }
  if (message) {
    return <div className="form-message invalid text-center">{message}</div>;
  }
  return <div className="form-message valid text-center">&nbsp;</div>;
};

export default Error;
