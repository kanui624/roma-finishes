import React from "react";
import full_roma from "../images/logo/full_roma.png";

const QLogo = () => {
  return (
    <div className="col-md-6 align-items-stretch">
      <div className="card text-center">
        <div className="quote-comment" id="logo-comment-mg">
          <h6 id="contact-h6">
            Tell us about your project below and we will send you a free quote!
          </h6>
        </div>
        <div>
          <img
            src={require("../images/logo/full_roma.png")}
            alt="roma logo"
            id="g-logo-quote-box"
          />
        </div>
        <div className="quote-comment">
          <h6 id="contact-h6">We look forward to working with you!</h6>
        </div>
      </div>
    </div>
  );
};

export default QLogo;
