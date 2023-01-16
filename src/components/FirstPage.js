import React from "react";
import { useState, useEffect } from "react";
import lookup from '../apis/lookup'
import { Field, reduxForm } from 'redux-form';
import renderField from "./renderField";
import validate from './validate';
let lookupData = [];

const rednderLookupData = ({ input, meta: { touched, error } }) => {
  return (
    <div className="four wide field">
      <select {...input}>
        <option value="">Select gender</option>
        {lookupData.map(val => (
          <option value={val.codeValue} key={val.codeValueId}>
            {val.codeValue}
          </option>
        ))}
      </select>
      {touched && error && <div className="ui pointing red basic label">{error}</div>}
    </div>);
}

const FirstPage = props => {
  const { handleSubmit, reset } = props;
  const [token, setToken] = useState(null);

  //lookup(gender) api call
  useEffect(async () => {
    const responses = await lookup.get('/thor-token-management/api/v1/jwt-token');

    setToken(responses.data.responseObject);

    const response = await lookup.post('/thor-lookupmanagement/api/v1/codeValue/_get', {
      codeTypeId: "5"
    }, {
      headers: {
        Token: token
      }
    });
    lookupData = response.data.responseListObject;

  }, [token]);




  return (
    <form className="ui  form container"
      onSubmit={handleSubmit}
      style={{ position: 'relative', top: '30px' }}
    >
      <div className="ui  segment">
      <h2 className="ui center aligned teal  header">Personal Information</h2>
        <div className="four wide inline fields">
          <div className="field">
            <Field
              name="firstName"
              type="text"
              component={renderField}
              label="First Name*"
              placeholder="First Name"
              style={{textTransform:'capitalize'}}
            />
          </div>
          <div className="field">
            <Field
              name="lastName"
              type="text"
              component={renderField}
              label="Last Name*"
              placeholder="Last Name"
              style={{textTransform:'capitalize'}}
            />
          </div>
        </div>

        <div className="four wide field">
          <Field
            name="dob"
            type="date"
            component={renderField}
            label="Date of birth*"
          />
        </div>
        <label className="inline fields"><b>Gender*</b></label>

        <Field name="gender" component={rednderLookupData} />

        <div className="field">
          <Field
            name="address1"
            type="text"
            label="Address 1*"
            placeholder="Address"
            style={{textTransform:'capitalize'}}
            component={renderField} />
        </div>
        

        <div className="fields">
          <div className="four wide field">
            <Field
              name="state"
              type="text"
              label="State*"
              placeholder="State"
              style={{textTransform:'capitalize'}}
              component={renderField}
            />
          </div>
          <div className="four wide field">
            <Field
              name="country"
              type="text"
              label="Country*"
              placeholder="Country"
              style={{textTransform:'capitalize'}}
              component={renderField}
            />
          </div>
        </div>
        <br></br>
        <button onClick={reset} className="ui primary  floated button" type="reset" >Reset</button>
        <button className="ui primary right floated button" type="submit">Next</button>

      </div>
    </form>

  );
}

export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(FirstPage)

