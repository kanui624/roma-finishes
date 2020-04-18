import React from "react";
import w_roma from "../images/w_roma.png";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top py-3">
      <div className="container">
        <div className="roma_logo">
          <a href="#" className="navbar-brand text-uppercase">
            <img
              id="wht_nav_logo"
              src={require("../images/w_roma.png")}
              alt="Roma Logo"
            />
          </a>
        </div>
        <button
          className="navbar-dark navbar-toggler"
          data-toggle="collapse"
          data-target="#romaMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          id="navbarSupportedContent"
          className="collapse navbar-collapse"
          id="romaMenu"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ml-auto">
              <a href="#" className="nav-link">
                services
              </a>
            </li>
            <li className="nav-item ml-auto">
              <a href="#" className="nav-link">
                gallery
              </a>
            </li>
            <li className="nav-item ml-auto">
              <a href="#" className="nav-link">
                contact us
              </a>
            </li>
            <li className="nav-item ml-auto">
              <a href="#" className="nav-link">
                faq
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
