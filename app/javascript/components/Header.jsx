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
          to="sectwo"
          spy={true}
          smooth={true}
          offset={-115}
          duration={700}
        >
          Get a Quote
        </Link>
      </div>
    </header>
  );
};

export default Head;

// import React from "react";

// const Head = () => {
//   return (
//     <header>
//       <div className="container roma-hero">
//         <h1>Home | Business | Industrial</h1>
//         <a className="btn" href="#">
//           Get a Quote
//         </a>
//       </div>
//     </header>
//   );
// };

// export default Head;
