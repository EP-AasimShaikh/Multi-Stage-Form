import React from "react";
import renderField from "./renderField";
import { Field,} from 'redux-form';
import lookup from "../apis/lookup";

let lookupData = [];
let token = "";

const rednderLookupData = ({ input, meta: { touched, error } }) => {
  return (
    <div className="four wide field">
      <select {...input} required>
        <option value="">Select Relation</option>
        {lookupData.map(val => (
          <option value={val.codeValueId} key={val.codeValueId}>
            {val.codeValue}
          </option>
        ))}
      </select>
      {touched && error && <div className="ui pointing red basic label">{error}</div>}
    </div>);
}
const renderMembers = ({ fields, meta: { error, submitFailed } }) => {

  const dat=(async()=>{
    const responses = await lookup.get('/thor-token-management/api/v1/jwt-token');
      token=responses.data.responseObject;

      const response = await lookup.post('/thor-lookupmanagement/api/v1/codeValue/_get', {
        codeTypeId: "7"
      }, {
        headers: {
          Token: token
        }
      });
      lookupData = response.data.responseListObject;
  })();

  return (

    <div className="ui  segment">
              <h2 className="ui center aligned teal  header">Nominee Details</h2>

      <button
        type="button"
        onClick={() => fields.push({})}
        className="ui primary button">Add Nominee
      </button>
      {submitFailed && error && <span>{error}</span>}

      <div className="ui list">
        {fields.map((member, index) => (
          <li key={index}>
<br></br>
              <hr></hr>
            <h4>Member {index + 1}</h4>
            <div className="inline fields">
              <div className="field">
                <Field
                  name={`${member}.nomineeFirstName`}
                  type="text"
                  component={renderField}
                  label="First Name*"
                  placeholder="First Name"
                  style={{textTransform:'capitalize'}}
                /></div>
              <div className="field">
                <Field
                  name={`${member}.nomineeLastName`}
                  type="text"
                  component={renderField}
                  label="Last Name*"
                  placeholder="Last Name"
                  style={{textTransform:'capitalize'}}
                />
              </div>
              <div className="field">
                <Field
                  name={`${member}.percentage`}
                  type="number"
                  component={renderField}
                  label="Percentage Allocation %*"
                  placeholder="Percentage"
                />
              </div>

              <br></br><br></br>
            </div>
            <div className="field">
              <label className="inline fields"><b>Relation with Nominee*</b></label>
                <Field name={`${member}.nomineeRelation`} component={rednderLookupData} />
              </div>
            <div className="nine wide field ">
                <Field
                  name={`${member}.nomineeAddress`}
                  type="text"
                  label="Address*"
                  placeholder="Address"
                  style={{textTransform:'capitalize'}}
                  component={renderField} />
              </div>
              
            <div className="inline fields">
              <div className="field">
                <Field
                  name={`${member}.nomineeState`}
                  type="text"
                  label="State*"
                  placeholder="State"
                  style={{textTransform:'capitalize'}}
                  component={renderField}
                />
              </div>
              <div className="field">
                <Field
                  name={`${member}.nomineeCountry`}
                  type="text"
                  label="Country*"
                  placeholder="Country"
                  style={{textTransform:'capitalize'}}
                  component={renderField}
                />
              </div>
              <div className="field">
                <br></br>
                <button
                  className="small ui teal  button"
                  type="button"
                  title="Remove Member"
                  onClick={() => fields.remove(index)}
                >Remove Nominee</button>
              </div>
            </div>


          </li>
        ))}
      </div>
    </div>

  );

}

export default renderMembers;