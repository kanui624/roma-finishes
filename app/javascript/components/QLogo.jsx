import React from "react";
import full_roma from "../images/logo/full_roma.png";

class QLogo extends React.Component {
  render() {
    return (
      <div className="logo-card col-md-6">
        <div className="card text-center left-logo">
          <div className="quote-comment" id="logo-comment-mg">
            <h6 id="contact-h6">Tell us about your project below,</h6>
            <h6 id="contact-h6">We'll send you a free quote!</h6>
          </div>
          <div>
            <img
              src={require("../images/logo/full_roma.png")}
              alt="roma logo"
              id="g-logo-quote-box"
            />
          </div>
          <div className="quote-comment">
            <h6 className="below-q-logo-margin" id="contact-h6">
              Look forward to working with you!
            </h6>
          </div>
        </div>
      </div>
    );
  }
}

export default QLogo;
