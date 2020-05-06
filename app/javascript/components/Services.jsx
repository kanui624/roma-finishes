import React from "react";
import card_placehold from "../images/card_placehold.png";

class Services extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="serv-cards align-items-stretch">
          <div className="serv-1 card shadow bg-white rounded">
            <img
              className="card-img-top img-fluid"
              id="serv-card"
              src={require("../images/card_placehold.png")}
            />
            <div className="card-body text-center">
              <h4 className="card-title">Dry Ice Blasting</h4>
              <hr className="cards-hr" />
              <p className="card-text">
                This is ideal for resurfacing, however, we can utilize a variety
                of eco-friendly methods to meet your surface treatment
                requirements.
              </p>
            </div>
          </div>

          <div className="serv-2 card shadow bg-white rounded">
            <img
              className="card-img-top img-fluid"
              id="serv-card"
              src={require("../images/card_placehold.png")}
            />
            <div className="card-body text-center">
              <h4 className="card-title">Sand Blasting</h4>
              <hr className="cards-hr" />
              <p className="card-text">
                This is ideal for resurfacing, however, we can utilize a variety
                of eco-friendly methods to meet your surface treatment
                requirements.
              </p>
            </div>
          </div>

          <div className="serv-3 card shadow bg-white rounded">
            <img
              className="card-img-top img-fluid"
              id="serv-card"
              src={require("../images/card_placehold.png")}
            />
            <div className="card-body text-center">
              <h4 className="card-title">Pressure/Steam Washing</h4>
              <hr className="cards-hr" />
              <p className="card-text">
                This is ideal for resurfacing, however, we can utilize a variety
                of eco-friendly methods to meet your surface treatment
                requirements.
              </p>
            </div>
          </div>

          <div className="serv-4 card shadow bg-white rounded">
            <img
              className="card-img-top img-fluid"
              id="serv-card"
              src={require("../images/card_placehold.png")}
            />
            <div className="card-body text-center">
              <h4 className="card-title">Mechanical Part Washing</h4>
              <hr className="cards-hr" />
              <p className="card-text">
                This is ideal for resurfacing, however, we can utilize a variety
                of eco-friendly methods to meet your surface treatment
                requirements.
              </p>
            </div>
          </div>

          <div className="serv-5 card shadow bg-white rounded">
            <img
              className="card-img-top img-fluid"
              id="serv-card"
              src={require("../images/card_placehold.png")}
            />
            <div className="card-body text-center">
              <h4 className="card-title">Glass Bead Polish</h4>
              <hr className="cards-hr" />
              <p className="card-text">
                This is ideal for resurfacing, however, we can utilize a variety
                of eco-friendly methods to meet your surface treatment
                requirements.
              </p>
            </div>
          </div>

          <div className="serv-6 card shadow bg-white rounded">
            <img
              className="card-img-top img-fluid"
              id="serv-card"
              src={require("../images/card_placehold.png")}
            />
            <div className="card-body text-center">
              <h4 className="card-title">Painting</h4>
              <hr className="cards-hr" />
              <p className="card-text">
                This is ideal for resurfacing, however, we can utilize a variety
                of eco-friendly methods to meet your surface treatment
                requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;

// import React from "react";
// import card_placehold from "../images/card_placehold.png";

// class Services extends React.Component {
//   render() {
//     return (
//       <div className="container">
//         <div className="row card-deck">
//           <div className="col-md-4 d-flex align-items-stretch">
//             <div className="card shadow mb-5 bg-white rounded">
//               <img
//                 className="card-img-top img-fluid"
//                 id="serv-card"
//                 src={require("../images/card_placehold.png")}
//               />
//               <div className="card-body text-center">
//                 <h4 className="card-title">Dry Ice Blasting</h4>
//                 <hr className="cards-hr" />
//                 <p className="card-text">
//                   This is ideal for resurfacing, however, we can utilize a
//                   variety of eco-friendly methods to meet your surface treatment
//                   requirements.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-4 d-flex align-items-stretch">
//             <div className="card shadow mb-5 bg-white rounded">
//               <img
//                 className="card-img-top img-fluid"
//                 id="serv-card"
//                 src={require("../images/card_placehold.png")}
//               />
//               <div className="card-body text-center">
//                 <h4 className="card-title">Sand Blasting</h4>
//                 <hr className="cards-hr" />
//                 <p className="card-text">
//                   This is ideal for resurfacing, however, we can utilize a
//                   variety of eco-friendly methods to meet your surface treatment
//                   requirements.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-4 d-flex align-items-stretch">
//             <div className="card shadow mb-5 bg-white rounded">
//               <img
//                 className="card-img-top img-fluid"
//                 id="serv-card"
//                 src={require("../images/card_placehold.png")}
//               />
//               <div className="card-body text-center">
//                 <h4 className="card-title">Pressure and Steam Washing</h4>
//                 <hr className="cards-hr" />
//                 <p className="card-text">
//                   This is ideal for resurfacing, however, we can utilize a
//                   variety of eco-friendly methods to meet your surface treatment
//                   requirements.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="row card-deck serv-row">
//           <div className="col-md-4 d-flex align-items-stretch">
//             <div className="card shadow mb-5 bg-white rounded">
//               <img
//                 className="card-img-top img-fluid"
//                 id="serv-card"
//                 src={require("../images/card_placehold.png")}
//               />
//               <div className="card-body text-center">
//                 <h4 className="card-title">Mechanical Part Washing</h4>
//                 <hr className="cards-hr" />
//                 <p className="card-text">
//                   This is ideal for resurfacing, however, we can utilize a
//                   variety of eco-friendly methods to meet your surface treatment
//                   requirements.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-4 d-flex align-items-stretch">
//             <div className="card shadow mb-5 bg-white rounded">
//               <img
//                 className="card-img-top img-fluid"
//                 id="serv-card"
//                 src={require("../images/card_placehold.png")}
//               />
//               <div className="card-body text-center">
//                 <h4 className="card-title">Glass Bead Polish</h4>
//                 <hr className="cards-hr" />
//                 <p className="card-text">
//                   This is ideal for resurfacing, however, we can utilize a
//                   variety of eco-friendly methods to meet your surface treatment
//                   requirements.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-4 d-flex align-items-stretch">
//             <div className="card shadow mb-5 bg-white rounded">
//               <img
//                 className="card-img-top img-fluid"
//                 id="serv-card"
//                 src={require("../images/card_placehold.png")}
//               />
//               <div className="card-body text-center">
//                 <h4 className="card-title">Painting</h4>
//                 <hr className="cards-hr" />
//                 <p className="card-text">
//                   This is ideal for resurfacing, however, we can utilize a
//                   variety of eco-friendly methods to meet your surface treatment
//                   requirements.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Services;
