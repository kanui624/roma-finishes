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
        <div className="card-deck contact-deck">
          <div className="container" id="contact-deck-bg">
            <Contact />
            <StoreInfo />
          </div>
        </div>
        <div className="card-deck quote-deck-out">
          <div className="container " id="contact-deck-bg">
            <div className="quote-deck">
              <div className="row quote-row" id="quote-target">
                {showQuote ? (
                  <>
                    <QLogo />
                    <Quote submitQuote={this.submitQuote} />
                  </>
                ) : (
                  <Submitted />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SecFour;
