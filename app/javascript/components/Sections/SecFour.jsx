import React from "react";
import Contact from "../Contact";
import Quote from "../Quote";
import Appoint from "../Appointment";

const SecFour = () => {
  return (
    <div className="container-fluid" id="third-bg-image">
      <div className="card-deck">
        <div className="container pt-5">
          <Contact />
        </div>
        <div className="container-fluid">
          <div class="row mt-5">
            <Quote />
            <Appoint />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecFour;
