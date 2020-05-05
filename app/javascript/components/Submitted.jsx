import React from "react";
import w_roma from "../images/logo/w_roma.png";

class Submitted extends React.Component {
  render() {
    return (
      <div className="logo-card col-md-12">
        <div className="card text-center left-logo">
          {/* <div className="quote-comment" id="logo-comment-mg"></div> */}
          <div>
            <img
              src={require("../images/logo/w_roma.png")}
              alt="roma logo"
              id="g-logo-quote-box"
            />
            <h6 id="contact-h6">Thank You!</h6>
            <h6 id="contact-h6">We'll Talk Soon!</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default Submitted;
