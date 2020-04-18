import React from "react";
import Nav from "../components/Nav";

const Head = () => {
  return (
    <div className="container-fluid section-one">
      <Nav />
      <header>
        <div className="container roma-hero">
          <h1>Home | Business | Industrial</h1>
          <a className="btn" href="#">
            Get a Quote
          </a>
        </div>
      </header>
    </div>
  );
};

export default Head;
