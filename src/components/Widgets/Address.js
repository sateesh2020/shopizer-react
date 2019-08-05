import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { required, email } from '../../config/validations';

class Address extends Component {
  render() {
    return (
      <div>
        <form action="#" method="post">
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="firstName">
                First Name <span>*</span>
              </label>
              <Field
                className="form-control"
                component="input"
                type="text"
                name="firstName"
                validate={required}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="lastName">
                Last Name <span>*</span>
              </label>
              <Field
                className="form-control"
                component="input"
                type="text"
                name="lastName"
                validate={required}
              />
            </div>
            <div className="col-12 mb-3">
              <label htmlFor="company">Company Name</label>
              <Field
                className="form-control"
                component="input"
                type="text"
                name="company"
              />
            </div>
            <div className="col-12 mb-3">
              <label htmlFor="country">
                Country <span>*</span>
              </label>
              <Field
                className="custom-select d-block w-100"
                component="select"
                name="country"
                validate={required}
              >
                <option value="usa">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ger">Germany</option>
                <option value="fra">France</option>
                <option value="ind">India</option>
                <option value="aus">Australia</option>
                <option value="bra">Brazil</option>
                <option value="cana">Canada</option>
              </Field>
            </div>
            <div className="col-12 mb-3">
              <label htmlFor="streetAddress">
                Address <span>*</span>
              </label>
              <Field
                className="form-control"
                component="input"
                type="textarea"
                name="streetAddress"
                validate={required}
              />
            </div>
            <div className="col-12 mb-3">
              <label htmlFor="postCode">
                Postcode <span>*</span>
              </label>
              <Field
                className="form-control"
                component="input"
                type="text"
                name="postCode"
                validate={required}
              />
            </div>
            <div className="col-12 mb-3">
              <label htmlFor="city">
                Town/City <span>*</span>
              </label>
              <Field
                className="form-control"
                component="input"
                type="text"
                name="city"
                validate={required}
              />
            </div>
            <div className="col-12 mb-3">
              <label htmlFor="state">
                Province <span>*</span>
              </label>
              <Field
                className="form-control"
                component="input"
                type="text"
                name="state"
              />
            </div>
            <div className="col-12 mb-3">
              <label htmlFor="phoneNumber">
                Phone No <span>*</span>
              </label>
              <Field
                className="form-control"
                component="input"
                type="number"
                name="phoneNumber"
                validate={required}
              />
            </div>
            <div className="col-12 mb-4">
              <label htmlFor="emailAddress">
                Email Address <span>*</span>
              </label>
              <Field
                className="form-control"
                component="input"
                type="email"
                name="emailAddress"
                validate={required}
              />
            </div>

            <div className="col-12">
              <div className="custom-control custom-checkbox d-block mb-2">
                <Field
                  className="custom-control-input"
                  component="input"
                  type="checkbox"
                  name="terms"
                />
                <label className="custom-control-label" htmlFor="terms">
                  Terms and conditions
                </label>
              </div>
              <div className="custom-control custom-checkbox d-block mb-2">
                <Field
                  className="custom-control-input"
                  component="input"
                  type="checkbox"
                  name="createAccount"
                />
                <label className="custom-control-label" htmlFor="createAccount">
                  Create an account
                </label>
              </div>
              <div className="custom-control custom-checkbox d-block">
                <Field
                  className="custom-control-input"
                  component="input"
                  type="checkbox"
                  name="subscribe"
                />
                <label className="custom-control-label" htmlFor="subscribe">
                  Subscribe to our newsletter
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'address', // a unique identifier for this form
})(Address);
