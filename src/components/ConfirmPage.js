import React from "react";
import { Field, FieldArray, reduxForm } from 'redux-form';
import renderData from "./renderData";
import renderMemberData from "./renderMemberData";



const ConfirmPage = (props) => {
    const { handleSubmit, previousPage } = props

    return (
        <form className="ui  form container"
            onSubmit={handleSubmit}
            style={{ position: 'relative', top: '30px' }}
        >

            <div className="ui  segment">
                <h2 className="ui center aligned teal  header">Confirm Information</h2>
                <hr></hr>
                <h2 className="ui center aligned teal  header">Personal Information</h2>
                <div className="four wide inline fields">
                    <div className="field">
                        <Field
                            name="firstName"
                            component={renderData}
                            label="First Name*"
                            style={{ textTransform: 'capitalize' }}
                        />
                    </div>
                    <div className="field">
                        <Field
                            name="lastName"
                            component={renderData}
                            label="Last Name*"
                            style={{ textTransform: 'capitalize' }}
                        />
                    </div>
                </div>
                <div className="four wide field">
                    <Field
                        name="dob"
                        component={renderData}
                        label="Date of birth*"
                    />
                    <Field
                        name="gender"
                        component={renderData}
                        label="Gender*"
                    />
                </div>
                <div className="field">
                    <Field
                        name="address1"
                        label="Address 1*"
                        style={{ textTransform: 'capitalize' }}
                        component={renderData} />
                </div>

                <div className="fields">
                    <div className="field">
                        <Field
                            name="state"
                            label="State*"
                            style={{ textTransform: 'capitalize' }}
                            component={renderData}
                        />
                    </div>
                    <div className="field">
                        <Field
                            name="country"
                            label="Country*"
                            style={{ textTransform: 'capitalize' }}
                            component={renderData}
                        />
                    </div>
                </div>
                <hr></hr>
                <h2 className="ui center aligned teal  header">Bank Details</h2>
                <div className="inline fields">
                    <label className="field">
                        <Field name="accountType" component="input" type="radio" value="individual" readOnly />{' '}
                        Individual
                    </label>
                    <label className="field">
                        <Field name="accountType" component="input" type="radio" value="corporate" readOnly />{' '}
                        Corporate
                    </label>

                </div>
                <div className="four wide field" >
                    <Field
                        name="pan"
                        type="text"
                        style={{ textTransform: 'uppercase' }}
                        component={renderData}
                        label="PAN No.*"
                    />
                    <label className="inline fields">Are you a Indian Citizen*</label>
                    <div className="inline fields">
                        <label className="field">
                            <Field name="nationality" component="input" type="radio" value="Yes" />{' '}
                            YES
                        </label>
                        <label className="field">
                            <Field name="nationality" component="input" type="radio" value="No" />{' '}
                            NO
                        </label>

                    </div>
                    <Field
                        name="profession"
                        type="text"
                        component={renderData}
                        label="Profession*"
                        style={{ textTransform: 'capitalize' }}
                    />
                    <Field
                        name="netWorth"
                        type="number"
                        component={renderData}
                        label="Net-Worth*"
                    />
                </div>
                <label className="fields">Bank Details</label>
                <div className="fields">
                    <div className="field">
                        <Field
                            name="ifscCode"
                            type="text"
                            component={renderData}
                            label="IFSC Code*"
                            style={{ textTransform: 'uppercase' }}
                        />
                    </div>
                    <div className="field">
                        <Field
                            name="accountNo"
                            type="number"
                            component={renderData}
                            label="Account Number*"
                        />
                    </div>
                    <div className="field">
                        <Field
                            name="accountName"
                            type="text"
                            component={renderData}
                            label="Account Holder Name*"
                            style={{ textTransform: 'capitalize' }}
                        />
                    </div>
                </div>
                <hr></hr>

                <FieldArray name="nominee" component={renderMemberData} readOnly={false} />
                <hr></hr>
                <button type="button" className="ui primary button" onClick={previousPage}>Previous</button>
                <button type="submit" className="ui primary right floated button" >Submit</button>
            </div>
        </form>
    );
}

export default reduxForm({
    form: 'wizard', // <------ same form name
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount

})(ConfirmPage)