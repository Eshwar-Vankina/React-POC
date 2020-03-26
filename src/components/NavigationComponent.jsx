import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './NavigationStyles.scss';
import { Link } from 'react-router-dom';


class Navigation extends Component {
    state = {}
    render() {

        console.log(window.location.pathname);
        // debugger;
        if (window.location.pathname.includes('/login') || window.location.pathname.includes('/signup')) {   
            return <div></div>;
        }
        else{

            return (
                <React.Fragment>
                    <header>
                        <nav className="navbar navbar-expand-sm bg-dark navbar-dark ">
                            <ul className="navlinks">

                                <li>
                                    <Link to="/" className="tags"> Home </Link>
                                </li>

                            </ul>
                            <div className="buttons">
                                <Link to="/signup">
                                    <button className="b">Signup</button>
                                </Link>
                                <Link to="/login">
                                    <button className="b">Login </button>
                                </Link>
                            </div>
                        </nav>
                    </header>


                </React.Fragment>);
        }
    }
}

export default Navigation;