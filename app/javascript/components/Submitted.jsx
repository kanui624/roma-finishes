import React from "react";
import axios from "axios";
import w_roma from "../images/logo/w_roma.png";

class Submitted extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     lastQuoteName: "",
  //   };
  // }

  // componentDidMount() {
  //   axios
  //     .get("/api/v1/quotes/id")
  //     .then((res) => this.setState({ lastQuoteName: res.data.first_name }))
  //     .catch((err) => console.log(err.response.data));
  // }

  render() {
    return (
      <div className="logo-card col-md-12">
        <div className="card text-center left-logo">
          {/* <h6 id="contact-h6">Thank You {this.state.lastQuoteName}!</h6> */}
          <h6 id="contact-h6">Thank You,</h6>
          <h6 id="contact-h6">We will contact you soon!</h6>
          <div>
            <img
              src={require("../images/logo/w_roma.png")}
              alt="roma logo"
              id="g-logo-quote-box-sub"
            />
          </div>
          <h6 id="contact-h6">Look forward to working with you!</h6>
        </div>
      </div>
    );
  }
}

export default Submitted;
