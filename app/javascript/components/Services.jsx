import React from "react";
import card_placehold from "../images/card_placehold.png";

const Services = () => {
  return (
    <div className="container padding mt-5">
      <div className="row padding card-deck">
        <div className="col-md-4 d-flex align-items-stretch">
          <div className="card shadow mb-5 bg-white rounded">
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

        <div className="col-md-4 d-flex align-items-stretch">
          <div className="card shadow mb-5 bg-white rounded">
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

        <div className="col-md-4 d-flex align-items-stretch">
          <div className="card shadow mb-5 bg-white rounded">
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
        <div className="col-md-4 d-flex align-items-stretch">
          <div className="card shadow mb-5 bg-white rounded">
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

        <div className="col-md-4 d-flex align-items-stretch">
          <div className="card shadow mb-5 bg-white rounded">
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

        <div className="col-md-4 d-flex align-items-stretch">
          <div className="card shadow mb-5 bg-white rounded">
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
