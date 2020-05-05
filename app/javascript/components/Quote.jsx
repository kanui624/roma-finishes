import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Error from "./valErrors";

const numberRegEx = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const nameRegEx = /^[a-z ,.'-]+$/i;

const validationSchema = Yup.object().shape({
  first_name: Yup.string()
    .matches(nameRegEx, "Invalid First Name")
    .max(30, "30 Characters Max")
    .required("Required"),

  last_name: Yup.string()
    .matches(nameRegEx, "Invalid Last Name")
    .max(30, "30 Characters Max")
    .required("Required"),

  email: Yup.string().email("Invalid Email").required("Required"),

  number: Yup.string()
    .matches(numberRegEx, "Invalid Phone Number")
    .max(13, "Invalid Phone Number")
    .required("Required"),

  project_info: Yup.string()
    .min(20, "20 Characters Min")
    .max(500, "500 characters Max")
    .required("Required"),
});

class Quote extends React.Component {
  render() {
    return (
      <div className="col-md-6 quote-form">
        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            number: "",
            project_info: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(e) => {
            const formData = {
              first_name: this.first_name.value,
              last_name: this.last_name.value,
              email: this.email.value,
              number: this.number.value,
              project_info: this.project_info.value,
            };
            this.props.submitQuote(formData);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  className={
                    touched.first_name && errors.name
                      ? "form-control has-error"
                      : "form-control"
                  }
                  placeholder="First Name"
                  ref={(input) => (this.first_name = input)}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <Error
                  id="error-id"
                  touched={touched.first_name}
                  message={errors.first_name}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  className={
                    touched.last_name && errors.name
                      ? "form-control has-error"
                      : "form-control"
                  }
                  placeholder="Last Name"
                  ref={(input) => (this.last_name = input)}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <Error touched={touched.last_name} message={errors.last_name} />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  id="email"
                  className={
                    touched.email && errors.name
                      ? "form-control has-error"
                      : "form-control"
                  }
                  placeholder="Your_email@email.com"
                  ref={(input) => (this.email = input)}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <Error touched={touched.email} message={errors.email} />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="number"
                  id="number"
                  className={
                    touched.number && errors.name
                      ? "form-control has-error"
                      : "form-control"
                  }
                  placeholder="10 Digit Phone Number"
                  ref={(input) => (this.number = input)}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <Error touched={touched.number} message={errors.number} />
              </div>
              <div className="form-group">
                <textarea
                  type="text"
                  name="project_info"
                  id="project_info"
                  maxLength="500"
                  className={
                    touched.project_info && errors.name
                      ? "form-control has-error"
                      : "form-control"
                  }
                  rows="3"
                  placeholder="Tell Us About Your Project!"
                  ref={(input) => (this.project_info = input)}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <div className="textarea-grid-error-counter">
                  <div className="textarea-error">
                    <Error
                      touched={touched.project_info}
                      message={errors.project_info}
                    />
                  </div>
                  <div className="textarea-counter">
                    <div className="text-right" id="count" />
                  </div>
                </div>
                <div className="quote-button">
                  <button
                    value="submit"
                    type="submit"
                    className="btn btn-secondary"
                    id="contact-btn"
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

export default Quote;
