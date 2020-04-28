import React from "react";
import axois from "axios";
import Contact from "../Contact";
import StoreInfo from "../StoreInfo";
import Quote from "../Quote";
import QLogo from "../QLogo";
import Submitted from "../Submitted";

class SecFour extends React.Component {
  constructor() {
    super();
    this.state = {
      showQuote: true,
    };
  }

  toggleQuote = () => {
    this.setState({
      showQuote: !this.state.showQuote,
    });
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
                <Quote toggleQuote={this.toggleQuote} />
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
