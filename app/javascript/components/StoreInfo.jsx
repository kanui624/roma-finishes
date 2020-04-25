import React from "react";

const StoreInfo = () => {
  return (
    <div id="contact-info-dec">
      <div className="row pt-3">
        <div className="col-md-4">
          <div className="card text-center">
            <h4 className="mt-1" id="contact-h4">
              Location
            </h4>
            <div className="container">
              <hr id="contact-hr" />
            </div>
            <div className="mb-3">
              <h5 id="contact-h5">710 N 25th Street, Waco, TX 76707</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <h4 className="mt-1" id="contact-h4">
              Hours
            </h4>
            <div className="container">
              <hr id="contact-hr" />
            </div>
            <div className="mb-3">
              <h5 id="contact-h5">Monday - Friday: 8am - 5pm</h5>
              <h5 id="contact-h5">Saturday: Appointment Only</h5>
              <h5 id="contact-h5">Sunday: Closed</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <h4 className="mt-1" id="contact-h4">
              Call - Email
            </h4>
            <div className="container">
              <hr id="contact-hr" />
            </div>
            <div className="mb-3">
              <h5 id="contact-h5">254-981-6471</h5>
              <h5 id="contact-h5">roma_finishes@roma.com</h5>
              <h5 id="contact-h5">owner_roma_finishes@roma.com</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreInfo;
