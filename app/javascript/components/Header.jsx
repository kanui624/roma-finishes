import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Head = () => {
  return (
    <header>
      <div className="container roma-hero">
        <h1>Home | Business | Industrial</h1>
        <div className="desktop-link">
          <Link
            className="btn quote"
            activeClass="active"
            data-toggle="collapse"
            data-target="#romaMenu"
            to="quote-target"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1200}
          >
            Request a Quote
          </Link>
        </div>
        <div className="mobile-link">
          <Link
            className="btn quote"
            activeClass="active"
            data-toggle="collapse"
            data-target="#romaMenu"
            to="quote-target"
            spy={true}
            smooth={true}
            offset={-90}
            duration={1200}
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Head;
