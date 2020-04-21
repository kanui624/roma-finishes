import React from "react";
import ReactDOM from "react-dom";
import SecOne from "../components/Sections/SecOne";
import SecTwo from "../components/Sections/SecTwo";
import SecThree from "../components/Sections/SecThree";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<SecOne />, document.getElementById("secone"));
  ReactDOM.render(<SecTwo />, document.getElementById("sectwo"));
  ReactDOM.render(<SecThree />, document.getElementById("secthree"));
});
