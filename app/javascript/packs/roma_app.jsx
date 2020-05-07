import React from "react";
import { render } from "react-dom";
import SecOne from "../components/Sections/SecOne";
import SecTwo from "../components/Sections/SecTwo";
import SecThree from "../components/Sections/SecThree";
import SecFour from "../components/Sections/SecFour";
import SecFive from "../components/Sections/SecFive";
import SecSix from "../components/Sections/SecSix";

document.addEventListener("DOMContentLoaded", () => {
  render(<SecOne />, document.getElementById("secone"));
  render(<SecTwo />, document.getElementById("sectwo"));
  render(<SecThree />, document.getElementById("secthree"));
  render(<SecFour />, document.getElementById("secfour"));
  render(<SecFive />, document.getElementById("secfive"));
  render(<SecSix />, document.getElementById("secsix"));
});
