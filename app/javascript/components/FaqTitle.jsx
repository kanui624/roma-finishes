import React from "react";

class FaqTitle extends React.Component {
  render() {
    return (
      <div className="container padding mt-2">
        <div className="row text-center services mb-3">
          <div className="col-12">
            <h2 className="display-4 padding sec-title">FAQ</h2>
            <hr />
          </div>
          <div className="col-12">
            <p className="container lead">
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
