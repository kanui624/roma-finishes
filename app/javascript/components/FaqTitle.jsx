import React from "react";

class FaqTitle extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row text-center services">
          <div className="col-12">
            <h2 className="sec-title">FAQ</h2>
            <hr className="sec-title-hr" />
          </div>
          <div className="lead-container col-12">
            <p className="lead">
              If you can't find the right answer to your question below, give us
              a call!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default FaqTitle;
