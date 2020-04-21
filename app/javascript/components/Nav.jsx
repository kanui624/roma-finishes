import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import w_roma from "../images/w_roma.png";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top nav-font">
      <div className="container">
        <div className="roma_logo">
          <Link
            className="react-link navbar-brand"
            data-toggle="collapse"
            data-target="#romaMenu"
            activeClass="active"
            to="secone"
            spy={true}
            smooth={true}
            offset={-145}
            duration={700}
          >
            <img
              id="wht_nav_logo"
              src={require("../images/w_roma.png")}
              alt="Roma Logo"
            />
          </Link>
        </div>
        <button
          className="navbar-toggler navbar-dark"
          type="button"
          data-toggle="collapse"
          data-target="#romaMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="romaMenu">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ml-auto">
              <Link
                className="react-link nav-link"
                data-toggle="collapse"
                data-target="#romaMenu"
                activeClass="active"
                to="sectwo"
                spy={true}
                smooth={true}
                offset={-115}
                duration={700}
              >
                Services
              </Link>
            </li>
            <li className="nav-item ml-auto">
              <Link
                className="react-link nav-link"
                data-toggle="collapse"
                data-target="#romaMenu"
                activeClass="active"
                to="sectwo"
                spy={true}
                smooth={true}
                offset={-115}
                duration={700}
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item ml-auto">
              <Link
                className="react-link nav-link"
                data-toggle="collapse"
                data-target="#romaMenu"
                activeClass="active"
                to="sectwo"
                spy={true}
                smooth={true}
                offset={-115}
                duration={700}
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item ml-auto">
              <Link
                className="react-link nav-link"
                data-toggle="collapse"
                data-target="#romaMenu"
                activeClass="active"
                to="sectwo"
                spy={true}
                smooth={true}
                offset={-115}
                duration={700}
              >
                Faq
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
