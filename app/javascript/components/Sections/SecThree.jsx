import React from "react";
import GalTitle from "../GalTitle";
import Gallery from "../Gallery";
import SimpleReactLightbox from "simple-react-lightbox";

const SecThree = () => {
  return (
    <div>
      <div className="container-fluid" id="semi-break" />
      <div className="container-fluid">
        <GalTitle />
      </div>
      <div className="container">
        <SimpleReactLightbox>
          <Gallery />
        </SimpleReactLightbox>
      </div>
    </div>
  );
};

export default SecThree;
