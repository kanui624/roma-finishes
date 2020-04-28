import React from "react";

class Quote extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("yep");
  }

  render() {
    return (
      <div className="col-md-6">
        <form className="mb-3" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="name"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="First name"
            />
          </div>
          <div className="form-group">
            <input
              type="name"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Last Name"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Your_email@email.com"
            />
          </div>
          <div className="form-group">
            <input
              type="phone number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="10 Digit Phone Number"
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Tell Us About Your Project!"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-secondary"
              id="contact-btn"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Quote;

// import React from "react";

// const Quote = () => {
//   return (
//     <div className="col-md-6">
//       <form className="mb-3">
//         <div className="form-group">
//           <input
//             type="name"
//             className="form-control"
//             id="exampleFormControlInput1"
//             placeholder="First name"
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="name"
//             className="form-control"
//             id="exampleFormControlInput1"
//             placeholder="Last Name"
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="email"
//             className="form-control"
//             id="exampleFormControlInput1"
//             placeholder="Your_email@email.com"
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="phone number"
//             className="form-control"
//             id="exampleFormControlInput1"
//             placeholder="10 Digit Phone Number"
//           />
//         </div>
//         <div className="form-group">
//           <textarea
//             className="form-control"
//             id="exampleFormControlTextarea1"
//             rows="3"
//             placeholder="Tell Us About Your Project!"
//           />
//         </div>
//         <div className="text-center">
//           <button className="btn btn-secondary" id="contact-btn">
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Quote;
