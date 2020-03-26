import React, { Component } from 'react';

const Input = ({name, Label, value, onChange, Type}) => {
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
    </div>
    );
}
 
export default Input;