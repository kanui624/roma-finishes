import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import place_hold from "../images/place_hold.png";
import place_hold_white from "../images/place_hold_white.png";

const options = {
  captionFontFamily: "Muli, sans-serif",
  captionFontWeight: "300",
  autoplaySpeed: 0,
  transitionSpeed: 900,
  enablePanzoom: false,
  showDownloadButton: false,
};

const Gallery = () => {
  return (
    <div className="image-gallery">
      <SRLWrapper options={options}>
        <div className="row-gal">
          <div className="column-gal">
            <div className="overflow">
              <img src={require("../images/place_hold.png")} alt="Roma Logo" />
            </div>
            <div className="overflow">
              <img
                src={require("../images/place_hold_white.png")}
                alt="Roma Logo"
              />
            </div>
            <div className="overflow">
              <img src={require("../images/place_hold.png")} alt="Roma Logo" />
            </div>
            <div className="overflow">
              <img
                src={require("../images/place_hold_white.png")}
                alt="Roma Logo"
              />
            </div>
          </div>

          <div className="column-gal">
            <div className="overflow">
              <img
                src={require("../images/place_hold_white.png")}
                alt="Roma Logo"
              />
            </div>
            <div className="overflow">
              <img src={require("../images/place_hold.png")} alt="Roma Logo" />
            </div>
            <div className="overflow">
              <img
                src={require("../images/place_hold_white.png")}
                alt="Roma Logo"
              />
            </div>
            <div className="overflow">
              <img src={require("../images/place_hold.png")} alt="Roma Logo" />
            </div>
          </div>

          <div className="column-gal">
            <div className="overflow">
              <img src={require("../images/place_hold.png")} alt="Roma Logo" />
            </div>
            <div className="overflow">
              <img
                src={require("../images/place_hold_white.png")}
                alt="Roma Logo"
              />
            </div>
            <div className="overflow">
              <img src={require("../images/place_hold.png")} alt="Roma Logo" />
            </div>
            <div className="overflow">
              <img
                src={require("../images/place_hold_white.png")}
                alt="Roma Logo"
              />
            </div>
          </div>
          <div className="column-gal">
            <div className="overflow">
              <img
                src={require("../images/place_hold_white.png")}
                alt="Roma Logo"
              />
            </div>
            <div className="overflow">
              <img src={require("../images/place_hold.png")} alt="Roma Logo" />
            </div>
            <div className="overflow">
              <img
                src={require("../images/place_hold_white.png")}
                alt="Roma Logo"
              />
            </div>
            <div className="overflow">
              <img src={require("../images/place_hold.png")} alt="Roma Logo" />
            </div>
          </div>
        </div>
      </SRLWrapper>
    </div>
  );
};

export default Gallery;
