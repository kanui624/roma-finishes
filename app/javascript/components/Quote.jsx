import React from "react";

class Quote extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    const formData = {
      first_name: this.first_name.value,
      last_name: this.last_name.value,
      email: this.email.value,
      number: this.number.value,
      project_info: this.project_info.value,
    };
    this.props.submitQuote(formData);
  }

  render() {
    return (
      <div className="col-md-6">
        <form className="mb-3" onSubmit={(e) => this.onSubmit(e)}>
          <div className="form-group">
            <input
              type="name"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="First name"
              ref={(input) => (this.first_name = input)}
            />
          </div>
          <div className="form-group">
            <input
              type="name"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Last Name"
              ref={(input) => (this.last_name = input)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Your_email@email.com"
              ref={(input) => (this.email = input)}
            />
          </div>
          <div className="form-group">
            <input
              type="phone number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="10 Digit Phone Number"
              ref={(input) => (this.number = input)}
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Tell Us About Your Project!"
              ref={(input) => (this.project_info = input)}
            />
          </div>
          <div className="text-center">
            <button
              value="submit"
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
