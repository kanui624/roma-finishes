import React from "react";
import full_roma from "../images/logo/full_roma.png";

const QLogo = () => {
  return (
    <div className="col-md-6 d-flex align-items-stretch">
      <div className="card text-center content-center">
        <div className="quote-comment">
          <h6>Tell us about your project and get a free quote!</h6>
          <h6>We look forward to working with you!</h6>
        </div>
        <div className="mt-4">
          <img
            src={require("../images/logo/full_roma.png")}
            alt="roma logo"
            className="g-logo-quote-box"
          />
        </div>
      </div>
    </div>
  );
};

export default QLogo;
