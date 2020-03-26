import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import './Login.scss';
import Input  from './Input';
import {Formik, Form} from 'formik';

class Login extends Component {

     
    handleLogin = e => {
        e.preventDefault();
    }

    handleChange = e => {
        const account = {...this.state.account};
        // debugger;
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({account});



        let errors = this.state.errors;
        // let name = e.currentTarget.name;
        // let value = e.currentTarget.value;

        const {name, value} = e.currentTarget;

        const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

        switch(name) {
            case 'username' :
                errors.username = value.length < 5
                ? 'User name must have minimum 5 characters long!'
                : '';
                break;

                case 'password' : 
                errors.password = value.length< 8 
                ? 'password must have 8 characters long !'
                : '';
                break;

                default:
                break;

        }
            this.setState({errors, [name] : value}, () => {
            console.log(errors);
        })
    }


    state = {
        account: {username : '', password: ''},
        errors:{
            username:'',
            password:''
        }
      }

    render() { 
        return ( 

            <div className="body">
                <h1>Login</h1>
                <br/>
                <form onSubmit={this.handleLogin}>

                        <Input
                         autoFocus
                         name="username"
                         value={this.state.account.username}
                         Label="Username"
                         Type="text"
                         onChange={this.handleChange}
                         />

                        <Input
                         autoFocus
                         name="password"
                         value={this.state.account.password}
                         Label="Password"
                         Type="password"
                         onChange={this.handleChange}
                         />
                
                

                    <button className="btn btn-primary" >Login</button>
                </form>
            </div>
         );
    }
}
 
export default Login;