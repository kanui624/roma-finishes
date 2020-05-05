import React from "react";

class ServTitle extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row text-center services">
          <div className="col-12">
            <h2 className="sec-title">Services</h2>
            <hr className="sec-title-hr" />
          </div>
          <div className="lead-container col-12">
            <p className="lead">
              Having served Central Texas for over 20 years, Roma Finishes
              offers seasoned expertise for all of your surface cleaning,
              preparation, and protection needs. Browse our services to see how
              we can help you today!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ServTitle;
