import React from "react";
import {  FieldArray, reduxForm } from 'redux-form';
import renderMembers from "./renderMembers";
import validate from '../validateNominee/validate';

const FourthPage = (props) => {
    const { handleSubmit, pristine, previousPage } = props
    function calltime(){
        document.getElementById("myBtn").disabled = false
    }
    const handle= ()=>{
        
        if(window.percentage===100){
            document.getElementById("myBtn").disabled = false;
        }else{
            document.getElementById("myBtn").disabled = true;
            alert("Total allocaton between nominees should be equal to 100%")
            setTimeout(calltime,3000);
        }
        
    }
    return (
        <form className="ui  form container"
            onSubmit={handleSubmit}
            style={{ position: 'relative', top: '30px' }}
        >
            <FieldArray name="nominee" component={renderMembers} />

            <div className="ui  segment">

                <br></br>
                <button type="button" className="ui primary button" onClick={previousPage}>Previous</button>
                <button type="submit" id="myBtn" className="ui primary right floated button" onClick={handle}>Next</button>
            </div>

        </form>
    );
}

export default reduxForm({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
})(FourthPage);