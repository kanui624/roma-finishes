import React from "react";
import w_roma from "../images/logo/w_roma.png";

class Submitted extends React.Component {
  render() {
    return (
      <div className="logo-card col-md-12">
        <div className="card text-center left-logo">
          <h6 id="contact-h6">Thank You!</h6>
          <div>
            <img
              src={require("../images/logo/w_roma.png")}
              alt="roma logo"
              id="g-logo-quote-box"
            />
          </div>
          <h6 id="contact-h6">We look forward to working with you!</h6>
        </div>
      </div>
    );
  }
}

export default Submitted;
