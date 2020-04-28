import React from "react";
import full_roma from "../images/logo/full_roma.png";

class Submitted extends React.Component {
  render() {
    return (
      <div className="col-md-6 align-items-stretch">
        <div className="card text-center">
          <div className="quote-comment" id="logo-comment-mg">
            <h6 id="contact-h6">Thanks For Submitting!</h6>
            <h6 id="contact-h6">We'll Talk To You Soon!</h6>
          </div>
          <div>
            <img
              src={require("../images/logo/full_roma.png")}
              alt="roma logo"
              id="g-logo-quote-box"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Submitted;
