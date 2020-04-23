import React from "react";

const StoreInfo = () => {
  return (
    <div className="info-decoration">
      <div className="row pt-3">
        <div className="col">
          <div className="card text-center">
            <h4 className="mt-3">Hours of Operation</h4>
            <div className="container">
              <hr className="contact-hr" />
            </div>
            <h5>Monday - Friday: 8am - 5pm</h5>
            <h5>Saturday: Appointment Only</h5>
            <h5>Sunday: Closed</h5>
          </div>
        </div>
        <div className="col">
          <div className="card text-center">
            <h4 className="mt-3">Call - Email</h4>
            <div className="container">
              <hr className="contact-hr" />
            </div>
            <h5>254-981-6471</h5>
            <h5>roma_finishes@roma.com</h5>
            <h5>owner_roma_finishes@roma.com</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreInfo;
