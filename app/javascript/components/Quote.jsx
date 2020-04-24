import React from "react";

const Quote = () => {
  return (
    <div className="col-md-6">
      <form>
        <div className="form-group">
          <input
            type="name"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="First name"
          />
        </div>
        <div className="form-group">
          <input
            type="name"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Last Name"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Your_email@email.com"
          />
        </div>
        <div className="form-group">
          <input
            type="phone number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="10 Digit Phone Number"
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Tell Us About Your Project!"
          />
        </div>
      </form>
    </div>
  );
};

export default Quote;
