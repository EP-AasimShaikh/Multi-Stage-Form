import React from "react";

const renderData = ({ input,style, label, type, meta: { touched, error } }) => {
    return (
        <div className="field" >
            <label>{label}</label>
            <div>
                <input {...input} placeholder={label} type={type} style={style} readOnly />
               
            </div>
        </div>
    );
}

export default renderData;