import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

class Head extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="roma-hero">
          <h1>Home | Business | Industrial</h1>
          <div className="desktop-link">
            <Link
              className="btn quote"
              activeClass="active"
              to="quote-target"
              spy={true}
              smooth={true}
              offset={-140}
              duration={1200}
            >
              Get a Quote!
            </Link>
          </div>
          <div className="mobile-link">
            <Link
              className="btn quote"
              activeClass="active"
              to="quote-target"
              spy={true}
              smooth={true}
              offset={-110}
              duration={1200}
            >
              Get a Quote!
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Head;
