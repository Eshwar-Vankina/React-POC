import React, { Component } from 'react';
import Input  from '../Login/Input';
import './SignUp.scss'

class SignUp extends Component {




    handleChange = (e) =>
    {
        const registration = {...this.state.registration};
        registration[e.currentTarget.name] = e.currentTarget.value;
        this.setState({registration});

        let errors = this.state.formErrors;
        let name = e.currentTarget.name;
        let value = e.currentTarget.value;

        switch(name) {
            case 'firstName':
                errors.firstName = value.length < 9
                ? 'Required !'
                : '';
            break;

            case 'lastName' : 
                errors.lastName = value.length < 1
                ? "Required !"
                : '';
            break;
        
        }

        this.setState({errors, [name] : value} , () =>{
            console.log(errors)
        }) 
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
            re_password:""
        },

        formErrors : {
            firstName:"",
            lastName:"",
            mobile:"",
            email:"",
            address:"",
            city:"",
            state:"",
            pin:"",
            password:"",
            re_password:""

        }
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
                        />

                        <Input
                            name="lastName"
                            value={this.state.registration.lastName}
                            Label="Last Name"
                            Type="text"
                            onChange={this.handleChange}
                        />

                        <Input
                            name="mobile"
                            value={this.state.registration.mobile}
                            Label="Mobile"
                            Type="number"
                            onChange={this.handleChange}
                        />  

                        <Input
                            name="email"
                            value={this.state.registration.email}
                            Label="Email"
                            Type="email"
                            onChange={this.handleChange}
                        />

                        <Input
                            name="password"
                            value={this.state.registration.password}
                            Label="Password"
                            Type="password"
                            onChange={this.handleChange}
                        />

                        <Input
                            name="re_password"
                            value={this.state.registration.re_password}
                            Label="Confirm Password"
                            Type="password"
                            onChange={this.handleChange}
                        />

                        <Input
                            name="address"
                            value={this.state.registration.address}
                            Label="Address"
                            Type="text"
                            onChange={this.handleChange}
                        />

                        <Input
                            className="sm-box"
                            name="city"
                            value={this.state.registration.city}
                            Label="City"
                            Type="text"
                            onChange={this.handleChange}
                        />

                        <Input
                            name="state"
                            value={this.state.registration.state}
                            Label="State"
                            Type="text"
                            onChange={this.handleChange}
                        />

                        <Input
                            name="pin"
                            value={this.state.registration.pin}
                            Label="Pin Code"
                            Type="number"
                            onChange={this.handleChange}
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