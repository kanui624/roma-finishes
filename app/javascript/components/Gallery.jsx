import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import place_hold from "../images/place_hold.png";

const Gallery = () => {
  return (
    <div className="image-gallery">
      <SRLWrapper>
        <div className="row-gal">
          <div className="column-gal">
            <img src={require("../images/place_hold.png")} alt="Roma Logo" />
            <img src={require("../images/place_hold.png")} alt="Roma Logo" />
            <img src={require("../images/place_hold.png")} alt="Roma Logo" />
            <img src={require("../images/place_hold.png")} alt="Roma Logo" />
          </div>
          <div className="column-gal">
            <img src={require("../images/place_hold.png")} alt="Roma Logo" />
            <img src={require("../images/place_hold.png")} alt="Roma Logo" />
            <img src={require("../images/place_hold.png")} alt="Roma Logo" />
            <img src={require("../images/place_hold.png")} alt="Roma Logo" />
          </div>
          <div className="column-gal">
            <img src={require("../images/place_hold.png")} alt="Roma Logo" />
            <img src={require("../images/place_hold.png")} alt="Roma Logo" />
            <img src={require("../images/place_hold.png")} alt="Roma Logo" />
            <img src={require("../images/place_hold.png")} alt="Roma Logo" />
          </div>
          <div className="column-gal">
            <img src={require("../images/place_hold.png")} alt="Roma Logo" />
            <img src={require("../images/place_hold.png")} alt="Roma Logo" />
            <img src={require("../images/place_hold.png")} alt="Roma Logo" />
            <img src={require("../images/place_hold.png")} alt="Roma Logo" />
          </div>
        </div>
      </SRLWrapper>
    </div>
  );
};

export default Gallery;
