import React from "react";

const Contact = () => {
  return (
    <div className="card" id="contact-card">
      <div className="row text-center">
        <div className="col-12">
          <h2 className="display-4 mb-5 sec-title contact-title">
            Contact Us!
          </h2>
          <div className="container">
            <hr className="contact-hr" />
          </div>
        </div>
        <div className="col-12">
          <p className="container lead lead-contact" id="contact-intro">
            How can we help? For any questions or concerns you can always reach
            us at 254-981-6471, refer to our FAQ section, or simply stop by and
            talk to us in person!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
