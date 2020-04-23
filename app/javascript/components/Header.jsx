import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Head = () => {
  return (
    <header>
      <div className="container roma-hero">
        <h1>Home | Business | Industrial</h1>
        <Link
          className="btn quote"
          activeClass="active"
          to="secfour"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1200}
        >
          Request a Quote
        </Link>
      </div>
    </header>
  );
};

export default Head;
