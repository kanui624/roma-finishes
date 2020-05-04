import React from "react";
import spin from "../images/logo/spin.png";

class Faq extends React.Component {
  render() {
    return (
      <div>
        <div className="faq-1 card mb-3">
          <button className="faq" data-toggle="collapse" data-target="#coll1">
            <div className="row">
              <div className="faq-title col-md-8 text-center">
                01 - Ex fugiat eiusmod magna fugiat velit ullamco reprehenderit
                cupidatat
              </div>
              <div className="col-md-3" />
              <div className="col-md-1 text-center">
                <img
                  id="faq-img-button"
                  className="faq-img-button"
                  src={require("../images/logo/spin.png")}
                  alt="roma btn"
                />
              </div>
            </div>
          </button>
          <div className="container faq-answer collapse text-center" id="coll1">
            <hr />
            <p>
              Elit adipisicing sunt pariatur aute sint. Commodo esse tempor
              officia ipsum cupidatat pariatur dolor. Exercitation aute ut
              cupidatat aliqua sint laborum fugiat sint nulla non dolor.
            </p>
          </div>
        </div>

        <div className="faq-1 card">
          <button className="faq" data-toggle="collapse" data-target="#coll2">
            <div className="row">
              <div className="faq-title col-md-8 text-center">
                01 - Ex fugiat eiusmod magna fugiat velit ullamco reprehenderit
                cupidatat
              </div>
              <div className="col-md-3" />
              <div className="col-md-1 text-center">
                <img
                  id="faq-img-button"
                  className="faq-img-button"
                  src={require("../images/logo/spin.png")}
                  alt="roma btn"
                />
              </div>
            </div>
          </button>
          <div className="container faq-answer collapse text-center" id="coll2">
            <hr />
            <p>
              Elit adipisicing sunt pariatur aute sint. Commodo esse tempor
              officia ipsum cupidatat pariatur dolor. Exercitation aute ut
              cupidatat aliqua sint laborum fugiat sint nulla non dolor.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;
