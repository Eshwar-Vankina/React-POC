import React, { Component } from 'react';


const Input = ({name, Label, value, onChange, Type, errors}) => {
    return (  
        <div className="form-group textfield">
        <label htmlFor={name}>{Label}</label>

        <input
         autoFocus
         value={value}
         onChange={ (e) =>onChange(e) }
         name={name}
         id={name} 
         type={Type} 
         className="form-control"
         />
        {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
    );
}
 
export default Input;