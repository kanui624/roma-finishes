import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import w_roma from "../images/logo/w_roma.png";

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top nav-font">
        <div className="container">
          <div className="roma_logo">
            <Link
              className="react-link navbar-brand"
              activeClass="active"
              to="secone"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
            >
              <img
                id="wht_nav_logo"
                src={require("../images/logo/w_roma.png")}
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
                <div className="desktop-link">
                  <Link
                    className="react-link nav-link"
                    data-toggle="collapse"
                    data-target="#romaMenu"
                    activeClass="active"
                    to="sectwo"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={700}
                  >
                    Services
                  </Link>
                </div>
                <div className="mobile-link">
                  <Link
                    className="react-link nav-link"
                    data-toggle="collapse"
                    data-target="#romaMenu"
                    activeClass="active"
                    to="sectwo"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={700}
                  >
                    Services
                  </Link>
                </div>
              </li>
              <li className="nav-item ml-auto">
                <div className="desktop-link">
                  <Link
                    className="react-link nav-link"
                    data-toggle="collapse"
                    data-target="#romaMenu"
                    activeClass="active"
                    to="gallery-nav-target"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={1000}
                  >
                    Gallery
                  </Link>
                </div>
                <div className="mobile-link">
                  <Link
                    className="react-link nav-link"
                    data-toggle="collapse"
                    data-target="#romaMenu"
                    activeClass="active"
                    to="gallery-nav-target"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                  >
                    Gallery
                  </Link>
                </div>
              </li>
              <li className="nav-item ml-auto">
                <div className="desktop-link">
                  <Link
                    className="react-link nav-link"
                    data-toggle="collapse"
                    data-target="#romaMenu"
                    activeClass="active"
                    to="secfour"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={700}
                  >
                    Contact Us
                  </Link>
                </div>
                <div className="mobile-link">
                  <Link
                    className="react-link nav-link"
                    data-toggle="collapse"
                    data-target="#romaMenu"
                    activeClass="active"
                    to="secfour"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={700}
                  >
                    Contact Us
                  </Link>
                </div>
              </li>
              <li className="nav-item ml-auto">
                <div className="desktop-link">
                  <Link
                    className="react-link nav-link"
                    data-toggle="collapse"
                    data-target="#romaMenu"
                    activeClass="active"
                    to="secfive"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={700}
                  >
                    Faq
                  </Link>
                </div>
                <div className="mobile-link">
                  <Link
                    className="react-link nav-link"
                    data-toggle="collapse"
                    data-target="#romaMenu"
                    activeClass="active"
                    to="secfive"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={700}
                  >
                    Faq
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
