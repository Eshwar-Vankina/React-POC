import React, { Component } from 'react';
import Input  from '../Login/Input';
import './SignUp.scss'
import { Joi } from 'joi-browser';

class SignUp extends Component {




    handleChange = (e) =>
    {
        const registration = {...this.state.registration};
        registration[e.currentTarget.name] = e.currentTarget.value;
        this.setState({registration});

        // let name = e.currentTarget.name;
        // let value = e.currentTarget.value;
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const errors = this.validate();
         this.setState({errors : errors || {} });

    }

    validate = () => {
        var result = Joi.validate(this.state.registration, this.schema, {
            abortEarly : false 
        });

        if(!result.error) return null; 
        const errors = {};
        for ( let item of result.error.details)
            errors[item.path[0]] = item.message;

            return errors;
        
    }


    state = {  
        registration : {
            firstName:"",
            lastName:"",
            mobile:"",
            email:"",
            address:"",
            city:"",
            state:"",
            pin:"",
            password:"",
            // re_password:""
        },
        errors : {}
        
    }


        schema = {
            firstName : Joi.string().required().label("firstName"),
            lastName : Joi.string().required().label("lastName"),
            mobile: Joi.number().integer().min(9).max(11).required().label("Mobile") ,
            email : Joi.string().email().required().label('Email'),
            password : Joi.string().required().label('Password'),
            address : Joi.stirng().min(10).max(30).required().label("Address"),
            city : Joi.string().max(10).required().label("City"),
            state : Joi.stirng().max(10).required().label("State"),
            pin : Joi.numberic().min(5).max(7).required().label('Pin Code')

        }
   
    render() { 
        return (  
            <React.Fragment>
                <div className="body">
                    <h1> Registration </h1>
                    <br/>
                    <form onSubmit={this.handleSubmit}>
                        <Input
                            name="firstName"
                            value={this.state.registration.firstName}
                            Label="First Name"
                            Type="text"
                            onChange={this.handleChange}
                            error = {this.state.errors.firstName}
                        />

                        <Input
                            name="lastName"
                            value={this.state.registration.lastName}
                            Label="Last Name"
                            Type="text"
                            onChange={this.handleChange}
                            error = {this.state.errors.lastName}
                        />

                        <Input
                            name="mobile"
                            value={this.state.registration.mobile}
                            Label="Mobile"
                            Type="number"
                            onChange={this.handleChange}
                            error = {this.state.errors.mobile}
                        />  

                        <Input
                            name="email"
                            value={this.state.registration.email}
                            Label="Email"
                            Type="email"
                            onChange={this.handleChange}
                            error = {this.state.errors.email}
                        />

                        <Input
                            name="password"
                            value={this.state.registration.password}
                            Label="Password"
                            Type="password"
                            onChange={this.handleChange}
                            error = {this.state.errors.password}
                        />

                        {/* <Input
                            name="re_password"
                            value={this.state.registration.re_password}
                            Label="Confirm Password"
                            Type="password"
                            onChange={this.handleChange}
                        /> */}

                        <Input
                            name="address"
                            value={this.state.registration.address}
                            Label="Address"
                            Type="text"
                            onChange={this.handleChange}
                            error = {this.state.errors.address}
                        />

                        <Input
                            className="sm-box"
                            name="city"
                            value={this.state.registration.city}
                            Label="City"
                            Type="text"
                            onChange={this.handleChange}
                            error = {this.state.errors.city}
                        />

                        <Input
                            name="state"
                            value={this.state.registration.state}
                            Label="State"
                            Type="text"
                            onChange={this.handleChange}
                            error = {this.state.errors.state}
                        />

                        <Input
                            name="pin"
                            value={this.state.registration.pin}
                            Label="Pin Code"
                            Type="number"
                            onChange={this.handleChange}
                            error = {this.state.errors.pin}
                        />

                        <br/>
                        <button className="btn btn-primary" >Submit</button>

                    </form>

                </div>
                
            </React.Fragment>
        );
    }
}
 
export default SignUp;