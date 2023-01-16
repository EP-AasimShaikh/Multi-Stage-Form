import React from "react";

const renderField = ({ input,style, label,placeholder, type, meta:{ touched, error} }) => {
    return(
        <div className="field" >
            <label>{label}</label>
            <div>
                <input {...input } placeholder={placeholder} type={type} style={style} />
                {touched && error && <div className="ui pointing red basic label">{error}</div>}
            </div>
        </div>
    );
}

export default renderField;