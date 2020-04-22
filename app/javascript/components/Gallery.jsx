import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import place_hold from "../images/place_hold.png";

const Gallery = () => {
  return (
    <div className="image-gallery above-nav">
      <SRLWrapper>
        <img
          id="wht_nav_logo"
          src={require("../images/place_hold.png")}
          alt="Roma Logo"
        />
      </SRLWrapper>
    </div>
  );
};

export default Gallery;
