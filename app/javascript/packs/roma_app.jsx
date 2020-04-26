import React from "react";
import ReactDOM from "react-dom";
import SecOne from "../components/Sections/SecOne";
import SecTwo from "../components/Sections/SecTwo";
import SecThree from "../components/Sections/SecThree";
import SecFour from "../components/Sections/SecFour";
import SecFive from "../components/Sections/SecFive";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<SecOne />, document.getElementById("secone"));
  ReactDOM.render(<SecTwo />, document.getElementById("sectwo"));
  ReactDOM.render(<SecThree />, document.getElementById("secthree"));
  ReactDOM.render(<SecFour />, document.getElementById("secfour"));
  ReactDOM.render(<SecFive />, document.getElementById("secfive"));
});
