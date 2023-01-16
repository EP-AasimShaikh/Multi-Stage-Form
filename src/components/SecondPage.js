import React from "react";
import { Field, reduxForm } from 'redux-form';
import renderField from "./renderField";
import validate from './validate';


const renderError = ({ meta: { touched, error } }) =>
    touched && error ? <span style={{color:'red'}}>{error}</span> : false

const SecondPage = (props, values) => {
    const { handleSubmit, previousPage, reset } = props
   
    return (
        <form className="ui  form container"
            onSubmit={handleSubmit}
            style={{ position: 'relative', top: '30px' }}>
            <div className="ui  segment">
            <h2 className="ui center aligned teal  header">Bank Details</h2>
                <label className="inline fields"><b>Select account type*</b></label>
                <div className="inline fields">
                    <label className="field">
                        <Field name="accountType" component="input" type="radio" value="individual" />{' '}
                        Individual
                    </label>
                    <label className="field">
                        <Field name="accountType" component="input" type="radio" value="corporate" />{' '}
                        Corporate
                    </label>
                    <Field name="accountType" component={renderError} />
                </div>
                <div className="four wide field" >
                    <Field
                        name="pan"
                        type="text"
                        component={renderField}
                        label="PAN No.*"
                        placeholder="PAN No."
                        style={{textTransform:'uppercase'}}
                        
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
                        <Field name="nationality" component={renderError} />
                    </div>
                    <Field
                        name="profession"
                        type="text"
                        component={renderField}
                        label="Profession*"
                        placeholder="Profession"
                        style={{textTransform:'capitalize'}}
                    />
                    <Field
                        name="netWorth"
                        type="number"
                        component={renderField}
                        label="Net-Worth*"
                        placeholder="Net Worth"
                    />
                </div>
                <label className="fields"><b>Bank Details</b></label>
                <div className="fields">
                    <div className="field">
                        <Field
                            name="ifscCode"
                            type="text"
                            component={renderField}
                            label="IFSC Code*"
                            placeholder="IFSC Code"
                            style={{textTransform:'uppercase'}}
                        />
                    </div>
                    <div className="field">
                        <Field
                            name="accountNo"
                            type="number"
                            component={renderField}
                            label="Account Number*"
                            placeholder="Accoun Number"
                        />
                    </div>
                    <div className="field">
                        <Field
                            name="accountName"
                            type="text"
                            component={renderField}
                            label="Account Holder Name*"
                            placeholder="Account Holder Name"
                            style={{textTransform:'capitalize'}}
                        />
                    </div>
                </div>
                <br></br>
                <button type="button" className="ui primary button" onClick={previousPage}> Previous</button>
                <button onClick={reset} className="ui primary  floated button" type="reset" >Reset</button>

                <button type="submit" className="ui primary right floated button" >Next</button>
            </div>
        </form>
    );
}

export default reduxForm({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
})(SecondPage);