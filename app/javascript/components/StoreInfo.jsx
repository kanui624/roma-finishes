import React from "react";

class StoreInfo extends React.Component {
  render() {
    return (
      <div id="contact-info-dec">
        <div className="row">
          <div className="col-md-4">
            <div className="card text-center">
              <h4 className="contact-info-titles">Location</h4>
              <div className="container">
                <hr className="contact-info-hrs" />
              </div>
              <div className="info-sec address">
                <h5 className="contact-info">710 N 25th Street</h5>
                <h5 className="contact-info">Waco, TX 76707</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 hours-padding">
            <div className="card text-center">
              <h4 className="contact-info-titles">Hours</h4>
              <div className="container">
                <hr className="contact-info-hrs" />
              </div>
              <div className="info-sec hours">
                <h5 className="contact-info">Monday - Friday: 8am - 5pm</h5>
                <h5 className="contact-info">Saturday: Appointment Only</h5>
                <h5 className="contact-info">Sunday: Closed</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <h4 className="contact-info-titles">Call - Email</h4>
              <div className="container">
                <hr className="contact-info-hrs" />
              </div>
              <div className="info-sec call-email">
                <h5 className="contact-info">254-981-6471</h5>
                <h5 className="contact-info">roma_finishes@roma.com</h5>
                <h5 className="contact-info">owner_roma@roma.com</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StoreInfo;
