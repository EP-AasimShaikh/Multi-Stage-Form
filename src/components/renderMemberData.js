import React from "react";
import { Field } from 'redux-form';
import renderData from "./renderData";

const renderMemberData = ({ fields, readOnly, meta: { error, submitFailed } }) => {
  return (

    <div className="ui  segment">
                      <h2 className="ui center aligned teal  header">Nominee Details</h2>

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
                  component={renderData}
                  label="First Name"
                  style={{textTransform:'capitalize'}}
                  readOnly={readOnly}
                /></div>
              <div className="field">
                <Field
                  name={`${member}.nomineeLastName`}
                  type="text"
                  component={renderData}
                  label="Last Name"
                  style={{textTransform:'capitalize'}}
                />
              </div>
              <div className="field">
                <Field
                  name={`${member}.percentage`}
                  type="number"
                  component={renderData}
                  label="Percentage Allocation %"
                />
              </div>
              
            </div>
            <div className="nine wide field ">
                <Field
                  name={`${member}.nomineeAddress`}
                  type="text"
                  label="Address 1"
                  component={renderData} />
              </div>
              
            <div className="inline fields">
              <div className="field">
                <Field
                  name={`${member}.nomineeState`}
                  type="text"
                  label="State"
                  style={{textTransform:'capitalize'}}
                  component={renderData}
                />
              </div>
              <div className="field">
                <Field
                  name={`${member}.nomineeCountry`}
                  type="text"
                  label="Country"
                  component={renderData}
                  style={{textTransform:'capitalize'}}
                />
              </div>
              
            </div>


          </li>
        ))}
      </div>
    </div>

  );

}

export default renderMemberData;