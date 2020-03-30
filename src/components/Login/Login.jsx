import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import './Login.scss';
import Input  from './Input';
import Joi from 'joi-browser';

class Login extends Component {

     
    handleLogin = e => {
        e.preventDefault();

        // debugger;

        const errors = this.validate();

        this.setState({errors : errors || {} });
        // console.log(errors);

    }

    validate = () => {
        var result = Joi.validate(this.state.account, this.schema, {
            abortEarly : false 
        });

        if (!result.error) return null ;

        const errors = {};
        for (let item of result.error.details)
        errors[item.path[0]] = item.message;

        // console.log(result.error.details);

        return errors ;

    }

    handleChange = e => {
        const account = {...this.state.account};
        // debugger;
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({account});

    }

    schema = {
        email : Joi.string().email().required().label("Email"),
        password : Joi.string().required().label("Password"),
        
    }


    state = {
        account: {email : '', password: ''},
        errors : {}

      }

    render() { 
        return ( 

            <div className="body">
                <h1>Login</h1>
                <br/>
                <form onSubmit={this.handleLogin}>

                        <Input
                         autoFocus
                         name="email"
                         value={this.state.account.email}
                         Label="Email"
                         Type="text"
                         onChange={this.handleChange}
                         errors={this.state.errors.email}
                         />

                        <Input
                         autoFocus
                         name="password"
                         value={this.state.account.password}
                         Label="Password"
                         Type="password"
                         onChange={this.handleChange}
                         errors={this.state.errors.password}
                         />
                
                

                    <button className="btn btn-primary" >Login</button>
                </form>
            </div>
         );
    }
}
 
export default Login;