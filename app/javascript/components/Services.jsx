import React from "react";
import w_roma from "../images/b_roma.png";

const Services = () => {
  return (
    <div className="container padding mt-5">
      <div className="row padding card-deck">
        <div className="col-md-4">
          <div className="card mb-5">
            <img
              className="card-img-top img-fluid"
              id="serv-card"
              src={require("../images/card_placehold.png")}
            />
            <div className="card-body text-center">
              <h4 className="card-title">Dry Ice Blasting</h4>
              <hr />
              <p className="card-text">
                This is ideal for resurfacing, however, we can utilize a variety
                of eco-friendly methods to meet your surface treatment
                requirements.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-5">
            <img
              className="card-img-top img-fluid"
              id="serv-card"
              src={require("../images/card_placehold.png")}
            />
            <div className="card-body text-center">
              <h4 className="card-title">Sand Blasting</h4>
              <hr />
              <p className="card-text">
                This is ideal for resurfacing, however, we can utilize a variety
                of eco-friendly methods to meet your surface treatment
                requirements.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-5">
            <img
              className="card-img-top img-fluid"
              id="serv-card"
              src={require("../images/card_placehold.png")}
            />
            <div className="card-body text-center">
              <h4 className="card-title">Pressure and Steam Washing</h4>
              <hr />
              <p className="card-text">
                This is ideal for resurfacing, however, we can utilize a variety
                of eco-friendly methods to meet your surface treatment
                requirements.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row padding card-deck">
        <div className="col-md-4">
          <div className="card mb-5">
            <img
              className="card-img-top img-fluid"
              id="serv-card"
              src={require("../images/card_placehold.png")}
            />
            <div className="card-body text-center">
              <h4 className="card-title">Mechanical Part Washing</h4>
              <hr />
              <p className="card-text">
                This is ideal for resurfacing, however, we can utilize a variety
                of eco-friendly methods to meet your surface treatment
                requirements.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-5">
            <img
              className="card-img-top img-fluid"
              id="serv-card"
              src={require("../images/card_placehold.png")}
            />
            <div className="card-body text-center">
              <h4 className="card-title">Glass Bead Polish</h4>
              <hr />
              <p className="card-text">
                This is ideal for resurfacing, however, we can utilize a variety
                of eco-friendly methods to meet your surface treatment
                requirements.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-5">
            <img
              className="card-img-top img-fluid"
              id="serv-card"
              src={require("../images/card_placehold.png")}
            />
            <div className="card-body text-center">
              <h4 className="card-title">Painting</h4>
              <hr />
              <p className="card-text">
                This is ideal for resurfacing, however, we can utilize a variety
                of eco-friendly methods to meet your surface treatment
                requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
