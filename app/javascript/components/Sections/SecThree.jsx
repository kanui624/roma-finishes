import React from "react";
import GalTitle from "../GalTitle";
import Gallery from "../Gallery";
import SimpleReactLightbox from "simple-react-lightbox";

class SecThree extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid" id="semi-break" />
        <div className="container-fluid" id="gallery-nav-target">
          <GalTitle />
        </div>
        <div className="container-fluid" id="gal-target">
          <SimpleReactLightbox>
            <Gallery />
          </SimpleReactLightbox>
        </div>
      </div>
    );
  }
}

export default SecThree;
