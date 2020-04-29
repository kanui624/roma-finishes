import React from "react";
import axios from "axios";
import Contact from "../Contact";
import StoreInfo from "../StoreInfo";
import Quote from "../Quote";
import QLogo from "../QLogo";
import Submitted from "../Submitted";

class SecFour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showQuote: true,
    };
  }

  submitQuote = (data) => {
    axios
      .post("/api/v1/quotes", data)
      .then((res) => this.setState({ showQuote: false }))
      .catch((err) => console.log(err.response.data));
  };

  render() {
    const { showQuote } = this.state;
    return (
      <div className="container-fluid" id="contact-bg-image">
        <div className="card-deck mt-3 pt-5">
          <div className="container pt-3" id="contact-deck-bg">
            <Contact />
            <StoreInfo />
          </div>
        </div>
        <div className="card-deck pb-5">
          <div className="container pt-3 mt-3" id="contact-deck-bg">
            <div className="row" id="quote-target">
              <QLogo />
              {showQuote ? (
                <Quote submitQuote={this.submitQuote} />
              ) : (
                <Submitted />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SecFour;
