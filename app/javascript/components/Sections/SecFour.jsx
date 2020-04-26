import React from "react";
import Contact from "../Contact";
import StoreInfo from "../StoreInfo";
import Quote from "../Quote";
import QLogo from "../QLogo";

const SecFour = () => {
  return (
    <div className="container-fluid" id="contact-bg-image">
      <div className="card-deck mt-3 pt-5">
        <div className="container pt-3" id="contact-deck-bg">
          <Contact />
          <StoreInfo />
        </div>
      </div>
      <div className="card-deck pb-5">
        <div className="container pt-3 mt-3" id="contact-deck-bg">
          <div className="row" id="quote-target">
            <QLogo />
            <Quote />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecFour;
