import React from "react";
import FaqTitle from "../FaqTitle";
import Faq from "../Faq";

class SecFive extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <FaqTitle />
        <div className="container">
          <Faq />
        </div>
      </div>
    );
  }
}

export default SecFive;
